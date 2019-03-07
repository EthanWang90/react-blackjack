import React from 'react';
import Fab from '@material-ui/core/Fab';
import deepOrange from '@material-ui/core/Colors/deepOrange';

export default class Panel extends React.Component{
    render(){
        return(
            <div>
                <Fab onClick={()=>{this.props.changeColor();this.props.addPoker();console.log(this)}} style={{margin:10,color:'#fff',backgroundColor:this.props.fabColor}}>H</Fab>
                {/* <Fab onClick={function(){console.log(this)}} style={{margin:10,color:'#fff',backgroundColor:this.props.fabColor}}>H</Fab> */}
                <div>Hit</div>
            </div>
        );
    }
}