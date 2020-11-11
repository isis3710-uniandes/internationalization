import React from 'react';
import {FormattedDate, FormattedPlural, FormattedNumber} from 'react-intl';

export default class Job extends React.Component {
  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary}</td>
      			<td>{this.props.offer.city}</td>
      			<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
				<td>
					<FormattedNumber 
						value ={this.props.offer.views}
						displayType={'text'} 
						thousandSeparator={true}
					/> 
					<FormattedPlural 
						value ={this.props.offer.views}
						thousandSeparator={true}
						one=' million'
						other=' millions'
					/>
				</td>
  			</tr>
  		);
	}
}