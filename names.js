class Users {
    constructor(name, email, phone, group = "unknown") {
        this.name = name;
        this.email = email;
        this.group = group;
        this.phone = phone;
    }
    toString() {
        return `Name: ${this.name} | Email: ${this.email} | Phone: ${this.phone} | Group: ${this.group}`;
    }
}

names = ["Dima", "Kate", "Avdetiy", "Fatima", "Donnald", "Kylie", "Habib", "Dgasmine", "Suren", "Merssedes", "Drake", "Vasya", "Ivan", "Alexandr", "Margo", "Nataly", "Tyotya Raya"];

function getRandom(n) {
    return Math.floor(Math.random() * n);
}

function getPhoneNumber(n = 10) {
    let number = "";
    if (n === 10) {
        number += "+7(";
        for (let i = 0; i < n; i++) {
            number += getRandom(10);
            if (i === 2) {
                number += ")";
            }
            if (i === 5 || i === 7) {
                number += "-";
            }
        }
    } else {
        for (let i = 0; i <= n; i++) {
            number += getRandom(10);
        }
    }
    return number;
}

let groups = ["Alians", "Horde", "Murlocks"];

function generatePerson() {
    let flag = !!getRandom(2);
    let name = names[getRandom(names.length)];
    let email = name + "@user.ithub.ru";
    let phone = getPhoneNumber();
    let group = groups[getRandom(groups.length)];
    let person = flag
                    ? new Users(name, email, phone, group): new Users(name, email, phone);
    // if (flag) {
    //     person = new Users(name, email, phone, group);
    // } else {
    //     person = new Users(name, email, phone);
    // }

    /* Тернарный оператор
        flag 
            ? person = new Users(name, email, phone, group) 
            : person = new Users(name, email, phone);
    */
    return person;
}

let people = [];

let count = 20; //+prompt("Сколько персон создать?", 10);
for (let i = 0; i < count; i++) {
    people.push(generatePerson());
}

// console.log(people);

let mail = "surnacheva@ithub.ru";
let re = /[0-9a-zA-Zа-яА-ЯёЁ]+@[a-z]{2,}\.[a-zA-Z]{2,3}/;

// let result = mail.search(re);
let result = re.test(mail);
console.log(result);

document.getElementById("search").addEventListener("input", function() {
    let val = new RegExp(this.value);
    console.log(val);
    for (let i = 0; i < people.length; i++) {
        for (let k in people[i]) {
            if (val.test(people[i][k])) {
                let div = document.createElement("div");
                div.innerText = people[i].toString();
                document.body.appendChild(div);
            }
        }
    }
});




