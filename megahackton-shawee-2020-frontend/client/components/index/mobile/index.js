// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <div />
        </div>
    )
}
