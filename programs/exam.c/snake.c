#include <stdio.h>
#include <conio.h>   // for getch() and kbhit()
#include <windows.h> // for Sleep()
#include <stdlib.h>  // for rand()

#define WIDTH 20
#define HEIGHT 10
#define MAX_SNAKE 100

int snakeX[MAX_SNAKE], snakeY[MAX_SNAKE];
int length = 3;
int foodX, foodY;
char direction = 'd'; // initial direction: right
int gameOver = 0;

void setup() {
    // Initialize snake in the middle
    snakeX[0] = 10; snakeY[0] = 5;
    snakeX[1] = 9;  snakeY[1] = 5;
    snakeX[2] = 8;  snakeY[2] = 5;

    foodX = rand() % WIDTH;
    foodY = rand() % HEIGHT;
}

void draw() {
    system("cls");
    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            int printed = 0;

            // Print snake
            for (int i = 0; i < length; i++) {
                if (snakeX[i] == x && snakeY[i] == y) {
                    printf(i == 0 ? "O" : "o");
                    printed = 1;
                    break;
                }
            }

            // Print food
            if (!printed && x == foodX && y == foodY) {
                printf("*");
                printed = 1;
            }

            if (!printed)
                printf(".");
        }
        printf("\n");
    }
    printf("Score: %d\n", length - 3);
}

void input() {
    if (_kbhit()) {
        char key = _getch();
        if (key == 'w' || key == 'a' || key == 's' || key == 'd')
            direction = key;
    }
}

void logic() {
    // Move body
    for (int i = length - 1; i > 0; i--) {
        snakeX[i] = snakeX[i - 1];
        snakeY[i] = snakeY[i - 1];
    }

    // Move head
    switch (direction) {
        case 'w': snakeY[0]--; break;
        case 's': snakeY[0]++; break;
        case 'a': snakeX[0]--; break;
        case 'd': snakeX[0]++; break;
    }

    // Collision with wall
    if (snakeX[0] < 0 || snakeX[0] >= WIDTH || snakeY[0] < 0 || snakeY[0] >= HEIGHT)
        gameOver = 1;

    // Collision with self
    for (int i = 1; i < length; i++) {
        if (snakeX[0] == snakeX[i] && snakeY[0] == snakeY[i])
            gameOver = 1;
    }

    // Eat food
    if (snakeX[0] == foodX && snakeY[0] == foodY) {
        length++;
        foodX = rand() % WIDTH;
        foodY = rand() % HEIGHT;
    }
}

int main() {
    setup();
    while (!gameOver) {
        draw();
        input();
        logic();
        Sleep(200); // milliseconds
    }
    printf("Game Over! Final Score: %d\n", length - 3);
    return 0;
}
