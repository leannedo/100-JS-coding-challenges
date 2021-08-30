const htmlString1 = 
`<article id="animals">
  
  <h1 class="main-heading">Nature's Wonders</h1>
  <p>In this article we discuss animals.</p>
  
  <section id="birds">
    <h2 class="favourite">Birds</h2>
    <p>
    Forest is a wonderful place to see birds.
    </p>
  </section>
  
  <section id="butterflies">
    <h2>Butterflies</h2>
    <p>
      Butterflies possess some of the most striking colour displays found in nature.
    </p>
  </section> 
  
</article>`

const getTagContent = (htmlString, tag) => {
    const regex = new RegExp(`<${tag}(.*?)>(.*?)<\/${tag}>`, "g");
    const stringified = JSON.stringify(htmlString);

    if (!regex.test(stringified)) {
        return [];
    }

    const matchStr = stringified.match(regex);
    return matchStr.map(str => 
        str.replace(/(<([^>]+)>)/ig, '')
           .replace(/\\n/ig, '')
           .trim()
    );
}


console.log(getTagContent(htmlString1, 'h2'));