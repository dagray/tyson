// Implement URL routing to retreive objects
var TysonRouter = Backbone.Router.extend({
 routes: {
   "^$":"index",
   ":type": "index",
   "/page/:id": "index",
 },
 index: function (type,id) {
   Session.set('type',type)
   console.log(id);

 },
 setLocation: function(type) {
   this.navigate(type, true);
 }

});

Router = new TysonRouter;
Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});