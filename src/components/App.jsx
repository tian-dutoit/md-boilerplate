import React from 'react'
import Example from './Example'
// import PaginationTable from './PaginationTable'
// import StyleTable from './StyleTable'
// import SortTable from './SortTable'
import { NormalTableContainer } from './NormalTableContainer';
import { MatTableContainer } from './MatTableContainer';
import "../main.css"


const App = () => (
  <div className='app-container'>
    <Example /> 
    {/* <PaginationTable /> 
    <StyleTable /> 
    <SortTable />  */}
    <NormalTableContainer />
    <MatTableContainer />
  </div>
)

export default App