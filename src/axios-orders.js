import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-79104.firebaseio.com/"
});

export default instance;
