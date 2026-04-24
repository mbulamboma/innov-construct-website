import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CertificatsPage from './pages/CertificatsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'apropos', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'projets', Component: ProjectsPage },
      { path: 'equipe', Component: AboutPage },
      { path: 'certificats', Component: CertificatsPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: HomePage },
    ],
  },
]);
