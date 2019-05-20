import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

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
        const { classes, contentrender } = this.props;

        return (
            <Fragment>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Typography variant="h4" gutterBottom component="h2">
                        {contentrender}
                    </Typography>
                    {/* <Typography component="div" className={classes.chartContainer}>
                        <SimpleLineChart />
                    </Typography>
                    <Typography variant="h4" gutterBottom component="h2">
                        Products
                    </Typography>
                    <div className={classes.tableContainer}>
                        <SimpleTable />
                    </div> */}
                </main>
            </Fragment>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);