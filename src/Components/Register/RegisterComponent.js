import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Register() {
  //set usestates for the firstname lastname email password and confirm password
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    //check if the password and confirm password is same
    if (password !== confirmpassword) {
      swal("Password and confirm password is not same");
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      swal({
        title: "Enter valid email address",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      swal({
        title: "Registration Successful",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    }
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <form className="mt-6">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Xitiz"
                autoComplete="given-name"
                onChange={(e) => setFirstname(e.target.value)}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Verma"
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="family-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            for="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="xitizverma@gmail.com"
            autoComplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            autoComplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password-confirm"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Confirm password
          </label>
          <input
            id="password-confirm"
            type="password"
            name="password-confirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            autoComplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            onClick={HandleSubmit}
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-700 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Sign up
          </button>
          <Link to="/login">
            <p className="justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Already registered?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
