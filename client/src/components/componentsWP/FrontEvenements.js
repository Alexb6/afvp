import React, { Component } from 'react';
import './FrontArticles.scss';

class FrontEvenements extends Component {
	constructor() {
		super();
		this.state = {
			wpimportPostsEvenement: [],
			wpimportMedia: []
		}
	}

	componentDidMount() {
		let that = this;

		let wpimportPostsEvenementRoute = "http://localhost/blogafvp/wp-json/wp/v2/posts?categories=8&per_page=2";


		fetch(wpimportPostsEvenementRoute)
			.then((res1) => { return res1.json() })
			.then((res1) => {
				res1.map((post, id) => {
					fetch("http://localhost/blogafvp/wp-json/wp/v2/media?parent=" + post.id)
						.then((res) => { return res.json() })
						.then((response) => {
							that.state.wpimportMedia.push(response[0]);
							that.setState({
								wpimportPostsEvenement: res1,
							});
						})
				})

			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div>
				<div>
					<h2 className='dernieresPosts'>Notre dernier évènement...</h2>
					<hr></hr>
				</div>
				{this.state.wpimportPostsEvenement.map((post, index) => {
					return (
						<div className='container' key={index}>
							<div className='row'>
								<div className='mb-4'>
									<h4 className='titrePosts mb-3'> {post.title.rendered} </h4>
									{this.state.wpimportMedia.map((media) => {
										if (media.post === post.id)
											return (<img className='col-md-4 imgPosts' key={media.id} src={media.media_details.sizes.medium.source_url}></img>)
									})}
									<p className='resumePosts col-md-12'>
										{post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("[&hellip;]", "...")}
										<a className='readMoreInline' href={post.link} target="_blank">Read more</a>
									</p>
								</div>
							</div>
						</div>
					);
				})}<br />
			</div>
		)
	}
}

export default FrontEvenements;