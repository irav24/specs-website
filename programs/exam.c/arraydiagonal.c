#include<stdio.h>
int main()
{
int m,temp=0;
printf("enter rows and columns");
scanf("%d",&m);
int arr[m][m];
printf("enter matrix elements");
for(int i=0;i<m;i++)
{
    for(int j=0;j<m;j++)
    {
        scanf("%d",&arr[i][j]);

    }
}
for(int i=0;i<m;i++)
{
    for(int j=0;j<m;j++)
    if(i==j)

    {
            temp=arr[i][i];
            arr[i][i]=arr[i][m-1-j];
           arr[i][m-1-j]=temp;

    }
    printf("\n");
}
for(int i=0;i<m;i++)
{
    for(int j=0;j<m;j++)
    {
        printf("%d\n",arr[i][j]);

    }
}
}