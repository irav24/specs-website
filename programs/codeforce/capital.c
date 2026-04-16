#include<stdio.h>
int main()
{
    char str[1000];
    scanf("%s",str);
    int i=0;
    int l=0;
    while(str[i]!='\0')
    {
        l++;
        i++;
    }
    if(str[0]>='a'&&str[0]<='z')
    {
        str[0]=str[0]-32;
    }
    printf("%s",str);
   
}