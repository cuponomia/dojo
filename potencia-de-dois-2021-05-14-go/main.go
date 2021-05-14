package main

import (
	"fmt"
	"math"
	"strconv"
)

func ConvertToBinary(number int) string {
	return strconv.FormatInt(int64(number), 2)
}

func Calculate(number int) []int {
	var zeroAscii byte = 48
	out := []int{}
	binary := ConvertToBinary(number)
	var binaryLength int = len(binary)

	for i := 0; i < binaryLength; i++ {

		aux := int(binary[binaryLength-(i+1)]-zeroAscii) * int(math.Pow(2, float64(i)))

		if aux != 0 {
			out = append(out, aux)
		}
	}

	return out
}

func main() {
	fmt.Println("Ok")
}
