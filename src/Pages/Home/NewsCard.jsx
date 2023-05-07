import moment from 'moment/moment';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark ,FaShareAlt , FaEye , FaStar ,FaRegStar} from "react-icons/fa";
import Rating from 'react-rating';
const NewsCard = ({news}) => {
    const {title,details,_id,image_url,author,total_view,rating} = news
    return (
        <Card className='mb-5'>
        <Card.Header className='d-flex gap-4 align-items-center'> 
            <Image style={{height:"45px"}} src={author?.img} roundedCircle />
            <div className='mb-0 flex-grow-1'>
                <p className='mb-0'>{author?.name}</p>
                <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
            </div>
            <div className=''>
                <FaRegBookmark/>
                <FaShareAlt/>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant='top' src={image_url}/>
            <Card.Text>
                {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
            </Card.Text>    
        </Card.Body>
        <Card.Footer className="text-muted d-flex gap-3 align-items-center">
            <div className='flex-grow-1 d-flex align-items-center gap-3'>
                <Rating
                    placeholderRating={rating.number}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar  className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}>
                </Rating>
                <span>{rating.number}</span>
            </div>
            <div className=' d-flex align-items-center gap-3'>
                <FaEye></FaEye>
                <div>
                {total_view}
                </div>
            </div>
        </Card.Footer>
    </Card>
    );
};

export default NewsCard;