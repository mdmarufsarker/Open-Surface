// Platform: Open Surface
// Author  : Md. Maruf Sarker
// Date    : 23-12-2022 12:00:00 PM
/*
Problem Statement:
In an finite series the value of index n is n. Find out the sum of x position. (where x is a odd number)
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout << "Enter the index of n: ";
    cin >> n;

    int value;
    cout << "Enter the value of n: ";
    cin >> value;

    int x;
    cout << "Enter the sum of x position: ";
    cin >> x;

    int sum = 0;
    sum = x * value;

    cout << "The sum of " << x << " position is: " << sum << endl;
}