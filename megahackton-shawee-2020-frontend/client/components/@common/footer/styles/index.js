import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        justifyContent: 'space-between !important',
        alignItems: 'center',
        gridGap: '1em',
        '& > *': {
            justifySelf: 'center',
        },
        padding: theme.spacing(CONSTANTS.SPACING.SMALL, CONSTANTS.SPACING.BIG),
        minWidth: '100vw',
        top: '0px',
        transition: 'all .3s ease-in',
        backgroundColor: THEME.THEME_COLOR.secondary.main,
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralTransitionSecondary,
    },
}))
