import {useCallback} from 'react';

// Default V2 theme
import 'survey-core/defaultV2.min.css';
import {StylesManager, Model} from 'survey-core';
import {Survey} from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const SURVEY_ID = 1;

const saveSurveyResults = (url, json) => {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
        // Handle "load"
        console.log('Load');
    });
    request.addEventListener('error', () => {
        // Handle "error"
        console.error('error');
    });
    request.send(JSON.stringify(json));
};

const Name = () => {
    // Model 생성
    const surveyJson = {
        elements: [{
            name: "FirstName",
            title: "Enter your first name:",
            type: "text"
        }, {
            name: "LastName",
            title: "Enter your last name:",
            type: "text"
        }]
    };

    // 설문조사 렌더링
    const survey = new Model(surveyJson);

    const surveyComplete = useCallback((sender) => {
        saveSurveyResults(
            "https://your-web-service.com/" + SURVEY_ID,
            sender.data
        )
    }, []);

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);

    survey.onComplete.add(alertResults);

    return (
        <Survey model={survey}/>
    );
}

export default Name;
