public class Game {
	static int baseId;
	private Person owner;
	private Person opponent;
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
	
	
}
