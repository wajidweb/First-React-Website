import React from 'react';
import './Blogs.css';
import {Button} from './../../../components/Button';
import { BlogsData1, BlogsData2, BlogsData3, BlogsData4, BlogsData5, BlogsData6} from '../HomePage/BlogData';


const Blogbox= ({
    image, 
    title,
    date,
    author,
    description,
    children
})=>{
    return(
        <div className="blogbox-container">
                <div className="blogbox-container-wraper">
                    <div className="blog-image">
                        <img src={image} alt="blog image" style={{width: "100%"}}/>
                    </div>

                    <div className="box-contents-container-wrapper">
                    <div className="title-box">
                        <p className="blog-titile">{title}</p>
                        <p className="date">{date}</p>
                        <p className="author">{author}</p>
                    </div>
                    <div className="description-box">
                        <p className="description">{description}</p>
                    </div>
                    <div className="read-btn">
                    <Button children={children} buttonColor="blue" buttonSize="btn--large" buttonStyle="btn--primary" />
                    </div>
                    </div>

                </div>
        </div>
    )
}

export default function Blogs() {
    return (
        <div className="blog-container">
            <div className="blog-container-wrapper">
               <div className="blogs-sections">
               <Blogbox {...BlogsData1} />
                <Blogbox {...BlogsData2}/>
               </div>

               <div className="blogs-sections">
               <Blogbox {...BlogsData3} />
                <Blogbox {...BlogsData4}/>
               </div>

               <div className="blogs-sections">
               <Blogbox {...BlogsData5} />
               <Blogbox {...BlogsData6} />
               </div>

            </div>
        </div>
    )
}
