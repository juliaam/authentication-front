import { defineStore } from "pinia";
import { User } from "../types/User";
import { UserService } from "../services/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
    password: "",
  }),
  getters: {},
  actions: {
    register(body: User) {
      return UserService.register(body);
    },
  },
});
