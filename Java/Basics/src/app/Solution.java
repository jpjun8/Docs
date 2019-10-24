package app;

import java.util.Scanner;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int res = a;
            for(int j=0;j<n;j++) {
                res += (int)(Math.pow(2, j) * b);
                System.out.print(Integer.toString(res) + ' ');
            }
            System.out.println();
        }
        in.close();
    }
}

class DataTypes {

    private static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {

        int n = in.nextInt();
        String arr[] = new String[n];

        in.nextLine();

        for (int i = 0; i < n; i++){
            arr[i] = in.nextLine();
        }

        for (int i = 0; i < n; i++){
            try{
                long l = Long.parseLong(arr[i]);
                System.out.println(arr[i] + " can be fitted in:");

                if(l <= 127 && l >= -128){
                    System.out.println("* byte \n* short \n* int \n* long");
                }else if( l <= 32767 && l >= -32768){
                    System.out.println("* short \n* int \n* long");
                }else if ( l <= 2147483647 && l >= -2147483648){
                    System.out.println("* int \n* long");
                }else if(l <= 9223372036854775807l && l >= -9223372036854775808l){
                    System.out.println("* long");
                }

            }catch (NumberFormatException e){
                System.out.println(arr[i] + " can't be fitted anywhere.");
            }
        }


    }
}

class JavaEnfOfFile {

    private static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        String line, text = "";
        int i = 1;

        while( in.hasNextLine() != false){
            line = in.nextLine();
            text = text + Integer.toString(i) + " " + line +"\n";
            i++;
        }
        System.out.println(text);
    }
}

class StaticInit {
    static int B;
    static int H;
    static boolean flag;

    static {
        B = new Scanner(System.in).nextInt();
        H = new Scanner(System.in).nextInt();
        if (B > 0 && H > 0) {
            flag = true;
        } else {
            System.out.println("java.lang.Exception: Breadth and height must be positive");
            flag = false;
        }
    }

    public static void main(String[] args) {
        if (flag) {
            int area = B * H;
            System.out.print(area);
        }

    }//end of main

}//end of class

//Abstract
abstract class Book{
	String title;
	abstract void setTitle(String s);
	String getTitle(){
		return title;
	}
}

class MyBook extends Book {
    void setTitle(String s) {
        title = s;
    }
}

class Main{
	
	public static void main(String []args){
		//Book new_novel=new Book(); This line prHMain.java:25: error: Book is abstract; cannot be instantiated
		Scanner sc=new Scanner(System.in);
		String title=sc.nextLine();
		MyBook new_novel=new MyBook();
		new_novel.setTitle(title);
		System.out.println("The title is: "+new_novel.getTitle());
      	sc.close();
		
	}
}

