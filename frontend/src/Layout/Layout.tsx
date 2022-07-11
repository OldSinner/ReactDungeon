import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-sceen h-screen">
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;
