#include<stdio.h>
int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int n;
        scanf("%d",&n);
        int a[n],b[n];
        int dec=0,inc=0;
        for(int i=0;i<n;i++)
        {
            scanf("%d",&a[i]);
        }
        for(int i=0;i<n;i++)
        {
            scanf("%d",&b[i]);
        }
        int iter=0;
        for(int i=0;i<n;i++)
        {
            if(a[i]>b[i])
            {
                iter+=(a[i]-b[i]);
            }
        }
        iter+=1;
        printf("%d\n",iter);
    }
}
