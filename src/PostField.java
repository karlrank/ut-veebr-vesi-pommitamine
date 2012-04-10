import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.*;


@WebServlet("/postField")
public class PostField extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	private static ArrayList<Ship> generateShips(int [][] field) {
		int[][] checked = new int[10][10];
		ArrayList<Ship> ships = new ArrayList<Ship>();
		for (int i = 0; i <= 9; i++) {
			for (int j = 0; j <= 9; j++) {
				if (field[i][j] == 1 && checked[i][j] == 0) {
					checked[i][j] = 1;
					ArrayList<int[]> coords = new ArrayList<int[]>();
					coords.add(new int[] {i, j});
					for (int k = 1; k <= 3; k++) {
						if (j + k > 9) {
							break;
						}
						checked[i][j + k] = 1;
						if (field[i][j + k] == 1) {
							coords.add(new int[] {i, j + k});
						} else {
							break;
						}
					}
					for (int k = 1; k <= 3; k++) {
						if (i + k > 9) {
							break;
						}
						checked[i + k][j] = 1;
						if (field[i + k][j] == 1) {
							coords.add(new int[] {i + k, j});
						} else {
							break;
						}
					}
					ships.add(new Ship(coords));
				}
			}
		}
		return ships;
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)  
			throws ServletException, IOException {
		
		Gson gson = new Gson();
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		
		int[][] field = gson.fromJson(req.getParameter("field"), int[][].class);
		
		if(person.getGame().getOwner().getId() == person.getId()) {
			person.getGame().setOwnField(field);
			person.getGame().setOwnerShips(generateShips(field));
		}
		else {
			person.getGame().setOppField(field);
			person.getGame().setOpponentShips(generateShips(field));
		}
		
		if(person.getGame().getOppField() != null && person.getGame().getOwnField() != null) {
			person.getGame().setGameon(true);
			person.getGame().setTurn(person.getGame().getOwner().getId());
		}
		
	}
}
