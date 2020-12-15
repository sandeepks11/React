import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './Posts';
// import Pagination from './Pagination';
import $ from 'jquery'; 


export class Datatable extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 800
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('http://universities.hipolabs.com/search?country=India');
      this.setState({ posts: results.data });
      this.setState({ loading: false });

      $(document).ready(function () {
        $('#example').DataTable();
    });

    };

    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container"><br></br><br></br>
        <h3 id="uni">University Details</h3>
        <Posts posts={currentPosts} loading={loading} />
        {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
      </div>
    )
  }
}

export default Datatable

