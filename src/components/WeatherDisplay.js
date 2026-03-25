import React from 'react'

const WeatherDisplay = ({data}) => {

  return (
    <div>
        <span><p style={{backgroundColor: data.temperature > 20 ? 'red' : 'blue'}}>Temperature: {data.temperature}</p></span>
        <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay