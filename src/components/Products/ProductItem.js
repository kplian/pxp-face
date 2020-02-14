import React, { useState, useContext } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup ,UncontrolledCarousel, Input, Form, Row, Col, FormGroup, Label } from 'reactstrap';
import MaterialIcon, { colorPalette } from 'material-icons-react'
import { ProductsContext } from './ProductsContext';
import ProductModal from './ProductModal';

const ProductItem = ( { product, type } ) => {
    const [selectClass, setSelectClass] = useState('');
    const images = mapImages(product.images);
    const color = product.type === 'event' ? 'danger' : 'info'; 
    const { handleItemSelect } = useContext(ProductsContext);
    // Modal 
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const handleSelect = ( product ) => {
        setSelectClass( 'success' )
        product.select = true;
    };

    return (
        <div className="card-with-box m-2">
            <Card className={ 'shadow border border-' + color } >
                <UncontrolledCarousel items={ images } indicators={ false } controls={false} className="img-carousel"/>
                {
                    // <CardImg top width="10%" src={img} alt="Card image cap" className="img-fluid"/>
                }
                <CardBody className={ 'bg-' + selectClass }>
                    <CardTitle className="text-center text-dark"><b>{ product.name }</b></CardTitle>
                    <CardSubtitle className="text-warning">{ product.unitCost } <b>Bs</b></CardSubtitle>
                    <CardText className="text-secondary">{ product.type.toUpperCase() }</CardText>

                    { type === 'remove' && (
                        <Form>
                        <Row form>
                          <Col md={12}>
                            <FormGroup>
                              <Label for="quantity"><b>Disponible: { product.quantity}</b></Label>
                              <Input type="number" name="quantity" id="quantity" placeholder="Cantidad requerida" />
                            </FormGroup>
                          </Col>
                        </Row>
                        </Form>
                    )}
                    <ButtonGroup className="btn-block">
                        <Button 
                            onClick={ () => {
                                handleItemSelect(product, type);
                                handleSelect(product);
                            }} 
                            color={color} 
                            size="sm" 
                            block 
                            className="d-flex justify-content-between align-content-center">
                            Seleccionar
                        </Button>
                        <Button outline onClick={ toggleModal } color={color} size="sm" className="d-flex justify-content-between align-content-center">
                            <MaterialIcon icon="info" size="tiny" color="blue" />
                        </Button>
                    </ButtonGroup>
                </CardBody>
            </Card>
            <ProductModal toggle={toggleModal} modal={modal} product={ product } color={ color } images={ images }></ProductModal>
        </div>
    )
};

const mapImages = ( images = [] ) => {
    return images.map( img => ({ src: img, caption:'' }));
};
export default ProductItem;

