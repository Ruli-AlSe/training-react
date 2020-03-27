import React from "react";

import Sidebar from "./Sidebar";

class Form extends React.Component {
  nameRef = React.createRef();
  surnameRef = React.createRef();
  bioRef = React.createRef();
  maleRef = React.createRef();
  femaleRef = React.createRef();
  otherRef = React.createRef();

  state = {
    user: {}
  }

  getForm = (event) => {
    event.preventDefault();
    var genre = 'other';

    if(this.maleRef.current.checked) {
      genre = this.maleRef.current.value;
    } else if(this.femaleRef.current.checked) {
      genre = this.femaleRef.current.value
    }

    var user = {
      name: this.nameRef.current.value,
      surname: this.surnameRef.current.value,
      bio: this.bioRef.current.value,
      genre: genre
    };

    this.setState({
      user: user
    });
  }

  render() {
    if (this.state.user.name) {
      var user = this.state.user
    }

    return (
      <div id="form">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Form</h1>
            {this.state.user.name &&
              <div id="user-data">
                <p>Name: <strong>{ user.name }</strong></p>
                <p>Surame: <strong>{ user.surname }</strong></p>
                <p>Biography: <strong>{ user.bio }</strong></p>
                <p>Genre: <strong>{ user.genre }</strong></p>
              </div>
            }
            <form className="mid-form" onSubmit={ this.getForm } onChange={ this.getForm } >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" ref={this.nameRef} />
              </div>

              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" ref={this.surnameRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biography</label>
                <textarea name="bio" ref={this.bioRef} ></textarea>
              </div>

              <div className="form-group radibuttons">
                <input type="radio" name="genre" value="male" ref={this.maleRef} /> Male
                <input type="radio" name="genre" value="female" ref={this.femaleRef} /> Female
                <input type="radio" name="genre" value="other" ref={this.otherRef} /> Other
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Send" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Form;
