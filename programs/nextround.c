#include<stdio.h>
int main()
{
    int n,k;
    int c=0;
    scanf("%d%d",&n,&k);
    
    int arr[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    
    }
    int p=arr[k-1];
    for(int i=0;i<n;i++)
    {
        if(arr[i]>=p&&arr[i]>0)
        {
            c++;
        }
    }
    printf("%d",c);

}