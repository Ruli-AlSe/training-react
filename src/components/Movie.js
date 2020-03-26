import React from "react";

class Movie extends React.Component {
  render() {
    const { title, image } = this.props.movie;
    return (
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src={image} alt={title} />
        </div>

        <h2>{title}</h2>
        <span class="date">Hace 5 minutos</span>
        <a href="#">See more...</a>

        <div class="clearfix"></div>
      </article>
    );
  }
}

export default Movie;
