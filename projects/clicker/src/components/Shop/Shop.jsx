import { Component } from 'react';
import { convertCash } from 'js/cashConvert';

export class Shop extends Component {
  render() {
    const { buttonColor, changeColorEvent } = this.props;
    return (
      <aside className="shop-aside active">
        <ul className="shop-list global-list">
          <li>
            <div className="product-preview">
              <input
                type="color"
                value={buttonColor}
                onChange={changeColorEvent}
              />
            </div>
            <button className="global-button" data-cost={1_000_000}>
              <span>{convertCash(1_000_000)}$</span>
            </button>
          </li>
        </ul>
      </aside>
    );
  }
}
