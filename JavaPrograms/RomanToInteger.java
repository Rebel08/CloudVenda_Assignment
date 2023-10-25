

import java.util.*;

public class RomanToInteger {

    public static int convertRomanToInteger(String roman) {
        int intVal = 0;
        int preVal = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char currentCharacter = roman.charAt(i);
            int currVal = 0;

            switch (currentCharacter) {
                case'I':
                    currVal = 1;
                    break;
                case'V':
                    currVal = 5;
                    break;
                case'X':
                    currVal = 10;
                    break;
                case'L':
                    currVal = 50;
                    break;
                case'C':
                    currVal = 100;
                    break;
                case'D':
                    currVal = 500;
                    break;
                case'M':
                    currVal = 1000;
                    break;
            }
            if (currVal < preVal) {
                intVal -= currVal;
            } else {
                intVal += currVal;
            }

            preVal = currVal;
        }

        return intVal;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a Roman number: ");
        String romanNumber = scanner.nextLine();
        int intVal = convertRomanToInteger(romanNumber);

        System.out.println("The integer value of the Roman numeral is: " + intVal);
    }
}