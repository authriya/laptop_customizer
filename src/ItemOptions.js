import React from 'react'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class ItemOptions extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="feature__options">
              <input
                type="radio"
                id={this.props.id}
                key={this.props.id}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={this.props.name === this.props.stateFeatureName}
                onChange={e => this.props.change(this.props.feature, this.props)}
              />
              <label htmlFor={this.props.id} className="feature__label">
                {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
              </label>
            </div>
          );
    }
}

export default ItemOptions