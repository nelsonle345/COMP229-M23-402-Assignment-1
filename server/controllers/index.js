module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };
  
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me' });
  };
  
  module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Us' });
  };
  
  module.exports.displayServicePage = (req, res, next) => {
    res.render('service', { title: 'Services' });
  };
  
  module.exports.displayProjectPage = (req, res, next) => {
    res.render('project', { title: 'Projects' });
  };
  