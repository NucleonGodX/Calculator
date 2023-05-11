let solEl=document.getElementById("soln-el")


function add(){
let num1El=document.getElementById('num1-el').value
let num2El=document.getElementById('num2-el').value

let sum=parseInt(num1El)+parseInt(num2El)

    solEl.innerText="Solution: "+sum
}

function sub(){
    let num1El=document.getElementById('num1-el').value
    let num2El=document.getElementById('num2-el').value    
    let subb=parseInt(num1El)-parseInt(num2El)

    solEl.innerText="Solution: "+subb

}

function div(){
let num1El=document.getElementById('num1-el').value
let num2El=document.getElementById('num2-el').value

let divv=parseInt(num1El)/parseInt(num2El)
    solEl.innerText="Solution: "+divv

}

function mul(){
    let num1El=document.getElementById('num1-el').value
    let num2El=document.getElementById('num2-el').value
    let mull=parseInt(num1El)*parseInt(num2El)

    solEl.innerText="Solution: "+mull

}

function reset(){
    solEl.innerText="Solution: "

}