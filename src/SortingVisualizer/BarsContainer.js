import React, {PureComponent} from 'react'

class BarsContainer extends PureComponent {
    constructor() {
        super();
    }
    render() {
        const {array} = this.props
        let bars = []
        array.map((value, idx) => {
            bars.push(<div 
                className="bars"
                key={idx}
                style={{height : `${value}px`}}></div>)
        })
        return (
            <div>
                {bars}
            </div>
        );
    }
}

export default BarsContainer;