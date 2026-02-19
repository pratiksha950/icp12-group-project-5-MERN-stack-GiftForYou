import Cart from "../models/Cart";

export const addToCartDB = async (req, res) => {
  try {
    const { userId, product } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [product] });
    } else {
      cart.items.push(product);
    }

    await cart.save();
    res.json({ msg: "Added to cart", cart });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
