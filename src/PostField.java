import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.*;


@WebServlet("/postField")
public class PostField extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)  
			throws ServletException, IOException {
		
		Gson gson = new Gson();
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		
		int[][] field = gson.fromJson(req.getParameter("field"), int[][].class);
		
		if(person.getGame().getOwner().getId() == person.getId()) {
			person.getGame().setOwnField(field);
		}
		else {
			person.getGame().setOppField(field);
		}
		System.out.println(person.getGame());
		
	}
}
