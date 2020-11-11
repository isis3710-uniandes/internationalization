import React from 'react';
import {FormattedDate, FormattedNumber } from 'react-intl';

export default class Job extends React.Component {
	addMillions(views){
		console.log(views);
		let number =  parseInt(views);
		let textEnding;
		if(number > 0)
			textEnding = " millions";
		else
			textEnding = " million";
		console.log(number);
		textEnding = number + textEnding;
		console.log(textEnding);
		return textEnding;
	}

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
					/> million(s)
				</td>
  			</tr>
  		);
	}
}