package main

import "fmt"

func main() {

	// for a :=0;a<10; a++{
	// 	fmt.Printf("a 的值为: %d\n", a)
	// }

	// var b int = 15
	// var c int

	// for c < b {
	// 	c++
	// 	fmt.Printf("c 的值为: %d\n", c)
	// }

	numbers := [6]int{1, 2, 3, 5}

	for i,x:= range numbers {
		fmt.Printf("第 %d 位 x 的值 = %d\n", i,x)
	}


}

