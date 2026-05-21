/* AUTO-GENERATED from chance-lab content. Do not edit by hand. */
import type { Lesson } from "./content";

export const GENERATED: Record<string, Lesson> = {
  "counting": {
    "id": "counting",
    "num": "1.1",
    "title": "Counting I — The Multiplication Rule",
    "jp": "算",
    "subtitle": "Before you can find a probability, you have to count the possibilities.",
    "blurb": "Why <em>P(A)=n(A)/n(S)</em> forces us to become expert counters — and the one rule that does most of the work.",
    "plain": "<p>Getting dressed, you have <strong>3 shirts and 2 pairs of jeans</strong>. How many different looks? You don't list them all — for each shirt you can pick either pair of jeans, so <strong>3 × 2 = 6</strong>. That is the entire secret of counting: when you build something in steps, <em>multiply</em> the number of choices at each step.</p><p>Why bother? Because probability is just <em>\"how many ways can the thing I want happen\"</em> divided by <em>\"how many ways can anything happen\"</em> — so you have to be able to count both, fast.</p><div class=\"eg\"><b>Try it:</b> a meal = 1 of 3 drinks × 1 of 3 mains × 1 of 2 sides = <b>18</b> different meals.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>Almost every probability you'll ever compute starts from one innocent-looking fraction:</p>"
      },
      {
        "type": "formula",
        "tex": "P(A) = \\dfrac{n(A)}{n(S)} = \\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}",
        "caption": "To use it you must count two things accurately: the outcomes you want, and all the outcomes there are."
      },
      {
        "type": "text",
        "html": "<p>Real problems rarely hand you a tidy list. First figure out <strong>what</strong> you're counting, then <strong>how</strong> to count it without writing thousands of cases.</p>"
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Fundamental Counting Principle (Multiplication Rule).</strong> If a task has stages — stage A in <em>m</em> ways, and for <em>each</em>, stage B in <em>n</em> ways — the whole task happens in <em>m × n</em> ways. Extends to any number of stages."
      },
      {
        "type": "example",
        "title": "Worked example — ice-cream cones",
        "problem": "Pick a cone (cake/waffle) and a flavour (chocolate/vanilla/strawberry). How many cones?",
        "steps": [
          "2 cones, and for each, 3 flavours.",
          "Multiply the stages: \\(2\\times 3\\)."
        ],
        "answer": "6 possible cones."
      },
      {
        "type": "widget",
        "id": "counting-calc",
        "title": "Counting machine",
        "caption": "Multiply stages, or compute n!, P(n,r) and C(n,r). Watch the count explode.",
        "config": ""
      },
      {
        "type": "code",
        "lang": "python",
        "title": "counting in practice",
        "code": "import math\nfrom itertools import product\n\n# Stages: 1st digit (10), letter (25, no 'O'), then five of (35)\ntotal = 10 * 25 * 35**5\nprint(total)            # 13_130_468_750\n\n# Enumerate small Cartesian products directly\ncones = list(product([\"cake\",\"waffle\"], [\"choc\",\"van\",\"straw\"]))\nprint(len(cones))       # 6"
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Don't auto-pilot.</strong> Always ask: does order matter? are repeats allowed? are there restrictions? Same numbers, very different counts."
      }
    ],
    "rites": [
      {
        "q": "State the Fundamental Counting Principle and justify it with the Cartesian product.",
        "a": "<p>If experiment A has \\(m\\) outcomes and, for each, experiment B has \\(n\\) outcomes, the compound experiment has \\(m\\times n\\) outcomes.</p><p><strong>Why:</strong> the outcomes are exactly the ordered pairs \\((a,b)\\) — i.e. the set \\(A\\times B\\). For each of the \\(m\\) choices of \\(a\\) there are \\(n\\) choices of \\(b\\), so \\(|A\\times B| = m\\cdot n\\).</p>"
      },
      {
        "q": "When can you simply multiply, and when can you not?",
        "a": "<p>You may multiply when the number of options at each stage is <em>independent of the specific choices</em> made earlier (only the <em>count</em> may carry over). If an earlier choice removes options unevenly, split into cases or use subtraction (complementary counting).</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "2 paths A→B and 4 paths B→C. Total paths A→C?",
        "choices": [
          "6",
          "8",
          "2",
          "16"
        ],
        "answer": 1,
        "explain": "Each A→B pairs with each B→C: 2 × 4 = 8."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "3 shirts and 4 pants. How many outfits (one of each)?",
        "answer": 12,
        "tol": 0,
        "explain": "3 × 4 = 12."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Commission: 1 of 6 European, 1 of 4 Asian, 1 of 3 N-American, 1 of 7 African. How many?",
        "answer": 504,
        "tol": 0,
        "explain": "6 × 4 × 3 × 7 = 504."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Plates: 2 different letters then 2 different digits (26 letters, 10 digits). How many?",
        "answer": 58500,
        "tol": 0,
        "explain": "26 × 25 × 10 × 9 = 58,500."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "How many 3-digit numbers have exactly one zero? (leading digit ≠ 0)",
        "answer": 162,
        "tol": 0,
        "explain": "Zero in pos 2 or 3: 9×9 each → 81 + 81 = 162."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "4-letter 'words' from {A,B,C,D,E} (repeats allowed) with at least one vowel (A,E)?",
        "answer": 544,
        "tol": 0,
        "explain": "Total 5⁴=625 minus no-vowel 3⁴=81 = 544."
      }
    ]
  },
  "permutations": {
    "id": "permutations",
    "num": "1.2",
    "title": "Counting I — Permutations",
    "jp": "順",
    "subtitle": "Arrangements where rearranging counts as a brand-new outcome.",
    "blurb": "From n! to P(n,r), plus the two twists every exam loves: repeated letters and circular tables.",
    "plain": "<p>Three friends — Aman, Bittu, Chetan — sit on a bench. How many seating <em>orders</em>? The first seat has 3 choices; whoever is left gives 2 choices for the next seat; then 1 for the last. So <strong>3 × 2 × 1 = 6</strong> orders.</p><p>When the <strong>order matters</strong> (1st/2nd/3rd, who sits where, gold/silver/bronze) you are counting <em>permutations</em>. \"Arrange all n things\" has a shortcut: <strong>n!</strong> (\"n factorial\") = n × (n−1) × … × 1.</p><div class=\"eg\"><b>Careful:</b> ABC and ACB count as <b>different</b> here — that is exactly what \"order matters\" means.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Permutation =</strong> an arrangement in a <em>specific order</em>. ABC ≠ ACB. If order matters, you're counting permutations."
      },
      {
        "type": "text",
        "html": "<p>Arrange \\(n\\) distinct objects: first slot has \\(n\\) choices, next \\(n-1\\), … down to 1. Multiply (the FCP!) to get the <strong>factorial</strong>.</p>"
      },
      {
        "type": "formula",
        "tex": "n! = n(n-1)(n-2)\\cdots 2\\cdot 1, \\qquad 0! = 1",
        "caption": "n distinct objects arrange in n! ways."
      },
      {
        "type": "text",
        "html": "<p>Fill only \\(r\\) of the slots from \\(n\\): stop the countdown early.</p>"
      },
      {
        "type": "formula",
        "tex": "P(n,r) = \\dfrac{n!}{(n-r)!} = n(n-1)\\cdots(n-r+1)",
        "caption": "Ordered selections of r from n. E.g. P(20,3) = 20·19·18 = 6840."
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Restrictions? Glue & multiply.</strong> If items must stay together, treat the group as one block, arrange the blocks, then arrange <em>inside</em> the block. 3 girls together in 7 seats: \\(5!\\times 3! = 720\\)."
      },
      {
        "type": "example",
        "title": "Worked example — repeated letters",
        "problem": "Distinct arrangements of the letters in MISSISSIPPI?",
        "steps": [
          "11 letters: I×4, S×4, P×2, M×1.",
          "Divide out the swaps of identical letters.",
          "\\(\\dfrac{11!}{4!\\,4!\\,2!}\\)."
        ],
        "answer": "34,650 distinct arrangements."
      },
      {
        "type": "formula",
        "tex": "\\dfrac{n!}{n_1!\\,n_2!\\cdots n_k!}",
        "caption": "Arrangements of n items with repeated groups of sizes n₁,…,nₖ (the repeated-letters / multinomial rule)."
      },
      {
        "type": "example",
        "title": "Worked example — circular table",
        "problem": "6 people around a round table (rotations are the same). How many ways?",
        "steps": [
          "On a line it's \\(6!\\); but a circle has no fixed first seat.",
          "Pin one person to kill rotation, arrange the other 5: \\((6-1)!\\)."
        ],
        "answer": "120 ways. In general n around a circle = (n−1)!."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "permutations with itertools / math",
        "code": "import math\nfrom itertools import permutations\n\nprint(math.factorial(4))      # 24\nprint(math.perm(20, 3))       # 6840  =  P(20,3)\n\n# distinct arrangements of a multiset\nfrom collections import Counter\nword = \"MISSISSIPPI\"\nd = math.factorial(len(word))\nfor c in Counter(word).values():\n    d //= math.factorial(c)\nprint(d)                      # 34650"
      }
    ],
    "rites": [
      {
        "q": "Derive the formula for P(n,r) from the multiplication rule.",
        "a": "<p>Fill \\(r\\) ordered slots from \\(n\\) distinct objects. Slot 1: \\(n\\) choices; slot 2: \\(n-1\\); …; slot \\(r\\): \\(n-r+1\\). By the FCP:</p><p>\\(P(n,r) = n(n-1)\\cdots(n-r+1) = \\dfrac{n!}{(n-r)!}.\\)</p>"
      },
      {
        "q": "Why is the number of circular arrangements of n distinct objects (n−1)! and not n!?",
        "a": "<p>A circular arrangement has no distinguished starting position: each distinct seating can be rotated into \\(n\\) linear arrangements that all look the same around the circle. So we divide \\(n!\\) by \\(n\\), giving \\((n-1)!\\). Equivalently, fix one person's seat to remove the rotational symmetry and arrange the rest in \\((n-1)!\\) ways.</p>"
      },
      {
        "q": "Explain the repeated-letters formula n!/(n₁!…nₖ!).",
        "a": "<p>Treat the letters as distinct and arrange in \\(n!\\) ways. Each truly distinct word is then counted multiple times — once for every internal rearrangement of identical letters, i.e. \\(n_1!\\,n_2!\\cdots n_k!\\) times. Dividing removes that overcount.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "In how many ways can 4 different books be arranged on a shelf?",
        "answer": 24,
        "tol": 0,
        "explain": "4! = 24."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Distinct arrangements of the word DOG?",
        "answer": 6,
        "tol": 0,
        "explain": "3! = 6 (all distinct)."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "A club of 20 picks President, VP, Treasurer (no double roles). How many ways?",
        "answer": 6840,
        "tol": 0,
        "explain": "P(20,3) = 20·19·18 = 6840."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Distinct arrangements of CEASE (E twice)?",
        "answer": 60,
        "tol": 0,
        "explain": "5!/2! = 60."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "7 people in a row, Wilma & Paul NOT adjacent. How many arrangements?",
        "answer": 3600,
        "tol": 0,
        "explain": "7! − 2·6! = 5040 − 1440 = 3600."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "6 around a round table with Fred & Gwen directly opposite. How many ways?",
        "choices": [
          "24",
          "48",
          "120",
          "720"
        ],
        "answer": 0,
        "explain": "Fix Fred (kills rotation); Gwen's seat forced; other 4 in 4!=24."
      }
    ]
  },
  "combinations": {
    "id": "combinations",
    "num": "1.3",
    "title": "Counting II — Combinations",
    "jp": "組",
    "subtitle": "Choosing a group, where shuffling the chosen ones changes nothing.",
    "blurb": "C(n,r), the two identities that fall out of pure storytelling, and the four ball-in-box cases.",
    "plain": "<p>Same three friends, but now you just <strong>pick 2 to form a team</strong>. Being \"picked first\" means nothing — team {Aman, Bittu} is the <em>same</em> team as {Bittu, Aman}. So we take the ordered count and divide away the repeated orderings.</p><p>One simple test decides everything: <strong>order matters → permutation</strong>; <strong>order does not matter (a group, a team, a handful) → combination</strong>.</p><div class=\"eg\"><b>Picture it:</b> choosing 2 of 4 people gives 6 teams, not 12, because each team got counted twice (AB and BA).</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>{A,B} is the same committee as {B,A}. When the order of the chosen items doesn't matter, you want a <strong>combination</strong>. Start from the ordered count and divide out the \\(r!\\) reorderings:</p>"
      },
      {
        "type": "formula",
        "tex": "\\binom{n}{r} = \\dfrac{P(n,r)}{r!} = \\dfrac{n!}{r!\\,(n-r)!}",
        "caption": "“n choose r”: pick r from n when order is irrelevant."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Order matters → permutation.<br>Order doesn't → combination (divide by r!).</strong> That single \\(\\div r!\\) is the whole difference."
      },
      {
        "type": "example",
        "title": "Worked example — a mixed committee",
        "problem": "From 55 Republicans and 45 Democrats, choose 3 R and 2 D. How many ways?",
        "steps": [
          "Choose R's and D's independently, then multiply.",
          "\\(\\binom{55}{3}\\binom{45}{2} = 26{,}235 \\times 990\\)."
        ],
        "answer": "25,972,650 committees."
      },
      {
        "type": "formula",
        "tex": "\\binom{n}{r} = \\binom{n}{n-r}",
        "caption": "Symmetry: choosing who's IN = choosing who's OUT."
      },
      {
        "type": "formula",
        "tex": "\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}",
        "caption": "Pascal's Rule: fix one person — they're on the team (choose r−1 more) or not (choose r from the rest)."
      },
      {
        "type": "widget",
        "id": "counting-calc",
        "title": "Permutation vs combination",
        "caption": "Feel how dividing by r! shrinks the count.",
        "config": ""
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Stars & bars.</strong> Identical items into distinct boxes: \\(k\\) balls into \\(n\\) boxes (empties allowed) = \\(\\binom{k+n-1}{n-1}\\). No empties? Put one in each first."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "combinations & stars-and-bars",
        "code": "import math\nfrom itertools import combinations\n\nprint(math.comb(55,3) * math.comb(45,2))   # 25_972_650\n\n# stars & bars: 20 identical balls into 6 boxes, none empty\nprint(math.comb(20-1, 6-1))                 # C(19,5) = 11628\n\nteams = list(combinations(\"ABCD\", 2))       # [('A','B'), ('A','C'), ...]\nprint(len(teams))                           # 6"
      }
    ],
    "rites": [
      {
        "q": "Explain why C(n,r) = P(n,r)/r!.",
        "a": "<p>An ordered selection of \\(r\\) (a permutation) corresponds to a <em>set</em> of \\(r\\) chosen items together with one of its \\(r!\\) orderings. So each unordered combination is counted \\(r!\\) times among the \\(P(n,r)\\) permutations. Dividing by \\(r!\\) removes the overcount, giving \\(\\binom{n}{r} = \\dfrac{n!}{r!(n-r)!}\\).</p>"
      },
      {
        "q": "Prove Pascal's identity combinatorially: C(n,r) = C(n−1,r−1) + C(n−1,r).",
        "a": "<p>Fix one specific element \\(x\\). Every \\(r\\)-subset either <strong>contains \\(x\\)</strong> — then choose the other \\(r-1\\) from the remaining \\(n-1\\): \\(\\binom{n-1}{r-1}\\) — or <strong>excludes \\(x\\)</strong> — choose all \\(r\\) from the remaining \\(n-1\\): \\(\\binom{n-1}{r}\\). These cases are disjoint and exhaustive, so they sum to \\(\\binom{n}{r}\\).</p>"
      },
      {
        "q": "Explain the symmetry rule C(n,r)=C(n,n−r) in words.",
        "a": "<p>Choosing the \\(r\\) elements to <em>include</em> is equivalent to choosing the \\(n-r\\) elements to <em>leave out</em>. Each inclusion-set determines a unique exclusion-set and vice-versa (a bijection), so the counts are equal.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Choose 3 books from 7 different subjects. How many ways?",
        "answer": 35,
        "tol": 0,
        "explain": "C(7,3) = 35."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Triangles from the 8 vertices of a regular octagon?",
        "answer": 56,
        "tol": 0,
        "explain": "C(8,3) = 56."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Pick a starting 7 from 15, one being the goalie (rest interchangeable)?",
        "choices": [
          "6435",
          "45045",
          "3003",
          "32760"
        ],
        "answer": 1,
        "explain": "15 × C(14,6) = 15 × 3003 = 45,045."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "5 identical balls into 3 distinct boxes (empties allowed)?",
        "answer": 21,
        "tol": 0,
        "explain": "Stars & bars C(7,2) = 21."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "20 identical balls into 6 boxes, none empty. How many ways?",
        "answer": 11628,
        "tol": 0,
        "explain": "C(19,5) = 11,628."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Does C(5,7) make sense?",
        "choices": [
          "Yes, 21",
          "No — can't pick 7 of 5; it's 0",
          "Yes, 5!",
          "= C(7,5)"
        ],
        "answer": 1,
        "explain": "C(n,r)=0 when r>n."
      }
    ]
  },
  "conditional": {
    "id": "conditional",
    "num": "2.2",
    "title": "Conditional Probability & Independence",
    "jp": "条",
    "subtitle": "Updating the odds once you learn that something already happened.",
    "blurb": "Shrinking the sample space, the multiplication rule, true independence, and the Law of Total Probability.",
    "plain": "<p>You guess whether it will rain today. Then you look outside and see <strong>dark clouds</strong> — your guess instantly jumps up. That is <em>conditional probability</em>: the chance of something <strong>after you learn a new clue</strong>.</p><p>The trick is simple: once you know the clue is true, you stop thinking about the whole world and only look at the slice where the clue holds.</p><div class=\"eg\"><b>Example:</b> P(a random person is a teacher) is small. But P(teacher | they are holding a class register) is much higher — the clue shrank the world.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Conditional probability isn't about changing reality — it's about changing the group you look at.</strong> Given \\(B\\), restrict attention to the world where \\(B\\) is true."
      },
      {
        "type": "formula",
        "tex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)} \\qquad (P(B)\\neq 0)",
        "caption": "The both-happen probability, rescaled so B's world sums to 1."
      },
      {
        "type": "formula",
        "tex": "P(A\\cap B) = P(B)\\,P(A\\mid B) = P(A)\\,P(B\\mid A)",
        "caption": "Multiplication rule — walk a tree branch by branch."
      },
      {
        "type": "example",
        "title": "Worked example — flight times",
        "problem": "P(departs on time)=0.83, P(arrives)=0.82, P(both)=0.78. Given on-time departure, P(arrives on time)?",
        "steps": [
          "Condition on departure.",
          "\\(P(A\\mid D)=\\dfrac{0.78}{0.83}\\)."
        ],
        "answer": "≈ 0.940."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Independence.</strong> \\(A,B\\) independent ⇔ \\(P(A\\mid B)=P(A)\\) ⇔ \\(P(A\\cap B)=P(A)P(B)\\). Learning \\(B\\) tells you nothing about \\(A\\)."
      },
      {
        "type": "example",
        "title": "Worked example — the two-children twist",
        "problem": "Two foals, each equally likely colt/filly. Given at least one colt, P(both colts)?",
        "steps": [
          "Equally likely: {CC,CF,FC,FF}.",
          "'At least one colt' rules out FF, leaving {CC,CF,FC}.",
          "Only CC has both: \\(1/3\\)."
        ],
        "answer": "1/3 — not 1/2! Conditioning on 'at least one' keeps three cases."
      },
      {
        "type": "formula",
        "tex": "P(A) = \\sum_{i=1}^{k} P(B_i)\\,P(A\\mid B_i)",
        "caption": "Law of Total Probability: average the conditional chances over a partition B₁,…,Bₖ."
      },
      {
        "type": "example",
        "title": "Worked example — assembly plant",
        "problem": "Machines B₁,B₂,B₃ make 30%,45%,25% with defect rates 2%,3%,2%. Overall defect probability?",
        "steps": [
          "Weight each defect rate by production share.",
          "\\(0.30(.02)+0.45(.03)+0.25(.02)\\)."
        ],
        "answer": "0.0245 (≈2.45%)."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "conditional probability from data",
        "code": "import numpy as np\n# columns: [employed, unemployed]; rows: [male, female]\ntable = np.array([[460, 40],\n                  [140, 260]])\nemployed = table[:, 0].sum()           # 600\nP_male_given_employed = table[0,0] / employed\nprint(P_male_given_employed)           # 0.7667  = 23/30"
      }
    ],
    "rites": [
      {
        "q": "Define conditional probability and explain the 'shrinking sample space' intuition.",
        "a": "<p>\\(P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}\\), \\(P(B)>0\\). Conditioning on \\(B\\) restricts the universe to outcomes in \\(B\\); we then ask what fraction of <em>that</em> smaller world also lies in \\(A\\). Dividing by \\(P(B)\\) renormalizes so the conditional probabilities over \\(B\\) sum to 1.</p>"
      },
      {
        "q": "State and prove the Law of Total Probability.",
        "a": "<p>If \\(B_1,\\dots,B_k\\) partition \\(S\\) (disjoint, union \\(=S\\), each \\(P(B_i)>0\\)) then for any \\(A\\): \\(P(A)=\\sum_i P(B_i)P(A\\mid B_i)\\).</p><p><strong>Proof:</strong> \\(A = \\bigcup_i (A\\cap B_i)\\), and the \\(A\\cap B_i\\) are disjoint. By additivity \\(P(A)=\\sum_i P(A\\cap B_i)=\\sum_i P(B_i)P(A\\mid B_i)\\).</p>"
      },
      {
        "q": "Two definitions of independence — show they are equivalent.",
        "a": "<p>Definition (i): \\(P(A\\mid B)=P(A)\\). Definition (ii): \\(P(A\\cap B)=P(A)P(B)\\). From (i): \\(\\dfrac{P(A\\cap B)}{P(B)}=P(A)\\Rightarrow P(A\\cap B)=P(A)P(B)\\), which is (ii). The steps reverse, so they are equivalent. Form (ii) is preferred because it stays valid even when \\(P(B)=0\\).</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "A card is red. P(it's a king | red)?",
        "choices": [
          "1/13",
          "2/13",
          "1/26",
          "1/2"
        ],
        "answer": 0,
        "explain": "2 red kings / 26 red = 1/13."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Two dice, sum even. P(both even | sum even)?",
        "answer": 0.5,
        "tol": 0.01,
        "explain": "9 both-even of 18 even-sum = 1/2."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Bag: 5 white, 4 red. Draw 2 without replacement. P(exactly one white)?",
        "answer": 0.5556,
        "tol": 0.01,
        "explain": "5/9 ≈ 0.556."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "70% UG, 30% PG; scholarship 10% / 20%. A scholar — P(PG)?",
        "answer": 0.4615,
        "tol": 0.01,
        "explain": "0.06/0.13 ≈ 0.462."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "P(A)=0.6, P(B)=0.5, P(A|B)=0.6. Independent?",
        "choices": [
          "Yes — P(A|B)=P(A)",
          "No",
          "Can't tell",
          "Only if disjoint"
        ],
        "answer": 0,
        "explain": "0.6 = 0.6, so independent."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Transfer 1 ball: Bag1(4W,3B)→Bag2(3W,5B), then draw from Bag2. P(black)?",
        "answer": 0.6032,
        "tol": 0.01,
        "explain": "(3/7)(6/9)+(4/7)(5/9)=38/63≈0.603."
      }
    ]
  },
  "randomvars": {
    "id": "randomvars",
    "num": "3.1",
    "title": "Random Variables: PMF, PDF & CDF",
    "jp": "変",
    "subtitle": "Turning messy outcomes into numbers you can do maths with.",
    "blurb": "Discrete vs continuous vs mixed, the zero-probability paradox, and the three functions that describe any distribution.",
    "plain": "<p>Flip 3 coins. Instead of writing \"HHT\", just <strong>count the heads: 2</strong>. A <em>random variable</em> is exactly that — a rule that turns a messy outcome into a <strong>number</strong>, so we can graph it and average it.</p><p>Some give whole-number counts like 0, 1, 2 (<em>discrete</em>); some give any value like time or height (<em>continuous</em>). Three little functions describe them: the PMF (heights of the bars), the PDF (a curve whose area is probability), and the CDF (a running total).</p><div class=\"eg\"><b>Surprise:</b> for continuous things, the chance of an <i>exact</i> value (height = 170.000…cm) is 0 — you can only ask about a range.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>A random variable is a function</strong> \\(X:S\\to\\mathbb{R}\\) attaching a number to every outcome. Capital \\(X\\) is the rule; lowercase \\(x\\) is a value. \\(P(X=x)\\) = \"probability the rule outputs \\(x\\).\""
      },
      {
        "type": "text",
        "html": "<p><strong>Discrete</strong> — countable values (counts). <strong>Continuous</strong> — any value in an interval (time, voltage). <strong>Mixed</strong> — both a smooth part and a probability spike.</p>"
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>The zero-probability paradox.</strong> For continuous \\(X\\), \\(P(X=c)=0\\) — a point has no width, so no area. Probability lives on <em>intervals</em>."
      },
      {
        "type": "formula",
        "tex": "p_X(x) = P(X=x), \\quad \\sum_x p_X(x)=1 \\qquad\\text{(PMF, discrete)}",
        "caption": "Probability Mass Function: a probability sits on each value; they sum to 1."
      },
      {
        "type": "formula",
        "tex": "P(a\\le X\\le b)=\\int_a^b f_X(x)\\,dx, \\quad \\int_{-\\infty}^{\\infty} f_X = 1 \\qquad\\text{(PDF, continuous)}",
        "caption": "Density: probability is AREA under the curve, not height. f(x) can exceed 1."
      },
      {
        "type": "formula",
        "tex": "F_X(x) = P(X\\le x) \\qquad\\text{(CDF, any RV)}",
        "caption": "Running total: non-decreasing, 0→1. Jumps = discrete mass; smooth rises = continuous density."
      },
      {
        "type": "widget",
        "id": "pmf-cdf",
        "title": "PMF → CDF builder",
        "caption": "Drag weights to set a PMF; watch the CDF accumulate into a staircase.",
        "config": ""
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Reading a CDF.</strong> Flat = no probability there. Vertical jump = a discrete mass (jump height = that probability). Smooth climb = continuous region."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "PMF, CDF, and sampling",
        "code": "import numpy as np\nx  = np.array([0,1,2,3])\np  = np.array([0.30,0.40,0.20,0.10])   # PMF (sums to 1)\ncdf = np.cumsum(p)                      # [0.3,0.7,0.9,1.0]\nEX  = (x*p).sum()                       # 1.1  expected value\n\n# draw 1000 samples from this discrete distribution\nsample = np.random.choice(x, size=1000, p=p)\nprint(sample.mean())                    # ~1.1"
      }
    ],
    "rites": [
      {
        "q": "Define a random variable formally and explain X vs x.",
        "a": "<p>A random variable is a (measurable) function \\(X:S\\to\\mathbb{R}\\) mapping each outcome \\(\\omega\\in S\\) to a real number \\(X(\\omega)\\). The capital \\(X\\) denotes the function/rule; the lowercase \\(x\\) is a particular value it can take. So \"\\(X=x\\)\" is the event \\(\\{\\omega: X(\\omega)=x\\}\\), and \\(P(X=x)\\) is its probability.</p>"
      },
      {
        "q": "Why is P(X=c)=0 for a continuous variable even though f(c)>0?",
        "a": "<p>Probability for a continuous RV is the integral of the density: \\(P(a\\le X\\le b)=\\int_a^b f(x)\\,dx\\). A single point is the interval \\([c,c]\\), whose integral is \\(\\int_c^c f = 0\\) regardless of \\(f(c)\\). The density is a <em>rate</em> of probability per unit length, not a probability; only its area over an interval is a probability.</p>"
      },
      {
        "q": "List the properties of a CDF and explain what jumps and flats mean.",
        "a": "<p>\\(F_X(x)=P(X\\le x)\\) satisfies: \\(0\\le F\\le 1\\); non-decreasing; right-continuous; \\(F(-\\infty)=0\\), \\(F(+\\infty)=1\\). A <strong>jump</strong> of height \\(p\\) at \\(x_0\\) means \\(P(X=x_0)=p\\) (discrete mass). A <strong>flat</strong> stretch means no probability lies there. A <strong>smooth increase</strong> indicates a continuous component (\\(F'=f\\)).</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "For continuous X with density f, P(X = 3.00)?",
        "choices": [
          "f(3)",
          "0",
          "1",
          "Depends"
        ],
        "answer": 1,
        "explain": "A point has zero width → 0."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "Number of users logged in right now is…",
        "choices": [
          "Continuous",
          "Discrete",
          "Mixed",
          "Not a RV"
        ],
        "answer": 1,
        "explain": "A count → discrete."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Response time, but logs −1 on failure. This variable is…",
        "choices": [
          "Discrete",
          "Continuous",
          "Mixed",
          "Not a RV"
        ],
        "answer": 2,
        "explain": "Continuous part + spike at −1 = mixed."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "PMF P(0)=.3,P(1)=.4,P(2)=.2,P(3)=.1. Find E[X].",
        "answer": 1.1,
        "tol": 0.001,
        "explain": "0(.3)+1(.4)+2(.2)+3(.1)=1.1."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "A CDF is flat on (2,3). This means…",
        "choices": [
          "mass at 2.5",
          "P(2<X<3)=0",
          "X continuous there",
          "CDF invalid"
        ],
        "answer": 1,
        "explain": "No accumulation ⇒ no probability there."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "f(x)=kx on [0,2]. Find k.",
        "answer": 0.5,
        "tol": 0.001,
        "explain": "∫₀² kx dx = 2k = 1 ⇒ k=1/2."
      }
    ]
  },
  "discrete": {
    "id": "discrete",
    "num": "4.1",
    "title": "Discrete & Discrete Uniform Distributions",
    "jp": "離",
    "subtitle": "What a 'distribution' really is — and simulating it on a deterministic computer.",
    "blurb": "The discrete distribution family, the discrete uniform model, Python's random module, and the Law of Large Numbers in action.",
    "plain": "<p>A fair die is the simplest random thing there is: <strong>every face equally likely, each 1/6</strong>. That flat, all-equal pattern is the <em>uniform</em> distribution.</p><p>Computers cannot be truly random, but they fake it well (Python's random module). Flip a coin 10 times and you might get 7 heads — but flip 10,000 times and it settles near half. That settling-down is the <em>Law of Large Numbers</em>.</p><div class=\"eg\"><b>Trap:</b> one die is uniform, but the <i>sum of two dice</i> is not — there is one way to make 2, but six ways to make 7.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>A discrete distribution</strong> is just a PMF: a list of possible values with probabilities that are \\(\\ge 0\\) and sum to 1. Named distributions (uniform, Bernoulli, binomial, Poisson…) are simply famous shapes of PMF."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Discrete Uniform.</strong> When every one of \\(n\\) outcomes is equally likely: \\(P(X=k)=\\frac{1}{n}\\). A fair die is Uniform on \\(\\{1,\\dots,6\\}\\) — each face \\(\\frac16\\)."
      },
      {
        "type": "formula",
        "tex": "X\\sim \\text{DUnif}\\{1,\\dots,n\\}: \\ P(X=k)=\\frac1n,\\quad E[X]=\\frac{n+1}{2},\\quad \\operatorname{Var}(X)=\\frac{n^2-1}{12}",
        "caption": "For a fair die (n=6): mean 3.5, variance 35/12 ≈ 2.92."
      },
      {
        "type": "text",
        "html": "<p>Computers are deterministic — <code>print(2+2)</code> is always 4. To model randomness we use the pseudo-random <code>random</code> module:</p>\n        <ul><li><code>random.random()</code> → float in [0,1)</li><li><code>random.randint(a,b)</code> → integer, both ends included</li><li><code>random.choice(seq)</code> / <code>choices(seq,k=n)</code> (with replacement) / <code>sample(seq,k=n)</code> (no repeats)</li><li><code>random.seed(x)</code> → reproducible runs</li></ul>"
      },
      {
        "type": "widget",
        "id": "coin-lln",
        "title": "Law of Large Numbers, live",
        "caption": "Flip a coin thousands of times; the running proportion of heads crawls to 0.5.",
        "config": ""
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Empirical vs theoretical.</strong> 7 heads in 10 flips isn't a broken coin — it's small-sample noise. As trials grow, the observed proportion → the true probability. That's the Law of Large Numbers."
      },
      {
        "type": "text",
        "html": "<p>A favourite trap: one die is uniform, but the <strong>sum of two dice is not</strong>. One way to roll a 2, six ways to roll a 7 — uniform + uniform ≠ uniform.</p>"
      },
      {
        "type": "widget",
        "id": "dice-sum",
        "title": "Two-dice distribution",
        "caption": "Roll thousands of pairs; the triangular shape builds, tall at 7.",
        "config": ""
      },
      {
        "type": "code",
        "lang": "python",
        "title": "simulating the discrete uniform",
        "code": "import random\nrandom.seed(42)                       # reproducible\n\nrolls = [random.randint(1,6) for _ in range(600)]\nfrom collections import Counter\nprint(Counter(rolls))                 # each face ≈ 100\n\n# choices = with replacement, sample = without\nhand = random.sample(range(52), 5)    # 5 distinct cards\ndraws = random.choices(range(52), k=5)  # may repeat"
      }
    ],
    "rites": [
      {
        "q": "What conditions make a function p(x) a valid PMF?",
        "a": "<p>Two conditions: (1) \\(p(x)\\ge 0\\) for all \\(x\\); (2) \\(\\sum_x p(x)=1\\) over the (countable) support. Any such table defines a discrete distribution.</p>"
      },
      {
        "q": "Derive the mean of a discrete uniform on {1,…,n}.",
        "a": "<p>\\(E[X]=\\sum_{k=1}^{n} k\\cdot\\frac1n=\\frac1n\\cdot\\frac{n(n+1)}{2}=\\frac{n+1}{2}\\). For a die, \\(\\frac{7}{2}=3.5\\).</p>"
      },
      {
        "q": "State the Law of Large Numbers and distinguish empirical from theoretical probability.",
        "a": "<p><strong>LLN:</strong> as the number of independent trials \\(n\\to\\infty\\), the sample proportion (or sample mean) converges to the true probability (or expected value). <strong>Theoretical</strong> probability is computed from the model (e.g. \\(P(\\text{head})=0.5\\)); <strong>empirical</strong> probability is the observed relative frequency. LLN guarantees the empirical value approaches the theoretical one for large \\(n\\).</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "490 heads in 1000 tosses. Empirical P(heads)?",
        "answer": 0.49,
        "tol": 0.001,
        "explain": "490/1000."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "A die rolled 600 times — expected count of face '3'?",
        "answer": 100,
        "tol": 0,
        "explain": "600 × 1/6 = 100."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Which call can repeat the same item?",
        "choices": [
          "random.sample",
          "random.choices",
          "neither",
          "both"
        ],
        "answer": 1,
        "explain": "choices = with replacement."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Mean of a discrete uniform on {1,…,10}?",
        "answer": 5.5,
        "tol": 0.01,
        "explain": "(n+1)/2 = 11/2."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Rolling two dice and summing — is the total uniform?",
        "choices": [
          "Yes, 2–12 equal",
          "No, 7 is most likely",
          "No, 2 most likely",
          "Only with a seed"
        ],
        "answer": 1,
        "explain": "6 ways to make 7 vs 1 for 2 — triangular."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Variance of a fair die (discrete uniform 1–6)? (≈)",
        "answer": 2.92,
        "tol": 0.05,
        "explain": "(n²−1)/12 = 35/12 ≈ 2.92."
      }
    ]
  },
  "binomial": {
    "id": "binomial",
    "num": "4.2",
    "title": "Bernoulli & Binomial Distributions",
    "jp": "二",
    "subtitle": "The mathematics of success and failure, repeated.",
    "blurb": "Build the binomial PMF from scratch, the BINS checklist, mean = np and variance = np(1−p).",
    "plain": "<p>Take a simple yes/no trial and repeat it a <strong>fixed number of times</strong>, counting the successes. \"Out of 10 free throws, how many go in?\" That is the <em>binomial</em>.</p><p>One single yes/no try is a <em>Bernoulli</em> trial; many identical, independent tries (counting the wins) make a <em>Binomial</em>. On average you get <strong>(number of tries) × (chance of success)</strong>.</p><div class=\"eg\"><b>Checklist (BINS):</b> Binary outcomes · Independent tries · fixed Number of tries · Same chance each time.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Bernoulli trial</strong> = one go with two outcomes: success (prob \\(p\\)) or failure (\\(1-p\\)). A <strong>Binomial</strong> counts successes in \\(n\\) independent Bernoulli trials."
      },
      {
        "type": "formula",
        "tex": "\\text{Bernoulli: } E[X]=p,\\ \\operatorname{Var}(X)=p(1-p)",
        "caption": "Since X∈{0,1}, X²=X, so E[X²]=p and Var = p − p² = p(1−p)."
      },
      {
        "type": "text",
        "html": "<p>Why the \\(\\binom{n}{k}\\) out front? To get exactly \\(k\\) successes you (a) choose <em>which</em> \\(k\\) trials succeed, and (b) get the right successes/failures:</p>"
      },
      {
        "type": "formula",
        "tex": "P(X=k)=\\binom{n}{k}p^{k}(1-p)^{\\,n-k}, \\qquad k=0,1,\\dots,n",
        "caption": "arrangements × probability of one arrangement. Written X ~ Bin(n,p)."
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Is it Binomial? Run BINS.</strong> <strong>B</strong>inary · <strong>I</strong>ndependent · <strong>N</strong>umber of trials fixed · <strong>S</strong>ame probability. Cards <em>without</em> replacement fail I & S (Hypergeometric); \"roll until a six\" fails N (Geometric)."
      },
      {
        "type": "widget",
        "id": "dist-explorer",
        "title": "Distribution explorer",
        "caption": "Slide n and p; the binomial bars morph — symmetric at p=0.5, skewed otherwise.",
        "config": "binomial"
      },
      {
        "type": "formula",
        "tex": "E[X]=np, \\qquad \\operatorname{Var}(X)=np(1-p), \\qquad \\sigma=\\sqrt{np(1-p)}",
        "caption": "Binomial = sum of n Bernoullis ⇒ mean and variance just add. Variance is largest at p=0.5."
      },
      {
        "type": "example",
        "title": "Worked example — manufacturing line",
        "problem": "Defect rate 5%, sample of 20. P(exactly 2 defective)? E[X], Var(X)?",
        "steps": [
          "\\(\\binom{20}{2}(.05)^2(.95)^{18}=190(.0025)(.397)\\).",
          "\\(E[X]=20(.05)=1\\); \\(\\operatorname{Var}=20(.05)(.95)=0.95\\)."
        ],
        "answer": "P(X=2) ≈ 0.189, E[X]=1, Var=0.95."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "binomial with scipy + numpy",
        "code": "from scipy.stats import binom\nimport numpy as np\n\nprint(binom.pmf(2, 20, 0.05))    # 0.1887\nprint(binom.mean(20,0.05), binom.var(20,0.05))   # 1.0  0.95\n\n# simulate 100k experiments of n=20, p=0.05\nsim = np.random.binomial(20, 0.05, size=100_000)\nprint((sim==2).mean())           # ~0.189"
      }
    ],
    "rites": [
      {
        "q": "Derive the binomial PMF from first principles.",
        "a": "<p>For \\(k\\) successes in \\(n\\) independent trials each with success prob \\(p\\): one specific sequence with \\(k\\) successes has probability \\(p^k(1-p)^{n-k}\\). The number of distinct sequences (which trials succeed) is \\(\\binom{n}{k}\\). Summing the equal probabilities over all such sequences gives \\(P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}\\).</p>"
      },
      {
        "q": "Prove E[X]=np and Var(X)=np(1−p) using Bernoulli decomposition.",
        "a": "<p>Write \\(X=\\sum_{i=1}^n Y_i\\) with i.i.d. Bernoulli(p), \\(E[Y_i]=p\\), \\(\\operatorname{Var}(Y_i)=p(1-p)\\). By linearity \\(E[X]=\\sum E[Y_i]=np\\). By independence variances add: \\(\\operatorname{Var}(X)=\\sum \\operatorname{Var}(Y_i)=np(1-p)\\).</p>"
      },
      {
        "q": "When is the Binomial model NOT appropriate? Name the alternatives.",
        "a": "<p>If trials are dependent or \\(p\\) changes (e.g. sampling <em>without</em> replacement) → use the <strong>Hypergeometric</strong>. If the number of trials isn't fixed but you count until the first success → <strong>Geometric</strong>. If counting rare events in continuous time/space → <strong>Poisson</strong>. The BINS checklist flags these.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Fair coin 100 times. Expected number of heads?",
        "answer": 50,
        "tol": 0,
        "explain": "np = 100·0.5 = 50."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "X ~ Bin(10,0.25). Expected number of successes?",
        "answer": 2.5,
        "tol": 0.01,
        "explain": "10·0.25 = 2.5."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Guess all 10 MCQs (4 options). P(all wrong)?",
        "answer": 0.0563,
        "tol": 0.005,
        "explain": "(0.75)¹⁰ ≈ 0.0563."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "X ~ Bin(20,0.05). Variance?",
        "answer": 0.95,
        "tol": 0.001,
        "explain": "np(1−p)=0.95."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Draw 5 cards WITHOUT replacement, count aces — Binomial?",
        "choices": [
          "Yes",
          "No — not independent / p changes",
          "Yes if shuffled",
          "Only red"
        ],
        "answer": 1,
        "explain": "Hypergeometric, not Binomial."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "For fixed n=10, which p maximises the variance?",
        "choices": [
          "0.1",
          "0.5",
          "0.9",
          "all equal"
        ],
        "answer": 1,
        "explain": "p(1−p) peaks at p=0.5."
      }
    ]
  },
  "poisson": {
    "id": "poisson",
    "num": "4.3",
    "title": "Poisson & Geometric Distributions",
    "jp": "稀",
    "subtitle": "Counting rare events in time, and waiting for the first success.",
    "blurb": "The Poisson PMF (mean = variance = λ), its binomial origin, and the memoryless geometric.",
    "plain": "<p>How many messages will you get in the next hour? There is no fixed number of \"tries\" — they just <strong>arrive randomly over time</strong>. When you count random events in a time window (calls, typos, buses), that is the <em>Poisson</em> distribution, set by one number λ = the average rate.</p><p>Its cousin, the <em>Geometric</em>, asks a different question: <strong>\"how many tries until my FIRST success?\"</strong></p><div class=\"eg\"><b>Memoryless:</b> waiting for a bus, the time you have already waited does not change how much longer you will wait.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>\"On average 4 pizza orders per 30 min — how many next half hour?\" No fixed trials; we count events in a window. That's <strong>Poisson</strong>.</p>"
      },
      {
        "type": "formula",
        "tex": "P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^{k}}{k!}, \\quad k=0,1,2,\\dots, \\qquad E[X]=\\operatorname{Var}(X)=\\lambda",
        "caption": "λ = average events per interval. Unique fingerprint: mean equals variance."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Poisson is a binomial in disguise.</strong> Slice the interval into \\(n\\) tiny slots, each with a tiny success chance \\(p\\), keeping \\(np=\\lambda\\). Let \\(n\\to\\infty,\\ p\\to 0\\): the binomial PMF becomes the Poisson PMF. Rare events, many opportunities."
      },
      {
        "type": "widget",
        "id": "dist-explorer",
        "title": "Poisson & Geometric explorer",
        "caption": "Slide λ to reshape the Poisson, or switch to Geometric and slide p.",
        "config": "poisson"
      },
      {
        "type": "example",
        "title": "Worked example — pizza orders (λ = 4)",
        "problem": "P(exactly 2) and P(at least 1) in 30 minutes?",
        "steps": [
          "\\(P(X{=}2)=\\dfrac{e^{-4}4^2}{2!}=8e^{-4}\\).",
          "\\(P(X\\ge1)=1-e^{-4}\\)."
        ],
        "answer": "≈ 0.147 and ≈ 0.982."
      },
      {
        "type": "text",
        "html": "<p>\"How many attempts <em>until</em> my first win?\" That's <strong>Geometric</strong> — to first succeed on trial \\(x\\), you need \\(x-1\\) failures then a success.</p>"
      },
      {
        "type": "formula",
        "tex": "P(X=x)=(1-p)^{\\,x-1}p, \\quad x=1,2,\\dots, \\qquad E[X]=\\frac1p, \\quad \\operatorname{Var}(X)=\\frac{1-p}{p^2}",
        "caption": "Watch the exponent: x−1 failures, not x. Tail rule: P(X>k)=(1−p)ᵏ."
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Memoryless.</strong> Failing 5 times doesn't 'use up' bad luck: \\(P(X>s+t\\mid X>s)=P(X>t)\\). The geometric forgets the past."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "poisson & geometric",
        "code": "from scipy.stats import poisson, geom\n\nprint(poisson.pmf(2, 4))         # 0.1465\nprint(1 - poisson.cdf(0, 4))     # P(X>=1) = 0.9817\n\nprint(geom.pmf(3, 0.2))          # 0.128   first success on 3rd try\nprint(geom.sf(5, 0.2))           # P(X>5) = 0.8**5 = 0.32768\nprint(1/0.2)                     # E[X] = 5"
      }
    ],
    "rites": [
      {
        "q": "Show how the Poisson distribution arises as a limit of the Binomial.",
        "a": "<p>Take \\(X\\sim\\text{Bin}(n,p)\\) with \\(np=\\lambda\\) fixed, and let \\(n\\to\\infty\\), \\(p=\\lambda/n\\to 0\\). Then \\(\\binom{n}{k}p^k(1-p)^{n-k}=\\dfrac{n!}{k!(n-k)!}\\Big(\\frac{\\lambda}{n}\\Big)^k\\Big(1-\\frac{\\lambda}{n}\\Big)^{n-k}\\to \\dfrac{\\lambda^k}{k!}e^{-\\lambda}\\), using \\(\\frac{n!}{(n-k)!n^k}\\to1\\) and \\((1-\\lambda/n)^n\\to e^{-\\lambda}\\). Rare events (small \\(p\\)), many opportunities (large \\(n\\)).</p>"
      },
      {
        "q": "Derive the geometric PMF and explain the memoryless property.",
        "a": "<p>To get the first success on trial \\(x\\): the first \\(x-1\\) trials must fail (prob \\((1-p)^{x-1}\\)) and trial \\(x\\) succeeds (prob \\(p\\)); by independence multiply: \\(P(X=x)=(1-p)^{x-1}p\\). <strong>Memoryless:</strong> \\(P(X>s+t\\mid X>s)=\\dfrac{(1-p)^{s+t}}{(1-p)^s}=(1-p)^t=P(X>t)\\) — past failures don't change future waiting.</p>"
      },
      {
        "q": "What is special about the Poisson's mean and variance, and how is it used?",
        "a": "<p>For Poisson, \\(E[X]=\\operatorname{Var}(X)=\\lambda\\). Practically, if a dataset of counts has sample variance ≈ sample mean, a Poisson model is plausible; variance ≫ mean signals 'over-dispersion' (Poisson is a poor fit).</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Server crashes Poisson λ=0.5/day. P(no crash tomorrow)?",
        "answer": 0.6065,
        "tol": 0.005,
        "explain": "e^(−0.5) ≈ 0.6065."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Geometric p=0.2. P(first success on exactly the 3rd try)?",
        "answer": 0.128,
        "tol": 0.005,
        "explain": "0.8²·0.2 = 0.128."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Calls average 10/hour. 'P(exactly 15 next hour)' is…",
        "choices": [
          "Binomial",
          "Geometric",
          "Poisson(λ=10)",
          "Uniform"
        ],
        "answer": 2,
        "explain": "Events in a fixed interval ⇒ Poisson."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Geometric p=0.2. P(more than 5 attempts needed)?",
        "answer": 0.3277,
        "tol": 0.005,
        "explain": "(0.8)⁵ = 0.32768."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Poisson λ=4. P(exactly 2 orders)?",
        "answer": 0.1465,
        "tol": 0.005,
        "explain": "8e⁻⁴ ≈ 0.1465."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Which property is unique to the Poisson?",
        "choices": [
          "Mean = Variance",
          "Mean = 0",
          "Always symmetric",
          "Bounded above"
        ],
        "answer": 0,
        "explain": "Both equal λ."
      }
    ]
  },
  "jointrv": {
    "id": "jointrv",
    "num": "4.4",
    "title": "Multiple Discrete Random Variables",
    "jp": "同",
    "subtitle": "When two quantities vary together — and how to read their joint table.",
    "blurb": "Joint PMFs, marginals (the totals in the margins), conditionals, and testing independence.",
    "plain": "<p>Often two things vary <strong>together</strong> — a student's study hours <em>and</em> their marks. A <em>joint distribution</em> is just a table giving the chance of each combination.</p><p>Add up a whole row or column and you recover one variable on its own — that total written in the \"margin\" is called a <em>marginal</em>. The table also lets you ask \"given X happened, what about Y?\"</p><div class=\"eg\"><b>Independence check:</b> if chance(X and Y) = chance(X) × chance(Y) in <i>every</i> cell, the two do not influence each other.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>Real questions involve two things at once: height <em>and</em> weight, the word \"WIN\" <em>and</em> \"CREDITED\". Enter the <strong>joint distribution</strong>.</p>"
      },
      {
        "type": "formula",
        "tex": "p(x,y)=P(X=x,\\,Y=y), \\qquad \\sum_x\\sum_y p(x,y)=1",
        "caption": "Joint PMF: probability of each combination; the whole table sums to 1."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Marginals live in the margins.</strong> Sum a row/column to recover one variable alone: \\(P(X=x)=\\sum_y p(x,y)\\). That's where the name comes from."
      },
      {
        "type": "widget",
        "id": "joint",
        "title": "Joint distribution table",
        "caption": "Edit a joint PMF, get marginals on the sides, query conditionals, and test independence.",
        "config": ""
      },
      {
        "type": "formula",
        "tex": "P(Y=y\\mid X=x)=\\dfrac{p(x,y)}{P(X=x)}",
        "caption": "Conditional PMF: restrict to the row X=x, then renormalise."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Independence test.</strong> \\(X,Y\\) independent only if \\(p(x,y)=P(X=x)P(Y=y)\\) for <em>every</em> cell. One failing cell ⇒ dependent. (A 0 cell where both marginals are positive ⇒ dependent.)"
      },
      {
        "type": "example",
        "title": "Worked example — find the constant",
        "problem": "p(x,y)=k(x+y) for x∈{0,1,2,3}, y∈{0,1,2}. Find k.",
        "steps": [
          "For fixed x, \\(\\sum_y(x+y)=3x+3\\).",
          "\\(\\sum_{x=0}^3(3x+3)=30\\), so \\(30k=1\\)."
        ],
        "answer": "k = 1/30."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "marginals & independence with numpy",
        "code": "import numpy as np\nJ = np.array([[0.2,0.2,0.0],     # rows = Y, cols = X\n              [0.0,0.1,0.2],\n              [0.1,0.0,0.2]])\nPX = J.sum(axis=0)               # marginal of X\nPY = J.sum(axis=1)               # marginal of Y\nindep = np.allclose(J, np.outer(PY, PX))\nprint(PX, PY, indep)            # ... False (dependent)"
      }
    ],
    "rites": [
      {
        "q": "Define joint, marginal and conditional PMFs and relate them.",
        "a": "<p><strong>Joint:</strong> \\(p(x,y)=P(X=x,Y=y)\\), summing to 1. <strong>Marginal:</strong> \\(p_X(x)=\\sum_y p(x,y)\\) (sum out the other variable). <strong>Conditional:</strong> \\(p_{Y\\mid X}(y\\mid x)=\\dfrac{p(x,y)}{p_X(x)}\\). They link via \\(p(x,y)=p_{Y\\mid X}(y\\mid x)\\,p_X(x)\\).</p>"
      },
      {
        "q": "How do you test whether two discrete RVs are independent from a joint table?",
        "a": "<p>Compute both marginals, then check \\(p(x,y)=p_X(x)\\,p_Y(y)\\) for <em>every</em> cell. If all cells satisfy it, \\(X\\perp Y\\); if even one fails, they are dependent. A quick disqualifier: a joint entry of 0 where both marginals are positive forces dependence.</p>"
      },
      {
        "q": "If X~Poisson(2), Y~Poisson(3) are independent, find P(X=1, Y=2).",
        "a": "<p>Independence ⇒ multiply marginals: \\(P(X{=}1)=2e^{-2}\\), \\(P(Y{=}2)=\\tfrac92 e^{-3}\\). Product \\(=9e^{-5}\\approx 0.0606\\).</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Two fair dice, X=first, Y=second, Z=X+Y. P(X=2 and Z=5) = 1/n. Give n.",
        "answer": 36,
        "tol": 0,
        "explain": "Forces Y=3: (1/6)(1/6)=1/36."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Joint k(2x+y), x∈{0,1,2}, y∈{1,2}. k = 1/?  Give the denominator.",
        "answer": 21,
        "tol": 0,
        "explain": "Σ(2x+y)=21 ⇒ k=1/21."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "P(X=1)=.4, P(Y=2)=.5, P(X=1,Y=2)=.2. Independent for these?",
        "choices": [
          "Yes — .4×.5=.2",
          "No",
          "Need more cells",
          "Only if disjoint"
        ],
        "answer": 0,
        "explain": "Product = joint = 0.2."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Independent X,Y with P(X=k)=0.5ᵏ, P(Y=k)=0.5ᵏ (k≥1). P(X=Y)?",
        "answer": 0.3333,
        "tol": 0.01,
        "explain": "Σ0.25ᵏ = 1/3."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "X~Poisson(2), Y~Poisson(3) independent. P(X=1,Y=2) (decimal)?",
        "answer": 0.0606,
        "tol": 0.005,
        "explain": "9e⁻⁵ ≈ 0.0606."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "X~Bin(10,0.4), Y~Bin(10,0.6) independent. P(X=5,Y=5) (decimal)?",
        "answer": 0.0403,
        "tol": 0.005,
        "explain": "0.2007² ≈ 0.0403."
      }
    ]
  },
  "calculus": {
    "id": "calculus",
    "num": "5.1",
    "title": "Basic Calculus (Toolkit)",
    "jp": "微",
    "subtitle": "The derivatives and integrals that power continuous probability.",
    "blurb": "Just enough differentiation and integration to handle densities, expectations and optimisation.",
    "plain": "<p>Just two friendly ideas. A <strong>derivative</strong> measures how fast something changes — the steepness of a hill at one point. An <strong>integral</strong> adds up tiny slices — the area under a curve.</p><p>Why do we need them here? For <em>continuous</em> things (like time), probability is the <strong>area under a curve</strong> (that is integration), and the \"most likely\" spot is where a curve is flat, i.e. its slope is 0 (that is differentiation).</p><div class=\"eg\"><b>Two to remember:</b> the slope of x² is 2x; the area under a curve from a to b is F(b) − F(a).</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>Continuous probability runs on calculus: densities are integrated to get probabilities, expectations are integrals, and \"most likely\" values come from setting derivatives to zero.</p>"
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>The derivative</strong> \\(f'(x)\\) is the instantaneous rate of change — the slope of the tangent line at \\(x\\)."
      },
      {
        "type": "formula",
        "tex": "\\frac{d}{dx}x^n=nx^{n-1},\\ \\frac{d}{dx}e^x=e^x,\\ \\frac{d}{dx}\\ln x=\\frac1x,\\ \\frac{d}{dx}\\sin x=\\cos x",
        "caption": "The core derivative rules you'll reuse constantly."
      },
      {
        "type": "formula",
        "tex": "(uv)'=u'v+uv', \\qquad \\frac{d}{dx}f(g(x))=f'(g(x))\\,g'(x)",
        "caption": "Product rule and chain rule."
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>Maxima & minima.</strong> Critical points: \\(f'(c)=0\\). Second-derivative test: \\(f''(c)<0\\) ⇒ local max, \\(f''(c)>0\\) ⇒ local min, \\(f''(c)=0\\) ⇒ inconclusive. (We'll reuse this for MLE.)"
      },
      {
        "type": "formula",
        "tex": "\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\ (n\\neq-1), \\qquad \\int_a^b f(x)\\,dx=F(b)-F(a)",
        "caption": "Indefinite = family of antiderivatives; definite = a number (net signed area)."
      },
      {
        "type": "example",
        "title": "Worked example — a normalising constant",
        "problem": "Density f(x)=kx on [0,2]. Find k, then P(1 ≤ X ≤ 2).",
        "steps": [
          "\\(\\int_0^2 kx\\,dx=2k=1\\Rightarrow k=\\tfrac12\\).",
          "\\(P=\\int_1^2 \\tfrac{x}{2}dx=\\tfrac14(4-1)\\)."
        ],
        "answer": "k = 1/2, P = 3/4."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "calculus with sympy",
        "code": "import sympy as sp\nx, k = sp.symbols('x k', positive=True)\n\nf = k*x\nk_val = sp.solve(sp.integrate(f, (x,0,2)) - 1, k)[0]   # 1/2\nprint(k_val)\nP = sp.integrate(f.subs(k,k_val), (x,1,2))             # 3/4\nprint(P)\nprint(sp.diff(x**2*sp.exp(3*x), x))   # 2*x*e^(3x)+3*x^2*e^(3x)"
      }
    ],
    "rites": [
      {
        "q": "Explain how a probability density is 'normalised' using integration.",
        "a": "<p>A valid PDF must satisfy \\(\\int_{-\\infty}^{\\infty} f(x)\\,dx=1\\). If \\(f=k\\,g(x)\\) for some shape \\(g\\), you find the constant \\(k\\) by solving \\(k\\int g=1\\), i.e. \\(k=1/\\int g\\). This guarantees total probability equals 1.</p>"
      },
      {
        "q": "Why do we set the derivative to zero to find a maximum, and how does the second derivative confirm it?",
        "a": "<p>At a smooth interior maximum the tangent is horizontal, so \\(f'(c)=0\\). To confirm it's a max (not a min/inflection) check curvature: \\(f''(c)<0\\) means the curve bends downward (a peak); \\(f''(c)>0\\) is a trough; \\(f''(c)=0\\) is inconclusive. This is exactly the logic used to derive a Maximum Likelihood Estimator.</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "d/dx of x³ is…",
        "choices": [
          "3x²",
          "x²",
          "3x",
          "x⁴/4"
        ],
        "answer": 0,
        "explain": "nxⁿ⁻¹ = 3x²."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "∫₀¹ 2x dx = ?",
        "answer": 1,
        "tol": 0.001,
        "explain": "[x²]₀¹ = 1."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "d/dx of x²·e^(3x) is…",
        "choices": [
          "2x e^(3x)",
          "e^(3x)(2x+3x²)",
          "3x² e^(3x)",
          "6x e^(3x)"
        ],
        "answer": 1,
        "explain": "Product rule."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "∫₀¹ 2x/(1+x²) dx (decimal)?",
        "answer": 0.6931,
        "tol": 0.01,
        "explain": "ln 2 ≈ 0.693."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "f(x)=(2x−1)²+3. The critical point at x=½ is a…",
        "choices": [
          "max",
          "min",
          "saddle",
          "discontinuity"
        ],
        "answer": 1,
        "explain": "f''=8>0 → minimum (value 3)."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "∫₋₂² (x⁵ − 3x³ + 7) dx = ?",
        "answer": 28,
        "tol": 0,
        "explain": "Odd terms vanish; ∫7 = 28."
      }
    ]
  },
  "continuous": {
    "id": "continuous",
    "num": "5.2",
    "title": "Continuous & Continuous Uniform Distributions",
    "jp": "連",
    "subtitle": "Probability as area, and the simplest continuous model: flat density.",
    "blurb": "From PMFs to PDFs, expectation by integration, and the continuous uniform on [a,b].",
    "plain": "<p>A <em>discrete</em> thing has separate values (0, 1, 2 children). A <em>continuous</em> thing can be <strong>any value in a range</strong> — your exact height could be 170.3 cm, 170.31 cm, 170.314 cm, and so on.</p><p>So you cannot ask \"chance of exactly 170.000…cm\" (that is basically 0). Instead you ask \"chance between 170 and 171\", which is the <strong>area under a curve</strong>. The simplest such curve is perfectly flat — the <em>continuous uniform</em>.</p><div class=\"eg\"><b>Everyday flat case:</b> a bus equally likely to arrive at any minute in the next 10 — that is uniform on [0, 10].</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Continuous distribution.</strong> Described by a density \\(f(x)\\ge 0\\) with \\(\\int_{-\\infty}^{\\infty} f=1\\). Probabilities are <em>areas</em>: \\(P(a\\le X\\le b)=\\int_a^b f\\). For continuous RVs, \\(P(X=c)=0\\)."
      },
      {
        "type": "formula",
        "tex": "E[X]=\\int_{-\\infty}^{\\infty} x f(x)\\,dx, \\qquad \\operatorname{Var}(X)=\\int (x-\\mu)^2 f(x)\\,dx = E[X^2]-\\mu^2",
        "caption": "Same ideas as discrete, with sums replaced by integrals."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Continuous Uniform on [a,b].</strong> Equal density everywhere in the interval: \\(f(x)=\\frac{1}{b-a}\\) for \\(a\\le x\\le b\\) (else 0). The 'no information' distribution."
      },
      {
        "type": "formula",
        "tex": "U(a,b):\\ f(x)=\\frac{1}{b-a},\\quad E[X]=\\frac{a+b}{2},\\quad \\operatorname{Var}(X)=\\frac{(b-a)^2}{12},\\quad F(x)=\\frac{x-a}{b-a}",
        "caption": "Probability of any sub-interval is proportional to its length."
      },
      {
        "type": "widget",
        "id": "cont-dist",
        "title": "Continuous distribution lab",
        "caption": "Switch Uniform/Exponential, shade an interval, and read off P(lo ≤ X ≤ hi).",
        "config": "uniform"
      },
      {
        "type": "example",
        "title": "Worked example — download time",
        "problem": "A file takes 2–5 s, all equally likely (Uniform[2,5]). P(X = 3 s)? P(2 < X < 5)?",
        "steps": [
          "Density \\(=\\frac{1}{3}\\). A single point has zero area: \\(P(X{=}3)=0\\).",
          "Whole support: \\(\\int_2^5 \\tfrac13 dx=1\\)."
        ],
        "answer": "P(X=3)=0, P(2<X<5)=1."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "continuous uniform with scipy",
        "code": "from scipy.stats import uniform\n# Uniform on [2,5]: loc=2, scale=3\nU = uniform(loc=2, scale=3)\nprint(U.mean(), U.var())          # 3.5  0.75\nprint(U.cdf(4) - U.cdf(3))        # P(3<X<4) = 1/3\nprint(U.pdf(3))                   # 0.333 (a density, NOT a probability)"
      }
    ],
    "rites": [
      {
        "q": "Contrast a PMF and a PDF. Why can a density exceed 1?",
        "a": "<p>A PMF gives actual probabilities at points (each \\(\\le 1\\), summing to 1). A PDF gives a <em>density</em> — probability per unit length — whose <em>area</em> over an interval is the probability. Over a short interval of width \\(w\\), \\(P\\approx f(x)\\,w\\); if \\(w\\) is small, \\(f(x)\\) can be \\(>1\\) while the area stays \\(\\le 1\\). Only \\(\\int f = 1\\) is required.</p>"
      },
      {
        "q": "Derive the mean and variance of the continuous uniform on [a,b].",
        "a": "<p>\\(E[X]=\\int_a^b x\\frac{1}{b-a}dx=\\frac{1}{b-a}\\cdot\\frac{b^2-a^2}{2}=\\frac{a+b}{2}\\). For variance, \\(E[X^2]=\\int_a^b x^2\\frac{1}{b-a}dx=\\frac{a^2+ab+b^2}{3}\\); subtracting \\(\\mu^2=\\left(\\frac{a+b}{2}\\right)^2\\) gives \\(\\frac{(b-a)^2}{12}\\).</p>"
      },
      {
        "q": "How do you get a CDF from a PDF and vice-versa?",
        "a": "<p>\\(F(x)=\\int_{-\\infty}^{x} f(t)\\,dt\\) (accumulate the density). Conversely, where \\(F\\) is differentiable, \\(f(x)=F'(x)\\). Probabilities of intervals are CDF differences: \\(P(a\\le X\\le b)=F(b)-F(a)\\).</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "For continuous X, P(X = 3.0) equals…",
        "choices": [
          "f(3)",
          "0",
          "1",
          "depends"
        ],
        "answer": 1,
        "explain": "A point has zero area."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Uniform[2,5]. Mean?",
        "answer": 3.5,
        "tol": 0.01,
        "explain": "(a+b)/2 = 3.5."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Uniform[0,10]. P(3 ≤ X ≤ 7)?",
        "answer": 0.4,
        "tol": 0.01,
        "explain": "(7−3)/10 = 0.4."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Uniform[2,5]. Variance? (decimal)",
        "answer": 0.75,
        "tol": 0.01,
        "explain": "(b−a)²/12 = 9/12 = 0.75."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "f(x)=kx on [0,2]. Find P(1 ≤ X ≤ 2) with k=1/2.",
        "answer": 0.75,
        "tol": 0.01,
        "explain": "∫₁² (x/2)dx = 3/4."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Uniform[0,1]. E[X²]? (decimal)",
        "answer": 0.3333,
        "tol": 0.01,
        "explain": "∫₀¹ x² dx = 1/3."
      }
    ]
  },
  "exponential": {
    "id": "exponential",
    "num": "5.3",
    "title": "Exponential Distribution",
    "jp": "指",
    "subtitle": "The waiting time between random (Poisson) events.",
    "blurb": "PDF, CDF, mean 1/λ, the memoryless property, and its deep link to the Poisson process.",
    "plain": "<p>You are at a bus stop where buses come at random. <strong>How long until the next one?</strong> That waiting time follows the <em>exponential</em> distribution, controlled by the rate λ (more buses per hour → shorter waits).</p><p>Its famous quirk: it has <strong>no memory</strong>. Already waited 10 minutes? That does not change how much longer you will wait — the clock effectively resets.</p><div class=\"eg\"><b>Where it shows up:</b> time until a machine fails, time between customer arrivals, time between earthquakes.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>If events arrive as a Poisson process at rate \\(\\lambda\\), the <em>time you wait</em> for the next one is <strong>Exponential</strong>(\\(\\lambda\\)) — the continuous cousin of the geometric.</p>"
      },
      {
        "type": "formula",
        "tex": "f(x)=\\lambda e^{-\\lambda x}\\ (x\\ge0), \\quad F(x)=1-e^{-\\lambda x}, \\quad E[X]=\\frac1\\lambda, \\quad \\operatorname{Var}(X)=\\frac1{\\lambda^2}",
        "caption": "Higher rate λ ⇒ shorter waits. Mean and standard deviation are both 1/λ."
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Memoryless (continuous).</strong> \\(P(X>s+t\\mid X>s)=P(X>t)\\). A component that's lasted 5 years is 'as good as new' under this model — the only continuous distribution with this property."
      },
      {
        "type": "widget",
        "id": "cont-dist",
        "title": "Exponential lab",
        "caption": "Slide λ and shade a waiting-time interval; watch the right-skewed decay.",
        "config": "exponential"
      },
      {
        "type": "example",
        "title": "Worked example — time to failure",
        "problem": "Lifetime ~ Exponential, 10% have failed by 1000 h. P(survives past 5000 h)?",
        "steps": [
          "\\(F(1000)=1-e^{-1000\\lambda}=0.10\\Rightarrow e^{-1000\\lambda}=0.9\\).",
          "\\(P(X>5000)=e^{-5000\\lambda}=(e^{-1000\\lambda})^5=0.9^5\\)."
        ],
        "answer": "0.9⁵ ≈ 0.5905."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "exponential with scipy",
        "code": "from scipy.stats import expon\nimport numpy as np\nlam = 0.5\nE = expon(scale=1/lam)            # scale = 1/λ\nprint(E.mean(), E.std())          # 2.0  2.0\nprint(E.sf(3))                    # P(X>3) = e^(-1.5) = 0.2231\n\n# memoryless check by simulation\nx = np.random.exponential(1/lam, 1_000_000)\nprint((x[x>2] - 2).mean())        # ~2.0  (same as fresh mean)"
      }
    ],
    "rites": [
      {
        "q": "Derive the exponential CDF from its PDF and find the mean.",
        "a": "<p>\\(F(x)=\\int_0^x \\lambda e^{-\\lambda t}dt=[-e^{-\\lambda t}]_0^x=1-e^{-\\lambda x}\\). Mean: \\(E[X]=\\int_0^\\infty x\\lambda e^{-\\lambda x}dx=\\frac1\\lambda\\) (integration by parts). So \\(P(X>x)=e^{-\\lambda x}\\).</p>"
      },
      {
        "q": "Prove the exponential is memoryless.",
        "a": "<p>Using \\(P(X>x)=e^{-\\lambda x}\\): \\(P(X>s+t\\mid X>s)=\\dfrac{P(X>s+t)}{P(X>s)}=\\dfrac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}=P(X>t)\\). The remaining wait doesn't depend on how long you've already waited.</p>"
      },
      {
        "q": "Explain the relationship between the Poisson and Exponential distributions.",
        "a": "<p>They describe the same process from two angles. If events occur as a Poisson process with rate \\(\\lambda\\), then the <em>number</em> of events in a fixed interval is Poisson(\\(\\lambda t\\)), while the <em>inter-arrival times</em> (gaps between consecutive events) are i.i.d. Exponential(\\(\\lambda\\)). Geometric ↔ Poisson-binomial in discrete time becomes Exponential ↔ Poisson in continuous time.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Exponential with λ=0.5. Mean waiting time?",
        "answer": 2,
        "tol": 0.01,
        "explain": "1/λ = 2."
      },
      {
        "type": "num",
        "diff": "easy",
        "q": "Exponential λ=1. P(X>1) (decimal)?",
        "answer": 0.3679,
        "tol": 0.01,
        "explain": "e⁻¹ ≈ 0.368."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Exponential λ=0.5. P(X>3) (decimal)?",
        "answer": 0.2231,
        "tol": 0.01,
        "explain": "e^(−1.5) ≈ 0.223."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Exponential, mean 4. Find λ.",
        "answer": 0.25,
        "tol": 0.01,
        "explain": "λ = 1/mean = 0.25."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "10% failed by 1000h. P(survive past 5000h)? (decimal)",
        "answer": 0.5905,
        "tol": 0.01,
        "explain": "0.9⁵ ≈ 0.5905."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Which distribution is the continuous, memoryless one?",
        "choices": [
          "Normal",
          "Uniform",
          "Exponential",
          "Binomial"
        ],
        "answer": 2,
        "explain": "Exponential is the unique memoryless continuous distribution."
      }
    ]
  },
  "statistics": {
    "id": "statistics",
    "num": "6.1",
    "title": "Introduction to Statistics",
    "jp": "統",
    "subtitle": "Populations vs samples, parameters vs statistics, and how we sample.",
    "blurb": "The vocabulary of inference: population parameter, sample statistic, and sampling methods that keep estimates honest.",
    "plain": "<p>You cannot measure <strong>every</strong> person in the country, so you measure a small <em>sample</em> and use it to make a smart guess about the whole <em>population</em>.</p><p>A true fact about the whole population (the real average height) is a <strong>parameter</strong>; the same thing calculated from your sample is a <strong>statistic</strong> — your best estimate of it. Picking the sample <em>randomly</em> is what makes the guess trustworthy.</p><div class=\"eg\"><b>Watch out:</b> a huge but biased sample (only volunteers) is worse than a small <i>random</i> one — bias beats size.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Population vs sample.</strong> The <em>population</em> is everyone/everything you care about; a <em>sample</em> is the subset you actually measure. Probability reasons population→sample; <em>statistics</em> reasons sample→population."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Parameter vs statistic.</strong> A <strong>population parameter</strong> is a fixed (usually unknown) number describing the population — mean \\(\\mu\\), variance \\(\\sigma^2\\), proportion \\(p\\). A <strong>sample statistic</strong> is computed from data and <em>estimates</em> a parameter — \\(\\bar{x}\\), \\(s^2\\), \\(\\hat{p}\\). Statistics vary from sample to sample; parameters don't."
      },
      {
        "type": "formula",
        "tex": "\\mu=\\frac1N\\sum_{i=1}^{N} x_i \\ \\text{(parameter)} \\qquad \\bar{x}=\\frac1n\\sum_{i=1}^{n} x_i \\ \\text{(statistic)}",
        "caption": "Same formula shape, different worlds: all N vs the n you sampled."
      },
      {
        "type": "text",
        "html": "<p><strong>Sampling methods</strong> decide how trustworthy your statistic is:</p>\n        <ul><li><strong>Simple random</strong> — every unit equally likely (the gold standard).</li><li><strong>Stratified</strong> — split into groups (strata), sample each.</li><li><strong>Systematic</strong> — every k-th unit.</li><li><strong>Cluster</strong> — sample whole groups.</li><li><strong>Convenience</strong> — whoever's easy (biased — avoid for inference).</li></ul>"
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Bias beats size.</strong> A huge but biased sample (e.g. only volunteers) is worse than a small random one. Random selection is what licenses generalising from sample to population."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "parameter vs statistic by simulation",
        "code": "import numpy as np\nrng = np.random.default_rng(0)\npopulation = rng.normal(170, 8, size=100_000)   # heights\nmu = population.mean()                           # parameter μ ≈ 170\n\nsample = rng.choice(population, size=50, replace=False)\nxbar = sample.mean()                             # statistic x̄ (varies!)\nprint(round(mu,2), round(xbar,2))               # 170.0   ~ 169.x"
      }
    ],
    "rites": [
      {
        "q": "Distinguish a population parameter from a sample statistic with examples.",
        "a": "<p>A <strong>parameter</strong> is a fixed numerical property of the whole population, usually unknown (e.g. mean \\(\\mu\\), proportion \\(p\\), variance \\(\\sigma^2\\)). A <strong>statistic</strong> is a number computed from a sample, used to estimate the parameter (e.g. \\(\\bar{x}\\), \\(\\hat{p}\\), \\(s^2\\)). The statistic is itself a random variable — it changes if you draw a different sample — whereas the parameter is constant.</p>"
      },
      {
        "q": "Why is simple random sampling preferred, and what goes wrong with convenience sampling?",
        "a": "<p>Simple random sampling gives every unit an equal chance, so the sample is representative <em>in expectation</em> and statistics are unbiased estimators of parameters; it also justifies the probability theory behind confidence/CLT results. Convenience sampling selects easy-to-reach units, systematically over/under-representing groups → <strong>selection bias</strong>, which no increase in sample size fixes.</p>"
      },
      {
        "q": "Explain the difference between descriptive and inferential statistics.",
        "a": "<p><strong>Descriptive</strong> statistics summarise the data you have (mean, SD, box plots, charts). <strong>Inferential</strong> statistics use a sample to draw conclusions about the population (estimation, confidence intervals, hypothesis tests), quantifying uncertainty via sampling distributions.</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "The true mean height of ALL students is a…",
        "choices": [
          "statistic",
          "parameter",
          "sample",
          "estimate"
        ],
        "answer": 1,
        "explain": "A fixed population value = parameter."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "x̄ computed from 50 students is a…",
        "choices": [
          "parameter",
          "statistic",
          "population",
          "constant"
        ],
        "answer": 1,
        "explain": "Computed from a sample = statistic."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Splitting into year-groups then sampling each is…",
        "choices": [
          "cluster",
          "stratified",
          "systematic",
          "convenience"
        ],
        "answer": 1,
        "explain": "Strata = subgroups sampled separately."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Which varies from sample to sample?",
        "choices": [
          "μ",
          "σ²",
          "x̄",
          "population size N"
        ],
        "answer": 2,
        "explain": "Statistics like x̄ vary; parameters are fixed."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "A 1-million-person online poll of volunteers mainly suffers from…",
        "choices": [
          "small sample",
          "selection bias",
          "rounding",
          "too much randomness"
        ],
        "answer": 1,
        "explain": "Self-selection ⇒ bias; size doesn't fix it."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Choosing every 10th name on a list is…",
        "choices": [
          "stratified",
          "systematic",
          "cluster",
          "simple random"
        ],
        "answer": 1,
        "explain": "Every k-th unit = systematic sampling."
      }
    ]
  },
  "dispersion": {
    "id": "dispersion",
    "num": "6.2",
    "title": "Measures of Dispersion & Box Plot",
    "jp": "散",
    "subtitle": "How spread out is the data — range, variance, SD, IQR, and the five-number summary.",
    "blurb": "Quantify spread, build the five-number summary, and read/draw a box plot with outliers.",
    "plain": "<p>Two classes both average <strong>50 marks</strong>. In one, almost everyone scored near 50; in the other, half scored 90 and half scored 10. <em>Same average — completely different spread.</em></p><p><em>Measures of dispersion</em> (range, IQR, standard deviation) capture that spread. A <strong>box plot</strong> draws it at a glance: a box for the middle 50% of the data, with dots marking unusual \"outlier\" values.</p><div class=\"eg\"><b>IQR:</b> the range of the middle half (Q3 − Q1). It ignores the extremes, so one weird value cannot fool it.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p>Two datasets can share a mean yet feel completely different. <strong>Dispersion</strong> measures how spread out values are.</p>"
      },
      {
        "type": "formula",
        "tex": "\\text{range}=\\max-\\min, \\quad s^2=\\frac{1}{n-1}\\sum (x_i-\\bar{x})^2, \\quad s=\\sqrt{s^2}",
        "caption": "Sample variance uses n−1 (Bessel's correction) so it's unbiased for σ². SD is in original units."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Five-number summary:</strong> min, \\(Q_1\\), median (\\(Q_2\\)), \\(Q_3\\), max. The <strong>IQR</strong> \\(=Q_3-Q_1\\) holds the middle 50% and is robust to outliers."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Outlier rule (1.5×IQR).</strong> Points below \\(Q_1-1.5\\,\\text{IQR}\\) or above \\(Q_3+1.5\\,\\text{IQR}\\) are flagged as outliers; whiskers reach the most extreme non-outlier values."
      },
      {
        "type": "widget",
        "id": "boxplot",
        "title": "Box plot builder",
        "caption": "Type a dataset (or roll random data); get the five-number summary, IQR, SD and a drawn box plot with outliers.",
        "config": ""
      },
      {
        "type": "example",
        "title": "Worked example — IQR & outliers",
        "problem": "Data: 7,8,8,9,10,10,11,12,13,14,15,21. Find IQR and any outliers.",
        "steps": [
          "\\(Q_1\\approx 8.75\\), \\(Q_3\\approx 13.25\\) ⇒ \\(\\text{IQR}\\approx 4.5\\).",
          "Upper fence \\(=Q_3+1.5\\,\\text{IQR}\\approx 20.0\\); 21 exceeds it."
        ],
        "answer": "IQR ≈ 4.5; 21 is an outlier."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "dispersion & box plot",
        "code": "import numpy as np\nx = np.array([7,8,8,9,10,10,11,12,13,14,15,21])\nprint(x.std(ddof=1))                 # sample SD\nq1, q3 = np.percentile(x, [25,75])\niqr = q3 - q1\noutliers = x[(x < q1-1.5*iqr) | (x > q3+1.5*iqr)]\nprint(q1, q3, iqr, outliers)         # ... [21]\n\nimport matplotlib.pyplot as plt\nplt.boxplot(x, vert=False); plt.show()"
      }
    ],
    "rites": [
      {
        "q": "Why does sample variance divide by n−1 instead of n?",
        "a": "<p>Using \\(\\bar{x}\\) (itself estimated from the data) makes deviations \\(x_i-\\bar{x}\\) systematically a bit too small, so dividing by \\(n\\) <em>under-estimates</em> \\(\\sigma^2\\). Dividing by \\(n-1\\) (Bessel's correction) compensates and makes \\(s^2\\) an <strong>unbiased</strong> estimator: \\(E[s^2]=\\sigma^2\\). The \\(n-1\\) reflects one lost degree of freedom (the mean constraint).</p>"
      },
      {
        "q": "Explain the five-number summary and how a box plot encodes it.",
        "a": "<p>The five-number summary is min, \\(Q_1\\), median, \\(Q_3\\), max. In a box plot the <strong>box</strong> spans \\(Q_1\\) to \\(Q_3\\) (the IQR) with a line at the median; the <strong>whiskers</strong> extend to the most extreme values within \\(1.5\\times\\text{IQR}\\) of the box; points beyond are drawn individually as <strong>outliers</strong>. It shows centre, spread, skew and outliers at a glance.</p>"
      },
      {
        "q": "Why is the IQR considered 'robust' compared with the range or standard deviation?",
        "a": "<p>The range and SD use the extreme values, so a single outlier can change them drastically. The IQR depends only on the 25th and 75th percentiles — the middle 50% — so extreme points barely affect it. That robustness is why box plots use the IQR to define whiskers and outliers.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Data 2,4,4,4,5,5,7,9. Range?",
        "answer": 7,
        "tol": 0,
        "explain": "9 − 2 = 7."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "IQR equals…",
        "choices": [
          "max − min",
          "Q3 − Q1",
          "mean − median",
          "σ²"
        ],
        "answer": 1,
        "explain": "Interquartile range = Q3 − Q1."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "Data 4,8,12. Sample variance s² (÷ n−1)?",
        "answer": 16,
        "tol": 0.1,
        "explain": "Σ(x−8)²=32; 32/2 = 16."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "An outlier (1.5×IQR rule) lies beyond…",
        "choices": [
          "Q1−IQR / Q3+IQR",
          "Q1−1.5·IQR / Q3+1.5·IQR",
          "μ±σ",
          "min/max"
        ],
        "answer": 1,
        "explain": "The 1.5×IQR fences."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Q1=10, Q3=22. Upper outlier fence Q3+1.5·IQR?",
        "answer": 40,
        "tol": 0,
        "explain": "IQR=12; 22+18 = 40."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Which is most robust to a single huge outlier?",
        "choices": [
          "range",
          "mean",
          "standard deviation",
          "median/IQR"
        ],
        "answer": 3,
        "explain": "Median & IQR resist outliers."
      }
    ]
  },
  "covariance": {
    "id": "covariance",
    "num": "6.3",
    "title": "Covariance & Correlation",
    "jp": "相",
    "subtitle": "Do two variables move together — and how strongly?",
    "blurb": "Covariance (direction & scale), the correlation coefficient r (scaled to [−1,1]), and 'correlation ≠ causation'.",
    "plain": "<p>Do two things move <strong>together</strong>? As ice-cream sales rise, do drownings rise too? <em>Covariance</em> tells you the direction (together or opposite). <em>Correlation</em> — a tidy number from <strong>−1 to +1</strong> — tells you how <em>strong</em> that link is.</p><p>But beware the classic trap: moving together does <strong>not</strong> mean one <em>causes</em> the other. Often a hidden third thing (hot weather) is quietly driving both.</p><div class=\"eg\"><b>Read r:</b> +1 = perfect upward line, 0 = no straight-line link, −1 = perfect downward line.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "text",
        "html": "<p><strong>Covariance</strong> measures whether two variables tend to rise and fall together. Positive: they move the same way; negative: opposite; near zero: no linear link.</p>"
      },
      {
        "type": "formula",
        "tex": "\\operatorname{Cov}(X,Y)=E[(X-\\mu_X)(Y-\\mu_Y)] = E[XY]-E[X]E[Y]",
        "caption": "Sample version: (1/(n−1))·Σ(xᵢ−x̄)(yᵢ−ȳ). Units are units-of-X × units-of-Y."
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Covariance has awkward units</strong> and unbounded size, so its magnitude is hard to interpret. Fix this by scaling to the <strong>correlation coefficient</strong>."
      },
      {
        "type": "formula",
        "tex": "\\rho_{X,Y}=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y}, \\qquad -1\\le \\rho \\le 1",
        "caption": "Unitless. ρ=±1 ⇒ perfect line; ρ=0 ⇒ no LINEAR relationship. (r is the sample estimate of ρ.)"
      },
      {
        "type": "widget",
        "id": "scatter",
        "title": "Correlation playground",
        "caption": "Slide the target correlation and watch the cloud tighten into a line; read sample r and covariance.",
        "config": ""
      },
      {
        "type": "example",
        "title": "Worked example — covariance sign",
        "problem": "Hours studied vs marks: as hours rise, marks rise. What's the sign of Cov?",
        "steps": [
          "When \\(x>\\bar{x}\\), typically \\(y>\\bar{y}\\), so \\((x-\\bar{x})(y-\\bar{y})>0\\).",
          "The average of mostly-positive products is positive."
        ],
        "answer": "Positive covariance (and positive correlation)."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "covariance & correlation with numpy",
        "code": "import numpy as np\nhours = np.array([1,2,3,4,5,6])\nmarks = np.array([52,55,61,64,72,75])\n\ncov = np.cov(hours, marks, ddof=1)[0,1]      # covariance\nr   = np.corrcoef(hours, marks)[0,1]         # correlation in [-1,1]\nprint(round(cov,2), round(r,3))              # +ve, ~0.99"
      },
      {
        "type": "note",
        "variant": "warn",
        "html": "<strong>Correlation ≠ causation.</strong> Ice-cream sales correlate with drownings (both driven by hot weather — a confounder). And \\(\\rho=0\\) only rules out a <em>linear</em> relationship, not curved ones."
      }
    ],
    "rites": [
      {
        "q": "Define covariance and explain what its sign means.",
        "a": "<p>\\(\\operatorname{Cov}(X,Y)=E[(X-\\mu_X)(Y-\\mu_Y)]=E[XY]-E[X]E[Y]\\). It averages the product of deviations: when \\(X\\) and \\(Y\\) are usually on the same side of their means the products are positive (positive covariance ⇒ move together); opposite sides ⇒ negative; no consistent pattern ⇒ near zero.</p>"
      },
      {
        "q": "Why is the correlation coefficient preferred over covariance, and what does ρ=0 really tell you?",
        "a": "<p>Covariance depends on the units and scale of \\(X,Y\\), so its magnitude is uninterpretable. Dividing by \\(\\sigma_X\\sigma_Y\\) yields the dimensionless \\(\\rho\\in[-1,1]\\), where \\(\\pm1\\) is a perfect straight-line relationship and 0 means <em>no linear</em> association. Crucially \\(\\rho=0\\) does NOT mean independence — a perfect curved (e.g. \\(Y=X^2\\)) relationship can have \\(\\rho=0\\).</p>"
      },
      {
        "q": "Explain 'correlation does not imply causation' with an example.",
        "a": "<p>A strong correlation can arise without one variable causing the other — often via a <strong>confounder</strong> influencing both. Example: ice-cream sales and drownings are positively correlated, but neither causes the other; hot weather drives both. Establishing causation needs experiments (randomisation) or careful causal reasoning, not correlation alone.</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "As X rises, Y falls. The covariance is…",
        "choices": [
          "positive",
          "negative",
          "zero",
          "undefined"
        ],
        "answer": 1,
        "explain": "Opposite movement ⇒ negative."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "Correlation r always lies in…",
        "choices": [
          "[0,1]",
          "[−1,1]",
          "[−∞,∞]",
          "[0,∞)"
        ],
        "answer": 1,
        "explain": "ρ is scaled to [−1,1]."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "r = 0 means…",
        "choices": [
          "independent",
          "no LINEAR relationship",
          "Y constant",
          "perfect line"
        ],
        "answer": 1,
        "explain": "Only linear association is ruled out."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "ρ = Cov(X,Y) divided by…",
        "choices": [
          "σ_X + σ_Y",
          "σ_X · σ_Y",
          "Var(X)",
          "n"
        ],
        "answer": 1,
        "explain": "ρ = Cov/(σ_X σ_Y)."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "Ice-cream sales correlate with drownings because…",
        "choices": [
          "ice cream causes drowning",
          "a confounder (hot weather) drives both",
          "coincidence only",
          "r is wrong"
        ],
        "answer": 1,
        "explain": "Confounding, not causation."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "If Cov(X,Y)=12, σ_X=4, σ_Y=5, find r.",
        "answer": 0.6,
        "tol": 0.01,
        "explain": "12/(4·5) = 0.6."
      }
    ]
  },
  "lln": {
    "id": "lln",
    "num": "7.1",
    "title": "Law of Large Numbers & Sampling Distribution",
    "jp": "大",
    "subtitle": "Why averages stabilise, and how a statistic has its own distribution.",
    "blurb": "The LLN, the sampling distribution of x̄, and the standard error σ/√n.",
    "plain": "<p>Flip a coin a few times and heads might lead 7–3. Keep going to thousands of flips and the share of heads <strong>crawls toward exactly one-half</strong>. That is the <em>Law of Large Numbers</em>: averages settle down as you gather more data.</p><p>Also, a sample's average is itself a little random — a different sample gives a slightly different answer. The spread of those possible answers (the <em>standard error</em>) shrinks as your sample grows.</p><div class=\"eg\"><b>√n rule:</b> to make your estimate twice as precise, you need <i>four</i> times as much data.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Law of Large Numbers.</strong> As the sample size \\(n\\to\\infty\\), the sample mean \\(\\bar{X}_n\\) converges to the population mean \\(\\mu\\). Averages of many observations stabilise."
      },
      {
        "type": "widget",
        "id": "coin-lln",
        "title": "LLN, live",
        "caption": "The running proportion crawls toward the true probability as flips pile up.",
        "config": ""
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>A statistic is a random variable.</strong> Each sample gives a different \\(\\bar{x}\\). The distribution of \\(\\bar{x}\\) over all possible samples is the <strong>sampling distribution</strong> — the bridge from data to inference."
      },
      {
        "type": "formula",
        "tex": "E[\\bar{X}]=\\mu, \\qquad \\operatorname{Var}(\\bar{X})=\\frac{\\sigma^2}{n}, \\qquad \\text{SE}=\\frac{\\sigma}{\\sqrt{n}}",
        "caption": "The sample mean is unbiased; its spread (standard error) shrinks like 1/√n."
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>The √n law.</strong> To halve the standard error you need <em>four times</em> the data. Precision improves, but with diminishing returns."
      },
      {
        "type": "example",
        "title": "Worked example — standard error",
        "problem": "Population σ = 20. What is the SE of x̄ for n = 25? For n = 100?",
        "steps": [
          "\\(\\text{SE}_{25}=20/\\sqrt{25}=20/5\\).",
          "\\(\\text{SE}_{100}=20/\\sqrt{100}=20/10\\)."
        ],
        "answer": "SE = 4 (n=25) and 2 (n=100): 4× the data halves the SE."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "watching the sampling distribution form",
        "code": "import numpy as np\nrng = np.random.default_rng(0)\npop_mu, pop_sigma, n = 50, 20, 25\n\nmeans = [rng.normal(pop_mu, pop_sigma, n).mean() for _ in range(10_000)]\nmeans = np.array(means)\nprint(means.mean())                  # ~50  (= μ)\nprint(means.std(), pop_sigma/np.sqrt(n))   # ~4  ≈ σ/√n"
      }
    ],
    "rites": [
      {
        "q": "State the Law of Large Numbers and contrast it with the gambler's fallacy.",
        "a": "<p><strong>LLN:</strong> the sample mean of i.i.d. observations converges to \\(\\mu\\) as \\(n\\to\\infty\\); equivalently, relative frequencies converge to probabilities. It does <em>not</em> say short-run results 'balance out': after a run of heads, the next flip is still 50/50. Convergence happens because new trials <em>dilute</em> early imbalances, not because nature compensates (that mistaken belief is the gambler's fallacy).</p>"
      },
      {
        "q": "What is a sampling distribution, and why is the standard error σ/√n?",
        "a": "<p>The sampling distribution is the probability distribution of a statistic (e.g. \\(\\bar{X}\\)) across all possible samples of size \\(n\\). For the mean of i.i.d. data, \\(E[\\bar{X}]=\\mu\\) and \\(\\operatorname{Var}(\\bar{X})=\\operatorname{Var}\\!\\big(\\tfrac1n\\sum X_i\\big)=\\tfrac{1}{n^2}\\sum\\operatorname{Var}(X_i)=\\tfrac{\\sigma^2}{n}\\). Taking the square root gives the standard error \\(\\sigma/\\sqrt{n}\\).</p>"
      },
      {
        "q": "Why does quadrupling the sample size only halve the standard error?",
        "a": "<p>Because \\(\\text{SE}=\\sigma/\\sqrt{n}\\) depends on \\(\\sqrt{n}\\), not \\(n\\). Replacing \\(n\\) by \\(4n\\) multiplies the SE by \\(1/\\sqrt{4}=1/2\\). Precision grows with the square root of effort — diminishing returns on extra data.</p>"
      }
    ],
    "quiz": [
      {
        "type": "num",
        "diff": "easy",
        "q": "Population σ=10, n=4. Standard error of x̄?",
        "answer": 5,
        "tol": 0.01,
        "explain": "10/√4 = 5."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "As n grows, the sample mean x̄…",
        "choices": [
          "diverges",
          "converges to μ",
          "becomes σ",
          "stays random forever"
        ],
        "answer": 1,
        "explain": "LLN: x̄ → μ."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "σ=20, n=100. Standard error?",
        "answer": 2,
        "tol": 0.01,
        "explain": "20/√100 = 2."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "To halve the standard error you must multiply n by…",
        "choices": [
          "2",
          "4",
          "√2",
          "10"
        ],
        "answer": 1,
        "explain": "SE ∝ 1/√n, so 4× data ⇒ ½ SE."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Var(x̄) when σ²=144 and n=36?",
        "answer": 4,
        "tol": 0.01,
        "explain": "σ²/n = 144/36 = 4."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "After 5 heads in a row, P(next is heads) for a fair coin?",
        "choices": [
          "less than 0.5",
          "0.5",
          "more than 0.5",
          "0"
        ],
        "answer": 1,
        "explain": "Independent flips — still 0.5 (gambler's fallacy)."
      }
    ]
  },
  "clt": {
    "id": "clt",
    "num": "7.2",
    "title": "Central Limit Theorem",
    "jp": "中",
    "subtitle": "Why averages become normal — no matter what you started with.",
    "blurb": "The CLT statement, why it makes the normal distribution universal, and how to apply it.",
    "plain": "<p>Here is the genuinely magical part. Take <strong>any</strong> weird, lopsided data. Grab samples and look only at their <strong>averages</strong>. Those averages line up into a neat <em>bell curve</em> — even though the original data was nothing like a bell!</p><p>That is the <em>Central Limit Theorem</em>. It is the reason the bell curve appears everywhere, and the reason so much of statistics actually works.</p><div class=\"eg\"><b>So what:</b> it lets us use Normal-curve maths to make predictions about averages from almost any data at all.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Central Limit Theorem.</strong> For i.i.d. samples with mean \\(\\mu\\) and finite variance \\(\\sigma^2\\), the sample mean \\(\\bar{X}\\) is approximately <em>normal</em> for large \\(n\\) — <em>whatever the original distribution's shape</em>."
      },
      {
        "type": "formula",
        "tex": "\\bar{X} \\;\\dot\\sim\\; N\\!\\left(\\mu,\\ \\frac{\\sigma^2}{n}\\right) \\qquad\\Longleftrightarrow\\qquad Z=\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\;\\dot\\sim\\; N(0,1)",
        "caption": "Centre stays μ, spread is the standard error σ/√n, shape → bell as n grows."
      },
      {
        "type": "widget",
        "id": "clt",
        "title": "CLT in action",
        "caption": "Pick a wild population (exponential, Bernoulli…), draw thousands of sample means, and watch the bell emerge.",
        "config": ""
      },
      {
        "type": "note",
        "variant": "tip",
        "html": "<strong>How big is 'large'?</strong> Rule of thumb \\(n\\ge 30\\); fewer if the population is already symmetric, more if it's very skewed. This is why the normal shows up everywhere measurement is an average."
      },
      {
        "type": "example",
        "title": "Worked example — average package weight",
        "problem": "Weights have μ=500g, σ=40g. For n=64 packages, P(x̄ > 510g)?",
        "steps": [
          "\\(\\text{SE}=40/\\sqrt{64}=5\\).",
          "\\(z=\\frac{510-500}{5}=2\\); \\(P(Z>2)=1-\\Phi(2)\\)."
        ],
        "answer": "≈ 0.0228."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "demonstrating the CLT",
        "code": "import numpy as np\nrng = np.random.default_rng(1)\n# wildly skewed population: Exponential(scale=1) -> mean 1, sd 1\nn = 30\nmeans = np.array([rng.exponential(1, n).mean() for _ in range(20_000)])\nprint(means.mean(), means.std())      # ~1.0,  ~1/sqrt(30)=0.183\n# the histogram of 'means' is bell-shaped despite the skewed source"
      }
    ],
    "rites": [
      {
        "q": "State the Central Limit Theorem precisely.",
        "a": "<p>Let \\(X_1,\\dots,X_n\\) be i.i.d. with mean \\(\\mu\\) and finite variance \\(\\sigma^2\\). Then as \\(n\\to\\infty\\), the standardized sample mean converges in distribution to a standard normal: \\(\\dfrac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\xrightarrow{d} N(0,1)\\). Equivalently, \\(\\bar{X}\\) is approximately \\(N(\\mu,\\sigma^2/n)\\) for large \\(n\\), regardless of the shape of the original distribution.</p>"
      },
      {
        "q": "How does the CLT differ from the Law of Large Numbers?",
        "a": "<p>The <strong>LLN</strong> says <em>where</em> \\(\\bar{X}\\) goes: it converges to \\(\\mu\\). The <strong>CLT</strong> describes the <em>distribution/shape</em> of the fluctuations around \\(\\mu\\): after rescaling by \\(\\sqrt{n}\\), those fluctuations are normal. LLN ⇒ consistency; CLT ⇒ the bell-shaped error and the \\(\\sigma/\\sqrt{n}\\) scale used for confidence intervals.</p>"
      },
      {
        "q": "Why is the normal distribution so prevalent in nature and statistics?",
        "a": "<p>Because many quantities are effectively <em>sums or averages</em> of many small, independent influences, and the CLT guarantees such aggregates are approximately normal — irrespective of the individual pieces' distributions. This universality is why the normal underlies measurement error, sampling theory, and most inferential methods.</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "The CLT says the distribution of x̄ becomes approximately…",
        "choices": [
          "uniform",
          "normal",
          "exponential",
          "binomial"
        ],
        "answer": 1,
        "explain": "Sample means → normal."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "A common rule of thumb for 'large n' is…",
        "choices": [
          "n ≥ 2",
          "n ≥ 30",
          "n ≥ 1000",
          "n ≥ 5"
        ],
        "answer": 1,
        "explain": "n ≥ 30 is the usual guideline."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "μ=500, σ=40, n=64. Standard error of x̄?",
        "answer": 5,
        "tol": 0.01,
        "explain": "40/√64 = 5."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Does the CLT require the population to be normal?",
        "choices": [
          "Yes",
          "No — any finite-variance shape works",
          "Only for coins",
          "Only if symmetric"
        ],
        "answer": 1,
        "explain": "Shape-agnostic given finite variance."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "μ=500,σ=40,n=64. P(x̄>510) (decimal)?",
        "answer": 0.0228,
        "tol": 0.01,
        "explain": "z=2, 1−Φ(2) ≈ 0.0228."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "The CLT (shape) vs LLN (location): the CLT additionally tells us…",
        "choices": [
          "x̄→μ",
          "the bell shape & σ/√n scale of x̄",
          "σ→0",
          "n→∞ always"
        ],
        "answer": 1,
        "explain": "CLT gives the normal shape and SE scale."
      }
    ]
  },
  "estimation": {
    "id": "estimation",
    "num": "7.3",
    "title": "Estimation: Point, Unbiased & MLE",
    "jp": "推",
    "subtitle": "Best single guesses for unknown parameters — and how to derive them.",
    "blurb": "Point estimators, what 'unbiased' means, and the Maximum Likelihood Estimator for discrete models.",
    "plain": "<p>You do not know a coin's true chance of heads. You flip it 20 times, get <strong>13 heads</strong>, and your best guess is simply <strong>13/20 = 0.65</strong>. That single best-guess number is a <em>point estimator</em>.</p><p>A good estimator is <em>unbiased</em> (correct on average across many samples). <em>Maximum Likelihood</em> is the clever rule for finding one: pick the value that makes <strong>what you actually observed</strong> the most likely.</p><div class=\"eg\"><b>Intuition:</b> 13 heads in 20 is best \"explained\" by a coin that lands heads about 65% of the time.</div>",
    "plainJp": "やさしく",
    "sections": [
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Point estimator.</strong> A statistic \\(\\hat{\\theta}\\) (a rule applied to data) that gives a single best guess of an unknown parameter \\(\\theta\\). Examples: \\(\\bar{X}\\) for \\(\\mu\\), \\(\\hat{p}=X/n\\) for \\(p\\), \\(s^2\\) for \\(\\sigma^2\\)."
      },
      {
        "type": "note",
        "variant": "key",
        "html": "<strong>Unbiased estimator.</strong> \\(\\hat{\\theta}\\) is unbiased if \\(E[\\hat{\\theta}]=\\theta\\) — on average, over many samples, it hits the target. <strong>Bias</strong> \\(=E[\\hat{\\theta}]-\\theta\\)."
      },
      {
        "type": "formula",
        "tex": "E[\\bar{X}]=\\mu \\ \\checkmark, \\qquad E\\!\\left[\\tfrac{1}{n-1}\\textstyle\\sum (X_i-\\bar{X})^2\\right]=\\sigma^2 \\ \\checkmark",
        "caption": "x̄ is unbiased for μ; the n−1 version of variance is unbiased for σ² (dividing by n is biased)."
      },
      {
        "type": "text",
        "html": "<p><strong>Maximum Likelihood Estimation (MLE)</strong> picks the parameter value that makes the observed data <em>most probable</em>. Write the likelihood \\(L(\\theta)=P(\\text{data}\\mid\\theta)\\), then maximise (usually maximise \\(\\log L\\) — same location, easier algebra).</p>"
      },
      {
        "type": "formula",
        "tex": "\\hat{\\theta}_{\\text{MLE}}=\\arg\\max_\\theta L(\\theta), \\qquad \\frac{d}{d\\theta}\\log L(\\theta)=0",
        "caption": "Set the derivative of the log-likelihood to zero and solve (the calculus from §5.1)."
      },
      {
        "type": "widget",
        "id": "mle",
        "title": "MLE likelihood lab",
        "caption": "Set coin flips n and heads k; the likelihood curve peaks exactly at the MLE p̂ = k/n.",
        "config": ""
      },
      {
        "type": "example",
        "title": "Worked example — MLE for a coin",
        "problem": "n flips give k heads. Find the MLE of p.",
        "steps": [
          "\\(L(p)=\\binom{n}{k}p^k(1-p)^{n-k}\\); \\(\\log L = c + k\\ln p + (n-k)\\ln(1-p)\\).",
          "\\(\\frac{d}{dp}\\log L=\\frac{k}{p}-\\frac{n-k}{1-p}=0\\).",
          "Solve: \\(k(1-p)=(n-k)p\\Rightarrow p=\\frac{k}{n}\\)."
        ],
        "answer": "p̂ = k/n — the sample proportion."
      },
      {
        "type": "code",
        "lang": "python",
        "title": "MLE: closed form vs grid search",
        "code": "import numpy as np\nfrom scipy.stats import binom\nn, k = 20, 13\nprint(\"closed form  p_hat =\", k/n)        # 0.65\n\nps = np.linspace(0.001, 0.999, 999)\nL  = binom.pmf(k, n, ps)\nprint(\"grid argmax  p_hat =\", round(ps[L.argmax()],3))   # ~0.65"
      }
    ],
    "rites": [
      {
        "q": "Define an unbiased estimator and give the bias of the two variance estimators.",
        "a": "<p>\\(\\hat\\theta\\) is <strong>unbiased</strong> if \\(E[\\hat\\theta]=\\theta\\); its <strong>bias</strong> is \\(E[\\hat\\theta]-\\theta\\). The sample mean \\(\\bar X\\) is unbiased for \\(\\mu\\). For variance, \\(\\frac{1}{n-1}\\sum(X_i-\\bar X)^2\\) is unbiased (\\(E=\\sigma^2\\)), whereas \\(\\frac{1}{n}\\sum(X_i-\\bar X)^2\\) is biased low, with bias \\(-\\sigma^2/n\\).</p>"
      },
      {
        "q": "Explain the principle of Maximum Likelihood Estimation and the steps to derive an MLE.",
        "a": "<p>MLE chooses the parameter that makes the observed data most probable. Steps: (1) write the likelihood \\(L(\\theta)=\\prod_i p(x_i\\mid\\theta)\\) (joint probability of the data); (2) take the log-likelihood \\(\\ell(\\theta)=\\log L\\) (monotone, so same maximiser, easier to differentiate); (3) solve \\(\\ell'(\\theta)=0\\); (4) confirm a maximum via \\(\\ell''(\\theta)<0\\). The solution is \\(\\hat\\theta_{\\text{MLE}}\\).</p>"
      },
      {
        "q": "Derive the MLE of p for n Bernoulli trials with k successes.",
        "a": "<p>\\(L(p)=p^{k}(1-p)^{n-k}\\) (dropping the constant \\(\\binom{n}{k}\\)). \\(\\ell(p)=k\\ln p+(n-k)\\ln(1-p)\\). Setting \\(\\ell'(p)=\\frac{k}{p}-\\frac{n-k}{1-p}=0\\) gives \\(k(1-p)=(n-k)p\\Rightarrow k = np\\Rightarrow \\hat p=\\frac{k}{n}\\). Since \\(\\ell''(p)<0\\), it's a maximum — the MLE is the sample proportion.</p>"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "diff": "easy",
        "q": "A single-number guess of a parameter is a…",
        "choices": [
          "confidence interval",
          "point estimator",
          "sampling frame",
          "parameter"
        ],
        "answer": 1,
        "explain": "Point estimator = single best guess."
      },
      {
        "type": "mcq",
        "diff": "easy",
        "q": "An estimator is unbiased if…",
        "choices": [
          "it's always right",
          "E[θ̂] = θ",
          "variance is 0",
          "n is large"
        ],
        "answer": 1,
        "explain": "Unbiased ⇔ expected value equals the parameter."
      },
      {
        "type": "num",
        "diff": "med",
        "q": "30 flips, 18 heads. MLE of p?",
        "answer": 0.6,
        "tol": 0.01,
        "explain": "p̂ = k/n = 18/30 = 0.6."
      },
      {
        "type": "mcq",
        "diff": "med",
        "q": "Which variance estimator is unbiased for σ²?",
        "choices": [
          "÷ n",
          "÷ (n−1)",
          "÷ (n+1)",
          "÷ n²"
        ],
        "answer": 1,
        "explain": "Bessel: divide by n−1."
      },
      {
        "type": "num",
        "diff": "hard",
        "q": "Poisson sample mean = 4.2 (one obs). MLE of λ?",
        "answer": 4.2,
        "tol": 0.01,
        "explain": "MLE of Poisson λ is the sample mean."
      },
      {
        "type": "mcq",
        "diff": "hard",
        "q": "MLE maximises…",
        "choices": [
          "the prior",
          "P(parameter | data)",
          "P(data | parameter) (the likelihood)",
          "the variance"
        ],
        "answer": 2,
        "explain": "MLE maximises the likelihood of the observed data."
      }
    ]
  }
};
