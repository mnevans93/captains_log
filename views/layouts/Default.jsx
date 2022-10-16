const React = require('react')

class Default extends React.Component {
    render() {
        const { log, title } = this.props
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/logs">Home Page</a><br />
                        <a href="/logs/new">Create a New Log Entry</a><br />
                        {(log) ? this.renderLogElements(log) : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }

    renderLogElements(log) {
        return(
            <>
                <a href={`/logs/${log._id}/edit`}> Edit This Entry</a><br />
                <a href={`/logs/${log._id}`}> View This Entry </a>
            </>
        )
    }
}

module.exports = Default