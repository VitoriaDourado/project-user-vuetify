<template>
  <v-container max-width="1000" class="pa-4" style="width: 90vw;">
    <v-card class="mx-auto" max-width="500">
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
import {useUserStore} from '../stores/userStore'
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
        // Fazendo a requisição para a API
        const response = await fetch('http://localhost:3000/login')

        if (!response.ok) {
          throw new Error('Falha na requisição!')
        }

        const users: User[] = await response.json()

        // Logando os dados da resposta para verificar se estão corretos
        console.log('Usuários recebidos da API:', users);

        // Logando os valores de entrada
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

          // Redirecionando de acordo com o tipo do usuário
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
  /* Adicionando largura personalizada */
  max-width: 100%;
  padding: 0 5%;
}

.v-card {
  padding: 20px;
}

.v-card-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}

.v-text-field {
  margin-bottom: 15px;
}
</style>
