#include <stdio.h>

int main() {
    int n, r = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        int p, v, t;
        scanf("%d %d %d", &p, &v, &t);  // correct format
        if (p + v + t >= 2) {
            r++;
        }
    }
    printf("%d\n", r);
    return 0;
}
