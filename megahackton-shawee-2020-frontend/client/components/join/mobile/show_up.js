// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { stylesRoot } from './styles/show_up'

import ReactLottie from 'react-lottie'
import LottieAnimation_Join from '../../../../public/lottie/16930-avenir.json'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <ReactLottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: LottieAnimation_Join,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                    },
                }}
                width={'12em'}
                height={'12em'}
            />
        </div>
    )
}
