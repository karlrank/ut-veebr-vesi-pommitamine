

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.*;

@WebServlet("/LoginHandler")
public class LoginHandler extends BaseServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// Kontrolli, kas see autentimine algatati ikka selles sessioonis
		String storedState = (String)request.getSession().getAttribute("FBState");
		String offeredState = request.getParameter("state");
		if (storedState == null || offeredState == null || !storedState.equals(offeredState)) {
			// TODO näita vealehekülge
			throw new ServletException("Mingi kahtlane värk state'iga"); 
		}
		
		// Küsi FB-lt kasutaja andmed vastavalt sellele koodile, mis anti parameetriks
		String code = request.getParameter("code");
		String userAccessToken = getUserAccessToken(code);
		String userInfoJSON = getUserInfo(userAccessToken);
		
		request.setAttribute("FBCode", code);
		request.setAttribute("FBUserAccessToken", userAccessToken);
		request.setAttribute("FBUserInfoJSON", userInfoJSON);
		
		Gson gson = new Gson();
		
		FacebookInfo fbi = gson.fromJson(userInfoJSON, FacebookInfo.class);
		
		HttpSession session = request.getSession();
		String name = fbi.getName();
		Person person = new Person(name);
		System.out.println("addPerson doPost: " + person);
		people.add(person);
		session.setAttribute("person", person);
		
		connectDB();
		java.sql.PreparedStatement ps = null;
		ResultSet rs;
		try {
			ps = connection.prepareStatement("SELECT * FROM test.user WHERE name=\"" + person.getName() + "\";");
			rs = ps.executeQuery();

			if(!rs.next() && !rs.next()) {
				ps = connection.prepareStatement("INSERT INTO test.user (Name, Games_Played, Won, Lost, Rating) VALUES(\""+person.getName()+"\", 0, 0, 0, 1000);");
				ps.execute();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		
		request.getRequestDispatcher("battleship.html").forward(request, response);
	}
	
	private String getUserAccessToken(String code) throws IOException {
		// Küsi Facebookilt vastus
		String content = getStringFromUrl("https://graph.facebook.com/oauth/access_token" +
				"?client_id="     + FBConstants.APP_ID + 
				"&redirect_uri="  + FBConstants.REDIRECT_URI + 
				"&client_secret=" + FBConstants.APP_SECRET + 
				"&code="          + code);
		
		// nopi vastusest välja user token
		String[] pairs = content.split("\\&");
	    for (int i = 0; i < pairs.length; i++) {
		    String[] fields = pairs[i].split("=");
		    String name = URLDecoder.decode(fields[0], "UTF-8");
		    String value = URLDecoder.decode(fields[1], "UTF-8");
		    if (name.equals("access_token")) {
		    	return value;
		    }
	    }
	    
		return null;
	}
	
	private String getUserInfo(String userAccessToken) throws IOException {
		return getStringFromUrl("https://graph.facebook.com/me?access_token=" + userAccessToken);
	}
	
	private String getStringFromUrl(String urlString) throws IOException {
		URL url = new URL(urlString);
		
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		try {
			conn.setRequestMethod("GET");
			conn.setDoOutput(true);
			conn.setReadTimeout(10000);
			conn.connect();
			BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			StringBuilder sb = new StringBuilder();
	        String line;
	        while ((line = reader.readLine()) != null)
	        {
	            sb.append(line + '\n');
	        }
	        
	        return sb.toString();
		}
		finally {
			conn.disconnect();
		}
	}
		
}
