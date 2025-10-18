// artinya kita inisialisasi dengn z - 0, lalu jika z kurang dari 5 maka ztambah1

// for(let z= 0 ;  z<5;z++) {
//     if (z%2 !== 0) console.log('datake',z)
// }

// let x = 1
// while(x <=10) {
//     console.log('datake',x)
//     x++
// }
   
// artinya kalau do itu kita bakal ngelakuin dulu yang ada di dalam do lalu cek si whilenya 
// let y = 1 
// do{
//     console.log('data',y)
//     y++
// } while (y <=10) 


const myGril = ['nisa','marina','dina','diana','kaesa'
]

for(let pacar of myGril) {
    console.log(pacar)
}

for(let pacar in myGril) {
    console.log(pacar)
}

// artinya value,index
myGril.forEach((pacar,index) => {
    console.log(pacar,index+1)
})




