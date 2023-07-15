const array = [2, 1, 5, 3, 3, 2, 4]

const firstDuplicate = (array) => {
  const seen = {}

  for (let i = 0; i < array.length; i++) {
    if (seen[array[i]]) return array[i]

    seen[array[i]] = true
  }

  return -1
}

console.log(firstDuplicate(array))