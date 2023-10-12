import { useNavigate, useParams } from "react-router-dom";
import GottenResponseCard from "./GottenResponseCard";
import Navbar from "./Navbar";
import ReactDOM from "react-dom";
import { useEffect, useState, useRef, FormEvent } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserItemDetail() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lostLocation, setLostLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [validatingQuestion, setValidatingQuestion] = useState("");

  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [isShowing, setIsShowing] = useState(false);

  const [gottenResponses, setGottenResponses] = useState([]);

  useEffect(() => {
    async function fetchItemDetail() {
      setLoading(true);
      const request = await axios.get(`/api/user/item/${itemId}`);

      if (request.status === 200) {
        setLoading(false);
        setName(request.data.name);
        setDescription(request.data.description);
        setLostLocation(request.data.lostLocation);
        setImageUrl(request.data.imageUrl);
        setValidatingQuestion(request.data.validatingQuestion);
      }
    }

    async function fetchGottenResponses() {
      const responses = await axios.get(`/api/response/${itemId}`);

      if (responses.status === 200) {
        setGottenResponses(responses.data);
      }
    }

    fetchGottenResponses();
    fetchItemDetail();
  }, []);

  console.log(gottenResponses);

  async function handlePostUpdate(e: FormEvent) {
    e.preventDefault();

    const updatedInfo = {
      name,
      description,
      lostLocation,
      imageUrl,
      validatingQuestion,
    };

    setUpdateLoading(true);
    const request = await axios.put(
      `/api/item/${itemId}`,
      JSON.stringify(updatedInfo),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (request.status === 201) {
      setUpdateLoading(false);
      toast.success("Info updated successfully");
    } else {
      setUpdateLoading(false);
      toast.error("Unexpected Error");
    }
  }

  async function handlePostDelete(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    const deleteRequest = await axios.delete(`/api/item/${itemId}`);

    if (deleteRequest.status === 200) {
      setLoading(false);
      toast.success("Deleted post successfully");
      navigate("/home/your-listings");
    } else {
      setLoading(false);
      toast.error("Unexpected Error");
    }
  }

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: FormEvent) {
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
    function handleClickOutside(event) {
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
          'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])';

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
            src={imageUrl}
            alt="card image"
            className="aspect-video w-full  rounded-xl"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="lg:p-6 lg:col-span-1">
          <header className="">
            <h3 className="mb-4 text-5xl font-bold text-slate-700">{name}</h3>
            <p className="mb-4 text-lg text-slate-500">{description}</p>

            <p className="mb-4 font-semibold text-xl text-slate-400">
              Lost Location: {lostLocation}
            </p>

            {/*<!-- Component: Large secondary basic button --> */}
            {/* <button className="mr-4 mb-4 inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-teal-50 px-6 text-sm font-medium tracking-wide text-teal-500 transition duration-300 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none">
              <span>Edit</span>
            </button> */}
            {/*<!-- End Large secondary basic button --> */}

            <button
              onClick={() => setIsShowing(true)}
              className="mr-4 mb-4 inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-teal-50 px-6 text-sm font-medium tracking-wide text-teal-500 transition duration-300 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none"
            >
              <span>Edit</span>
            </button>

            {isShowing && typeof document !== "undefined"
              ? ReactDOM.createPortal(
                  <div
                    className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                    aria-labelledby="header-3a content-3a"
                    aria-modal="true"
                    tabIndex="-1"
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
                          Updated your post details
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
                          onSubmit={handlePostUpdate}
                          className="max-w-xl mb-10 mx-10 md:mx-auto overflow-hidden bg-white text-slate-500"
                        >
                          {/*  <!-- Body--> */}
                          <div className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/*      <!-- Input field --> */}
                              <div className="relative">
                                <input
                                  id="name"
                                  type="text"
                                  name="name"
                                  placeholder={name}
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                  value={name}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-700 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                              </div>

                              {/*      <!-- Input field --> */}
                              <div className="relative mb-6">
                                <input
                                  id="description"
                                  type="text"
                                  name="description"
                                  placeholder={description}
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                  }}
                                  value={description}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-700 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                              </div>

                              {/*      <!-- Input field --> */}
                              <div className="relative mb-6">
                                <input
                                  id="lost-location"
                                  type="text"
                                  name="lost-location"
                                  placeholder={lostLocation}
                                  onChange={(e) => {
                                    setLostLocation(e.target.value);
                                  }}
                                  value={lostLocation}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-700 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                              </div>

                              {/*      <!-- Input field --> */}
                              <div className="relative mb-6">
                                <input
                                  id="imageUrl"
                                  type="text"
                                  name="imageUrl"
                                  placeholder={imageUrl}
                                  onChange={(e) => {
                                    setImageUrl(e.target.value);
                                  }}
                                  value={imageUrl}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-700 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                              </div>

                              {/*      <!-- Input field --> */}
                              <div className="relative mb-6">
                                <input
                                  id="validating-question"
                                  type="text"
                                  name="validating-question"
                                  placeholder={validatingQuestion}
                                  onChange={(e) => {
                                    setValidatingQuestion(e.target.value);
                                  }}
                                  value={validatingQuestion}
                                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-slate-700 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                              </div>
                            </div>
                          </div>

                          {updateLoading && (
                            <div className="flex mb-6 justify-center">
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

            {/*<!-- Component: Large outline basic button --> */}
            <button
              onClick={handlePostDelete}
              className="mr-4 mb-4 inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-red-500 px-6 text-sm font-medium tracking-wide text-red-500 transition duration-300 hover:border-red-600 hover:text-white hover:bg-red-600 focus:border-red-700 focus:text-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:text-red-300 disabled:shadow-none"
            >
              <span>Delete</span>
            </button>
            {/*<!-- End Large outline basic button --> */}
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}

      <div>
        <h1 className="mb-4 text-center text-3xl font-extrabold text-slate-700">
          Gotten Responses
        </h1>
        <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {gottenResponses &&
            gottenResponses.map((gottenResponse) => (
              <GottenResponseCard
                key={gottenResponse.id}
                response={gottenResponse}
              />
            ))}
        </div>
      </div>
    </>
  );
}
