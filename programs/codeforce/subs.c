#include<stdio.h>
int main()
{
 int n,k;
 scanf("%d%d",&n,&k);
 int num=n;
 if(n<10)
 {
    for(int i=0;i<k;i++)
    {
        num--;
    }
    printf("%d",num);
 }
 else{
for(int i=0;i<k;i++)
{
    
 int d=num%10;
 if(d==0)
 {
    num=num/10;
 }
 else{
    num=num-1;
 }
}
printf("%d",num);
}
}