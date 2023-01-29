import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Header extends React.Component{
  render(){
    return(

      <Row>
        <Col className="headerCol">
          <h1>Animal Area {this.props.heart}</h1>
        </Col>

        <Col>
        <Form className="d-flex searchBar">
          Form.Control
          onInput={this.props.handleInputSearch} 
                value={this.props.searchInput}
                type="search"
                placeholder="Search"
                classname="me-2"
                aria-label="Search"
              
                /{'>'}

                // TA assist
                <Button onSubmit={this.props.handleSubmitSearch} variant="outline-success">Search</Button>
        </Form>
        </Col>
      </Row>
    )
  }
}

export default Header;