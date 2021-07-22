#include <iostream>
using namespace std;

class Movie {
    private:
        string director;
    public:
        string title;
        double rating;

    Movie(string Title, string Director, double Rating){

        title = Title;
        setDirector(Director);
        rating = Rating;
    }

    void setDirector (string Director){
        director = Director;
    }

    string getDirector(){
        return director;
    }
};

int main(){

    Movie Avengers("The Avengers", "Joss Whedon", 8.2);
    Movie movie1("Harry Potter", "JK Rowling", 4.5);
    Avengers.setDirector("Younus Qureishy");

    cout << Avengers.title << endl;
    cout << Avengers.getDirector() << endl;
    cout << movie1.title << endl;
    cout << movie1.getDirector() << endl;



    return 0;
}