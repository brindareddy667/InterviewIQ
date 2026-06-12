import requests
import json


def generate_feedback(
    questions,
    answers,
    role
):

    print("\nQUESTIONS:")
    print(questions)

    print("\nANSWERS:")
    print(answers)

    # ------------------------
    # Automatic Failure Check
    # ------------------------

    bad_answers = 0

    for answer in answers:

        a = answer.strip().lower()

        if (

            len(a) < 5

            or a in [

                "i don't know",

                "idk",

                "not sure",

                "no idea"

            ]

        ):

            bad_answers += 1

    if bad_answers >= 7:

        return {

            "overall_score": 0,

            "technical_score": 0,

            "project_score": 0,

            "problem_solving_score": 0,

            "strengths": [

                "Interview was completed."

            ],

            "improvements": [

                "Improve technical interview preparation.",

                "Practice answering questions in detail.",

                "Develop stronger problem-solving skills."

            ],

            "topics": [

                "Technical Concepts",

                "Project Discussions",

                "Problem Solving"

            ]

        }

    # ------------------------
    # AI Evaluation
    # ------------------------

    prompt = f"""
You are a senior interview evaluator.

Candidate Role:

{role}

Interview Questions:

{questions}

Interview Answers:

{answers}

TASK:

Evaluate ONLY the interview answers.

Assess:

1. Technical Knowledge
2. Project Understanding
3. Problem Solving Ability

Generate:

- Overall Score (0-100)
- Technical Score (0-100)
- Communication Score (0-100)
- Project Score (0-100)
- Problem Solving Score (0-100)

Also provide:

- 3 Strengths
- 3 Areas To Improve
- 5 Topics To Improve

RULES:

- Strong technical answers should score high.
- Detailed project explanations should score high.
- Clear communication should score high.
- Weak or vague answers should score lower.
- Evaluate ONLY the interview answers.
- Return ONLY JSON.

Format:

{{
    "overall_score": 85,

    "technical_score": 82,

    "project_score": 84,

    "problem_solving_score": 83,

    "strengths": [
        "...",
        "...",
        "..."
    ],

    "improvements": [
        "...",
        "...",
        "..."
    ],

    "topics": [
        "...",
        "...",
        "...",
        "...",
        "..."
    ]
}}
"""

    try:

        response = requests.post(

            "http://localhost:11434/api/generate",

            json={

                "model": "gemma3:4b",

                "prompt": prompt,

                "stream": False,

                "format": "json"

            }

        )

        result = response.json()[
            "response"
        ].strip()

        print(
            "\nRAW FEEDBACK RESPONSE:\n"
        )

        print(result)

        return json.loads(
            result
        )

    except Exception as e:

        print(
            "\nFEEDBACK ERROR:"
        )

        print(e)

        return {

            "overall_score": 75,

            "technical_score": 75,

            "communication_score": 75,

            "project_score": 75,

            "problem_solving_score": 75,

            "strengths": [

                "Good participation in the interview.",

                "Attempted most questions.",

                "Showed willingness to explain concepts."

            ],

            "improvements": [

                "Provide more detailed technical explanations.",

                "Improve project discussion depth.",

                "Practice structured interview responses."

            ],

            "topics": [

                "Technical Concepts",

                "Project Architecture",

                "Problem Solving",

                "Communication Skills",

                "Role-Specific Knowledge"

            ]

        }