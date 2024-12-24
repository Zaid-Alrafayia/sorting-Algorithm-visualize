//#region algorthims functions
function bubbleSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();
  for (let i = 0; i < len; i++) {
    comparison++;
    for (let j = 0; j < len - 1; j++) {
      // Fix inner loop to avoid out-of-bounds access
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
    comparison++;
    for (let j = 0; j < len - 1; j++) {
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
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    // Count comparisons in while loop
    comparison++;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      swap++; // Count each swap
    }
    arr[j + 1] = key;
  }

  const endtime = performance.now();
  return {
    sortedArray: arr,
    time: endtime - starttime, // Time in seconds
    swaps: swap,
    comparisons: comparison,
  };
}

function descInsertionSort(arr) {
  let len = arr.length;
  let swap = 0;
  let comparison = 0;
  const starttime = performance.now();

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    // Count comparisons in while loop
    comparison++;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      swap++; // Count each swap
    }
    arr[j + 1] = key;
  }

  const endtime = performance.now();
  return {
    sortedArray: arr,
    time: endtime - starttime, // Time in seconds
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

document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("select-all");
  const checkboxes = document.querySelectorAll(
    ".form-check-input:not(#select-all)"
  );
  function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < Math.random() * 10; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  function generateAscendingArray() {
    let arr = [];
    let size = Math.floor(Math.random() * 100) + 1; // Ensure array has at least 1 element
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
    const selectionObject = {
      sortingAlgorithms: updateSelectedAlgorithms(),
      inputArrayOrder: selectedArrayType,
      sortingOrder: selectedSortingOrder,
    };

    let sortedArray = [];
    let times = {};

    // Bubble Sort
    if (selectionObject.sortingAlgorithms.includes("Bubble Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(bubbleSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descBubbleSort(arr));
      }
    }

    // Selection Sort
    if (selectionObject.sortingAlgorithms.includes("selection Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(selectionSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descSelectionSort(arr));
      }
    }

    // Insertion Sort
    if (selectionObject.sortingAlgorithms.includes("Insertion Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(insertionSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descInsertionSort(arr));
      }
    }

    // Quick Sort
    if (selectionObject.sortingAlgorithms.includes("Quick Sort")) {
      if (selectionObject.sortingOrder === "Ascending") {
        sortedArray.push(quickSort(arr));
      } else if (selectionObject.sortingOrder === "Descending") {
        sortedArray.push(descQuickSort(arr));
      }
    }

    console.log(sortedArray); // Debugging the sorted array

    // Process sortedArray and populate data
    const data = [];
    for (let i = 0; i < selectionObject.sortingAlgorithms.length; i++) {
      const algorithmResult = sortedArray[i]; // Accessing each sorting result

      if (algorithmResult && typeof algorithmResult === "object") {
        // Ensure the result object contains the expected properties
        data.push(
          {
            algorithm: selectionObject.sortingAlgorithms[i],
            metric: "Swaps",
            value: algorithmResult.swaps || 0,
          },
          {
            algorithm: selectionObject.sortingAlgorithms[i],
            metric: "Comparisons",
            value: algorithmResult.comparisons || 0,
          },
          {
            algorithm: selectionObject.sortingAlgorithms[i],
            metric: "Time",
            value: algorithmResult.time || 0,
          }
        );
      } else {
        console.warn(
          `Unexpected result structure for algorithm ${selectionObject.sortingAlgorithms[i]}:`,
          algorithmResult
        );
      }
    }

    console.log("Data for Chart:", data); // Debugging the data for chart
    return sortedArray;
  }

  let data = [];
  globalThis.transformedData = [];
  const sortedHtml = document.getElementById("sorted-array");
  const generateButton = document.getElementById("generateBtn");

  generateButton.addEventListener("click", function () {
    console.log(updateSelectedAlgorithms());

    // Generate the array
    const arr = generate();
    console.log("Generated Array:", arr);

    // Sort the array using selected algorithms
    const sortedArray = sort(arr);
    console.log("Sorted Array:", sortedArray);

    data = []; // Reset data array for each new generation/sort
    window.transformedData = []; // Reset transformedData

    const selectedAlgorithms = updateSelectedAlgorithms();

    // Process sortedArray to populate data
    for (let i = 0; i < selectedAlgorithms.length; i++) {
      const algorithmResult = sortedArray[i]; // Corresponds to each algorithm's result
      if (algorithmResult && typeof algorithmResult === "object") {
        data.push(
          {
            algorithm: selectedAlgorithms[i],
            metric: "Swaps",
            value: algorithmResult.swaps || 0,
          },
          {
            algorithm: selectedAlgorithms[i],
            metric: "Comparisons",
            value: algorithmResult.comparisons || 0,
          },
          {
            algorithm: selectedAlgorithms[i],
            metric: "Time",
            value: algorithmResult.time || 0,
          }
        );
      } else {
        console.warn(
          `Unexpected result structure for algorithm ${selectedAlgorithms[i]}:`,
          algorithmResult
        );
      }
    }

    // Transform data for chart/table
    data.forEach((item) => {
      const { algorithm, metric, value } = item;
      window.transformedData.push({ algorithm, metric, value });
    });

    console.log("Data for Chart:", data);
    console.log("Transformed Data for Table:", window.transformedData);
    sortedHtml.innerHTML = `<h3>Sorted Array: ${sortedArray[0].sortedArray}</h3>`;
    // Regenerate the chart
    const chartContainer = document.getElementById("chart-container");
    if (chartContainer) {
      chartContainer.innerHTML = ""; // Clear previous chart if any
      renderChart(window.transformedData, chartContainer); // Call the chart rendering function
    }
    updateKPIs(window.transformedData);
  });

  function renderChart(data, container) {
    const width = 928;
    const height = 600;
    const marginTop = 10;
    const marginRight = 10;
    const marginBottom = 20;
    const marginLeft = 40;

    const fx = d3
      .scaleBand()
      .domain(Array.from(new Set(data.map((d) => d.algorithm))))
      .rangeRound([marginLeft, width - marginRight])
      .paddingInner(0.1);

    const metrics = Array.from(new Set(data.map((d) => d.metric))).filter(
      (metric) => metric !== "Time"
    ); // Remove "Time" from the metrics

    const x = d3
      .scaleBand()
      .domain(metrics)
      .rangeRound([0, fx.bandwidth()])
      .padding(0.05);

    const color = d3
      .scaleOrdinal()
      .domain(metrics)
      .range(d3.schemeCategory10)
      .unknown("#ccc");

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .rangeRound([height - marginBottom, marginTop]);

    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg
      .append("g")
      .selectAll()
      .data(d3.group(data, (d) => d.algorithm))
      .join("g")
      .attr("transform", ([algorithm]) => `translate(${fx(algorithm)},0)`)
      .selectAll()
      .data(([, d]) => d.filter((d) => d.metric !== "Time")) // Filter out the "Time" data
      .join("rect")
      .attr("x", (d) => x(d.metric))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => y(0) - y(d.value))
      .attr("fill", (d) => color(d.metric));

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(fx).tickSizeOuter(0))
      .call((g) => g.selectAll(".domain").remove());

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call((g) => g.selectAll(".domain").remove());

    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - marginRight - 100},${marginTop})`)
      .selectAll("g")
      .data(metrics)
      .join("g")
      .attr("transform", (d, i) => `translate(0,${i * 20})`);

    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", color);

    legend
      .append("text")
      .attr("x", 25)
      .attr("y", 13)
      .text((d) => d);

    container.appendChild(svg.node());
  }

  function updateKPIs(transformedData) {
    // Extract the time values for each algorithm
    const kpiData = {};

    // Loop through transformedData to get the time for each algorithm
    transformedData.forEach((d) => {
      const { algorithm, metric, value } = d;

      // Only store time values
      if (metric === "Time") {
        kpiData[algorithm] = value; // Store the time for each algorithm
      }
    });

    // Now update the KPIs in the DOM
    const kpiContainer = document.getElementById("kpi-container");
    kpiContainer.innerHTML = ""; // Clear any previous content

    // Loop through each algorithm and display its time
    Object.keys(kpiData).forEach((algorithm) => {
      const time = kpiData[algorithm];

      // Create a div for each algorithm's KPI
      const kpiDiv = document.createElement("div");
      kpiDiv.classList.add("kpi-block");

      kpiDiv.innerHTML = `
            <h3>${algorithm}</h3>
            <p>Time: ${time} ms</p>
        `;

      // Append the KPI div to the container
      kpiContainer.appendChild(kpiDiv);
    });
  }
});
