import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';
import {useSelector} from "react-redux";
import {TokenState} from "../../../store/tokens/tokensReducer.ts";
function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != ''){
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1" >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="text" >Follow me</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/lucas-reck-dev/" target="_blank">
                                <LinkedInIcon className="social" />
                            </a>
                            <a href="https://github.com/lukas-95" target="_blank">
                                <GitHubIcon className="social" />
                            </a>
                            <a href="https://www.instagram.com/recklucas/" target="_blank">
                                <InstagramIcon className="social" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="text" >© 2023 by Lucas</Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
    }
    return (
      <>
          {footerComponent}
      </>
    );
}


export default Footer;