import axios from 'axios';
import { Article } from '../types/blog';

// Use RSS to JSON conversion service
const RSS2JSON_API_KEY = 'your_api_key'; // Free tier works for demo
const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';

const RSS_FEEDS = [
  'https://blog.google/technology/ai/rss/',
  'https://blogs.microsoft.com/ai/feed/',
  'https://openai.com/blog/rss.xml'
];

export async function fetchArticles(): Promise<Article[]> {
  try {
    // Try each feed until we get a successful response
    for (const feed of RSS_FEEDS) {
      try {
        const response = await axios.get(RSS2JSON_API, {
          params: {
            rss_url: feed,
            api_key: RSS2JSON_API_KEY,
            count: 8
          }
        });

        if (response.data?.items?.length > 0) {
          return response.data.items.map((item: any) => ({
            title: item.title || 'Untitled',
            creator: item.author || 'AI News',
            pubDate: item.pubDate || new Date().toISOString(),
            link: item.link || '#',
            contentSnippet: item.description?.replace(/<[^>]*>/g, '').slice(0, 200) + '...' || 'No description available'
          }));
        }
      } catch (error) {
        console.error(`Error fetching from ${feed}:`, error);
        continue;
      }
    }
    
    return getFallbackArticles();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return getFallbackArticles();
  }
}

function getFallbackArticles(): Article[] {
  const now = new Date().toISOString();
  return [
    {
      title: "GPT-4 and the Future of Enterprise AI",
      creator: "AI Research Team",
      pubDate: now,
      link: "https://example.com/gpt4-enterprise",
      contentSnippet: "An in-depth analysis of how GPT-4 is transforming enterprise operations and decision-making processes."
    },
    {
      title: "Breakthrough in Quantum Machine Learning",
      creator: "Quantum AI Lab",
      pubDate: now,
      link: "https://example.com/quantum-ml",
      contentSnippet: "Recent developments in quantum computing are opening new frontiers in machine learning capabilities."
    },
    {
      title: "AI Ethics in Autonomous Systems",
      creator: "Ethics in Tech",
      pubDate: now,
      link: "https://example.com/ai-ethics-2024",
      contentSnippet: "Exploring the ethical considerations and guidelines for developing autonomous AI systems."
    },
    {
      title: "The Rise of Multimodal AI Models",
      creator: "AI Innovations",
      pubDate: now,
      link: "https://example.com/multimodal-ai",
      contentSnippet: "How new AI models are combining text, vision, and audio for more comprehensive understanding."
    },
    {
      title: "AI in Climate Change Mitigation",
      creator: "Green Tech AI",
      pubDate: now,
      link: "https://example.com/ai-climate",
      contentSnippet: "Artificial intelligence is playing a crucial role in addressing climate change challenges."
    },
    {
      title: "Edge AI: The Next Computing Frontier",
      creator: "Tech Frontiers",
      pubDate: now,
      link: "https://example.com/edge-ai-2024",
      contentSnippet: "Exploring the latest developments in edge computing and AI processing at the device level."
    },
    {
      title: "AI-Driven Drug Discovery Breakthroughs",
      creator: "BioAI Research",
      pubDate: now,
      link: "https://example.com/ai-drug-discovery",
      contentSnippet: "How artificial intelligence is accelerating the drug discovery and development process."
    },
    {
      title: "The Evolution of Conversational AI",
      creator: "AI Systems Lab",
      pubDate: now,
      link: "https://example.com/conversational-ai",
      contentSnippet: "Latest advancements in natural language processing and conversational AI technologies."
    }
  ];
}