package main

import "fmt"

func main() {
	var a = max(1, 2)
	fmt.Printf("a 的值为: %d\n", a)
}

func max(num1, num2 int) int {
	/* 声明局部变量 */
	var result int

	if (num1 > num2) {
		 result = num1
	} else {
		 result = num2
	}
	return result 
}