import { Component } from "react";
import { Clicker } from "./components/Clicker/Clicker";
import { EarnUpdate } from "./components/EarnUpdate/EarnUpdate";
// import { Shop } from "./components/Shop/Shop";
import { convertCash } from "./js/cashConvert";
import { nanoid } from "nanoid";

const player = {
  cash: 0,
  earnPerClick: 1,
  updates: [...new Array(100).keys()]
    .map((e) => e + 1)
    .map((e, index) => ({
      id: nanoid(),
      cost: Math.pow(index + 1, 2) * e,
      profit: e * e,
    })),
  playSpentCashAudio: false,
  buttonColor: "#ededed",
};

export class App extends Component {
  state = player;

  earnMoney = () => {
    this.setState({ cash: this.state.cash + this.state.earnPerClick });
  };

  updateEarnPerClick = ({ currentTarget }) => {
    const cost = Number(currentTarget.getAttribute("data-cost"));
    if (this.state.cash >= cost) {
      const index = Number(currentTarget.getAttribute("data-index"));
      const k = Number(currentTarget.getAttribute("data-k"));
      const newEarnPerClick =
        this.state.earnPerClick +
        Number(currentTarget.getAttribute("data-profit"));
      const newCash = this.state.cash - cost;
      const newCost = (cost * k).toFixed(0);
      const newProfit = (((10 * newCost) / 100) * Math.random()).toFixed(0);

      const newUpdates = this.state.updates.slice();
      newUpdates[index].cost = newCost;
      newUpdates[index].profit = newProfit;

      this.setState({
        earnPerClick: newEarnPerClick,
        cash: newCash,
        updates: newUpdates,
      });
    }
  };

  render() {
    const { cash, earnPerClick, updates, buttonColor } = this.state;
    return (
      <>
        <Clicker earnMoney={this.earnMoney} buttonColor={buttonColor} />
        <p className="cash global-p">{convertCash(cash)}$</p>
        <p className="earn-per-click global-p">{convertCash(earnPerClick)}$</p>
        <EarnUpdate
          updateEarnPerClick={this.updateEarnPerClick}
          updates={updates}
        />
        {/* <Shop
          buttonColor={buttonColor}
          changeColorEvent={this.changeColorEvent}
        /> */}
      </>
    );
  }
}
