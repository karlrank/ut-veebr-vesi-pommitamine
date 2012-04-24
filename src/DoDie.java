import java.io.IOException;

import javax.servlet.AsyncContext;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/die")
public class DoDie extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void destroy() {
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
			
		HttpSession session = request.getSession();
		Person person = (Person) session.getAttribute("person");
		
		removePerson(person.getId());
		removeGameByPerson(person.getId());
		
	}
}