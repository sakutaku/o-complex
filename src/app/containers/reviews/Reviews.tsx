"use client"
import React, { useEffect, useState } from 'react';
import { IReview } from '../../type';
import ReviewCard from '@/app/components/ReviewCard';
import Spinner from '@/app/components/Spinner';

function Reviews() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
    
  useEffect(() => {
    const fetchReviews = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://o-complex.com:1337/reviews');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          setLoading(false);
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            setReviews(data);
          } else {
            console.error('Error fetching reviews:', xhr.statusText);
          }
        }
      };
      xhr.send();
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div className="reviews-card-container">
      {loading && <Spinner/>}
        {reviews && reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Reviews;