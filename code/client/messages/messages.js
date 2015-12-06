Template.messages.helpers({
  messages: function(){
  	return Messages.find({}, { sort: { 'time': -1 } });
  }
});

Template.message.helpers({
  messageViewModel: function(){
  	return new MessageViewModel(this);
  }	
});
