#include<stdio.h>
int wordLen(char word[])
{
    int len=0;
    while(word[len]!='\0')
    {
        len++;
    }
    return len;
}
int main()
{
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        char str[101];
        scanf("%s",str);
        int d=wordLen(str);
        if(d>10)
        {
            printf("%c%d%c\n",str[0],d-2,str[d-1]);
        }
        else
        {
        printf("%s\n",str);
    }
    }
    return 0;
}