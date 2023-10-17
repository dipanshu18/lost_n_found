import Navbar from "../components/Navbar";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  useEffect(() => {
    async function getUserProfile() {
      const user = await axios.get("/api/user/profile");
      setName(user.data.name);
      setEmail(user.data.email);
      setPhoneNo(user.data.phoneNo);
    }

    getUserProfile();
  }, []);

  async function handleUserProfileUpdate(e: FormEvent) {
    e.preventDefault();
    const updatedInfo = { name, phoneNo, email, password };

    try {
      setLoading(true);
      const request = await axios.put(`/api/user/profile`, updatedInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (request.status === 200) {
        setLoading(false);
        toast.success("Updated Info successfully");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      toast.error("Unexpected Error");
    }
  }

  return (
    <>
      <Navbar />
      {/*<!-- Component: Card with form --> */}
      <form
        onSubmit={handleUserProfileUpdate}
        className="my-10 max-w-xl mx-10 md:mx-auto overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
      >
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">
              Hey, wanna update info about yourself
            </h3>
          </header>
          <div className="flex flex-col space-y-8">
            {/*      <!-- Input field --> */}
            <div className="relative mt-6">
              <label htmlFor="name" className="text-xs text-slate-700">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-900 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>

            {/*      <!-- Input field --> */}
            <div className="relative mt-6">
              <label htmlFor="phoneNo" className="text-xs text-slate-700">
                Your phone number
              </label>
              <input
                id="phoneNo"
                type="text"
                name="phoneNo"
                placeholder={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                value={phoneNo}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-900 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>

            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <label htmlFor="email" className="text-xs text-slate-700">
                Your email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-900 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>

            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <label htmlFor="password" className="text-xs text-slate-700">
                Your password
              </label>
              <input
                id="password"
                type={type}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-slate-900 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <span
                className="absolute top-7 right-4 h-5 w-5 cursor-pointer stroke-slate-400"
                onClick={handleToggle}
              >
                <Icon icon={icon} size={20} />
              </span>
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
            <span>Update</span>
          </button>
        </div>
      </form>
      {/*<!-- End Card with form --> */}

      <ToastContainer autoClose={5000} />
    </>
  );
}
