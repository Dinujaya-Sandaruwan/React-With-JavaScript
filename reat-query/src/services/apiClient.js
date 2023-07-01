import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAllTodos = () => {
    return axiosInstance.get(this.endpoint).then((response) => response.data);
  };
}

export default APIClient;
