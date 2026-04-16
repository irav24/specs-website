#include<stdio.h>
int main()
{
    int k,n,w;
    scanf("%d%d%d",&k,&n,&w);
    int cost=0;
    for(int i=0;i<w;i++)
    {
        cost=cost+(k*(i+1));

    }
    if(cost>n)
    {
    int borr=cost-n;
    printf("%d",borr);
    }
    else{
        printf("0");
    }
}