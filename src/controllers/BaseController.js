
class BaseController {
    makeMsgError(error) {
        if (error === undefined) {
            return '<ul><li>Erro desconhecido</li></ul>';
        }

        let arrErrors = error.split('Validation error: ');
        let returnMsg = "<ul>";
        arrErrors.forEach(error => {
            if (error !== "") {
                returnMsg += "<li>"+ (error.split('\n'))[0] +"</li>";
            }
        });
        returnMsg += "</ul>";
        return returnMsg;
    }

    getUserLogin(req) {
        let user = {};
        if (req.isAuthenticated()) {
            user = req.session.passport.user;
        }

        return user;
    }
}

module.exports = new BaseController();