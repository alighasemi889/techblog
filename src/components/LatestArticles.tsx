import ArticleCard from './ArticleCard';
import { articles } from '../data/articles';

const LatestArticles = () => {
  const latestArticles = articles.slice().reverse();

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Latest Articles
            </h2>
            <p className="text-slate-400">
              Fresh content delivered to you regularly
            </p>
          </div>
          <button className="px-6 py-3 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">
            View All Articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
