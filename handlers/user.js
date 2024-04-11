

 const getHome =(req,res)=>{
    res.render("home")

}
 const getAbout =(req,res)=>{
    res.render("about")

}
 const getContact =(req,res)=>{
    res.render("contact")

}

module.exports={getHome, getAbout, getContact}