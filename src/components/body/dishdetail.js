import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

const dishdetail = ({ dish }) => {
    return (
        <div>
            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src={dish.image}
                    style={{
                        height: "220px"
                    }}
                    top
                    width="100%"
                />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle tag="h5">
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                    <CardText>
                        {dish.price}/-
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
};

export default dishdetail;
