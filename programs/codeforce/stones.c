#include<stdio.h>
int main()
{
    int n;
    char str[100];
    scanf("%d",&n);
    scanf("%s",str);
    int i=0,len=0;
    while(str[i]!='\0')
    {
        len++;
        i++;
    
    }
    int count=0;
    for(int j=0;j<len;j++)
    {
        if(str[j]==str[j+1])
        {
            count++;
        }

    }
    printf("%d",count);
}