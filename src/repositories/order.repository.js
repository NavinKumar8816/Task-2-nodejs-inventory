const Order = require("../models/order.model");

const createOrder = async (data, session) => {
  const order = new Order(data);
  return order.save({ session });
};

module.exports = { createOrder };
