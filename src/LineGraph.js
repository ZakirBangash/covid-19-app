// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import numeral from "numeral";

// const options = {
//   legend: {  
//     display: false,
//   },
//   elements: {
//     point: {
//       radius: 0,
//     },
//   },
//   maintainAspectRatio: false,
//   tooltips: {
//     mode: "index",
//     intersect: false,
//     callbacks: {
//       label: function (tooltipItem, data) {
//         return numeral(tooltipItem.value).format("+0,0");
//       },
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         type: "time",
//         time: {
//           format: "MM/DD/YY",
//           tooltipFormat: "ll",
//         },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: {
//           display: false,
//         },
//         ticks: {
//           // Include a dollar sign in the ticks
//           callback: function (value, index, values) {
//             return numeral(value).format("0a");
//           },
//         },
//       },
//     ],
//   },
// };

// const buildChartData = (data, casesType) => {
//   let chartData = [];
//   let lastDataPoint;
//   for (let date in data.cases) {
//     if (lastDataPoint) {
//       let newDataPoint = {
//         x: date,
//         y: data[casesType][date] - lastDataPoint,
//       };
//       chartData.push(newDataPoint);
//     }
//     lastDataPoint = data[casesType][date];
//   }
//   return chartData;
// };

// function LineGraph() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           let chartData = buildChartData(data, 'cases');
//           setData(chartData);
//           console.log(chartData);
//           // buildChart(chartData);
//         });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data?.length > 0 && (
//         <Line
//           data={{
//             datasets: [
//               {
//                 backgroundColor: "rgba(204, 16, 52, 0.5)",
//                 borderColor: "#CC1034",
//                 data: data,
//               },
//             ],
//           }}
//           options={options}
//         />
//       )}
//     </div>
//   );
// }

// export default LineGraph;

import React,{useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';


function LineExample(){
    const [daily, setdaily] = useState([]);
    const [dailyCases, setdailyCases] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response) => {
              return response.json();
            })
            .then(({cases}) => {
            
              let date =Object.keys(cases);
              setdaily(date);
              setdailyCases(cases);
            
            });
        };
    
        fetchData();
      }, []);

 
    const data = {
        labels: daily.map(item=>item),
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyCases.map(item=> console.log(item))
          }
        ]
      };
      

    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  
    }

    export default LineExample;