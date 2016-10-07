export default class TemplateString{
  constructor(){
    // Template string is useful for string interpolation of a JavaScript variable, function, constant.
    let user = {
      'name': 'test'
    };
    let action = 'check';

    // template strings bring simple string interpolation to JavaScript.
    // That is, they’re a nice-looking, convenient way to plug JavaScript values into a string.
    console.log(`User ${user.name} is not authorized to do ${action}.`)

    // So far, this is just a slightly nicer syntax for the + operator

  }
}
