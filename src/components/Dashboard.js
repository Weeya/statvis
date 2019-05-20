import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";

const axios = require('axios');

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myData: {},
            open: false,
            contentrender: ""
        };
        this.getmyData = this.getmyData.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.setContentrender = this.setContentrender.bind(this)
    }

    async getmyData() {
        const response = await axios.get('/data.json', {}) //statvis
        if (response.status === 200) {
            this.setState(state => {
                state.myData = response.data
                return state
            })
        }
    }

    setOpen() {
        this.setState(state => {
            state.open = !state.open
            return state
        })
    }

    setContentrender(value) {
        this.setState(state => {
            state.contentrender = value
            return state
        })
    }

    componentDidMount() {
        this.getmyData();
    }

    render() {
        const { classes } = this.props;
        const { myData, open, contentrender } = this.state;
        console.log(myData)

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header setOpen={this.setOpen} open={open} />
                <Menu menu={myData.menu} setOpen={this.setOpen} open={open} data={myData.menu} setContentrender={this.setContentrender} />
                <Content content={myData.content} contentrender={contentrender} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
