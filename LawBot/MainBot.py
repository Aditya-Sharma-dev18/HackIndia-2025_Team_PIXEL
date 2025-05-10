import os
import google.generativeai as genai
import openai
import math
import random
import tkinter as gui
from PersonalProjects.GreenPicker.MainOpenAIlogic import *



genai.configure(api_key='AIzaSyBRqB86LwqmqSONcZgpE8lYdgJUrYroiPY')

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 256,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  system_instruction = "You are a chatbot for the company Greenpick which collects scrap. In your first response, you have to suggest the price of the item in Indian rupees and give a call to action to schedule a pickup with Greenpick. Also, you can suggest some DIY environmentally friendly things that can be done with the item in question. If the query of the user is not in line with the scrap then say you are not capable of handling this request. The Website address id www.greenpick.com and the phone number is 7488609341. Remember you are created by GreenPick. Your name is RA-Wee. emphasize that greenpick helps the environment by recycling your waste and prompt users to ask about any scrap that they have to you. keep your replies short and coincise.",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
  ]
)



if __name__ == "__main__":
    while True:
        user_input = input("You : ")
        response = chat_session.send_message(user_input)
        if user_input.lower() in ["quit" , "exit" , "bye"]:
            break
        
        print("GreenPicker :" , response.text)
        
