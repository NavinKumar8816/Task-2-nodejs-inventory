const Product = require("../models/product.model");

const findById = async (id, session) => {
  return Product.findById(id).session(session);
};

const updateStock = async (id, stock, session) => {
  return Product.findByIdAndUpdate(
    id,
    { stock },
    { new: true, session }
  );
};

module.exports = {
  findById,
  updateStock
};
