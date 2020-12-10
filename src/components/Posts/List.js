import React, { useEffect } from "react";
import Single from "./Single";
import { connect } from "react-redux";
import { getPosts } from "../../redux/posts/actions";


function List({ getPosts, posts }) {

	useEffect(() => {
		getPosts();
	}, []);

	return <div>{posts && posts.map((post) => <Single post={post} />)}</div>;
}

const mapStateToProps = (state) => {
	const posts = state.post.posts || {};
	return { posts };
};

const mapDispatchToProps = {
	getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
