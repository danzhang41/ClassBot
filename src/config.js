import { createChatBotMessage } from 'react-chatbot-kit';
import MoodleLink from "./widgets/MoodleLink";
import SyllabusLink from "./widgets/SyllabusLink";

const config = {
  initialMessages: [createChatBotMessage(`What can I help you with today?`)],
  widgets: [
    {
      widgetName: "moodleLink",
      widgetFunc: (props) => <MoodleLink />
    },
    {
      widgetName: "syllabusLink",
      widgetFunc: (props) => <SyllabusLink/>
    }
    
  ],

};

export default config;