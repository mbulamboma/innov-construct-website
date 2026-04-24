import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MouseFollower } from '../components/MouseFollower';

export default function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <MouseFollower />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
