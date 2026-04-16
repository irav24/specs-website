#include<stdio.h>
int palindrome(int n)
{
    int d,num,sum=0;
    num=n;
    while(num!=0)
    {
        d=num%10;
        sum=(sum*10)+d;
        num=num/10;
    }
    if(sum==n)
    return 1;
    else 
    return 0;
    
}
int main()
{
int n;
printf("enter a number :");
scanf("%d",&n);
if(n>0)
{

    if(palindrome(n))
    {
        printf("true");
    
    }
    else
    printf("false");
}
else{
printf("false");
}
}