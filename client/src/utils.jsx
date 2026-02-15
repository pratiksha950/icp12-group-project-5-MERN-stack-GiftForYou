import toast from "react-hot-toast";
const setPageTitle=(title)=>{
    document.title=title;
};

const getUserData = () => {
    const userData = localStorage.getItem("userData") || "{}";

    return JSON.parse(userData);
};

const logoutUser = () => {
    localStorage.clear();
    toast.success("Logged Out Successfully")
    setTimeout(() => {
        window.location.href="/login"
    }, 1500)
}

export {setPageTitle, getUserData, logoutUser}
