import React from 'react'

const ErrorModal = props => {
    <div>
        <header>
            <h1>{props.topic}</h1>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button>Okay</button>
        </footer>
    </div>
  
};

export default ErrorModal;