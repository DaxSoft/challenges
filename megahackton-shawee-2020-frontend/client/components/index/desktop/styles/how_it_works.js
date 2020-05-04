import { makeStyles } from '@material-ui/core/styles'
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
        width: '99vw',
        marginTop: '2em',
    },

    title: {
        textTransform: 'uppercase',
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
    },

    col: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, max-content)',
        gridGap: '12em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
    },

    block: {
        display: 'grid',
        gridTemplateRows: '12em 2em 12em',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        borderRadius: '1em',
        boxShadow: THEME.BOX_SHADOW.light(),
    },

    blockImg: {
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        width: '12em',
    },

    blockTitle: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        textAlign: 'center',
    },

    blockSubtitle: {
        color: THEME.NEUTRAL_COLOR.neutralSecondary,
        textAlign: 'center',
        width: '12em',
        textTransform: 'none',
    },

    legend: {
        maxWidth: '75%',
        textAlign: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },

    callToAction: {
        width: 'max-content',
        height: 'max-content',
        borderRadius: '1em',
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        backgroundColor: THEME.THEME_COLOR.primary.main,
        color: THEME.NEUTRAL_COLOR.neutralLight,
        boxShadow: THEME.BOX_SHADOW.float(
            16,
            THEME.THEME_COLOR.primary.main,
            0.6
        ),
        '&:hover, focus': {
            backgroundColor: THEME.THEME_COLOR.primary.bridge,
            boxShadow: THEME.BOX_SHADOW.float(
                6,
                THEME.THEME_COLOR.primary.bridge,
                0.7
            ),
        },
        fontSize: '1.5em',
        transition: 'all .3s ease-in',
    },
}))
