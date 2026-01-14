import { Outlet } from "react-router";
import Footer from "~/components/elements/Footer";
import Navbar from "~/components/elements/Navbar";

const PageLayout = () => {
  return (
    <div className="max-w-480 mx-auto pt-12 lg:pt-25">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
