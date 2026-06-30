import ArticleCard from './ArticleCard';
import { articles } from '../data/articles';

const FeaturedArticles = () => {
  const featuredArticles = articles.slice(0, 9);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover our top picks for the best reads in AI, programming, and cybersecurity.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
