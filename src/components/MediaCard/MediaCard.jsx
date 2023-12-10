import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ produto }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={produto.img}
        title={produto.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {produto.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h5" component="div">
          R$ {produto.preco}
        </Typography>
        <Button size="small">Carrinho</Button>
      </CardActions>
    </Card>
  );
}
