import React from "react";
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Skills from '../../assets/Banner-linkedIn-com-gradiente-prisma.svg'; // Import using relative path

export default function Login() {


    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form action="">
              <Typography
                variant="h3"
                gutterBottom
                color="primary"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Entrar
              </Typography>
              <TextField
                id="user"
                label="user"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                id="password"
                label="password"
                variant="outlined"
                name="password"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign='center'>

                <Link to='/home' className='text-decorator-none'>
                <Button type='submit' variant='contained' color='primary'>
                    Logar
                </Button>
                </Link>
              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                    <Typography variant="subtitle1" gutterBottom align="center"> Não tem uma conta ?

                    </Typography>
                </Box>
                <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight: 'bold'}}> Cadastre-se agora mesmo

                </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} style={{
            backgroundImage: 'url (${Skills})',
            backgroundRepeat: 'no-repeat', width: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
        }}>


        </Grid>
      </Grid>
    );
}