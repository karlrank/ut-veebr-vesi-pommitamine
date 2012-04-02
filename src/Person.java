
public class Person {
	private String name;
	private boolean inGame;
	
	Person (String name) {
		this.name = name;
		inGame = false;
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
