import { MenuItems } from '../../interfaces/menu-items';

export const sideMenu: MenuItems[] = [
  {
    title: 'Mi cuenta',
    url: '/home',
    icon: 'home',
  },
  {
    title: 'Nuevas solicitudes',
    url: '/quotes',
    icon: 'article',
  },
  {
    title: 'En evaluación',
    url: '/assesment',
    icon: 'hourglass_top',
  },
  {
    title: 'Ingresados al taller',
    url: '/workshop',
    icon: 'construction',
  },
  {
    title: 'Inventario',
    url: '/assignment',
    icon: 'assignment',
  },
  {
    title: 'ATC',
    url: '/atc',
    icon: 'forum',
  },
];
