// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles/how_it_works'
import { Typography, Button } from '@material-ui/core'
import Scrollable from 'react-indiana-drag-scroll'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Como funciona
            </Typography>
            <Scrollable horizontal={true} className={classes.col}>
                <div className={classes.block}>
                    <img
                        src="/svg/undraw_working_remotely_jh40.svg"
                        alt="first_step"
                        className={classes.blockImg}
                    />
                    <Typography variant="h6" className={classes.blockTitle}>
                        <span style={{ color: '#d63031' }}>1.</span> Escolha
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.blockSubtitle}
                    >
                        São diversas opções de estabelicementos e você pode
                        divulgar quantas quiser.
                    </Typography>
                </div>
                <div className={classes.block}>
                    <img
                        src="/svg/undraw_share_opinion_jpw0.svg"
                        alt="second_step"
                        className={classes.blockImg}
                    />
                    <Typography variant="h6" className={classes.blockTitle}>
                        <span style={{ color: '#d63031' }}>2.</span> Compartilhe
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.blockSubtitle}
                    >
                        Envie seu link de recomendação por e-mail, WhatsApp ou
                        publique nas suas redes sociais e blog.
                    </Typography>
                </div>
                <div className={classes.block}>
                    <img
                        src="/svg/undraw_Savings_dwkw.svg"
                        alt="third_step"
                        className={classes.blockImg}
                    />
                    <Typography variant="h6" className={classes.blockTitle}>
                        <span style={{ color: '#d63031' }}>3.</span> Ganhe
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.blockSubtitle}
                    >
                        A cada compra feita pelo seu link, você ganha uma
                        comissão no seu extrato do BTEX.
                    </Typography>
                </div>
            </Scrollable>
            <Typography variant="h5" className={classes.legend}>
                Seja a mão amiga de seu bairro. <br />O processo de cadastrar é
                rápido e simples.
            </Typography>
            <Button
                variant="contained"
                className={classes.callToAction}
                href="/join"
            >
                Participar!
            </Button>
        </div>
    )
}
