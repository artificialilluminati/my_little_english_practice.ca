const RULES={
'Present Simple':'Звички, факти та регулярні дії. I/you/we/they + V; he/she/it + V-s. Заперечення: do/does not + V.',
'Present Continuous':'Дія відбувається зараз або тимчасово. am/is/are + V-ing.',
'Past Simple':'Завершена дія в минулому. V-ed або друга форма неправильного дієслова; did + V у питаннях.',
'Past Continuous':'Дія тривала в певний момент минулого. was/were + V-ing.',
'Present Perfect':'Минула дія з результатом зараз або стан, що триває. have/has + V3.',
'Present Perfect Continuous':'Тривалість дії до теперішнього моменту. have/has been + V-ing.',
'Future with will':'Прогнози, обіцянки, спонтанні рішення. will + V.',
'Going to':'Намір або прогноз за очевидними ознаками. am/is/are going to + V.',
'Modal verbs':'Модальне дієслово + інфінітив без to: can, could, should, must.',
'Articles':'a/an — один неспецифічний предмет; the — конкретний або вже відомий предмет.',
'Prepositions':'at — точний час; on — день; in — місяць, рік або період; since — початок; for — тривалість.',
'Questions':'Допоміжне дієслово перед підметом: Do you work? Did she call? Have you finished?',
'Negation':'do/does/did + not + V; be/have + not у відповідних конструкціях.',
'Quantifiers':'many/few — злічувані; much/little — незлічувані; some — деяка кількість.',
'Comparisons':'Короткі прикметники: -er/-est; довгі: more/most. good → better → best.',
'Gerunds and infinitives':'enjoy + V-ing; want/need/decide + to + V.',
'Conditionals':'First conditional: if + Present Simple, will + V.',
'Phrasal verbs':'Дієслово з часткою утворює окреме значення: pick up — забрати.',
'Polite requests':'Could you / Would you + V; Would you mind + V-ing.',
'Obligation and plans':'have to / need to / be supposed to + V; used to + V для минулих звичок.',
'Conversation':'Сталі вирази для природної розмови. Вивчайте їх у контексті.'};
const raw=`Present Simple|She usually ___ to work by bus.|go|goes|go;went;is going
Present Simple|They ___ coffee every morning.|drink|drink|drinks;drank;are drinking
Present Simple|My brother ___ in Burnaby.|live|lives|live;lived;living
Present Continuous|Look! It ___ outside.|rain|is raining|rains;rained;has rained
Present Continuous|I ___ dinner right now.|cook|am cooking|cook;cooked;have cooked
Present Continuous|The clients ___ in the waiting room now.|wait|are waiting|wait;waited;has waited
Past Simple|We ___ the apartment yesterday.|visit|visited|visit;have visited;are visiting
Past Simple|She ___ a new coat last week.|buy|bought|buys;has bought;is buying
Past Simple|I ___ my keys this morning before work.|lose|lost|lose;am losing;had lose
Past Continuous|At 8 last night, I ___ a book.|read|was reading|am reading;have read;will read
Past Continuous|They ___ when the phone rang.|sleep|were sleeping|sleep;are sleeping;have slept
Past Continuous|While I ___ her nails, the phone rang.|file|was filing|am filing;have filed;will file
Present Perfect|I ___ my homework already.|finish|have finished|finish;am finishing;will finish
Present Perfect|She ___ here since 2022.|live|has lived|lives;lived;will live
Present Perfect|We ___ that movie three times so far.|see|have seen|see;saw;are seeing
Present Perfect Continuous|I ___ for the bus for twenty minutes and it still hasn't arrived.|wait|have been waiting|wait;waited;will wait
Present Perfect Continuous|She is tired because she ___ all day.|work|has been working|works;will work;is work
Future with will|I promise I ___ you tomorrow.|call|will call|called;have called;calling
Future with will|The phone is ringing. I ___ it!|answer|will answer|answered;have answered;answering
Going to|Look at those dark clouds! It ___.|rain|is going to rain|rained;has rained;was raining
Going to|We have a plan. We ___ a new salon next year.|open|are going to open|opened;have opened;were opening
Modal verbs|You ___ wear a seatbelt. It's the law.|obligation|must|might;would;could
Modal verbs|You look tired. You ___ get some rest.|advice|should|might not;would not;can not
Articles|I need ___ umbrella.|article|an|a;the;no article
Articles|I bought a book. ___ book is on the table.|article|The|A;An;No article
Prepositions|The appointment is ___ Monday.|time|on|in;at;since
Prepositions|I've lived here ___ three years.|duration|for|since;at;on
Questions|___ you work here?|present question|Do|Does;Are;Is
Questions|___ she call yesterday?|past question|Did|Does;Has;Is
Negation|He ___ like coffee.|present negative|doesn't|don't;isn't;hasn't
Negation|I ___ go to work yesterday.|past negative|didn't|don't;doesn't;haven't
Quantifiers|How ___ chairs do we need?|countable|many|much;little;any
Quantifiers|There is only a ___ milk left.|uncountable|little|few;many;several
Comparisons|This apartment is ___ than that one.|cheap|cheaper|cheapest;more cheap;cheap
Comparisons|This is the ___ restaurant in town.|good|best|better;good;most good
Gerunds and infinitives|I enjoy ___ books.|read|reading|to read;reads;read
Gerunds and infinitives|She decided ___ a course.|take|to take|taking;takes;took
Conditionals|If it rains tomorrow, we ___ home.|stay|will stay|stayed;have stayed;staying
Conditionals|If you ___ now, you'll catch the bus.|leave|leave|will leave;left;leaving
Phrasal verbs|I need to ___ my prescription at the pharmacy.|collect|pick up|turn off;give up;look after
Phrasal verbs|Please ___ this form.|complete|fill out|take off;run out;wake up
Polite requests|Would you mind ___ your hand?|relax|relaxing|relax;to relax;relaxed
Polite requests|Could you ___ me the colour you want?|show|show|showing;to show;showed
Obligation and plans|I have ___ finish this appointment.|obligation|to|for;at;with
Obligation and plans|I used ___ live in Ukraine.|past habit|to|for;at;with
Obligation and plans|I'm supposed ___ arrive at nine.|arrangement|to|for;on;at
Conversation|I'm looking forward to ___ you.|see|seeing|see;to see;saw
Conversation|Friday at two? That ___ for me.|agreement|works|working;work;to work
Conversation|As far as I ___, the store is open.|know|know|knowing;known;to know
Conversation|Let me ___ if it hurts.|know|know|knowing;to know;known`;
const bank=raw.split('\n').map(l=>{let [topic,q,h,a,o]=l.split('|');return {topic,q,h,a,o:o.split(';')}});