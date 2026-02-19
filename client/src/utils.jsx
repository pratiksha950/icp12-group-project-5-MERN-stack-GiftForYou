import toast from "react-hot-toast";

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
const addToCart = (item) => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    const idx = saved.findIndex(i => i.id === item.id && i.description === item.description);

    if (idx !== -1) {
        saved[idx].quantity += item.quantity;
    } else {
        saved.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(saved));
    window.dispatchEvent(new Event("storage"));
    toast.success("Added to cart!");
};

export { setPageTitle, getUserData, logoutUser, addToCart }

