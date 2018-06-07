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
    title: "— My experience —",
    list: [{
      icon: '/img/works/eyeota.png',
      title: 'Senior Software Engineer',
      subtitle: 'Eyeota',
      link: 'http://www.eyeota.com/',
      location: 'Singapore',
      period: 'July 2015 – Present',
      description: `
<ul>
<li>Developed a high performance distributed backend system that interacts with many other systems (web application, configuration provider for our low latency backend system, reporting engine) using Clojure, Elasticsearch and Cassandra</li>
<li>Performed DevOps duty, using Grafana and Graphite for monitoring metrics, Ansible for managing deployment and MAT/VisualVM for analyzing JVM heap dumps</li>
<li>Optimized various inefficient queries that can yield up to 150x improvements in certain cases (5s to 30ms), also improved stability of JVM heap space usage through an in-depth JVM heap dump analysis</li>
<li>Led and developed the backend system for a web application that is used to perform manual validation on segment/url predictions for the Data Science team. System is written in Go and PostgreSQL</li>
<li>Developed a client to perform third party API integration</li>
<li>Created and open-sourced <a href="https://github.com/eyeota/kani" target="_blank">Kani</a>, a Clojure-based application for Cassandra backup with Unicode support</li>
<li>Developed the frontend for our web application using Ember.js</li>
</ul>
`
    }, {
      icon: '/img/works/krux.png',
      title: 'Software Engineer',
      subtitle: 'Krux Digital',
      link: 'http://www.krux.com',
      location: 'Sydney',
      period: 'September 2014 – May 2015',
      description: `
<ul>
<li>Developed both backend and frontend for the web application using Python, Django, Tastypie, Amazon Redshift, Angular.js (1.x) and CoffeeScript</li>
<li>Upgraded one of the core service using Java, Chrome Remote Debugging Interface, Puppet, and AWS stack (SQS, S3, EMR and RDS)</li>
</ul>
`
    }, {
      icon: '/img/works/lm.svg',
      iconText: 'Local Measure',
      title: 'Software Engineer',
      subtitle: 'Local Measure',
      link: 'http://github.com/ronaldsuwandi/neuralnetworks',
      location: 'Sydney',
      period: 'February 2014 – September 2014',
      description: `
<ul>
<li>Led and developed the frontend for our new product to monitor and notify users from social media posts for user-defined conditions (e.g. keywords, followers count, location, etc) using Angular.js (1.x)</li>
<li>Developed the backend for social media monitoring web application using Go and MongoDB making use of channels to aggregate posts and sending email notifications</li>
<li>Created Google Chrome Extension for the application</li>
</ul>
`
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
      description: `
<ul>
<li>Developed various Swing-based applications for various projects including Crew Rostering, Planning and Scheduling Optimization and Supply Chain Network Optimization. Applications are built using Java, Microsoft SQL Server and our Java-based in-house ORM solution</li>
<li>Work closely with the science team and business analyst to implement Business Rule Management that acts as a constraint manager that is directly used by the scheduling optimizer</li>
</ul>
`
    }]
  }, {
    title: "— Stuff I've worked on —",
    list: [{
      icon: '/img/works/logweight.svg',
      iconText: 'LogWeight',
      title: 'LogWeight',
      subtitle: 'App store link',
      link: 'https://itunes.apple.com/sg/app/logweight-for-health-app/id1271399293',
      location: 'Singapore',
      period: 'August 2017',
      description: `<p>LogWeight is the fastest way to track weight into iOS Health App with simple and 
    intuitive design. Written in React Native.</p>`
    }, {
      icon: '/img/works/nn.png',
      iconText: 'Neural Networks Library',
      title: 'Neural networks library',
      subtitle: 'Project page',
      link: 'http://github.com/ronaldsuwandi/neuralnetworks',
      location: 'Singapore',
      period: 'April 2016 – December 2016',
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
      period: 'April 2013 – Present',
      description: `<p>wearther is a web application (Node.js, Backbone, Titanium SDK for the native
    app version) that helps you decide what to wear based on the current weather. wearther's optimizer -
    MACHO (Multiobjective Ant Colony Heuristic-based Optimisation) is derived from an artificial
    intelligence algorithm (Ant Colony Optimisation) to calculate the best clothing combinations quickly
    so you can leave home feeling just right. Not too cold, and not too warm.</p>

    <p>Featured in both <a href="http://startups.fm/2013/08/30/change-your-style-everyday-with-wearther-the-one-stop-mobile-app-for-weather-forecast-and-apparel-suggestion.html" target="_blank">StartupsFM</a>
    and <a href="http://www.startupdaily.net/2013/09/new-weather-forecasting-app-that-styles-you/" target="_blank">StartupDaily</a></p>

    <p>Currently in the process of rewriting the whole application using React Native and Redux</p>
    `
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
    title: "— Education —",
    list: [{
      title: 'Docker Mastery: The Complete Toolset From a Docker Captain',
      subtitle: 'Certificate',
      link: 'https://ude.my/UC-HRZ4B4W9',
      location: 'Singapore',
      period: 'June 2018',
    }, {
      title: 'Convolutional Neural Networks',
      subtitle: 'Certificate',
      link: 'https://www.coursera.org/account/accomplishments/verify/W6YC9SXP2PRW',
      location: 'Singapore',
      period: 'December 2017',
    }, {
      title: 'Structuring Machine Learning Projects',
      subtitle: 'Certificate',
      link: 'https://www.coursera.org/account/accomplishments/verify/8NWS3ZLM6ZJZ',
      location: 'Singapore',
      period: 'November 2017',
    }, {
      title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
      subtitle: 'Certificate',
      link: 'https://www.coursera.org/account/accomplishments/verify/2KMC3Z2DGDTT',
      location: 'Singapore',
      period: 'October 2017',
    }, {
      title: 'Neural Networks and Deep Learning',
      subtitle: 'Certificate',
      link: 'https://www.coursera.org/account/accomplishments/verify/WP37PDQFNADP',
      location: 'Singapore',
      period: 'September 2017',
    }, {
      title: 'Machine Learning',
      subtitle: 'Certificate',
      link: 'https://www.coursera.org/account/accomplishments/verify/5XHU8Q8VK7PX',
      location: 'Singapore',
      period: 'March 2016',
    }, {
      title: 'Honours, Computer Science (Second Upper Class - IIA)',
      subtitle: 'University of Adelaide',
      link: 'https://www.adelaide.edu.au',
      location: 'Singapore',
      period: '2004 – 2008',
    }]
  }]
}
