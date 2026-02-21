import toast from "react-hot-toast";
import axios from "axios";

const setPageTitle = (title) => {
    document.title = title;
};

const getUserData = () => {
    const userData = localStorage.getItem("userData") || "{}";
    return JSON.parse(userData);
};

const logoutUser = () => {
    localStorage.clear();
    toast.success("Logged Out Successfully")
    setTimeout(() => {
        window.location.href = "/login"
    }, 1500)
};

// Shared cart management utility
const addToCart = async (item) => {
    const user = getUserData();
    if (!user || !user.token) {
        toast.error("Please login to add items to cart!");
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
        return;
    }

    try {
        // POST request to backend
        const response = await axios.post(
            "http://localhost:8080/cart",
            item,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`, // if your backend needs JWT
                    "Content-Type": "application/json",
                }
            }
        );

        if (response.data.success) {
            toast.success("Added to cart!");

            // Optional: update localStorage for frontend state
            const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
            const idx = saved.findIndex(i => i.id === item.id && i.description === item.description);

            if (idx !== -1) {
                saved[idx].quantity += item.quantity;
            } else {
                saved.push(item);
            }

            localStorage.setItem("cartItems", JSON.stringify(saved));
            window.dispatchEvent(new Event("storage"));
        } else {
            toast.error("Failed to add to cart!");
        }

    } catch (error) {
        console.error("Cart Add Error:", error.response || error);
        toast.error("Server error! Could not add to cart.");
    }
};
export { setPageTitle, getUserData, logoutUser, addToCart }

