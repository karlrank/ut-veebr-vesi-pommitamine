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
		System.out.println("123");
		
		try {
			Thread.sleep(0);
		}
		catch (Exception e) {
			System.out.println(e);
		}
		
		PrintWriter writer = resp.getWriter();
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		writer.println("<h4>Users</h4>");	
		
		if (person == null) {
			return; 
		}
		
		for (int i = 0; i < people.size(); i++) {
			
			if (people.get(i).getId() == person.getId()) { 
				writer.println("<span class=\"logged\">" + people.get(i).getName() + "</span><br />");
			}
			else {
			writer.println(people.get(i).getName() + "<br />");
			}
		}
	}
}