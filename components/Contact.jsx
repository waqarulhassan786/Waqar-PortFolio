export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build in MERN</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Full MERN Stack Solutions</h3>
            <p className="text-slate-300 mb-8">
              I build end-to-end MERN applications with polished user interfaces, backend APIs, and reliable database architecture.
              If you need a modern web app with strong frontend UX and scalable backend logic, let&apos;s connect.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">waqarulhassan3484@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+92 300 0110620</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-400
                rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/20">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  required
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}