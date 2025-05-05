// let arr= [1,2,3,4]
// let obj=new Set(arr)



// obj.add(5)
// obj.add(7)
// obj.add(8)
// console.log(obj)

// for(let item of obj){
//     console.log("********************8",arr)
// }

let map = new Map();

map.set('name', 'Muskan');
map.set('age', 20);
map.set('role', 'Developer');

console.log("Map Entries:");
for (let [key, value] of map) {
  console.log(key, value);
}
