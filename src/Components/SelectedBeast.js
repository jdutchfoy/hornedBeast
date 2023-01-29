import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Row classname="row" xs={1} sm={2} md={3} lg={4}>
        
      <Modal
        show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.body>
          <img src={this.props.selectedbeastImg} alt={this.props.selectedBeastDescription} /></Modal.body>
      </Modal></Row>
    )
  }
}
export default SelectedBeast;
