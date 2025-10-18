const x = [2,4,8,5,7]
let hasil = 0

for(let i=0; i < x.length; i++) {
    
    hasil +=x[i]
    console.log(`data - ${x[i]} hasil cumulative ${hasil}`)
}

y = 0
let hasil2 = 0
while (y<x.length) {
    hasil2 +=x[y]
    console.log(`data - ${x[y]} hasil cumulative ${hasil}`)
    y++
}

z = 0
let hasil3 = 0
do{
    hasil3 +=x[z]
    console.log(`data - ${x[z]} hasil cumulative ${hasil3}`)
    z++

} while (z<x.length)
