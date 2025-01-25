import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div>
       <div className="container12">
        <div className="left2">
            <div>
                <img className="login-img" src="./assets/phone(j).png"/>
            </div>
        </div>
        <div className="right2">
            <div>
                <h2 className="h2">Login</h2>
                <p className="p18">Welcome back!Please enter your details.</p>
                <form className="form">
                    <div>
                        <label className="label-one">E-mail</label>
                        <input className="email" type="email" placeholder="Enter your e-mail"/>
                    </div>
                    <div>
                        <label className="label-two">Password</label>
                        <input className="password" type="password" placeholder="............" maxLength="8"/>
                    </div>
                    <div className="fp">
                        <label>Forget password?</label>
                    </div>
                    <div>
                        <input className="button3" type="button" value="Login"/>
                    </div>
                    <div className="reg">
                        <label><Link to="/register" >Click here to register</Link></label>
                    </div>
                    <div>
                        <p className="p19">By continuing,you agree to Humeiras <span style={{color:"#022452"}}>Terms</span> and
                            <span style={{color:"#022452"}}>Privacy Policy</span>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>  
    </div>
  )
}

export default Login