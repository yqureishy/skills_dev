#include <iostream>
using namespace std;

string getDayOfWeek(int dayNum){
    string day;
    
    switch(dayNum){
        case 1: day = "Saturday";
        break;
        case 2: day = "Sunday";
        break;
        case 3: day = "Monday";
        break;
        case 4: day = "Tuesday";
        break;
        case 5: day = "Wednesday";
        break;
        case 6: day = "Thursday";
        break;
        case 7: day = "Friday";
        break;

        default: 
        day = "Invalid number. Please select a number between 1-7.";
    }

    return day;
}

int main(){

cout << getDayOfWeek(8);
    return 0;
}