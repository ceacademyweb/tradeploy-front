import Aprendizaje from "../molecules/Aprendizaje";
import Signals from "../molecules/Signals";
import Suscibete from "../molecules/Suscibete";
import Trader from "../molecules/Trader";

const Home = () => {
  return (
    <div className={'Home-new'}>
      <Signals/>
      <Trader/>
      <Aprendizaje/>
      <Suscibete/>
    </div>
  );
};

export default Home;
