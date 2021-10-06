import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className="header p-4 flex flex-row items-center border-b-2 bg-gray-50">
      <img src={logo} width="80" className="max-w-screen-sm animate-spin-slow" alt="React Logo" />
      <h1 className="text-2xl font-serif">Toptal React Coding Challenge</h1>
    </header>
  );
}

export default Header;
