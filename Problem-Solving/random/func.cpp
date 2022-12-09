#include<bits/stdc++.h>
using namespace std;

// double f(double x){
//     double m = 4 * x + 1;
//     double n = 4 * x - 1;
//     return (m / n);
// }

double f(double x){
    return (1 / x);
}
double ff(double x){
    double m = f(x) + 1;
    double n = f(x) - 1;
    return (m / n);
}
int main(){
    // cout << f(-1) << endl;
    // cout << f(.5) << endl;

    cout << ff(-45) << endl;
}
