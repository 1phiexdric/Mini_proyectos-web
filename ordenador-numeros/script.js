const sortButton = document.getElementById('sort')
const sortInputArray = (event) => {
    event.preventDefault()
    const inputValues = [...document.getElementsByClassName('values-dropdown')]
        .map(dropdown => Number(dropdown.value))
    const sortedValues = selectionSort(inputValues)
    updateUI(sortedValues)
}

sortButton.addEventListener('click', sortInputArray)
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        let outputValueNode = document.getElementById(`output-value-${i}`)
        outputValueNode.innerText = num
    })
}

// bubble sort algorithm
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

// selection sort
/*
Time to implement another sorting algorithm. 
This time, you'll be implementing a selection sort. 
Selection sort works by finding the smallest value in the array, 
then swapping it with the first value in the array. 
Then, it finds the next smallest value in the array, 
and swaps it with the second value in the array. It continues 
iterating through the array until it is completely sorted.
*/
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            console.log(array, array[j], array[minIndex])
            if (array[j] < array[minIndex]) { 
                minIndex = j

            }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
}
}

// insertion sort
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
}