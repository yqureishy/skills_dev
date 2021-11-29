const properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'password',
        hidden: true
    }
];

export default class Account {
    constructor(name, address, phoneNumber, userId, password, deposit) {

        this.name = name
        this.address = address
        this.phoneNumber = phoneNumber
        this.userId = userId
        this.password = password
        this.deposit = deposit
    }
}

// module.exports = Account;