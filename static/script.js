/* ========================================
   INTERVIEWIQ AI
   SCRIPT.JS
======================================== */

/* ========================================
   THEME TOGGLE
======================================== */


document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    let toggleBtn =
    document.querySelector(".theme-toggle");

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "light"){

        body.classList.add(
            "light-mode"
        );

    }

    if(toggleBtn){

        updateThemeIcon();

        toggleBtn.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "light-mode"
                );

                if(
                    body.classList.contains(
                        "light-mode"
                    )
                ){

                    localStorage.setItem(
                        "theme",
                        "light"
                    );

                }

                else{

                    localStorage.setItem(
                        "theme",
                        "dark"
                    );

                }

                updateThemeIcon();

            }
        );

    }

});

/* ========================================
   UPDATE THEME ICON
======================================== */

function updateThemeIcon(){

    let btn =
    document.querySelector(
        ".theme-toggle"
    );

    if(!btn) return;

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        btn.innerHTML = "🌙";

    }

    else{

        btn.innerHTML = "☀️";

    }

}

/* ========================================
   CHARACTER COUNTER
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const textarea =
        document.querySelector(
            ".answer-box"
        );

        const counter =
        document.getElementById(
            "charCount"
        );

        if(
            textarea &&
            counter
        ){

            counter.innerText =
            textarea.value.length;

            textarea.addEventListener(
                "input",
                function(){

                    counter.innerText =
                    this.value.length;

                }
            );

        }

    }
);

/* ========================================
   FADE IN ANIMATION
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
        document.querySelectorAll(
            ".feature-card, .report-card, .stat-card, .step"
        );

        const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if(
                            entry.isIntersecting
                        ){

                            entry.target.style.opacity =
                            "1";

                            entry.target.style.transform =
                            "translateY(0px)";

                        }

                    }
                );

            },

            {
                threshold:0.1
            }

        );

        cards.forEach(
            card => {

                card.style.opacity =
                "0";

                card.style.transform =
                "translateY(30px)";

                card.style.transition =
                "all .6s ease";

                observer.observe(card);

            }
        );

    }
);

/* ========================================
   SMOOTH SCROLL
======================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(

    anchor => {

        anchor.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

                if(target){

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }
        );

    }

);

/* ========================================
   BUTTON RIPPLE EFFECT
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const buttons =
        document.querySelectorAll(
            ".primary-btn"
        );

        buttons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    function(e){

                        const circle =
                        document.createElement(
                            "span"
                        );

                        const diameter =
                        Math.max(
                            this.clientWidth,
                            this.clientHeight
                        );

                        circle.style.width =
                        diameter + "px";

                        circle.style.height =
                        diameter + "px";

                        circle.style.position =
                        "absolute";

                        circle.style.borderRadius =
                        "50%";

                        circle.style.background =
                        "rgba(255,255,255,.3)";

                        circle.style.transform =
                        "scale(0)";

                        circle.style.animation =
                        "ripple .6s linear";

                        circle.style.left =
                        (
                            e.clientX -
                            this.getBoundingClientRect().left -
                            diameter / 2
                        ) + "px";

                        circle.style.top =
                        (
                            e.clientY -
                            this.getBoundingClientRect().top -
                            diameter / 2
                        ) + "px";

                        this.appendChild(
                            circle
                        );

                        setTimeout(
                            () => {

                                circle.remove();

                            },
                            600
                        );

                    }
                );

            }
        );

    }
);

/* ========================================
   PAGE LOADED ANIMATION
======================================== */

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
        "1";

    }
);

const resumeFile =
document.getElementById("resumeFile");

if(resumeFile){

    resumeFile.addEventListener(
        "change",
        function(){

            const fileName =
            this.files[0]?.name;

            if(fileName){

                document.getElementById(
                    "fileLabel"
                ).innerHTML =
                "✅ Uploaded Successfully<br><strong>"
                + fileName +
                "</strong>";

                this.closest(
                    ".upload-box"
                ).classList.add(
                    "upload-success"
                );

            }

        }
    );

}

const voiceResume =
document.getElementById("voiceResume");

if(voiceResume){

    voiceResume.addEventListener(
        "change",
        function(){

            const fileName =
            this.files[0]?.name;

            if(fileName){

                document.getElementById(
                    "voiceFileLabel"
                ).innerHTML =
                "✅ Uploaded Successfully<br><strong>"
                + fileName +
                "</strong>";

                this.closest(
                    ".upload-box"
                ).classList.add(
                    "upload-success"
                );

            }

        }
    );

}

/* ========================================
VOICE SESSION CONTROLS
======================================== */

const voiceTimer =
document.querySelector(
    ".voice-timer"
);

if(voiceTimer){

    let seconds = 0;

    setInterval(() => {

        seconds++;

        const mins =
        String(
            Math.floor(
                seconds / 60
            )
        ).padStart(
            2,
            "0"
        );

        const secs =
        String(
            seconds % 60
        ).padStart(
            2,
            "0"
        );

        voiceTimer.innerHTML =
        "⏱ " +
        mins +
        ":" +
        secs;

    },1000);

}

/* ========================================
VOICE SESSION ELEMENTS
======================================== */

const speakBtn =
document.getElementById(
    "speakBtn"
);

const stopBtn =
document.getElementById(
    "stopBtn"
);

const repeatBtn =
document.getElementById(
    "repeatBtn"
);

const clearBtn =
document.getElementById(
    "clearBtn"
);

const restartBtn =
document.getElementById(
    "restartBtn"
);

const endBtn =
document.getElementById(
    "endBtn"
);

const finishBtn =
document.getElementById(
    "finishBtn"
);

const statusBox =
document.querySelector(
    ".current-status"
);

const statusDesc =
document.querySelector(
    ".status-desc"
);

const assistantTitle =
document.querySelector(
    ".assistant-status h2"
);

const miniOrb =
document.querySelector(
    ".mini-orb"
);

const responseArea =
document.getElementById(
    "responseArea"
);

/* ========================================
HELPERS
======================================== */

function setAssistantSpeaking(){

    if(!statusBox) return;

    statusBox.innerHTML =
    "🔵 Assistant Speaking";

    statusDesc.innerHTML =
    "AI is currently asking a question.";

    assistantTitle.innerHTML =
    "AI Assistant Speaking";

    miniOrb.style.background =
    "linear-gradient(135deg,#3b82f6,#60a5fa)";

}

function setListening(){

    if(!statusBox) return;

    statusBox.innerHTML =
    "🟣 Listening";

    statusDesc.innerHTML =
    "Your turn to answer.";

    assistantTitle.innerHTML =
    "Listening...";

    miniOrb.style.background =
    "linear-gradient(135deg,#a855f7,#d946ef)";

}

function setThinking(){

    if(!statusBox) return;

    statusBox.innerHTML =
    "🟠 Thinking";

    statusDesc.innerHTML =
    "Processing response.";

    assistantTitle.innerHTML =
    "Thinking...";

    miniOrb.style.background =
    "linear-gradient(135deg,#f97316,#fb923c)";

}

function setReady(){

    if(!statusBox) return;

    statusBox.innerHTML =
    "⚪ Ready";

    statusDesc.innerHTML =
    "Waiting for action.";

    assistantTitle.innerHTML =
    "Ready";

    miniOrb.style.background =
    "linear-gradient(135deg,#94a3b8,#e2e8f0)";

}



/* ========================================
REPEAT QUESTION
======================================== */

if(repeatBtn){

    repeatBtn.addEventListener(
        "click",
        () => {

            setAssistantSpeaking();

            alert(
                "Question repeated."
            );

        }
    );

}

/* ========================================
CLEAR ANSWER
======================================== */

if(clearBtn){

    clearBtn.addEventListener(
        "click",
        () => {

            responseArea.innerHTML =
            "Your spoken response will appear here...";

            document.getElementById(
                "latestTranscript"
            ).value = "";

            nextBtn.disabled = true;

            setReady();

        }
    );

}

/* ========================================
RESTART INTERVIEW
======================================== */

if(restartBtn){

    restartBtn.addEventListener(
        "click",
        () => {

            const confirmRestart =
            confirm(
                "Restart interview?"
            );

            if(confirmRestart){

                window.location.href =
                "/voice_setup";

            }

        }
    );

}

/* ========================================
END INTERVIEW
======================================== */

if(endBtn){

    endBtn.addEventListener(
        "click",
        () => {

            const confirmEnd =
            confirm(
                "End interview?"
            );

            if(confirmEnd){

                window.location.href =
                "/";

            }

        }
    );

}


/* ========================================
FINISH INTERVIEW
======================================== */

if(finishBtn){

    finishBtn.addEventListener(
        "click",
        () => {

            if(
                finishBtn.classList.contains(
                    "finish-enabled"
                )
            ){

                window.location.href ="/voice_feedback_loading";

            }

        }
    );

}

/* ========================================
INITIAL STATE
======================================== */

setAssistantSpeaking();

/* ========================================
VOICE FEEDBACK PAGE
======================================== */

const scoreCircle =
document.querySelector(
    ".overall-score"
);

if(scoreCircle){

    let current = 0;

    const target = 87;

    const interval =
    setInterval(() => {

        current++;

        scoreCircle.innerHTML =
        current;

        if(current >= target){

            clearInterval(
                interval
            );

        }

    },20);

}

/* ========================================
CARDS ANIMATION
======================================== */

const feedbackCards =
document.querySelectorAll(
    ".feedback-box"
);

feedbackCards.forEach(

    (card,index) => {

        card.style.opacity = "0";

        card.style.transform =
        "translateY(30px)";

        setTimeout(() => {

            card.style.transition =
            "all .6s ease";

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";

        }, index * 200);

    }

);

/* ========================================
SECTIONS FADE IN
======================================== */

const sections =
document.querySelectorAll(
    ".feedback-section"
);

sections.forEach(

    (section,index) => {

        section.style.opacity = "0";

        section.style.transform =
        "translateY(20px)";

        setTimeout(() => {

            section.style.transition =
            "all .6s ease";

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";

        }, 1000 + (index * 250));

    }

);

/* ========================================
TOPIC CHIP EFFECT
======================================== */

const chips =
document.querySelectorAll(
    ".topics span"
);

chips.forEach(

    chip => {

        chip.addEventListener(
            "mouseenter",
            () => {

                chip.style.transform =
                "translateY(-3px) scale(1.05)";

            }
        );

        chip.addEventListener(
            "mouseleave",
            () => {

                chip.style.transform =
                "translateY(0) scale(1)";

            }
        );

    }

);

/* ========================================
BUTTON CONFIRMATIONS
======================================== */

const retakeBtn =
document.querySelector(
    '.feedback-buttons a[href="/voice-session"]'
);

if(retakeBtn){

    retakeBtn.addEventListener(
        "click",
        function(e){

            const confirmRetake =
            confirm(
                "Start a new voice interview?"
            );

            if(!confirmRetake){

                e.preventDefault();

            }

        }
    );

}

const homeBtn =
document.querySelector(
    '.feedback-buttons a[href="/"]'
);

if(homeBtn){

    homeBtn.addEventListener(
        "click",
        function(e){

            const confirmHome =
            confirm(
                "Return to home page?"
            );

            if(!confirmHome){

                e.preventDefault();

            }

        }
    );

}

/* ========================================
SCORE GLOW
======================================== */

if(scoreCircle){

    setInterval(() => {

        scoreCircle.style.transform =
        "scale(1.03)";

        setTimeout(() => {

            scoreCircle.style.transform =
            "scale(1)";

        },300);

    },3000);

}

/* ========================================
WHISPER RECORDING
======================================== */

let mediaRecorder;

let audioChunks = [];

const whisperResponseArea =
document.getElementById(
    "responseArea"
);

const nextBtn =
document.getElementById(
    "nextBtn"
);

if(
    speakBtn &&
    stopBtn
){

    stopBtn.disabled = true;

    speakBtn.addEventListener(
        "click",
        async () => {

            const stream =
            await navigator
            .mediaDevices
            .getUserMedia({

                audio:true

            });

            audioChunks = [];

            mediaRecorder =
            new MediaRecorder(
                stream
            );

            mediaRecorder.ondataavailable =
            event => {

                audioChunks.push(
                    event.data
                );

            };

            mediaRecorder.start();

            whisperResponseArea.innerHTML =
            "🎤 Recording...";

            speakBtn.disabled =
            true;

            stopBtn.disabled =
            false;

        }
    );

    stopBtn.addEventListener(
    "click",
    () => {

        responseArea.innerHTML =
        "🧠 Transcribing...";

        mediaRecorder.onstop =
        async () => {

            const audioBlob =
            new Blob(
                audioChunks,
                {
                    type:"audio/webm"
                }
            );

            const formData =
            new FormData();

            formData.append(
                "audio",
                audioBlob,
                "answer.webm"
            );

            const response =
            await fetch(
                "/transcribe-audio",
                {
                    method:"POST",
                    body:formData
                }
            );

            const data =
            await response.json();

            console.log(data);

            if(data.success){

    whisperResponseArea.innerHTML =
    data.transcript;

    document.getElementById(
        "latestTranscript"
    ).value =
    data.transcript;

    nextBtn.disabled = false;

}else{

    whisperResponseArea.innerHTML =
    "Transcription failed";

}

            speakBtn.disabled = false;
            stopBtn.disabled = true;

        };

        mediaRecorder.stop();

    }
  );   
}

function speakQuestion(text){

    speechSynthesis.cancel();

    const speech =
    new SpeechSynthesisUtterance(
        text
    );

    speech.rate = 0.95;

    speech.pitch = 1;

    speech.volume = 1;

    const voices =
    speechSynthesis.getVoices();

    const preferredVoice =
    voices.find(
        voice =>
        voice.name.includes("Samantha") ||
        voice.name.includes("Google")
    );

    if(preferredVoice){

        speech.voice =
        preferredVoice;

    }

    speech.onstart = () => {

        setAssistantSpeaking();

    };

    speech.onend = () => {

        setReady();

    };

    speechSynthesis.speak(
        speech
    );

}

const firstQuestion =
document.getElementById(
    "currentQuestion"
);

if(firstQuestion){

    setTimeout(() => {

        speakQuestion(

            "Welcome to Interview IQ. " +

            "I am your AI interviewer today. " +

            "I will ask questions based on your resume, projects and selected role. " +

            "Please answer naturally and take your time. " +

            "Let's begin. " +

            firstQuestion.innerText

        );

    },1000);

}

if(nextBtn){

    nextBtn.addEventListener(
        "click",
        async () => {

            const transcript =
            document.getElementById(
                "latestTranscript"
            ).value;

            const response =
            await fetch(

                "/next-question",

                {

                    method:"POST",

                    headers:{
                        "Content-Type":
                        "application/json"
                    },

                    body:JSON.stringify({

                        answer:
                        transcript

                    })

                }

            );

            const data =
            await response.json();

            if(data.finished){

            finishBtn.classList.remove(
            "finish-disabled"
            );

            finishBtn.classList.add(
            "finish-enabled"
            );

            finishBtn.innerHTML =
            "✅ View Analysis";

            document.getElementById(
                "currentQuestion"
            ).innerText =
            "Interview Completed";

            return;

}

            document.getElementById(
                "currentQuestion"
            ).innerText =
            data.question;

            document.getElementById(
                "questionCounter"
            ).innerText =
            `Question ${data.current} / ${data.total}`;

            document.getElementById(
                "responseArea"
            ).innerHTML =
            "Your spoken response will appear here...";

            document.getElementById(
                "latestTranscript"
            ).value = "";

            nextBtn.disabled =
            true;

            const transitions = [

    "Thank you for your response.",

    "Let's continue.",

    "Moving on to the next question.",

    "Thank you.",

    "Let's discuss another topic.",

    "We'll move to the next question now."

];

const randomTransition =

transitions[
    Math.floor(
        Math.random() *
        transitions.length
    )
];

speakQuestion(

    randomTransition +

    " " +

    data.question

);

        }
    );

}

/* ========================================
FINISH INTERVIEW
======================================== */

if(finishBtn){

    finishBtn.addEventListener(
        "click",
        () => {

            if(
                finishBtn.classList.contains(
                    "finish-enabled"
                )
            ){

                window.location.href =
                "/process-voice-feedback";

            }

        }
    );

}




