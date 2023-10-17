import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export type listingProps = {
  id: React.Key;
  ownerId: React.Key;
  name: string;
  imageUrl: string;
  updatedAt: string;
};

export default function YourListingsCard({ post }: { post: listingProps }) {
  return (
    <>
      <Link to={`/home/${post.ownerId}/${post.id}`}>
        {/*<!-- Component: Basic image card --> */}
        <div className="p-4 overflow-hidden rounded bg-gray-50 text-slate-500 shadow-md shadow-slate-200">
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
              <h3 className="text-xl font-medium text-slate-700">
                {post.name}
              </h3>
              <p className="text-sm text-slate-400">
                {formatDistanceToNow(new Date(post.updatedAt), {
                  addSuffix: true,
                })}
              </p>
            </header>
          </div>
        </div>
        {/*<!-- End Basic image card --> */}
      </Link>
    </>
  );
}
