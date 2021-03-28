import Nav from "./Nav/Nav";

function Layout({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
