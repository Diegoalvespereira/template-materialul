import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel htmlFor="login_nome">Nome de Login</InputLabel>
                <Input
                    id="login_nome"
                    aria-describedby="login_nome_helper_text"
                    value={login}
                    onChange={e => { setLogin(e.target.value) }}
                    style={{ borderColor: '#3f51b5', borderWidth: '2px', borderRadius: '4px' }} // Estilo adicionado
                />
                <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
        </Grid>
    );
}

export default Login;
