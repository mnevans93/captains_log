const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render() {
        const { title, entry, isShipBroken, _id } = this.props.log
        return(
            <Default title={`${title}`} log={this.props.log}>
                <p>{entry}</p>
                <p>{isShipBroken ? `The ship is non-operational.` : `All systems in working order.`}</p>
            </Default>
        )
    }
}

module.exports = Show