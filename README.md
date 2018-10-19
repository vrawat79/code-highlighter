[![npm version](https://badge.fury.io/js/polymer-code-highlighter.svg)](https://badge.fury.io/js/polymer-code-highlighter)  [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/polymer-code-highlighter)


# \<code-highlighter\>

Performs code highlighting on the body of the element

## Pre-requisite

First, make sure you have the npm (packaged with [Node.js](https://nodejs.org)) installed. 

## Install the WebComponent

Run `sudo npm install --save polymer-code-highlighter` to install the Code-Highlighter webcomponent.

## Using in a HTML file
In the HTML file, please do following:
1. Add the script tag to get the code-highlighter.js.
2. Add the <code-highlighter lang="java"> tag to highlight the sample code. 

```
<!-- #1. Get the code-highlighter.js -->
<script type="module" src="node_modules/polymer-code-highlighter/code-highlighter.js"></script>
   
    <body>
    <div>
      <h3>Basic code-highlighter demo</h3>      
      <!-- #2. Add the tag -->
          <code-highlighter lang="java">
            class Person {
              private firstName = "Vikram";
              private lastName = "Rawat";

              public String getFirstName(){
                return firstName;    
              }

              public String getLastName(){
                return lastName;    
              }
            } 
          </code-highlighter>      
    </div>
  </body>
    
```    

## Using in a Custom Polymer Element
In the custom element js file, please do following:
1. Import the code-highlighter.js
2. Add the <code-highlighter lang="java"> tag to highlight the sample code.

```
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

<!-- #1. Get the code-highlighter.js -->
import '../node_modules/polymer-code-highlighter/code-highlighter.js'

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">       
        <!-- #2. Add the tag -->
        <code-highlighter lang="java">
            private void getValue(){
                 String name = "Vikram";
           }
        </code-highlighter>

      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);


```

