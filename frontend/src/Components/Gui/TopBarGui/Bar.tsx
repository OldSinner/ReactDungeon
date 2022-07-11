export enum BarType {
  HEALTH,
  MANA,
  EXP,
}
type Props = {
  health: number;
  max: number;
  type: BarType;
};
type BarColor = {
  active: string;
  used: string;
};
const Bar = ({ health, max, type }: Props) => {
  function determinateColor(): BarColor {
    switch (type) {
      case BarType.HEALTH:
        return { active: "bg-hba", used: "bg-hbu" };
      case BarType.MANA:
        return { active: "bg-mba", used: "bg-mbu" };
      default:
        return { active: "bg-mba", used: "bg-mbu" };
    }
  }
  const color = determinateColor();
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className={`w-1/2 h-4 ${color.used} flex flex-col bg-repeat-x border-[1px ] border-gray-600`}
      >
        <div
          className={`w-full h-full ${color.active}  bg-repeat-x bg-auto`}
          style={{ width: (health * 100) / max + "%" }}
        ></div>
      </div>
      <div className="text-lg font-mono ml-1 hidden md:block">
        {health}/{max}
      </div>
    </div>
  );
};
export default Bar;
