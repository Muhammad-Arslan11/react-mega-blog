/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import {services} from './index';


 function PostCard({
   $id, title, featuredImage,
}) {
        return(
        <Link to={`/post/${$id}`}>
             <div className='to be added from notes'>
                   <div className='to be added from notes'>
                        <img src={services.getFilePreview(featuredImage)} 
                                  alt={title}
                                  className='rounded-lg'                                   
                         />
                  </div>
                       <h2 className='text-xl font-bold'>{title}</h2>
             </div>
        </Link>
)
}

export default PostCard;
