import os
from openai import OpenAI 
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Initialize OpenAI
openai = OpenAI(api_key=api_key)

def GreenPicker(prompt):
    messages = {
        "role": "user", 
        "content": prompt
    }
    response = openai.chat.completions.create(
        messages=[messages],
        model="gpt-4o-mini",
    )
    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break
        
        response = GreenPicker(user_input)
        print("GreenPicker:", response)
