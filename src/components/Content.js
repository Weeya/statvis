import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from './Home';
import MyLineChart1 from './LineChart1';
import MyLineChart2 from './LineChart2';
import MyBarChart from './Barchart';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
});

class Content extends React.Component {

    render() {
        const { classes, content, contentrender } = this.props;

        return (
            <Fragment>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {contentrender.toLowerCase() === "home" ? <Home/> : null}
                    {contentrender.toLowerCase() === "graph_1" ? <MyLineChart1 data={content["graph_1"]} /> : null}
                    {contentrender.toLowerCase() === "graph_2" ? <MyLineChart2 data={content["graph_2"]} /> : null}
                    {contentrender.toLowerCase() === "graph_3" ? <MyBarChart data={content["graph_3"]} /> : null}
                </main>
            </Fragment>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);