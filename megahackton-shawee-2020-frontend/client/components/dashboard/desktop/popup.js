// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { Typography, Backdrop, Button } from '@material-ui/core'
import { stylesRoot } from './styles/popup'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const BlockBuy = ({ shopData }) => {
    const classes = stylesRoot()
    const percentual = parseFloat(shopData.state.cashback * 100 - 2).toFixed(1)

    return (
        <div className={classes.blockRoot}>
            <Typography
                variant="h6"
                style={{ color: '#8e44ad', textAlign: 'center' }}
            >
                Compre e Ganhe - {percentual}%
            </Typography>
            <Button
                variant="contained"
                className={classes.buttonBlock}
                style={{ backgroundColor: '#9b59b6', boxShadow: 'unset' }}
            >
                Ativar Cashback
            </Button>
        </div>
    )
}

const BlockShare = ({ shopData }) => {
    const classes = stylesRoot()
    const percentual = parseFloat(shopData.state.cashback * 100).toFixed(1)

    return (
        <div className={classes.blockRoot}>
            <Typography
                variant="h6"
                style={{ color: '#2c3e50', textAlign: 'center' }}
            >
                Divulgue e Ganhe - {percentual}%
            </Typography>
            <Button
                variant="contained"
                className={classes.buttonBlock}
                style={{ backgroundColor: '#34495e', boxShadow: 'unset' }}
            >
                Quero Divulgar
            </Button>
        </div>
    )
}

export default function Component({ shopData }) {
    const classes = stylesRoot()

    function handleCloseBackdrop() {
        shopData.setState({})
    }

    return (
        <Backdrop
            onClick={handleCloseBackdrop}
            open={shopData.isValid()}
            className={classes.backdrop}
        >
            <div className={classes.root}>
                <div className={classes.row}>
                    <img src={shopData.state.logo} className={classes.logo} />
                    <Typography variant="button" className={classes.title}>
                        {shopData.state.name}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <BlockBuy shopData={shopData} />
                    <BlockShare shopData={shopData} />
                </div>
            </div>
        </Backdrop>
    )
}
