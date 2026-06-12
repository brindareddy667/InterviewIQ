from flask import Flask, render_template, request, redirect, url_for
import os

from utils.pdf_reader import extract_resume_text
from utils.resume_analyzer import analyze_resume
from utils.question_generator import generate_questions
from utils.feedback_generator import generate_feedback
from utils.voice_question_generator import (
    generate_voice_questions
)
from utils.whisper_transcriber import (
    transcribe_audio
)
from utils.voice_feedback import (
    generate_voice_feedback
)


app = Flask(__name__)

UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ==========================
# GLOBAL STATE
# ==========================

latest_report = None
latest_feedback = None
latest_voice_feedback = None

latest_resume_text = ""
latest_role = ""

questions = []
answers = []

voice_interview_data = {

    "role": "",

    "resume_text": "",

    "questions": [],

    "answers": [],

    "current_question": 0,

    "feedback": {}

}

# ==========================
# HOME
# ==========================

@app.route("/")
def home():

    return render_template(
        "index.html"
    )

# ==========================
# INTERVIEW SETUP
# ==========================

@app.route("/interview")
def interview():

    return render_template(
        "interview.html"
    )

# ==========================
# RESUME LOADING
# ==========================

@app.route(
    "/resume-loading",
    methods=["POST"]
)
def resume_loading():

    global latest_resume_text
    global latest_role

    pdf = request.files.get("resume")

    role = request.form.get("role")

    if not pdf:

        return "Please upload a resume."

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        pdf.filename
    )

    pdf.save(filepath)

    latest_resume_text = extract_resume_text(
        filepath
    )

    latest_role = role

    return render_template(
        "resume_loading.html"
    )

# ==========================
# PROCESS RESUME
# ==========================

@app.route("/process-resume")
def process_resume():

    global latest_report
    global latest_resume_text
    global latest_role

    latest_report = analyze_resume(
        latest_resume_text,
        latest_role
    )

    return redirect(
        url_for("report")
    )

# ==========================
# REPORT
# ==========================

@app.route("/report")
def report():

    global latest_report

    if latest_report is None:

        return redirect(
            url_for("interview")
        )

    return render_template(
        "report.html",
        report=latest_report
    )

@app.route("/interview-loading")
def interview_loading():

    return render_template(
        "interview_loading.html"
    )


@app.route("/process-interview")
def process_interview():

    return redirect(
        url_for("start_interview")
    )

# ==========================
# START INTERVIEW
# ==========================

@app.route("/start-interview")
def start_interview():

    global questions
    global answers

    answers = []

    question_text = generate_questions(
        latest_resume_text,
        latest_role
    )

    questions = [
        q.strip()
        for q in question_text.split("\n")
        if q.strip()
    ][:10]

    if len(questions) == 0:

        questions = [
            "Tell me about yourself."
        ]

    return render_template(
        "interview_session.html",
        question=questions[0],
        current_question=1,
        total_questions=len(questions)
    )

# ==========================
# SUBMIT ANSWER
# ==========================

@app.route(
    "/submit-answer",
    methods=["POST"]
)
def submit_answer():

    global answers
    global questions

    answer = request.form.get(
        "answer"
    )

    index = int(
        request.form.get(
            "question_index"
        )
    )

    answers.append(answer)

    if index >= len(questions):

        return render_template(
            "feedback_loading.html"
        )

    return render_template(
        "interview_session.html",
        question=questions[index],
        current_question=index + 1,
        total_questions=len(questions)
    )

# ==========================
# PROCESS FEEDBACK
# ==========================

@app.route("/process-feedback")
def process_feedback():

    global latest_feedback
    
    print("\nFINAL QUESTIONS:")
    print(questions)

    print("\nFINAL ANSWERS:")
    print(answers)

    latest_feedback = generate_feedback(
        questions,
        answers,
        latest_role
    )

    return redirect(
        url_for("feedback")
    )

# ==========================
# FEEDBACK
# ==========================

@app.route("/feedback")
def feedback():

    global latest_feedback

    if latest_feedback is None:

        return """
        <html>

        <body style='
        background:#0b1120;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        font-family:sans-serif;
        '>

        <h1>

        Interview Analysis Failed

        </h1>

        </body>

        </html>
        """

    return render_template(
        "feedback.html",
        feedback=latest_feedback
    )

@app.route("/voice_intro")
def voice_intro():

    return render_template(
        "voice_intro.html"
    )

@app.route("/voice_setup")
def voice_setup():

    global voice_interview_data

    voice_interview_data = {

        "role": "",

        "resume_text": "",

        "questions": [],

        "answers": [],

        "current_question": 0,

        "feedback": {}

    }

    return render_template(
        "voice_setup.html"
    )

@app.route("/voice_session")
def voice_session():

    global voice_interview_data

    if len(
        voice_interview_data[
            "questions"
        ]
    ) == 0:

        return redirect(
            url_for(
                "voice_setup"
            )
        )

    return render_template(
        "voice_session.html",

        first_question=
        voice_interview_data[
            "questions"
        ][0]
    )

@app.route(
    "/voice_loading",
    methods=["POST"]
)
def voice_loading():

    global voice_interview_data

    pdf = request.files.get(
        "resume"
    )

    role = request.form.get(
        "role"
    )

    if not pdf:

        return "Please upload a resume."

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        pdf.filename
    )

    pdf.save(filepath)

    resume_text = extract_resume_text(
        filepath
    )

    voice_questions = (
        generate_voice_questions(
            resume_text,
            role
        )
    )

    voice_interview_data = {

        "role": role,

        "resume_text": resume_text,

        "questions": voice_questions,

        "answers": [],

        "current_question": 0,

        "feedback": {}

    }

    return render_template(
        "voice_loading.html"
    )

@app.route("/voice_feedback_loading")
def voice_feedback_loading():

    return render_template(
        "voice_feedback_loading.html"
    )

@app.route("/voice_feedback")
def voice_feedback():

    global latest_voice_feedback

    return render_template(

        "voice_feedback.html",

        feedback=
        latest_voice_feedback

    )

@app.route(
    "/transcribe-audio",
    methods=["POST"]
)
def transcribe_audio_route():

    audio = request.files.get(
        "audio"
    )

    if not audio:

        return {

            "success": False

        }

    filepath = os.path.join(
        "audio",
        "latest_answer.webm"
    )

    audio.save(
        filepath
    )

    transcript = transcribe_audio(
        filepath
    )

    return {

        "success": True,

        "transcript": transcript

    }

@app.route(
    "/next-question",
    methods=["POST"]
)
def next_question():

    global voice_interview_data

    data = request.get_json()

    answer = data.get(
        "answer",
        ""
    )

    voice_interview_data[
        "answers"
    ].append(answer)

    voice_interview_data[
        "current_question"
    ] += 1

    current = voice_interview_data["current_question"]

    total = len(
    voice_interview_data["questions"]
)

    if current >= total:
            return {

            "finished": True

        }

    return {

        "finished": False,

        "question":
        voice_interview_data[
            "questions"
        ][current],

        "current":
        current + 1,

        "total":
        total

    }

@app.route(
    "/process-voice-feedback"
)
def process_voice_feedback():

    global voice_interview_data
    global latest_voice_feedback

    latest_voice_feedback = (
        generate_voice_feedback(

            voice_interview_data[
                "resume_text"
            ],

            voice_interview_data[
                "role"
            ],

            voice_interview_data[
                "questions"
            ],

            voice_interview_data[
                "answers"
            ]

        )
    )

    return redirect(
        url_for(
            "voice_feedback"
        )
    )

@app.route("/learning")
def learning():

    return render_template(
        "learning.html"
    )

# ==========================
# RUN
# ==========================

if __name__ == "__main__":

    app.run(
        debug=True
    )