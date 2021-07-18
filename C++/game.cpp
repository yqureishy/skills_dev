#include <iostream>
using namespace std;

int main(){

    int secretNum = 7;
    int guess;
    int numAttempts = 0;

    while(secretNum != guess){

        cout << "Guess a number between 1-10: ";
        cin >> guess;
        numAttempts++;
        if(numAttempts > 3 && secretNum != guess){
            cout << "Sorry, you have passed your attempt limit.";
            break;
        }
        else if(secretNum == guess){
            cout << "Yes the answer was 7!";
            break;
                }
    }
    
}