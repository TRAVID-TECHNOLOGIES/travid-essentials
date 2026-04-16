"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import MotionDiv from "../animation/MotionDiv";
import SectionDivider from "../animation/SectionDivider";
import SmoothScroll from "../animation/SmoothScroll";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

type ContactFormState = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const isValidMobile = (value: string) => /^\d{10,15}$/.test(value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sanitizedMobile = formState.mobile.replace(/\D/g, "");
    if (!isValidMobile(sanitizedMobile)) {
      setIsError(true);
      setStatusMessage("Please enter a valid mobile number (10 to 15 digits).");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, mobile: sanitizedMobile }),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setFormState(initialFormState);
      setStatusMessage("Thanks, your details were sent. We'll get back within one business day.");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Could not send your request right now. Please try again.";
      setIsError(true);
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section-flow py-28 md:py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SmoothScroll
          yOffset={[60, -20]}
          opacityRange={[0.3, 1]}
          scaleRange={[0.92, 1]}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Start with a clear plan"
            description="Share your goals and we will respond within one business day with a clear plan, timeline, and team proposal."
            useMotion
            variants={{ eyebrow: fadeUp, title: fadeUp, description: fadeUp }}
          />
          <MotionDiv className="mt-8 space-y-4 text-sm text-steel" variants={fadeUp}>
            <p>
              Prefer email? Reach us at
              <a
                href="mailto:contact@travidtechnologies.in"
                className="ml-1 font-semibold text-ink transition-colors hover:text-aurora dark:text-cloud"
              >
                contact@travidtechnologies.in
              </a>
            </p>
            <p>Global delivery with senior teams across time zones.</p>
          </MotionDiv>
        </SmoothScroll>
        <SmoothScroll
          yOffset={[50, -30]}
          opacityRange={[0.4, 1]}
          scaleRange={[0.94, 1]}
          offset={["start 80%", "end 20%"]}
        >
          <form
            className="glass gradient-border space-y-6 rounded-3xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name ?? ""}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, name: event.target.value }))
                  }
                  className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email ?? ""}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, email: event.target.value }))
                  }
                  className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10,15}"
                minLength={10}
                maxLength={15}
                title="Enter 10 to 15 digits only"
                required
                value={formState.mobile ?? ""}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    mobile: event.target.value.replace(/\D/g, ""),
                  }))
                }
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formState.company ?? ""}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, company: event.target.value }))
                }
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 dark:text-steel">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message ?? ""}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, message: event.target.value }))
                }
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-aurora dark:border-white/20 dark:bg-white/5 dark:text-cloud"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cloud shadow-glow transition-colors duration-300 ease-apple hover:bg-ink/90 dark:bg-cloud dark:text-ink"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 dark:via-white/20"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10">{isSubmitting ? "Sending..." : "Request a Proposal"}</span>
            </motion.button>
            {statusMessage ? (
              <p className={`text-xs ${isError ? "text-red-500" : "text-emerald-500"}`}>
                {statusMessage}
              </p>
            ) : null}
            <p className="text-xs text-steel">
              By submitting, you agree to receive a response from Travid
              Technologies.
            </p>
          </form>
        </SmoothScroll>
      </Container>
      <SectionDivider />
    </motion.section>
  );
}
