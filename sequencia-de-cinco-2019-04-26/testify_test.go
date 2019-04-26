package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSomething(t *testing.T) {

	var input [5][5]int
	for i := 0; i < len(input); i++ {
		input[0][i] = 2
	}
	assert.Equal(t, 32, GetPower(input), "should find power in row")

	/*var input2 [5][5]int
	for i := 0; i < len(input2); i++ {
		input2[i][0] = 3
	}

	assert.Equal(t, 243, GetPower(input2), "should find power in column")*/

	// assert inequality
	// assert.NotEqual(t, 123, 456, "they should not be equal")

	// 	// assert for nil (good for errors)
	// 	assert.Nil(t, object)

	// 	// assert for not nil (good when you expect something)
	// 	if assert.NotNil(t, object) {

	// 		// now we know that object isn't nil, we are safe to make
	// 		// further assertions without causing any errors
	// 		assert.Equal(t, "Something", object.Value)

	// 	}

}
