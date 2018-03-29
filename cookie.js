class Cookie {

    items = [];

    constructor() {
        let cookies = document.cookie;
        this.items = cookies.split('; ');
    }

    itemsToCookie() {
        let str = '';
        for(let i=0;i<this.items.length;i++) {
            str += this.items[i] + '; ';
        }
        return str;
    }

    set(name, value, expires, path, domain, secure) {
        let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if(expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }

        if(path) {
            cookieText += '; path=' + path;
        }

        if(domain) {
            cookieText += '; domain=' + domain;
        }

        if(secure) {
            cookieText += '; secure';
        }

        return document.cookie = cookieText;
    }

    get(name) {
        let cookieObj = {};
        this.items.forEach(item=> {
            let obj = item.split('=');
            const [name, value] = [obj[0], obj[1]];
            cookieObj[name] = value;
        });
        return cookieObj[name];
    }

    remove(name) {
        this.set(name, null, '-1');
    }

}

export const cookie = new Cookie();
