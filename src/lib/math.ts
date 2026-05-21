import katex from "katex";

/** Replace $$...$$ (display) and \( ... \) (inline) inside an HTML string with KaTeX output. */
export function mathHtml(s: string): string {
  if (!s) return s;
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_m, t) => {
    try { return katex.renderToString(t, { displayMode: true, throwOnError: false }); }
    catch { return t; }
  });
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => {
    try { return katex.renderToString(t, { displayMode: false, throwOnError: false }); }
    catch { return t; }
  });
  return s;
}

/** Render a single TeX string to a KaTeX HTML string. */
export function tex(t: string, display = true): string {
  try { return katex.renderToString(t, { displayMode: display, throwOnError: false }); }
  catch { return t; }
}

const KW = "import|from|as|def|return|for|in|if|elif|else|while|and|or|not|True|False|None|lambda|class|with|yield|print|range|len|sum|int|float|abs|np|plt";
const TOK = new RegExp(
  "(#[^\\n]*)|(\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*')|(\\b(?:" + KW + ")\\b)",
  "g"
);

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Single-pass python highlighter -> HTML (comments before strings, no placeholders). */
export function highlight(code: string): string {
  return esc(code).replace(TOK, (m, cmt, str, kw) => {
    if (cmt) return `<span class="cmt">${cmt}</span>`;
    if (str) return `<span class="str">${str}</span>`;
    if (kw) return `<span class="kw">${kw}</span>`;
    return m;
  });
}
