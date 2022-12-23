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

    for(int i = 2; i <= 100; i++)
        if(r == i ^ 4){
            r = i;
            break;
        }
    
    int x, y, z;
    x = a * r;
    y = a * r * r;
    z = a * r * r * r;

    cout << "The value of x, y, z is: " << x << ", " << y << ", " << z << endl;

}