import java.util.ArrayList;


public class Ship {
	private ArrayList<int[]> coordinates;
	private int length;
	private int orientation;
	
	public Ship(ArrayList<int[]> coords) {
		this.coordinates = coords;
		this.length = coords.size();
		
		if (this.coordinates.size() == 1) {
			this.orientation = 0; //one square ship, orientation irrelavent
		} else if (this.coordinates.get(0)[0] == this.coordinates.get(1)[0]) {
			this.orientation = 1; //horizontal
		} else if (this.coordinates.get(0)[1] == this.coordinates.get(1)[1]) {
			this.orientation = 2; //vertical
		}
	}
	
	public boolean isSunk(int[][] system) {
		for (int i = 0; i < coordinates.size(); i++) {
			if(system[coordinates.get(i)[0]][coordinates.get(i)[1]] == 1) {
				return false;
			}
		}
		return true;
	}
	
	public ArrayList<int[]> getCoords() {
		return coordinates;
	}
	public void setCoords(ArrayList<int[]> coords) {
		this.coordinates = coords;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	public int getOrientation() {
		return orientation;
	}
	public void setOrientation(int orientation) {
		this.orientation = orientation;
	}
	
	
	
}
