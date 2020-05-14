import React, { Component } from 'react'

function Clock() {
  return (
    <div>
      <p>Hola, la hora es: {new Date().toLocaleDateString() }</p>
    </div>
  )
}

export default Clock