import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG * 2),
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '100vw',
        minHeight: '20vw',
        backgroundColor: THEME.THEME_COLOR.secondary.main,
        clipPath: 'polygon(0 0,100% 0%,100% 100%,0 80%)',
        WebkitClipPath: 'polygon(0 0,100% 0%,100% 100%,0 80%)',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralLight,
        maxWidth: '75%',
        textAlign: 'left',
    },

    subtitle: {
        color: THEME.NEUTRAL_COLOR.neutralTransitionSecondary,
        maxWidth: '85%',
        fontSize: '1.5em',
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

    businessImg: {
        width: 'calc(30vw + 3em)',
        objectFit: 'cover',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        justifySelf: 'center',
        alignSelf: 'center',
    },
}))
