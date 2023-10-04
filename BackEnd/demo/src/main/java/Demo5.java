import java.util.Scanner;

public class Demo5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A=sc.nextInt();
        if (A%5 ==0 && A%6==0){
            System.out.println("True");
        }else System.out.println("false");

        if (A%5 ==0 || A%6==0){
            System.out.println("True");
        }else System.out.println("false");
        if (A%5 ==0 || A%6==0 && A%5 ==0 && !(A%6==0 && A%5==0)){
            System.out.println("True");
        }else System.out.println("false");
    }
}
