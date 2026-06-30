const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          New articles every week
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Learn{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            AI, Programming
          </span>
          <br />& Cybersecurity
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Explore cutting-edge technologies, master modern development practices,
          and stay ahead in the ever-evolving world of tech.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
            Explore Articles
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-slate-500">Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-slate-500">Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-sm text-slate-500">Topics</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
