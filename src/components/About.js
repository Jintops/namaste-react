import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Our Food Ordering App 🍴
      </h1>

      {/* Intro Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-10 text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our <span className="font-semibold text-red-500">Food Ordering Platform</span> 🚀.  
          We bring you the best dining experience by connecting with{" "}
          <span className="font-semibold">Swiggy’s live API</span>, offering
          real-time restaurant data and menus. Whether you’re craving a quick
          snack or a full meal, we’ve got you covered.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-600">
            To make food ordering simple, fast, and enjoyable by offering a
            seamless user experience with real-time updates and smart search
            options.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">💡 What We Offer</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Real-time restaurant and menu updates</li>
            <li>Filter & search for top-rated restaurants</li>
            <li>Shimmer UI for smooth loading experience</li>
            <li>Add items to cart & manage your order</li>
          </ul>
        </div>
      </div>

      {/* Developer Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">👨‍💻 About the Developer</h2>
        <p className="text-gray-600 mb-4">
          Hi, I’m <span className="font-semibold">Jinto Thomas</span>, a MERN stack
          developer passionate about building modern web applications.  
          This app is part of my journey to craft impactful digital experiences.
        </p>
        <p className="text-gray-500 text-sm">Made with ❤️ using React & TailwindCSS</p>
      </div>
    </div>
  );
};

export default About;
