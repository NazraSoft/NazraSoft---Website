import { Client, Account, ID } from "appwrite";
const client = new Client();
client
    .setEndpoint('http://localhost/v1')
    .setProject('455x34dfkj')

// Register User
const account = new Account(client);
account.create('unique()', 'me@example.com', 'password', 'Jane Doe')
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });