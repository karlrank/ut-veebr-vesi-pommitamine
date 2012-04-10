import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class Person {
	static int idBase = 0;
	int id;
	private String name;
	private boolean inGame;
	private Game game;
	private BlockingQueue<String> incomingMessages = new ArrayBlockingQueue<String>(10);;

	public BlockingQueue<String> getIncomingMessages() {
		return incomingMessages;
	}

	public void setIncomingMessages(BlockingQueue<String> incomingMessages) {
		this.incomingMessages = incomingMessages;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setInGame(boolean inGame) {
		this.inGame = inGame;
	}

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
