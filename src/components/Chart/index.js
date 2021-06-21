import { useEffect } from 'react';
import * as d3 from "d3";
import { data } from '../../mock-api/chartData';

const Chart = () => {
  
  const drawChart = () => {
    const width = 500;

    const parseTime = d3.timeParse("%b %d, %Y");

    const dates = [];
    for (let obj of data) {
      dates.push(parseTime(obj.date));
    }
    const domain = d3.extent(dates);

    const xScale = d3.scaleTime().domain(domain).range([0, width])

    console.log(xScale)

    // const yScale = d3.scaleLinear().domain(d3.extent(chartData, d => d.quantity))
    
    // const line = d3.line()
      // .x((d) => { return xScale(d.month)})
      // .y((d) => { return yScale(d.quantity)})


      const xAxis = d3.axisBottom(xScale);

      const svg = d3.select("#my_dataviz");

      svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis);

    // console.log(line(chartData))

    // const xValue = chartData => chartData.month;
    // const xAxisLabel = 'Month';
    
    // const yValue = chartData => chartData.quantity;
    // const yAxisLabel = 'Quantity';

    // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",
      
    //   function(d) {
    //     console.log('d',d)
    //   }
    // )
  }

    // const x = d3.scaleTime()
    //   .domain(d3.extent(chartData.map(item => item.month)))

    // const y = d3.scaleLinear()
    //   .domain()

    // svg.append("path")
    //   .datum(data)
    //   .attr("fill", "none")
    //   .attr("stroke", "steelblue")
    //   .attr("stroke-width", 1.5)
    //   .attr("d", d3.line()
    //     .x(function(d) { return x(d.month) })
    //     .y(function(d) { return y(d.quantity) })
    //     )




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

export default Chart;


// const dimensions = {
//   width: 500,
//   height: 300,
//   margin: {
//     top: 115,
//     right: 20,
//     bottom: 40,
//     left: 60,
//   },
// };

// dimensions.boundedWidth =
// dimensions.width - dimensions.margin.left - dimensions.margin.right;
// dimensions.boundedHeight =
// dimensions.height - dimensions.margin.top - dimensions.margin.bottom;


// const svg = d3
//     .select("body")
//     .append("svg")
//     .attr("width", dimensions.width)
//     .attr("height", dimensions.height)
//     .append("g")
//     .style("transform",
//       `translate(${dimensions.margin.left}px,${dimensions.margin.top}px)`
//     );
