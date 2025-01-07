import { mockArticles, SavedArticle } from "types/savedArticle";
import BaseApi from "./baseApi";

class ArticlesApi extends BaseApi {
  private static shared: ArticlesApi;

  constructor() {
    if (ArticlesApi.shared) {
      return ArticlesApi.shared;
    }

    super();
    ArticlesApi.shared = this;
  }

  async getArticles(): Promise<SavedArticle[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockArticles);
      }, 300);
    });
  }
}

export default new ArticlesApi();
