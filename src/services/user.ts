import axios from "axios";
import { User } from "../types/User";

export class UserService {
  private static apiUrl = "https://localhost:3000/api/users";

  static register(body: User) {
    return axios.post(`${this.apiUrl}/register`, body);
  }
}
