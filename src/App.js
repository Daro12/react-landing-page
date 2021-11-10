import { CssBaseline } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/useStyles';

import Header from './components/Header'
import PlaceToVisit from './components/PlaceToVisit';



const App = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <PlaceToVisit/>
        </div>
    )
}


export default App;
