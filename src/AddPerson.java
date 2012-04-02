import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/add")
public class AddPerson extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String name = req.getParameter("name");
		people.add(new Person(name));
		req.setAttribute("somename", people);
		Cookie nameCookie = new Cookie("name", name);
		nameCookie.setMaxAge(-1);
		resp.addCookie(nameCookie);
	}
}
