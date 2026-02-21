import Cart from "../models/Cart.js";

// Add product to cart
export const addToCartController = async (req, res) => {
    try {
        const { userId, productId, name, description, productImage, customImage, price, quantity } = req.body;
        const totalAmount = price * quantity;

        // Check if the same product with the same customization already exists for the user
        let cartItem = await Cart.findOne({ userId, productId, description });
        if (cartItem) {
            cartItem.quantity += quantity;
            cartItem.totalAmount = cartItem.price * cartItem.quantity;
        } else {
            cartItem = new Cart({ userId, productId, name, description, productImage, customImage, price, quantity, totalAmount });
        }

        await cartItem.save();
        res.status(200).json({ success: true, message: "Added to cart", cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

// Get all cart items for a user
export const getCartController = async (req, res) => {
    try {
        const { userId } = req.query;
        const cartItems = await Cart.find({ userId });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch cart" });
    }
};