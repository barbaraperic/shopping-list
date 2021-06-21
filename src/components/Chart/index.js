import { useEffect } from 'react';
import * as d3 from "d3";
import { data } from '../../mock-api/chartData';

const Chart = () => {
  
  const drawChart = () => {
    const width = 400;
    const height = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);

    const min = d3.min(data, d => d.date)
    const max = d3.max(data, d => d.date)

    const extent = d3.extent(data, d => d.temp);

    const xScale = d3.scaleTime()
      .domain([min, max])
      .range([0, width])
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

    const yScale = d3.scaleLinear()
      .domain(extent)
      .range([height, 0])
    svg.append("g")
    .call(d3.axisLeft(yScale));

    const highLine = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.temp))

    
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", highLine);
  }
  

  useEffect(() => {
    drawChart();
  }, [])

  return <div id="my_dataviz"></div>
}

export default Chart;
