import java.util.*;
class prg
{
    public static void main()
    {
        int n;
        System.out.println("enter a number");
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print("*");

            }
            System.out.println("");
        }

    }

}