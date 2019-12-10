import React from 'react'
import ItemOptions from './ItemOptions'
import slugify from 'slugify';

class ListItems extends React.Component {
    render () {
        const featureHash = this.props.featureName + '-' + this.props.id;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className = "feature__name">
                    {this.props.featureName}
                </legend>
                {this.props.listItemOptions.map(option => (
                    <ItemOptions 
                    key = {slugify(JSON.stringify(option))}
                    id = {slugify(JSON.stringify(option))}
                    feature = {this.props.featureName}
                    name = {option.name}
                    stateFeatureName = {this.props.stateFeature.name}
                    cost = {option.cost}
                    change = {this.props.change} />
                ))}
            </fieldset>
        )
    }
}

export default ListItems