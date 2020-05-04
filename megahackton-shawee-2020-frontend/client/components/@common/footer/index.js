import React from 'react'

import { stylesRoot } from './styles'

import { Typography, Button } from '@material-ui/core'

export default function Component({ shopData }) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <Typography variant="button" className={classes.title}>
                Projeto teste para o Megahackton da Shawee, 2020
            </Typography>
        </div>
    )
}
