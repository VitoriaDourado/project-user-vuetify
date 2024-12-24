<template>
  <v-container max-width="1000" class="pa-4" style="width: 100%; display: flex; justify-content: center;">
    <v-card class="mx-auto" max-width="600" style="width: 100%; max-width: 600px; padding: 24px;">
      <v-card-title class="text-h5 text-center">Login</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field label="Usuário" v-model="username" required></v-text-field>
          <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
          <v-btn :disabled="!valid" block color="primary" @click="login">Entrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import IUsuario from '@/models/IUsuario'

interface User {
  usuario: string
  senha: string
  tipo: number
}

export default {
  setup() {
    const router = useRouter()
    const store = useUserStore()

    const username = ref('')
    const password = ref('')
    const valid = ref(false)

    const login = async () => {
      try {
        const response = await fetch('http://localhost:3000/login')

        if (!response.ok) {
          throw new Error('Falha na requisição!')
        }

        const users: User[] = await response.json()

        console.log('Usuários recebidos da API:', users);

        console.log('Usuário digitado:', username.value);
        console.log('Senha digitada:', password.value);

        const user = users.find(
          (u: User) => u.usuario.trim() === username.value.trim() && u.senha.trim() === password.value.trim()
        )

        if (user) {
          const usuario = new IUsuario(
            user.usuario,
            'matriculaDefault',
            18,
            'Cargo padrão',
            user.tipo,
          )

          store.addUser(usuario)

          if (user.tipo === 1) {
            router.push('/users/new')
          } else {
            router.push('/users')
          }

        } else {
          alert('Usuário ou senha inválidos!')
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        alert('Erro ao fazer Login')
      }
    }

    return {
      username,
      password,
      valid,
      login,
    }
  },
}
</script>

<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
}

.v-card {
  width: 100%;
  max-width: 600px;
  padding: 24px;
}

.v-card-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.v-btn {
  margin-top: 20px;
}

.v-text-field {
  margin-bottom: 20px;
}
</style>
