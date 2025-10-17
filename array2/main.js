// const array = ['muka','tangan','baba']

// console.log(array)

// const arrray2 = []
// arrray2[0] = 'b'
// arrray2[1]= 'dodo'
// console.log(arrray2)

// const arraykita = new Array()
// arraykita[0] = '4'
// arraykita [6] = 'l'
// console.log(arraykita[6])

// ---------------------------------------------------------------
// const array = ['muka','tangan','baba']
// const muka =array.includes('muka')
// if(muka){
//     const posisiMuka = array.indexOf('muka')
//     const before = posisiMuka-1
//     const after = posisiMuka+1
//     const before2 = array[before]
//     const after2 = array[after]
//     console.log(`posisi setelah muka adalah ${after2} posisi sebelum muka adlaah ${before2}`)

//     const awal = array.shift()
//     const akhir = array.pop()
//     console.log(`buah awal adalah buah ${awal} dan bua akhir adalah ${akhir}`) 

// }else {
//     console.log('i dont know')
// }

// ----------------------------------------------------------------
// const array = []
// array['muka'] = 'dada'
// array['didi'] = 'dodo'
// console.log(array['didi'])

// -------------------------------------------

// copyan

// const array = ['muka','tangan','baba','gigi']
// const array2 = [...array]
// array2[0] = 'bagi'

// console.log(array)
// console.log(array2)

// ---------------------------------------------------------------
// const array = ['jaja',45,56,{tomato:function() {
//     console.log('ini tomat')
// }},false,['gigi','dudung']]

// array[3].tomato()


// ---------------------------------------------------------------
// const array = ['jaja',45,56,{tomato:function() {
//     console.log('ini tomat')
// }},false,['gigi','dudung']]

// const array2 = ['ll','kk','lo']

// const merge = array.concat(array2)

// for(list of merge) console.log(list)
//     // bisa of bisa in
//     merge.map((value,index) => console.log(value,index))

// --------------------------------------------------------------
const datas = [{
    name:'dea',
    stack:'react js',
    age:30
},
{
    name:'dewa',
    stack:'react djs',
    age:38
},
{
    name:'dwea',
    stack:'reaqct js',
    age:37 
}]

// datas.map((values,index) =>{
//     console.log(values.name,values.stack)
// })

// datas.sort((a,b) => b.age - a.age).map((values) => console.log(values))

datas.sort((a,b)=> a.age- b.age).filter((x) => x.age>29).map((values) => console.log(values))


