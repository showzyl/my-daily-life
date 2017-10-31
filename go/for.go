package main

import "fmt"

func main() {

	// for a :=0;a<10; a++{
	// 	fmt.Printf("a 的值为: %d\n", a)
	// }

	var b int = 15
	var c int

	for c < b {
		c++
		fmt.Printf("c 的值为: %d\n", c)
	}

}