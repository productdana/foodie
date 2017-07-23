exports.homePage = (req, res) => {
  // console.log('name:', req.name)
  res.render('index'); //index.pug is the name of a file from views folder
}

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'}) // not calling it addStore because he wants to use same template whether we're adding or editing a store
}

exports.createStore = (req, res) => {
  res.json(req.body)
}