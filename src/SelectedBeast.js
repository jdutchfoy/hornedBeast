import React from 'react'
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.component {

  render (){
    render {
      return (
        <Modal 
        show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.body> 
          <img src={this.props.selectedbeastImg} alt ={this.props.selectedBeastDescription} /></Modal.body>
          </Modal>
      )
    }
  }
}