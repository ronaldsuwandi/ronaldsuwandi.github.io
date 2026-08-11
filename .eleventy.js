const Handlebars = require('handlebars');
const yaml = require('js-yaml');

// split multiline: https://stackoverflow.com/a/17975102
Handlebars.registerHelper('paragraphSplit', function(plaintext) {
  var i, output = '',
      lines = plaintext.split(/\r\n|\r|\n/g);
  for (i = 0; i < lines.length; i++) {
    if (lines[i]) {
      output += '<p>' + lines[i] + '</p>';
    }
  }
  return new Handlebars.SafeString(output);
});

module.exports = function(eleventyConfig) {
  eleventyConfig.addExtension('hbs', {
    compile: (inputContent) => {
      const template = Handlebars.compile(inputContent);
      return (data) => template(data);
    }
  });
  eleventyConfig.addTemplateFormats('hbs');
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({'src/lib/css': 'css'});
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/icons.svg');
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addPassthroughCopy('src/*.{ico,png,json,xml}');

  return {
    dir: {
      input: 'src',
      output: 'docs'
    }
  };
};
