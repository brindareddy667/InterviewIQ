import requests


def generate_questions(resume_text, role):

    prompt = f"""
You are a professional interviewer.

Role:

{role}

Resume:

{resume_text}

Generate exactly 10 interview questions.

Requirements:

- Relevant to projects.
- Relevant to skills.
- Relevant to role.
- Include behavioral questions.
- Include technical questions.

Return only questions.

One question per line.
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma3:4b",
            "prompt":prompt,
            "stream":False
        }
    )

    return response.json()["response"]