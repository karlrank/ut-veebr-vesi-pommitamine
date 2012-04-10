import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;


@WebServlet("/addPerson")
public class AddPerson extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		if (userPush == null) {
			userPush = new UserPushService(people);
			Thread userPushThread = new Thread(userPush);
			userPushThread.setDaemon(true);
			userPushThread.start();
		}
		if (lobbyPush == null) {
			lobbyPush = new LobbyPushService(games);
			Thread lobbyPushThread = new Thread(lobbyPush);
			lobbyPushThread.setDaemon(true);
			lobbyPushThread.start();
		}
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		String name = req.getParameter("name");
		Person person = new Person(name);
		System.out.println("addPerson doPost: " + person);
		people.add(person);
		session.setAttribute("person", person);		
		
		userPush.update();
		connectDB();
		java.sql.PreparedStatement ps = null;
		ResultSet rs;
		try {
			ps = connection.prepareStatement("SELECT * FROM test.user WHERE name=\"" + person.getName() + "\";");
			rs = ps.executeQuery();

			if(!rs.next() && !rs.next()) {
				ps = connection.prepareStatement("INSERT INTO test.user (Name, Games_Played, Won, Lost, Raiting) VALUES(\""+person.getName()+"\", 0, 0, 0, 1000);");
				ps.execute();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
