import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/post';
import Alert from '../layout/Alert';

const Post = ({ getPost, post: { post, loading }, match }) => {
    
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);

    return ( loading || post === null ? <Spinner /> : <Fragment>
            <section className="container">
            <Alert />
            <Link to='/posts' className='btn'>Back To Posts</Link>
            <PostItem post={post} showActions={false}/>
            <CommentForm postID={post._id} />
            <div className="comments">
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postID={post._id} />
                ))}
            </div>
            </section>
        </Fragment>
    )
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
