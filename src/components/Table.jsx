import React from 'react';
import Deck from './Deck.jsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Panel from './Panel.jsx';
import Info from './Info.jsx';
import tableImg from '../images/table.jpg';


// const tableImg = require('../images/table.jpg');

const baseArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const allPoker = baseArray.map(value=>('红' + value)).concat(baseArray.map(value=>('黑' + value))).concat(baseArray.map(value=>('梅' + value))).concat(baseArray.map(value=>('方' + value)));
const allPokers = allPoker.concat(allPoker);

function shuffle(a) {
    var len = a.length;
    for(var i=0;i<len;i++){
        var end = len - 1 ;
        var index = (Math.random()*(end + 1)) >> 0;
        var t = a[end];
        a[end] = a[index];
        a[index] = t;
    }
    return a;
};


export default class Table extends React.Component{

    constructor(){
        super();
        this.state={
            pokerColor: 'yellow',
            pokerCount: [0,1,2],
            localPokers: shuffle(allPokers),
            playerDeck: [],
            dealerDeck: [],
            hitStatus: true,
            standStatus: true,
        }
    }

    componentWillMount(){
        let poker1 = this.deal();
        let poker2 = this.deal();
        let poker3 = this.deal();
        let poker4 = this.deal();

        this.setState({
            playerDeck: [poker1,poker2],
            dealerDeck: [poker3,poker4],
        });
        console.log('componentwillmount');
    }

    deal=()=>{
        let tmpPoker = this.state.localPokers.pop();
        this.setState({
            localPokers: this.state.localPokers
        });
        return tmpPoker
    }

    playerDeal=()=>{
        let poker = this.deal();
        this.setState({
            playerDeck: this.state.playerDeck.concat([poker])
        },()=>{
            
            if(this.state.playerDeck.length >= 4){
                this.setState({
                    hitStatus: false,
                    standStatus: false,
                })
            }
        })
    }

    dealerDeal=()=>{
        let poker = this.deal();
        this.setState({
            dealerDeck: this.state.dealerDeck.concat([poker])
        })
    }

    stand=()=>{
        this.setState({
            hitStatus: false,
            standStatus: false
        },this.dealerDeal)
    }

    changeColor(){

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
                    <Grid item xs={10}>
                    
                        {/* <Paper container='true' elevation={20} style={{height: 600, verticalAlign:'bottom', backgroundImage:`url(${tableImg})`}}> */}
                            <div style={{position:'relative',top:20}}>
                                <Grid container>
                                    <Grid container xs={3} justify='center' alignItems='flex-end'>
                                        <Panel fabColor='red' fabText="Hit" status={this.state.hitStatus} handler={this.playerDeal}/>
                                    </Grid>
                                    <Grid container xs={6}  justify='center' alignItems='center'>
                                        <Deck name='dealer' localPokers={this.state.dealerDeck}/>
                                        <Info></Info>
                                        <Deck name='player' localPokers={this.state.playerDeck}/>  
                                    </Grid>
                                    <Grid container xs={3}  justify='center' alignItems='flex-end'>
                                        <Panel fabColor='blue' fabText='Stand' status={this.state.standStatus} handler={this.stand}/>
                                    </Grid>     
                                </Grid>
                            </div>
                        {/* </Paper> */}
                    </Grid>
                </Grid>
            </div>

        );
    }
}