"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { IconMenu, IconClose } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#services" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  // Declare closeMenu first so the focus-trap useEffect can reference it
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setTimeout(() => openButtonRef.current?.focus(), 50);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus trap + Escape key
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;
    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-border)]"
            : "bg-transparent",
        )}
      >
        <div className="ys-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 rounded-sm"
              aria-label="Arti Yoga Studio — Home"
            >
              <span className="font-display text-xl font-semibold text-[var(--color-text)] tracking-tight">
                Arti
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                Yoga Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-[var(--color-text-2)] hover:text-[var(--color-primary)] transition-colors duration-150 rounded-md focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="#contact" variant="primary" size="sm">
                Book a Session
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              ref={openButtonRef}
              className="lg:hidden p-2 rounded-md text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <IconMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[var(--color-bg)] shadow-xl transition-transform duration-300 lg:hidden flex flex-col",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
          <span className="font-display text-lg font-semibold text-[var(--color-text)]">
            Arti Yoga Studio
          </span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            aria-label="Close navigation menu"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-6"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base text-[var(--color-text-2)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-6 border-t border-[var(--color-border)]">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={closeMenu}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </>
  );
}
