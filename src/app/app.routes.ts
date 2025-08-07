import { Routes } from '@angular/router';
import {Login} from './pages/auth/login/login';
import {Register} from './pages/auth/register/register';
import { Layout } from './pages/user/layout/layout';
import { Cursos } from './pages/user/cursos/cursos';
import { Dashboard} from './pages/user/dashboard/dashboard';
import { MateriaDetalhe } from './pages/user/materia-detalhe/materia-detalhe';
import { Materias } from './pages/user/materias/materias';
import { Cursos as CursosAdmin } from './pages/admin/cursos/cursos';
import { Materias as MateriasAdmin } from './pages/admin/materias/materias';
import { Layout as LayoutAdmin } from './pages/admin/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'user',
        component: Layout,
        children: [
            {path:'cursos', component: Cursos},
            {path: 'dashboard', component: Dashboard},
            {path: 'materias', component: Materias},
            {path: 'materias/:id', component: MateriaDetalhe}
        ]
    },
    {
        path: 'admin',
        component: LayoutAdmin,
        children: [
            { path: 'cursos', component: CursosAdmin },
            { path: 'materias', component: MateriasAdmin }
        ]
    }

];
