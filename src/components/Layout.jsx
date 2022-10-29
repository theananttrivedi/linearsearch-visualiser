import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-Inter px-2 pb-2 min-h-screen flex flex-col items-center mt-4 overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Layout;
