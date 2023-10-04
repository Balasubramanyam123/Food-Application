import java.util.Random;

public class Demo3 {
    public static void main(String[] args) {
        Random rand = new Random();
        int A=rand.nextInt(11)+1;
        switch (A){
            case 1:
                System.out.println("january");
                break;
            case 2:
                System.out.println("feb");
                break;
            case 3:
                System.out.println("mar");
                break;
        }
    }
}
