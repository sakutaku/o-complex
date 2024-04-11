import React from 'react';
import { IReview } from '../type';
import sanitizeHtml from 'sanitize-html';

interface Props {
    review: IReview;
    index: number;
  }

const ReviewCard:React.FC<Props> = ({ review, index }) => {
  const sanitizedText = sanitizeHtml(review.text);
  return (
    <div className="review-card">
      <h2>Отзыв {index + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: review.text }} />
    </div>
  );
};

export default ReviewCard;