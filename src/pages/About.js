import Box from "../components/Aboutbox"
import aboutMe from "../text/aboutme"

function About () {

  console.log(aboutMe);

  return (
  <div className="container-fluid flex-column justify-content-center">

    <Box title="About Me" content={aboutMe}/>
    
  </div>

  );
}

export default About;