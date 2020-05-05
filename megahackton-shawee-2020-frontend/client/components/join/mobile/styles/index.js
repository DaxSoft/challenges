import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        //padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '4em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '99vw',
        minHeight: '90vh',
    },

    col: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'space-evenly',
        gridGap: '3em',
        width: '100vw',
        justifyItems: 'flex-start',
        alignItems: 'center',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
    },
}))
