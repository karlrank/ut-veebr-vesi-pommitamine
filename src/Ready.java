import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/ready")
public class Ready extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		Game game = person.getGame();
		PrintWriter writer = resp.getWriter();
		System.out.println("Ready funct: " + game.getTurn() + " Persoon " + person.getId());
		if(!game.isGameon()) {
			writer.print("0");
			return;
		}
		
		if (game.getTurn() == person.getId()) {
			writer.print("1");
		}
		else {
			writer.print("0");
		}
	}
}
