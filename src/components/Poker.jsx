import React from 'react';
import Paper from '@material-ui/core/Paper';
import pokerImg from '../images/poker.jpeg';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
    paper: {
      height: 140,
      width: 100,
    }
});

class Poker extends React.Component{
    constructor(props){
        super(props)
    }

    static defaultProps={
        name: 'test',
        name2: 'test2'
    }

    // shouldComponentUpdate(nextStat,nextProps){
    //     if(this.props == nextProps){
    //         return false
    //     }
    //     return true
    // }

        /* Un-commeting this function, you can see that the render() method is not called agian.*/
    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(nextProps) === JSON.stringify(this.props) &&
            JSON.stringify(nextState) === JSON.stringify(this.state)) {
            return false;
        }
        return true;
    }

    render(){
        console.log('rendertest');
        const { classes } = this.props;
        return(
            <div>
                <Paper elevation={5} className={classes.paper} style={{ backgroundImage:`url(${pokerImg})`,backgroundSize:'100% 100%'}}>{this.props.id}</Paper>
                {/* <Paper elevation={5} className={classes.paper} ></Paper> */}
            </div>
        )
    }
}

Poker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Poker);