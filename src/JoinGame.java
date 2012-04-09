import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/joinGame")
public class JoinGame extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		int gameId = Integer.parseInt(req.getParameter("id"));
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		Game game = getGame(gameId);
		
		game.setOpponent(getPerson(person.getId()));
	}
}
