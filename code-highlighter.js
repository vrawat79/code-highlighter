import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `code-highlighter`
 * Performs code highlighting on the body of the element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CodeHighlighter extends PolymerElement {
  
  // Define publc API properties
  static get properties() { return { 
    lang: String 
  }
 }

 connectedCallback() {
  super.connectedCallback();
  
  processData((this));

    function processData(data) {
    console.log(data);

      var formattedString;
      if (data.lang == 'java') {
        console.log('java lang styling needed!!');
        //parse inner HTML for keywords and change coloring scheme
          formattedString = "<pre><code>".concat(data.innerHTML.replace(/class/g, "<span class='keyword'>class</span>"));
                formattedString = formattedString.replace(/private/g, "<span class='keyword'>private</span>");
                formattedString = formattedString.replace(/public/g, "<span class='keyword'>public</span>");
                formattedString = formattedString.replace(/return/g, "<span class='keyword'>return</span>");
                formattedString = formattedString.replace(/for/g, "<span class='keyword'>for</span>");
                formattedString = formattedString.replace(/new/g, "<span class='keyword'>new</span>");
                formattedString = formattedString.replace(/if/g, "<span class='keyword'>if</span>");
                formattedString = formattedString.replace(/else/g, "<span class='keyword'>else</span>");
                formattedString = formattedString.replace(/import/g, "<span class='keyword'>import</span>");
                formattedString = formattedString.replace(/package/g, "<span class='keyword'>package</span>");
                formattedString = formattedString.replace(/void/g, "<span class='keyword'>void</span>");
                formattedString = formattedString.replace(/"(.*)"/g, "<span class='quotes'>$&</span>");
                formattedString = formattedString.concat("</code></pre>");

      }else{
        formattedString = "<pre>".concat(data.innerHTML).concat("</pre>");
      }
      data.innerHTML = "<style>pre,code{background-color: gainsboro}.keyword{color: red;}.quotes{color: blue;}</style>".concat(formattedString);
    //   data.innerHTML = formattedString;
      
      console.log(data.innerHTML);
      
    }
 }  
}

window.customElements.define('code-highlighter', CodeHighlighter);
