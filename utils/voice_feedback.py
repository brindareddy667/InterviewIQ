import requests
import json


def generate_voice_feedback(

    resume_text,

    role,

    questions,

    answers

):

    qa_text = ""

    for q, a in zip(
        questions,
        answers
    ):

        qa_text += f"""

Question:
{q}

Answer:
{a}

"""

    prompt = f"""
You are an expert interview evaluator.

Candidate Role:

{role}

Candidate Resume:

{resume_text}

Interview Transcript:

{qa_text}

TASK:

Evaluate ONLY the candidate's interview answers.

The resume and role are provided ONLY for context and relevance checking.

IMPORTANT RULES:

1. DO NOT award marks based on resume quality.
2. DO NOT assume knowledge from projects, skills, certifications, education or technologies listed in the resume.
3. Score ONLY what the candidate actually demonstrated in their answers.
4. If answers are short, vague, generic, irrelevant, incorrect or incomplete, scores must decrease significantly.
5. If the candidate says:
   - "I don't know"
   - "Not sure"
   - "No idea"
   - Gives one-word answers
   - Gives unrelated answers
   then scores should be very low.
6. A strong resume does NOT mean a strong interview performance.
7. The evaluation must be based at least 90% on the interview answers and at most 10% on whether the answers are relevant to the resume and role.
8. If project-related questions are answered poorly, reduce Project Understanding score regardless of project quality mentioned in the resume.
9. If technical questions are answered poorly, reduce Technical Knowledge score regardless of listed skills.
10. If answers lack explanation, reasoning, examples or detail, reduce scores accordingly.

SCORING GUIDELINES:

90-100:
Excellent answers with strong technical depth, clear explanations, confidence, examples and reasoning.

75-89:
Good answers with minor gaps but overall strong understanding.

60-74:
Average answers with noticeable gaps in technical depth or communication.

40-59:
Weak answers, incomplete explanations, poor examples, limited understanding.

20-39:
Very poor answers, mostly vague, generic or irrelevant responses.

0-19:
Candidate failed to answer most questions, gave one-word responses, random answers, or demonstrated no meaningful understanding.

Evaluate:

1. Technical Knowledge
2. Communication Skills
3. Confidence
4. Problem Solving Ability
5. Project Understanding

Generate:

- Overall Score (0-100)
- Technical Score (0-100)
- Communication Score (0-100)
- Confidence Score (0-100)
- Problem Solving Score (0-100)

Also provide:

- 3 Strengths
- 3 Weaknesses
- 3 Suggestions
- 5 Topics To Improve

The strengths, weaknesses and suggestions MUST be derived from the candidate's answers, not from the resume.

Return ONLY valid JSON.

Format:

{{
    "overall_score": 85,

    "technical_score": 82,

    "communication_score": 88,

    "confidence_score": 80,

    "problem_solving_score": 84,

    "strengths": [
        "...",
        "...",
        "..."
    ],

    "weaknesses": [
        "...",
        "...",
        "..."
    ],

    "suggestions": [
        "...",
        "...",
        "..."
    ],

    "topics_to_improve": [
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
            "\nVOICE FEEDBACK RAW RESPONSE:\n"
        )

        print(result)

        start = result.find("{")

        if start == -1:

            raise Exception(
                "No JSON found"
            )

        brace_count = 0
        end = start

        for i in range(
            start,
            len(result)
        ):

            if result[i] == "{":

                brace_count += 1

            elif result[i] == "}":

                brace_count -= 1

                if brace_count == 0:

                    end = i
                    break

        result = result[
            start:end + 1
        ]

        parsed = json.loads(
            result
        )

        return parsed

    except Exception as e:

        print(
            "\nVOICE FEEDBACK ERROR\n"
        )

        print(e)

        return {

            "overall_score": 75,

            "technical_score": 75,

            "communication_score": 75,

            "confidence_score": 75,

            "problem_solving_score": 75,

            "strengths": [

                "Good participation",

                "Attempted most questions",

                "Showed interest in the interview"

            ],

            "weaknesses": [

                "Need stronger technical depth",

                "Need more structured answers",

                "Need more project explanation"

            ],

            "suggestions": [

                "Practice mock interviews",

                "Improve technical communication",

                "Prepare project explanations"

            ],

            "topics_to_improve": [

                "System Design",

                "Problem Solving",

                "Project Discussion",

                "Communication",

                "Technical Concepts"

            ]

        }