import Mainnav from './mainnav';

export default function Layout({ children }) {
  return (
    <div>
      <Mainnav />
      <main>{children}</main>
    </div>
  );
}
