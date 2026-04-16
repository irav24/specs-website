#include<stdio.h>
int main()
{
    int n;
    printf("enter order of matrix");
    scanf("%d",&n);
    int arr[n][n];
    printf("enter matrix elements");
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            scanf("%d",&arr[i][j]);

        }
    }
    
}