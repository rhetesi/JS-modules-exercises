'use strict';

const userHandler = {
    getList() {
        return new Promise((res, rej) => {
            if (localStorage.users) {
                res(JSON.parse(localStorage.users));
            } else {
                fetch('http://localhost:3000/users')
                    .then(response => res(response.json()));
            }
        });
    },


    showList(parent) {
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.users = JSON.stringify(list);
            },
            err => console.error(err)
        );
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
};
