import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageName() {
  const [pageName, setPageName] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('checkout')) {
      setPageName('Finalizar Pedido');
    }
    if (pathname.includes('orders')) {
      setPageName('Detalhe do Pedido');
    }
    if (pathname.includes('/admin/manage')) {
      setPageName('Painel Administrativo');
    }
  }, [pathname]);

  return pageName;
}
