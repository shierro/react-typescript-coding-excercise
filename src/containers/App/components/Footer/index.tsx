import React from 'react';

const Container: React.FC = ({ children }) => (
  <section
    className="
      footer
      p-8
      bg-gray-50
      border-t-2
      dark:bg-gray-700
      dark:text-white"
  >
    {children}
  </section>
);

function Footer() {
  return (
    <Container>
      <h1>Baked with Love</h1>
    </Container>
  );
}

export default Footer;
