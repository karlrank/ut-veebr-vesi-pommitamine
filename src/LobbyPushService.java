import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.AsyncContext;


class LobbyPushService implements Runnable {

    protected boolean running = true;
    protected final Boolean update = true;
    protected final ArrayList<AsyncContext> listeners = new ArrayList<AsyncContext>();
    private ArrayList<Game> games;
    
    protected final ArrayList<String> messages = new ArrayList<String>();
    
    public LobbyPushService(ArrayList<Game> games) {
    	this.games = games;
    }
	
    
    public synchronized void addConnection(AsyncContext ctx){
        listeners.add(ctx);
        notify();
    }
    
    public void update() {
        synchronized (messages) {
        	System.out.println("LobbyPush updated!");
        	messages.add("lolwut");
            messages.notify();
        }
    }
    
    private String lobbyHTML() {
    	String out = "";
    	out += ("<table><tr><th>Game Name</th><th>Game Owner</th><th>Join</th></tr>");
    	for (int i = 0; i < games.size(); i++) {
			if (games.get(i).getOpponent() == null) {
			out += ("<tr><td>" + games.get(i).getName() + "</td><td>" + games.get(i).getOwner().getName() + "</td><td><a href=\"javascript:joinGame(" + games.get(i).getId() + ")\">Join</a></td></tr>\n");
			}
    	}
		out += "</table>";
    	return out;
    }
    
    public void run() {
        while (running) {
        	System.out.println("LobbyPushService cycle started.");
        	try {
                synchronized (messages) {
                    messages.wait();
                }
            } catch (InterruptedException e) {
            }
        	
        	
            try {
                if (listeners.size() == 0){
                    try{
                        synchronized(this){
                            wait();
                        }
                    } catch (InterruptedException e){
                        // Ignore
                    }
                }
                
                PrintWriter writer;
                for (int i = 0; i < listeners.size(); i++) {
                	System.out.println("Lobby Response sent");
                	System.out.println("Listeners lenght: " + listeners.size());
                	writer = listeners.get(i).getResponse().getWriter();
                	writer.println(lobbyHTML());
                	writer.flush();
                	writer.close();
                	listeners.get(i).complete();
                }
                
                listeners.clear();
                
                
            } catch (IOException e) {
            	System.out.println("IOExeption sending message" + e);
            }
            System.out.println("LobbyPushService cycle finished.");
        }
    }
}