let keinginan = prompt('kamu mau masuk mode mana perhitungan saldo(s) atau perhitungan hari (h)')

if(keinginan == "s" ) {
    let saldoAwal = prompt('masukkan saldo anda')
    let saldoAkhir =prompt('masukkan pengeluaran anda')

    alert(`saldo awal anda adalah ${saldoAwal} dan saldo akhir anda adlah ${saldoAkhir} dan saldo anda sekarang adalah ${saldoAwal-saldoAkhir}`)

}else if(keinginan == "h"){
    let hari = new Date().getDay()
    if (hari == 1) {
        alert('monday')
    }else if (hari == 2) {
        alert('Tuesday')
    }else if (hari == 3) {
        alert('wednesday')
    }else if (hari == 4) {
        alert('kamis') 
    }else if (hari == 5) {
        alert('fiday') 
    }else if (hari == 6) {
        alert('saturday')
    }else if (hari == 7){
        alert('sunday')
    }

    
}





    

