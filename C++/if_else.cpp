#include <iostream>
using namespace std;

bool isMale = true;
bool isTall = false;

int getMax(int num1, int num2){
    int result;
    if(num1 > num2){
        result = num1;
        cout<<result<< endl;
    }
    else if(num2 > num1){
        result = num2;
        cout << result << endl;
    }
    else if(num1 == num2){
        cout<< "The numbers are the same" <<endl;
    }

}

int main(){
if(isMale && isTall){
    cout<< "Yes, it is a tall male"<<endl;
}
else if(isMale){
    cout<<"He is a male, but not tall"<<endl;
}
else if(isTall){
    cout<<"The person is tall, but not a male."<<endl;
}
else{
    cout<<"The person is neither tall nor a male."<<endl;
}

getMax(-3,-2);


return 0;

}