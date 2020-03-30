import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
//import 'moment/locale/es';

import defImg from "../assets/images/images.png";

class Articles extends React.Component {
  url = Global.url;

  state = {
    articles: {},
    status: null,
    message: ""
  };

  componentWillMount() {
    var home = this.props.home;
    if (home === 'true') {
      var complementUrl = 'articles/get-articles/last-five';
    } else {
      var complementUrl = 'articles/get-articles';
    }
    this.getArticles(complementUrl);
  }

  getArticles = (complementUrl) => {
    axios
      .get(this.url + complementUrl)
      .then(response => {
        this.setState({
          articles: response.data.articles,
          status: response.data.status,
          message: response.data.message
        });
      });
  };

  render() {
    if (this.state.status === "success") {

      var listArticles = this.state.articles.map((article, i) => {
        return (
          <article className="article-item" id="article-template" key={i}>
            <div className="image-wrap">
              {article.image !== null ? (
                  <img
                    src={ this.url + 'articles/image/' + article.image }
                    alt={ article.title }
                  />
                ) : (
                  <img
                    src={ defImg }
                    alt="landscape"
                  />
                )
              }
            </div>

            <h2>{ article.title }</h2>
            <span className="date">
              <Moment fromNow >{ article.date }</Moment>
            </span>
            <Link to={ '/blog/article/' + article._id } >Leer más</Link>

            <div className="clearfix"></div>
          </article>
        );
      });

      return (
        <div id="articles">
          { listArticles }
        </div>
      );
    } else if (this.state.status === "error") {
      return (
        <div id="articles">
          <h2 id="content">{this.state.message}</h2>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 id="content">Searching articles...</h2>
        </div>
      );
    }
  }
}

export default Articles;
