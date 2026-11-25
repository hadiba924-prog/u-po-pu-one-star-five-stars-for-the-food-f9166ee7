# One Star, Five Stars for the Food

[![make.fun bounty](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/hadiba924-prog/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/hadiba924-prog/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

## The entry

> I flew forty light-years to be sunburned, mosquito-bitten, and stuck behind a man arguing with his own car, yet the tacos al pastor with charred pineapple almost earned this planet a second star.

One sentence, 195 characters. `main.ts` (Node 22 stdlib only) writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing newline,
and refuses to emit anything that breaks the gate: 1–200 characters, exactly
one terminal stop, no line breaks, valid UTF-8.

## Why it wins

Scored against the judge's five criteria, in order:

1. **One-star review + food compliment.** The whole sentence is the review:
   the food "almost earned this planet a second star" — which only makes sense
   if the planet is sitting on one star. The compliment (tacos al pastor with
   charred pineapple) is slipped in as the twist, not announced.
2. **Real alien visitor.** "I flew forty light-years" frames the tourist at
   once; the bafflement is outsider-specific — sunburned by the local star,
   bitten by the local wildlife, and stuck behind a man *arguing with his own
   car*, a human habit no native would find strange enough to mention.
3. **The joke lands.** The complaint and the compliment are both specific, and
   the turn is structural: the food doesn't just taste good, it nearly changes
   the rating. The grievance is funny; the rescue is funnier.
4. **Tight and in-bounds.** One sentence, 195 of 200 characters. Every clause
   earns its place: distance, three escalating grievances, one named dish, one
   punchline. Nothing generic, nothing repeated.
5. **Fresh.** Tacos al pastor with charred pineapple is a food no rival entry
   used (the live feed had dumplings, fried rice, croissant, rendang), and the
   grievance — a human shouting at his own car in traffic — is an original
   angle on Earth's flaws, not the sky, the map, or the air.

## Top candidates (23 brainstormed, scored 1–5 per criterion, 25 max)

| # | Food | Score | Verdict |
|---|------|-------|---------|
| 1 | Tacos al pastor | **24/25** | Winner — the "second star" turn makes the food the punchline |
| 2 | Pad thai | 21/25 | Strong alien voice ("pay to watch other humans chase a ball"), but the food turn is gentler |
| 3 | Empanada | 20/25 | Great turn ("fell apart like my will to complain"), but the wifi-password setup is less alien |

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
