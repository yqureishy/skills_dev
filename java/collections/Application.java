package collections;

import java.util.List;

public class Application {

    public static void main(String[] args) {
        int numAccounts = 10;

        List<Account> accounts = Account.createAccounts(numAccounts);
        for (int i = 0; i < numAccounts; i++) {
            System.out.println(accounts.get(i));
        }
    }
    
}
