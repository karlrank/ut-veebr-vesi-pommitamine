import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/getLobby")
public class GetLobby extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		PrintWriter writer = resp.getWriter();
		writer.println("<table><tr><th>Game Name</th><th>Game Owner</th><th>Join</th></tr>");
		
		for (int i = 0; i < games.size(); i++) {
			writer.println("<tr><td>" + games.get(i).getName() + "</td><td>" + games.get(i).getOwner().getName() + "</td><td>Join</td></tr>");
		}
		writer.println("</table>");
	}
}
