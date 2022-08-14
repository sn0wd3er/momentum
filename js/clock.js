const clock = document.querySelector("#clock")

function time() {
    const t = new Date()
    const hour = String(t.getHours()).padStart(2,"0")
    const minute = String(t.getMinutes()).padStart(2,"0")
    const seconds = String(t.getSeconds()).padStart(2,"0")
    clock.innerText = `${hour}:${minute}:${seconds}`
}
time()
setInterval( time ,1000)