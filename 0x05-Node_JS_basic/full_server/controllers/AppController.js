/**
 * Contains the miscellaneous route handlers.
 * @author Amodoi Peter <https://github.com/amodoipeter>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
