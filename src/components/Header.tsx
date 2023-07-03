interface HeaderProps {
  header: string;
}

function Header({ header }: HeaderProps) {
  return <h1>{header}</h1>;
}
export default Header;
