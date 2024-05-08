# Abstruct :
This project focuses on developing a medical chatbot by fine-tuning the llama2-7b language model with a custom dataset sourced from the Gale Encyclopedia on alternative medicine. Leveraging Hugging Face's Transformer library, LoRA (Low Rank Adaptation) and QLoRA (Quantized Low Rank Adaptation) techniques are employed for parameter-efficient fine-tuning. LoRA enhances the fine-tuning process by optimizing smaller matrices that approximate the weight matrix of the pretrained model, while QLoRA further improves memory efficiency by utilizing quantized 4-bit weights. The Hugging Face PEFT (Parameter Efficient Fine-Tuning) and TRL (Transformer Reinforcement Learning) libraries are utilized for implementation, facilitating seamless integration and efficient training. The project aims to create a coherent and effective medical chatbot capable of providing accurate information and assistance in the realm of alternative medicine.

Our project presentation : https://youtu.be/cZMnhQkQdtA?si=u-zxJu4YpxxgIM2Y  
# Project setup :
## Open Google Colab:  
Navigate to Google Colab in your web browser.  
## Upload Notebook:  
Click on File -> Upload Notebook.  
Select the "Fine_tune_Llama_2_colab_final.ipynb" file from your local system and upload it.  
## Select a GPU:  
Navigate to the notebook menu and click on Runtime.  
Then, select Change runtime type.  
In the dropdown menu for Hardware accelerator, choose GPU.  
Click Save.  
## Run the Notebook:  
Simply run the notebook cells by clicking the play button on each code cell, or use Ctrl + Enter to run the currently selected cell.  
This will execute the code within the notebook.  


## Dataset
![Dataset](Images/Screenshot%202024-04-22%20115603.png)
## Training
![Training](Images/Screenshot%202024-04-22%20110903.png)
## Training loss
![Training loss](Images/Screenshot%202024-04-21%20010528.png)
## Learning rate
![Learning rate](Images/Screenshot%202024-04-22%20133205.png)
## Question answering
![Inference](Images/Screenshot%202024-04-22%20111001.png)
![Inference](Images/Screenshot%202024-04-22%20111030.png)


