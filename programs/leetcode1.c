#include<stdio.h>
int main()
{
int n,num,tar;
printf("enter number of elements");
scanf("%d",&n);
int arr[n];
printf("enter the elements\n");
for(int i=0;i<n;i++)
{
    scanf("%d",&arr[i]);
}
printf("enter the target");
scanf("%d",&tar);
for(int i=0;i<n;i++)
{
    for(int j=i+1;j<n;j++)
    {
        if((arr[i]+arr[j])==tar)
            {printf("%d,%d",i,j);}
            
    }
    printf("\n");
}
}