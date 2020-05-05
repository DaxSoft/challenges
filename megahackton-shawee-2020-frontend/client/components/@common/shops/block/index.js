import React from 'react'

import { stylesRoot } from './styles'

import { Typography, Button } from '@material-ui/core'

export default function Component({ shopData, onClick }) {
    const classes = stylesRoot()
    const percentualCashback = parseFloat(shopData.cashback * 100).toFixed(1)

    return (
        <Button
            className={classes.button}
            onClick={() => onClick(shopData) || {}}
        >
            <div className={classes.root}>
                <img
                    src={shopData.logo}
                    className={classes.logo}
                    alt={shopData.name}
                />
                <Typography variant="h6" className={classes.cashback}>
                    <strong>{percentualCashback}%</strong>, de comissão!
                </Typography>
            </div>
        </Button>
    )
}
