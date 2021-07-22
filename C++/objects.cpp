#include <iostream>
using namespace std;


class Book {
    public:
    string title;
    string author;
    int pages;
};

int main(){

    Book book1;
    book1.title = "Harry Potter and the Goblet of Fire";
    book1.author = "J.K Rowling";
    book1.pages = 567;

    cout << "Book Title:" <<  book1.title << endl;
    cout << "Book Author:" <<  book1.author << endl;
    cout << "Book Pages:" <<  book1.pages << endl;

    return 0;
}