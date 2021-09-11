import {useEffect, useState} from "react";

export function MadLibsForm({answers, setAnswers}) {

    const [validForm, setValidForm] = useState(false)
    const handleClick = () => {
        setAnswers({...answers, answersEntered: true})
    }

    const sections = [
        "animal",
        "action",
        "object",
        "food",
        "name",
        "drink",
        "number",
        "adjective",
        "city",
        "mood"
    ]

    const isFormComplete = () => {
        return sections.map((section) => {
            if (!answers[section] || (answers[section] && answers[section].length === 0)) return false
            else return true
        }).every((value) => value === true)
    }

    useEffect(() => {
        if (!validForm && isFormComplete()) {
            setValidForm(true)
        } else if (validForm && !isFormComplete()) {
            setValidForm(false)
        }
    }, [answers])

    const handleChange = (e) => {
        setAnswers({...answers, [e.target.name]: e.target.value})
    }

    const startsWithVowel = (word) => {
        if (word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
            return true
        } else {
            return false
        }
    }

    return (
        <section  className={'form'}>
                <h2>Enter Your Choices!</h2>
            <table><tbody>
            {sections.map((section) => {
               return (<tr key={section}><td>Please write {startsWithVowel(section) ? "an" : "a"} {section}:</td><td><input name={section} id={section} type='text' value={answers[section]} onChange={handleChange} /></td></tr>)
            })}</tbody>
            </table>
            <button disabled={!validForm} onClick={handleClick} style={{marginTop: '1rem'}}>Complete</button></section>
    )
}