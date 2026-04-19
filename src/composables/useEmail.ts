import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';
emailjs.init("K__ZfCzMebqB3btfN");

export function useEmail() {
    const emailFeedbackMessage = ref<null | string>(null);
    const sendButtonText = ref<string>('Send Message');

    const formData = reactive({
        name: '',
        email: '',
        message: ''
    });

    const errors = reactive<Record<string, string>>({});

     const validateForm = () => {
        Object.keys(errors).forEach(key => delete errors[key]);
  
            if (!formData.name) {
                errors.name = " - please enter your name";
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                errors.email = " - please enter a valid email address";
            }
            if (formData.message.length < 10) {
                errors.message = " - message must be at least 10 characters.";
            }

        return Object.keys(errors).length === 0;
    }

    const resetForm = () => {
        Object.assign(formData, {
            name: '',
            email: '',
            message: ''
        })
    }

    const formFeedback = (state:string) => {
        if(state === 'try') {
            sendButtonText.value = 'Sending...'
            emailFeedbackMessage.value = null;
        }
        if(state === 'sent') {
            emailFeedbackMessage.value = 'Message sent successfully!'
            sendButtonText.value = 'Message sent!';
        }
        if(state === 'error') {
            emailFeedbackMessage.value = 'Failed to send message. Please try again later';
            sendButtonText.value = "Send Message"
        }
        if(state === 'reset') {
            sendButtonText.value = "Send message";
            emailFeedbackMessage.value = null;
        }
    }

    function sendEmail (modalLogic: () => void):void {
        emailjs.send("service_ivwnctv", "template_lkbdd0h", {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }).then(() => {
            formFeedback('sent')
            resetForm();
            modalLogic();
            setTimeout(() => {
                formFeedback('reset')
            }, 3000);
        }).catch((error) => {
            modalLogic();
            console.error('Email Error', error);
            formFeedback('error');
        })
    }

    return { validateForm, formFeedback, sendEmail, emailFeedbackMessage, formData, sendButtonText, errors }
}

