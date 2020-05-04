// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'

import { stylesRoot } from './styles/features'
import { Typography } from '@material-ui/core'
import ReactLottie from 'react-lottie'

import DoneAllIcon from '@material-ui/icons/DoneAll'
import LottieAnimation_Feature from '../../../../public/lottie/17769-gifting.json'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    return (
        <div className={classes.root}>
            <div className={classes.lottieAnimation}>
                <ReactLottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: LottieAnimation_Feature,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                        },
                    }}
                    width={'75%'}
                    height={'75%'}
                />
            </div>
            <div
                className={classes.row}
                style={{ justifySelf: 'center', alignSelf: 'center' }}
            >
                <Typography variant="h4" className={classes.title}>
                    Vantagens
                </Typography>
                <div className={classes.col}>
                    <DoneAllIcon className={classes.icon} />
                    <Typography variant="body1">
                        É totalmente <strong>gratuito</strong>. Sendo necessário
                        somente o seu cadastro.
                    </Typography>
                </div>
                <div className={classes.col}>
                    <DoneAllIcon className={classes.icon} />
                    <Typography variant="body1">
                        Você irá ajudar os mercados <strong>locais</strong>,
                        enquanto é beneficiado por isso.
                    </Typography>
                </div>
                <div className={classes.col}>
                    <DoneAllIcon className={classes.icon} />
                    <Typography variant="body1">
                        Haverá <strong>recompensas</strong> a longo tempo.
                        Seguidas de acordo com o seu empenho e resultado.
                    </Typography>
                </div>
            </div>
        </div>
    )
}
