#include <iostream>
using namespace std;


class Book {
    public:
    string Title;
    string Author;
    int Pages;
    Book(string title, string author, int pages){

        Title = title;
        Author = author;
        Pages = pages;
       
    }

    Book(){

    };
};

int main(){

    Book book1("Harry Potter and the Goblet of Fire", "J.K Rowling", 567 );

    Book book2("Angels and Demons", "Dan Brown", 426);

    Book book3;
    book3.Title = "The Da Vinci Code";

    cout << book1.Title << endl;
    cout << book2.Title << endl;
    cout << book3.Title << endl;
    cout << book3.Author << endl;



    return 0;
}