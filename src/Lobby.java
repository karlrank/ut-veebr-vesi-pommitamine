import java.io.IOException;

import javax.servlet.AsyncContext;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet(name="lobbyServlet", urlPatterns={"/lobby"}, asyncSupported=true)
public class Lobby extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void destroy() {
		
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		if (lobbyPush == null) {
			lobbyPush = new LobbyPushService(games);
			Thread lobbyPushThread = new Thread(lobbyPush);
			lobbyPushThread.setDaemon(true);
			lobbyPushThread.start();
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
				System.out.println("Lobby doGet");
		        AsyncContext async = request.startAsync(request, response);
		        async.setTimeout(0);
		        lobbyPush.addConnection(async);
		    }
}