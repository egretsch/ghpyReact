var giphy = require('giphy-api')('iMAEM64TcfGuOPAjoOjxcCD7uh4lu1K5');



// Login
module.exports = {


  getGihpy: function (req, res) {
    // console.log(req, 1)
    // console.log(res, 2)
    const gihpyWord = req.body.term
    console.log(gihpyWord)


    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gihpyWord + "&api_key=iMAEM64TcfGuOPAjoOjxcCD7uh4lu1K5&limit=10";

    // ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function (req, res) {
    //   console.log(res)
    //   // return res.json() 
    // })
    //   .catch((err) => {
    //     console.log(err)
    //     res.status(422).json(err)
    //   });



    // request.open({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function (req, res) {
    //   console.log(res)
    //   // return res.json() 
    // })
    //   .catch((err) => {
    //     console.log(err)
    //     res.status(422).json(err)
    //   });



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
