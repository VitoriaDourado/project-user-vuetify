import IUsuario from '@/models/IUsuario'

class Service {
  private static apiBaseUrl = 'http://localhost:3000/usuarios'

  static async getUsuarios(): Promise<IUsuario[]> {
    try {
      const response = await fetch(this.apiBaseUrl)
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.')
      }
      const data = await response.json()
      return data as IUsuario[]
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async getUsuarioByMatricula(matricula: string): Promise<IUsuario> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/${matricula}`)
      if (!response.ok) {
        throw new Error('Erro ao buscar o usuário.')
      }
      const usuario = await response.json()
      return usuario as IUsuario
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async createUsuario(usuario: IUsuario): Promise<void> {
    try {
      const response = await fetch(this.apiBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: usuario.getNome(),
          matricula: usuario.getMatricula(),
          idade: usuario.getIdade(),
          cargo: usuario.getCargo(),
          tipo: usuario.getTipo(),
        }),
      })
      if (!response.ok) {
        throw new Error('Erro ao criar o usuário.')
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async updateUsuario(id: string, dados: Partial<IUsuario>): Promise<void> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      })
      if (!response.ok) {
        throw new Error('Erro ao atualizar o usuário.')
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async deleteUsuario(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Erro ao excluir o usuário.')
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default Service
