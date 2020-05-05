// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles/whoaim'

import { Typography, Button } from '@material-ui/core'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({ toggleJoin }) {
    const classes = stylesRoot()

    const handleClientToggle = () => toggleJoin.highlight('client')
    const handleMerchantToggle = () => toggleJoin.highlight('merchant')

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Seja bem-vindo! <br />
                Como você gostaria de se registrar?
            </Typography>
            <div className={classes.col}>
                <Button
                    onClick={handleClientToggle}
                    className={classes.clientButton}
                    variant="contained"
                >
                    Divulgador
                </Button>
                <Button
                    onClick={handleMerchantToggle}
                    className={classes.merchantButton}
                    variant="contained"
                >
                    Mercador
                </Button>
            </div>
        </div>
    )
}
