import React from 'react';
import Job from "./job";

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "Schneider Electric", 
    	  "salary": 4.5,
    	  "city": "Bogotá, Colombia",
        "date": "2019-03-26",
        "visits": 321000
      }, 
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.", 
        "salary": 20,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27",
        "visits": 2000
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora", 
        "salary": 1,
        "city": "Cali, Colombia",
        "date": "2019-03-28",
        "visits": 13400
      }
    ]
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Position</th>
              <th scope="col">Company</th>
              <th scope="col">Salary</th>
              <th scope="col">City</th>
              <th scope="col">Publication date</th>
              <th scope="col">Visits</th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}