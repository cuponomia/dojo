// Problema: Descubra o assassino (https://dojopuzzles.com/problems/descubra-o-assassino/)

//comando para rodar os testes
//go test

package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestConvertToBinary(t *testing.T) {
	assert.Equal(t, "11", ConvertToBinary(3))
}

func TestCalculate(t *testing.T) {
	assert.Equal(t, []int{}, Calculate(0))
	assert.Equal(t, []int{1}, Calculate(1))
	assert.Equal(t, []int{2}, Calculate(2))
	assert.Equal(t, []int{8}, Calculate(8))
	assert.Equal(t, []int{1, 4, 16}, Calculate(21))
	assert.Equal(t, []int{1, 2, 4, 8, 16, 32}, Calculate(63))
}
