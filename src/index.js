import React from 'react';
import ReactDom from 'react-dom';
import Table from './components/Table.jsx';

const myDiv = <Table/>;

ReactDom.render(myDiv, document.getElementById('app-container'));