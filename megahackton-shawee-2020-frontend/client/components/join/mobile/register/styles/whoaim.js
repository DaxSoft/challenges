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

    title: {
        maxWidth: '99%',
        textAlign: 'center',
    },

    col: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        justifyContent: 'space-evenly',
        gridGap: '2em',
        justifyItems: 'center',
        alignItems: 'center',
    },

    clientButton: {
        justifySelf: 'center',
        background: THEME.GRADIENT_COLOR.neutralLinear,
        border: 0,
        borderRadius: 6,
        boxShadow: THEME.BOX_SHADOW.el12,
        color: THEME.NEUTRAL_COLOR.neutralLight,
        minWidth: '24px',
        width: 'max-content',
        padding: theme.spacing(1, 2),
        transition: 'all .3s ease-in',
    },

    merchantButton: {
        justifySelf: 'center',
        background: THEME.GRADIENT_COLOR.greenBeach,
        border: 0,
        borderRadius: 6,
        boxShadow: THEME.BOX_SHADOW.el12,
        color: THEME.NEUTRAL_COLOR.neutralLight,
        minWidth: '24px',
        width: 'max-content',
        padding: theme.spacing(1, 2),
        transition: 'all .3s ease-in',
    },
}))
