// Written by: Md. Maruf Sarker
// Platform: Open Surface
// Problem: Somantor Dhara
// Language: cpp
// Date: 2022-12-09

#include <bits/stdc++.h>
using namespace std;

int read(){static int x; cin >> x; return x;}

void nthNumber(int a, int d, int n) {
    int ans = a + (n - 1) * d;
    cout << "The " << n << "th number is: " << ans << endl;
}

int main() {
    cout << "Enter the value of n: ";
    int n = read();
    int arr[10] = {2, -5, -12, -19};
    int a = arr[0];
    int d = arr[1] - arr[0];

    nthNumber(a, d, n);
    return 0;
}