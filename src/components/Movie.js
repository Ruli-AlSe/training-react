import React from "react";

class Movie extends React.Component {
  setStarred = () => {
    this.props.starred(this.props.movie);
  };

  render() {
    const { title, image } = this.props.movie;

    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={image} alt={title} />
        </div>

        <h2>{title}</h2>
        <p>
          <button onClick={ this.setStarred }>
            Mark as starred
          </button>
        </p>
        <span className="date">Hace 5 minutos</span>
        <a href="#">See more...</a>

        <div className="clearfix"></div>
      </article>
    );
  }
}

export default Movie;
