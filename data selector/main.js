document.title = 'dims anjay'
const btn1 = document.getElementById('btn1')
// ini lebih umum
const btn2 = document.querySelector('.btn2')
const btn = document.querySelector('button')
const body = document.body

const defaulttext= "klik ane1"
btn1.textContent =  defaulttext

btn1.style.border = 'none'
btn2.style.padding = '100px'
btn2.style.color = 'coral'

function gantiwarna() {
    btn2.style.color = 'blue'
    const newtext = document.createElement('p')
    newtext.textContent = "hai bung"
    body.append(newtext)
}

function ubahtext() {
    btn1.textContent= 'wlwwkwkwk'
}
function oritext() {
    btn1.textContent =defaulttext
}
