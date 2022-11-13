import './App.css';
import * as kuva from './cvkuva2.jpg'
import display_personality from 'components/displayPersonality'


function Education() {
  //TODO: Time periods
  let education = {
    lukio: "Päivölän Opisto",
    time_period: "Graduated spring 2020"
  }
  return(
    <div className="edu">
      <h1>Education</h1>
      <p>{education.lukio}: {education.time_period}</p>
    </div>
  )
}
function AboutMe() {
  //TODO: Hobbies into a dropdown or own site with info idfk make it sensible
  let hobbies = () => (
    <div className="hobbies">
      <li>Chess</li>
      <li>Riichi Mahjong</li>
      <li>Role Playing</li>
      <li>Video Games</li>
    </div>
  )
  let personality = {
    //TODO: Figure out how to make this sensible or just scrap it
    place: "holder"
  }

  let about_me = {
    picture: kuva,
    full_name: "Leevi Mikael Luukkonen",
    age: "20",
    personality: display_personality(personality),
    hobbies: hobbies
  }
 
  return (
    <div className="me">
      <img src={about_me.kuva} alt="cvkuva"/>
      <p>{about_me.full_name}</p>
      <p>Age {about_me.age}</p>
      <h1>Hobbies</h1>
      {about_me.hobbies()}
    </div>
  )
}


function App(props) {
  return ( 
    <div className="cv">
     <AboutMe about_me={props.about_me} />
     <Education/>
    </div>
  );
}

export default App;
