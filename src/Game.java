public class Game {
	private Person owner;
	private String name;
	
	public Game(Person owner, String name) {
		super();
		this.owner = owner;
		this.name = name;
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
	
	
}
