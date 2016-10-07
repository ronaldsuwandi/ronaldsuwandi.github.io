module.exports = {
  social: [{
    className: 'icon-linkedin',
    link: 'https://linkedin.com/in/ronaldsuwandi'
  }, {
    className: 'icon-twitter',
    link: 'https://twitter.com/suwandironald'
  }, {
    className: 'icon-github-circled',
    link: 'https://github.com/ronaldsuwandi'
  }, {
    className: 'icon-instagram',
    link: 'https://instagram.com/gantengx'
  }, {
    className: 'icon-facebook',
    link: 'https://facebook.com/ronald.suwandi'
  }, {
    className: 'icon-mail-alt',
    link: 'http://www.google.com/recaptcha/mailhide/d?k=01ecAECCw0UTFSy4JfUdnC-A==&c=ZUL6_TMUkGtFIwaQqYWK7VWUZhsmqXYP2rAuJ6O_IY8='
  }],
  works: [{
    title: "— Stuff I've worked on —",
    list: [{
      icon: '/img/works/nn.png',
      iconText: 'Neural Networks Library',
      title: 'Neural networks library',
      subtitle: 'Project page',
      link: 'http://github.com/ronaldsuwandi/neuralnetworks',
      location: 'Singapore',
      period: 'April 2016 – Present',
      description: `<p>Clojure-based neural networks library that is built on top of
    <a href="https://github.com/mikera/core.matrix" target="_blank">core.matrix</a> package. I decided
    to create this library after completing <a href="https://www.coursera.org/learn/machine-learning/" target="_blank">
    Andrew Ng's Machine Learning course</a>. The library is very modular where you can easily swap
    optimizer, activation/sigmoid functions, stopping conditions and cost function.</p>`
    }, {
      icon: '/img/works/wearther.svg',
      iconText: 'wearther',
      title: 'wearther',
      subtitle: 'http://wearther.cc',
      location: 'Sydney',
      link: 'http://www.wearther.com',
      period: 'April 2013 – August 2014',
      description: `<p>wearther is a web application (Node.js, Backbone, Titanium SDK for the native
    app version) that helps you decide what to wear based on the current weather. wearther's optimizer -
    MACHO (Multiobjective Ant Colony Heuristic-based Optimisation) is derived from an artificial
    intelligence algorithm (Ant Colony Optimisation) to calculate the best clothing combinations quickly
    so you can leave home feeling just right. Not too cold, and not too warm.</p>

    <p>Featured in both <a href="http://startups.fm/2013/08/30/change-your-style-everyday-with-wearther-the-one-stop-mobile-app-for-weather-forecast-and-apparel-suggestion.html" target="_blank">StartupsFM</a>
    and <a href="http://www.startupdaily.net/2013/09/new-weather-forecasting-app-that-styles-you/" target="_blank">StartupDaily</a></p>`
    }, {
      icon: '/img/works/hashtag.svg',
      iconText: '#hashtagoverload',
      title: '#hashtagoverload',
      subtitle: 'http://hashtagoverload.me',
      link: 'http://hashtagoverload.me',
      location: 'Sydney',
      period: 'July 2013 – December 2013',
      description: `<p>A simple mobile-first webapp that translate the sentence into a hashtag format
and also gives you some suggestion keywords. Powered by jQuery and Big Huge Thesaurus.</p>`
    }]
  }, {
    title: "— My experience —",
    list: [{
      icon: '/img/works/eyeota.png',
      title: 'Software Developer',
      subtitle: 'Eyeota',
      link: 'http://www.eyeota.com/',
      location: 'Singapore',
      period: 'July 2015 – Present',
      description: `<p>My main role is to develop the new backend for our web application.
Previously written in Java, the new backend is a complete rewrite using Clojure with
Elasticsearch and Cassandra for the database.</p>

<p>The new backend offers much a higher performance, includes various complex business
rules and able to communicate with our other system efficiently. I'm also
responsible for refactoring our backend code to use Stuart Sierra's Component
framework (dependency injection). By doing this, we are able to split the backend
into multiple components and makes it much easier to write tests and mock components.</p>

<p>Our team is also in charge for the operational side of the system, I learned
to use Ansible for deployment and metrics collection using Grafana and Graphite.</p>

<p>Other things that I've done:</p>
<ul>
<li>Implemented queue system to avoid bombarding our reporting system with new
report requests</li>
<li>Work on our front end webapp using Ember.js</li>
<li>Created and open sourced <a href="https://github.com/eyeota/kani" target="_blank">kani</a>,
a Clojure-based application for Cassandra backup that works with Unicode</li>
<li>Worked with marketing team to develop our main mobile-first responsive website
using a CMS system, Bootstrap and jQuery</li>`
    }, {
      icon: '/img/works/krux.png',
      title: 'Software Engineer',
      subtitle: 'Krux Digital',
      link: 'http://www.krux.com',
      location: 'Sydney',
      period: 'September 2014 – May 2015',
      description: `<p>Day to day, I worked with Python, Django, Tastypie, AngularJS, CoffeeScript,
Sass, Node, Java, Chrome Remote Debugging Interface, a bit of Puppet and some AWS stuff (SQS, S3,
EMR, Redshift, RDS)</p>

<p>I'm also involved with the upgrade of one of our core service that uses Java, Python, Google
Chrome/Chrome Debugging Interface, and AWS stack (SQS, RDS, Redshift and S3). Google Chrome is used
to create HAR files and and then we inject custom JavaScript tag to add additional informations.
The processed file is then further processed by Java/Python service using AWS stack. The result is
then stored in RDS, Redshift and S3.</p>`
    }, {
      icon: '/img/works/lm.svg',
      iconText: 'Local Measure',
      title: 'Software Engineer',
      subtitle: 'Local Measure',
      link: 'http://github.com/ronaldsuwandi/neuralnetworks',
      location: 'Sydney',
      period: 'February 2014 – September 2014',
      description: `<p>I joined to develop their new product using Go and MongoDB that monitors
various social media posts for user-defined conditions (e.g. specific keywords, a minimum number of
followers, location, etc). If there are any posts that match the defined conditions, we will aggregate
the posts and send an email notification at a specified time and frequency. This is achieved by
using multiple channels in Go. For this project, I was completely in charge in terms of the frontend
development, I used Angular.js with heavy use of directives to avoid code repetition. I also created
the Google Chrome Extension for this product.</p>`
    }, {
      title: 'Software Engineer (Contract)',
      subtitle: 'Murray Hurps Software Pty Ltd',
      location: 'Sydney',
      period: 'July 2013 – February 2014',
      description: `<p>Worked as a contractor for various projects in Sydney's largest coworking
space (Fishburners). Projects includes: <a href="http://leaptouch.com" target="_blank">Leap Touch</a>
and <a href="http://feedbackfast.com" target="_blank">Feedback Fast</a>. I worked with JavaScript,
AngularJS, Firebase, and Phonegap</p>`
    }, {
      icon: '/img/works/solveit.jpg',
      iconText: 'SolveIT Software (now Schneider Electric)',
      title: 'Senior Software Engineer',
      subtitle: 'SolveIT Software (now Schneider Electric)',
      link: 'http://www2.schneider-electric.com/sites/corporate/en/products-services/former-brands/solveit/solveitsoftware.page',
      location: 'Adelaide',
      period: 'February 2009 – July 2013',
      description: `<p>I worked with various projects including Crew Rostering, Planning and Scheduling
Optimization and Supply Chain Network Optimization. I am responsible for developing various reusable
components and API using Java, Swing, MS SQL Server and our Java-based in-house ORM solution.</p>

<p>I also work closely with the science team and business analyst to implement Business Rule Management
that acts as a constraint manager that is directly used by the optimizer.</p>`
    }, {
      icon: '/img/works/pacnet.png',
      iconText: 'Pacnet',
      title: 'Software Engineer',
      subtitle: 'Pacnet',
      link: 'http://sg.pacnet.com/',
      location: 'Singapore',
      period: 'October 2010 – October 2011',
      description: `<p>I was part of a Regional Project Implementation team which was responsible for
analyzing and providing feedback for various internal project developed by our vendors. I was later
transferred to the internal development team to enhance existing applications using Java, JSP and
PL/SQL.</p>`
    }]
  }]
}
