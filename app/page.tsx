import Link from "next/link";

import Image from "next/image";
import HeroImg from "@/public/hero.png";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="hero py-32">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <Image
            src={HeroImg}
            width={500}
            alt="Hero section illustration image"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">Lost and Found</h1>
            <p className="py-6 flex flex-wrap">
              Lost and Found is a student-focused web app that simplifies lost
              item reporting, connecting owners with finders, and prioritizes
              user privacy and security, offering email notifications and
              validation questions for a seamless experience.
            </p>
            <Link href="/signup">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="animate-bounce flex justify-center items-center">
        <div className="w-10 h-10 bg-base-300 rounded-full flex justify-center items-center">
          <FaArrowDown />
        </div>
      </div>

      <section className="py-24 ">
        <h1 className="text-center my-10 text-4xl font-bold">What we do?</h1>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-10">
          <div className="card w-96 bg-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
          <div className="card w-96 bg-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
          <div className="card w-96 bg-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h1 className="text-center my-10 text-4xl font-bold">FAQ&apos;s</h1>
        {/*<!-- Component: Basic accordion --> */}
        <section className="max-w-5xl mx-auto divide-y rounded divide-slate-200 ">
          <details className="p-4 group" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How does TailwindCSS works?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac01 desc-ac01"
              >
                <title id="title-ac01">Open icon</title>
                <desc id="desc-ac01">
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
              Tailwind CSS works by scanning all of your HTML files, JavaScript
              components, and any other templates for className names,
              generating the corresponding styles and then writing them to a
              static CSS file.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I install TailwindCSS?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac02 desc-ac02"
              >
                <title id="title-ac02">Open icon</title>
                <desc id="desc-ac02">
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
              The simplest and fastest way to get up and running with Tailwind
              CSS from scratch is with the Tailwind CLI tool. The CLI is also
              available as a standalone executable if you want to use it without
              installing Node.js. Install tailwindcss via npm, and create your
              tailwind.config.js file.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              What is Wind UI about?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac03 desc-ac03"
              >
                <title id="title-ac03">Open icon</title>
                <desc id="desc-ac03">
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
              Expertly made, responsive, accessible components in React and HTML
              ready to be used on your website or app. Just copy and paste them
              on your Tailwind CSS project.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I use Wind UI components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac04 desc-ac04"
              >
                <title id="title-ac04">Open icon</title>
                <desc id="desc-ac04">
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
              All components can be copied and pasted and easily implemented in
              your tailwind css projects. You can choose which language you want
              to copy the desired component and just hover and click on the
              component you need and paste it on your project.
            </p>
          </details>
        </section>
        {/*<!-- End Basic accordion --> */}
      </section>

      <footer className="footer footer-center p-4 mt-10 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Lost and Found</p>
        </aside>
      </footer>
    </>
  );
}
