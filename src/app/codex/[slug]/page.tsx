import Link from "next/link";
import { notFound } from "next/navigation";
import { LESSONS, READY_ORDER, TOMES, type Section } from "@/lib/content";
import { mathHtml, tex, highlight } from "@/lib/math";
import Reveal from "@/components/Reveal";
import Example from "@/components/Example";
import Rites from "@/components/Rites";
import Quiz from "@/components/Quiz";
import Widget from "@/components/Widget";
import ExamVault from "@/components/ExamVault";
import { EXAMS } from "@/lib/exams";

export function generateStaticParams() {
  return READY_ORDER.map((slug) => ({ slug }));
}

function tomeOf(slug: string) {
  return TOMES.find((t) => t.items.some((i) => i.slug === slug));
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "text":
      return <div key={i} className="prose"><div className={s.dropcap ? "dropcap" : ""} dangerouslySetInnerHTML={{ __html: mathHtml(s.html) }} /></div>;
    case "formula":
      return (
        <div key={i} className="plate">
          {s.seal && <span className="seal">{s.seal}</span>}
          <div className="px" dangerouslySetInnerHTML={{ __html: tex(s.tex, true) }} />
          {s.caption && <div className="cap">{s.caption}</div>}
        </div>
      );
    case "note": {
      const lbl = s.variant === "warn" ? "Heed" : s.variant === "tip" ? "Rite" : "Law";
      return <div key={i} className={`note ${s.variant === "warn" ? "warn" : ""}`}><span className="ic">{lbl}</span><span dangerouslySetInnerHTML={{ __html: mathHtml(s.html) }} /></div>;
    }
    case "sketch":
      return (
        <div key={i} className="sketch">
          <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
          <div className="slabel">{s.label}</div>
          <div className="prose" style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: mathHtml(s.html) }} />
        </div>
      );
    case "code":
      return (
        <div key={i} className="code">
          <div className="ch"><span style={{ color: "#b3151d" }}>✠</span> {s.title}<span className="lang">{s.lang}</span></div>
          <pre><code dangerouslySetInnerHTML={{ __html: highlight(s.code) }} /></pre>
        </div>
      );
    case "example":
      return <Example key={i} title={s.title} problemHtml={mathHtml(s.problem)} stepsHtml={s.steps.map(mathHtml)} answerHtml={mathHtml(s.answer)} />;
    case "widget":
      return (
        <div key={i} className="apparatus">
          <div className="ah"><span className="dot" /><span className="t">{s.title}</span><span className="badge">apparatus</span></div>
          {s.caption && <div className="acap">{s.caption}</div>}
          <div className="astage"><Widget id={s.id} config={s.config} /></div>
        </div>
      );
    default:
      return null;
  }
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const L = LESSONS[slug];
  if (!L) notFound();

  const tome = tomeOf(slug);
  const idx = READY_ORDER.indexOf(slug);
  const prev = idx > 0 ? READY_ORDER[idx - 1] : null;
  const next = idx >= 0 && idx < READY_ORDER.length - 1 ? READY_ORDER[idx + 1] : null;

  const rites = L.rites.map((r) => ({ qHtml: mathHtml(r.q), aHtml: mathHtml(r.a) }));
  const quiz = L.quiz.map((q) =>
    q.type === "mcq"
      ? { type: "mcq" as const, diff: q.diff, qHtml: mathHtml(q.q), choicesHtml: q.choices.map(mathHtml), answer: q.answer, explainHtml: mathHtml(q.explain) }
      : { type: "num" as const, diff: q.diff, qHtml: mathHtml(q.q), answer: q.answer, tol: q.tol, explainHtml: mathHtml(q.explain) }
  );
  const exams = (EXAMS[slug] || []).map((e) => ({
    board: e.board,
    boardClass: e.board === "JEE Advanced" ? "jee" : "alevel",
    qHtml: mathHtml(e.q),
    stepsHtml: e.steps.map(mathHtml),
    answerHtml: mathHtml(e.answer),
  }));

  return (
    <main className="shell">
      <div className="lesson-hero">
        <div className="crumb">
          <Link href="/">The Codex</Link><span>✠</span>
          <span>{tome?.label}</span><span>✠</span>
          <span style={{ color: "var(--blood)" }}>{L.num}</span>
        </div>
        <div className="num">RITE {L.num} · <span style={{ fontFamily: "var(--font-jp)" }}>{L.jp}</span></div>
        <h1>{L.title}</h1>
        <p className="sub">{L.subtitle}</p>
      </div>

      <div className="lesson-body">
        {/* marginalia — plain tongue */}
        <Reveal>
          <div className="marginalia">
            <div className="mh">In the plain tongue — begin here <span className="jp-tag">{L.plainJp}</span></div>
            <div className="mb" dangerouslySetInnerHTML={{ __html: mathHtml(L.plain) }} />
          </div>
        </Reveal>

        {L.sections.map((s, i) => <Reveal key={i} delay={0.02}>{renderSection(s, i)}</Reveal>)}

        <Reveal><Rites items={rites} /></Reveal>
        <Reveal><Quiz items={quiz} /></Reveal>
        <Reveal><ExamVault items={exams} /></Reveal>

        <div className="lnav">
          {prev ? (
            <Link className="prev" href={`/codex/${prev}`}><div className="d">← preceding rite</div><div className="t">{LESSONS[prev].title}</div></Link>
          ) : <div />}
          {next ? (
            <Link className="next" href={`/codex/${next}`}><div className="d">next rite →</div><div className="t">{LESSONS[next].title}</div></Link>
          ) : (
            <Link className="next" href="/"><div className="d">return →</div><div className="t">To the Codex</div></Link>
          )}
        </div>
      </div>
    </main>
  );
}
