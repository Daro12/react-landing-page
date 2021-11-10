import React from "react";
import useStyles from "../styles/useStyles";
import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  Collapse,
} from "@material-ui/core";

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.rootCard}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="green iguana"
          height="140"
          image={place.imageUrl}
        />
        <CardContent className={classes.cardTitle}>
          <Typography gutterBottom variant="h5" component="h2">
            {place.title}
          </Typography>
          <Typography
            className={classes.cardDescription}
            variant="body2"
            color="text.Secondary"
            component="p"
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
