import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <aside id="sidebar">
        {this.props.blog === "true" &&
          <div id="nav-blog" className="sidebar-item">
            <h3>You can do this...</h3>
            <a href="#" className="btn btn-success">
              New article
            </a>
          </div>
        }

        <div id="search" className="sidebar-item">
          <h3>Browser</h3>
          <p>Find the article you are looking for</p>
          <form>
            <input type="text" name="search" />
            <input type="submit" name="submit" value="Search" className="btn" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
