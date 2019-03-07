import React from 'react';
import Deck from './Deck.jsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Panel from './Panel.jsx';

export default class Table extends React.Component{

    constructor(){
        super();
        this.state={
            pokerColor: 'yellow',
            pokerCount: [0,1,2]
        }
    }

    changeColor(){
        console.log('color');
        this.setState({
            pokerColor: 'green'
        });
    }

    addPoker(){
        this.state.pokerCount.push(this.state.pokerCount.slice(-1)[0]+1);
        console.log(this.state.pokerCount[-1]);
        console.log('after');
        this.setState({
            pokerCount: this.state.pokerCount
        });
    }

    render(){
        return(
            <div style={{width:"100%"}}>
                <div style={{height:100}}></div>
                <Grid container justify='center'>
                    <Grid item xs={8}>
                        <Paper container='true' elevation={20} style={{height: 400, verticalAlign:'bottom'}}>
                            <div style={{position:'relative',top:100}}>
                                <Grid container>
                                    <Grid container xs={3} justify='center' alignItems='center'>
                                        <Panel fabColor="red" changeColor={this.changeColor.bind(this)} addPoker={this.addPoker.bind(this)}/>
                                    </Grid>
                                    <Grid container xs={6}  justify='center' alignItems='center'>
                                        <Deck style={{bottom:10}} pokerColor={this.state.pokerColor} pokerCount={this.state.pokerCount}/>  
                                    </Grid>
                                    <Grid container xs={3}  justify='center' alignItems='center'>
                                        <Panel fabColor="blue" changeColor={this.changeColor.bind(this)} addPoker={this.addPoker.bind(this)}/>
                                    </Grid>     
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        );
    }
}