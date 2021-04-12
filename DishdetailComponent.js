import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { List } from 'reactstrap';


	
	
	
    function RenderDish({dish}) 
    {

        console.log("renderDishDetail is invoked " + dish);

        if (dish!=null){
                return (
                  
                    <div key={dish.id} className="col-12 col-md-5 m-1">
					<Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
                    </div>
                   
				);
			}else{
				return(
					<div></div>
				);
			}
    }

    // function RenderComments({commentsList}) {

    //     if (commentsList.length > 0) {

    //         const result = commentsList.map((comment) => {

    //             return (
                   
    //                 <div key={comment.id} >
                       
    //                     <ul className = "list-unstyled">
    //                         <li >{comment.comment}</li >
    //                         <li >-- {comment.author}, {new Intl.DateTimeFormat('en-Us', { year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
    //                     </ul>
    //                 </div>

    //             );

    //         }

    //         );

    //         return result;
    //     } else {
    //         return (

    //             <div></div>

    //         );
    //     }
    // }
		
    const DishDetail = (props) => {

        let commentsList = [];
        let commentsHeading;
        if (props.selectedDishDetail != null) {

            commentsHeading = <h4>Comments</h4>;
            commentsList = this.props.selectedDishDetail.comments;
        }

        return (
                
            <div className="container">       
                
                <RenderDish dish={props.dish} />               
                {/* <div className="col-12 col-md-5 m-1">
                    {commentsHeading}
                    <RenderComments commentsList={props.dish.comments} />
                </div> */}
            
            </div>
        );
	}



export default DishDetail;