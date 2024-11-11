
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import Auth from "../utils/NavigateToFromLogin"
function Navbar() {  
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {SignIn,SignOut} = Auth(setIsLoggedIn)

  useEffect(()=>{
    if(sessionStorage.getItem("isLoggedIn")!=null && sessionStorage.getItem("isLoggedIn")=='true')
    setIsLoggedIn(true)
  },[])

  const ShowButton =()=>{
    if(isLoggedIn)
    {
      return  <button className='btn btn-danger' onClick={SignOut}>Log out</button>
    }
    else
    {
      return  <button className='btn btn-danger' onClick={SignIn}>Log In</button>
    }
 } 

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PizzaPal
          </a>
          <div
            style={{
              display: "flex",
              marginRight: 50,
              justifyContent: "space-between",
            }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/pizza" style={{marginTop:13}}>
                  Order Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart" style={{marginTop:14, marginRight:4}}>
                  Your Cart
                </a>
              </li>
              <li className="nav-item">
              {isLoggedIn && ShowButton()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

