function HomePage() {
  return (
    <section
      id="home"
      className="relative text-center mb-8 bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/store-banner.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Ultimate Online Store</h2>
        <p className="text-lg">
          Discover a variety of products for every need! From electronics to fashion, explore our wide range of quality items at unbeatable prices.
        </p>
      </div>
    </section>
  );
}

export default HomePage;