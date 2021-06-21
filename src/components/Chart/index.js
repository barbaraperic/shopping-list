import { useEffect } from 'react';
import * as d3 from "d3";
import { chartData } from '../../mock-api/chartData';

const Chart = () => {

  const drawChart = () => {
    d3.json(chartData, (d) => {
      console.log(d)
    })
  }
  
  // const drawChart = () => {
  //   const dimensions = {
  //     width: 500,
  //     height: 300,
  //     margin: {
  //       top: 115,
  //       right: 20,
  //       bottom: 40,
  //       left: 60,
  //     },
  //   };

  //   dimensions.boundedWidth =
  //   dimensions.width - dimensions.margin.left - dimensions.margin.right;
  //   dimensions.boundedHeight =
  //   dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  //   const svg = d3
  //   .select("body")
  //   .append("svg")
  //   .attr("width", dimensions.width)
  //   .attr("height", dimensions.height)
  //   .append("g")
  //   .style("transform",
  //     `translate(${dimensions.margin.left}px,${dimensions.margin.top}px)`
  //   );

  //   d3.json(chartData, 
  //     function(d) {
  //       console.log('d', d)
  //       return { month: d.month, quantity: d.quantity}
  //     },

  //     function(data) {
  //       // Add X axis --> it is a date format
  //     const x = d3.scaleTime()
  //       .domain(d3.extent(data, function(d) { return d.month; }))
  //       .range([ 0, width ]);
  //     svg.append("g")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(d3.axisBottom(x));

  //   // Add Y axis
  //     var y = d3.scaleLinear()
  //       .domain([0, d3.max(data, function(d) { return + d.quantity; })])
  //       .range([ height, 0 ]);
  //     svg.append("g")
  //       .call(d3.axisLeft(y));

  //   // Add the line
  //     svg.append("path")
  //       .datum(data)
  //       .attr("fill", "none")
  //       .attr("stroke", "steelblue")
  //       .attr("stroke-width", 1.5)
  //       .attr("d", d3.line()
  //         .x(function(d) { return x(d.month) })
  //         .y(function(d) { return y(d.quantity) })
  //         )
  //     }
  //   )
  // }

  useEffect(() => {
    drawChart();
  }, [])

  return <div id="my_dataviz"></div>
}

export default Chart