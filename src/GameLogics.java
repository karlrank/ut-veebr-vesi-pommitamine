import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;


@WebServlet("/game")
public class GameLogics extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		
		HttpSession session = req.getSession();
		Person person = (Person) session.getAttribute("person");
		person = getPerson(person.getId());
		Game game = person.getGame();
		Gson gson = new Gson();
		PrintWriter writer = resp.getWriter();
		int[][] field = new int[10][10];
		int[] coords = gson.fromJson(req.getParameter("coords"), int[].class);
		ArrayList<Ship> ships;
		Person opponent;
		System.out.println("Recieved coords: "+coords[0]+","+coords[1]);
		if (game.getOwner().getId() == person.getId()) {
			field = game.getOppField();
			ships = game.getOpponentShips();
			opponent = game.getOpponent();
		}
		else {
			field = game.getOwnField();
			ships = game.getOwnerShips();
			opponent = game.getOwner();
		}
		
		if (field[coords[0]][coords[1]] == 1) {
			field[coords[0]][coords[1]] = 2;
			
			for (int i = 0; i < ships.size(); i++) {
				if(ships.get(i).isSunk(field)) {
					writer.print(gson.toJson(ships.get(i).getCoords()));
					ships.remove(i);
					try {
						opponent.getIncomingMessages().put(gson.toJson(coords));
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					return;
				}
			}
			try {
				opponent.getIncomingMessages().put(gson.toJson(coords));
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			writer.print("1");
		}
		else if (field[coords[0]][coords[1]] >= 2) {
			writer.print("2");
		}
		else {
			field[coords[0]][coords[1]] = 3;
			game.setTurn(opponent.getId());
			writer.print("0");
		}		
	}
}
