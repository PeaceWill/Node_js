class NewsCotroller {

    /** 
     * GET /news  
    */ 
    index(req, res) {
        res.render('news')
    }

    /** 
     * GET /news/show
    */
   show(req, res) {
       res.send('Show Page');
   }
}

module.exports = new NewsCotroller;