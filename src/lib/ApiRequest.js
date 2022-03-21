class ApiRequest {
  constructor(route, method, payload, isImage = false, isAuth = true) {
    this.route = route;
    this.method = method;
    this.isImage = isImage;
    this.isAuth = isAuth;
    this.payload = payload;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    if (!token) return;
    localStorage.setItem('token', token);
  }

  getHeaders() {
    const headers = {};
    if (this.isAuth) {
      headers['authorization'] = this.getToken();
    }
    if (this.method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }

    return headers;
  }

  async request() {
    const headers = this.getHeaders();
    const res =
      this.method === 'GET'
        ? await fetch(`${process.env.REACT_APP_BASE_URL}${this.route}`, {
            headers: { ...headers },
          })
        : await fetch(`${process.env.REACT_APP_BASE_URL}${this.route}`, {
            method: this.method,
            headers: { ...headers },
            body: JSON.stringify(this.payload),
          });

    const data = await res.json();

    if (data?.status === 'error' || data?.status === 'fail') {
      throw new Error(data?.message || 'Something went wrong');
    }
    console.log(data);
    return data;
  }
}

export default ApiRequest;
