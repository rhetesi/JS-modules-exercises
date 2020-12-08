'use strict';

const cookieToSessionStorage = {
    getCookie(name) {
        return cookieHandler.getCookie(name);
        //console.log(cookieHandler.getCookie(name));
    },
    toSStorage(name, value) {
        sessionStorage.setItem(name, value);
    },
    delCookie(name) {
        cookieHandler.deleteCookie(name);
    },
    moveToSession(name) {
        const value = this.getCookie(name);
        this.delCookie(name);
        this.toSStorage(name, value);
    },
};
