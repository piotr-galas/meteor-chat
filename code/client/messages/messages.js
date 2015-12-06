function messages() {
  return Messages.find({}, { sort: { 'time': -1 } });
}

function time() {
  return moment(this.time).format("HH:mm:ss");
}

function isOwner() {
  return Meteor.userId() === this.owner;
}

Template.messages.helpers({
  messages: messages
});

Template.message.helpers({
  timeFormat: time,
  isOwner: isOwner,

});
