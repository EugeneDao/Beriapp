import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Home(props) {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(true);
  const change = (m) => {
    setModal(m);
  }

  const toggleModal = () => {
    setModal(false);
    setCheck(true)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const [name, setName] = useState();
  const [name2, setName2] = useState();
  const userChange = (e) => {
    setName(e.target.value);
    console.log(name)
  }
  const userChange2 = (e) => {
    setName2(e.target.value);
    //    console.log(name)
  }
  const [pass, setPass] = useState();
  const [pass2, setPass2] = useState();
  const passChange = (e) => {
    setPass(e.target.value)
    console.log(pass);
  }
  const passChange2 = (e) => {
    setPass2(e.target.value)
    //   console.log(pass);
  }
  const [rePass, setRePass] = useState();
  const rePassChange = (e) => {
    setRePass(e.target.value);
  }
  const handleClick = () => {
    setCheck(false);
  }
  const handleSignUp = () => {
    if (pass2 && name2 && rePass) {
      if (pass2 !== rePass) {
        alert("pass and repass no like !")
        setRePass(""); setPass2("");
        // toast.erroe("Signup success!");
      } else {
        alert("Signup success !")

        localStorage.setItem(`${name2}${pass2}`, JSON.stringify({ name: name2, pass: pass2 }));
        setCheck(true);
        setName(name2); setPass(pass2);
        setRePass(""); setPass2(""); setName2("");
      }
    }
  }
  const [start, setStart] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {

    if (name && pass) {
      if (localStorage.getItem(`${name}${pass}`)) {
        setStart(true);
        // props.test(start);

        navigate('/beri')

        alert("Signin Success")
        // console(start);
      } else {
        alert("name or pass no right")
      }
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <HeroSection down={change} />
      <Cards />
      <Footer />
      {modal ? check ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{ color: "#2db84c" }}>SIGN IN</h2>

            <div className="cha">
              <input type="text" className="con1" placeholder=" " onChange={userChange} value={name} />
              <label className="con2">Name</label>
            </div>
            <div className="cha">
              <input type="password" className="con1" placeholder=" " onChange={passChange} value={pass} />
              <label className="con2">Password</label>
            </div>
            <button style={{ marginTop: "20px", marginLeft: "80%", padding: "5px 10px", fontSize: "15px", color: "#2db84c" }} onClick={handleLogin}>Login</button>
            <div style={{ marginTop: "10px", marginLeft: "10%" }} onClick={handleClick}>You don't have account ? <span style={{ color: "#2db84c", cursor: "pointer" }}>Create acount</span></div>
            <button className="close-modal" style={{ color: "#2db84c" }} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>

      ) : (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{ color: "#2db84c" }}>SIGN UP</h2>

            <div className="cha">
              <input type="text" className="con1" placeholder=" " onChange={userChange2} value={name2} />
              <label className="con2">Name</label>
            </div>
            <div className="cha">
              <input type="password" className="con1" placeholder=" " onChange={passChange2} value={pass2} />
              <label className="con2">Password</label>
            </div>
            <div className="cha">
              <input type="password" className="con1" placeholder=" " onChange={rePassChange} value={rePass} />
              <label className="con2">Repassword</label>
            </div>
            <button style={{ marginTop: "20px", marginLeft: "75%", padding: "5px 10px", fontSize: "15px", color: "#2db84c" }} onClick={handleSignUp}>Sign up</button>
            {/* <ToastContainer /> */}

            <button className="close-modal" style={{ color: "#2db84c" }} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ) : ""}
    </>
  );
}

export default Home;
