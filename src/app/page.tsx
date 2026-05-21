import Link from "next/link";
import Reveal from "@/components/Reveal";
import FallingAngel from "@/components/FallingAngel";
import Spikes from "@/components/Spikes";
import MakerAvatar from "@/components/MakerAvatar";
import { TOMES, LESSONS } from "@/lib/content";

export default function Home() {
  return (
    <main className="shell">
      {/* ===================== POSTER COVER ===================== */}
      <section className="cover">
        <Reveal>
          <div className="cover-tag">
            <span>The Chance Lab · <b>Issue 01</b></span>
            <span>確率 · 運命 · 審判</span>
            <span>₹ 0 · <b>forever</b></span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="poster">
            <span className="sparkle s1">✦</span>
            <span className="sparkle s2">✦</span>
            <span className="sparkle s3">✧</span>
            <span className="sparkle s4">✧</span>

            <div className="poster-top"><span className="ln" /> probability &amp; statistics <span className="ln r" /></div>
            <h1 className="poster-title">CHANCE</h1>
            <div className="poster-jp">確 率 論</div>

            <div className="poster-mid">
              <div className="caption caption-l">
                <span className="lead">The Fallen.</span>
                Once she governed certainty itself. Cast down for the sin of doubt, she now drifts through every wager, every ruin, and every roll of the die.
              </div>

              <div className="frame">
                <div className="frame-inner">
                  <Spikes className="spikes" />
                  <FallingAngel className="angel" />
                </div>
                <span className="fr-label">the fallen · 堕天使</span>
              </div>

              <div className="caption caption-r">
                <span className="lead">Made playable.</span>
                Twenty-two rites of fortune — counting, probability, the bell, the law of large numbers — each one rendered as something you can poke, slide and judge.
              </div>
            </div>

            <div className="banner"><span className="x">✦</span> alea iacta est <span className="x">✦</span></div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="hero-cta">
            <Link className="btn btn-blood" href="/codex/probability">Open the Issue →</Link>
            <Link className="btn btn-ghost" href="/codex/bayes">The Cover Story: Bayes</Link>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="ribbon">
            <div className="st"><div className="n">VII</div><div className="l">tomes</div></div>
            <div className="st"><div className="n">22</div><div className="l">rites · all live</div></div>
            <div className="st"><div className="n">JEE</div><div className="l">+ A-Level vaults</div></div>
            <div className="st"><div className="n">∞</div><div className="l">casts of the die</div></div>
          </div>
        </Reveal>
      </section>

      {/* ===================== THE EDIT ===================== */}
      <section id="tomes">
        <Reveal>
          <div className="sec-head">
            <div className="ey">// the edit · contents</div>
            <h2>The Issue,<br />in Seven Tomes.</h2>
            <p>Every feature is shot, styled and live — twenty-two rites, each ending in a JEE Advanced &amp; A-Level exam vault. Read cover to cover, or skip to the story that&apos;s haunting you.</p>
          </div>
        </Reveal>

        {TOMES.map((t, ti) => (
          <Reveal key={t.id} delay={Math.min(ti * 0.04, 0.2)}>
            <div className="tome-block">
              <div className="tome-bar">
                <span className="tag">{t.jp}</span>
                <span className="tt">{t.label}</span>
                <span className="ln" />
              </div>
              <div className="cards">
                {t.items.map((it) => {
                  const L = it.ready ? LESSONS[it.slug] : null;
                  if (L) {
                    return (
                      <Link key={it.slug} href={`/codex/${it.slug}`} className="card">
                        <span className="idx">{it.num}</span>
                        <span className="ic" aria-hidden style={{ fontFamily: "var(--font-jp)", fontSize: 30, lineHeight: 1, color: "var(--red)" }}>{L.jp}</span>
                        <h3>{L.title}</h3>
                        <p>{L.blurb}</p>
                        <span className="go">read the feature <span className="ar">→</span></span>
                      </Link>
                    );
                  }
                  return (
                    <div key={it.slug} className="card" style={{ opacity: 0.5 }}>
                      <span className="idx">{it.num}</span>
                      <span className="ic" aria-hidden style={{ fontFamily: "var(--font-jp)", fontSize: 26, color: "var(--faint)" }}>封</span>
                      <h3 style={{ color: "var(--dim)" }}>{it.title}</h3>
                      <p>Unshot. This feature awaits its issue.</p>
                      <span className="go" style={{ color: "var(--faint)" }}>coming · 近日</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ===================== ABOUT / COLOPHON ===================== */}
      <section className="about">
        <Reveal>
          <div className="rule"><span className="g">✦ the colophon ✦</span></div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="about-grid">
            <div className="about-portrait">
              <div className="frame small">
                <div className="frame-inner">
                  <MakerAvatar />
                </div>
                <span className="fr-label">the scribe · 著者</span>
              </div>
            </div>
            <div className="about-body">
              <div className="ey">// about</div>
              <h2>Made by a<br />First-Year Student.</h2>
              <p>
                <b>The Chance Lab</b> was written, designed and coded by <b>Shaurya Negi</b> — a
                first-year student — as a living revision codex for Probability &amp; Statistics:
                every rite explained in plain words, made interactive, and pushed to JEE-Advanced depth.
              </p>
              <p>
                Transcribed from the Newton School of Technology lecture &amp; lab sheets, and built
                with Next.js, KaTeX, and a great deal of crimson.
              </p>
              <div className="about-meta">
                <span>Shaurya Negi</span><span className="x">✦</span>
                <span>First-year</span><span className="x">✦</span>
                <span>MMXXVI</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
