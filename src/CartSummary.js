import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartSummary extends React.Component {
    render() {
        const featureHash = this.props.featureName + '-' + this.props.id;
        return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{this.props.featureName} </div>
              <div className="summary__option__value">{this.props.selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(this.props.selectedOption.cost)}
              </div>
            </div>
          )
    }
}

export default CartSummary