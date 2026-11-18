const yaml = require('js-yaml');
const crypto = require('crypto');
const fs = require('fs');

// split multiline: https://stackoverflow.com/a/17975102
function paragraphSplit(plaintext) {
  var i, output = '',
      lines = plaintext.split(/\r\n|\r|\n/g);
  for (i = 0; i < lines.length; i++) {
    if (lines[i]) {
      output += '<p>' + lines[i] + '</p>';
    }
  }
  return output;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('paragraphSplit', paragraphSplit);
  // cache-busting: short hash of the file's contents, e.g. /css/main.css?v=3f2a91bc
  eleventyConfig.addFilter('hash', (path) =>
    crypto.createHash('md5').update(fs.readFileSync('src' + path)).digest('hex').slice(0, 8));
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({'src/lib/css': 'css'});
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/icons.svg');
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addPassthroughCopy('src/*.{ico,png,json,xml,pdf}');

  return {
    dir: {
      input: 'src',
      output: 'docs'
    }
  };
};
