import axios from "axios";

const clientUser = axios.create({
  baseURL: "http://localhost:4000"
})

export default clientUser