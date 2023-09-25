// Connect to the database
require("dotenv").config();
const db = require("./config/database.cjs");

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item.cjs');
// const Category = require('./models/category.cjs');
const Order = require("./models/order.cjs");

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

Order.create({
  user: "650c51d24d8a29c9ae2d52bc",
  isPaid: true,
  lineItems: [
    {
      qty: 1,
      item: {
        name: "Hamburger",
        emoji: "🍔",
        price: 5.95,
      },
    },
    {
      qty: 2,
      item: {
        name: "Turkey Sandwich",
        emoji: "🥪",
        price: 6.95,
      },
    },
  ],
})
  .then((order) => {
    console.log(order);
  })
  .finally(() => {
    db.close();
  });

// setTimeout(() => {
//   db.close();
// }, 5000);
