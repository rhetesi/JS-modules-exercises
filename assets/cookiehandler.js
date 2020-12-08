'use strict';

const cookieHandler = {
    setCookie(name, value, expirationMin = 60, path = '/') {
        const now = new Date();
        now.setMinutes(now.getMinutes() + expirationMin);
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    },
    getCookie(name) {
        const keyValuePairs = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}=`))
        return keyValuePairs ? keyValuePairs.split('=')[1] : '';
    },
    checkCookie(name) {
        const exists = cookieHandler.getCookie(name);
        return exists ? true : false;
    },
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
};
