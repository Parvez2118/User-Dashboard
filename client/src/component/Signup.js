import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram ,AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
function Signup() {
    const navigate = useNavigate();
   const [userRegistration, SetRegistration]= useState({
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    job:"",
});

    const handelinput = (e) => {
        const n = e.target.name;
        const v = e.target.value;
        SetRegistration({ ...userRegistration, [n]: v });
    }
    const PostData = async (e) => {
        e.preventDefault();
       
        
        const {name,email,phonenumber,password,job} = userRegistration;
        const res = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               name,email,phonenumber,password,job
            })

        });
    

        const data = await res.json();
        console.log(data);
        if (res.status === 400 || res.status === 404 || res.status === 422 || !data) {
            window.alert("SignUp failed");
        }
        else {
            window.alert("SignUp Successfully");
            navigate("/login");
        }
    }
    return (
        <>

            <section class="vh-80 section" >
                <div class="container-fluid h-custom" style={{marginTop:"30px"}}>
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form method='POST'>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-0 mb-0">SignUp here</p>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputName" class="para"> Enter Name </label>
                                    <input autoComplete="off" type="text" class="form-control form-control-sm hi"  value={userRegistration.name} onChange={handelinput} required name="name" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exampleInputEmail" class="para"> Enter Email </label>
                                    <input  autoComplete="off" type="email" class="form-control form-control-sm hi"   value={userRegistration.email} onChange={handelinput} required name="email" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exampleInputPhonenumber" class="para">Enter Phone Number </label>
                                    <input autoComplete="off"  type="text" class="form-control form-control-sm hi"   value={userRegistration.phonenumber} onChange={handelinput} required name="phonenumber" />
                                </div>
                                <br />
                              
                                <div class="form-group">
                                    <label for="exampleInputAddress" class="para">Enter Occupation </label>
                                    <input  autoComplete="off" type="text" class="form-control form-control-sm hi"   value={userRegistration.job} onChange={handelinput} required name="job" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="para">Enter Password </label>
                                    <input autoComplete="off" type="password" class="form-control form-control-sm hi"   value={userRegistration.password} onChange={handelinput} required name="password" />
                                </div>
                                <br />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value=""  />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>
                                <button type="submit" class="btn btn-light btn-outline-secondary btn-block btt" onClick={PostData}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Signup;