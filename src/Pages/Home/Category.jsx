import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const {id} = useParams()
    const categoriesNews = useLoaderData();
    return (
        <div>
            {id && <h2>This is category : {categoriesNews.length}</h2>}
            {
                categoriesNews.map(news => <NewsCard
                key = {news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;