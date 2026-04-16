#include<stdio.h>
int smallest(int n)
{
    int d=0;
    int num=n;
    int min=0;
    int arr[1000];
    int j=0,t=0;
    while(num!=0)
    {
        d=num%10;
        arr[j]=d;
        num=num/10;
        j++;
        t++;

        
        

    }
     min=arr[0];
    for(int i=0;i<t;i++)
    {
        if(arr[i]<min)
        min=arr[i];
    }
 return min;
}
int main()
{
    int test;
    scanf("%d",&test);
    int f;
    int x[1000];
    for(int i=0;i<test;i++)
    {
    
        scanf("%d",&x[i]);
        
        
    }
    for(int i=0;i<test;i++)
    {
        printf("%d\n",smallest(x[i]));
    }
 

}