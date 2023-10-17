import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-gray-200 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
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
        <div className="mx-auto max-w-5xl my-32 p-10">
          <h1 className="mb-4 text-center font-extrabold text-gray-900 text-5xl md:text-7xl lg:text-9xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Lost & Found
            </span>
          </h1>
          <p className="text-md md:text-lg text-center font-medium text-gray-500 lg:text-xl">
            Lost and Found is a user-friendly, full-stack web application built
            using Reactjs, WIndUI, Typescript, Nodejs, Express, Prisma and
            PostgreSQL designed to assist college students in locating their
            lost belongings. With its intuitive interface and robust
            functionality, this app streamlines the process of reporting lost
            items, connecting owners with finders, and they ensuring the safe
            return of personal possessions. Lost and Found is dedicated to
            providing a reliable and user-friendly platform for college students
            to recover their lost belongings. With a strong emphasis on user
            privacy and security, along with convenient email notifications and
            validation questions, we strive to make the process as seamless and
            worry-free as possible. Your peace of mind is our priority.{" "}
          </p>
          {/*<!-- Component: Large secondary basic button --> */}
          <div className="text-center">
            <Link to="/signup">
              <button className="my-14 inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-xl bg-teal-200 px-16 py-10 text-lg font-medium tracking-wide text-teal-700 transition duration-300 hover:bg-teal-600 hover:text-white focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none">
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
              <div className="p-10">
                <h3 className="mb-4 text-xl font-sans font-medium text-slate-700">
                  User Privacy:{" "}
                </h3>
                <p>
                  Your privacy is our utmost concern. We employ advanced
                  security measures to protect your personal information and
                  ensure that only approved users can access your contact
                  details. Your email and phone number are safeguarded, and we
                  maintain strict privacy standards.
                </p>
              </div>
            </div>
            {/*<!-- End Basic card --> */}

            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <div className="p-10">
                <h3 className="mb-4 text-xl font-sans font-medium text-slate-700">
                  Validation Questions:{" "}
                </h3>
                <p>
                  We introduce an additional layer of security through
                  Validation Questions. When a user expresses interest in
                  returning a lost item, the owner can set specific validation
                  questions that only the true owner would know. This ensures
                  that the contact information is not visible to everyone, only
                  to genuine finders who can correctly answer these questions.
                </p>
              </div>
            </div>
            {/*<!-- End Basic card --> */}

            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <div className="p-10">
                <h3 className="mb-4 text-xl font-sans font-medium text-slate-700">
                  Email Notifications:{" "}
                </h3>
                <p>
                  Stay informed and connected. We offer email notifications for
                  various events, such as account creation, posting a lost
                  belonging, and when someone contacts you regarding a lost
                  item. This ensures you never miss an important update.
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
                  How do I create an account on Lost and Found?{" "}
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
                  To create an account, simply click on the "Try it free" or
                  "Let's get started" button and enter your full name, college
                  email address, phone number, and a secure password. Click the
                  "Signup" button to complete your registration.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  How can I post a lost belonging on Lost and Found?{" "}
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
                  Once you're logged in, on your navigation bar and click on
                  "Post" Fill in the required details, including a item name,
                  description, lost location, item image Url and a validating
                  question for verifying the founder is genuine, and then "Post"
                  your listing.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  Can I change or update my contact information later?{" "}
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
                  Yes, you can update your contact information in your user
                  profile settings. Ensure your information is always accurate
                  to facilitate easy communication with finders.{" "}
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  What are Validation Questions, and how do they work?{" "}
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
                  Validation Questions are an additional security measure. When
                  you post a lost belonging, you can set specific questions that
                  only the true owner would know. This ensures that your contact
                  information is not visible to all users, only to those who can
                  correctly answer the questions.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  Do I receive notifications for important events on the
                  platform?{" "}
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
                  Yes, you'll receive email notifications for various events,
                  including when you create an account and post a lost
                  belonging. This keeps you informed and connected.
                </p>
              </details>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  How can I contact someone who found my lost item?{" "}
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
                  When a user expresses interest in returning your lost item,
                  you'll receive a message on your phone number from the user
                  whom you have approved the response. You can then coordinate
                  the return with them securely.
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
    </div>
  );
}
