import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/gameFinished")
public class GameFinished extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String name = "";
		Person owner = new Person("nameless");
		Cookie[] cookies = req.getCookies();//Determine the name of the user
		if (cookies != null) {
			for (int i = 0; i < cookies.length; i++) {
				if ("name".equals(cookies[i].getName())) {
					name = cookies[i].getValue();
				}
			}
		}
		
		for (int i = 0; i < people.size(); i++) {
			if(name.equals(people.get(i).getName())) {
				owner = people.get(i);
			}
		}
		
		for (int i = 0; i < games.size(); i++) {
			if (games.get(i).getOwner() == owner) {
				games.remove(i);
			}
		}
	}
}
