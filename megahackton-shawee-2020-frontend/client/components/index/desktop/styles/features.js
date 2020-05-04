import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '100vw',
    },
    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        textAlign: 'center',
    },

    col: {
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        display: 'grid',
        gridTemplateColumns: '2em 20em',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
    },

    icon: {
        color: THEME.THEME_COLOR.primary.main,
    },

    lottieAnimation: {
        justifySelf: 'center',
        alignSelf: 'center',
    },
}))
