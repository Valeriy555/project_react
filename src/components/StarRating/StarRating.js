import React from 'react';

import StarRatings from "react-star-ratings/build/star-ratings";

import {useLocation} from "react-router";

const StarRating = () => {
    const location = useLocation();
    const {state} = location;

    const {vote_average} = state
    return (
        <div>
            <b>Rating:</b> ({vote_average})

            <StarRatings
                rating={vote_average}
                starDimension="15px"
                starSpacing="3px"
                numberOfStars={10}
                starRatedColor="gold"
            /> <br/>
        </div>
    );
};

export {StarRating};