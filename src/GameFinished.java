import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/gameFinished")
public class GameFinished extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		
		for (int i = 0; i < games.size(); i++) {
			if(games.get(i).getOwner().getId() == person.getId()) {
				games.remove(i);
			}
		}
		
	}
}
