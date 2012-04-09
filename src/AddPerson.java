import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/addPerson")
public class AddPerson extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		HttpSession session = req.getSession();
		String name = req.getParameter("name");
		Person person = new Person(name);

		people.add(person);
		session.setAttribute("person", person);
		
		Cookie nameCookie = new Cookie("name", name);
		nameCookie.setMaxAge(-1);
		resp.addCookie(nameCookie);
	}
}
