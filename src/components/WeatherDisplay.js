import React from 'react'

const WeatherDisplay = ({data}) => {

  return (
    <div>
       <p>Temperature: <span style={{ color: data.temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)' }}>{data.temperature}</span></p>
        <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay