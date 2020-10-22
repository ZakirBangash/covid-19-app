import React from 'react'
import './table.css'

export const Table = ({ countries }) => {

    
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
