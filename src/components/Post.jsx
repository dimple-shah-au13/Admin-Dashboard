import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Switch,
} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 5,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
}));

const Post = ({ img, title}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>

<CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
          <ForumIcon />
          
            {title= "Audience Q&A"} 
            <Switch/>
            <ExpandLessIcon/>
          </Typography>
        
         </CardContent>
      </CardActionArea>


      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title= "Moderation"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Easily review all questions before they go live
          </Typography>
        </CardContent>
      </CardActionArea>

  
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title= "Labels"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Categorize and filter questions.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title= "DownVotes"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Enable downvoting of questions
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title="Replies"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Allow participants to reply to or comment on questions
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title = "Anonymous questions"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Let your participants send anonymous questions
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title="Maximum Question Length"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Show number of votes instead of percentage
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" variant="outlined" aria-label="outlined button group" color="primary">
          160
        </Button>
        <Button size="small" variant="outlined" aria-label="outlined button group" color="primary">
          240
        </Button>
        <Button size="small" variant="contained" color="primary">
          300
        </Button>
      </CardActions>
      </CardActionArea>

      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title="Close questions"}
            <Switch/>
          </Typography>
          <Typography variant="body2">
            Easily review all questions before they go live
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>

    
  );
};

export default Post;
