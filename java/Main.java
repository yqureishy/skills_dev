
class HelloWorld2 {
    public static void main(String[] args) {
        Shirt s = new Shirt("White", 'L');

        System.out.println(s.color);
        System.out.println(s.size);
        Shirt.putOn();
    }
}