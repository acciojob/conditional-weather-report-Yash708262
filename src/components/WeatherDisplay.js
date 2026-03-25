import React from 'react'

const WeatherDisplay = ({data}) => {

  return (
    <div>
       <p>Temperature: <span style={{backgroundColor: data.temperature > 20 ? 'red' : 'blue'}}>{data.temperature}</span></p>
        <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay