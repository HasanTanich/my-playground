import Banner3 from "../assets/Banner3.jpg";

const TailWind = () => {
  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="object-cover w-full h-48 md:h-full md:w-48"
            src={Banner3}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Company retreats
          </div>
          <a
            href="#"
            className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailWind;
