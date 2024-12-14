import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-xl mt-2">Explore articles, stories, and more!</p>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/download.jpg"
              ///500x300
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Post Title 1</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, orci vitae vestibulum mollis.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/download (2).jpg"
              alt="Blog Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Post Title 2</h2>
              <p className="text-gray-700 mb-4">
                Aliquam erat volutpat. Phasellus tincidunt ligula sit amet nibh ultricies, eu gravida nulla tincidunt.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/download (1).jpg"
              alt="Blog Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Post Title 3</h2>
              <p className="text-gray-700 mb-4">
                Aenean sit amet orci ut augue volutpat aliquam. Fusce vitae lorem at nisi eleifend dignissim.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
