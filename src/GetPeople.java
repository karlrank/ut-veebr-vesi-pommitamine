import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/getPeople")
public class GetPeople extends BaseServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String name = "";
		PrintWriter writer = resp.getWriter();
		writer.println("<h4>Users</h4>");
		
		Cookie[] cookies = req.getCookies();//Determine the name of the user
		if (cookies != null) {
			for (int i = 0; i < cookies.length; i++) {
				if ("name".equals(cookies[i].getName())) {
					name = cookies[i].getValue();
				}
			}
		}
		
		for (int i = 0; i < people.size(); i++) {
			if (name.equals(people.get(i).getName()) ) {
				writer.println("<span class=\"logged\">" + people.get(i).getName() + "</span><br />");
			}
			else {
			writer.println(people.get(i).getName() + "<br />");
			}
		}
	}
}