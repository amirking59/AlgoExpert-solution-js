const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

const isMonotonic = (array) => {
  let isNoneDecreasing = true
  let isNoneIncreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNoneDecreasing = false
    else if (array[i] > array[i - 1]) isNoneIncreasing = false
  }

  return isNoneDecreasing || isNoneIncreasing
}

console.log(isMonotonic(array))