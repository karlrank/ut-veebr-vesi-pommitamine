import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/addResults")
public class AddResults extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		int winlose = Integer.parseInt(req.getParameter("winlose"));
		
		connectDB();
		java.sql.PreparedStatement ps = null;
		
		if (winlose == 1) {
			try {
				ps = connection.prepareStatement("UPDATE test.user SET Games_Played = (Games_Played + 1), Rating = (Rating * 1.05), Won = (Won + 1) WHERE Name = '" + person.getName() + "';");
				ps.execute();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		else if (winlose == 2) {
			try {
				ps = connection.prepareStatement("UPDATE test.user SET Games_Played = (Games_Played + 1), Rating = (Rating * 0.95), Lost = (Lost + 1) WHERE Name = '" + person.getName() + "';");
				ps.execute();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		
		
	}
}
