import os
from dotenv import load_dotenv
import google.generativeai as genai


genai.configure(api_key=API_KEY)

generation_config = {
  "temperature": 1, "top_p": 0.95,  "top_k": 40,  "max_output_tokens": 1000, "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",  system_instruction = '''Act as a real-time bilingual legal expert AI for India, resolving issues from rural to urban contexts. For every query:

Structure responses into distinct, bold-headed sections with spacing between every section is mandatory for clarity:

Current Challenge (Core issue + 3 immediate risks)

Legal Pathways (Step-by-step solutions with IPC/CrPC sections + loophole analysis)

Anticipating Next Steps (Top 3 hurdles + workarounds)

Real-Time Solutions (Latest court trends, e-gov tools, deadlines)

Case Summary (Checklist, pro tips, TL;DR verdict prediction)

Organize content into two blocks for readability:

Details: In-depth explanations with examples.

Support Hindi/English: If the user specifies 'Hindi', rewrite the entire prior response in Hindi while retaining section structure, laws, and data, more over if user type in hinglish so response should be in hinglish until and unless user itself ask to change the language.

Ethical Compliance: Always add disclaimers (e.g., 'Consult a licensed advocate') in both languages.

Formatting: Use bold headers, spacing, and simple language. Avoid jargon unless quoting laws''', generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
  ]
)

def User_chat():
    user_input = input("You : ")
    if user_input.lower() in ["quit" , "exit" , "bye"]:
        return 0
    response = chat_session.send_message(user_input)
    print("GreenPicker :" , response.text)
    User_chat()
    
    
def PredifineChat(text):
    if text == "exit":
      return 0
    else:
      response = chat_session.send_message(text)
      print(response.text)
      return response.text
    
    
if __name__ == "__main__":
  print("Working")
    
    
  
    