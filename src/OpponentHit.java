import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.concurrent.BlockingQueue;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/oppHit")
public class OpponentHit extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		System.out.println("Alustasime opphitti");
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		PrintWriter writer = resp.getWriter();
		
		try {
			BlockingQueue<String> q = person.getIncomingMessages();
			writer.print(q.take());
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
		
		System.out.println("Äkki isegi lõpetame - Alustasime opphitti");
	}
}
