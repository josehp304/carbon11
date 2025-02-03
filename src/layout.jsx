import Navbar from "./navbar"

const Layout = ({
  children
}) => {
  return (
    (<div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>)
  );
}

export default Layout

