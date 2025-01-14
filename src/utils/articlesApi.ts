import { SavedArticle } from "types/savedArticle";
import BaseApi from "./baseApi";
import { Article, Response } from "types/newsapi";

export interface SaveResponse {
  article: SavedArticle;
  message: string;
}

class ArticlesApi extends BaseApi {
  private static shared: ArticlesApi;

  constructor() {
    if (ArticlesApi.shared) {
      return ArticlesApi.shared;
    }

    super();
    ArticlesApi.shared = this;
  }

  async getArticles(query: string = "apple"): Promise<Article[]> {
    const url = `/articles?query=${query}`;
    const response = await this._request<Response>(url);

    return response.articles;
  }

  async saveArticle(article: Article, keyword: string): Promise<SaveResponse> {
    const articleWithKeyword = { ...article, keyword };

    const body = {
      article: articleWithKeyword,
    };

    return await this._authorizedRequest<SaveResponse>("/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async removeArticle(url: string): Promise<void> {
    const body = { url };

    await this._authorizedRequest<void>("/articles", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

export default new ArticlesApi();
