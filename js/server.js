const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// API endpoint to accept sorting data
app.post("/sort", (req, res) => {
  const { algorithm, array, order } = req.body;
  let result;

  switch (algorithm) {
    case "Bubble Sort":
      result = bubbleSort(array, order);
      break;
    case "Selection Sort":
      result = selectionSort(array, order);
      break;
    case "Insertion Sort":
      result = insertionSort(array, order);
      break;
    case "Quick Sort":
      result = quickSort(array, order);
      break;
    default:
      res.status(400).json({ error: "Unknown algorithm" });
      return;
  }

  res.json(result);
});

//#region algorthims functions
function bubbleSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      comparison++;
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap++;
      }
    }
  }
  const endtime = performance.now();
  return {
    sortedArray: arr,
    swaps: swap,
    comparisons: comparison,
    time: endtime - starttime, // Time in seconds
  };
}

function descBubbleSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      comparison++;

      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap++;
      }
    }
  }
  const endtime = performance.now();
  return {
    sortedArray: arr,
    swaps: swap,
    comparisons: comparison,
    time: endtime - starttime, // Time in seconds
  };
}

// Selection Sort
function selectionSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      comparison++;
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    comparison++;

    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      swap++;
    }
  }
  const endtime = performance.now();
  return {
    sortedArray: arr,
    swaps: swap,
    comparisons: comparison,
    time: endtime - starttime, // Time in seconds
  };
}

function descSelectionSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      comparison++;
      if (arr[min] < arr[j]) {
        min = j;
      }
    }
    comparison++;

    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      swap++;
    }
  }
  const endtime = performance.now();
  return {
    sortedArray: arr,
    swaps: swap,
    comparisons: comparison,
    time: endtime - starttime, // Time in seconds
  };
}
function insertionSort(arr) {
  let len = arr.length;
  let swap = 0; // Count swaps
  let comparison = 0; // Count all comparisons
  const starttime = performance.now();

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0) {
      comparison++; // Count the comparison in the while loop
      if (arr[j] > key) {
        arr[j + 1] = arr[j]; // Shift element to the right
        j--;
        swap++; // Count the swap only when a shift happens
      } else {
        break; // Exit loop if condition fails
      }
    }

    arr[j + 1] = key; // Place the key in its correct position
  }

  const endtime = performance.now();
  return {
    sortedArray: arr,
    time: endtime - starttime, // Time in milliseconds
    swaps: swap,
    comparisons: comparison,
  };
}

function descInsertionSort(arr) {
  let len = arr.length;
  let swap = 0; // Count swaps
  let comparison = 0; // Count all comparisons
  const starttime = performance.now();

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0) {
      comparison++; // Count the comparison in the while loop
      if (arr[j] < key) {
        arr[j + 1] = arr[j]; // Shift element to the right
        j--;
        swap++; // Count the swap only when a shift happens
      } else {
        break; // Exit loop if condition fails
      }
    }

    arr[j + 1] = key; // Place the key in its correct position
  }

  const endtime = performance.now();
  return {
    sortedArray: arr,
    time: endtime - starttime, // Time in milliseconds
    swaps: swap,
    comparisons: comparison,
  };
}

function quickSort(arr) {
  const starttime = performance.now(); // Start time for quickSort
  let swap = 0;
  let comparison = 0;

  if (arr.length <= 1) {
    const endtime = performance.now();
    return {
      sortedArray: arr,
      time: endtime - starttime,
      swaps: swap,
      comparisons: comparison,
    }; // Return time in seconds
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    comparison++; // Increment comparison count
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const leftResult = quickSort(left);
  const rightResult = quickSort(right);

  const result = leftResult.sortedArray.concat(pivot, rightResult.sortedArray); // Combine the results

  const endtime = performance.now();
  return {
    sortedArray: result,
    time: endtime - starttime,
    swaps: swap,
    comparisons: comparison,
  };
}
function descQuickSort(arr) {
  const starttime = performance.now(); // Start time for descQuickSort
  let swap = 0;
  let comparison = 0;

  if (arr.length <= 1) {
    const endtime = performance.now();
    return {
      sortedArray: arr,
      time: endtime - starttime,
      swaps: swap,
      comparisons: comparison,
    }; // Return time in seconds
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    comparison++; // Increment comparison count
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const leftResult = descQuickSort(left);
  const rightResult = descQuickSort(right);

  const result = leftResult.sortedArray.concat(pivot, rightResult.sortedArray); // Combine the results

  const endtime = performance.now();
  return {
    sortedArray: result,
    time: (endtime - starttime) / 1000,
    swaps: swap,
    comparisons: comparison,
  };
}

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
