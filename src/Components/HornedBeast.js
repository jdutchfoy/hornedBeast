import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// TA button/card 


// class comp?.. TA 
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 0,
    };
  };

  handleHeart = () => {
    this.setState ({
      heart: this.state.heart + 1,
    });
  };

  handleTitleClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  }
  
  render() {
    return (
      <>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" onClick={this.props.image_url} alt={this.props.description} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.state.favorite}
          </Card.Text>
          <Button variant="primary" onClick={this.handleFavorite}>Make favorite</Button>
        </Card.Body>
      </Card>
      </>
    )};
}
    
export default HornedBeast;