import "./Home.css";
import { Grid, Typography, Button} from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem.tsx";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem.tsx";
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import {useSelector} from "react-redux";
import {TokenState} from "../../store/tokens/tokensReducer.ts";
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.warning('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined   
           });            
          navigate("/login")
  
      }
  }, [token])
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" className="grid-color">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="title">Welcome!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="title">Share something interesting!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className="button">SEE POSTS</Button>
                        </Link>

                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="posts">
                    <TabPostagem/>

                </Grid>
            </Grid>
    </>

  );
}

export default Home;
