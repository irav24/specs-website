#include<stdio.h>
#include<string.h>
int main()
{
struct employeedetails
{
    int id;
    char name[50];
    char desig[50];
    struct doj
    {
        int day,month,year;
    };
    struct dob
    {
        int day1,month1,year1;
    };
    struct address
    {
        int hno;
        char city[50];
        char district[50];
        char state[50];
        int pincode;
    };
    struct salary
    {
        int basic,da,hra;
        
    };
};
struct employeedetails employee[60];
int n;
printf("number of employees");
scanf("%d",&n);
for(int i=0;i<n;i++)
{
    printf("enter name");
    fgets(employee[i].name,sizeof(employee[i].name),stdin);

}
for(int i=0;i<n;i++)
{
    printf("name :%s",employee[i].name);
}
}