import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Contact | Nordic & Arctic Travel Designer",
  description: "Ready to design your Nordic journey? Get in touch to start a conversation about your bespoke travel experience.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
