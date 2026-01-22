const mongoose = require("mongoose");
const productRepo = require("../repositories/product.repository");
const orderRepo = require("../repositories/order.repository");

const placeOrder = async (productId, quantity) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await productRepo.findById(productId, session);
    if (!product) {
      throw new Error("Product not found");
    }

    if (product.stock < quantity) {
      throw new Error("Insufficient stock");
    }

    const updatedStock = product.stock - quantity;

    await productRepo.updateStock(productId, updatedStock, session);

    await orderRepo.createOrder(
      {
        productId,
        quantity,
        status: "CONFIRMED"
      },
      session
    );

    await session.commitTransaction();
    return { message: "Order placed successfully" };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

module.exports = {
  placeOrder
};
