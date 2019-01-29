import React from 'react';
import axios from 'axios';

class ComparisonRadial extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/stats')
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err));
    }
    render(){
        return (
            <div></div>
        )
    }
}

export default ComparisonRadial;

