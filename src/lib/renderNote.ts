import { marked } from "marked";
import katex from "katex";

marked.setOptions({ gfm: true, breaks: true });

/** Render Markdown + LaTeX to HTML. Math ($$..$$, \[..\], $..$, \(..\)) is rendered
 *  with KaTeX and protected from the Markdown parser. */
export function renderNote(src: string): string {
  if (!src || !src.trim()) return "";
  const math: string[] = [];
  const stash = (tex: string, display: boolean) => {
    try { math.push(katex.renderToString(tex, { displayMode: display, throwOnError: false })); }
    catch { math.push(tex); }
    return `@@MATH${math.length - 1}@@`;
  };

  let s = src;
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_m, t) => stash(t, true));
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => stash(t, true));
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => stash(t, false));
  s = s.replace(/(?<!\\)\$([^$\n]+?)\$/g, (_m, t) => stash(t, false));

  let html = marked.parse(s) as string;
  // un-wrap <p> around a lone display-math placeholder so we don't nest block in <p>
  html = html.replace(/<p>\s*(@@MATH\d+@@)\s*<\/p>/g, "$1");
  html = html.replace(/@@MATH(\d+)@@/g, (_m, i) => math[+i] ?? "");
  return html;
}
