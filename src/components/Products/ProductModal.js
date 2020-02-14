import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledCarousel } from 'reactstrap';

const ProductModal = (props) => {
  const {
    className,
    modal,
    product,
    color,
    images
  } = props;

  return (
    <div>
        <Modal backdrop isOpen={modal} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle} className={'text-light bg-' + color}>{ product.name }</ModalHeader>
        <ModalBody>
            <UncontrolledCarousel items={ images }/>
            <b>Consto: </b><span className="text-warning">{ product.unitCost }</span><br/>
            <b>Descripción </b>{ product.description }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductModal;