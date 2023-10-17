import React, { useState, useRef, useEffect, FormEvent } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Spinner from "./Spinner";

type ItemDetail = {
  id: React.Key;
  name: string;
  description: string;
  lostLocation: string;
  imageUrl: string;
  owner: {
    id: React.Key;
    name: string;
  };
  validatingQuestion: string;
};

type Responded = [
  {
    postId: React.Key;
    founderId: React.Key;
    ownerId: React.Key;
  }
];

export default function ItemDetail() {
  const [isShowing, setIsShowing] = useState(false);

  const [userId, setUserId] = useState("");
  const { itemId } = useParams();
  const [itemDetail, setItemDetail] = useState<ItemDetail>();

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseLoading, setResponseLoading] = useState(false);
  const [alreadyResponded, setAlreadyResponded] = useState<Responded | []>([]);

  useEffect(() => {
    async function fetchcurrentUserId() {
      const requestUserId = await axios.get("/api/user/userId");

      if (requestUserId.status === 200) {
        setUserId(requestUserId.data);
      }
    }

    async function fetchResponded() {
      const requestResponse = await axios.get(`/api/user/response/${itemId}`);

      if (requestResponse.status === 200) {
        setAlreadyResponded(requestResponse.data);
      }
    }

    async function fetchItemDetails() {
      setLoading(true);
      const request = await axios.get(`/api/item/${itemId}`);

      if (request.status === 200) {
        setLoading(false);
        setItemDetail(request.data);
      }
    }

    fetchcurrentUserId();
    fetchResponded();
    fetchItemDetails();
  }, []);

  async function handleResponse(e: FormEvent) {
    e.preventDefault();
    try {
      setResponseLoading(true);
      const request = await axios.post(
        `/api/response/${itemId}`,
        JSON.stringify({ answer }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (request.status === 200) {
        setResponseLoading(false);
        toast.success("Responded successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Internal Server Error");
    }
  }

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      <Navbar />

      {loading && (
        <div className="flex  my-20 justify-center items-center">
          <Spinner />
        </div>
      )}

      {/*<!-- Component: Basic image card --> */}
      <div className="my-10 p-14 gap-10 grid lg:grid-cols-3 overflow-hidden text-slate-500">
        {/*  <!--  Image --> */}
        <figure className="lg:col-span-2">
          <img
            src={itemDetail?.imageUrl}
            alt="card image"
            className="aspect-video w-full  rounded-xl"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="lg:p-6 lg:col-span-1">
          <header className="">
            <h3 className="text-5xl mb-4 font-medium text-slate-700">
              {itemDetail?.name}
            </h3>
            <p className="text-lg text-slate-500">{itemDetail?.description}</p>
            <h5 className="text-lg font-medium text-emerald-600">
              By {itemDetail?.owner.name}
            </h5>
            <p className="mb-4 font-semibold text-xl text-slate-600">
              <br />
              Lost Location: {itemDetail?.lostLocation}
            </p>

            {itemDetail?.owner.id !== userId &&
              !alreadyResponded.some(
                (response) =>
                  response.founderId === userId && response.postId === itemId
              ) && (
                <button
                  onClick={() => setIsShowing(true)}
                  className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
                >
                  <span>Found</span>
                </button>
              )}

            {isShowing && typeof document !== "undefined"
              ? ReactDOM.createPortal(
                  <div
                    className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                    aria-labelledby="header-3a content-3a"
                    aria-modal="true"
                    tabIndex={-1}
                    role="dialog"
                  >
                    {/*    <!-- Modal --> */}
                    <div
                      ref={wrapperRef}
                      className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                      id="modal"
                      role="document"
                    >
                      {/*        <!-- Modal header --> */}
                      <header
                        id="header-3a"
                        className="flex justify-end items-center gap-4"
                      >
                        <h3 className="flex-1 text-xl font-medium text-slate-700">
                          Answer the question asked by the owner
                        </h3>
                        <button
                          onClick={() => setIsShowing(false)}
                          className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-teal-500 transition duration-300 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-teal-300 disabled:shadow-none disabled:hover:bg-transparent"
                          aria-label="close dialog"
                        >
                          <span className="relative only:-mx-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              role="graphics-symbol"
                              aria-labelledby="title-79 desc-79"
                            >
                              <title id="title-79">Icon title</title>
                              <desc id="desc-79">
                                A more detailed description of the icon
                              </desc>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>
                      </header>
                      {/*        <!-- Modal body --> */}
                      <div id="content-3a" className="flex-1 overflow-auto">
                        {/*<!-- Component: Card with form --> */}
                        <form
                          onSubmit={handleResponse}
                          className="max-w-xl mb-10 mx-10 md:mx-auto overflow-hidden bg-white text-slate-500"
                        >
                          {/*  <!-- Body--> */}
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              <p className="text-md mt-2 text-slate-700">
                                {itemDetail?.validatingQuestion}
                              </p>
                              {/*      <!-- Input field --> */}
                              <div className="relative mb-6">
                                <input
                                  id="answer"
                                  type="text"
                                  name="answer"
                                  placeholder="your answer"
                                  onChange={(e) => {
                                    setAnswer(e.target.value);
                                  }}
                                  value={answer}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                  htmlFor="answer"
                                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                  Your answer
                                </label>
                              </div>
                            </div>
                          </div>

                          {responseLoading && (
                            <div className="flex justify-center">
                              <Spinner />
                            </div>
                          )}

                          {/*  <!-- Action base sized basic button --> */}
                          <div className="flex justify-end p-2 ">
                            <button className="inline-flex h-10 max-w-md mx-auto items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
                              <span>Submit</span>
                            </button>
                          </div>
                        </form>
                        {/*<!-- End Card with form --> */}
                      </div>
                    </div>

                    <ToastContainer autoClose={5000} />
                  </div>,
                  document.body
                )
              : null}
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}
    </>
  );
}
