const CepAPI = {
  async getCep(cep: string) {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const JSON = await resp.json()
    return JSON
  },
}

export default CepAPI
