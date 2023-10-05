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

        <section id="faq">
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
                Copyright 2022 Lost & Found
              </div>
              <nav
                aria-labelledby="footer-social-links-light"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
              >
                <h2 className="sr-only" id="footer-social-links-light">
                  Social Media Links
                </h2>
                <ul className="flex items-center justify-end gap-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-teal-600 focus:text-teal-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="16"
                        width="16"
                        className="w-4 h-4 shrink-0"
                        role="graphics-symbol"
                        aria-labelledby="title-tb01-light desc-tb01-light"
                      >
                        <title id="title-tb01-light">Icon title</title>
                        <desc id="desc-tb01-light">
                          A more detailed description of the icon
                        </desc>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M37.2491 3.30238C37.0498 2.18649 36.0513 1.49746 34.9878 1.50395C32.2606 1.5206 29.7927 1.60328 27.6333 1.96988C25.4705 2.33708 23.584 2.99414 22.038 4.18283C18.9929 6.52415 17.4377 10.7872 17.3724 18.3217H11.9552C10.9254 18.3217 9.94522 18.9739 9.74313 20.0674C9.51312 21.312 9.33088 23.311 9.75643 25.8014C9.95527 26.9651 10.9939 27.7324 12.1233 27.7324H17.3703V44.3867C17.3703 45.2169 17.8349 46.0595 18.7834 46.2403C19.5015 46.3773 20.6304 46.5002 22.375 46.5002C24.1168 46.5002 25.347 46.3777 26.1718 46.2437C27.2507 46.0684 27.8777 45.1191 27.8777 44.1186V27.7324H34.9316C36.0256 27.7324 37.0562 27.009 37.2608 25.8665C37.6736 23.5618 37.4742 21.4753 37.2437 20.1563C37.0465 19.0284 36.0444 18.3217 34.9653 18.3217H27.8795C27.8917 16.7111 27.9661 15.4564 28.1447 14.4728C28.341 13.3921 28.6547 12.6875 29.1044 12.2048C29.5502 11.7263 30.1817 11.4104 31.1284 11.2121C32.0832 11.0121 33.3126 10.9408 34.9123 10.9193C36.0128 10.9045 37.0511 10.1718 37.2541 9.01765C37.6718 6.64193 37.4794 4.59202 37.2491 3.30238Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-teal-600 focus:text-teal-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="16"
                        width="16"
                        className="w-4 h-4 shrink-0"
                        role="graphics-symbol"
                        aria-labelledby="title-tb02-light desc-tb02-light"
                      >
                        <title id="title-tb02-light">Icon title</title>
                        <desc id="desc-tb02-light">
                          A more detailed description of the icon
                        </desc>
                        <path
                          fill="currentColor"
                          d="M34.7229 4.69819C36.9179 5.13151 38.8231 6.226 39.9574 7.46121L44.8741 7.22772C46.162 7.16656 46.9576 8.61264 46.216 9.66758L42.8041 14.5217C43.7777 35.6815 22.2547 49.0961 4.54954 41.2208C3.75067 40.8654 3.58181 40.0439 3.74682 39.4029C3.91015 38.7685 4.4337 38.1304 5.23631 38.0329C7.74782 37.7279 10.886 36.8951 13.5309 34.8102C11.3351 34.4801 8.87383 33.2203 6.77118 31.5522C4.25179 29.5535 2.11595 26.8651 1.53319 24.2321C1.41942 23.7181 1.60805 23.2504 1.94754 22.9478C2.27981 22.6517 2.75116 22.5146 3.22643 22.6022C4.4998 22.8369 6.44397 23.1705 7.93366 23.3225C7.82715 23.2095 7.71399 23.0872 7.59534 22.9561C6.83881 22.1198 5.85466 20.9171 4.947 19.4528C3.13974 16.5372 1.58717 12.5021 2.86967 8.24191C3.04524 7.65872 3.52191 7.3215 4.02883 7.2399C4.52724 7.15967 5.07712 7.31911 5.46709 7.72851C7.80814 10.1862 13.7896 15.4057 22.914 16.1638C22.5823 14.0277 22.368 9.45707 27.2507 6.17582C29.7236 4.51405 32.4029 4.2402 34.7229 4.69819Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-teal-600 focus:text-teal-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="16"
                        width="16"
                        className="w-4 h-4 shrink-0"
                        role="graphics-symbol"
                        aria-labelledby="title-tb03-light desc-tb03-light"
                      >
                        <title id="title-tb03-light">Icon title</title>
                        <desc id="desc-tb03-light">
                          A more detailed description of the icon
                        </desc>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M18.9563 7.52344C18.7526 6.91526 18.1767 6.49018 17.5166 6.51256C13.7277 6.64105 10.4346 7.72034 9.03159 8.24815C8.46409 8.46164 7.98142 8.84195 7.6475 9.35489C6.13235 11.6824 1.35143 20.1396 1.5015 33.9816C1.51112 34.8687 1.87868 35.7421 2.60293 36.3174C4.05518 37.4709 7.22566 39.6169 12.2716 41.1548C13.1338 41.4176 14.1343 41.1791 14.6848 40.3722C15.3668 39.3727 15.9633 38.1197 16.3718 37.1704C16.4818 36.9145 16.7753 36.775 17.0546 36.8566C18.8459 37.3799 21.1512 37.7795 24.0128 37.7795C26.865 37.7795 29.1613 37.3825 30.9459 36.8617C31.2254 36.7802 31.5188 36.9197 31.6289 37.1755C32.0373 38.1241 32.6329 39.3744 33.3137 40.3722C33.8643 41.1791 34.8647 41.4176 35.727 41.1548C40.7729 39.6169 43.9433 37.4709 45.3956 36.3174C46.1198 35.7421 46.4874 34.8687 46.497 33.9816C46.6459 20.2518 41.9432 11.8198 40.3884 9.41269C40.0295 8.85716 39.4986 8.45634 38.8845 8.24366C37.3835 7.72379 33.9285 6.65561 30.4846 6.51532C29.821 6.48828 29.2456 6.91631 29.0422 7.52344L28.5352 9.03687C28.4493 9.293 28.1503 9.47311 27.8343 9.41471C27.0144 9.26322 25.7164 9.09373 24.0128 9.09373C22.2989 9.09373 20.9871 9.26529 20.1611 9.41734C19.8471 9.47513 19.5502 9.29611 19.4648 9.04103L18.9563 7.52344ZM21 25C21 27.7614 18.9853 30 16.5 30C14.0147 30 12 27.7614 12 25C12 22.2386 14.0147 20 16.5 20C18.9853 20 21 22.2386 21 25ZM31.5 30C29.0147 30 27 27.7614 27 25C27 22.2386 29.0147 20 31.5 20C33.9853 20 36 22.2386 36 25C36 27.7614 33.9853 30 31.5 30Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- End Primary Light Theme Footer --> */}
    </>
  );
}
