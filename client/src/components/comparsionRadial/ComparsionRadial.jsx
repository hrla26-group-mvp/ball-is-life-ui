import React from 'react';
import axios from 'axios';

const chartSize = 450;
	const numberOfScales = 4;
	const middleOfChart = (chartSize / 2).toFixed(4);
	const scale = value => (
		<circle
			key={`scale-${value}`}
			cx={0}
			cy={0}
			r={((value / numberOfScales) * chartSize) / 2}
			fill="#FAFAFA"
			stroke="#999"
			strokeWidth="0.2"
		/>
	);

class ComparisonRadial extends React.Component {
  constructor(props){
		super(props);
			this.state={
				data: ''
			}
	}
	
	componentDidMount(){
			axios.get('http://localhost:3000/api/stats')
			.then(data => {
					this.setState({
							data: data.players
					})
			})
			.catch(err => console.log(err));
	}
  render(){
		const groups = [];
		const scales = [];
		for (let i = numberOfScales; i > 0; i--) {
			scales.push(scale(i));
		}
		groups.push(<g key={`scales`}>{scales}</g>);
        return (
					<svg
					version="1"
					xmlns="http://www.w3.org/2000/svg"
					width={chartSize}
					height={chartSize}
					viewBox={`0 0 ${chartSize} ${chartSize}`}
				>
					<g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
				</svg>
        )
    }
}

export default ComparisonRadial;

