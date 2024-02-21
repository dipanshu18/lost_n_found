"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";

interface navItemType {
  item: string;
  link: string;
}

const user = "fdfgf";

const navItems: navItemType[] = [
  { item: "Home", link: "/dashboard" },
  { item: "Responses", link: "/responses" },
  { item: "Post", link: "/create-post" },
  { item: "Your responses", link: "/your-responses" },
];

export default function Navbar() {
  const [showing, setShowing] = useState(false);

  return (
    <nav className="navbar max-w-2xl lg:max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown xl:hidden">
          <div
            tabIndex={0}
            onClick={() => setShowing(!showing)}
            role="button"
            aria-label="menu"
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={
              showing
                ? "menu menu-sm dropdown-content mt-3 z-[1] p-4 bg-base-300 shadow-2xl rounded-box w-52"
                : "hidden"
            }
          >
            {user ? (
              <>
                {navItems.map((itemContent, index) => {
                  return (
                    <Link
                      key={index}
                      href={itemContent.link}
                      onClick={() => setShowing(!showing)}
                      className="btn btn-ghost text-md hover:text-primary"
                    >
                      {itemContent.item}
                    </Link>
                  );
                })}
                <button className="btn btn-primary mt-2">Logout</button>
              </>
            ) : (
              <Link href="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </ul>
        </div>

        <div className="hidden xl:block">
          {user ? (
            navItems &&
            navItems.map((itemContent, index) => {
              return (
                <Link
                  key={index}
                  href={itemContent.link}
                  onClick={() => setShowing(!showing)}
                  className="btn btn-ghost text-md hover:text-primary"
                >
                  {itemContent.item}
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="navbar-center">
        <Link
          href={user ? "/dashboard" : "/"}
          className="btn btn-ghost text-xl"
        >
          Lost and Found
        </Link>
      </div>

      <div className="navbar-end invisible xl:visible">
        {user && user ? (
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setShowing(!showing)}
                  aria-label="menu"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <Link href="/profile">
                    <div className="bg-slate-300 p-2 rounded-full">
                      <FaUser />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/" onClick={() => setShowing(!showing)}>
              <button className="btn btn-primary">Logout</button>
            </Link>
          </div>
        ) : (
          <Link href="/login" onClick={() => setShowing(!showing)}>
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
