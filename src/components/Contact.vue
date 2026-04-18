<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';
    import { ScrollTrigger } from 'gsap/all';
    import { onMounted, reactive, ref } from 'vue';
    import gsap from 'gsap';

    gsap.registerPlugin(ScrollTrigger);
    
    // EmailJS setup
    import emailjs from '@emailjs/browser';
    emailjs.init("K__ZfCzMebqB3btfN");

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
        formData.name = '';
        formData.email = '';
        formData.message = '';
    }

    const sendEmail = () => {
        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        emailjs.send("service_ivwnctv", "template_lkbdd0h", {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }).then(() => {
            sendButtonText.value = "Sending...";
            emailFeedbackMessage.value = "Message sent successfully!";
            resetForm();
            console.log("Email sent successfully");
        }).catch((error) => {
            console.error("EmailJS error:", error);
            emailFeedbackMessage.value = "Failed to send message. Please try again later.";
            sendButtonText.value = "Send Message";
        });
    }

    onMounted(() => {
        
    /* console.log("EmailJS is loaded:", !!emailjs); */
        
    })

    const { contactMethods } = useContact()
</script>
<template>
<section aria-labelledby="contact-heading" class="pt-20 pb-20 lg:pt-24 lg:pb-24 bg-secondary text-primary w-dvw font-secondary grid grid-cols-12 items-stretch">
    
    <div class="col-start-2 col-end-12 sm:col-start-2 sm:col-end-6 flex flex-col justify-between">
        <div>
            <h2 id="contact-heading" class="text-5xl lg:text-rest 2xl:text-nume font-secondary font-semibold leading-none">
                Let's <span class="inline sm:block">Connect</span>
            </h2>
            <p class="hidden md:block text-base lg:text-xl md:text-base xl:text-2xl 2xl:text-restrest font-secondary mt-1">
                I'd be delighted to hear from you!
            </p>
        </div>

        <section aria-label="Social Media Links" class="pt-4 lg:pt-8"> <address class="not-italic flex flex-col gap-1"> <div 
                    class="flex"
                    :key="contact.name"
                    v-for="contact in contactMethods">
                    <div v-if="!contact.iconOnly">
                        <a  
                            class="social-btn-shadow flex gap-2 flex-row-reverse items-center" 
                            :href="contact.link"
                            :aria-label="'Contact via ' + contact.name">
                                <span class="block text-sm lg:text-base">{{ contact.description }}</span>
                                <img loading="lazy" :src="contact.svg" aria-hidden="true" width="20" height="20" alt="">
                        </a>
                    </div>
                </div>
                <nav class="mt-2 flex flex-row-reverse justify-end gap-2" aria-label="Social profiles">
                    <div 
                        v-for="(contact, index) in contactMethods"
                        class="social-btn p-0"
                        :key="contact.name">
                        <a v-if="contact.iconOnly" 
                            :class="`icon_${index}`"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            :href="contact.link"
                            :aria-label="contact.name">
                            <img loading="lazy" aria-hidden="true" :src="contact.svg" alt="" width="24" height="24">
                        </a>
                    </div>
                </nav>
            </address>
        </section>
    </div>

    <section aria-label="Contact Form" class="mt-12 sm:mt-0 col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 xl:col-start-7 xl:col-end-12">
        <form @submit.prevent="sendEmail" ref="form" novalidate class="w-full h-full flex flex-col justify-between space-y-4">
            <div class="font-medium w-full field">
                <label class="block w-full mb-1" for="name">Name<span v-if="errors.name" class="text-red-500"> {{ errors.name }}</span></label>
                <input v-model="formData.name" class="rounded-lg input-custom w-full" placeholder="Your full name" type="text" id="name" name="name">
            </div>

            <div class="font-medium field">
                <label class="block w-full mb-1" for="email">Email<span v-if="errors.email" class="text-red-500"> {{ errors.email }}</span></label>
                <input v-model="formData.email" class="rounded-lg input-custom w-full" type="email" id="email" name="email" placeholder="your@email.com">
            </div>

            <div class="font-medium field flex-grow flex flex-col">
                <label class="block w-full mb-1" for="message">Message <span v-if="errors.message" class="text-red-500"> {{ errors.message }}</span></label>
                <textarea v-model="formData.message" class="rounded-lg input-custom w-full flex-grow" id="message" name="message" rows="3" placeholder="How can I help?"></textarea>
            </div>

            <button class="btn w-full sm:w-auto mt-2" type="submit">{{ sendButtonText }}</button>
        </form>
    </section>
</section>
</template>
<style scoped>
    textarea {
        resize: none;
    }
</style>