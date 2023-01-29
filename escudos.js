let array = [
  [ 2, 3, 4 ],
  [ 2, 3, 4 ],
  [ 2, 3, 4 ],
  

];
/*
 [1][2][3][1][2]
 [1][2][3][1][2]
 [1][2][3][1][2]
 [1][2][3][1][2]
 [1][2][3][1][2]
*/
let escudos = 0
const esquinas = 3 * 4;
const flancos = ((array.length - 2) * 4) * 2; 
escudos = esquinas + flancos
for (let i = 1; i < array.length - 1; i++) {
  for (let j = 1; j < array.length - 1; j++) {
    escudos++

  }
}
console.log(escudos)
console.log(array.length - 2)
