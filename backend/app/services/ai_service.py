import json
import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


# ---------------------------------------------------------
# Default AI Response
# ---------------------------------------------------------

DEFAULT_RESPONSE = {

    "company_profile": {

        "industry": "",

        "business_focus": "",

        "market_position": "",

        "description": ""

    },

    "executive_summary": "",

    "market_intelligence": {

        "sentiment": {

            "overall": "Neutral",

            "positive": 0,

            "neutral": 100,

            "negative": 0,

            "reason": ""

        },

        "threat_radar": {

            "level": "Low",

            "summary": "",

            "top_threats": []

        },

        "confidence": {

            "score": 70,

            "reason": ""

        }

    },

    "main_trends": [],

    "opportunities": [],

    "risks": []

}


# ---------------------------------------------------------
# AI Prompt Builder
# ---------------------------------------------------------

def build_prompt(
    company_name: str,
    headlines: str
) -> str:

    return f"""
You are a Senior Competitive Intelligence Consultant.

Your responsibility is to analyze recent business news and produce executive-level intelligence suitable for CEOs, Product Managers, Investors and Business Analysts.

Company

{company_name}

Latest News Headlines

{headlines}

Return ONLY valid JSON.

The JSON MUST follow this schema exactly.

{{
    "company_profile": {{

        "industry": "",

        "business_focus": "",

        "market_position": "",

        "description": ""

    }},

    "executive_summary": "",

    "market_intelligence": {{

        "sentiment": {{

            "overall": "",

            "positive": 0,

            "neutral": 0,

            "negative": 0,

            "reason": ""

        }},

        "threat_radar": {{

            "level": "",

            "summary": "",

            "top_threats": []

        }},

        "confidence": {{

            "score": 0,

            "reason": ""

        }}

    }},

    "main_trends": [],

    "opportunities": [],

    "risks": []

}}

Rules

Company Profile

industry

Business sector.

business_focus

Maximum 6 words.

market_position

Examples

Market Leader

Strong Challenger

Emerging Player

description

Maximum 30 words.

Executive Summary

Maximum 60 words.

Professional business language.

Market Sentiment

overall must be

Positive

Neutral

Negative

positive + neutral + negative = exactly 100

reason

Maximum 20 words.

Threat Radar

level must be

Low

Medium

High

summary

Maximum 25 words.

top_threats

Exactly 3 items.

Confidence

score

Integer between 70 and 100.

Higher score means stronger confidence.

reason

Maximum 15 words.

Main Trends

Exactly 3 items.

Opportunities

Exactly 3 items.

Risks

Exactly 3 items.

No markdown.

No explanation.

Return ONLY JSON.
"""


# ---------------------------------------------------------
# Safe JSON Parser
# ---------------------------------------------------------

def parse_ai_response(content: str):

    content = (
        content
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    try:

        intelligence = json.loads(content)

    except json.JSONDecodeError:

        intelligence = {}

    return {

        "company_profile": intelligence.get(
            "company_profile",
            DEFAULT_RESPONSE["company_profile"]
        ),

        "executive_summary": intelligence.get(
            "executive_summary",
            DEFAULT_RESPONSE["executive_summary"]
        ),

        "market_intelligence": intelligence.get(
            "market_intelligence",
            DEFAULT_RESPONSE["market_intelligence"]
        ),

        "main_trends": intelligence.get(
            "main_trends",
            DEFAULT_RESPONSE["main_trends"]
        ),

        "opportunities": intelligence.get(
            "opportunities",
            DEFAULT_RESPONSE["opportunities"]
        ),

        "risks": intelligence.get(
            "risks",
            DEFAULT_RESPONSE["risks"]
        )

    }


# ---------------------------------------------------------
# Generate Executive Intelligence
# ---------------------------------------------------------

def generate_summary(
    company_name: str,
    headlines: str
):

    prompt = build_prompt(
        company_name,
        headlines
    )

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.2,

        max_tokens=1200

    )

    content = response.choices[0].message.content

    return parse_ai_response(content)