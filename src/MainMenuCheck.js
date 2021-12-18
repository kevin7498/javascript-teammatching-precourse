import CrewView from "./CrewView.js";
import TeamView from "./TeamView.js"

export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if(targetId === 'crew-tab') {
            CrewView.render();
        }
    }

    static checkSecondMenu(targetId) {
        if(targetId === 'team-tab') {
            TeamView.render();
        }
    }
}