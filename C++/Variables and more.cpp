#include <iostream>
#include <string> //must include string lib to use string variable
using namespace std;

int main() {
    //type variable = value;
    const int myNum = 15; //cannot override, unchangeable, read-only
    //myNum = 10;
    cout << "I am " << myNum << " years old.\n";

    int x = 5, y = 6, sum = x + y;
    cout << sum << endl;

    int a, b, sum1;
    cout << "Type a number: ";
    cin >> a;
    cout << "Type another number: ";
    cin >> b;
    sum1 = a + b;
    cout << "Sum is: " << sum1 << endl;

    bool isLifeSucks = true, isLifeJoyful = false; //true returns 1, false 0
    cout << isLifeSucks << ' ' << isLifeJoyful << endl;

    //you can use ASCII values to display certain characters
    char c1 = 65, c2 = 66, c3 = 67;
    cout << c1 << ' ' << c2 << ' ' << c3 << '\n'; //A B C

    string greeting = "Hello!";
    cout << greeting << '\n';
    string firstName = "John ";
    string lastName = "Doe";
    string fullName = firstName + lastName; //how to concat
    //length and accessing certain index
    cout << fullName << ' ' << fullName.length() << ' ' << fullName[0] << '\n';
    fullName[0] = 'K'; cout << fullName << '\n'; //change string characters
    string name;
    cout << "Type your first name: ";
    cin.ignore(); //use this before getline() if error occurs.
    getline(cin, name);
    cout << "Your name is: " << name;

    return 0;
}
