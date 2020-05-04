// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles'

import AboutComponent from './about'
import HowItWorksComponent from './how_it_works'
import ShopsComponent from './shops'
import FeatureComponent from './features'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <AboutComponent />
            <HowItWorksComponent />
            <ShopsComponent />
            <FeatureComponent />
        </div>
    )
}
