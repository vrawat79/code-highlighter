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
    // alert(data.innerHTML);
    // var trimmedData = (data.innerHTML).trim();
    var trimmedData = (data.innerHTML);

    // alert(trimmedData);

      var formattedString;
      if (data.lang == 'java') {
        console.log('java lang styling needed!!');
        //parse inner HTML for keywords and change coloring scheme
          formattedString = "<pre class='vrPre'><code id='vrContent'>".concat(trimmedData.replace(/class/g, "<span class='keyword'>class</span>"));
          formattedString=formattedString.trim();
                formattedString = formattedString.replace(/private/g, "<span class='keyword'>private</span>");
                // alert(formattedString);
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
        formattedString = "<pre>".concat(trimmedData).concat("</pre>");
      }
      data.innerHTML = "<style>pre.vrPre{background-color: gainsboro;overflow-x: auto;}.keyword{color: red;}.quotes{color: blue;}@media (max-width: 500px){#vrContent{font-size:11px;}}@media (max-width: 400px){#vrContent{font-size:10px;}}</style>".concat(formattedString);
    //   data.innerHTML = formattedString;
      
      console.log(data.innerHTML);
      // alert(data.innerHTML);
    }
 }  
}

window.customElements.define('code-highlighter', CodeHighlighter);
