import ProjectCard from "../components/projectcard"
import Grid from '@mui/material/Grid';

function Home () {
  return (   
  <>
  <h1>Projects</h1>
  <Grid container className="projects" alignItems="center" direction="column">
    <ProjectCard url="https://cs280spring-classroom.github.io/the-game-of-pig-aaug1/" 
      img="game_pig.png"
      text="The Game of Pig! Who will give up first?"
    />
    <ProjectCard url="https://space-invaders-aaug1.netlify.app/" 
      img="space_invaders.png"
      text="Space Invaders Game!"
    />
    <ProjectCard url="https://meme-generator-aaug1.netlify.app/" 
      img="meme_generator.png"
      text="Input text, get a random meme!"
    />
    <ProjectCard url="https://course-planner-aaug1.netlify.app/" 
      img="course_planner.png"
      text="Plan our JHU courses with this course planner"
    />
    <ProjectCard url="https://bloo-chat-aaug1.herokuapp.com/" 
      img="bloo_chat.png"
      text="Online chatting platform"
    />
  </Grid>
    

</>
);
}

export default Home;