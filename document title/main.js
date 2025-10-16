console.log(document.title)
document.title = 'fikri gobles'
const body =document.body
console.log(body)
body.append('<marquee>HELLO WORLD</marquee>')

const h1 =document.createElement('h1')
h1.textContent = '<marquee>ini h1 bro</marquee>'
body.append(h1)

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee> bang dims</marquee>'

body.append(namaSaya)

const namakamu = document.createElement('b')
namakamu.innerText = '<marquee> bang dinn</marquee>'

body.append(namakamu)
