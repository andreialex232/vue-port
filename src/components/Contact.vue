<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';

    const { contactMethods } = useContact()
</script>
<template>
    <section class="pt-10 pb-10 bg-secondary text-primary w-dvw font-secondary grid grid-cols-12 place-items-center">
        <!-- Title -->
        <div class="col-start-2 col-end-6">
            <div>
                <h2 class="text-nume font-secondary font-semibold text-4xl leading-none">
                    Let's <br>Connect
                </h2>
                <p class="text-restrest font-secondary mt-2">I'd be delighted to hear from you!</p>
            </div>

            <!-- Socials -->
            <section class="pt-20">
                <address class="flex flex-col">
                    <div 
                        class="flex"
                        :key="contact.name"
                        v-for="contact in contactMethods">
                        <div v-if="!contact.iconOnly">
                            <a  
                                class="p-2 social-btn-shadow flex gap-2 flex-row-reverse"
                                :href="contact.link">
                                    <p>{{ contact.description }}</p>
                                    <img :src="contact.svg" :aria-hidden="!contact.iconOnly" width="24px" alt="">
                            </a>
                        </div>
                    </div>
                    <div
                        class="mt-4 p-1.5 flex flex-row-reverse justify-end gap-3">
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
        <section class="w-2xl col-start-7 col-end-12 ">
            <form class="w-full space-y-4 ">
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
                    <textarea class="input-custom" id="message" rows="5" placeholder="How can I help?"></textarea>
                </div>

                <button class="btn" type="submit">Send Message</button>
            </form>
        </section>

    </section>
    
</template>
<style scoped>

</style>