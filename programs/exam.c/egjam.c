#include<stdio.h>
#include<string.h>
int main()
{
    int i=0,c=0,length;
    char str[50];
    printf("enter name:");
    gets(str);
    while(str[i]!='\0')

    {
        if((str[i]>='A'&& str[i]<='Z')||(str[i]>='a'&&str[i]<='z'))
        {
        c++;
        }
        i++;
        
    }
    length=c;
    printf("%s\n",str);
    printf("%d",length);
}