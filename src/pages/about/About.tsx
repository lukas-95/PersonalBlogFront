import React from 'react'
import './About.css'
import { Box, Container, CssBaseline, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import LadyLink from '../../assets/Imagem/ladylinkLogo.png'
import Valores from '../../assets/Imagem/icons8-value-100.png'
import Visao from '../../assets/Imagem/icons8-eye-100.png'
import Missao from '../../assets/Imagem/icons8-goal-100.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 4,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        justifyContent: 'justify'

    },
}));

function About() {
    const classes = useStyles();
    return (
        <>

            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                        <h1 className='titles'>Sobre o Lucas  </h1>
                        {/* //<img className='imagemlogo' src={LadyLink} alt="Logo do site" /> */}
                   
                    <h3 className='about alinhado'>
                    Profissional com experiência em marketing aplicado ao setor financeiro no mercado B2C, no setor logístico no mercado B2B trabalhando com indústrias do setor alimentício. Atualmente, estou em uma transição de carreira para a área de desenvolvimento de software, onde atuo como Desenvolvedor Fullstack, especializado em Java. Possuo habilidades sólidas em desenvolvimento de sistemas web, utilizando Java, Spring no backend, juntamente com Typescript, React, MUI no frontend. Tenho experiência na criação de sites e sistemas web, trabalhando com APIs REST, sempre buscando entregar valor e excelência aos projetos. Meus conhecimentos incluem também Javascript, HTML, CSS, bancos de dados SQL, NoSQL com MySQL, MongoDB, controle de versão com Git, experiência com gestão de projetos e metodologias ágeis. Fluente em inglês, espanhol. Possuo um perfil analítico que me permite ter um discernimento apurado em relação às necessidades pontuais dos projetos. Excelentes habilidades de comunicação e capacidade de trabalhar em equipe, contribuindo para um desempenho excepcional no ambiente colaborativo. 

                    </h3>


                    <Typography component="div" style={{ height: '10vh' }} />
                    <Grid container spacing={3}>
                        <Grid item xs={4} >
                            <Paper elevation={6} className={classes.paper}><Typography />
                                <h1>Valores</h1>  <img src={Valores} alt="Valores da Lady Link" />

                                <Box className='alinhado'> <h2>Excelência</h2> <h3>Busco a excelência em todas as minhas atividades, sempre procurando entregar resultados de alta qualidade e exceder as expectativas. Trabalho com dedicação e comprometimento, buscando constantemente melhorar minhas habilidades e conhecimentos.</h3>

                                    <h2>Inovação</h2><h3>Valorizo a busca por soluções criativas e inovadoras. Estou sempre atento às últimas tendências e tecnologias, buscando aplicá-las de forma inteligente e eficaz para resolver problemas complexos.</h3>

                                    <h2>Colaboração</h2><h3>Acredito que o trabalho em equipe é fundamental para alcançar resultados extraordinários. Busco criar um ambiente de colaboração, respeito mútuo e confiança, onde todos possam contribuir com suas ideias e habilidades para alcançar objetivos comuns.</h3>

                                    <h2>Integridade</h2><h3>Pauto minhas ações pela ética, honestidade e transparência. Trabalho com integridade, respeitando os valores e normas da organização, e sempre buscando agir de forma justa e responsável.</h3>
                                </Box>


                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={6} className={classes.paper}>
                                <h1>Visão</h1>  <img src={Visao} alt="Visão da Lady Link" />
                                <Box className='alinhado'>
                                    <h3>Ser reconhecido como um profissional de destaque na área de tecnologia, contribuindo para o desenvolvimento de soluções inovadoras e impactantes. Além disso, ser parte de uma equipe colaborativa e diversa, que busca constantemente superar os desafios e alcançar resultados excepcionais.
                                  
                                    </h3>
                                </Box>


                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper elevation={6} className={classes.paper}><h1>Missao</h1><img src={Missao} alt="Missão da Lady Link" /><Box className='alinhado'> <h3>
                            Minha missão é aplicar minha paixão pela tecnologia e minha habilidade em resolver problemas para impulsionar a inovação e agregar valor às empresas. Busco constantemente aprender e me atualizar para estar na vanguarda das melhores práticas e tendências tecnológicas, a fim de desenvolver soluções eficientes e escaláveis. Através do trabalho em equipe, liderança e comunicação eficaz, pretendo criar um ambiente de colaboração e excelência, impulsionando o sucesso da organização e contribuindo para o crescimento pessoal e profissional de todos os envolvidos.
                            </h3></Box>


                            </Paper>
                        </Grid>
                    </Grid>

                    <Box className='fontcenter'>
                        <h2></h2>
                    </Box>
                    
                </Container>
            </React.Fragment>

            <Grid>

                <h3 className='fontcenter'>
                    
                </h3>
                <Grid className=' font fontcenter'>

                    <h2>
                        Junte-se a mim na minha jornada!
                    </h2>


                </Grid>
            </Grid >



        </>
    )

}
export default About;