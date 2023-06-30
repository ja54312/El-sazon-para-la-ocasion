'use client';
//Librerias
import React, { useState, useEffect } from 'react';
//Modelos
interface ClientOnlyProps {
  children: React.ReactNode;
}

/*Componente para solucionar el error de Hydration*/
const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;