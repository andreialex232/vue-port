<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';
    import { ref, computed } from 'vue';
    import { useEmail } from '@/composables/useEmail';
    import { enterContactModalAnim, leaveContactModalAnim } from '@/utils/animations';

    const { validateForm, formFeedback, sendEmail, emailFeedbackMessage, formData, errors } = useEmail()
    const { contactMethods } = useContact()
    const showModal = ref(false)
    const isSuccess = computed(() => emailFeedbackMessage.value?.toLowerCase().includes('success'));

    const triggerModal = () => {
        showModal.value = true;
        setTimeout(() => { showModal.value = false; }, 3000);
    };

    const handleSendEmail = () => {
        const isValid = validateForm();
        if (!isValid) return;
        formFeedback('try')
        sendEmail(triggerModal)
    }

/*     onMounted(() => {
        
    console.log("EmailJS is loaded:", !!emailjs);
        
    }) */

    
</script>
<template>
<section aria-labelledby="contact-heading" class="lg:mt-60 mb-30 gsap_contact pt-20 pb-20 lg:pt-24 lg:pb-24 bg-secondary text-primary w-dvw font-secondary grid grid-cols-12 items-stretch">
    
    <div class="col-start-2 col-end-12 sm:col-start-2 sm:col-end-6 flex flex-col justify-between">
        <div>
            <h2 id="contact-heading" class="text-5xl lg:text-rest 2xl:text-nume font-secondary font-semibold leading-none">
                <!-- Let's <span class="inline sm:block">Connect</span> -->
                 {{ $t('contact.heading') }}
            </h2>
            <p class="hidden md:block text-base lg:text-xl md:text-base xl:text-2xl 2xl:text-restrest font-secondary mt-1">
                {{ $t('contact.subheading') }}
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
        <form @submit.prevent="handleSendEmail" ref="form" novalidate class="w-full h-full flex flex-col justify-between space-y-4">
            <div class="font-medium w-full field">
                <label class="block w-full mb-1" for="name">{{ $t('contact.form.labels.name') }}<span v-if="errors.name" class="text-red-500"> &nbsp;-&nbsp; {{ $t('contact.form.validation.nameRequired') }}</span></label>
                <input v-model="formData.name" class="rounded-lg input-custom w-full" :placeholder="$t('contact.form.placeholders.name')" type="text" id="name" name="name">
            </div>

            <div class="font-medium field">
                <label class="block w-full mb-1" for="email">{{ $t('contact.form.labels.email') }}<span v-if="errors.email" class="text-red-500"> &nbsp;-&nbsp; {{ $t('contact.form.validation.emailRequired') }}</span></label>
                <input v-model="formData.email" class="rounded-lg input-custom w-full" type="email" id="email" name="email" :placeholder="$t('contact.form.placeholders.email')">
            </div>

            <div class="font-medium field flex-grow flex flex-col">
                <label class="block w-full mb-1" for="message">{{ $t('contact.form.labels.message') }}<span v-if="errors.message" class="text-red-500"> &nbsp;-&nbsp; {{ $t('contact.form.validation.messageRequired') }}</span></label>
                <textarea v-model="formData.message" class="rounded-lg input-custom w-full flex-grow" id="message" name="message" rows="3" :placeholder="$t('contact.form.placeholders.message')"></textarea>
            </div>

            <!-- <p v-if="emailFeedbackMessage" 
                :class="emailFeedbackMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'" 
                class="text-sm mt-2">
                {{ emailFeedbackMessage }}
            </p> -->

            <button :disabled="isSuccess" class="btn w-full sm:w-auto mt-2" type="submit">{{ isSuccess ? $t('contact.form.button.sending') : $t('contact.form.button.default') }}</button>
            

            <Transition 
                @enter="enterContactModalAnim" 
                @leave="leaveContactModalAnim" 
                :css="false"
            >
                <div 
                v-if="showModal" 
                class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-none"
                >
                <div 
                    class="bg-secondary border-2 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4"
                    :class="isSuccess ? 'border-green-500' : 'border-red-500'"
                >
                    <div 
                    class="w-3 h-3 rounded-full shrink-0"
                    :class="isSuccess ? 'bg-green-500' : 'bg-red-500'"
                    ></div>
                    
                    <div class="flex flex-col">
                    <p class="font-secondary font-bold text-primary uppercase tracking-wider text-xs">
                        {{ isSuccess ? 'Success' : 'Error' }}
                    </p>
                    <p 
                        class="font-primary font-medium text-sm lg:text-base"
                        :class="isSuccess ? 'text-green-500' : 'text-red-500'"
                    >
                        {{ isSuccess ? $t('contact.form.feedback.success') : $t('contact.form.feedback.error') }}
                    </p>
                    </div>
                </div>
                </div>
            </Transition>




        </form>
    </section>
</section>
</template>
<style scoped>
    textarea {
        resize: none;
    }
</style>