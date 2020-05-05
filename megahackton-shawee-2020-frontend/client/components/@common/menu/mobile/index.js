// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { useBoolean } from '@vorlefan/react-hooks'

import { stylesRoot } from './styles/index'

import { Typography, Button, IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import PagesComponent from './pages'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const Component = ({}) => {
    const classes = stylesRoot()
    const toggle = useBoolean(false)

    return (
        <div className={classes.root}>
            <Button className={classes.buttonTitle} href="/" onClick={() => {}}>
                <img className={classes.logo} src={'/logo.png'} />
            </Button>
            {toggle.isOff() ? (
                <IconButton onClick={toggle.on}>
                    <MenuIcon />
                </IconButton>
            ) : (
                <PagesComponent toggle={toggle} />
            )}
        </div>
    )
}

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default Component
