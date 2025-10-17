function addName(fullname,lastname) {
    return [fullname,lastname]
}

const [dadang,diding] = addName('dadang','dudung')
console.log(dadang,diding)     


// ----------------------------------------------------------
// function addName2() {
//     console.log(arguments)
// }

// addName2('dadang','dudung')

// ----------------------------------------------------------

// function addName2() {
//     for (let i = 0;i <arguments.length;i++)
//         console.log(arguments[i])
// }

// addName2('dadang','dudung')

// ----------------------------------------------------------
// const fullname = function addname(one,two) {
//     console.log(one,two)
// }
// 

// fullname('dd','gg')
// ----------------------------------------------------------

function addname(one,two) {
    console.log(one,two)
}

// cara 1 leyword new function
const fullname = new Function("x",'y', 'console.log(x+y)')

fullname(1,2)

// cara 2 standard funct
function sum1(x,y) {
    console.log(x+y)
}
sum1(4,7)
// ternyata dia bisa di print di atas 

// row funct
const sum3 = (x,y) => {
    console.log(x+y)
}

sum3(3,6)

