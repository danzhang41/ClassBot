class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGreet = () => {
    const message = this.createChatbotMessage(
      "Hi, my name is Classbot. My job is to assist you!"
    )
    this.addMessageToState(message)
  }

  handleMoodleLink = () => {

    const message = this.createChatbotMessage(
      "Here is a link to the Moodle Course Page",
      {
        widget: "moodleLink"
      }
    )
    this.addMessageToState(message)
  }

  handleSyllabusLink = () => {

    const message = this.createChatbotMessage(
      "Here is a link to the course syllabus",
      {
        widget: "syllabusLink"
      }
    )
    this.addMessageToState(message)
  }

  handleUnknownMessage = () => {
    const message = this.createChatbotMessage(
      "Sorry I do not know what you said, please re-enter your question",
    ) 
    this.addMessageToState(message)
  }
  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message], //we have access to previous states and we want to append our new message to it
    }));
  };
}

export default ActionProvider;