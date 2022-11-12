import './App.css';


function Education() {
  //TODO: Time periods
  let education = {
    lukio: "Päivölän Opisto",
  }
  return(
    <div className="edu">
      <h1>Education</h1>
      <p>Highschool: {education.lukio}</p>
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
  let about_me = {
    //TODO: Figure out how to put personality in
    full_name: "Leevi Mikael Luukkonen",
    age: "20",
    personality: "",
    hobbies: hobbies
  }
 
  return (
    <div className="me">
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
