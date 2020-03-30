import React from "react";
import axios from "axios";

class Articles extends React.Component {
  state = {
    articles: {},
    status: null,
    message: ""
  };

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get("http://localhost:5000/api/articles/get-articles")
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

      var listArticles = this.state.articles.map(article => {
        return (
          <article className="article-item" id="article-template">
            <div className="image-wrap">
              <img
                src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                alt="Paisaje"
              />
            </div>

            <h2>{ article.title }</h2>
            <span className="date">{ article.date }</span>
            <a href="#">Leer más</a>

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
