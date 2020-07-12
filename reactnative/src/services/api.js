import axios from 'axios';

const api = axios.create({
  // 10.0.2.2 ip para acesso a api local usando o emulador do android studio
  // 10.0.3.3 ip usando o genimotion
  // 192.168.0.104 usar o ip da maquina na rede se estiver uando o celular
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
