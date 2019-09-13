import React, { Component } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';


class CharInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

    }

    open() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    close() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const info = this.props.charInfo;

        return (
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>Episode</th>
                        <td>{info.episode_id}</td>
                    </tr>
                    <tr>
                        <th>Opening Crawl</th>
                        <td>{info.opening_crawl}</td>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <td>{info.director}</td>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <td>{info.producer}</td>
                    </tr>
                    <tr>
                        <th>Producer</th>
                        <td>{info.producer}</td>
                    </tr>
                    <tr>
                        <th>Release Date</th>
                        <td>{info.release_date}</td>
                    </tr>
                    
                </tbody>
            </Table>
        )

    }
}

export default CharInfo;