import React, { useState, useEffect, useRef } from 'react'
import UpdateQuestion from '../components/updateQuestion'
import { useTopic } from "../components/context/TopicContext"

export default function UpdateQuestionContainer() {
    const {topics} = useTopic()
    const isMounted = useRef(false)

    const [topicName, setTopicName] = useState("")
    const [newTopicName, setNewTopicName] = useState("")
    const [newQuestion, setNewQuestion] = useState("")
    const [newAnswer, setNewAnswer] = useState("")
    const [newCard, setNewCard] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    let myTopic = JSON.parse(localStorage.getItem(topicName)) || []

    const handleSubmit = (e) => {
        if (newTopicName !== "New Topic") {
            setNewCard({
                question: newQuestion,
                answer: newAnswer
            })
            setSubmitted(!submitted)
        } else {
            e.preventDefault()
            alert(`New topic name can not be "New Topic"`)
        }
    }

    useEffect(() => {
        if (isMounted.current) {
            if (newTopicName) {
                localStorage.setItem(newTopicName, JSON.stringify([newCard]))
            } else {
            myTopic.push(newCard)
            localStorage.setItem(topicName, JSON.stringify(myTopic))
            }
        } else {
            isMounted.current = true;
        }        
    }, [submitted])
    
    return (
        <UpdateQuestion
            onSubmit={handleSubmit}
            id={"myForm"}
        >
            <UpdateQuestion.Title>
                Which topic would you like to add this question to?
            </UpdateQuestion.Title>
            <UpdateQuestion.Selector
                required
                value = {topicName}
                onChange={(event) => {
                setTopicName(event.target.value)
            }}
            >
                <option value="" hidden>
                    Select a topic
                </option>
                {topics.map((topic, index) => (
                    <option 
                        key={index}
                        value={topic}
                    >
                        {topic}
                    </option>))
                }
                <option value="New Topic">New Topic</option>
            </UpdateQuestion.Selector>
            {topicName === "New Topic" &&
            <>
                <UpdateQuestion.Title>
                    What is the new topic?
                </UpdateQuestion.Title>
                <UpdateQuestion.Answer 
                    required
                    value={newTopicName} 
                    onChange={(event) => {setNewTopicName(event.target.value)}}
                    placeholder="Maximum 20 characters"
                    maxLength="20"
                >
                </UpdateQuestion.Answer>
            </>
            }
            <UpdateQuestion.Title>
                What is the question?
            </UpdateQuestion.Title>
            <UpdateQuestion.Answer
                required
                value={newQuestion}
                onChange={(event) => {setNewQuestion(event.target.value)}}
                placeholder="Maximum 50 characters"
                maxLength="50"
            >
            </UpdateQuestion.Answer>
            <UpdateQuestion.Title>
                What is the answer?
            </UpdateQuestion.Title>
            <UpdateQuestion.Answer 
                required
                value={newAnswer}
                onChange={(event) => {setNewAnswer(event.target.value)}}
                placeholder="Maximum 100 characters"
                maxLength="100"
            >
            </UpdateQuestion.Answer>
        </UpdateQuestion>
    )
}