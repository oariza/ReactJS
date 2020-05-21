import React, { Component } from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";

//Custom Components
import NewNote from './components/NewNote'

// CSS
import "./Notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this._renderNotes = this._renderNotes.bind(this);
    this.handlerNewNote = this.handlerNewNote.bind(this);
  }

  _renderNotes() {
    const { notes } = this.state;
    return notes.map(({ title, content }) => {
      return <Note title={title} content={content} />;
    });
  }

  handlerNewNote(note) {
    const { notes } = this.state
    this.setState({
      notes: [...notes, note]
    })
  }

  render() {
    return (
      <div className="Container">
        <div>
          <Header
            title={"Blog de notas"}
            description={
              "Aqui aprenderemos a manejar el estado interno y subir el estado del hijo al padre"
            }
          />
          <div className="Notes-container">
            <ul>{this._renderNotes()}</ul>
            <NewNote 
              handlerNewNote={this.handlerNewNote}
            />
          </div>
        </div>
      </div>
    );
  }
}