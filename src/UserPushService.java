import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.AsyncContext;


class UserPushService implements Runnable {

    protected boolean running = true;
    protected final Boolean update = true;
    protected final ArrayList<AsyncContext> listeners = new ArrayList<AsyncContext>();
    private ArrayList<Person> people;
    
    protected final ArrayList<String> messages = new ArrayList<String>();
    
    public UserPushService(ArrayList<Person> people) {
    	this.people = people;
    }
	
    
    public synchronized void addConnection(AsyncContext ctx){
        listeners.add(ctx);
        System.out.println("Listener added, no. listeners: " +  listeners.size());
        notify();
    }
    
    public void update() {
        synchronized (messages) {
        	messages.add("lolwut");
            messages.notify();
        }
    }
    
    private String usersHTML() {
    	String out = "";
		
    	out += "<h4>Users</h4>";
    	for (int i = 0; i < people.size(); i++) {
    		out += people.get(i).getName() + "<br />\n";
		}
    	return out;
    }
    
    public void run() {
        while (running) {
        	System.out.println("UserPushService cycle started.");
        	
        	if (listeners.size() == 0){
                try{
                    synchronized(this){
                        wait();
                    }
                } catch (InterruptedException e){
                    // Ignore
                }
            }
        	
        	try {
                synchronized (messages) {
                    messages.wait();
                }
            } catch (InterruptedException e) {
            }
        	
        	
            try {                
                PrintWriter writer;
                for (int i = 0; i < listeners.size(); i++) {
                	System.out.println("Usr Response sent");
                	System.out.println("Listeners lenght: " + listeners.size());
                	writer = listeners.get(i).getResponse().getWriter();
                	writer.println(usersHTML());
                	writer.flush();
                	writer.close();
                	listeners.get(i).complete();
                }
                
                listeners.clear();
                
                
            } catch (IOException e) {
            	System.out.println("IOExeption sending message" + e);
            }
            System.out.println("UserPushService cycle finished.");
        }
    }
}