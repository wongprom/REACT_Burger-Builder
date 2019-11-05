import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-ea911.firebaseio.com/"
})

export default instance;