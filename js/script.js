
let win = new Audio("music/win.mp3");
let click = new Audio("music/clic.mp3");
let echec = new Audio("music/echec.mp3");

const emojis = ["🧑", "😇", "😍", "😎", "😈", "🔥", "🧑", "😇", "😍", "😎", "😈", "🔥"]

let shuffle = emojis.sort(()=>(Math.random() > .5) ? 2 : -1)

for (let index = 0; index < emojis.length; index++) {
    document.getElementById("grid").innerHTML += `<span>${shuffle[index]}</span>`
}

let point = 0
document.querySelectorAll("span").forEach(item =>{
    item.addEventListener("click", ()=>{
        click.play();
        item.classList.add("flip")

       setTimeout(()=>{
        if (document.querySelectorAll(".flip").length > 1) {
            if(document.querySelectorAll(".flip")[0].innerText == document.querySelectorAll(".flip")[1].innerText){
                win.play();
                document.querySelectorAll(".flip").forEach(item=>{
                    item.classList.add("match")
                })

                document.querySelectorAll(".flip").forEach(item=>{
                    item.classList.remove("flip")
                })
                point++
               document.getElementById("score").innerText = `Score: ${point}`

               
              }else{
                echec.play();
                document.querySelectorAll(".flip").forEach(item=>{
                    item.classList.remove("flip")
                })
            }
        }
        if ((point*2) == emojis.length) {
            alert("vous avez gagné !!")
            location.reload()
       }
       },300)
    })
})

let timer = 20
const x = setInterval(()=>{
let distance = timer--
document.getElementById("timer").innerText =  `${(distance > 0) ? distance+"s" : distance}`
if (distance < 1) {
    clearInterval(x)
    alert("temps ecoulé!!")
    location.reload()
}
},1000)