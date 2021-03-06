import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '3em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '99vw',
        minHeight: '90vh',
    },

    col: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 16em)',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        width: '99vw',
    },

    title: {
        textAlign: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },
}))
