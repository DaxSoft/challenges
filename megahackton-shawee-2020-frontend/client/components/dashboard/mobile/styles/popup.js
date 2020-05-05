import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        borderRadius: '1em',
        backgroundColor: THEME.NEUTRAL_COLOR.neutralTransitionSecondary,
        boxShadow: THEME.BOX_SHADOW.float(),
        minWidth: '40vw',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

    logo: {
        width: '6em',
        height: '6em',
        objectFit: 'contain',
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        textAlign: 'center',
    },

    blockRoot: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        borderRadius: '.5rem',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: THEME.NEUTRAL_COLOR.neutralTransitionPrimary,
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
    },

    buttonBlock: {
        borderRadius: '.5rem',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        color: THEME.NEUTRAL_COLOR.neutralLighter,
        boxShadow: 'unset',
    },
}))
