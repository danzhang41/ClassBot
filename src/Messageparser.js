import {nlp} from './Api.js';


class MessageParser{
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  

  parse(message) {
    message = message.toLowerCase()
    console.log(nlp("asf"))

    if (message.includes("hello")){
      this.actionProvider.handleGreet();
    }
    else if (message.includes("link")){
      this.actionProvider.handleMoodleLink();    
    }
    else if (message.includes("syllabus")){
      this.actionProvider.handleSyllabusLink();
    }
    else {
      this.actionProvider.handleUnknownMessage();
    }

  }
}

export default MessageParser;