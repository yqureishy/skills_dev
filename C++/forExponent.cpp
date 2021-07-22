#include <iostream>
using namespace std;

int Expo(int base, int power){
    int ans = 1;
    for(int i=0; i < power; i++){
        ans = ans * base;
    };

    return ans;
}

int main(){

cout << Expo(3,3) << endl;
cout << Expo(4,5) << endl;

    return 0;
}