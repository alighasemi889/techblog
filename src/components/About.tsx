const About = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-lg mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Empowering Developers with Knowledge
            </h2>
            <p className="text-slate-400 mb-6">
              TechBlog is your go-to destination for high-quality articles on artificial
              intelligence, programming, and cybersecurity. Our mission is to make complex
              technology accessible to everyone.
            </p>
            <p className="text-slate-400 mb-8">
              Whether you're a beginner just starting your journey or an experienced
              professional looking to stay updated, we provide carefully curated content
              that helps you grow and succeed in the tech industry.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Expert Writers</h4>
                  <p className="text-slate-500 text-sm">Industry professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Quality Content</h4>
                  <p className="text-slate-500 text-sm">In-depth tutorials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Regular Updates</h4>
                  <p className="text-slate-500 text-sm">Fresh content weekly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Community</h4>
                  <p className="text-slate-500 text-sm">Active discussions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Stats Section */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-slate-400 text-sm mt-2">Articles Published</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-slate-400 text-sm mt-2">Monthly Readers</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-slate-400 text-sm mt-2">Expert Writers</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-slate-400 text-sm mt-2">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
