import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="max-w-480 mx-auto">
      <Outlet />
    </div>
  );
};

export default PageLayout;
