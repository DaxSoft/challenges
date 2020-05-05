// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles/about'

import { Typography, Button } from '@material-ui/core'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Typography variant="h4" className={classes.title}>
                    <strong>Bairro Amigo</strong> <br />A sua forma de ajudar e
                    ser ajudado na internet.
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Com o Bairro Amigo você ganha dinheiro ajudando aos
                    comerciantes locais. <br />
                    <strong>É gratuito e simples de trabalhar!</strong>
                </Typography>
                <Button
                    variant="contained"
                    className={classes.callToAction}
                    href="/join"
                >
                    Quero participar!
                </Button>
                <span style={{ height: '3em', width: '1em' }} />
            </div>
            <div className={classes.row}>
                <img
                    src="/svg/undraw_business_shop_qw5t.svg"
                    alt="business_shop_img"
                    className={classes.businessImg}
                />
            </div>
        </div>
    )
}
