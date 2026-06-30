export interface Article {
  id: number;
  title: string;
  description: string;
  category: 'AI' | 'Programming' | 'Security';
  image: string;
  readTime: string;
  publishDate: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Large Language Models: A Deep Dive",
    description: "Explore the architecture and capabilities of modern LLMs like GPT-4 and how they're revolutionizing AI applications.",
    category: "AI",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "8 min read",
    publishDate: "Jun 28, 2024"
  },
  {
    id: 2,
    title: "Building Secure REST APIs with Node.js",
    description: "Learn best practices for creating robust and secure REST APIs using Node.js and Express framework.",
    category: "Programming",
    image: "https://images.pexels.com/photos/270555/pexels-photo-270555.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "12 min read",
    publishDate: "Jun 26, 2024"
  },
  {
    id: 3,
    title: "Zero Trust Architecture: The Future of Security",
    description: "Why traditional security models are failing and how zero trust architecture is changing the game.",
    category: "Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "10 min read",
    publishDate: "Jun 24, 2024"
  },
  {
    id: 4,
    title: "Machine Learning for Beginners: Getting Started",
    description: "A comprehensive guide to understanding machine learning fundamentals and building your first model.",
    category: "AI",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "15 min read",
    publishDate: "Jun 22, 2024"
  },
  {
    id: 5,
    title: "Modern JavaScript: ES2024 Features You Should Know",
    description: "Discover the latest JavaScript features and how they can improve your code quality and productivity.",
    category: "Programming",
    image: "https://images.pexels.com/photos/270555/pexels-photo-270555.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "7 min read",
    publishDate: "Jun 20, 2024"
  },
  {
    id: 6,
    title: "Ransomware Prevention: Essential Strategies",
    description: "Protect your organization from ransomware attacks with these proven security strategies and tools.",
    category: "Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "9 min read",
    publishDate: "Jun 18, 2024"
  },
  {
    id: 7,
    title: "Neural Networks Explained: From Perceptrons to Deep Learning",
    description: "Understand the evolution of neural networks and how modern deep learning architectures work.",
    category: "AI",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "14 min read",
    publishDate: "Jun 16, 2024"
  },
  {
    id: 8,
    title: "TypeScript Best Practices for Large Projects",
    description: "Scale your TypeScript codebase effectively with these proven patterns and practices.",
    category: "Programming",
    image: "https://images.pexels.com/photos/270555/pexels-photo-270555.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "11 min read",
    publishDate: "Jun 14, 2024"
  },
  {
    id: 9,
    title: "Penetration Testing: A Comprehensive Guide",
    description: "Learn the fundamentals of ethical hacking and penetration testing to secure your systems.",
    category: "Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "13 min read",
    publishDate: "Jun 12, 2024"
  }
];

export const categories = [
  {
    name: "Artificial Intelligence",
    icon: "",
    description: "Explore machine learning, neural networks, and the future of AI technology.",
    articleCount: 24
  },
  {
    name: "Programming",
    icon: "",
    description: "Master modern programming languages, frameworks, and development practices.",
    articleCount: 36
  },
  {
    name: "Cybersecurity",
    icon: "",
    description: "Stay ahead of threats with the latest security insights and best practices.",
    articleCount: 18
  }
];
