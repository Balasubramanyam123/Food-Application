import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Demo7 {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
       while (true) {
           int a = sc.nextInt();
           if(a == 0) {
               break;
           }
           arr.add(a);
       }
       int max = arr.get(0);
        for (int i = 1; i < arr.size(); i++) {
            if(arr.get(i) > max) {
                max = arr.get(i);
            }
        }
        System.out.println(max);
        int count = 0;
        for (int i = 0; i < arr.size(); i++) {
            if(arr.get(i) == max){
                count++;
            }
        }
        System.out.println(count);
    }
}
