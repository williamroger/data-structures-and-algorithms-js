/**
* OBJETIVO:
* Armazenar informações de temperatura por dia e por hora, utilizando um array bidimensional onde
* cada linha representa um dia e cada coluna representa a temperatura em uma hora.
*/

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

/**
* OBJETIVO:
* Exibir no console todos os valores armazenados no array bidimensional,
* percorrendo cada uma das linhas e colunas.
*/
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

printMatrix(averageTemp);
