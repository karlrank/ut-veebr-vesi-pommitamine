import java.io.IOException;

import javax.servlet.AsyncContext;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet(name="peopleServlet", urlPatterns={"/people"}, asyncSupported=true)
public class People extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void destroy() {
		
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
				System.out.println("People doGet");
		        AsyncContext async = request.startAsync(request, response);
		        async.setTimeout(0);
		        userPush.addConnection(async);
		    }
}