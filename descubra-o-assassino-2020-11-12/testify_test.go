package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSuspect_Wrong(t *testing.T) {
	investigation := Investigation{suspect: 1}

	answer := Investigation{suspect: 2}

	assert.Equal(t, 1, AskWitness(investigation, answer))
	//metodo que retorna a resposta da testemunha

}

func TestSuspect_Correct(t *testing.T) {
	investigation := Investigation{suspect: 1}

	answer := Investigation{suspect: 1}

	assert.Equal(t, 0, AskWitness(investigation, answer))
	//metodo que retorna a resposta da testemunha
}

/*func TestSuspect_Wr(t *testing.T) {
	var matriz = criarTabuleiro()
	matriz = adicionarBarco(matriz, 0, 1, 5)
	assert.Equal(t, 5, matriz[0][1])
}*/
