---
title: 'Advent of Code 2022 - Day 1'
date: 'December 5, 2022'
excerpt: 'My solutions for the Advent of Code 2022'
tags: ['Golang', 'Programming', 'Advent-of-Code']
cover_image: '/images/posts/advent-of-code.jpg'
---

# What is Advent of Code?

https://adventofcode.com is an annual advent calendar of programming challenges. I decided to give it a try and practice my Go skills a bit. I will be sharing my solutions as I work through them.

Code for all my solutions will be available on [my Github](https://github.com/datallboy/advent_of_code_2022)

### Part 1

```go
package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	file, err := os.Open("input.txt")

	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

	fileScan := bufio.NewScanner(file)
	fileScan.Split(bufio.ScanLines)

	var calories_per_elf int
	var elf_with_most_calories int

	for fileScan.Scan() {
		calorie, _ := strconv.Atoi(fileScan.Text())
		calories_per_elf += calorie

		if fileScan.Text() == "" {
			if calories_per_elf > elf_with_most_calories {
				elf_with_most_calories = calories_per_elf
			}
			calories_per_elf = 0
		}
	}

	fmt.Printf("Most Calories: %d", elf_with_most_calories)
}
```

## Part 2

```go
package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
)

func main() {
	file, err := os.Open("input.txt")

	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

	fileScan := bufio.NewScanner(file)
	fileScan.Split(bufio.ScanLines)

	var fileLines []int
	var calories_per_elf int

	for fileScan.Scan() {
		calorie, _ := strconv.Atoi(fileScan.Text())
		calories_per_elf += calorie

		if fileScan.Text() == "" {
			fileLines = append(fileLines, calories_per_elf)
			calories_per_elf = 0
		}
	}

	sort.Ints(fileLines)
	fmt.Println("Calories of Top Elf: ", fileLines[len(fileLines)-1])

	sum_of_top_three_elves := fileLines[len(fileLines)-1] + fileLines[len(fileLines)-2] + fileLines[len(fileLines)-3]
	fmt.Println("Sum of Calories for Top Three Elves: ", sum_of_top_three_elves)
}
```
