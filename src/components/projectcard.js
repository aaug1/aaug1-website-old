import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function ProjectCard(props) {
  const {url, img, text} = props;

  return (
    <Grid item>
      <Link href={url}>
      <Card className="project-card" sx={{ maxWidth: 500, minHeight:500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={require("../images/" + img)}
            alt="#project#"
          />
          <CardContent className="card-title" href={url}>
            <Typography gutterBottom variant="h5" component="div">
              {text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
    </Grid>
  );
}
