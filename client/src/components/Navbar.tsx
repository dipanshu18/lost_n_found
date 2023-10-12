import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const navigate = useNavigate();

  async function handleLogout(e: FormEvent) {
    e.preventDefault();

    try {
      const request = await axios.post("/api/auth/logout");
      if (request.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-center justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link to="/home">
              <button className="flex items-center gap-2 whitespace-nowrap py-3 font-bold text-lg focus:outline-none lg:flex-1">
                Lost & Found
              </button>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li className="flex items-center">
                <Link to="/home/your-responses">
                  <button className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>Your Responses</span>
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/home/post">
                  <button className="flex items-center gap-2 py-4 text-teal-500 transition-colors duration-300 hover:text-teal-600 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>Post</span>
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/home/your-listings">
                  <button className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>Your Listings</span>
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/home/profile">
                  <button className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>Profile</span>
                  </button>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button
                onClick={handleLogout}
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
              >
                <span>Log out</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  );
}
