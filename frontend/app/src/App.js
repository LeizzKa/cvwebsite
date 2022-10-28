import './App.css';


function Education() {
  let education = {
    lukio: "Päivölän Opisto",s
  }
  return(
    <div>
      <h1>Education</h1>
      <p>Highschool: {education.lukio}</p>
    </div>
  )
}
function AboutMe() {
  let hobbies = () => (
    <div>
      <p>Chess</p>
      <p>Riichi Mahjong</p>
      <p>Role Playing</p>
      <p>Video Games</p>
    </div>
  )
  let about_me = {
    full_name: "Leevi Mikael Luukkonen",
    nickname: "Leizz",
    age: "20",
    personality: "",
    hobbies: hobbies
  }
 
  return (
    <div>
      <p>Name:</p>
      {about_me.full_name}
      <br/>
      <p>Nickname:</p>
      {about_me.nickname}
      <br/>
      <p>Age</p>
      {about_me.age}
      <br/>
      <h1>Hobbies</h1>
      {about_me.hobbies()}
    </div>
  )
}


function App(props) {
  return ( 
    <div>
     <AboutMe about_me={props.about_me} />
     <Education/>
    </div>
  );
}

export default App;
