package main

import (
	"fmt"
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

func criarTabuleiro() [10][10]int {
	var matriz [10][10]int
	//fmt.Println(matriz)
	return matriz
}

func adicionarBarco(matriz [10][10]int, linha int, coluna int, tamanho int) [10][10]int {
	for i := coluna; i <= tamanho; i++ {
		matriz[linha][i] = tamanho
	}
	//exibeTabuleiro(matriz)
	return matriz
}

func exibeTabuleiro(matriz [10][10]int) {
	for i := 0; i < len(matriz); i++ {
		for j := 0; j < len(matriz); j++ {
			fmt.Print(matriz[i][j])
		}
		fmt.Println()
	}
}

// Se for um barco vai ser (< -1) barco atingido || (> 0) barco "vivo"
func checarEstadoBarco(matriz [10][10]int, linha int, coluna int, tamanho int) {
	
	for i := 0; i < 10; i++ {
		
	}
}

func atirar(matriz [10][10]int, linha int, coluna int) bool {
	var acertou = matriz[linha][coluna] > 0
	if acertou {
		var tamanho = matriz[linha][coluna]
		matriz[linha][coluna] = -2
		checarEstadoBarco(matriz, linha, coluna, tamanho)
	} else {
		matriz[linha][coluna] = -1
	}
	return acertou
}

func main() {

	// TODO: setar matriz
	// TODO: setar barco com tamanho e onde ele começa
	// TODO: sempre na horizontal e sempre da esquerda pra direita

	//var matriz [10][10]int

	//matriz = criarTabuleiro()

	//adicionarBarco(matriz, 0, 1, 5)

}
