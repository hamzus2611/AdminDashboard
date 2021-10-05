import "./FeaturedInfo.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="Featured">
      <div className="FeaturedItem">
        <span className="FeatureTitle">Revanue</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$2.548</span>
          <span className="FeaturedMoneyRate">
            -11.4 <ArrowDownward className="featureIcon negative"/>
          </span>
        </div>
        <div className="FeaturedSub">Compared to last months</div>
      </div>
      <div className="FeaturedItem">
        <span className="FeatureTitle">Sales</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$25.48</span>
          <span className="FeaturedMoneyRate">
            -2.4 <ArrowDownward className="featureIcon negative"/>
          </span>
        </div>
        <div className="FeaturedSub">Compared to last months</div>
      </div>
      <div className="FeaturedItem">
        <span className="FeatureTitle">Cost</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$25.548</span>
          <span className="FeaturedMoneyRate">
            +58.4 <ArrowUpward className="featureIcon positive" />
          </span>
        </div>
        <div className="FeaturedSub">Compared to last months</div>
      </div>
    </div>
  );
}
