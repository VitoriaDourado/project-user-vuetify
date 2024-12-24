<template>
  <v-container>
    <v-card class="mx-auto" max-width="600">
      <v-card-title class="text-h5">{{ isEdit ? 'Editar Usuário' : 'Novo Usuário' }}</v-card-title>
      <v-card-text>
        <v-form ref="formRef" v-model="valid">
          <v-text-field v-model="form.nome" label="Nome" required></v-text-field>
          <v-text-field v-model="form.matricula" label="Matrícula" required></v-text-field>
          <v-text-field v-model="form.idade" label="Idade" type="number" required></v-text-field>
          <v-text-field v-model="form.cargo" label="Cargo" required></v-text-field>
          <v-select
            v-model="form.tipo"
            :items="[1, 2]"
            label="Tipo (1=Admin, 2=Comum)"
            required
          ></v-select>
          <v-btn :disabled="!valid" block color="primary" @click="submitForm">
            {{ isEdit ? 'Salvar Alterações' : 'Criar Usuário' }}
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Service from '@/services/userService'
import { useRouter, useRoute } from 'vue-router'
import IUsuario from '@/models/IUsuario'

interface RouteParams {
  matricula: string;
}

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const valid = ref(false)
    const formRef = ref()
    const form = reactive({
      nome: '',
      matricula: '',
      idade: 0,
      cargo: '',
      tipo: 0,
    })

    const isEdit = ref(false)

    const loadUserData = async (matricula: string) => {
      try {
        const usuario = await Service.getUsuarioByMatricula(matricula)
        form.nome = usuario.getNome()
        form.matricula = usuario.getMatricula()
        form.idade = usuario.getIdade()
        form.cargo = usuario.getCargo()
        form.tipo = usuario.getTipo()
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error)
      }
    }

    const submitForm = async () => {
      try {
        const usuario = new IUsuario(
          form.nome as string,
          form.matricula as string,
          form.idade as number,
          form.cargo as string,
          form.tipo as number,
        )

        if (isEdit.value) {
          await Service.updateUsuario(usuario.getMatricula(), usuario)
        } else {
          await Service.createUsuario(usuario)
        }

        router.push('/users')
      } catch (error) {
        console.error('Erro ao salvar o usuário:', error)
      }
    }

    onMounted(() => {
      const matricula = (route.params as RouteParams).matricula
      if (matricula) {
        isEdit.value = true
        loadUserData(matricula)
      }
    })

    return {
      valid,
      form,
      formRef,
      isEdit,
      submitForm,
    }
  },
}
</script>

