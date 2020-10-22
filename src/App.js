import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Links from './components/links/Links';
import { getFromStorage, saveToStorage } from './services/storage';
import { linkBuilder } from './services/linkBuilder';
import { options } from './constants/options';
import 'react-dropdown/style.css';
import './App.css';

const defaultOptions = options[0];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      isAdd: false,
      isAddType: '',
      isAddLink: '',
      isToggle: false
    }

    this.handleIsAddType = this.handleIsAddType.bind(this);
    this.handleIsAddLink = this.handleIsAddLink.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleIsToggle = this.handleIsToggle.bind(this);
  }

  componentDidMount() {
    const array = getFromStorage();
    this.setState({
      ...this.state,
      links: array
    });
  }

  handleIsAddType(platform) {
    this.setState({
      ...this.state, 
      isAddType: platform.value
    })
  }

  handleIsAddLink(event) {
    this.setState({
      ...this.state,
      isAddLink: linkBuilder(event.currentTarget.value.toLowerCase())
    })
  }

  handleAdd() {
    if (this.state.isAdd) {
      this.setState({
        ...this.state,
        isAdd: false
      })
    } else {
      this.setState({
        ...this.state,
        isAdd: true
      })
    }
  }

  async handleSave() {
    let object = {};

    if (this.state.isAddType === '') {
      object = await saveToStorage(defaultOptions, this.state.isAddLink);
    } else {
      object = await saveToStorage(this.state.isAddType, this.state.isAddLink);
    }

    if (object !== null) {
      this.setState({
        ...this.state,
        links: object
      })
      console.log(this.state.links);
    }
    this.setState({
      ...this.state,
      isAdd: false
    })
  }

  handleClear() {
    localStorage.removeItem('links');
    this.setState({
      ...this.state,
      links: []
    })
  }

  handleIsToggle() {
    if (this.state.isToggle) {
      this.setState({
        ...this.state,
        isToggle: false
      })
    } else {
      this.setState({
        ...this.state,
        isToggle: true
      })
    }
  }

  render() {
    return (
      <div className="container p-4">
        <div className="d-flex flex-column justify-content-center">
          <span className="d-flex flex-row justify-content-center heading">Remember</span>
          <span className="d-flex flex-row justify-content-center subheading mb-4">Add important links using this extension</span>
          <div className="d-flex flex-row justify-content-center">
            <button className="btn btn-outline-primary mr-2 rounded-0" onClick={this.handleAdd}>Add</button>
            <button className="btn btn-outline-danger rounded-0" onClick={this.handleClear}>Clear</button>
          </div>
        </div>
        {
          this.state.isAdd ? (
            <div className="form-group justify-content-between d-flex flex-row py-4">
              <Dropdown className="mr-4" placeholder="Platform" value={defaultOptions} onChange={value => this.handleIsAddType(value)} options={options}/>
              <input onChange={event => this.handleIsAddLink(event)} className="form-control rounded-0 mr-4" placeholder="Link"></input>
              <button onClick={this.handleSave} className="btn btn-outline-primary rounded-0">Save</button>
            </div>
          ) : null
        }
        {
          this.state.links !== null && this.state.links.length > 0 ? (
            console.log(this.state.links[0]),
            this.state.links.map((link, index) => {
              return <Links key={index} type={link.type} link={link.link} />
            })
          ) : null
        } 
      </div>
    );
  }
}

export default App;