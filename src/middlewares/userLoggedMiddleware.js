const db = require("../database/models")


async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

   let emailInCookie = req.cookies.userEmail;
   
   if(emailInCookie){
       let userFromCookie = await db.Usuarios.findOne({where:{ email: emailInCookie}})
       if(userFromCookie){
          req.session.userLogged = userFromCookie
       }

   }

    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }
  
    next()
}
    
    
module.exports = userLoggedMiddleware

