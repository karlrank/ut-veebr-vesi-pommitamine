import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/addGame")
public class AddGame extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		String name = req.getParameter("name");
		
		Game game = new Game(getPerson(person.getId()), name);
		person.setGame(game);
		
		games.add(game);
		session.setAttribute("game", game);
	}
}
