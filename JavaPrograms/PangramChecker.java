import java.util.*;

public class PangramChecker {

    public static boolean isPangram(String string) {
        
        boolean[] mark = new boolean[26];
        int index = 0;
        for (int i = 0; i < string.length(); i++) {
            if ('A' <= string.charAt(i) && string.charAt(i) <= 'Z')
                index = string.charAt(i) - 'A';
            else if ('a' <= string.charAt(i) && string.charAt(i) <= 'z')
                index = string.charAt(i) - 'a';
            else
                continue;
            mark[index] = true;
        }
        for (int i = 0; i <= 25; i++)
            if (mark[i] == false)
                return (false);
        return (true);
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String string = scanner.nextLine();
        if (isPangram(string) == true)
            System.out.print("Enter sentence is a pangram");
        else
            System.out.print("Enter sentence is not a pangram");
    }
}