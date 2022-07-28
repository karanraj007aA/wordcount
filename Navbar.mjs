import React, {useState}from 'react'

export default function Navbar(props) {
  const [myStyle, setMyStyle] = useState(  {
    color: "black",
    backgroundColor: "white",
  } )
  
    const [btntext, setBtnText] = useState('Enable Dark Mode')

  const toggleStyle =()=>{
    if(myStyle.color=='black'){
      setMyStyle({
        color: "white",
    backgroundColor: "black",
    border:'2px solid white'
      })
      setBtnText('Enable Light Mode')
    }
    else{
      setMyStyle({
        color: "black",
    backgroundColor: "white "
      })
      setBtnText('Enable Dark Mode')
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid" style={myStyle}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={myStyle}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  )
}
