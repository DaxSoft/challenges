import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '@material-ui/core'

import { optionsStyles } from './styles'

export default function Component({}) {
    const classes = optionsStyles()
    const router = useRouter()

    return (
        <div className={classes.root}>
            <Button alt="projects" onClick={() => router.push('/about')}>
                Sobre
            </Button>
        </div>
    )
}
