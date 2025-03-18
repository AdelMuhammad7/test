const text = document.querySelector("p")

function hello(){
    text.style.color = "green"
    text.style.fontSize = "50px"
}

const form = document.querySelector("form")
form.onsubmit = (e)=> {
    e.preventDefault()
    document.querySelectorAll("input").forEach((el) => {
        console.log(el.value)
    })
    
}