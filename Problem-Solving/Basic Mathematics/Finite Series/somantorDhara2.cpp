// Written by: Md. Maruf Sarker
// Platform: Open Surface
// Problem: Somantor Dhara
// Language: cpp
// Date: 2022-12-09

#include <bits/stdc++.h>
using namespace std;

int read(){static int x; cin >> x; return x;}

int main() {
    cout << "Enter the nth index value: ";
    int n = read();
    int r = 0;
    // int arr[10] = {4, 7, 10, 13};
    cout << "Enter the size of the array: ";
    int size = read();
    int arr[size];
    cout << "Enter the array elements: ";
    for (int i = 0; i < size; i++) cin >> arr[i];
    int a = arr[0];
    int d = arr[1] - arr[0];

// a+(r-1)d = n
// a+rd-d=n
// rd=n+d-a
// r=(n+d-a)/d

    r = (n + d - a) / d;

    cout << "The " << r << "'th value is: " << n << endl;
    return 0;
}

// Enter the nth index value: 392
// Enter the size of the array: 4
// Enter the array elements: 8 11 14 17
// The 129'th value is: 392