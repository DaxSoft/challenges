import React from 'react'
import { useRouter } from 'next/router'

import { Button, IconButton } from '@material-ui/core'

import { optionsStyles } from './styles'

import CloseIcon from '@material-ui/icons/Close'

export default function Component({ toggle }) {
    const classes = optionsStyles()
    const router = useRouter()

    return (
        <div className={classes.root}>
            <span className={classes.icon}>
                <IconButton onClick={toggle.off}>
                    <CloseIcon className={classes.svg} />
                </IconButton>
            </span>
            <div className={classes.row}>
                <Button
                    alt="projects"
                    onClick={() => router.push('/dashboard')}
                >
                    Dashboard
                </Button>
                <Button alt="projects" onClick={() => router.push('/join')}>
                    Participar
                </Button>
            </div>
            <div />
        </div>
    )
}
