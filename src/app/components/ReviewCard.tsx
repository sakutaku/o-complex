import React from 'react';
import { IReview } from '../type';

interface Props {
    review: IReview;
    index: number;
  }

const ReviewCard:React.FC<Props> = ({ review, index }) => {
  return (
    <div className="review-card">
      <h2>Отзыв {index + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: review.text }} />
    </div>
  );
};

export default ReviewCard;