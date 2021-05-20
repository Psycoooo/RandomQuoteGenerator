import React from "react";
import "./main.css";

let defaultQuoteIndex = Math.floor(Math.random() * 5);
let defaultPanelColorIndex = Math.floor(Math.random() * 5);
let defaultBackgroundColorIndex = Math.floor(Math.random() * 5);
const colors = ["teal", "red", "pink", "green", "purple", "indigo", "lime"];
const quoteDB = [
  {
    author: "Barry Levinson",
    quote:
      "Some actors are supposed to be very difficult, but I've not found that to be the situation.",
    id: 1
  },
  {
    author: "Bob Hope",
    quote:
      "You know you're getting old when the candles cost more than the cake.",
    id: 2
  },
  {
    author: "Steve Martin",
    quote: "Comedy may be big business but it isn't pretty.",
    id: 3
  },
  {
    author: "Martin Luther King",
    quote:
      "All progress is precarious, and the solution of one problem brings us face to face with another problem.",
    id: 4
  },
  {
    author: "Bob Barr",
    quote:
      "There is no legitimate use whatsoever for marijuana. This is not medicine. This is bogus witchcraft. It has no place in medicine, no place in pain relief...",
    id: 5
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: defaultQuoteIndex,
      panelColor: colors[defaultPanelColorIndex],
      backgroundColor: colors[defaultBackgroundColorIndex]
    };
    this.handleClick = this.handleClick.bind(this);
    this.setTweet = this.setTweet.bind(this);
  }

  getRandomNumber = (currentNum) => {
    let newNum = Math.floor(Math.random() * 5);
    while (newNum === currentNum) {
      newNum = Math.floor(Math.random() * 5);
    }
    console.log(currentNum, newNum);
    return newNum;
  };

  handleClick() {
    let newQuoteIndex = this.getRandomNumber(this.state.index);
    let newPanelColorIndex = this.getRandomNumber(this.state.panelColor);
    let newBackgroundColorIndex = this.getRandomNumber(
      this.state.backgroundColor
    );

    this.setState({
      index: newQuoteIndex,
      panelColor: colors[newPanelColorIndex],
      backgroundColor: colors[newBackgroundColorIndex]
    });
  }

  setTweet() {
    document
      .getElementById("tweet-quote")
      .setAttribute(
        "href",
        "https://twitter.com/intent/tweet?text=" +
          quoteDB[this.state.index].quote +
          " -" +
          quoteDB[this.state.index].author
      );
  }

  render() {
    return (
      <div
        class="container"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <div class="row valign-wrapper">
          <div class="col s12 valign">
            <div
              class="card z-depth-6"
              style={{ backgroundColor: this.state.panelColor }}
              id="quote-box"
            >
              <div class="card-content center-align">
                <h1 id="text">"{quoteDB[this.state.index].quote}"</h1>
                <p id="author">- {quoteDB[this.state.index].author}</p>
                <button
                  className="btn "
                  onClick={this.handleClick}
                  id="new-quote"
                >
                  <i className="material-icons">autorenew</i>
                </button>
              </div>
              <div class="card-action center-align">
                <span>
                  <a
                    href="https://twitter.com/intent/tweet?text="
                    target="_blank"
                    className="twitter-share-button"
                    id="tweet-quote"
                    onClick={this.setTweet}
                  >
                    <i className="fab fa-2x fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
