import { categories } from '../data/articles';

const Categories = () => {
  const gradients = [
    'from-cyan-500 to-blue-500',
    'from-blue-500 to-indigo-500',
    'from-emerald-500 to-teal-500'
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore Categories
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dive deep into your favorite topics with our curated content.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Icon */}
              <div className="text-5xl mb-6">{category.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {category.description}
              </p>

              {/* Article Count */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{category.articleCount} articles</span>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 text-slate-600 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
