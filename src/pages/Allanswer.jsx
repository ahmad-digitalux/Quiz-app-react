import React from 'react';
import './answers.css'
import questions from  '../questions.json'

const Allanswer = () => {
    return (
        <>
  <title>Page Answers</title>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
    rel="stylesheet"
  />
  <section>
    <div className="container">
      <div className="accordion">
      {questions.map((oneQues) => (
        <p className="accordion-item" id={`question${oneQues.id}`}>
        <a className="accordion-link" href={`#question${oneQues.id}`}>
          <div>
            <h3>BACKEND DEVELOPMENT</h3>
            <ul>
              <li className='fonta'>{oneQues.question}</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answerAcc">
          <p>
        {oneQues.answer}
          </p>
        </div>
        <hr />
      </p>
      ))}
        
      </div>
    </div>
  </section>
</>

    );
}

export default Allanswer;
