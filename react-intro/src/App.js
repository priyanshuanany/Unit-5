import logo from './logo.svg';
import './App.css';

function App() {

  const navArr = ["Services", "Projects", "About"];
  const operating = ["Android","BlackBerry","Iphone","Windows Phone"];
  const manufactures = ["Samsung","HTC","Micromax","Apple"];

  return (
    <div>
      <div className='App'>
      <nav className="navbar">
        <div className="logo">LOGOBAKERY</div>
        <ul className="navlinks">
          {navArr.map((e) => {
            return (
              <li className="li">
                <Navigation arr={e} />
              </li>
            );
          })}
        </ul>
        <button className="navbtn">Contact</button>
      </nav>
      </div>

      <div>
        <h1 className="div red">Mobile Operating System</h1>
      </div>
      <div className="div orange">
            {operating.map((e) =>{
              return <Skill os={e}/>
            })}  
      </div>

      <div>
        <h1 className="div red">Mobile Manufactures</h1>
      </div>
      <div className="div orange">
            {manufactures.map((e) =>{
              return <Skill os={e}/>
            })}
      </div>
    </div>
  );
}

function Navigation(prop) {
  return <p>{prop.arr}</p>;
}

function Skill(props){
  return <li>{props.os}</li>;
};

export default App;
