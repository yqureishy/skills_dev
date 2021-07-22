#include <iostream>
using namespace std;

class Student {

public:
    string name;
    string major;
    double gpa;
    Student(string aName, string aMajor, double aGpa){
        name = aName;
        major = aMajor;
        gpa = aGpa;
    }

    bool hasHonors(){
        if(gpa >= 3.3){
            return true;
        }
        return false;
    }
};

int main(){

    Student student1("Younus", "Petroleum Engineering", 3.34);
    Student student2("Manal", "Marketing", 3.13);

    
    cout << student1.name << " " << student1.hasHonors() << endl;
    cout << student2.name << " " << student2.hasHonors() << endl;



    return 0;
}