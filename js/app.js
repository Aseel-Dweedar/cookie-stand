'use strict';

// General function

function cusomersCounter(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// seattle city ................................................................................

let seattle = {
  cityName: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookies: 6.3,
  customersPerHour: cusomersCounter(23, 65),
  cookiesPurchased: function() {
    let cookiesPurchased = this.customersPerHour * this.averageCookies;
    cookiesPurchased = Math.ceil(cookiesPurchased);
    return cookiesPurchased;
  },
  amHour: function() {
    let amAll = [];
    for (let i = 6; i < 12; i++) {
      let customersAm = cusomersCounter(23, 65);
      let msgAm = `${i}am: ${customersAm} cookies`;
      amAll.push(msgAm);
    }
    return amAll;
  },

  hour12: cusomersCounter(23, 65),

  pmHour: function() {
    let pmAll = [];
    for (let i = 1; i < 8; i++) {
      let customersPm = cusomersCounter(23, 65);
      let msgPm = `${i}pm: ${customersPm} cookies`;
      pmAll.push(msgPm);
    }
    return pmAll;
  },
  renderSeattleAm: function() {
    let arrAmAll = this.amHour();
    let luSeattle = document.getElementById('SalesSeattle');
    for (let i = 0; i < arrAmAll.length; i++) {
      let liSeattleAm = document.createElement('li');
      liSeattleAm.textContent = arrAmAll[i];
      luSeattle.appendChild(liSeattleAm);
    }
  },
  renderSeattle12: function() {
    let luSeattle = document.getElementById('SalesSeattle');
    let liSeattle12 = document.createElement('li');
    liSeattle12.textContent = `12pm: ${this.hour12} cookies`;
    luSeattle.appendChild(liSeattle12);
  },
  renderSeattlePm: function() {
    let arrPmAll = this.pmHour();
    let luSeattle = document.getElementById('SalesSeattle');
    for (let i = 0; i < arrPmAll.length; i++) {
      let liSeattlePm = document.createElement('li');
      liSeattlePm.textContent = arrPmAll[i];
      luSeattle.appendChild(liSeattlePm);
    }
  },
};

let seattleResults = [seattle.cityName, seattle.minHourlyCustomers, seattle.maxHourlyCustomers, seattle.averageCookies, seattle.customersPerHour, seattle.cookiesPurchased()];

function renderSeattle() {
  let luElement = document.getElementById('citySeattle');
  for (let i = 0; i < seattleResults.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = seattleResults[i];
    luElement.appendChild(liElement);
  }
}
renderSeattle();
seattle.renderSeattleAm();
seattle.renderSeattle12();
seattle.renderSeattlePm();

// Tokyo city ................................................................................

let tokyo = {
  cityName: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookies: 1.2,
  customersPerHour: cusomersCounter(3, 24),
  cookiesPurchased: function() {
    let cookiesPurchased = this.customersPerHour * this.averageCookies;
    cookiesPurchased = Math.ceil(cookiesPurchased);
    return cookiesPurchased;
  },
  amHour: function() {
    let amAll = [];
    for (let i = 6; i < 12; i++) {
      let customersAm = cusomersCounter(3, 24);
      let msgAm = `${i}am: ${customersAm} cookies`;
      amAll.push(msgAm);
    }
    return amAll;
  },

  hour12: cusomersCounter(3, 24),

  pmHour: function() {
    let pmAll = [];
    for (let i = 1; i < 8; i++) {
      let customersPm = cusomersCounter(3, 24);
      let msgPm = `${i}pm: ${customersPm} cookies`;
      pmAll.push(msgPm);
    }
    return pmAll;
  },
  renderTokyoAm: function() {
    let arrAmAll = this.amHour();
    let luTokyo = document.getElementById('SalesTokyo');
    for (let i = 0; i < arrAmAll.length; i++) {
      let liTokyoAm = document.createElement('li');
      liTokyoAm.textContent = arrAmAll[i];
      luTokyo.appendChild(liTokyoAm);
    }
  },
  renderTokyo12: function() {
    let luTokyo = document.getElementById('SalesTokyo');
    let liTokyo12 = document.createElement('li');
    liTokyo12.textContent = `12pm: ${this.hour12} cookies`;
    luTokyo.appendChild(liTokyo12);
  },
  renderTokyoPm: function() {
    let arrPmAll = this.pmHour();
    let luTokyo = document.getElementById('SalesTokyo');
    for (let i = 0; i < arrPmAll.length; i++) {
      let liTokyoPm = document.createElement('li');
      liTokyoPm.textContent = arrPmAll[i];
      luTokyo.appendChild(liTokyoPm);
    }
  },
};

let tokyoResults = [tokyo.cityName, tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers, tokyo.averageCookies, tokyo.customersPerHour, tokyo.cookiesPurchased()];

function renderTokyo() {
  let luElement = document.getElementById('cityTokyo');
  for (let i = 0; i < tokyoResults.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = tokyoResults[i];
    luElement.appendChild(liElement);
  }
}
renderTokyo();
tokyo.renderTokyoAm();
tokyo.renderTokyo12();
tokyo.renderTokyoPm();

// Dubai city ................................................................................

let dubai = {
  cityName: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookies: 3.7,
  customersPerHour: cusomersCounter(11, 38),
  cookiesPurchased: function() {
    let cookiesPurchased = this.customersPerHour * this.averageCookies;
    cookiesPurchased = Math.ceil(cookiesPurchased);
    return cookiesPurchased;
  },
  amHour: function() {
    let amAll = [];
    for (let i = 6; i < 12; i++) {
      let customersAm = cusomersCounter(11, 38);
      let msgAm = `${i}am: ${customersAm} cookies`;
      amAll.push(msgAm);
    }
    return amAll;
  },

  hour12: cusomersCounter(11, 38),

  pmHour: function() {
    let pmAll = [];
    for (let i = 1; i < 8; i++) {
      let customersPm = cusomersCounter(11, 38);
      let msgPm = `${i}pm: ${customersPm} cookies`;
      pmAll.push(msgPm);
    }
    return pmAll;
  },
  renderDubaiAm: function() {
    let arrAmAll = this.amHour();
    let luDubai = document.getElementById('SalesDubai');
    for (let i = 0; i < arrAmAll.length; i++) {
      let liDubai = document.createElement('li');
      liDubai.textContent = arrAmAll[i];
      luDubai.appendChild(liDubai);
    }
  },
  renderDubai12: function() {
    let luDubai = document.getElementById('SalesDubai');
    let liDubai12 = document.createElement('li');
    liDubai12.textContent = `12pm: ${this.hour12} cookies`;
    luDubai.appendChild(liDubai12);
  },
  renderDubaiPm: function() {
    let arrPmAll = this.pmHour();
    let luDubai = document.getElementById('SalesDubai');
    for (let i = 0; i < arrPmAll.length; i++) {
      let liDubaiPm = document.createElement('li');
      liDubaiPm.textContent = arrPmAll[i];
      luDubai.appendChild(liDubaiPm);
    }
  },
};

let dubaiResults = [dubai.cityName, dubai.minHourlyCustomers, dubai.maxHourlyCustomers, dubai.averageCookies, dubai.customersPerHour, dubai.cookiesPurchased()];

function renderDubai() {
  let luElement = document.getElementById('cityDubai');
  for (let i = 0; i < dubaiResults.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = dubaiResults[i];
    luElement.appendChild(liElement);
  }
}
renderDubai();
dubai.renderDubaiAm();
dubai.renderDubai12();
dubai.renderDubaiPm();


// Paris city ................................................................................

let paris = {
  cityName: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookies: 2.3,
  customersPerHour: cusomersCounter(20, 38),
  cookiesPurchased: function() {
    let cookiesPurchased = this.customersPerHour * this.averageCookies;
    cookiesPurchased = Math.ceil(cookiesPurchased);
    return cookiesPurchased;
  },
  amHour: function() {
    let amAll = [];
    for (let i = 6; i < 12; i++) {
      let customersAm = cusomersCounter(20, 38);
      let msgAm = `${i}am: ${customersAm} cookies`;
      amAll.push(msgAm);
    }
    return amAll;
  },

  hour12: cusomersCounter(20, 38),

  pmHour: function() {
    let pmAll = [];
    for (let i = 1; i < 8; i++) {
      let customersPm = cusomersCounter(20, 38);
      let msgPm = `${i}pm: ${customersPm} cookies`;
      pmAll.push(msgPm);
    }
    return pmAll;
  },
  renderParisAm: function() {
    let arrAmAll = this.amHour();
    let luParis = document.getElementById('SalesParis');
    for (let i = 0; i < arrAmAll.length; i++) {
      let liParis = document.createElement('li');
      liParis.textContent = arrAmAll[i];
      luParis.appendChild(liParis);
    }
  },
  renderParis12: function() {
    let luParis = document.getElementById('SalesParis');
    let liParis12 = document.createElement('li');
    liParis12.textContent = `12pm: ${this.hour12} cookies`;
    luParis.appendChild(liParis12);
  },
  renderParisPm: function() {
    let arrPmAll = this.pmHour();
    let luParis = document.getElementById('SalesParis');
    for (let i = 0; i < arrPmAll.length; i++) {
      let liParisPm = document.createElement('li');
      liParisPm.textContent = arrPmAll[i];
      luParis.appendChild(liParisPm);
    }
  },
};

let parisResults = [paris.cityName, paris.minHourlyCustomers, paris.maxHourlyCustomers, paris.averageCookies, paris.customersPerHour, paris.cookiesPurchased()];

function renderParis() {
  let luElement = document.getElementById('cityParis');
  for (let i = 0; i < parisResults.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = parisResults[i];
    luElement.appendChild(liElement);
  }
}
renderParis();
paris.renderParisAm();
paris.renderParis12();
paris.renderParisPm();

// Lima city ................................................................................

let lima = {
  cityName: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookies: 4.6,
  customersPerHour: cusomersCounter(2, 16),
  cookiesPurchased: function() {
    let cookiesPurchased = this.customersPerHour * this.averageCookies;
    cookiesPurchased = Math.ceil(cookiesPurchased);
    return cookiesPurchased;
  },
  amHour: function() {
    let amAll = [];
    for (let i = 6; i < 12; i++) {
      let customersAm = cusomersCounter(2, 16);
      let msgAm = `${i}am: ${customersAm} cookies`;
      amAll.push(msgAm);
    }
    return amAll;
  },

  hour12: cusomersCounter(2, 16),

  pmHour: function() {
    let pmAll = [];
    for (let i = 1; i < 8; i++) {
      let customersPm = cusomersCounter(2, 16);
      let msgPm = `${i}pm: ${customersPm} cookies`;
      pmAll.push(msgPm);
    }
    return pmAll;
  },
  renderLimaAm: function() {
    let arrAmAll = this.amHour();
    let luLima = document.getElementById('SalesLima');
    for (let i = 0; i < arrAmAll.length; i++) {
      let liLimaAm = document.createElement('li');
      liLimaAm.textContent = arrAmAll[i];
      luLima.appendChild(liLimaAm);
    }
  },
  renderLima12: function() {
    let luLima = document.getElementById('SalesLima');
    let liLima12 = document.createElement('li');
    liLima12.textContent = `12pm: ${this.hour12} cookies`;
    luLima.appendChild(liLima12);
  },
  renderLimaPm: function() {
    let arrPmAll = this.pmHour();
    let luLima = document.getElementById('SalesLima');
    for (let i = 0; i < arrPmAll.length; i++) {
      let liLimaPm = document.createElement('li');
      liLimaPm.textContent = arrPmAll[i];
      luLima.appendChild(liLimaPm);
    }
  },
};

let limaResults = [lima.cityName, lima.minHourlyCustomers, lima.maxHourlyCustomers, lima.averageCookies, lima.customersPerHour, lima.cookiesPurchased()];

function renderLima() {
  let luElement = document.getElementById('cityLima');
  for (let i = 0; i < limaResults.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = limaResults[i];
    luElement.appendChild(liElement);
  }
}
renderLima();
lima.renderLimaAm();
lima.renderLima12();
lima.renderLimaPm();
