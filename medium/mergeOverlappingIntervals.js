const array = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

const mergeOverlappingIntervals = (intervals) => {
  const mergedIntervals = []

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0])

  let currentInterval = sortedIntervals[0]

  mergedIntervals.push(currentInterval)

  sortedIntervals.forEach((nextInterval) => {
    if (currentInterval[1] > nextInterval[0]) {
      currentInterval[1] = Math.max(nextInterval[1], currentInterval[1])
    } else {
      currentInterval = nextInterval
      mergedIntervals.push(currentInterval)
    }
  })

  return mergedIntervals
}

console.log(mergeOverlappingIntervals(array))