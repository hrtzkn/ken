function ContactPage() {
    return (
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#032F30]">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our products, need support, or just want to say hi, 
          feel free to reach out.
        </p>
        <form className="mt-6 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left font-medium text-[#032F30]">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left font-medium text-[#032F30]">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left font-medium text-[#032F30]">Message:</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#0C969C] text-white px-4 py-2 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
  export default ContactPage;
  