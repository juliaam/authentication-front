import { defineStore } from "pinia";
import { User } from "../types/User";
import { UserService } from "../services/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      name: "",
      email: "",
      password: "",
    } as User,
  }),
  getters: {},
  actions: {
    register() {
      return UserService.register(this.user);
    },
  },
});
