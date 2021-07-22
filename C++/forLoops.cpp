#include <iostream>
using namespace std;

int main(){

int index = 0;
while(index < 5){
    cout<< index<<endl;
    index++;
}

int myArray[] = {3, 7, 11, 13, 17};
string names[] = {"Younus", "Manal", "Abdullah", "Suleman", "Hakim"};

for(int i = 0; i <= 4; i++){
    cout << myArray[i] << endl;
    cout << names[i] << endl;
}

    return 0;
}