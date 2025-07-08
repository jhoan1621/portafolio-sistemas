'use client';

import { Container } from '@/components/ui/Container';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Puedes contactarme a través de este formulario (funcionalidad por implementar).
        </p>
      </Container>
    </section>
  );
};