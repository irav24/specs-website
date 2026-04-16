#include <stdio.h>
int main() {
    int n, num, d;
    int sum = 0;
    printf("enter a number");
    scanf("%d", &n);
    num = n;
    while (n != 0) {
        d = n % 10;
        sum = sum * 10 + d;
        n = n / 10;
    }
    if (sum == num) {
        printf("true");
    } else {
        printf("false");
    }
}
