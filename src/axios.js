import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-goldencircle-ecommerce.cloudfunctions.net/api",
});
export default instance;

//   http://localhost:5001/goldencircle-ecommerce/us-central1/api
