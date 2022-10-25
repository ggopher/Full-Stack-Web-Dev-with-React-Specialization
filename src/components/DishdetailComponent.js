import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b>   </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );

        } else {
            return (<div></div>);
        }
    }

    convertDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    renderComments(comments) {
        if (comments == null || comments.length === 0) {
            return (<div></div>);
        }
        const parsedComments = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} {this.convertDate(comment.date)}</p>
                </li>
            )
        });

        return (
            <div>
                <div><h4>Comments:</h4></div>
                <ul className="list-unstyled">
                    {parsedComments}
                </ul>
            </div>
        );

    }




    render() {
        if (this.props.selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        } else { return (<div></div>); }
    }
}
export default DishDetail;