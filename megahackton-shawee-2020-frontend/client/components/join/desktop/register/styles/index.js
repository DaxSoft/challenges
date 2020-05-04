import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'flex-start',
        alignItems: 'center',
    },
}))

export const clientRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        borderRadius: '1rem',
        boxShadow: THEME.BOX_SHADOW.light(),
    },
    button: {
        justifySelf: 'center',
        background: THEME.NEUTRAL_COLOR.neutralPrimary,
        border: 0,
        borderRadius: 6,
        color: THEME.NEUTRAL_COLOR.neutralLight,
        height: 48,
        width: 'max-content',
        padding: theme.spacing(1, 2),
        transition: 'all .3s ease-in',
        '&:hover': {
            background: THEME.NEUTRAL_COLOR.neutralDark,
        },
    },

    title: {
        maxWidth: '85%',
        textAlign: 'center',
    },
}))
