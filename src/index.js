import React from 'react';
import ReactDom from 'react-dom';

// export default class App extends react.Component{
// 	render(){
// 		return <h1>我是react</h1>;
// 	}
// }

// import Button from './Button.jsx';
import Button from '@material-ui/core/Button';

const myButton = <Button variant="contained" color="primary">Hello Worlddddddddddddddddddddddddddddddddddddd</Button>;

ReactDom.render(myButton, document.getElementById('app-container'));