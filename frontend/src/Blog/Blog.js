import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './Blog.css';


// http://localhost:4000/posts

// Supplement Components
import SinglePost from './SinglePost'
import SinglePostAcademia from './SinglePostAcademia'




export default function Blog() {

      
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // axios.get('http://localhost/damero//wp-json/wp/v2/posts')
    // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    const [Elements, setPosts] = useState([])
    const fetchPosts = () => {
        axios
        .get("http://localhost:4000/posts/medium")
        .then((res) => {
            const postResponse = JSON.parse(res.data);
            // console.log(postResponse);
            setPosts(postResponse);
        });
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const [ElementsAcademia, setPostsAcademia] = useState([])
    const fetchPostsAcademia = () => {
        axios
        .get("http://localhost:4000/posts/academia")
        .then((res) => {
            const postAcademiaResponse = res.data.exportdata;
            console.log(postAcademiaResponse);
            setPostsAcademia(postAcademiaResponse);
        });
    }
    useEffect(() => {
        fetchPostsAcademia()
    }, [])
  
    return (
        <>
            <div className="lightbox-wrapper" id="blog" data-simplebar>
                <div className="container">
                    <div className="lightbox-close">
                        <div className="close-btn" data-modal-close=""><span className="btn-line"></span></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="lightbox-content">
                                
                            <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading page-heading">
                                            <p className="section-description">Check out my latest blog posts</p>
                                            <h2 className="section-title">My Blog</h2>
                                            <div className="animated-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="blog-section single-section">
                                    <div className="row justify-content-center">
                                        <SinglePost data={ Elements } />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading page-heading">
                                            <p className="section-description">Check out my latest papers</p>
                                            <h2 className="section-title">My Academia</h2>
                                            <div className="animated-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="blog-section single-section">
                                    <div className="row justify-content-center">
                                        <SinglePostAcademia data={ ElementsAcademia } />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading page-heading">
                                            <p className="section-description">Check out my latest source code posts</p>
                                            <h2 className="section-title">My Github</h2>
                                            <div className="animated-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="blog-section single-section">
                                    <div className="row justify-content-center">
                                        <SinglePost data={ Elements } />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}