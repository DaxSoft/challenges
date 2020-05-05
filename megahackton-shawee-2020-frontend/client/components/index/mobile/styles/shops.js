import { makeStyles, fade } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '4em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100vw',
        marginTop: '2em',
        backgroundColor: fade(THEME.NEUTRAL_COLOR.neutralPrimary, 0.1),
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        maxWidth: '75%',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        textAlign: 'center',
    },

    col: {
        display: 'grid',
        gridTemplateColumns: 'max-content',
        gridAutoFlow: 'column',
        gridGap: '3em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        justifySelf: 'center',
        alignSelf: 'center',
        width: '99vw',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },
}))
