#include <iostream>
using namespace std;

int main(){

int age = 28;
double gpa = 3.34;
double *pGpa = &gpa;
string name = "Younus";
string *pName = &name;

cout << &age <<endl;
cout << pGpa << endl;
cout << pName;

    return 0;
}