const getHighestDuplicates = (arrNum) => {
    let counts = {}
    arrNum.forEach(element => {
        if (counts[element]) {
            counts[element]++
        } else {
            counts[element] = 1
        }
    })
    let highestValue = 0
    for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestValue) {
      highestValue = count;
    
    }}
}

getHighestDuplicates([1, 2, 1, 2, 2, 5])