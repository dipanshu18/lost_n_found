import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export type lostItemCardProps = {
  id: React.Key;
  imageUrl: string;
  name: string;
  owner: {
    name: string;
  };
  updatedAt: string;
};

export default function LostItemCard({ item }: { item: lostItemCardProps }) {
  return (
    <>
      {/*<!-- Component: Basic image card --> */}
      <Link to={`/home/${item.id}`}>
        <div className="overflow-hidden rounded bg-white text-slate-500 border-slate-100 shadow-xl shadow-slate-200">
          {/*  <!--  Image --> */}
          <figure>
            <img
              src={item.imageUrl}
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="">
              <h3 className="text-2xl font-medium text-slate-700">
                {item.name}
              </h3>
              <h5 className="text-md font-medium text-emerald-600">
                By {item.owner.name}
              </h5>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(item.updatedAt), {
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
