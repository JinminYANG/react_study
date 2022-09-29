// Default V2 theme
import 'survey-core/defaultV2.min.css';
import {StylesManager, Model} from 'survey-core';
import {Survey} from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const Simple = () => {
    const surveyJson = {
        pages: [{
            name: "PersonalDetails",
            elements: [{
                type: "text",
                name: "FirstName",
                title: "Enter your first name:"
            }, {
                type: "text",
                name: "LastName",
                title: "Enter your last name:"
            }, {
                type: "panel",
                name: "Contacts",
                state: "collapsed",
                title: "Contacts (optional)",
                elements: [{
                    type: "text",
                    name: "Telegram",
                    title: "Telegram:"
                }, {
                    type: "text",
                    name: "GitHub",
                    title: "GitHub username:"
                }]
            }]
        }]
    };

    const survey = new Model(surveyJson);

    return (
        <Survey model={survey}/>
    );
};

export default Simple;
