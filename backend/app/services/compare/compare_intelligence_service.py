import json

from app.services.ai_service import client


# ==========================================================
# Default Compare Response
# ==========================================================

DEFAULT_COMPARE_RESPONSE = {

    "winner": "",

    "executive_verdict": "",

    "strengths": {

        "company_1": [],

        "company_2": [],

    },

    "weaknesses": {

        "company_1": [],

        "company_2": [],

    },

    "market_momentum": {

        "company_1": 0,

        "company_2": 0,

    },

    "strategic_risks": [],

    "growth_opportunities": [],

    "business_recommendation": "",

    "confidence": {

        "score": 70,

        "reason": "",

    },

}


# ==========================================================
# Compare Prompt Builder
# ==========================================================

def build_compare_prompt(
    company_1: str,
    company_2: str,
    company_1_intelligence: dict,
    company_2_intelligence: dict,
) -> str:

    return f"""
You are a Senior Competitive Intelligence Consultant.

Compare ONLY the following two companies.

Company 1

Name:
{company_1}

Intelligence:
{json.dumps(company_1_intelligence, indent=2)}

------------------------------------------------------------

Company 2

Name:
{company_2}

Intelligence:
{json.dumps(company_2_intelligence, indent=2)}

------------------------------------------------------------

Return ONLY valid JSON.

{{
    "winner": "",

    "executive_verdict": "",

    "strengths": {{
        "company_1": [],
        "company_2": []
    }},

    "weaknesses": {{
        "company_1": [],
        "company_2": []
    }},

    "market_momentum": {{
        "company_1": 0,
        "company_2": 0
    }},

    "strategic_risks": [],

    "growth_opportunities": [],

    "business_recommendation": "",

    "confidence": {{
        "score": 0,
        "reason": ""
    }}
}}

Rules

winner
Return either "{company_1}" or "{company_2}"

executive_verdict
Maximum 80 words.

strengths
Exactly 3 items for each company.

weaknesses
Exactly 3 items for each company.

market_momentum
Integer between 0 and 100.

strategic_risks
Exactly 3 items.

growth_opportunities
Exactly 3 items.

business_recommendation
Maximum 40 words.

confidence.score
Integer between 70 and 100.

Return ONLY JSON.
"""


# ==========================================================
# Safe JSON Parser
# ==========================================================

def parse_compare_response(content: str):

    content = (
        content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    try:
        comparison = json.loads(content)

    except json.JSONDecodeError:
        comparison = {}

    return {

        "winner": comparison.get(
            "winner",
            DEFAULT_COMPARE_RESPONSE["winner"]
        ),

        "executive_verdict": comparison.get(
            "executive_verdict",
            DEFAULT_COMPARE_RESPONSE["executive_verdict"]
        ),

        "strengths": comparison.get(
            "strengths",
            DEFAULT_COMPARE_RESPONSE["strengths"]
        ),

        "weaknesses": comparison.get(
            "weaknesses",
            DEFAULT_COMPARE_RESPONSE["weaknesses"]
        ),

        "market_momentum": comparison.get(
            "market_momentum",
            DEFAULT_COMPARE_RESPONSE["market_momentum"]
        ),

        "strategic_risks": comparison.get(
            "strategic_risks",
            DEFAULT_COMPARE_RESPONSE["strategic_risks"]
        ),

        "growth_opportunities": comparison.get(
            "growth_opportunities",
            DEFAULT_COMPARE_RESPONSE["growth_opportunities"]
        ),

        "business_recommendation": comparison.get(
            "business_recommendation",
            DEFAULT_COMPARE_RESPONSE["business_recommendation"]
        ),

        "confidence": comparison.get(
            "confidence",
            DEFAULT_COMPARE_RESPONSE["confidence"]
        ),

    }


# ==========================================================
# Generate Executive Comparison
# ==========================================================

def generate_company_comparison(

    company_1: str,

    company_2: str,

    company_1_intelligence: dict,

    company_2_intelligence: dict,

):

    prompt = build_compare_prompt(

        company_1,

        company_2,

        company_1_intelligence,

        company_2_intelligence,

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

        max_tokens=1500,

    )

    content = response.choices[0].message.content

    return parse_compare_response(content)


# ==========================================================
# Public API
# ==========================================================

def build_company_comparison(

    company_1: str,

    company_2: str,

    company_1_intelligence: dict,

    company_2_intelligence: dict,

):

    return generate_company_comparison(

        company_1,

        company_2,

        company_1_intelligence,

        company_2_intelligence,

    )