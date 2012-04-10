import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/gameOver")
public class IsGameOver extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		Game game = person.getGame();

		PrintWriter writer = resp.getWriter();
		
		if(!game.isGameon()) {
			writer.print("0");
			return;
		}
		
		if (game.getOwner().getId() == person.getId()) {
			if(game.getOwnerShips().isEmpty()) {
				writer.print("2");
				connectDB();
				
			}
			else if(game.getOpponentShips().isEmpty()) {
				writer.print("1");
			}
			else {
				writer.print("0");
			}
			
		}
		else {
			if(game.getOpponentShips().isEmpty()) {
				writer.print("2");
			}
			else if(game.getOwnerShips().isEmpty()) {
				writer.print("1");
			}
			else {
				writer.print("0");
			}
		}
		
	}
}
