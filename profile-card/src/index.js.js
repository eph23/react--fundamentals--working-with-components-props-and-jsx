import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img
            className="avatar"
            src="506051542_3217455781739061_6688471883894723201_n.jpg"
            alt="Profile Image"
        />
    );
}
function Intro() {
    return (
        <div>
            <h1>Ephraim Sangma</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
        </div>
    );
}
function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="👶" />
            <Skill skill="JavaScript" emoji="👦" />
            <Skill skill="HTML" emoji="💪" />
            <Skill skill="CSS" emoji="💪" />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill">
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
