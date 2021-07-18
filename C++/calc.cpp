#include <iostream>
using namespace std;

int main(){

    double num1, num2;
    char op;

    cout<< "Enter a number: ";
    cin>> num1;
    cout << "Enter another number: ";
    cin >> num2;
    cout << "Enter an operator: ";
    cin >> op;

    if(op == '+'){
        cout << num1 + num2;
    }
    else if(op == '-'){
        cout << num1 - num2;
    }
    else if(op == '*'){
        cout << num1 * num2;
    }
    else if(op == '/'){
        cout << num1 / num2;
    }



    return 0;
}