import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div class="container">
                <Form.Control className="main-search-bar" type="text" placeholder="Normal text" />
            </div>
        )
    }
}



export default Home
