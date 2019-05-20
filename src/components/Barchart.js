import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'mnre', budget: 1481.944444, amt: 2400,
    },
    {
        name: 'pcd', budget: 528.3555556, amt: 2210,
    },
    {
        name: 'dmcr', budget: 1273.566667, amt: 2290,
    },
    {
        name: 'dmr', budget: 621.3444444, amt: 2000,
    },
    {
        name: 'dwr', budget: 7542.855556, amt: 2181,
    },
    {
        name: 'dgr', budget: 2306.3, amt: 2500,
    },
    {
        name: 'forest', budget: 4331.911111, amt: 2100,
    },
    {
        name: 'deqp', budget: 617.5777778, amt: 2100,
    },
    {
        name: 'dnp', budget: 10223.27778, amt: 2100,
    },
    {
        name: 'onep', budget: 1439.088889, amt: 2100,
    },
    {
        name: 'bedo', budget: 162.1333333, amt: 2100,
    },
    {
        name: 'tgo', budget: 128.2777778, amt: 2100,
    },
];

export default class MyBarChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    convert(data) {
        var mydata = [];
        for (var i in data.label) {
            mydata.push({
                "name": data.label[i],
                "budget": parseFloat(data.data[i]),
            });
        }
        return mydata
    }

    componentWillMount() {
        this.setState(state => {
            state.data = this.convert(this.props.data)
            return state
        })
    }

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#82ca9d" />
            </BarChart>
        );
    }
}