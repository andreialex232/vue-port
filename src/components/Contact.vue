<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';

    const { contactMethods } = useContact()
</script>
<template>
    <section class="pt-30 pb-30 lg:pt-10 lg:pb-20 bg-secondary text-primary w-dvw font-secondary grid grid-cols-12 place-items-center">
        <!-- Title -->
        <div class="col-start-2 col-end-12 sm:col-start-2 sm:col-end-6 pb-10 sm:pb-0">
            <div class="md:pb-10">
                <h2 class="text-5xl lg:text-rest 2xl:text-nume font-secondary font-semibold leading-none">
                    Let's <span class="inline sm:block">Connect</span>
                </h2>
                <p class="hidden md:block text-base lg:text-xl md:text-base xl:text-2xl 2xl:text-restrest font-secondary mt-2">I'd be delighted to hear from you!</p>
            </div>

            <!-- Socials -->
            <section class="pt-5 sm:pt-10 lg:pt-20">
                <address class="flex flex-col">
                    <div 
                        class="flex"
                        :key="contact.name"
                        v-for="contact in contactMethods">
                        <div v-if="!contact.iconOnly">
                            <a  
                                class="pl-2 lg:p-2 social-btn-shadow flex gap-2 flex-row-reverse"
                                :href="contact.link">
                                    <p>{{ contact.description }}</p>
                                    <img :src="contact.svg" :aria-hidden="!contact.iconOnly" width="24px" alt="">
                            </a>
                        </div>
                    </div>
                    <div
                        class="mt-4 p-1.5 flex flex-row-reverse justify-end gap-2 lg:gap-3">
                        <div 
                            v-for="contact in contactMethods"
                            class="social-btn">
                                <a v-if="contact.iconOnly" target="_blank" rel="noopener noreferrer" :href="contact.link"><img :aria-hidden=contact.iconOnly :src="contact.svg" alt="{{ contact.name }}" width="28px"></a>
                        </div>
                    </div>
                </address>
            </section>
        </div>
        <!-- Form -->
        <section class="w-[90%] md:w-[calc(100%-2rem)] col-start-2 col-end-12 sm:col-start-7 sm:col-end-12 xl:w-xl 2xl:col-start-7 2xl:col-end-12 xl:col-start-6 xl:col-end-12">
            <form class="w-full space-y-4">
                <div class="font-medium w-full field">
                    <label class="block w-full w-full mb-1" for="name">Name</label>
                    <input class="input-custom" placeholder="Name" type="text" id="name" required>
                </div>

                <div class="font-medium field">
                    <label class="block w-full w-full mb-1" for="email">Email</label>
                    <input class="input-custom" type="email" id="email" placeholder="your@email.com" required>
                </div>

                <div class="font-medium field">
                    <label class="block w-full w-full mb-1" for="message">Message</label>
                    <textarea class="input-custom" id="message" rows="3" placeholder="How can I help?"></textarea>
                </div>

                <button class="btn" type="submit">Send Message</button>
            </form>
        </section>

    </section>
    
</template>
<style scoped>

</style>