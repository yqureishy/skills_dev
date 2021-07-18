#include <iostream>
using namespace std;

void sayHi(){
        cout<<"Hey there!"<<endl;
    }

void sayHello(string name){
    cout<<"Hello there "<< name<<endl;
}

double squared(double num){
    double result = num * num;
    return result;
}

int mynumbers [] = {3,7,13,21,27};
string names [] = {"Younus", "Manal", "Mikael"};

int main(){
    
    cout<<mynumbers[0]<<endl;
    cout<<names[0]<<endl;

    sayHi();

    sayHello("Younus");

    int answer = squared(7);
    cout<<answer<<endl;

    return 0;
}