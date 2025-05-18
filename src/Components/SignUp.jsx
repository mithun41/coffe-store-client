import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    const { email, password, ...rest } = newFormData;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...rest,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after create", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100  max-w-sm mx-auto my-16 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleCreateUser}>
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone Number"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
