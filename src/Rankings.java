import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.PreparedStatement;


@WebServlet("/rankings")
public class Rankings extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		Game game = person.getGame();
		connectDB();
		PrintWriter writer = resp.getWriter();
		
		java.sql.PreparedStatement ps;
		ResultSet rs;
		try
		{	
			String sql = "SELECT * FROM test.user ORDER BY Rating";
			ps = connection.prepareStatement(sql);
			rs = ps.executeQuery();
			writer.println("<table><tr><th>Name</th><th>Played Games</th><th>Win %</th><th>Rating</th></tr>");
			while(rs.next())
			{
				writer.println("<tr><td>"+rs.getString(2)+"</td>");
				writer.println("<td>"+rs.getInt(3)+"</td>");
				writer.println("<td>"+(rs.getFloat(4) / rs.getFloat(3) * 100)+"</td>");
				writer.println("<td>"+rs.getString(6)+"</td></tr>");
			}
			writer.println("</table>");
		}
		catch(SQLException sx)
		{
			//
		}
	}
}
