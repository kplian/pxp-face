import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { Link } from "react-router-dom";

class CustomerListItem extends React.Component {
    img = 'https://randomuser.me/api/portraits/' + this.props.customer.photo;

    render() {
        return (
            <div className="card-with m-3">
                <Card className="shadow border border-success">
                    <CardImg top width="100%" src={this.img} alt="Card image cap" className="img-fluid"/>
                    <CardBody className="bg-light">
                        <CardTitle className="text-xl-center text-dark">{ this.props.customer.name }</CardTitle>
                        <CardSubtitle className="text-warning">{ this.props.customer.mobile }</CardSubtitle>
                        <CardText className="text-secondary">{ this.props.customer.address }</CardText>
                        <Link className="btn btn-block btn-success" to= {{
                            pathname: '/sales/' + this.props.customer.id,
                            customer: this.props.customer
                        }}>Seleccionar</Link>
                    </CardBody>
                </Card>
            </div>
        );
    }    
};

export default CustomerListItem;
