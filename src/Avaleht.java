

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/index.html")
public class Avaleht extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// genereeri stringijupp, mis eristab seda sisselogimiskatset teistest
		String state = String.valueOf(Math.random());
		request.getSession().setAttribute("FBState", state);
		
		// pane paika veel mõned andmed, mida JSP lehel kasutada
		request.setAttribute("FBRedirect", FBConstants.REDIRECT_URI);
		request.setAttribute("FBAppID", FBConstants.APP_ID);
		
		// esita sisselogimisleht JSP abil
		request.getRequestDispatcher("WEB-INF/Avaleht.jsp").forward(request, response);
	}

}
