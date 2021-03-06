'use strict';

// General function ................................................................................

function cusomersCounter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const tableOf = document.getElementById('mainTable');
const newBranch = document.getElementById('newBranch');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function headerRender() {

    let hoursTable = document.createElement('tr');
    tableOf.appendChild(hoursTable);

    let cityLocation = document.createElement('th');
    cityLocation.textContent = '';
    hoursTable.appendChild(cityLocation);

    for (let i = 0; i < hours.length; i++) {
        let everyHousr = document.createElement('th');
        everyHousr.textContent = hours[i];
        hoursTable.appendChild(everyHousr);
    }
    let locationTotal = document.createElement('th');
    locationTotal.textContent = 'Daily Location Total';
    hoursTable.appendChild(locationTotal);
}

headerRender();

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


function Cities(cityName, minHourlyCustomers, maxHourlyCustomers, averageCookies) {
    this.cityName = cityName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.averageCookies = averageCookies;
    this.customersPerHour = [];
    this.cookiesPurchased = [];
    this.totalCookies = 0;
    Cities.coocAll.push(this);
}

Cities.coocAll = [];

Cities.prototype.getCustomersPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        let customers = Math.ceil(cusomersCounter(this.minHourlyCustomers, this.maxHourlyCustomers));
        this.customersPerHour.push(customers);
    }
};

Cities.prototype.getCookiesPurchased = function() {
    for (let i = 0; i < hours.length; i++) {
        let cookies = this.customersPerHour[i] * this.averageCookies;
        cookies = Math.ceil(cookies);
        this.cookiesPurchased.push(cookies);
        this.totalCookies = this.totalCookies + cookies;
    }
};

Cities.prototype.render = function() {

    let cityTable = document.createElement('tr');
    tableOf.appendChild(cityTable);

    let nameOf = document.createElement('td');
    nameOf.textContent = this.cityName;
    cityTable.appendChild(nameOf);

    for (let i = 0; i < hours.length; i++) {
        let dailySales = document.createElement('td');
        dailySales.textContent = this.cookiesPurchased[i];
        cityTable.appendChild(dailySales);
    }
    let dailyCookies = document.createElement('td');
    dailyCookies.textContent = this.totalCookies;
    cityTable.appendChild(dailyCookies);
};

let seattle = new Cities('Seattle', 23, 65, 6.3);
let tokyo = new Cities('Tokyo', 3, 24, 1.2);
let dubai = new Cities('Dubai', 11, 38, 3.7);
let paris = new Cities('Paris', 20, 38, 2.3);
let lima = new Cities('Lima', 2, 16, 4.6);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


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

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

newBranch.addEventListener('submit', NewCityForm);

function NewCityForm(event) {
    event.preventDefault();
    const branchName = event.target.branchName.value;
    const min = event.target.min.value;
    const max = event.target.max.value;
    const average = event.target.average.value;

    let newOne = new Cities(branchName, min, max, average);
    let rowCount = tableOf.rows.length;
    tableOf.deleteRow(rowCount - 1);
    newOne.getCustomersPerHour();
    newOne.getCookiesPurchased();
    newOne.render();
    newBranch.reset();
    footerRender();
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

function footerRender() {

    let footTot = document.createElement('tr');
    tableOf.appendChild(footTot);

    let totalWord = document.createElement('td');
    totalWord.textContent = 'Total';
    footTot.appendChild(totalWord);

    let totalDaily = 0;
    for (let i = 0; i < hours.length; i++) {
        let hoursTotal = 0;
        let everyTotal = document.createElement('td');
        for (let j = 0; j < Cities.coocAll.length; j++) {
            hoursTotal += Cities.coocAll[j].cookiesPurchased[i];
            totalDaily += Cities.coocAll[j].cookiesPurchased[i];
        }
        everyTotal.textContent = hoursTotal;
        footTot.appendChild(everyTotal);
    }
    let totalOftotal = document.createElement('td');
    totalOftotal.textContent = totalDaily;
    footTot.appendChild(totalOftotal);
}

footerRender();


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //