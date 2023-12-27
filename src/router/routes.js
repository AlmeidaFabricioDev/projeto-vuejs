import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import ControleDeProdutosView from '@/views/ControleDeProdutosView.vue';
import ControleDeClientesView from '@/views/ControleDeClientesView.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        title: 'Login',
        meta: { requiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
        title: 'Dashboard',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutosView,
        title: 'Produtos',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientesView,
        title: 'Controle de Clientes',
        meta: { requiredAuth: true }
    }
];

export default routes;