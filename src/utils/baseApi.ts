class BaseApi {
  _baseUrl: string;

  constructor() {
    this._baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  private _checkResponse<T>(res: Response): Promise<T> {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  protected _authorizedRequest<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    options.headers = options.headers || {};
    const token = localStorage.getItem("jwt");

    if (!token) {
      return Promise.reject(
        new Error("No token provided, authentication needed")
      );
    }

    options.headers.Authorization = `Bearer ${token}`;

    return this._request<T>(url, options);
  }

  protected _request<T>(url: string, options?: RequestInit): Promise<T> {
    return fetch(`${this._baseUrl}${url}`, options).then((res) =>
      this._checkResponse<T>(res)
    );
  }
}

export default BaseApi;
