import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function YourListingsCard({ post }) {
  return (
    <>
      {/*<!-- Component: Basic image card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src={post.imageUrl}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <Link to="/home/userId/itemId">
              <h3 className="text-xl font-medium text-slate-700">
                {post.name}
              </h3>
            </Link>
            <p className="text-sm text-slate-400">
              {formatDistanceToNow(new Date(post.updatedAt), {
                addSuffix: true,
              })}
            </p>
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}
    </>
  );
}
