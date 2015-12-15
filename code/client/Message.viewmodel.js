MessageViewModel = class MessageViewModel{
	constructor(message){
		this.time =  message.time;
		this.message = message.message;
		this.username = message.username;
		this.owner = message.owner;
	}

	timeFormat(){
		return moment(this.time).format("HH:mm:ss");
	}

	isOwner(){
  		return Meteor.userId() === this.owner;
	}
} 
