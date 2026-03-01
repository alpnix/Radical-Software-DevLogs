1. Review the Sound & Music page to learn Tone.js and Strudel.

(My REPL links failed for some reason so I will be inserting the code on the repo)
2. Complete the Strudel First Sounds tutorial. Post a link to your finished REPL: 
```js
sound("casio")

sound("casio:1")

sound("bd hh sd oh")

sound("bd hh sd oh").bank("RolandTR909")

sound("bd hh sd hh")

sound("bd bd hh bd rim bd hh bd")

sound("<bd bd hh bd rim bd hh bd>")

sound("<bd bd hh bd rim bd hh bd>*8")

setcpm(90/4)
sound("<bd hh rim hh>*8")

sound("bd hh - rim - bd hh rim")

sound("bd [hh hh] sd [hh bd] bd - [hh sd] cp")

sound("bd [[rim rim] hh] bd cp")

sound("hh hh hh, bd casio")

sound("hh hh hh, bd bd, - casio")

sound("hh hh hh, bd [bd,casio]")

sound(`bd*2, - cp,
- - - oh, hh*4,
[- casio]*2`)

n("0 1 [4 2] 3*2").sound("jazz")
```
3. Complete the Strudel First Notes tutorial. Post a link to your finished REPL: 
```js
note("48 52 55 59").sound("piano")

note("c e g b").sound("piano")

note("db eb gb ab bb").sound("piano")
note("c# d# f# g# a#").sound("piano")

note("c2 e3 g4 b5").sound("piano")

note("36 43, 52 59 62 64")
  .sound("piano")

note("48 67 63 [62, 58]")
  .sound("piano gm_electric_guitar_muted")

note("48 67 63 [62, 58]")
  .sound("piano, gm_electric_guitar_muted")

note("[36 34 41 39]/4")
  .sound("gm_acoustic_bass")

note("<36 34 41 39>")
  .sound("gm_acoustic_bass")

note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
  .sound("gm_acoustic_bass")

note("60 <63 62 65 63>")
  .sound("gm_xylophone")

sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
  .bank("RolandTR909")

setcpm(60)
n("0 2 4 <[6,8] [7,9]>")
  .scale("C:minor").sound("piano")

setcpm(60)
n("<0 -3>, 2 4 <[6,8] [7,9]>")
  .scale("<C:major D:mixolydian>/4")
  .sound("piano")

note("c@3 eb")
  .sound("gm_acoustic_bass")

setcpm(60)
n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
  .scale("<C2:mixolydian F2:mixolydian>/4")
  .sound("gm_acoustic_bass")

setcpm(60)
note("c!2 [eb,<g a bb a>]")
  .sound("piano")

note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
  .sound("gm_synth_bass_1")
  .lpf(800)

n(`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4`)
  .scale("C4:minor")
  .sound("gm_synth_strings_1")

sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
  .bank("RolandTR909")

$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
    .sound("gm_synth_bass_1").lpf(800)

$: n(`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4`)
    .scale("C4:minor")
    .sound("gm_synth_strings_1")

$: sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
    .bank("RolandTR909")
```
4. Complete the Strudel First Effects tutorial. Post a link to your finished REPL:
```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf(800)

note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf("200 1000 200 1000")

note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>")
.sound("sawtooth").vowel("<a e i o>")

$: sound("hh*16").gain("[.25 1]*4")
$: sound("bd*4,[~ sd:1]*2")

$: sound("hh*8").gain("[.25 1]*4")
$: sound("bd*4,[~ sd:1]*2")
$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth").lpf("200 1000 200 1000")
$: note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>")
.sound("sawtooth").vowel("<a e i o>")

note("c3 bb2 f3 eb3")
.sound("sawtooth").lpf(600)
.attack(.1)
.decay(.1)
.sustain(.25)
.release(.2)

note("c3 bb2 f3 eb3")
.sound("sawtooth").lpf(600)
.adsr(".1:.1:.5:.2")

$: note("[~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]]*2")
.sound("gm_electric_guitar_muted").delay(.5)
$: sound("bd rim").bank("RolandTR707").delay(".5")

n("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room(2)

$: note("[~ [<[d3,a3,f4]!2 [d3,bb3,g4]!2> ~]]*2")
.sound("gm_electric_guitar_muted").delay(.5)
$: sound("bd rim").bank("RolandTR707").delay(.5)
$: n("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room(2).gain(.5)
$: n("[0 [~ 0] 4 [3 2] [0 ~] [0 ~] <0 2> ~]/2")
.scale("D2:minor")
.sound("sawtooth,triangle").lpf(800)

sound("numbers:1 numbers:2 numbers:3 numbers:4")
.pan("0 0.3 .6 1")

sound("bd rim [~ bd] rim")
.speed("<1 2 -1 -2>").room(.2)

sound("bd*4,~ rim ~ cp").slow(2)

sound("[bd*4,~ rim ~ cp]*<1 [2 4]>")

sound("hh*16").gain(sine)

sound("hh*16").lpf(saw.range(500, 2000))

note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("sawtooth")
.lpf(sine.range(100, 2000).slow(4))
```
5. Music Mouse Explained | Laurie Spiegel on Algorithmic Composition (1987 Archive) (27:38). Post a reading response in your DevLog per information in the Assignments.
- *Summary:* Laurie Spiegel talks about her program for composing music in Macintosh devices. Her software program gets input through the mouse instead of the keyboard and generates harmonies and instruments for artists.
- *Quote:* "This is an instrument I initally wrote for myself really, and a lot of people wanted it, so I put it up on the market" 
- *Comment:* I was primarily suprised that she wrote a software program seemingly complex inspired from her composer background, later when I realized the program got out in the market out of a real need she had, I found more insights in product roadmap. 
- *Question:* How important is our taste and experience in the problems we are facing in determining the proper user experience and design while creating products?  
- *Related Work:* https://newmusicusa.org/nmbx/laurie-spiegel-grassroots-technologist/
6. Complete all five parts of the Getting Started with Tone.js | Web Audio Tutorial - Pts 1-5 (3:31, 6:37, 10:20, 5:59, 9:28). Post a link to your finished project online ✏️ here.
7. Explore the inspiring examples below.
8. Design and code an “interactive audio experience” that makes use of Tone.js. Consider using shapes, color, and other visuals in addition to sounds. This need not be fancy or polished, since you have less than a week to complete it. Try to have fun creating.
9. Post designs mockups (pencil/paper, Figma, etc.) here: https://www.figma.com/design/iB6hoHpwVJo1fTi3BOOmsQ/Noteblocks-HTML-Design?node-id=0-1&t=KIvafOeOf4Wfh1EE-1
10. Post links to your project, a video, and a 100-150 word statement about the concept and technology of your interactive audio experience ✏️ here.
