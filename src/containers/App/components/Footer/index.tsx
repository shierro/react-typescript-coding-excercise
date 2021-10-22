const Container: React.FC = (props) => (
  <section 
    className="
      footer 
      p-8 
      bg-gray-50 
      border-t-2 
      dark:bg-gray-700
      dark:text-white"
  >
    {props.children}
  </section>
)

function Footer() {
  return (
    <Container>
      <h1>Baked with Love</h1>
    </Container>
  );
}

export default Footer;
