import { useState } from "react";


function Landingpage() {

    const  [islogin, setIslogin] = useState(true);

    function handleLogin(data){

        console.log(data);
    }
    function handleSignup(data){

        console.log(data);
    }

    return (
        
        <div>
            <script src="https://accounts.google.com/gsi/client" async></script>

    <div id="g_id_onload"
        data-client_id="50488367185-9ns19a71eg68ee107d6raar26se28419.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000"
        data-auto_select="true"
        data-itp_support="true">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_wefith"
        data-size="large"
        data-logo_alignment="left" style={{backgroundColor: "blue",color: "white"}}>
    </div>
            <h1>Welcome to the Landing Page</h1>

            <div>
                <button onClick={() => setIslogin(true)}>Login</button>
                <button onClick={() => setIslogin(false)}>Register</button>

                {islogin ? <Login handleLogin={handleLogin} /> : <Signup handleSignup={handleSignup}/>}

            </div>


        </div>
    )
}


function Login({handleLogin}) {
    const [formData,setformData] = useState({
        username: "",
        password: ""
    })

    function handlechange(e){
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        handleLogin(formData);
    }


    



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" onChange={handlechange}  />
            <input type="password" name="password" placeholder="password" onChange={handlechange} />
            <button type="submit">Login</button>
            

        </form>
    )
}


function Signup({handleSignup}) {
    const [formData,setformData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    })

    function handlechange(e){
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        handleSignup(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="firstname" onChange={handlechange} required />
            <input type="text" name="lastname" placeholder="lastname" onChange={handlechange} required />
            <input type="text" name="username" placeholder="username" onChange={handlechange} required />
            <input type="password" name="password" placeholder="password" onChange={handlechange} required />
            <button type="submit">Signup</button>
            

        </form>
    )
}

export default Landingpage;