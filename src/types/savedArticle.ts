import { Article } from "./newsapi";

export interface SavedArticle extends Article {
  _id: string;
  keyword: string;
}

export const mockArticles: SavedArticle[] = [
  {
    _id: "1",
    keyword: "Holidays",
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Alison Fixsen",
    title: "How to Manage Food Anxiety Over the Holidays",
    description:
      "The festive period can be stressful, particularly for those who struggle with food anxiety, weight concerns, or an eating disorder. Here are some tips for navigating an intense time of year.",
    url: "https://www.wired.com/story/how-to-cope-with-food-anxiety-during-the-festive-season/",
    urlToImage:
      "https://media.wired.com/photos/6765adc7cc34aeb1ebbef52f/191:100/w_1280,c_limit/holida-food-anxiety-sci.jpg",
    publishedAt: "2024-12-21T13:00:00Z",
    content:
      "THIS ARTICLE IS republished fromThe Conversationunder aCreative Commons license.\r\nChristmas can be a time of togetherness, fun, and relaxation. Yet, it can also bring unique challengesparticularly fo… [+2504 chars]",
  },
  {
    _id: "2",
    keyword: "Nature",
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Kylie Mohr",
    title: "December Wildfires Are Now a Thing",
    description:
      "Expect more fires like the fast-moving one in Malibu, scientists say.",
    url: "https://www.wired.com/story/december-wildfires-are-now-a-thing/",
    urlToImage: "",
    publishedAt: "2024-12-21T13:00:00Z",
    content:
      "This story originally appeared on High Country News and is part of the Climate Desk collaboration.\r\nIn Southern California, December wildfires are somewhat uncommon but not completely out of the norm… [+2822 chars]",
  },
  {
    _id: "3",
    keyword: "Battlefield",
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Justin Ling",
    title: "The Invisible Russia-Ukraine Battlefield",
    description:
      "In Russia’s war against Ukraine, electronic warfare, including signal-jamming, anti-drone weapons, and innovative protections for critical military systems, has become a key piece of the conflict.",
    url: "https://www.wired.com/story/electronic-warfare-russia-ukraine/",
    urlToImage:
      "https://media.wired.com/photos/6761eb89efbc1b1b386cbd9e/191:100/w_1280,c_limit/GettyImages-2186637556.jpg",
    publishedAt: "2024-12-23T10:00:00Z",
    content:
      "Russias systems were not very mobile, not very distributed, Clark tells WIRED. Their relatively small number of big systems, Clark says, werent really relevant in the fight.\r\nMoscows strategy assumed… [+2252 chars]",
  },
];
