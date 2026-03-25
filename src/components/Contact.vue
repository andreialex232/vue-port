<script setup lang="ts">
    import { useContact } from '@/composables/useContact.ts';

    const { contactMethods } = useContact()
</script>
<template>
    <section class="border bg-secondary text-primary h-dvh w-dvw font-secondary grid grid-cols-12 place-items-center">
        <!-- Title -->
        <div class="col-start-2 col-end-6">
            <div>
                <h2 class="leading-[1.25em] text-nume font-primary font-semibold">
                    Let's get in touch
                </h2>
                <p class="text-restrest font-primary">I'd love to hear from you</p>
            </div>

            <!-- Socials -->
            <section class="pt-20">
                <address class="flex flex-col gap-1.5">
                    <div 
                        class="flex"
                        :key="contact.name"
                        v-for="contact in contactMethods">
                        <div v-if="!contact.iconOnly">
                            <a  
                                class="flex gap-2 flex-row-reverse"
                                :href="contact.link">
                                    <p>{{ contact.description }}</p>
                                    <img :src="contact.svg" :aria-hidden="!contact.iconOnly" width="24px" alt="">
                            </a>
                        </div>
                    </div>
                    <div
                        class="flex flex-row-reverse justify-end gap-3">
                        <div 
                            v-for="contact in contactMethods"
                            class="">
                                <a v-if="contact.iconOnly" target="_blank" rel="noopener noreferrer" :href="contact.link"><img :aria-hidden=contact.iconOnly :src="contact.svg" alt="{{ contact.name }}" width="30px"></a>
                        </div>
                    </div>
                </address>
            </section>
        </div>
        <!-- Form -->
        <section class="w-full col-start-7 col-end-12">
            <form class="w-full space-y-4 ">
                <div class="w-full field">
                    <label class="block w-full w-full" for="name">Name</label>
                    <input class="border border-[#C0C0C0] block w-full pt-2 pb-2" type="text" id="name" required>
                </div>

                <div class="field">
                    <label for="email">Email</label>
                    <input class="block w-full pt-2 pb-2" type="email" id="email" placeholder="your@email.com" required>
                </div>

                <div class="">
                    <label for="message">Message</label>
                    <textarea class="block w-full pt-2 pb-2" id="message" rows="5" placeholder="How can I help?"></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>

    </section>
    
</template>
<style scoped>

</style>