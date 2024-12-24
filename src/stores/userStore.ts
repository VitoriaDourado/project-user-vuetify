import type IUsuario from '@/models/IUsuario'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as IUsuario[],
  }),
  actions: {
    setUsers(users: IUsuario[]) {
      this.users = users
    },

    addUser(user: IUsuario) {
      this.users.push(user)
    },

    removeUser(matricula: string) {
      this.users = this.users.filter((user) => user.getMatricula() !== matricula)
    },
  },
})
