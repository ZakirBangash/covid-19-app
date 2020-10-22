import React,{useEffect} from 'react'
import './table.css'

export const Table = ({ countries }) => {

// useEffect(() => {
//   fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
//         .then(response => response.json())
//         .then(data => {
          
//             let lastDataPoint;
        

//             for (let date in data.cases) {
//               if (lastDataPoint) {
//                   console.log(data['cases'][date] , lastDataPoint);
//                   console.log('below the subtraction');
//                   console.log( data['cases'][date] - lastDataPoint);

//                 // let newDataPoint = {
//                 //   x: date,
//                 //   y: data[casesType][date] - lastDataPoint,
//                 // };
               
//               }
//               lastDataPoint = data['cases'][date];
//             }
//         })
       
//       }, [])


    
    return (
        <div className='table'>
            
            {
            countries?.length > 0  && (
            countries.map(country => (
            <tr>
                <td>
                    {country.country}
                </td>
            <td><strong>{country.cases}</strong></td>
            </tr>

            ))
            )}



        </div>
    )
}
