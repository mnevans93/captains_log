const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render() {
        const {title, _id, entry, isShipBroken} = this.props.log
        return (
            <Default title={`Edit: ${title}`} log={this.props.log}>
                <form action={`/logs/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title}/><br />
                    Entry: <input type="text" name="entry" defaultValue={entry}/><br />
                    Is the Ship Broken: {isShipBroken ? <input type="checkbox" name="isShipBroken" defaultChecked /> : <input type="checkbox" name="isShipBroken" />} <br /> <br />
                    <input type="submit" value="Submit Changes" /> <br /><br />
                </form>
                <form action={`/logs/${_id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete Entry" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit