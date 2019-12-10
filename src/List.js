import React from 'react'
import ListItems from './ListItems'

class List extends React.Component {
    render () {
        return (
            <form className="feature-list">
                <h2>Customize your laptop</h2>
                    {Object.keys(this.props.features).map((feature, idx)=> (
                        <ListItems 
                        featureName= {feature}
                        stateFeature = {this.props.selected[feature]}
                        key = {idx}
                        listItemOptions = {this.props.features[feature]}
                        change = {this.props.change}
                        />
                    ))}
            </form>
            );
    }
}

export default List