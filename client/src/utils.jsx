import toast from "react-hot-toast";

const setPageTitle = (title) => {
    document.title = title;
};

const getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch {
    return null;
  }
};
const logoutUser = () => {
    localStorage.clear();
    toast.success("Logged Out Successfully")
    setTimeout(() => {
        window.location.href = "/login"
    }, 1500)
};

const addToCart = (item) => {
  const user = getUserData();
  if (!user || !user.token) {
    toast.error("Please login to add items to cart!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    return;
  }

  const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
  const idx = saved.findIndex(
    i => i.id === item.id && i.description === item.description
  );

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

