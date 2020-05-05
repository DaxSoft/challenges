// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography, Button } from '@material-ui/core'
import PagesComponent from './pages'

import { stylesRoot } from './styles'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Component = ({}) => {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <Button className={classes.buttonTitle} href="/" onClick={() => {}}>
                <img className={classes.logo} src={'/logo.png'} />
            </Button>
            <PagesComponent />
        </div>
    )
}

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default Component
