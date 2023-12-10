import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography } from '@mui/material';
import Conteudo from './components/Conteudo/Conteudo';
import MenuGlobal from './components/MenuGlobal/MenuGlobal';
const backGround = {
  background: 'linear-gradient(45deg, #009efa 30%, #845ec2 90%)',
};
const backGround2 = {
  background: 'linear-gradient(45deg,  #845ec2 50%, #009efa 80%)',
};

export default function App() {
  return (
    <div style={backGround2}>
      <CssBaseline />
      <AppBar>
    
          <MenuGlobal/>
        
      </AppBar>
      <Container style={backGround}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <main>
              <Conteudo />
            </main>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
