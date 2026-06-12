import requests
import json


def analyze_resume(resume_text, role):

    prompt = f"""
You are an AI Interview Coach.

Analyze the resume for the role:

{role}

Resume:

{resume_text}

STRICT RULES:

- Never mention the candidate name.
- Never use he, she, him, her, they, candidate.
- Never write paragraphs describing a person.
- Never say "The candidate".
- Never say "This resume".
- Do not write introductions.
- Do not write conclusions.
- Keep everything concise.
- Use bullet points.
- Maximum 4 points per section.

Return ONLY JSON.

Format:

{{
    "score": 85,

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

    "skills": [
        "Programming: Python, JavaScript, SQL",
        "Web Development: HTML, CSS, Flask, React",
        "AI & Data: Machine Learning, Pandas, NumPy",
        "Databases: MySQL, MongoDB, SQLite"
    ],

    "recommendations": [
        "point 1",
        "point 2",
        "point 3"
    ]
}}

Return JSON only.
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma3:4b",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()["response"].strip()

    try:

        if "{" in result:
            start = result.find("{")
            end = result.rfind("}")
            result = result[start:end + 1]

        print("\nAI RESPONSE:\n")
        print(result)

        return json.loads(result)

    except Exception as e:

        print("\nJSON ERROR:\n")
        print(e)

        print("\nRAW RESPONSE:\n")
        print(result)

        return {
            "score": 75,

            "strengths": [
                "Unable to generate strengths."
            ],

            "improvements": [
                "Unable to generate improvement areas."
            ],

            "skills": [
                "Resume analysis unavailable."
            ],

            "recommendations": [
                "Please try again."
            ]
        }