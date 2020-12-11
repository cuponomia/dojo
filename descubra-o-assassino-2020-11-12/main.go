package main

import (
	"fmt"
)

type Investigation struct {
	suspect  int
	location int
	weapon   int
}

func AskWitness(guess *Investigation, answer *Investigation) int {
	if guess.suspect != answer.suspect {
		return 1
	}
	if guess.location != answer.location {
		return 2
	}
	if guess.weapon != answer.weapon {
		return 3
	}

	return 0
}

func Resolve(inv *Investigation) (int, int, int) {
	suspects := 6
	locations := 10
	weapons := 6

	for i := 0; i < suspects; i++ {
		for j := 0; j < locations; j++ {
			for k := 0; k < weapons; k++ {
				if AskWitness(inv, result) == 0 {
					return i, j, k
				}
			}
		}
	}
	return -1, -1, -1
}

func main() {
	fmt.Println("Ok")
}
