window.onload = () => {
    const register = document.getElementById("register")
    const btn_register = document.getElementById("btn_register")
    const verify = document.getElementById("verify")
    const btn_verify = document.getElementById("btn_verify")

    btn_register.addEventListener("click", (e) => {
        e.preventDefault()
        register.classList.add("hidden")
        verify.classList.remove("hidden")
    })
    btn_verify.addEventListener("click", (e) => {
        e.preventDefault()
        window.location = "/public/productList.html"
    })
}
