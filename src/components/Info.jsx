import React from "react";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export default class Info extends React.Component{
    render(){
        let infoBar;
        if(this.props.gameStatus === "ongoing"){
            infoBar = (
                <div style={{height:80, width:'100%'}}>
                </div>
            );
        }else if(this.props.gameStatus === "defeat"){
            infoBar = (
                <div style={{height:80, width:'100%'}}>
                    <Card style={{height:80, width:'50%'}}>
                        <Button color='primary' onClick={()=>{this.props.handler()}}>Try Again</Button>
                    </Card>
                </div>
            );
        }
        return (
            <div style={{height:200, width:'100%', justify:'center', alignItems:'center'}}>
                {infoBar}
                <div style={{height:80, width:'100%'}}>
                    <Badge style={{position:'absolute', margin:'auto'}} color='primary' badgeContent={this.props.playerCount}></Badge>
                </div>
            </div>
        )
    }
}