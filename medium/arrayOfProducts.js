const array = [5, 1, 4, 2]

const arrayOfProducts = (array) => {
  const result = []

  let currentLeftProduct = 1
  let currentRightProduct = 1

  const leftProducts = []
  const rightProducts = []

  for (let i = 0; i < array.length; i++) {
    rightProducts[i] = currentRightProduct

    currentRightProduct *= array[i]
  }

  for (let i = array.length - 1; i >= 0; i--) {
    leftProducts[i] = currentLeftProduct

    currentLeftProduct *= array[i]
  }

  for (let i = 0; i < array.length; i++) {
    result[i] = rightProducts[i] * leftProducts[i]
  }

  return result
}

console.log(arrayOfProducts(array))