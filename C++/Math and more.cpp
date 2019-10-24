#include <iostream>
#include <string>
#include <cmath> //to use sqrt, round, and log
using namespace std;

int main() {
    cout << max(5, 10) << '\n'; //highest value of 5 and 10
    cout << min(5, 10) << '\n'; //lowest value of 5 and 10
    cout << sqrt(64) << ' ' << round(2.6) << ' ' << log(2) << '\n';
    //abs(x), exp(x), floor(x), pow(x), sin(x), etc.

    int x = 10, y = 9;
    cout << (x > y) << ' ' << (x == 10) << ' ' << (10 == 15) << '\n'; //1 1 0

    if(20 > 18) {
        cout << "20 is greater than 18\n";
    }

    int time = 22;
    if(time < 10) {
        cout << "Good morning.\n";
    } else if(time < 20) {
        cout << "Good day.\n";
    } else {
        cout << "Good Evening.\n";
    }

    //in short hand
    string result = (time < 18) ? "Good day." : "Good Evening.";
    cout << result << '\n';
}
