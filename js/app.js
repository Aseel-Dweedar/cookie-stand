'use strict';

// General function ................................................................................

function cusomersCounter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// seattle city ................................................................................

let seattle = {
    cityName: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookies: 6.3,
    customersPerHour: [],
    cookiesPurchased: [],
    totalCookies: 0,

    getCustomersPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
            this.customersPerHour.push(customers);
        }
    },
    getCookiesPurchased: function() {
        for (let i = 0; i < hours.length; i++) {
            let cookies = this.customersPerHour[i] * this.averageCookies;
            cookies = Math.ceil(cookies);
            this.cookiesPurchased.push(cookies);
            this.totalCookies = this.totalCookies + cookies;
        }
    },

    render: function() {
        let names = document.getElementById('citySeattle');
        names.textContent = this.cityName;

        let title = document.getElementById('SalesSeattle');
        for (let i = 0; i < hours.length; i++) {
            let listCont = document.createElement('li');
            listCont.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
            title.appendChild(listCont);
        }

        let totalCont = document.createElement('li');
        totalCont.textContent = `Total: ${this.totalCookies} cookies`;
        title.appendChild(totalCont);
    },
};

// Tokyo city ................................................................................

let tokyo = {
    cityName: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookies: 1.2,
    customersPerHour: [],
    cookiesPurchased: [],
    totalCookies: 0,

    getCustomersPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
            this.customersPerHour.push(customers);
        }
    },
    getCookiesPurchased: function() {
        for (let i = 0; i < hours.length; i++) {
            let cookies = this.customersPerHour[i] * this.averageCookies;
            cookies = Math.ceil(cookies);
            this.cookiesPurchased.push(cookies);
            this.totalCookies = this.totalCookies + cookies;
        }
    },

    render: function() {
        let names = document.getElementById('cityTokyo');
        names.textContent = this.cityName;

        let title = document.getElementById('SalesTokyo');
        for (let i = 0; i < hours.length; i++) {
            let listCont = document.createElement('li');
            listCont.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
            title.appendChild(listCont);
        }

        let totalCont = document.createElement('li');
        totalCont.textContent = `Total: ${this.totalCookies} cookies`;
        title.appendChild(totalCont);
    },
};

// Dubai city ................................................................................

let dubai = {
    cityName: 'Dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookies: 3.7,
    customersPerHour: [],
    cookiesPurchased: [],
    totalCookies: 0,

    getCustomersPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
            this.customersPerHour.push(customers);
        }
    },
    getCookiesPurchased: function() {
        for (let i = 0; i < hours.length; i++) {
            let cookies = this.customersPerHour[i] * this.averageCookies;
            cookies = Math.ceil(cookies);
            this.cookiesPurchased.push(cookies);
            this.totalCookies = this.totalCookies + cookies;
        }
    },

    render: function() {
        let names = document.getElementById('cityDubai');
        names.textContent = this.cityName;

        let title = document.getElementById('SalesDubai');
        for (let i = 0; i < hours.length; i++) {
            let listCont = document.createElement('li');
            listCont.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
            title.appendChild(listCont);
        }

        let totalCont = document.createElement('li');
        totalCont.textContent = `Total: ${this.totalCookies} cookies`;
        title.appendChild(totalCont);
    },
};

// Paris city ................................................................................

let paris = {
    cityName: 'Paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookies: 2.3,
    customersPerHour: [],
    cookiesPurchased: [],
    totalCookies: 0,

    getCustomersPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
            this.customersPerHour.push(customers);
        }
    },
    getCookiesPurchased: function() {
        for (let i = 0; i < hours.length; i++) {
            let cookies = this.customersPerHour[i] * this.averageCookies;
            cookies = Math.ceil(cookies);
            this.cookiesPurchased.push(cookies);
            this.totalCookies = this.totalCookies + cookies;
        }
    },

    render: function() {
        let names = document.getElementById('cityParis');
        names.textContent = this.cityName;

        let title = document.getElementById('SalesParis');
        for (let i = 0; i < hours.length; i++) {
            let listCont = document.createElement('li');
            listCont.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
            title.appendChild(listCont);
        }

        let totalCont = document.createElement('li');
        totalCont.textContent = `Total: ${this.totalCookies} cookies`;
        title.appendChild(totalCont);
    },
};

// Lima city ................................................................................

let lima = {
    cityName: 'Lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookies: 4.6,
    customersPerHour: [],
    cookiesPurchased: [],
    totalCookies: 0,

    getCustomersPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
            this.customersPerHour.push(customers);
        }
    },
    getCookiesPurchased: function() {
        for (let i = 0; i < hours.length; i++) {
            let cookies = this.customersPerHour[i] * this.averageCookies;
            cookies = Math.ceil(cookies);
            this.cookiesPurchased.push(cookies);
            this.totalCookies = this.totalCookies + cookies;
        }
    },

    render: function() {
        let names = document.getElementById('cityLima');
        names.textContent = this.cityName;

        let title = document.getElementById('SalesLima');
        for (let i = 0; i < hours.length; i++) {
            let listCont = document.createElement('li');
            listCont.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
            title.appendChild(listCont);
        }

        let totalCont = document.createElement('li');
        totalCont.textContent = `Total: ${this.totalCookies} cookies`;
        title.appendChild(totalCont);
    },
};


seattle.getCustomersPerHour();
seattle.getCookiesPurchased();
seattle.render();

tokyo.getCustomersPerHour();
tokyo.getCookiesPurchased();
tokyo.render();

dubai.getCustomersPerHour();
dubai.getCookiesPurchased();
dubai.render();

paris.getCustomersPerHour();
paris.getCookiesPurchased();
paris.render();

lima.getCustomersPerHour();
lima.getCookiesPurchased();
lima.render();