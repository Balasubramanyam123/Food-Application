import java.util.Scanner;

public class demo2 {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        double Q;
       double M = sc.nextFloat();
       double finalTemp= sc.nextFloat();
       double initialTemp = sc.nextFloat();
       Q = M * (finalTemp-initialTemp)*4184;
        System.out.println(Q);
    }
}
