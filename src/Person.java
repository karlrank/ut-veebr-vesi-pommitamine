
public class Person {
	static int idBase = 0;
	int id;
	private String name;
	private boolean inGame;
	private Game game;
	
	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	Person (String name) {
		this.name = name;
		inGame = false;
		id = ++idBase;
	}
	
	public boolean isInGame() {
		return inGame;
	}
	
	public void toggleInGame() {
		inGame = !inGame;
	}
	
	public String getName() {
		return name;
	}
	
	public String toString() {
		return "Person: " + name;
	}
}
