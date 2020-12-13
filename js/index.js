let toTopBtn = document.querySelector(".toTop")
window.addEventListener("scroll", () => {
    let st = document.documentElement.scrollTop || document.body.scrollTop
    if (st >= 1000) {
        toTopBtn.style.display = "block"
    } else {
        toTopBtn.style.display = "none"
    }
})
toTopBtn.addEventListener("click",()=>{
    document.documentElement.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
})