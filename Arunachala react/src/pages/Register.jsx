import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div>
        <div className="container13">
        <div className="left3">
            <div>
                <img className="reg-img" src="./assets/phone(j).png"/>
            </div>
        </div>
        <div className="right3">
            <div>
                <h2 className="h3">Register</h2>
                <p className="p20">Create your account to begin your journey.</p>
                <form className="form">
                    <div>
                        <label className="reg1">Name</label>
                        <input className="name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div>
                        <label className="reg1">E-mail</label>
                        <input className="email1" type="text" placeholder="Enter your E-mail"/>
                    </div>
                    <div>
                        <label className="reg1">Create password</label>
                        <input className="cp" type="password" placeholder="......." maxLength="8"/>
                    </div>
                    <div>
                        <label className="reg1">Confirm password</label>
                        <input className="cp" type="password" placeholder="......." maxLength="8"/>
                    </div>
                    <div>
                        <input className="button4" type="button" value="create"/>
                    </div>
                    <div>
                        <p className="p21">Already have an account?<b></b><Link to="/login" >Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register