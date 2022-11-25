'use strict';

class Contact{
    constructor(_name, _city, _email) {
        this.name = _name;
        this.city = _city;
        this.email = _email;
    }

    get getName() {
        return this.name;
    }

    get getCity() {
        return this.city;
    }

    get getEmail() {
        return this.email;
    }
}

export default Contact;
