const emojis = ["😠", "🧐", "😷", "😘", "😓", "😍", "😠", "🧐", "😷", "😘", "😓", "😍"]

var melange = emojis.sort(() => (Math.random() > .5) ? 2 : -1)


for (let index = 0; index < emojis.length; index++) {
   document.getElementById("grid").innerHTML += `<div class="item">${emojis[index]}</div>`
    
}
let point = 0;
document.querySelectorAll(".item").forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.add("flip")
        const t = setTimeout(()=>{
            if (document.querySelectorAll(".flip").length > 1) {
                if (document.querySelectorAll(".flip")[0].textContent == document.querySelectorAll(".flip")[1].textContent) {
                    
                    document.querySelectorAll(".flip").forEach(flip=>{
                        flip.classList.add("match")
                    })

                    document.querySelectorAll(".flip").forEach(flip=>{
                        flip.classList.remove("flip")
                    })

                    if (document.querySelectorAll(".match").length == emojis.length) {
                        alert("gagné")
                    }
                    point++;
                }else{
                    document.querySelectorAll(".flip").forEach(flip=>{
                        flip.classList.remove("flip")
                    })
                }
            }
        },500)
        console.log(point)
    })
})
