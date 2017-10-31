package main

import "fmt"

func main(){
	var a string = "test"
	fmt.Println(a)

	var b, c int = 1, 2
	fmt.Println(b + c)

	var d = false
	fmt.Println(d)

	var e int
	fmt.Println(e)

	// 连续声明变量
	var h, f, g = 123, "hello", false
	fmt.Println(h)
	fmt.Println(f)
	fmt.Println(g)
}

