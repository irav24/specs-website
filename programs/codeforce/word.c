#include<stdio.h>
int main()
{
    char str[100];
    scanf("%s",str);
    int i=0;
    int len=0;
    while(str[i]!='\0')
    {
        len++;
        i++;
    }
    int upp=0;
    int low=0;
    for(int j=0;j<len;j++)
    {
        if(str[j]>='A'&&str[j]<='Z')
        {
            upp++;
        }
        else
        {
            low++;
        }

    }
    if(upp>low)
    {
        for(int j=0;j<len;j++)
        {
            if(str[j]>='a'&&str[j]<='z')
            {
            str[j]=str[j]-32;
            }

        }
    }
    else{
        for(int j=0;j<len;j++)
        {
            if(str[j]>='A'&&str[j]<='Z')
            {
                str[j]=str[j]+32;

            }
        }
    }
    printf("%s",str);
    
}