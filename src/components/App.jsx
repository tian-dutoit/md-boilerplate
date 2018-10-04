import React from 'react'
import Example from './Example'
import PaginationTable from './PaginationTable'
import StyleTable from './StyleTable'
import SortTable from './SortTable'
import "../main.css"

const App = () => (
  <div className='app-container'>
    <Example /> 
    <PaginationTable /> 
    <StyleTable /> 
    <SortTable /> 
  </div>
)

export default App