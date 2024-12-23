import * as data from "./app.js";
const width = 900;
const height = 380;
const margin = { top: 20, right: 30, bottom: 50, left: 50 };

const svg = d3
  .select("#myChart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.inputSize)]) // Input size
  .range([0, width]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.time)]) // Time
  .range([height, 0]);

// Axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis)
  .append("text")
  .attr("x", width / 2)
  .attr("y", 40)
  .attr("fill", "black")
  .style("text-anchor", "middle")
  .text("Input Size");

svg
  .append("g")
  .call(yAxis)
  .append("text")
  .attr("x", -height / 2)
  .attr("y", -40)
  .attr("fill", "black")
  .style("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Time Taken");

// Add points
svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d.inputSize))
  .attr("cy", (d) => yScale(d.time))
  .attr("r", 5)
  .attr("fill", (d) => {
    switch (d.algorithm) {
      case "Bubble Sort":
        return "blue";
      case "Quick Sort":
        return "green";
      // Add more cases for other algorithms
      default:
        return "gray";
    }
  })
  .attr("stroke", "black")
  .attr("stroke-width", 0.5);

// Add legend
const algorithms = [...new Set(data.map((d) => d.algorithm))];
const legend = svg
  .selectAll(".legend")
  .data(algorithms)
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", (d, i) => `translate(0, ${i * 20})`);

legend
  .append("rect")
  .attr("x", width - 20)
  .attr("width", 10)
  .attr("height", 10)
  .attr("fill", (d) => {
    switch (d) {
      case "Bubble Sort":
        return "blue";
      case "Quick Sort":
        return "green";
      // Add more cases for other algorithms
      default:
        return "gray";
    }
  });

legend
  .append("text")
  .attr("x", width - 8)
  .attr("y", 10)
  .text((d) => d);
