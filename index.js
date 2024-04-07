const  content= document.querySelector("#num")

const decrement=()=>{
    let value = parseInt(content.textContent)
    value--
    content.textContent=value
}

const increment=()=>{
    let value = parseInt(content.textContent)
    value++
     content.textContent=value

}
