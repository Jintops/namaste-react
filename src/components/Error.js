import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-600">Oops!!!</h1>
      <h2 className="text-2xl text-gray-700 mt-4">
        Something went wrong 🤕
      </h2>
      {err?.status && (
        <p className="text-lg text-gray-600 mt-2">
          {err.status} - {err.statusText}
        </p>
      )}

      {/* Back to Home button */}
      <Link
        to="/"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go Back Home 🏠
      </Link>
    </div>
  );
};

export default Error;
