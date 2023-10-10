export default function Spinner() {
  return (
    <>
      {/*<!-- Component: Basic xl sized 1/2 spinner  --> */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title-04a desc-04a"
        aria-live="polite"
        aria-busy="true"
        className="animate h-10 w-10 animate-spin"
      >
        <title id="title-04a">Icon title</title>
        <desc id="desc-04a">Some desc</desc>
        <circle
          cx="12"
          cy="12"
          r="10"
          className="stroke-slate-200"
          strokeWidth="4"
        />
        <path
          d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
          className="stroke-emerald-500"
          strokeWidth="4"
        />
      </svg>
      {/*<!-- End Basic xl sized 1/2 spinner  --> */}
    </>
  );
}
