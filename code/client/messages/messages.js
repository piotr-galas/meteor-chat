Template.messages.helpers({
  messages(){
  	return Messages.find({}, { sort: { 'time': -1 } })
  } 
});

Template.message.helpers({
  messageViewModel(){
  	return new MessageViewModel(this)
  }  
});
