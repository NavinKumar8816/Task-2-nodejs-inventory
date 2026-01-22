const orderService = require("../services/order.service");

const placeOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const result = await orderService.placeOrder(productId, quantity);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { placeOrder };
