import json

from app.services.ai_service import client


DEFAULT_RECOMMENDATIONS = []


def build_recommendation_prompt(
    company_name: str,
    company_profile: dict,
    executive_summary: str,
):
    return f"""
You are an expert Competitive Intelligence Consultant.

Your task is to recommend the five strongest business competitors for the given company.

Company:
{company_name}

Company Profile:
{json.dumps(company_profile, indent=2)}

Executive Summary:
{executive_summary}

Return ONLY valid JSON.

Format:

{{
    "recommendations":[
        {{
            "name":"",
            "reason":"",
            "confidence":0
        }}
    ]
}}

Rules:

- Exactly 5 competitors.
- Use real companies only.
- confidence must be between 70 and 100.
- reason should be one concise sentence (maximum 20 words).
- Return only JSON.
"""

def parse_recommendations(content: str):

    content = (
        content.replace("```json", "")
        .replace("```", "")
        .strip()
    )

    try:
        data = json.loads(content)
        recommendations = data.get("recommendations", [])

    except Exception:
        recommendations = DEFAULT_RECOMMENDATIONS

    return recommendations

def generate_recommendations(
    company_name: str,
    company_profile: dict,
    executive_summary: str,
):

    prompt = build_recommendation_prompt(
        company_name,
        company_profile,
        executive_summary,
    )

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.2,
        max_tokens=500,
    )

    content = response.choices[0].message.content

    return parse_recommendations(content)
