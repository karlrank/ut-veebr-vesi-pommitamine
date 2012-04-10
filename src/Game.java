import java.util.ArrayList;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class Game {
	static int baseId;
	private Person owner;
	private Person opponent;
	private ArrayList<Ship> ownerShips;
	private ArrayList<Ship> opponentShips;
	private int turn;
	private boolean gameon = false;
	
	public boolean isGameon() {
		return gameon;
	}

	public void setGameon(boolean gameon) {
		this.gameon = gameon;
	}

	public int getTurn() {
		return turn;
	}

	public void setTurn(int turn) {
		this.turn = turn;
	}

	public ArrayList<Ship> getOwnerShips() {
		return ownerShips;
	}

	public void setOwnerShips(ArrayList<Ship> ownerShips) {
		this.ownerShips = ownerShips;
	}

	public ArrayList<Ship> getOpponentShips() {
		return opponentShips;
	}

	public void setOpponentShips(ArrayList<Ship> opponentShips) {
		this.opponentShips = opponentShips;
	}

	int[][] ownField;
	int[][] oppField;
	int id;
	
	public int[][] getOwnField() {
		return ownField;
	}

	public void setOwnField(int[][] ownField) {
		this.ownField = ownField;
	}

	public int[][] getOppField() {
		return oppField;
	}

	public void setOppField(int[][] oppField) {
		this.oppField = oppField;
	}

	public Person getOpponent() {
		return opponent;
	}

	public void setOpponent(Person opponent) {
		this.opponent = opponent;
	}

	private String name;
	
	public Game(Person owner, String name) {
		super();
		this.owner = owner;
		this.name = name;
		id = ++baseId;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Person getOwner() {
		return owner;
	}
	
	public void setOwner(Person owner) {
		this.owner = owner;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String toString() {
		String out = "";
		out += "Owner" + owner + "\n";
		out += "Opponent" + opponent + "\n";
		out += "Id" + id + "\n";
		
		if(oppField != null && ownField != null) {
			for (int i = 0; i < 10; i++) {
				for (int j = 0; j < 10; j++) {
					out += ownField[i][j];
				}
				out += "\t";
				for (int j = 0; j < 10; j++) {
					out += oppField[i][j];
				}
				out += "\n";
			}		
		}
		else {
			out += "Fuckedup!";
		}
		return out;
	}
	
	
}
