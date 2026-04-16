#include<stdio.h>
#include<string.h>
int main()
{
	int n;
	scanf("%d",&n);
	int x=0;
	for(int i=0;i<n;i++)
	{
		
		char str[100];
		scanf("%s",str);
		if((strcmp(str,"++X")==0)||(strcmp(str,"X++")==0))
		{
			x=x+1;
		}
		else{
			x=x-1;
		}
	}
	printf("%d",x);
}