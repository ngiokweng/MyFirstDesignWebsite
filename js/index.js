// toTopBtn的設置
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

//界面的開關
document.querySelector(".burger").addEventListener("click",function(){
    this.classList.toggle("open")
    const header=document.querySelector("header")
    header.classList.toggle("openMenu")
    const openMenuA=document.querySelectorAll(".openMenu nav a")
    openMenuA.forEach(e=>{
        e.addEventListener("click",()=>{
            header.classList.remove("openMenu")
            this.classList.remove("open")
        })
    })
})



