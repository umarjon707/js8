// let arr = [1, 2, 3, 4, [], true, false,'alex',null,true,[],'ma','xfhfdsgh',false,null] 
// let num = 0
// let str = 0
// let object = 0
// let others = 0


// arr.filter((item)=>{
// if(typeof(item)==='string') {
// str += item.length;
// }
// })

// arr.filter((item)=>{
// if(typeof(item)==='number') {
//    num++
// }
// })


// arr.filter((item)=>{
// if(typeof(item)==='object') {
//   object++
// }
// })


// arr.filter((item)=>{
// if(typeof(item)==='boolean') {
//  others++
// }
// })

// console.log((str));
// console.log((num));
// console.log((object));
// console.log((others));
    
let arr = [1, 2, 3, 4, [], true, false,'alex',null,true,[],'ma','xfhfdsgh',false,null] ;

let num = 0;
let str = 0;
let object = 0;
let others = 0;

arr.forEach(element => {
    if (Array.isArray(element)) {
        others += element.length;
    } else if (typeof element === 'number') {
        num++;
    } else if (typeof element === 'string') {
        str++;
    } else if (typeof element === 'object' && element === 'boolean') {
        object++;
    } else {
        others++;
    }
});

console.log(`Number of numbers: ${num}`);
console.log(`Number of strings: ${str}`);
console.log(`Number of objects: ${object}`);
console.log(`Number of other elements: ${others}`);
