const left = document.querySelector("#left")
const right = document.querySelector("#right")

const leftCircle = document.querySelector("#left-circle")
const rightCircle = document.querySelector("#right-circle")

const card1 = document.querySelector("#card1")

const lefth1 = document.querySelector("#left h1")
const righth1 = document.querySelector("#right h1")


left.addEventListener("mousemove", function(){
    leftCircle.style.left = "30%"
    card1.style.transform = "rotateY(-50deg)"
    card1.style.left = "-40%"
    lefth1.style.color = "white"
    
})

left.addEventListener("mouseleave", function(){
    leftCircle.style.left = "100%"
    card1.style.transform = "rotateY(0deg)"
    card1.style.left = "0%"
    lefth1.style.color = "rgb(82 82 91)"

})


right.addEventListener("mousemove", function(){
    rightCircle.style.right = "30%"
    card1.style.transform = "rotateY(50deg)"
    card1.style.left = "30%"
    righth1.style.color = "white"


})

right.addEventListener("mouseleave", function(){
    rightCircle.style.right = "100%"
    card1.style.transform = "rotateY(0deg)"
    card1.style.left = "0%"
    righth1.style.color = "rgb(82 82 91)"


})