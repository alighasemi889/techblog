import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const categoryColors = {
    AI: 'bg-cyan-500/20 text-cyan-400',
    Programming: 'bg-blue-500/20 text-blue-400',
    Security: 'bg-emerald-500/20 text-emerald-400'
  };

  return (
    <article className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {article.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{article.publishDate}</span>
          <span>{article.readTime}</span>
        </div>

        {/* Read More Button */}
        <button className="mt-4 w-full py-2.5 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">
          Read More
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;
