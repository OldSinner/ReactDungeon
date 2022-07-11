import "../styles/gui.css";
import Bar, { BarType } from "./Gui/TopBarGui/Bar";
const Topbar = () => {
  return (
    <div className=" absolute flex justify-center bg-tb bg-bottom w-screen bg-cover bg-no-repeat left-1/2  h-40 max-w-6xl -translate-x-1/2">
      <div className="w-4/5  flex flex-col ">
        <div className="flex flex-row justify-between">
          <div className="w-1/3 m-1">
            <Bar health={100} max={100} type={BarType.HEALTH}></Bar>
          </div>
          <div className="w-1/3 m-1">
            <Bar health={50} max={100} type={BarType.HEALTH}></Bar>
          </div>
          <div className="w-1/3 m-1">
            <Bar health={13} max={100} type={BarType.MANA}></Bar>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Topbar;
