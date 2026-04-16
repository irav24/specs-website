#include<stdio.h>
#include<string.h>
int main()
{
    char str[100];
    int i=0;
    int len=0;
    scanf("%s",str);
    while(str[i]!='\0')
    {
        len++;
        i++;
    }
    for(int k=0;k<len-1;k++)
    {
    for(int j=0;j<len-k-1;j++)
    {
        if(str[j]>='1'&&str[j]<='9')
        {
            if(str[j]>str[j+2])
            {
            char temp=str[j];
            str[j]=str[j+2];
            str[j+2]=temp;
            }

        }
        else
        {
            str[j]='+';
        }
        


    }
}
   
        printf("%s",str);
    
}