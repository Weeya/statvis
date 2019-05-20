import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

class MyLineChart2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    convert(data) {
        var mydata = [];
        for (var i in data.data) {
            var line = {};
            for (var j in data.label) {
                if (data.label[j] === "year") {
                    line[data.label[j]] = data.data[i][j]
                }
                else {
                    line[data.label[j]] = parseFloat(data.data[i][j])
                }
            }
            mydata.push(line);
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
        console.log(data)
        return (
            <ResponsiveContainer width="99%" height={320}>
                <LineChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    { this.props.data.label.map((line, i) => (
                        line !== "year" ? <Line type="monotone" key={i} dataKey={line} stroke="#82ca9d" activeDot={{ r: 8 }}/>:null
                    ))}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default MyLineChart2;