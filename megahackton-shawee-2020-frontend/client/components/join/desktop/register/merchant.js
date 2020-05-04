// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch } from '@vorlefan/react-hooks'

import { clientRoot } from './styles'
import {
    Typography,
    TextField,
    Button,
    CircularProgress,
} from '@material-ui/core'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

const NameField = ({ clientRegister }) => {
    const handleChange = ({ target }) => {
        clientRegister.setup.set('name', target.value)
    }

    return (
        <TextField
            type="text"
            id="name"
            name="name"
            label="Seu nome"
            color="secondary"
            onChange={handleChange}
            value={clientRegister.setup.state.name}
            fullWidth={true}
        />
    )
}

const BusinessField = ({ clientRegister }) => {
    const handleChange = ({ target }) => {
        clientRegister.setup.set('business', target.value)
    }

    return (
        <TextField
            type="text"
            id="business"
            name="business"
            label="Qual o seu negócio?"
            color="secondary"
            onChange={handleChange}
            value={clientRegister.setup.state.business}
            fullWidth={true}
        />
    )
}

const EmailField = ({ clientRegister }) => {
    const handleChange = ({ target }) => {
        clientRegister.setup.set('email', target.value)
    }

    return (
        <TextField
            type="email"
            id="email"
            name="email"
            label="Seu e-mail"
            color="secondary"
            onChange={handleChange}
            value={clientRegister.setup.state.email}
            fullWidth={true}
        />
    )
}

const PhoneNumberField = ({ clientRegister }) => {
    const handleChange = ({ target }) => {
        clientRegister.setup.set('phone_number', target.value)
    }

    return (
        <TextField
            type="tel"
            id="phone_number"
            name="phone_number"
            label="Seu celular"
            color="secondary"
            onChange={handleChange}
            value={clientRegister.setup.state.phone_number}
            fullWidth={true}
        />
    )
}

const PasswordField = ({ clientRegister }) => {
    const handleChange = ({ target }) => {
        clientRegister.setup.set('password', target.value)
    }

    return (
        <TextField
            type="password"
            id="password"
            name="password"
            label="Sua senha"
            color="secondary"
            onChange={handleChange}
            value={clientRegister.setup.state.password}
            fullWidth={true}
        />
    )
}

export default function Component({ toggleJoin }) {
    const classes = clientRoot()

    const clientRegister = useFetch(
        {
            endpoint: 'https://bb8a4939.ngrok.io/users/store',
            start: false,
            stateInit: {
                name: null,
                email: null,
                phone_number: null,
                password: null,
                business: null,
            },
        },
        'POST',
        fetch
    )

    const name =
        clientRegister.data && clientRegister.data.name
            ? clientRegister.data.name
            : 'mercador'

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" className={classes.title}>
                Prazer, <strong>{name}</strong>! <br />
                Precisamos de alguns dados seus para concluir o cadastro.
            </Typography>
            <EmailField clientRegister={clientRegister} />
            <NameField clientRegister={clientRegister} />
            <PhoneNumberField clientRegister={clientRegister} />
            <PasswordField clientRegister={clientRegister} />
            <BusinessField clientRegister={clientRegister} />
            {clientRegister.loading.isOn() ? (
                <CircularProgress color="secondary" />
            ) : (
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={clientRegister.refresh.on}
                >
                    Cadastrar
                </Button>
            )}
        </div>
    )
}
