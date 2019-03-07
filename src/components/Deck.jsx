import React from 'react';
import Poker from './Poker.jsx';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing.unit * 2
    }
});


class Deck extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            spacing: '8',
            pokerCount: this.props.pokerCount
        }
    }

    render(){

        const { classes } = this.props;
        const { spacing } = this.state;
        console.log(this.state.pokerCount);

        return(
            <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {this.state.pokerCount.map(value => (
              <Grid key={value} item>
                  <Paper style={{ backgroundColor: this.props.pokerColor, position: 'relative', left: 40 + value*-80 }} className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
        );
        
    }

}

Deck.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Deck);