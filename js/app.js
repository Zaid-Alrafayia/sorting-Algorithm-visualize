//#region algorthims functions
//<!-----------------Bubble Sort----------------->
function bubbleSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  for (let i = 0; i < len; i++) {
    comparison++;
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap++;
      }
    }
  }
  return { sortedArray: arr, swaps: swap, comparisons: comparison };
}
function descBubbleSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  for (let i = 0; i < len; i++) {
    comparison++;
    for (let j = 0; j < len; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap++;
      }
    }
  }
  return { sortedArray: arr, swaps: swap, comparisons: comparison };
}
//<!-----------------Selection Sort----------------->
function selectionSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      comparison++;
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      swap++;
    }
  }
  return { sortedArray: arr, swaps: swap, comparisons: comparison };
}
function descSelectionSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      comparison++;
      if (arr[min] < arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      swap++;
    }
  }
  return { sortedArray: arr, swaps: swap, comparisons: comparison };
}
//<!-----------------Insertion Sort----------------->
function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
function descInsertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
//<!-----------------Merge Sort----------------->
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function descMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(descMergeSort(left), descMergeSort(right));
}
//<!-----------------Quick Sort----------------->
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
function descQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return descQuickSort(left).concat(pivot, descQuickSort(right));
}

//#endregion

document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("select-all");
  const checkboxes = document.querySelectorAll(
    ".form-check-input:not(#select-all)"
  );
  function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  function generateAscendingArray() {
    let arr = [];
    let size = Math.floor(Math.random() * 10) + 1; // Ensure array has at least 1 element
    for (let i = 0; i < size; i++) {
      arr.push(i); // Generate a simple ascending sequence
    }
    console.log(arr);
    return arr;
  }

  function generateDescendingArray() {
    let arr = generateAscendingArray();
    arr.reverse(); // Reverse the ascending array to get descending
    console.log(arr);
    return arr;
  }

  function updateSelectedAlgorithms() {
    const selectedAlgorithms = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    return selectedAlgorithms;
  }
  selectAllCheckbox.addEventListener("change", () => {
    const isChecked = selectAllCheckbox.checked;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
    updateSelectedAlgorithms();
  });
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // Update the "Select All" checkbox status
      if (!this.checked) {
        selectAllCheckbox.checked = false;
      } else if (Array.from(checkboxes).every((cb) => cb.checked)) {
        selectAllCheckbox.checked = true;
      }
      updateSelectedAlgorithms();
    });
  });
  const inputArrayDropdown = document.getElementById("inputArrayDropdown");
  const inputArrayItems = document.querySelectorAll(
    "#inputArrayDropdown + .dropdown-menu .dropdown-item"
  );
  let selectedArrayType = "";

  // Dropdown 2: Sorting Order
  const sortingOrderDropdown = document.getElementById("sortingOrderDropdown");
  const sortingOrderItems = document.querySelectorAll(
    "#sortingOrderDropdown + .dropdown-menu .dropdown-item"
  );
  let selectedSortingOrder = "";

  // Handle Input Array Dropdown
  inputArrayItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      selectedArrayType = this.getAttribute("data-value");
      inputArrayDropdown.textContent = `Array Type: ${selectedArrayType}`;
      console.log("Selected Array Type:", selectedArrayType);
    });
  });

  // Handle Sorting Order Dropdown
  sortingOrderItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      selectedSortingOrder = this.getAttribute("data-value");
      sortingOrderDropdown.textContent = `Sorting Order: ${selectedSortingOrder}`;
      console.log("Selected Sorting Order:", selectedSortingOrder);
    });
  });
  function generate() {
    const selectionObject = {
      sortingAlgorithms: updateSelectedAlgorithms(),
      inputArrayOrder: selectedArrayType,
      sortingOrder: selectedSortingOrder,
    };
    let arr = [];
    if (selectionObject.inputArrayOrder === "Random") {
      arr = generateRandomArray();
    } else if (selectionObject.inputArrayOrder === "Ascending") {
      arr = generateAscendingArray();
    } else if (selectionObject.inputArrayOrder === "Descending") {
      arr = generateDescendingArray();
    }
    return arr;
  }
  function sort(arr) {
    const starttime = performance.now();
    const selectionObject = {
      sortingAlgorithms: updateSelectedAlgorithms(),
      inputArrayOrder: selectedArrayType,
      sortingOrder: selectedSortingOrder,
    };
    let sortedArray = [];

    if (selectionObject.sortingAlgorithms.includes("Bubble Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(bubbleSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descBubbleSort(arr));
      }
    }

    if (selectionObject.sortingAlgorithms.includes("selection Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(selectionSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descSelectionSort(arr));
      }
    }

    if (selectionObject.sortingAlgorithms.includes("Insertion Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(insertionSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descInsertionSort(arr));
      }
    }

    if (selectionObject.sortingAlgorithms.includes("Merge Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(mergeSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descMergeSort(arr));
      }
    }

    if (selectionObject.sortingAlgorithms.includes("Quick Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(quickSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descQuickSort(arr));
      }
    }
    const endtime = performance.now();
    console.log("Time taken:", endtime - starttime);
    const time = endtime - starttime;

    return sortedArray, time;
  }

  const generateButton = document.getElementById("generateBtn");
  generateButton.addEventListener("click", function () {
    console.log(updateSelectedAlgorithms());
    const arr = generate();
    console.log("Generated Array:", arr);

    const sortedArray = sort(arr);
    console.log("Sorted Array:", sortedArray);
  });
});
