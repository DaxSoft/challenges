import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG * 2),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100vw',
        minHeight: '20vw',
        backgroundColor: THEME.THEME_COLOR.secondary.main,
        clipPath: 'polygon(0 0,100% 0%,100% 100%,0 90%)',
        WebkitClipPath: 'polygon(0 0,100% 0%,100% 100%,0 90%)',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
    },

    title: {
        color: THEME.NEUTRAL_COLOR.neutralLight,
        maxWidth: '95%',
        textAlign: 'center',
        fontSize: '1.35em',
    },

    subtitle: {
        color: THEME.NEUTRAL_COLOR.neutralTransitionSecondary,
        maxWidth: '90%',
        fontSize: '0.9em',
    },

    callToAction: {
        width: 'max-content',
        height: 'max-content',
        borderRadius: '1em',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
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
        fontSize: '.8em',
        transition: 'all .3s ease-in',
    },

    businessImg: {
        width: 'calc(40vh)',
        objectFit: 'cover',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: '-2em',
    },
}))
