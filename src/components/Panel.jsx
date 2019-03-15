import React from 'react';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import deepOrange from '@material-ui/core/Colors/deepOrange';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';

export default class Panel extends React.Component{
    render(){
        return(
            <div>
                <Fab disabled={!this.props.status} onClick={()=>{this.props.handler();console.log(this)}} style={{margin:10,color:'#fff',backgroundColor:this.props.fabColor, fontFamily:'Impact, Charcoal, sans-serif', fontSize:'150%'}}>{this.props.fabText[0]}</Fab>
                {/* <Fab onClick={function(){console.log(this)}} style={{margin:10,color:'#fff',backgroundColor:this.props.fabColor}}>H</Fab> */}
                <Grid container xs={12} justify='center' style={{fontFamily:'Impact, Charcoal, sans-serif'}}>
                    
                        {this.props.fabText}
                    
                </Grid>
            </div>
        );
    }
}