package main

import (
	"math"
)

func GetPower(matriz [5][5]int) int {
	var maiorValor, primeiro int
	var linhaIgual bool

	maiorValor = 0

	for i := 0; i < len(matriz); i++ {
		primeiro = matriz[i][0]
		linhaIgual = false

		for j := 0; j < len(matriz); j++ {
			if matriz[i][j] != primeiro {
				linhaIgual = false
				break
			}
			linhaIgual = true
		}

		if linhaIgual {
			if math.Pow(float64(primeiro), float64(len(matriz))) > float64(maiorValor) {
				maiorValor = int(math.Pow(float64(primeiro), float64(len(matriz))))
			}
		}
	}

	return maiorValor
}

func main() {

	//var input [5][5]int

	/*

		3 3 3 3 3
		1 2 1 1 1
		1 1 2 1 1
		1 1 1 2 1
		1 1 1 1 2

		1 2 1 1 1
		1 1 2 1 1
		1 2 1 2 1
		1 1 1 1 1
		1 2 1 2 1

	*/

}
