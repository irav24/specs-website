#include<stdio.h>
int main()
{
   char str[100];
   scanf("%s",str);
   int i=0;
   int len=0;
   int r=0;
   while(str[i]!='\0')
   {
    
    len++;
    i++;
    }
  for(int j=0;j<len;j++)
  {
    int dup=0;
    for(int k=j+1;k<len;k++)
    {
        if(str[j]==str[k])
        {
        dup=1;
        break;
        }
    }
    if(!dup)
    {
      r++;
    }
  }
 
 if(r%2==0)
 {
  printf("CHAT WITH HER!");
 }
 else
 {
  printf("IGNORE HIM!");
 }

}