import {html, css, LitElement} from 'lit';

export class CustomFooter extends LitElement {
  static styles = css`
    footer {
        font-family: sans-serif;
        background-color: #393E46;
        color: white;
        font-size: 16px;
        padding: .5em 1em;
    }
    p { 
        text-align: center;
        margin: 0;
        line-height: 1.5;
    }
    a {
        font-weight: bolder;
        text-decoration: none;
        color: #FAFAFA;
    }

    @media screen and (min-width: 750px){
        footer {
            font-size: 18px;
        }
    }
    `;

  static properties = {
    challenge_from: {type: String},
    webpage: {type: String},
    coded_by: {type: String},
    url: {type: String},
  };

  constructor() {
    super();
    
  }

  render() {
    return html`<footer>
      <p>
        Challenge by <a href="${this.webpage}" target="_blank">${this.challenge_from}</a>.<br>
        Coded by <a href="${this.url}" target="_blank" >${this.coded_by}</a>.
      </p>
  </footer>`;
  }
}
