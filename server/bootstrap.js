/* Some initial Data,
 * 
 */
 

Content = new Meteor.Collection('content')


Meteor.startup(function () {
    
    // if the database is empty on server start, create some sample data.
    if (Content.find().count() === 0) {
        Content.insert({type: 'text', text: 'some text', title:'title required'});
        Content.insert({type: 'image', url: 'http://www.pbs.org/wgbh/nova/assets/img/conversation-with-neil-tyson/image-01-large.jpg'});
        Content.insert({type: 'tweet', text: 'a tweet'});
        Content.insert({type: 'tweet', text: 'a tweet'});
        Content.insert({type: 'tweet', text: 'a tweet'});
        Content.insert({type: 'tweet', text: 'a tweet'});
        Content.insert({type: 'tweet', text: 'a tweet'});
    }
});