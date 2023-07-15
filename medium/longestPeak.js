const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

const findlLogestPeak = (array) => {
  let longestPeak = 0

  for (let i = 1; i < array.length - 1; i++) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1]

    if (!isPeak) continue

    let currentPeak = 1

    let left = i - 1
    let right = i + 1

    while (array[left] < array[left + 1]) {
      left--
      currentPeak++
    }

    while (array[right] < array[right - 1]) {
      right++
      currentPeak++
    }

    longestPeak = Math.max(longestPeak, currentPeak)
  }

  return longestPeak
}

console.log(findlLogestPeak(array))