#include<stdio.h>
#include<string.h>
int main()
{
    char str1[100];
    char str2[100];
    scanf("%s",str1);
    scanf("%s",str2);
    int len=0;
    int i=0;
    while(str1[i]!='\0')
    {
        len++;
        i++;
     }
 for(int j=0;j<len;j++)
 {
    if(str1[j]>='A'&&str1[j]<='Z')
    {
        str1[j]=str1[j]+32;
    }
 }
  for(int j=0;j<len;j++)
 {
    if(str2[j]>='A'&&str2[j]<='Z')
    {
        str2[j]=str2[j]+32;
    }
}
int res=strcmp(str1,str2);
if(res<0)
{
    printf("-1");

}
else if(res>0)
{
    printf("1");

}
else
{
printf("0");
}
}