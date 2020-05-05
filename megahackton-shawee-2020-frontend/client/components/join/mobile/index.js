// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles'

import ShowUpComponent from './show_up'
import RegisterComponent from './register'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <ShowUpComponent />
                <RegisterComponent />
            </div>
        </div>
    )
}
