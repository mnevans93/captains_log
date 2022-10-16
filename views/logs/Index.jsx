const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render() {
        const {logs} = this.props
        return (
            <Default title="Captain's Log Index">
                <ul>
                    {logs.map((log) => {
                        const {_id, title} = log
                        return (
                            <li key={_id}>
                                <a href={`/logs/${_id}`}>{title}</a>
                            </li>
                        )
                    })}
                </ul>
            </Default>
        )
    }
}

module.exports = Index