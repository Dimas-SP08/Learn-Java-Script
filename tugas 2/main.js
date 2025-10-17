const input = prompt('anda mau menghitung apa?\n a. luas lingkaran \n b.luas segitiga \n c.luas persegi panjang \n d.luas jajar genjang')

if (input == 'a') {
    const r =prompt('masukkan jari jarinya')
    alert(luasLigkaran(r))
}else if (input == 'b') {
    const a = prompt('masukkan alas nya')
    const t = prompt('masukkan tingginya')
    alert(luasSegitiga(a,t))
}else if (input == 'c') {
    const p = prompt('masukkan panjangnya')
    const l = prompt('masukkan lebarnya')
    alert(luasPersegipanjang(p,l))
}else if (input === 'd') {
    const a= prompt('masukkan alasnya')
    const t = prompt('masukkan tingginya')
    alert(jajarGenjang(a,t))
}


function luasLigkaran(r) {
    return Math.PI * r**2
}
function luasSegitiga(a,t) {
    return 1/2 * a * t
}
function luasPersegipanjang(p,l) {
    return p*l
}
function jajarGenjang(a,t) {
    return a*t
}