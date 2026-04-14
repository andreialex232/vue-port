<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';

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
                            class="pl-2 py-1 social-btn-shadow flex gap-2 flex-row-reverse items-center" 
                            :href="contact.link"
                            :aria-label="'Contact via ' + contact.name">
                                <span class="block text-sm lg:text-base">{{ contact.description }}</span>
                                <img :src="contact.svg" aria-hidden="true" width="20" height="20" alt="">
                        </a>
                    </div>
                </div>
                <nav class="mt-2 flex flex-row-reverse justify-end gap-2" aria-label="Social profiles">
                    <div 
                        v-for="contact in contactMethods"
                        class="social-btn"
                        :key="contact.name">
                        <a v-if="contact.iconOnly" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           :href="contact.link"
                           :aria-label="contact.name">
                           <img aria-hidden="true" :src="contact.svg" alt="" width="24" height="24">
                        </a>
                    </div>
                </nav>
            </address>
        </section>
    </div>

    <section aria-label="Contact Form" class="mt-12 sm:mt-0 col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 xl:col-start-7 xl:col-end-12">
        <form class="w-full h-full flex flex-col justify-between space-y-4">
            <div class="font-medium w-full field">
                <label class="block w-full mb-1" for="name">Name</label>
                <input class="input-custom w-full" placeholder="Your full name" type="text" id="name" name="name" required>
            </div>

            <div class="font-medium field">
                <label class="block w-full mb-1" for="email">Email</label>
                <input class="input-custom w-full" type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>

            <div class="font-medium field flex-grow flex flex-col">
                <label class="block w-full mb-1" for="message">Message</label>
                <textarea class="input-custom w-full flex-grow" id="message" name="message" rows="3" placeholder="How can I help?" required></textarea>
            </div>

            <button class="btn w-full sm:w-auto mt-2" type="submit">Send Message</button>
        </form>
    </section>
</section>
</template>
<style scoped>

</style>