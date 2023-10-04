import java.util.Random;
import java.util.Scanner;

public class Demo4 {
    public static void main(String[] args) {
        Random rand = new Random();
        int A =rand.nextInt(2) ; // 0 - sc, 1 - rock, 2 - paper
        System.out.println(A);
        Scanner sc = new Scanner(System.in);
        int B = sc.nextInt();
        System.out.println(B);
        if (A==B){
            System.out.println("Draw");
        } else if (A< B) {
            System.out.println("you win");
        } else {
            System.out.println("you lose");
        }
    }
}
