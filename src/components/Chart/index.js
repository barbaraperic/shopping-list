import { useEffect } from 'react';
import * as d3 from "d3";
import { data } from '../../mock-api/chartData';
import { COLORS } from '../../style/constants';

const Chart = () => {
  
  const drawChart = () => {
    
    const width = 400;
    const height = 200;
    const margin = {top: 10, right: 29, bottom: 30, left: 60};

    const svg = d3.select("#my_dataviz")
                  .append("svg")
                    .attr("width", 500)
                    .attr("height", 300)
                  .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");


    const xScale = d3.scaleBand()
      .domain(data.map(function(d) { 
        return d.date
      }))
      .range([0, width])
      .padding(-1);
      // .range([0, width])
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale))

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { 
        return d.quantity 
      })])
      .range([height, 0])
    svg.append("g")
      .call(d3.axisLeft(yScale).ticks(5));

    const highLine = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.quantity))
      .curve(d3.curveNatural);

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", `${COLORS.primary}`)
        .attr("stroke-width", 1.5)
        .attr("transform", "translate(67, 0)")
        .attr("d", highLine);
  }
  

  useEffect(() => {
    drawChart();
  }, [])

  return <div id="my_dataviz"></div>
}

export default Chart;
