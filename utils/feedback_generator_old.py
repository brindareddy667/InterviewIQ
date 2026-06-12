import requests
import json


def generate_feedback(questions, answers, role):

    print("QUESTIONS:")
    print(questions)

    print("ANSWERS:")
    print(answers)

    prompt = f"""
You are an expert technical interviewer and evaluator.

Role:

{role}

Interview Questions:

{questions}

Interview Answers:

{answers}

IMPORTANT:

Evaluate ONLY the interview answers.

Do NOT score based on:

Resume quality
Projects listed on resume
Skills listed on resume
Certifications
Internships
Achievements

Only evaluate what was demonstrated in the answers.

TASK:

For each question:

Identify its category:
Technical
Project
Problem Solving
Behavioral
Communication
Evaluate the answer quality.
Consider:
Accuracy
Completeness
Relevance
Depth of explanation

If the answer contains:

I don't know
Not sure
No idea
Empty response
Random text
Single letters
Meaningless text

or does not answer the question,

reduce the score significantly.

SCORING GUIDE:

0:
No knowledge demonstrated.

1-2:
Very limited knowledge demonstrated.

3-4:
Weak understanding.

5-6:
Average understanding.

7-8:
Good understanding.

9-10:
Excellent understanding.

CATEGORY SCORING:

Technical Score:

Average performance across all technical questions.

Project Score:

Average performance across all project-related questions.

Problem Solving Score:

Average performance across all problem-solving questions.

Overall Score:

Reflect performance across the entire interview.

ABSOLUTE FAILURE RULE:

If all answers are:

Incorrect
Meaningless
Random text
Single letters
Empty
I don't know
Not sure
No idea

then:

Overall Score = 0

Technical Score = 0

Project Score = 0

Problem Solving Score = 0

Do not award any marks.

A completely failed interview must receive zero.

If more than 70% of answers are:

I don't know
Not sure
No idea
Wrong
Extremely weak

then:

Overall Score must be below 3.

Technical Score must be below 3.

Project Score must be below 3.

Problem Solving Score must be below 3.

Do not give sympathy marks.

Do not award points for participation.

Only award marks for demonstrated knowledge.

STRENGTHS RULES:

Generate strengths ONLY from demonstrated knowledge in interview answers.

Do NOT generate strengths from:

Resume
Role
Skills
Projects
Certifications
Assumptions

Do NOT copy interview answers.

Do NOT return:

I don't know
Not sure
No idea

If no meaningful strengths are demonstrated, return exactly:

[
"No significant strengths demonstrated during the interview."
]

IMPROVEMENTS RULES:

Generate improvement areas ONLY from weak interview answers.

Do NOT copy interview answers.

Do NOT return:

I don't know
Not sure
No idea

Convert weak answers into actionable improvements.

Examples:

Bad:
"I don't know Flask"

Good:
"Improve understanding of Flask fundamentals"

Bad:
"Not sure"

Good:
"Strengthen technical concept clarity"

Bad:
"No idea"

Good:
"Improve ability to explain technical concepts"

TOPICS TO REVISE RULES:

Generate actual study topics.

Do NOT copy interview answers.

Do NOT return:

I don't know
Not sure
No idea

Topics must represent knowledge gaps revealed by the interview.

Examples:

Bad:
"I don't know"

Good:
"Flask Routing"

Bad:
"Not sure"

Good:
"REST API Fundamentals"

Bad:
"No idea"

Good:
"Database Design"

FAILURE FEEDBACK RULE:

If most answers are incorrect, meaningless, empty, random text, single letters, or responses such as:

- I don't know
- Not sure
- No idea

then do not generate custom strengths, improvements, or topics.

Instead return exactly:

Strengths:

[
    "No significant strengths demonstrated during the interview."
]

Improvements:

[
    "Improve overall technical interview preparation.",
    "Improve ability to explain projects and technical concepts clearly.",
    "Develop stronger problem-solving and analytical thinking skills."
]

Topics:

[
    "Core concepts related to skills mentioned in the resume.",
    "Projects and technologies included in the resume.",
    "Fundamental technical and role-specific concepts."
]

Return ONLY JSON.

Format:

{{
"score": 5,
"technical": 5,
"projects": 5,
"problem_solving": 5,
"strengths": [
"point 1",
"point 2",
"point 3"
],
"improvements": [
"point 1",
"point 2",
"point 3"
],
"topics": [
"topic 1",
"topic 2",
"topic 3"
]
}}
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
             "model": "gemma3:4b",
             "prompt": prompt,
             "stream": False,
            "format": "json"
        }
         
        
         
        
    )

    result = response.json()["response"].strip()

    print("\nRAW FEEDBACK RESPONSE:")
    print(result)

    try:

        start = result.find("{")

        if start == -1:
            raise Exception("No JSON found")

        brace_count = 0
        end = start

        for i in range(start, len(result)):

            if result[i] == "{":
                brace_count += 1

            elif result[i] == "}":
                brace_count -= 1

                if brace_count == 0:
                    end = i
                    break

        result = result[start:end + 1]

        print("EXTRACTED JSON:")
        print(result)

        return json.loads(result)

    except Exception as e:

        print("FEEDBACK ERROR")
        print(e)

        print(result)

        return None