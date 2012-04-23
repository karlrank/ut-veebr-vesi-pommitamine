import javax.servlet.http.HttpServlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

public class BaseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	//Database constants
	private static final String DB_DRIVER = "com.mysql.jdbc.Driver";
	private static final String DB_URL = "jdbc:mysql://localhost";
	private static final String DB_UID = "root";
	private static final String DB_PASSWORD = "root";
	
	//DB Connection
	protected static Connection connection;
	
	//Data lists
	protected static ArrayList<Person> people = new ArrayList<Person>();
	protected static ArrayList<Game> games = new ArrayList<Game>();
	
	//Update services
	protected static UserPushService userPush;
	protected static LobbyPushService lobbyPush;

    public BaseServlet() {
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
    
	static void connectDB() {
		try {
			if (connection == null || connection.isClosed()) {
				Class.forName(DB_DRIVER);
				connection = DriverManager.getConnection(DB_URL, DB_UID, DB_PASSWORD);
			}
		} catch (SQLException sx) {
			System.out.println(sx);
		} catch (ClassNotFoundException cx) {
			System.out.println(cx);
		}
    }
    
}
