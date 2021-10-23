import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title= "Audience Q&A"/>
      <Post title="Choose the perfect design"/>
      <Post title="Simply Recipes Less Stress. More Joy" />
      <Post title="What To Do In London" />
      <Post title="Recipes That Will Make You Crave More" />
      <Post title="Shortcut Travel Guide to Manhattan" />
      <Post title="Killer Actions to Boost Your Self-Confidence" />
    </Container>
  );
};

export default Feed;
