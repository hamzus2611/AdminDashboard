import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.scss";
import { Userdata } from "../../Userdata";
import WidgetsLg from "../../components/widgetsLg/WidgetsLg";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={Userdata}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
    <WidgetsSm/>
    <WidgetsLg/>
      </div>
    </div>
  );
}

export default Home;
