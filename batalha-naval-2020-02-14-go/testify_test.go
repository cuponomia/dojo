package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)


func TestAdicionarBarcoBarcoAdicionado(t *testing.T) {
	var matriz = criarTabuleiro()
	matriz = adicionarBarco(matriz, 0, 1, 5)
	assert.Equal(t, 5, matriz[0][1])
}

func TestAdicionarBarcoTamanho(t *testing.T) {
	var matriz = criarTabuleiro()
	matriz = adicionarBarco(matriz, 0, 1, 2)
	assert.Equal(t, 0, matriz[0][0])
	assert.Equal(t, 2, matriz[0][1])
	assert.Equal(t, 2, matriz[0][2])
	assert.Equal(t, 0, matriz[0][3])
}

func TestErrouTiro(t *testing.T) {
	var matriz = criarTabuleiro()
	matriz = adicionarBarco(matriz, 0, 1, 2)
	var acertou = atirar(matriz, 0, 0)
	assert.Equal(t, acertou, false)
}

func TestTiroAcertouBarco(t *testing.T) {
	var matriz = criarTabuleiro()
	matriz = adicionarBarco(matriz, 0, 1, 2)
	var acertou = atirar(matriz, 0, 1)
	assert.Equal(t, acertou, true)
}
