<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h5">Lista de Usuários</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="users" item-value="matricula" class="elevation-1">
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn small color="primary" @click="editUser(item)">Editar</v-btn>
            <v-btn small color="error" @click="deleteUser(item.getMatricula())">Excluir</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import Service from '@/services/userService'
import type IUsuario from '@/models/IUsuario'

export default {
  setup() {
    const users: Ref<IUsuario[]> = ref([])
    const headers = ref([
      { text: 'Nome', value: 'nome' },
      { text: 'Matrícula', value: 'matricula' },
      { text: 'Idade', value: 'idade' },
      { text: 'Cargo', value: 'cargo' },
      { text: 'Ações', value: 'actions', sortable: false },
    ])

    const fetchUsers = async () => {
      try {
        users.value = await Service.getUsuarios()
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    const editUser = (user: IUsuario) => {
      alert(`Editar usuário: ${user.getNome}`)
    }

    const deleteUser = async (matricula: string) => {
      try {
        await Service.deleteUsuario(matricula)
        fetchUsers()
      } catch (error) {
        console.error('Erro ao excluir usuário:', error)
      }
    }

    onMounted(fetchUsers)

    return {
      users,
      headers,
      editUser,
      deleteUser,
    }
  },
}
</script>

<style scoped>
.v-container {
  padding: 16px;
}

.text-h5 {
  font-weight: bold;
  text-align: center;
}
</style>
