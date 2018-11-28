// require npm package
var giphy = require('giphy-api')('iMAEM64TcfGuOPAjoOjxcCD7uh4lu1K5');




module.exports = {

    // accass giphy  for back end server

  getGihpy: function (req, res) {
    // console.log(req, 1)
    // console.log(res, 2)
    const gihpyWord = req.body.term
    console.log(gihpyWord)


    giphy.search(gihpyWord)
      .then(giphy => {
        // console.log(res)
        res.json(giphy) 
      })
      .catch((err) => {
        console.log(err)
        res.status(422).json(err)
      });







  }



};
