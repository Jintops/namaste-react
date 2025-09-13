const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl grid md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Get in Touch ✉️
          </h1>

          <form className="flex flex-col">
            <input
              type="text"
              className="border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
            <input
              type="tel"
              className="border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Phone"
            />
            <textarea
              className="border border-gray-300 p-3 mb-4 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Contact Information 📍
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> support@foodieapp.com
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +91 9526301688
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Food Street, kannur, Kerala
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
