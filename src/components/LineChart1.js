import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

class MyLineChart1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    convert(data) {
        var mydata = [];
        for (var i in data.data) {
            mydata.push({
                "month": data.data[i][0],
                "budget": parseFloat(data.data[i][1]),
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
        const {data} = this.state;
        
        return (
            <ResponsiveContainer width="99%" height={320}>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="budget" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default MyLineChart1;