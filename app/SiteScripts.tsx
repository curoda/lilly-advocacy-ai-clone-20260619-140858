"use client";

import { useEffect } from "react";

// Faithful re-implementation of the original inline <script> on
// events.helloeiko.com/lilly-advocacy-ai. Behaviour and DOM hooks are kept
// identical; it is run inside a useEffect so it executes after hydration.
export default function SiteScripts() {
  useEffect(() => {
    // nav shadow on scroll
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    // fade-up reveal (respects reduced motion)
    // The original used an IntersectionObserver that revealed elements as they
    // entered the viewport. That is timing-sensitive under React hydration (an
    // element scrolled past before the observer attaches can stay hidden). This
    // scroll-based reveal is visually identical (each .fade-up still fades in as
    // it crosses ~88% of the viewport) but re-checks every element on each
    // scroll, so nothing can ever get stuck hidden.
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeEls = Array.from(document.querySelectorAll(".fade-up"));
    let revealHandler: (() => void) | null = null;
    if (prefersReduced) {
      fadeEls.forEach(function (el) {
        el.classList.add("show");
      });
    } else {
      const reveal = function () {
        fadeEls.forEach(function (el) {
          if (el.classList.contains("show")) return;
          if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
            el.classList.add("show");
          }
        });
      };
      revealHandler = reveal;
      reveal();
      window.addEventListener("scroll", reveal, { passive: true });
      window.addEventListener("resize", reveal);
      // re-check shortly after load in case images/layout shift
      setTimeout(reveal, 200);
    }

    // Mobile menu toggle (accessible: aria-expanded, accessible name, Escape to close)
    const mbtn = document.getElementById("mobile-menu-btn");
    const mlinks = document.getElementById("nav-links");
    const mlinkItems = document.querySelectorAll(".mlink");
    function closeMenu() {
      if (!mlinks) return;
      mlinks.classList.remove("mobile-open");
      if (mbtn) {
        mbtn.setAttribute("aria-expanded", "false");
        mbtn.setAttribute("aria-label", "Open menu");
      }
    }
    function openMenu() {
      if (!mlinks) return;
      mlinks.classList.add("mobile-open");
      if (mbtn) {
        mbtn.setAttribute("aria-expanded", "true");
        mbtn.setAttribute("aria-label", "Close menu");
      }
    }
    const onMbtnClick = function () {
      if (mlinks && mlinks.classList.contains("mobile-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    };
    const onKeydown = function (e: KeyboardEvent) {
      if (
        e.key === "Escape" &&
        mlinks &&
        mlinks.classList.contains("mobile-open")
      ) {
        closeMenu();
        if (mbtn) mbtn.focus();
      }
    };
    if (mbtn && mlinks) {
      mbtn.addEventListener("click", onMbtnClick);
      mlinkItems.forEach(function (item) {
        item.addEventListener("click", closeMenu);
      });
      document.addEventListener("keydown", onKeydown);
    }

    // Ask form submission (Resend via serverless /api/contact)
    const askForm = document.getElementById("ask-form") as HTMLFormElement | null;
    const onSubmit = async function (e: Event) {
      e.preventDefault();
      const btn = document.getElementById("ask-submit") as HTMLButtonElement;
      const statusEl = document.getElementById("ask-status") as HTMLElement;
      btn.disabled = true;
      btn.textContent = "Sending...";
      statusEl.removeAttribute("data-state");
      statusEl.textContent = "";
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: (document.getElementById("ask-name") as HTMLInputElement).value,
            email: (document.getElementById("ask-email") as HTMLInputElement)
              .value,
            question: (
              document.getElementById("ask-question") as HTMLTextAreaElement
            ).value,
          }),
        });
        if (res.ok) {
          askForm && askForm.reset();
          statusEl.setAttribute("data-state", "success");
          statusEl.textContent =
            "Thanks. Your question has been sent. We will get back to you soon.";
        } else {
          throw new Error("Request failed");
        }
      } catch (err) {
        statusEl.setAttribute("data-state", "error");
        statusEl.textContent =
          "Sorry, something went wrong and your question was not sent. Please try again, or email curt@helloeiko.com.";
      } finally {
        btn.disabled = false;
        btn.textContent = "Send question";
      }
    };
    if (askForm) {
      askForm.addEventListener("submit", onSubmit);
    }

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (revealHandler) {
        window.removeEventListener("scroll", revealHandler);
        window.removeEventListener("resize", revealHandler);
      }
      if (mbtn) mbtn.removeEventListener("click", onMbtnClick);
      mlinkItems.forEach(function (item) {
        item.removeEventListener("click", closeMenu);
      });
      document.removeEventListener("keydown", onKeydown);
      if (askForm) askForm.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
