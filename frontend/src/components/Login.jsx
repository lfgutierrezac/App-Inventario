import React from "react";
import logo from "../img/logo-login.svg"
import "./styles/Login.css"
// https://www.youtube.com/watch?v=OWYxMCfcTbY&ab_channel=CoderOne

export default function Login(){

    return (    

        // <form className="Login">
        //     <div class="mb-3">
        //         <label for="exampleInputEmail1" class="form-label">Email address</label>
        //         <input className="Login-box" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        //         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        //     </div>
        //     <div class="mb-3">
        //         <label for="exampleInputPassword1" class="form-label">Password</label>
        //         <input type="password" className="Login-box" class="form-control" id="exampleInputPassword1" />
        //     </div>
        //         <div class="mb-3 form-check">
        //         <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        //         <label class="form-check-label" for="exampleCheck1">Check me out</label>
        //     </div>
        //     <button type="submit" class="btn btn-primary">Submit</button>
        // </form>

        <div className="Login">
            {/* Agregar el logo */}
            <div>
            <img src={logo} className="Login-logo" alt="logo" />
            </div>

            {/* Sección para ingresar el email */}
            <div>
                <label htmlFor="E-mail">E-mail:</label>
                <input type="text" name="email" placeholder="E-mail"/>
            </div>
        
            {/* Sección para agregar la contraseña */}
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>

            {/* Boton para ingresar */}
            <button type= "button">Login</button>
        </div>


    )
}
