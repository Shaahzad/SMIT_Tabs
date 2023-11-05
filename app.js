const p1 = document.querySelector("p")
console.log(p1)
const p2 = document.querySelector(".p2")
console.log(p2)
const p3 = document.querySelector(".p3")
console.log(p3)
const img = document.getElementById("img")


function tab1(){
    p1.style.display="block"
    p3.style.display="none"
    p2.style.display="none"

}
function tab2(){
    p2.style.display="block"
    img.src="./bulb off.png"
    p1.style.display="none"
    p3.style.display="none"


}
function tab3(){
    p3.style.display="block"
    img.src="./4-yellow-light-bulb-png-image.png"
    p2.style.display="none"
    p1.style.display="none"

}