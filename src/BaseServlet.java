import javax.servlet.http.HttpServlet;
import java.util.ArrayList;

public class BaseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected static ArrayList<Person> people = new ArrayList<Person>();
	protected static ArrayList<Game> games = new ArrayList<Game>();
       

    public BaseServlet() {
    }
}
