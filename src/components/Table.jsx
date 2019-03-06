import React from 'react';
import Deck from './Deck.jsx';
import Paper from '@material-ui/core/Paper';

export default class Table extends React.Component{
    render(){
        return(
            <Paper>
                <Deck/>
            </Paper>
        );
    }
}