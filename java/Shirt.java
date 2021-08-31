public class Shirt {
    public String color;
    public char size;

    Shirt() {
    }

    Shirt(String color, char size) {
        this.color = color;
        this.size = size;
    }

    public static void putOn() {
        System.out.print("Shirt is on");
    }

    public static void takeOff() {
        System.out.println("Shirt is off");
    }

    public void setColor(String newColor) {
        this.color = newColor;
    }

    public void setSize(char newSize) {
        this.size = newSize;
    }
}