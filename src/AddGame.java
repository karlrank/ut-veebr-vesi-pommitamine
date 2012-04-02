import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/addGame")
public class AddGame extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String name = req.getParameter("name");
		String ownerName = req.getParameter("user");
		Person owner = new Person("Nameless");
		for (int i = 0; i < people.size(); i++) {
			if (ownerName.equals(people.get(i).getName())) {
				owner = people.get(i);
			}
		}		
		games.add(new Game(owner, name));
	}
}
