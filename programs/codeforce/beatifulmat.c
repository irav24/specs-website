#include<stdio.h>
int main()
{
    int arr[5][5];
    int row=0,col=0;
    for(int i=0;i<5;i++)
    {
        for(int j=0;j<5;j++)
        {
        scanf("%d",&arr[i][j]);
        }
    }
    for(int i=0;i<5;i++)
    {
        for(int j=0;j<5;j++)
        {
            if((arr[i][j]==1))
            {
                row=i;
                col=j;
            }
        }
    }
    int n=0;
    while(row<2)
{
    row++;
    n++;

}
while(row>2)
{
    row--;
    n++;
}
while(col<2)
{
    col++;
    n++;
}
while(col>2)
{
    col--;
    n++;

}
printf("%d\n",n);
}
        
