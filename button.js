const btn = document.querySelector(".btn")

btn.addEventListener("mouseover", (event)=>{
    // console.log(event.pageX)
    // console.log(event.pageY)

    const x = (event.pageX - btn.offsetLeft)
    const y = (event.pageY - btn.offsetTop)

    btn.style.setProperty("--xPos", x + "px")
    btn.style.setProperty("--yPos", x + "px")
})