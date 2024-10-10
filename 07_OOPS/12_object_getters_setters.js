let user = {
    _email : "hdfsbibi@gmail.com",
    _password : "1234",

    //underscore ( _ ) shows ki me keys privte property me define krra hu or vo normal users k use me nhi aayegi

    //get ka mtlb memory se leke aao this._email ko
    //yaha humne actual value ko over write krdiya h toUppercase ki help se 
    get email(){
        return `${this._email.toUpperCase()}`
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return `${this._password}hdfsbibi24`
    },

    set password(value){
        this._password = value;
    },
}

const myuser_1 = Object.create(user);



console.log(myuser_1.password); // 1234hdfsbibi24

console.log(myuser_1.email); // HDFSBIBI@GMAIL.COM


