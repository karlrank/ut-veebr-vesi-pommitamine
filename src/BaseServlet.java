import javax.servlet.http.HttpServlet;
import java.util.ArrayList;

public class BaseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected static ArrayList<Person> people = new ArrayList<Person>();
	protected static ArrayList<Game> games = new ArrayList<Game>();
       

    public BaseServlet() {
    }
    
    static void removePerson(Person person) {
    	for (int i = 0; i < people.size(); i++) {
    		if (people.get(i).getId() == person.getId()) {
    			people.remove(i);
    			break;
    		}
    	}
    }
    
    static Person getPerson(int id) {
    	for (int i = 0; i < people.size(); i++) {
    		if(people.get(i).getId() == id) {
    			return people.get(i);
    		}
    	}
    	return people.get(0);
    }
    
    static Game getGame(int id) {
    	for (int i = 0; i < games.size(); i++) {
    		if(games.get(i).getId() == id) {
    			return games.get(i);
    		}
    	}
    	return games.get(0);
    }
    
}
