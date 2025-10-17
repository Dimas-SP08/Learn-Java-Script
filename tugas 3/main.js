const nama = prompt('masukkan nama karyawan')
const gaji = prompt('masukkan gaji karyawan')
const jumlahHari = prompt('masukkan jumlah hari masuk kerja')

alert(`total gaji bulananya adalah ${gaji2(gaji,jumlahHari)}`)

function gaji2(g,j) {
    return g*j
}