class IUsuario {
  private nome: string
  private matricula: string
  private idade: number
  private cargo: string
  private tipo: number

  constructor(nome: string, matricula: string, idade: number, cargo: string, tipo: number) {
    this.nome = nome
    this.matricula = matricula
    this.idade = idade
    this.cargo = cargo
    this.tipo = tipo
  }

  getNome(): string {
    return this.nome
  }

  setNome(nome: string): void {
    this.nome = nome
  }

  getMatricula(): string {
    return this.matricula
  }

  setMatricula(matricula: string): void {
    this.matricula = matricula
  }

  getIdade(): number {
    return this.idade
  }

  setIdade(idade: number): void {
    if (idade < 18 || idade > 60) {
      throw new Error('A idade deve ser entre 18 e 60 anos')
    }
    this.idade = idade
  }

  getCargo(): string {
    return this.cargo
  }

  setCargo(cargo: string): void {
    this.cargo = cargo
  }

  getTipo(): number {
    return this.tipo
  }

  setTipo(tipo: number): void {
    if (tipo !== 1 && tipo !== 2) {
      throw new Error('O tipo deve ser 1 (Admin) ou 2 (Comum).')
    }
    this.tipo = tipo
  }
}

export default IUsuario
