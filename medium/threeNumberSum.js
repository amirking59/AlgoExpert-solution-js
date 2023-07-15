let array = [12, 3, 1, 2, -6, 5, -8, 6]

const treeNumberSum = (array, targetSum = 0) => {
  const sortedArray = [...array].sort((a, b) => a - b)
  const triplets = []

  for (let i = 0; i < sortedArray.length; i++) {
    let left = i + 1
    let right = sortedArray.length - 1

    while (left < right) {
      const result = sortedArray[i] + sortedArray[left] + sortedArray[right]

      if (result === targetSum) {
        triplets.push([sortedArray[i], sortedArray[left], sortedArray[right]])
        left++
        right--
      } else if (result < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return triplets
}

console.log(treeNumberSum(array, 0))
