import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="Lost&Found"
              aria-label="Lost&Found heading"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 font-extrabold text-lg focus:outline-none lg:flex-1"
              href="/"
            >
              Lost & Found
            </a>
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
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-teal-500 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#what-we-offer"
                >
                  <span>Features</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-teal-500 transition-colors duration-300 hover:text-teal-600 focus:bg-teal-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#faq"
                >
                  <span>FAQ's</span>
                </a>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <Link to="/signup">
                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
                  <span>Try it free</span>
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
      <main>
        <div className="mx-auto max-w-5xl my-48 p-10">
          <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Lost & Found
            </span>
          </h1>
          <p className="text-lg text-center font-normal text-gray-500 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          {/*<!-- Component: Large secondary basic button --> */}
          <div className="text-center">
            <Link to="/signup">
              <button className="my-14 inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-teal-50 px-6 text-sm font-medium tracking-wide text-teal-500 transition duration-300 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none">
                <span>Let's get started</span>
              </button>
            </Link>
          </div>
          {/*<!-- End Large secondary basic button --> */}
        </div>

        <section id="what-we-offer" className="p-10 my-20">
          <h1 className="mb-4 text-center font-extrabold text-gray-900 text-3xl lg:text-4xl">
            What we have to offer
          </h1>

          <div className="grid gap-10 mx-10 md:grid-col-1 lg:grid-cols-3 my-20">
            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Something to remember
                </h3>
                <p>
                  All components can be copied and pasted and easily implemented
                  in your tailwind css projects. You can choose which language
                  you want to copy the desired component and just hover and
                  click on the component you need and paste it on your project.
                </p>
              </div>
            </div>
            {/*<!-- End Basic card --> */}

            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Something to remember
                </h3>
                <p>
                  All components can be copied and pasted and easily implemented
                  in your tailwind css projects. You can choose which language
                  you want to copy the desired component and just hover and
                  click on the component you need and paste it on your project.
                </p>
              </div>
            </div>
            {/*<!-- End Basic card --> */}

            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-700">
                  Something to remember
                </h3>
                <p>
                  All components can be copied and pasted and easily implemented
                  in your tailwind css projects. You can choose which language
                  you want to copy the desired component and just hover and
                  click on the component you need and paste it on your project.
                </p>
              </div>
            </div>
            {/*<!-- End Basic card --> */}
          </div>
        </section>

        <section id="faq" className="mx-10">
          <h1 className="mb-4 text-center font-extrabold text-gray-900 text-3xl lg:text-4xl">
            Common FAQ's
          </h1>
          <div className="my-20 max-w-3xl mx-auto">
            {/*<!-- Component: Outline accordion --> */}
            <section className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white">
              <details className="group p-4" open>
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  Which languages are available for the components?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac21 desc-ac21"
                  >
                    <title id="title-ac21">Open icon</title>
                    <desc id="desc-ac21">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  Wind UI team currently releases it's components on HTML and
                  React, but also thinking on adding more in the future. You can
                  easily toggle between the two languages through the code
                  blocks, on each page component.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  Which icons are you using in the components?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac22 desc-ac22"
                  >
                    <title id="title-ac22">Open icon</title>
                    <desc id="desc-ac22">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  All our icons related ui components are using, heroicons SVG
                  icons, by the makers of Tailwind CSS.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  How can I learn about the latest changes?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac24 desc-ac24"
                  >
                    <title id="title-ac24">Open icon</title>
                    <desc id="desc-ac24">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  You can find all latest additions and updates in our Changelog
                  page, where we have a detailed timeline for any changes.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  Where can I find the official TailwindCSS documentation?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac23 desc-ac23"
                  >
                    <title id="title-ac23">Open icon</title>
                    <desc id="desc-ac23">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  You can find the official TailwindCSS detailed documentation
                  as well as the official TailwindCSS website link on our footer
                  under Resources.
                </p>
              </details>
            </section>
            {/*<!-- End Outlined accordion --> */}
          </div>
        </section>
      </main>

      {/*<!-- Component: Primary Light Theme Footer --> */}
      <footer className="w-full text-teal-500">
        {/*  <!-- Sub Footer --> */}
        <div className="py-4 text-sm border-t border-teal-200/90 bg-teal-100/80">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
                <span> Copyright 2022 Lost & Found</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- End Primary Light Theme Footer --> */}
    </>
  );
}
