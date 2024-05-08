Abstruct :
This project focuses on developing a medical chatbot by fine-tuning the llama2-7b language model with a custom dataset sourced from the Gale Encyclopedia on alternative medicine. Leveraging Hugging Face's Transformer library, LoRA (Low Rank Adaptation) and QLoRA (Quantized Low Rank Adaptation) techniques are employed for parameter-efficient fine-tuning. LoRA enhances the fine-tuning process by optimizing smaller matrices that approximate the weight matrix of the pretrained model, while QLoRA further improves memory efficiency by utilizing quantized 4-bit weights. The Hugging Face PEFT (Parameter Efficient Fine-Tuning) and TRL (Transformer Reinforcement Learning) libraries are utilized for implementation, facilitating seamless integration and efficient training. The project aims to create a coherent and effective medical chatbot capable of providing accurate information and assistance in the realm of alternative medicine.
