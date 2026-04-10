import { Component } from "react";
import { convertCash } from "../../js/cashConvert";

export class EarnUpdate extends Component {
  render() {
    const { updateEarnPerClick, updates } = this.props;

    return (
      <aside className="update-aside">
        <ul className="update-click-list global-list">
          {updates.map(({ id, cost, profit }, index) => (
            <li key={id}>
              <button
                className="update-per-click-button global-button"
                onClick={updateEarnPerClick}
                data-cost={cost}
                data-profit={profit}
                data-k={(index + 1) * 1.5}
                data-index={index}
              >
                <span>+{convertCash(profit)}$</span>
                <span>{convertCash(cost)}$</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
