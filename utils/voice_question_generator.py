import requests


def generate_voice_questions(
    resume_text,
    role
):

    prompt = f"""
You are a senior technical interviewer conducting a real placement interview.

Candidate Target Role:
{role}

Candidate Resume:
{resume_text}

TASK:

Generate EXACTLY 10 interview questions.

The interview must feel realistic and professional.

Question Distribution:

1. Introduction (1)
- First question MUST be:
"Tell me about yourself."

2. Resume Background (1)
- Based on education, skills, certifications or experience.

3. Project Deep Dive (3)
- Based on projects mentioned in the resume.
- Ask about architecture, implementation, challenges, design choices and improvements.

4. Technical Questions (3)
- Based on technologies, frameworks and skills mentioned in the resume.
- Avoid textbook definitions.
- Ask practical and scenario-based questions.

5. Problem Solving (1)
- Present a realistic technical situation and ask how the candidate would solve it.

6. HR / Behavioral (1)
- Example:
Why should we hire you?
OR
Describe a challenge you faced and how you handled it.

IMPORTANT RULES:

- First question MUST be "Tell me about yourself."
- Mention project names whenever possible.
- Mention technologies from the resume.
- Do NOT ask:
  - What is OOP?
  - What is Python?
  - Define REST API.
  - Define Machine Learning.
- Avoid theoretical definitions.
- Focus on practical interview questions.
- Questions should sound like a real interviewer.
- No repeated questions.
- Generate EXACTLY 10 questions.

Return ONLY valid JSON.

{{
    "questions":[
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5",
        "Question 6",
        "Question 7",
        "Question 8",
        "Question 9",
        "Question 10"
    ]
}}
"""

    try:

        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "gemma3:4b",
                "prompt": prompt,
                "stream": False
            }
        )

        result = response.json()["response"].strip()

        print("\nVOICE QUESTIONS RAW RESPONSE:")
        print(result)

        questions = [

            q.strip()

            for q in result.split("\n")

            if q.strip()

        ]

        cleaned_questions = []

        for q in questions:

            q = q.strip()

            if q.startswith(("1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.")):

                parts = q.split(".", 1)

                if len(parts) > 1:

                    q = parts[1].strip()

            cleaned_questions.append(q)

        questions = cleaned_questions[:10]

        fallback_questions = [

            "Tell me about yourself.",

            "Which skill on your resume are you most confident in and why?",

            "Walk me through your most recent project.",

            "What was the biggest challenge in that project?",

            "If you rebuilt that project today, what would you improve?",

            "How would you design a scalable version of that system?",

            "Describe a technical decision you made and why.",

            "How would you troubleshoot a production issue in your application?",

            "Tell me about a difficult technical problem you solved.",

            "Why should we hire you for this role?"

        ]

        if len(questions) == 0:

            questions = fallback_questions

        while len(questions) < 10:

            questions.append(
                fallback_questions[
                    len(questions)
                ]
            )

        print("\nFINAL VOICE QUESTIONS:")
        print(questions)

        return questions

    except Exception as e:

        print("\nVOICE QUESTION ERROR:")
        print(e)

        return [

            "Tell me about yourself.",

            "Which skill on your resume are you most confident in and why?",

            "Walk me through your most recent project.",

            "What was the biggest challenge in that project?",

            "If you rebuilt that project today, what would you improve?",

            "How would you design a scalable version of that system?",

            "Describe a technical decision you made and why.",

            "How would you troubleshoot a production issue in your application?",

            "Tell me about a difficult technical problem you solved.",

            "Why should we hire you for this role?"

        ]