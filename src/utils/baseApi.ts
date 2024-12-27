class BaseApi {
  _baseUrl: string;

  constructor() {
    this._baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  private async _checkResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json();
    }

    const errorData = await res.json().catch((err) => console.error(err));
    const errorMessage = errorData?.message || `Error: ${res.status}`;
    return Promise.reject(new Error(errorMessage));
  }

  protected _authorizedRequest<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return Promise.reject(
        new Error("No token provided, authentication needed")
      );
    }

    const headers = new Headers(options.headers);
    headers.set("Authorization", `Bearer ${token}`);
    options.headers = headers;

    return this._request<T>(url, options);
  }

  protected async _request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this._baseUrl}${url}`, options);
    return this._checkResponse<T>(response);
  }
}

export default BaseApi;
