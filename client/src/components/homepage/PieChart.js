import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
Chart.register(ArcElement, Legend);

const data = {
	labels: [
		"Option 1",
		"Option 2",
		"Option 3"
	],
	datasets: [{
		data: [60,30,10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		borderWidth: 0
	}]
};

const PieChart= () => {
		return(
			<Pie
        		data={data}
        		options={{
          			legend: { display: true, position: "right" },

          		datalabels: {
            		display: true,
            		color: "black",
          		},
          		tooltips: {
           			backgroundColor: "#5a6e7f",
         		},
        	}}
      	/>
	)
};
export default PieChart;