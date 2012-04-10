import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/lobbyTemp")
public class LobbyTemp extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		PrintWriter writer = resp.getWriter();
		writer.println("<table><tr><th>Game Name</th><th>Game Owner</th><th>Join</th></tr>");		
		
		
		for (int i = 0; i < games.size(); i++) {
			if (games.get(i).getOpponent() == null) {
			writer.println("<tr><td>" + games.get(i).getName() + "</td><td>" + games.get(i).getOwner().getName() + "</td><td><a href=\"javascript:joinGame(" + games.get(i).getId() + ")\">Join</a></td></tr>");
			}
		}
		writer.println("</table>");
	}
}
