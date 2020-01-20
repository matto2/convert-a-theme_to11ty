module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("assets")

    eleventyConfig.addPassthroughCopy("apple-touch-icon.png")


    return {
      passthroughFileCopy: true,  
      dir: {
        input: "src",
        output: "_site",
        include: "includes",
    }
    }

  }

// newFunction();
//
// function newFunction() {
 //   let today = new Date().toISOString().substr(0, 10);
  //  document.querySelector("#today").value = today;
   // document.querySelector("#today2").valueAsDate = new Date();
// }
