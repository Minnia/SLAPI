import {AxiosInstance} from 'axios';

const authRoutes = (network: AxiosInstance) => ({
  login: (id: string) => network.post('/signin', {id}),
});

export default authRoutes;
