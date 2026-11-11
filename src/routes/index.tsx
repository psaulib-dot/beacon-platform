import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Beacon - Academic \u0026 Career Platform for CS Students" }] }),
  staticData: { importedDocument: { html: { "dir": "ltr", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="min-h-screen">
        <ImportedHeader />
        <main>
          <ImportedSectionLightTheWayTo />
          <ImportedSectionAUnifiedWorkspaceFor />
          <ImportedSectionFragmentedToolsMissedPotential />
          <section className="relative py-8 md:py-12" id="cta">
            <div className="mx-auto max-w-5xl px-6">
              <div className={"relative overflow-hidden rounded-3xl \x62order \x62order-border \x62g-card p-10 md:p-16 text-center \x73hadow-card"}>
                <div className={"pointer-events-none absolute \x69nset-x-0 -top-24 h-64 \x62g-beam \x62lur-3xl opacity-70"} />
                <div className={"pointer-events-none absolute inset-0 \x67rid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"} />
                <img className={"relative mx-auto h-16 w-16 rounded-xl object-cover \x72ing-1 \x72ing-border \x73hadow-glow [&]:max-w-none"} style={{ color: "transparent" }} alt="Beacon" loading="lazy" width="991" height="828" decoding="async" src="/site-assets/e55a8be1dd03fb65.webp" />
                <h2 className="relative mt-6 font-display text-4xl md:text-5xl text-balance leading-[1.05]">Ready to navigate your CS journey?</h2>
                <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">Join Beacon and bring your academic plans, technical skills, and career goals into a single guiding light.</p>
                <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                  <a className={"rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition \x73hadow-glow"} href="/auth/login">Create your account</a>
                </div>
              </div>
            </div>
          </section>
          <ImportedSectionTalkToTheBeacon />
        </main>
        <ImportedFooterQuickLinks />
      </div>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-40 w-full flex flex-col \x73hadow-sm"}>
      <div className={"hidden \x6cg:\x62lock bg-primary text-primary-foreground px-4 sm:px-6"}>
        <div className="mx-auto flex py-2 max-w-7xl items-center justify-between">
          <a className="flex items-center gap-3" dir="ltr" href="/">
            <img className={"object-cover h-10 w-10 md:h-14 md:w-14 [&]:max-w-none"} style={{ color: "transparent" }} alt="" width="991" height="828" decoding="async" src="/site-assets/e55a8be1dd03fb65.webp" />
            <span className="font-sans tracking-widest text-primary-foreground text-2xl md:text-3xl font-bold" dir="ltr">Beacon</span>
          </a>
          <div className="flex items-center gap-2.5">
            <a className={"flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-md bg-white text-primary \x68over:\x62g-white/\x390 \x73hadow-sm"} aria-label="Instagram" href="#">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a className={"flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-md bg-white text-primary \x68over:\x62g-white/\x390 \x73hadow-sm"} aria-label="X / Twitter" href="#">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18.244 2H21.5l-7.5 8.575L22.5 22h-6.844l-5.36-6.997L4.16 22H.9l8.02-9.169L1.5 2h7.02l4.85 6.41L18.244 2Zm-1.2 18h1.9L7.05 4H5.05l11.994 16Z" />
              </svg>
            </a>
            <a className={"flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-md bg-white text-primary \x68over:\x62g-white/\x390 \x73hadow-sm"} aria-label="LinkedIn" href="#">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a className={"flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-md bg-white text-primary \x68over:\x62g-white/\x390 \x73hadow-sm"} aria-label="YouTube" href="#">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a className={"flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x73hadow-md bg-white text-primary \x68over:\x62g-white/\x390 \x73hadow-sm"} aria-label="Facebook" href="#">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={"\x62order-b \x62order-border/\x340 \x6dax-lg:\x62g-primary \x6cg:\x62g-background/\x380 \x62ackdrop-blur-lg \x6cg:\x73upports-[\x62ackdrop-filter]:\x62g-background/\x360 px-4 sm:px-6 \x73hadow-[\x30_8px_30px_rgb(\x30,\x30,\x30,\x30.\x304)]"}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={"\x6cg:\x68idden"}>
              <a className="flex items-center gap-2" dir="ltr" href="/">
                <img className={"object-cover h-9 w-9 sm:h-10 sm:w-10 [&]:max-w-none"} style={{ color: "transparent" }} alt="" width="991" height="828" decoding="async" src="/site-assets/e55a8be1dd03fb65.webp" />
                <span className="font-sans text-primary-foreground text-xl font-bold tracking-wide" dir="ltr">Beacon</span>
              </a>
            </div>
            <nav className={"hidden \x6cg:\x66lex items-center gap-8 md:ms-2"} aria-label="Main navigation">
              <a className="relative whitespace-nowrap py-1 text-[14px] font-medium transition-all duration-200 text-primary" href="#home">Home<span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" /></a>
              <a className={"relative whitespace-nowrap py-1 text-[14px] font-medium transition-all duration-200 \x74ext-foreground/\x370 hover:text-foreground"} href="#about">About</a>
              <a className={"relative whitespace-nowrap py-1 text-[14px] font-medium transition-all duration-200 \x74ext-foreground/\x370 hover:text-foreground"} href="#contact">Contact us</a>
              <a className={"relative whitespace-nowrap py-1 text-[14px] font-medium transition-all duration-200 \x74ext-foreground/\x370 hover:text-foreground"} href="#features">Features</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
              <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-200 \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-1 \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 bg-primary text-primary-foreground \x68over:\x62g-primary/\x390 \x61ctive:\x73cale-[\x30.\x398] h-9 text-xs rounded-full px-5 font-medium \x73hadow-sm"} aria-busy="false" aria-disabled="false" href="/auth/login">Sign in</a>
            </div>
            <button className={"\x6cg:\x68idden flex h-9 w-9 items-center justify-center rounded-md transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-primary-foreground/\x340 text-white \x68over:\x62g-primary-foreground/\x310 hover:text-white"} aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
            <button className={"items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide \x62order transition-all duration-200 \x68over:\x73cale-105 \x61ctive:\x73cale-95 hidden \x6cg:\x66lex \x62order-border/\x360 \x74ext-foreground/\x370 hover:text-foreground"} type="button" aria-label="Language" title="Language">
              <svg className="h-3.5 w-3.5 shrink-0 opacity-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="leading-none">العربية</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ImportedSectionLightTheWayTo() {
  return (
    <section className={"relative \x73croll-mt-16 overflow-hidden"} id="home">
      <div className={"absolute inset-0 \x67rid-bg opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_60%)]"} />
      <div className={"pointer-events-none absolute left-1/2 top-0 h-[80vh] w-[120vw] \x2dtranslate-x-1/\x32 opacity-60"}>
        <div className={"absolute left-1/2 top-0 h-full w-[60vw] \x62g-beam \x61nimate-beam \x62lur-3xl"} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-8 md:pt-10 md:pb-10">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-12">
          <div className={"lg:col-span-7 text-center \x6cg:\x74ext-start \x6frder-2 \x6cg:\x6frder-1"}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-balance leading-tight tracking-tight">Light the way to your <span className={"\x62g-gradient-to-br \x66rom-primary \x74o-blue-500 bg-clip-text text-transparent"}>academic</span> and <span className={"\x62g-gradient-to-br \x66rom-primary \x74o-purple-500 bg-clip-text text-transparent"}>career</span> path.</h1>
            <p className="mt-6 max-w-2xl mx-auto text-justify lg:mx-0 text-base md:text-lg text-muted-foreground text-balance leading-relaxed">Beacon is an intelligent web-based platform that unifies academic task management, technical skill tracking, and career preparation for Computer Science students - all in one focused workspace.</p>
            <div className={"mt-8 flex flex-wrap items-center justify-center \x6cg:\x6austify-start gap-3"}>
              <a className={"rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground \x68over:\x62g-primary/\x390 transition-all \x68over:\x2dtranslate-y-0.\x35 \x73hadow-glow \x73hadow-primary/\x330"} href="/auth/login">Start your journey</a>
            </div>
          </div>
          <div className={"lg:col-span-5 \x6frder-1 \x6cg:\x6frder-2"}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className={"relative overflow-hidden rounded-2xl md:rounded-3xl \x72ing-1 \x72ing-border \x73hadow-glow"}>
                <img className={"aspect-[16/10] w-full object-cover \x6fbject-center [&]:max-w-none"} style={{ color: "transparent" }} alt="Computer science student focused on her work with Beacon" width="1280" height="800" decoding="async" src="/site-assets/d0811ae389a924c4.webp" />
              </div>
              <div className={"absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 hidden \x73m:\x62lock w-32 md:w-40 lg:w-48 \x72otate-[\x2d4deg] overflow-hidden rounded-xl md:rounded-2xl \x72ing-1 \x72ing-border \x62g-card \x73hadow-glow"}>
                <img className={"aspect-video w-full object-cover [&]:max-w-none"} style={{ color: "transparent" }} alt="Beacon dashboard preview" loading="lazy" width="960" height="640" decoding="async" src="/site-assets/854705459e4c3cf0.webp" />
              </div>
              <div className={"absolute -top-4 -right-2 sm:-top-6 sm:-right-4 hidden \x6dd:\x66lex items-center gap-2 rounded-full \x62order \x62order-border \x62g-background/\x390 \x62ackdrop-blur px-3 py-2 text-xs font-medium text-foreground \x73hadow-glow"}><span className="h-1.5 w-1.5 rounded-full bg-primary" />Built for CS students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAUnifiedWorkspaceFor() {
  return (
    <section className={"relative \x73croll-mt-16 py-8 md:py-12 overflow-hidden"} id="features">
      <div className={"pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full \x62g-primary/\x35 \x62lur-3xl"} />
      <div className={"pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full \x62g-beam \x62lur-3xl opacity-40"} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className={"inline-flex items-center gap-2 rounded-full \x62order \x62order-primary/\x320 \x62g-primary/\x35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary"}>What Beacon offers</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">A unified workspace for the modern CS student.</h2>
          <p className="mt-4 text-justify text-muted-foreground leading-relaxed">Most students juggle six tools to do one job. Beacon collapses that into a single, focused environment - built around academic, technical, and career growth.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                <path d="M3 10h18" />
                <path d="m16 20 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Academic Task Dashboard</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Centralize assignments, exams, and project deadlines with clear visibility of academic priorities.</p>
          </div>
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Technical Skill Tracking</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Define learning goals and monitor progress across programming languages, frameworks, and dev tools.</p>
          </div>
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Career Preparation</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Structured guidance on career pathways, internships, and industry-aligned skill development.</p>
          </div>
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Academic Support Corner</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Motivational reassurance, study organization, and workload management to sustain healthy habits.</p>
          </div>
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Secure Private Notes</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Record reflections, study plans, and personal learning notes in a private encrypted space.</p>
          </div>
          <div className={"group relative rounded-2xl \x62order \x62order-border/\x350 \x62g-background/\x350 \x62ackdrop-blur-md p-7 \x73hadow-glow transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x330 \x68over:\x62g-card"}>
            <div className={"pointer-events-none absolute \x69nset-x-6 top-0 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent opacity-0 \x67roup-hover:\x6fpacity-100 transition-opacity"} />
            <div className={"flex h-12 w-12 items-center justify-center rounded-xl \x62g-primary/\x310 text-primary \x72ing-1 \x72ing-primary/\x320 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-foreground \x67roup-hover:\x73cale-105 transition-all"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">Authentication &amp; Security</h3>
            <p className="mt-3 text-justify text-sm text-muted-foreground leading-relaxed">Industry-grade authentication ensures protected access and trusted personal data storage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFragmentedToolsMissedPotential() {
  return (
    <section className={"relative \x73croll-mt-16 py-8 md:py-12 overflow-hidden"} id="about">
      <div className={"pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full \x62g-beam \x62lur-3xl opacity-50"} />
      <div className={"pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full \x62g-primary/\x35 \x62lur-3xl"} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className={"relative rounded-3xl \x62order \x62order-border \x62g-card/\x370 \x62ackdrop-blur-sm p-8 md:p-14 \x73hadow-card overflow-hidden"}>
          <div className={"pointer-events-none absolute -top-px left-10 right-10 h-px \x62g-gradient-to-r \x66rom-transparent \x76ia-primary/\x340 \x74o-transparent"} />
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className={"inline-flex items-center gap-2 rounded-full \x62order \x62order-primary/\x320 \x62g-primary/\x35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary"}>The problem</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance leading-[1.1]">Fragmented tools, missed potential.</h2>
              <div className={"mt-8 hidden \x6dd:\x66lex items-center gap-3 text-sm text-muted-foreground"}>
                <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
                <span>Designed for the next decade of CS education.</span>
              </div>
            </div>
            <div className={"md:col-span-7 \x73pace-y-6 text-muted-foreground leading-relaxed text-[15px]"}>
              <p className="text-justify">Computer Science students balance complex academic requirements against rapidly evolving industry expectations. Existing solutions are fragmented - task managers, skill trackers, and career resources rarely speak to each other.</p>
              <p className="text-justify"><span className="text-foreground font-medium">Beacon</span> closes that gap. A centralized dashboard, personalized goal tracking, and structured academic guidance combine into one platform that supports planning, technical growth, and professional readiness across every academic stage.</p>
              <blockquote className={"mt-8 rounded-2xl \x62order-l-2 \x62order-primary \x62g-secondary/\x340 pl-6 pr-4 py-5 font-display text-2xl md:text-3xl text-foreground italic leading-snug"}>“Light the way - from the first assignment to the first internship.”</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionTalkToTheBeacon() {
  return (
    <section className={"relative \x73croll-mt-16 bg-background"} id="contact">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">Talk to the Beacon team.</h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">Questions, partnership ideas, or feedback from your department? Send a note and a real person will reply.</p>
            <ul className={"mt-8 \x73pace-y-4 text-sm"}>
              <li className="flex items-start gap-3">
                <span className={"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg \x62g-primary/\x310 text-primary"}>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">beaconplatformpsu@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className={"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg \x62g-primary/\x310 text-primary"}>
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-foreground">Response time</div>
                  <div className="text-muted-foreground">Usually within 1 business day</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <form className={"rounded-2xl \x62order \x62order-border \x62g-card p-6 md:p-8 \x73hadow-glow"} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-name">Your name</label>
                  <div className="relative">
                    <span className={"pointer-events-none absolute left-3.5 top-1/2 \x2dtranslate-y-1/\x32 \x74ext-muted-foreground/\x370"}>
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input className={"w-full rounded-lg \x62order bg-background pl-10 pr-4 py-3 text-sm text-foreground \x70laceholder:\x74ext-muted-foreground/\x350 transition-all duration-200 \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x330 \x66ocus:\x62order-primary \x62order-border \x68over:\x62order-border/\x380"} id="contact-name" autoComplete="name" placeholder="Ghada Salem" type="text" defaultValue="" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-email">Email</label>
                  <div className="relative">
                    <span className={"pointer-events-none absolute left-3.5 top-1/2 \x2dtranslate-y-1/\x32 \x74ext-muted-foreground/\x370"}>
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                    </span>
                    <input className={"w-full rounded-lg \x62order bg-background pl-10 pr-4 py-3 text-sm text-foreground \x70laceholder:\x74ext-muted-foreground/\x350 transition-all duration-200 \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x330 \x66ocus:\x62order-primary \x62order-border \x68over:\x62order-border/\x380"} id="contact-email" autoComplete="email" placeholder="ghadastudent@gmail.com" type="email" defaultValue="" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-message">Message</label>
                <textarea className={"w-full resize-none rounded-lg \x62order bg-background px-4 py-3 text-sm text-foreground \x70laceholder:\x74ext-muted-foreground/\x350 transition-all duration-200 \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-primary/\x330 \x66ocus:\x62order-primary \x62order-border \x68over:\x62order-border/\x380"} id="contact-message" rows={5} placeholder="Tell us a bit about what you're looking for…" />
              </div>
              <div className="mt-6 flex justify-center">
                <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer duration-200 \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-1 \x64isabled:\x70ointer-events-none [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x73hadow \x61ctive:\x73cale-[\x30.\x398] rounded-lg px-7 py-3 h-auto text-sm font-semibold bg-primary text-primary-foreground \x73hadow-glow transition \x68over:\x62g-primary/\x390 disabled:opacity-100 \x64isabled:\x63ursor-not-allowed disabled:bg-primary disabled:text-primary-foreground"} disabled aria-busy="false" aria-disabled="true" type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterQuickLinks() {
  return (
    <footer className="relative bg-primary text-primary-foreground pt-8 pb-6 mt-16">
      <div className="absolute bottom-full left-0 w-full overflow-hidden leading-[0] -mb-[1px]">
        <svg className="w-full h-[50px] md:h-[80px] block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className={"\x66ill-primary"} d="M0,120 L0,0 Q600,120 1200,0 L1200,120 Z" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <img className={"h-16 w-16 object-cover rounded-full \x62g-white/\x310 shrink-0 [&]:max-w-none"} alt="Logo" src="/site-assets/e55a8be1dd03fb65.webp" />
              <div className="font-sans font-bold text-2xl tracking-widest">Beacon</div>
            </div>
            <p className={"mt-5 max-w-sm text-sm leading-relaxed \x74ext-white/\x370"}>Beacon brings personal learning, skill development, projects, and career preparation into one focused workspace.</p>
          </div>
          <div>
            <h2 className={"text-base font-semibold text-white \x62order-b \x62order-white/\x320 pb-2 inline-block min-w-[120px]"}>Quick Links</h2>
            <ul className={"mt-5 \x73pace-y-3 text-sm \x74ext-white/\x380"}>
              <li className="group flex items-center gap-2">
                <span className={"h-1 w-1 rounded-full \x62g-primary-foreground/\x350 shrink-0"} />
                <a className={"transition-all duration-200 hover:text-primary-foreground \x6ctr:\x67roup-hover:\x74ranslate-x-1 \x72tl:\x67roup-hover:\x2dtranslate-x-1 block"} href="#home">Home</a>
              </li>
              <li className="group flex items-center gap-2">
                <span className={"h-1 w-1 rounded-full \x62g-primary-foreground/\x350 shrink-0"} />
                <a className={"transition-all duration-200 hover:text-primary-foreground \x6ctr:\x67roup-hover:\x74ranslate-x-1 \x72tl:\x67roup-hover:\x2dtranslate-x-1 block"} href="#about">About</a>
              </li>
              <li className="group flex items-center gap-2">
                <span className={"h-1 w-1 rounded-full \x62g-primary-foreground/\x350 shrink-0"} />
                <a className={"transition-all duration-200 hover:text-primary-foreground \x6ctr:\x67roup-hover:\x74ranslate-x-1 \x72tl:\x67roup-hover:\x2dtranslate-x-1 block"} href="#contact">Contact us</a>
              </li>
              <li className="group flex items-center gap-2">
                <span className={"h-1 w-1 rounded-full \x62g-primary-foreground/\x350 shrink-0"} />
                <a className={"transition-all duration-200 hover:text-primary-foreground \x6ctr:\x67roup-hover:\x74ranslate-x-1 \x72tl:\x67roup-hover:\x2dtranslate-x-1 block"} href="#features">Features</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={"text-base font-semibold text-white \x62order-b \x62order-white/\x320 pb-2 inline-block min-w-[120px]"}>Contact Us</h2>
            <div className={"mt-5 flex flex-col gap-4 text-sm \x74ext-white/\x380"}>
              <div className="flex items-center gap-3">
                <svg className={"w-5 h-5 \x74ext-white/\x370 shrink-0"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <span className={"\x74ext-white/\x390"}>00967777240900</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className={"w-5 h-5 \x74ext-white/\x370 shrink-0"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <span className={"\x74ext-white/\x390"}>beaconplatformpsu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center items-center gap-5">
          <a className={"bg-white text-primary rounded-full p-3 hover:bg-white \x68over:\x73cale-110 transition-all \x73hadow-md \x68over:\x73hadow-lg"} href="#" title="X">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.575L22.5 22h-6.844l-5.36-6.997L4.16 22H.9l8.02-9.169L1.5 2h7.02l4.85 6.41L18.244 2Zm-1.2 18h1.9L7.05 4H5.05l11.994 16Z" />
            </svg>
          </a>
          <a className={"bg-white text-primary rounded-full p-3 hover:bg-white \x68over:\x73cale-110 transition-all \x73hadow-md \x68over:\x73hadow-lg"} href="#" title="LinkedIn">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a className={"bg-white text-primary rounded-full p-3 hover:bg-white \x68over:\x73cale-110 transition-all \x73hadow-md \x68over:\x73hadow-lg"} href="#" title="YouTube">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
          <a className={"bg-white text-primary rounded-full p-3 hover:bg-white \x68over:\x73cale-110 transition-all \x73hadow-md \x68over:\x73hadow-lg"} href="#" title="Facebook">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a className={"bg-white text-primary rounded-full p-3 hover:bg-white \x68over:\x73cale-110 transition-all \x73hadow-md \x68over:\x73hadow-lg"} href="#" title="Instagram">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
        <div className={"mt-8 \x62order-t \x62order-white/\x310 pt-6 flex flex-col items-center text-center"}>
          <p className={"text-xs \x74ext-white/\x350"}>© 2026 Beacon - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
