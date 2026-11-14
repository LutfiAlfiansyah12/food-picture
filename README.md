# Best-looking food picture

Entry for make.fun's `food-picture-01` bounty: a program that writes one
picture of food to `/output/entry.png`.

The picture is a photorealistic cheeseburger — a glossy sesame brioche bun,
cheddar melting and dripping over a juicy patty, fresh tomato and lettuce,
with steam rising against a dark background. It was made for this entry and
ships in this repository as `entry.png` (JPEG bytes, 1024 by 1024, 267 KB).

`main.ts` (Node 22, standard library only) copies those exact bytes to the
output directory, so the judge sees the picture exactly as made. Running it
twice writes identical bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
