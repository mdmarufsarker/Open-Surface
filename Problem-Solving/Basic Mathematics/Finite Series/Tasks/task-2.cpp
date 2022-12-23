// Platform: Open Surface
// Author  : Md. Maruf Sarker
// Date    : 23-12-2022 12:00:00 PM
/*
Problem Statement:
Given a series: a + x + y + z + n5 + ...... Find out the value of x, y, z.
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int a;
    cout << "Enter the value of a: ";
    cin >> a;

    int n5;
    cout << "Enter the value of n5: ";
    cin >> n5;

    int r = n5 / a;

    // calculate the prime number from 1 to 100
    for(int i = 2; i <= 100; i++){
        int count = 0;
        for(int j = 1; j <= i; j++){
            if(i % j == 0){
                count++;
            }
            if((j ^ 4) == r) r = j;
        }
        if(count == 2)
            if((2 ^ 4) == r) r = 2;
    }

    int x, y, z;
    x = a * r;
    y = a * r * r;
    z = a * r * r * r;

    cout << "The value of x, y, z is: " << x << ", " << y << ", " << z << endl;

}