import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        display: 'grid',
        gridTemplateRows: '10em 3em',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '12em',
        boxShadow: THEME.BOX_SHADOW.light(),
        borderRadius: '.5rem',
        backgroundColor: THEME.THEME_COLOR.background,
    },
    button: {
        width: 'max-content',
        height: 'max-content',
    },

    cashback: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        maxWidth: '100%',
        //padding: theme.spacing(CONSTANTS.SPACING.BIG),
        textAlign: 'center',
        fontSize: '.7rem',
        textTransform: 'uppercase',
    },

    logo: {
        width: '10em',
        height: '10em',
        alignSelf: 'center',
        objectFit: 'contain',
    },
}))
