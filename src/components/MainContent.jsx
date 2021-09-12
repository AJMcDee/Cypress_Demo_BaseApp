import {useState} from "react";
import {MadLibsResult} from "./MadLibsResult";
import {MadLibsForm} from "./MadLibsForm";

export function MainContent() {
    const [answers, setAnswers] = useState({answersEntered: false})

    return(
        <div>
        {(answers.answersEntered) ?
            <MadLibsResult answers={answers}/> :
            <MadLibsForm answers={answers} setAnswers={setAnswers}/>
        }
        </div>
    )
}