// Obtain references to the mongo collection(s)
Content = new Meteor.Collection('content')

Template.pageBody.contents = function () {
  var selector = {};
  if(Session.get('type') != '' && Session.get('type') != undefined) {
    selector = { 'type':  Session.get('type')};
  }
  if(Session.get('id') != '' && Session.get('id') != undefined) {
    selector = {'id':Session.get('id')}
  }
  return Content.find(selector);
}
Template.pageBody.render = function () {
/* General data structure is a dictionary which requires 'type' and a series of attributes
 * Content.insert({type: 'tweet', text: 'not displayed?'})
 * for each template type, this will render the template.
 */
   
if (this.type === 'pageBody') { 
  throw new Error('do not create content of type pageBody it breaks stuff.')
}

return Template[this.type](this);}




