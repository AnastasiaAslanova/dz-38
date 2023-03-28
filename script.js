/*Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’}
(role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне
 поле, яке введено некоректно. У класі User повинні бути такі компоненти:
getName
getRole
login
logout
сhangeName
changePassword
У класі Admin повинні бути такі компоненти:
 addUser
removeUser
changeUserRole
getAllUsers
removeAllUsers
 */

class User {
    constructor(name, role) {
        if (name && (role !== 'admin' || role !== 'user')) {
            alert(`User is not found. Register!`);
        }
        this.name = name;
        this.role = role;
    }

    getName () {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {

    }
    logout() {

    }

    changeName(newName) {
        this.name = newName;
    }
    changePassword(newPassword) {
        // this.password = newPassword;
    }
}

class Admin extends User {
    constructor(name) {
        super(name, 'admin');
        this.users = [];
    }
    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
        } else {
            alert('Invalid data for adding a user');
        }
    }
    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    changeUserRole (user,newRole) {
        if (user instanceof User && (newRole === 'admin' || newRole ==='user')) {
            user.role = newRole;
        } else {
            alert('Invalide data for charging user role!');
        }
    }
    getUsers() {
        return this.users;
    }
    removeAllUsers() {
        this.users =[];
    }
}