import React, { Component } from 'react'

let counter = 0

export default class NormalTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      rows: [
        this.createData('Cupcake', 305, 3.7),
        this.createData('Donut', 452, 25.0),
        this.createData('Eclair', 262, 16.0),
        this.createData('Frozen yoghurt', 159, 6.0),
        this.createData('Gingerbread', 356, 16.0),
        this.createData('Honeycomb', 408, 3.2),
        this.createData('Ice cream sandwich', 237, 9.0),
        this.createData('Jelly Bean', 375, 0.0),
        this.createData('KitKat', 518, 26.0),
        this.createData('Lollipop', 392, 0.2),
        this.createData('Marshmallow', 318, 0),
        this.createData('Nougat', 360, 19.0),
        this.createData('Oreo', 437, 18.0),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1))
    }
  }
    createData(name, calories, fat) {
    counter += 1
    return { id: counter, name: name, calories: calories, fat: fat}
  }

  render() {
    return (
      <div>
        <table className='normal-table'>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr> 
          </thead>
          <tbody>
            {this.state.rows.map(row => {
            return (  
              <tr>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
              </tr>
             )})}
          </tbody>
          
        </table> 
      </div>
    )
  }
}

