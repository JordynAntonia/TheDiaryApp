// import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'


const BlogCard = ({token}) => {
    // const { blogCardId } = useParams()
    console.log('CHECK OUT THE PARAMS!!', useParams())
    const [blogCard] = useState(null)
  
    return (

    <>
    <Link to="/">View All BLogs</Link>
    {blogCard ? (
      <div>
        <h3>{blogCard.date_created}</h3>
        <h3>{blogCard.title}</h3>
      </div>
    ) : (
      <div>
        <h3>Blog Not Found</h3>
      </div>
    )}
  </>

  );
};
export default BlogCard;


