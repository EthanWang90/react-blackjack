import React from "react";
import Badge from "@material-ui/core/Badge";

export default class Info extends React.Component{
    render(){
        return (
            <div style={{height:200, width:'100%', display:'flex', justify:'center', alignItems:'center'}}>
                <Badge style={{position:'absolute', margin:'auto'}} color='primary' badgeContent={this.props.playerCount}></Badge>
            </div>
        )
    }
}