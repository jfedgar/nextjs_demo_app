import React, { Component } from 'react'

class Prices extends Component {
  state = {
    currency: 'EUR'
  }

  renderList() {
    let currency = this.props.bpi[this.state.currency]

    return (
      <li className="list-group-item">
        Bitcoin rate for {currency.description}
        : <span class="badge badge-primary">{currency.code}</span>
        <strong>{currency.rate}</strong>
      </li>
    );
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
        <br />
        <select
          className='form-control'
          onChange={e => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices;
