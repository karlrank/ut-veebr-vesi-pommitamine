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

	@Override
	public void init(ServletConfig config) throws ServletException {
		if (userPush == null) {
			userPush = new UserPushService(people);
			Thread userPushThread = new Thread(userPush);
			userPushThread.setDaemon(true);
			userPushThread.start();
		}
		if (lobbyPush == null) {
			lobbyPush = new LobbyPushService(games);
			Thread lobbyPushThread = new Thread(lobbyPush);
			lobbyPushThread.setDaemon(true);
			lobbyPushThread.start();
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
				System.out.println("People doGet");
		        AsyncContext async = request.startAsync(request, response);
		        async.setTimeout(0);
		        userPush.addConnection(async);
		    }
}