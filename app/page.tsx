import { Container } from "./components/Container";
import Link from "next/link";
import { profile, kpis, skillGroups, experience, projects } from "./data/profile";
import { CountUp } from "./components/CountUp";
import { RadarChart } from "./components/RadarChart";
import { Reveal } from "./components/Reveal";
import { PortfolioShell } from "./components/PortfolioShell";
import { SectionPanel } from "./components/SectionPanel";
import { HeroName } from "./components/HeroName";
import { Timeline, TimelineItem } from "./components/Timeline";
import { EducationCard } from "./components/EducationCard";
import { IconGitHub, IconLinkedIn, IconMail } from "./components/Icons";

export default function Home() {
  return (
    <PortfolioShell>
      <div id="top" className="min-h-full">
        <main>
          <section className="border-b border-[color:var(--border)]">
            <Container>
              <div className="py-16 sm:py-20">
                <Reveal>
                  <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
                    <div>
                      <HeroName />

                      <div className="mt-8">
                        <Link
                          href="#projects"
                          className="nav-cta inline-flex items-center justify-center gap-2 rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-3 text-sm font-medium text-white/90"
                        >
                          <span
                            className="nav-link__dot nav-link__dot--active scale-75"
                            aria-hidden
                          />
                          View My Work
                        </Link>
                      </div>
                    </div>

                    <div className="surface surface-hover rounded-2xl p-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word">
                        Snapshot
                      </p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {kpis.map((k) => (
                          <div
                            key={k.label}
                            className="surface surface-hover rounded-xl p-4"
                          >
                            <p className="font-mono text-xs text-white/55 hover-word">
                              {k.label}
                            </p>
                            <p className="metric-hover mt-2 text-2xl font-semibold text-[color:var(--accent)] transition-all duration-200">
                              <CountUp value={k.value} suffix={k.suffix} />
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>

          <Container className="relative lg:pl-2 xl:pr-14">
            <SectionPanel id="about">
              <Reveal>
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                      About
                    </p>
                    <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {profile.about.headline}
                    </h2>
                    <div className="mt-4 max-w-2xl space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                      {profile.about.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <RadarChart />
                </div>
              </Reveal>
            </SectionPanel>

            <SectionPanel id="skills">
              <Reveal>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                      Skills
                    </p>
                    <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Tooling, grouped like a stack
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {skillGroups.map((g) => (
                    <div key={g.title} className="surface surface-hover rounded-2xl p-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word">
                        {g.title}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {g.items.map((s) => (
                          <span key={s} className="chip rounded-md px-3 py-1.5 text-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </SectionPanel>

            <SectionPanel id="projects">
              <Reveal>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                      Projects
                    </p>
                    <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Portfolio work (impact-first)
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {projects.map((p) => (
                    <article
                      key={p.title}
                      className="project-card surface rounded-2xl p-6"
                    >
                      <h3 className="hover-word text-lg font-semibold leading-snug">
                        {p.title}
                      </h3>

                      <p className="metric-hover mt-4 font-mono text-2xl font-semibold text-[color:var(--accent)] transition-all duration-200">
                        {p.metric}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/70">{p.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span key={t} className="chip rounded-md px-2.5 py-1 text-xs">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <span className="hover-word inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/55">
                          View Details{" "}
                          <span className="text-[color:var(--accent)]">→</span>
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
            </SectionPanel>

            <SectionPanel id="experience">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                  Experience
                </p>
                <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Timeline
                </h2>

                <div className="mt-8">
                  <Timeline>
                    {experience.map((e, i) => (
                      <TimelineItem
                        key={e.company + e.role}
                        side={i % 2 === 0 ? "left" : "right"}
                        title={e.role}
                        subtitle={e.company}
                        companyUrl={e.companyUrl}
                        dates={e.dates}
                      >
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-white/70">
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </div>
              </Reveal>
            </SectionPanel>

            <SectionPanel id="education">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                  Education
                </p>
                <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Academic
                </h2>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {profile.education.map((ed) => (
                    <EducationCard
                      key={ed.school}
                      school={ed.school}
                      degree={ed.degree}
                      meta={ed.meta}
                      transcriptSrc={ed.transcriptSrc}
                    />
                  ))}
                </div>
              </Reveal>
            </SectionPanel>

            <SectionPanel id="contact">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-white/55 hover-word hover-word--alt">
                  Contact
                </p>
                <h2 className="hover-word mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Let’s connect
                </h2>
                <div className="mt-4 surface rounded-xl px-4 py-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--accent)]">
                    Recruiter note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {profile.openTo}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                    Location
                  </span>
                  <span>{profile.location}</span>
                  <span className="text-white/30">·</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover-word text-[color:var(--accent)]"
                  >
                    {profile.email}
                  </a>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <a
                    className="surface surface-hover flex flex-col gap-2 rounded-2xl p-5 text-white/85"
                    href={`mailto:${profile.email}`}
                  >
                    <span className="text-[color:var(--accent)]">
                      <IconMail />
                    </span>
                    <span className="font-mono text-sm font-medium">Email</span>
                    <span className="text-xs text-white/50 break-all">
                      {profile.email}
                    </span>
                  </a>
                  <a
                    className="surface surface-hover flex flex-col gap-2 rounded-2xl p-5 text-white/85"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[color:var(--highlight)]">
                      <IconLinkedIn />
                    </span>
                    <span className="font-mono text-sm font-medium">LinkedIn</span>
                    <span className="text-xs text-white/50 break-all">
                      {profile.linkedinDisplay}
                    </span>
                  </a>
                  <a
                    className="surface surface-hover flex flex-col gap-2 rounded-2xl p-5 text-white/85"
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[color:var(--accent)]">
                      <IconGitHub />
                    </span>
                    <span className="font-mono text-sm font-medium">GitHub</span>
                    <span className="text-xs text-white/50 break-all">
                      {profile.githubDisplay}
                    </span>
                  </a>
                  <a
                    className="surface surface-hover flex flex-col gap-2 rounded-2xl p-5 text-white/85"
                    href={profile.resumeSrc}
                    download
                  >
                    <span className="font-mono text-2xl text-[color:var(--accent)]" aria-hidden>
                      ↓
                    </span>
                    <span className="font-mono text-sm font-medium">
                      Download Resume
                    </span>
                    <span className="text-xs text-white/50">PDF</span>
                  </a>
                </div>

                <footer className="mt-12 border-t border-[color:var(--border)] pt-8 text-sm text-white/50">
                  © {new Date().getFullYear()} {profile.name}
                </footer>
              </Reveal>
            </SectionPanel>
          </Container>
        </main>
      </div>
    </PortfolioShell>
  );
}
