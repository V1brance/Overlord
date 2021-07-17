import Stats from "./components/stats/stats";
import Topbar from "./components/topbar/topbar";
import Spells from "./components/spells/spells";
import Weapons from "./components/weapons/weapons";

export default function Character() {
  return (
    <>
      <Topbar />
      <Stats />
      <Spells />
      <Weapons />
    </>
  );
}
