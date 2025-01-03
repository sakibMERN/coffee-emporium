import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = {
          name,
          email,
          createdAt,
        };

        //using axios
        axios.post("http://localhost:5000/users", newUser)
         .then((data) => {
          console.log(data);
          console.log(data.data);
          if(data.data.insertedId){
            console.log("insert data to database");
          }
        });

        //save new user to the database
        // fetch("http://localhost:5000/users", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(newUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.insertedId) {
        //       alert("user created at database");
        //     }
        //   });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
