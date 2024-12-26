interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface Response {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const mockArticle = {
  source: {
    id: null,
    name: "Yahoo Entertainment",
  },
  author: "Steve Dent",
  title:
    "Brazilian judge overturns ruling that forced Apple to open up its Store",
  description:
    "Last week, Brazil's antitrust regulator CADE ordered Apple to allow users to download apps and make purchases from outside its App Store, with a 20-day deadline and fines for not complying. Now, a Brazilian federal court has overturned that injunction, ruling…",
  url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7919bf3d-75e3-4d2d-b677-5128a6ce1567",
  urlToImage: null,
  publishedAt: "2024-12-06T13:00:39Z",
  content:
    "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
};
