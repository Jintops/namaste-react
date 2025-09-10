const Shimmer = () => {
  return (
    <div className="animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="flex">
        <input
          disabled
          className="bg-gray-300 rounded-lg w-[300px] h-9 ml-32 mt-14"
        />
        <input
          disabled
          className="bg-gray-300 mx-3 rounded-md mt-14 w-40 h-9"
        />
      </div>

      {/* Restaurant Cards Skeleton */}
      <div className="mx-28 grid grid-cols-5 gap-6 mb-10 mt-14">
        {Array(10)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="h-[300px] w-[230px] bg-gray-300 rounded-xl shadow-md"
            >
              <div className="h-[160px] w-full bg-gray-400 rounded-t-xl"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-400 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-400 rounded w-2/3"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
