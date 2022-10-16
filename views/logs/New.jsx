const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="Create a New Entry">
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title"/><br />
                    Entry: <input type="text" name="entry"/><br />
                    Is the Ship Broken: <input type="checkbox" name="isShipBroken"/><br /><br />
                    <input type="submit" value="Submit Entry" />
                </form>
            </Default>
        )
    }
}

module.exports = New