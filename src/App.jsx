import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App() {

const classes = useStyles()

    return <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>My Photo Album</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consequatur nostrum repellat illum consequuntur perspiciatis saepe repudiandae fuga at, quod soluta repellendus sapiente corporis voluptate sed animi reprehenderit dicta dignissimos!
                        </Typography>
                            <div className={classes.buttons}>
                                <Grid container spacing={2} justifyContent='center'>
                                    <Grid item>
                                        <Button variant='contained' color='primary'>
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' color='primary'>
                                            Secondary Action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card)=> (
                           <Grid item key={card} xs={12} sm={6} md={4}>
                           <Card className={classes.card}>
                               <CardMedia
                                   className={classes.cardMedia}
                                   image='https://source.unsplash.com/random'
                                   title='Image title'
                               />
                               <CardContent className={classes.CardContent}>
                                   <Typography variant='h5' gutterBottom>
                                       Heading
                                   </Typography>
                                   <Typography>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis nisi maiores?
                                       </Typography>
                               </CardContent>
                               <CardActions>
                                   <Button size='small' color='primary'>View</Button>
                                   <Button size='small' color='primary'>View</Button>
                               </CardActions>
                           </Card>
                       </Grid> 
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nulla!</Typography>
            </footer>
        </>
}