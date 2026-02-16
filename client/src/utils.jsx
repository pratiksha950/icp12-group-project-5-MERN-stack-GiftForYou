import toast from "react-hot-toast";
const setPageTitle=(title)=>{
    document.title=title;
};

const logOutUser=()=>{
    localStorage.clear();
    toast.success("Logged out succeefully")
    setTimeout(()=>{
        window.location.href="/login"
    },500)
}

export {setPageTitle,logOutUser};