'use strict';

console.log('=================task7=============');

import users from '../users.js';

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalnce, user) => totalBalnce + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
