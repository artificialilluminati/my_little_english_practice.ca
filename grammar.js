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
Conversation|Let me ___ if it hurts.|know|know|knowing;to know;known
Present Simple|My salon usually ___ at nine every morning.|open|opens|open;opened;is opening
Present Simple|She ___ work on Sundays; that's her regular day off.|not work|doesn't work|don't work;isn't work;didn't work
Present Simple|How often ___ your clients book a fill?|do|do|does;is;has
Present Continuous|Please wait. I ___ with a client right now.|speak|am speaking|speak;spoke;have spoken
Present Continuous|Look! It ___ outside.|snow|is snowing|snows;snowed;has snowed
Present Continuous|They ___ the salon at the moment.|clean|are cleaning|cleans;cleaned;has cleaned
Past Simple|I ___ my first client at ten yesterday.|see|saw|see;have seen;am seeing
Past Simple|She ___ her appointment last Monday.|cancel|cancelled|cancels;has cancelled;is cancelling
Past Simple|___ you pay by debit yesterday?|do|Did|Do;Have;Are
Past Continuous|At exactly noon yesterday, I ___ a client's nails when the power went out.|file|was filing|am filing;have filed;will file
Past Continuous|While we ___ for the bus, it started to rain.|wait|were waiting|are waiting;have waited;will wait
Present Perfect|I ___ this client since 2023, and she still comes regularly.|know|have known|knew;know;am knowing
Present Perfect|She ___ three appointments so far today.|finish|has finished|finish;finishing;have finished
Present Perfect|___ you ever been to Victoria?|have|Have|Has;Are;Do
Present Perfect Continuous|I ___ for two hours and I'm still not finished.|work|have been working|was working;worked;am work
Present Perfect Continuous|She ___ English since September and is still studying.|study|has been studying|have been studying;is study;studied
Future with will|I promise I ___ you back tomorrow.|call|will call|called;have called;calling
Future with will|Don't worry, I ___ you with that right now.|help|will help|helped;have helped;helping
Going to|We've already bought the paint. We ___ the salon this weekend.|paint|are going to paint|painted;has painted;painting
Going to|Look at those dark clouds! It ___ rain.|rain|is going to|are going to;has;was
Modal verbs|You ___ touch the wet gel before curing. It is not allowed.|prohibition|mustn't|should;could;may
Modal verbs|___ you please show me your reference photo?|polite request|Could|Must;Shouldn't;Couldn't
Articles|She is ___ experienced nail technician.|article|an|a;no article;many
Articles|I saw a dog outside. ___ dog was wearing a red collar.|article|The|A;An;No article
Prepositions|My appointment starts ___ 2:30.|time|at|on;in;since
Prepositions|The salon is closed ___ Sundays.|day|on|at;since;for
Prepositions|We moved here ___ 2022.|year|in|on;at;for
Questions|Where ___ your sister live?|present question|does|do;is;has
Questions|What ___ you doing right now?|continuous question|are|do;have;did
Negation|They ___ finished the appointment yet.|perfect negative|haven't|doesn't;isn't;don't
Negation|She ___ working today; she's on holiday.|continuous negative|isn't|doesn't;haven't;don't
Quantifiers|How ___ time do we have left?|uncountable|much|many;few;several
Quantifiers|There are only a ___ appointments left this week.|countable|few|little;much;any
Comparisons|This design is ___ expensive than the plain one.|comparative|more|most;much;many
Comparisons|My nails are ___ than they were last week.|long|longer|longest;more long;most long
Gerunds and infinitives|I need ___ a new lamp.|buy|to buy|buying;bought;buys
Gerunds and infinitives|She avoids ___ her nails too short.|cut|cutting|to cut;cuts;cut
Conditionals|If you arrive late, we ___ less time for the design.|have|will have|had;having;has
Conditionals|If water freezes, it ___ solid.|become|becomes|become;becoming;became
Phrasal verbs|Please ___ your coat before sitting down.|remove|take off|turn on;look up;give up
Phrasal verbs|I'll ___ the address online before I leave.|search for information|look up|put away;turn off;give up
Polite requests|Would you mind ___ a few minutes?|wait|waiting|to wait;waited;wait
Polite requests|Could you ___ your fingers straight, please?|keep|keep|keeping;kept;to keep
Obligation and plans|I'm supposed to ___ the salon at six.|close|close|closing;closed;closes
Obligation and plans|I have to ___ my supplies today.|order|order|ordering;ordered;orders
Conversation|I'm not sure ___ this colour suits me.|whether|whether|than;because of;during
Conversation|Thanks for ___ me know.|let|letting|let;to let;lets
Present Simple|She usually ___ the schedule before noon.|check|checks|check;is checking;will check
Present Continuous|Look! She ___ the schedule right now.|check|is checking|checks;has checked;will check
Past Simple|Yesterday, She ___ the schedule.|check|checked|checks;has checked;will check
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the schedule.|check|was checking|am checking;have checked;will check
Present Perfect|She ___ the schedule already, so it is done now. (Use the present perfect.)|check|has checked|checks;is checking;will check
Future with will|I promise I ___ the schedule tomorrow. (Use will.)|check|will check|am checking;have checked;was checking
Going to|I have made a plan: I ___ the schedule tomorrow. (Use going to.)|check|am going to check|was checking;have checked;will check
Questions|___ she check the schedule yesterday?|check|Did|Does;Has;Is
Negation|She ___ the schedule yesterday because there was no time.|check|did not check|does not check;is not checking;has not checked
Modal verbs|You should ___ the schedule before you leave.|check|check|checks;to check;checking
Gerunds and infinitives|I decided ___ the schedule tomorrow.|check|to check|checks;checking;will check
Conditionals|If I have enough time tomorrow, I ___ the schedule. (First conditional.)|check|will check|would have checked;had checked;was checking
Present Simple|He usually ___ the table before noon.|clean|cleans|clean;is cleaning;will clean
Present Continuous|Look! He ___ the table right now.|clean|is cleaning|cleans;has cleaned;will clean
Past Simple|Yesterday, He ___ the table.|clean|cleaned|cleans;has cleaned;will clean
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the table.|clean|was cleaning|am cleaning;have cleaned;will clean
Present Perfect|He ___ the table already, so it is done now. (Use the present perfect.)|clean|has cleaned|cleans;is cleaning;will clean
Future with will|I promise I ___ the table tomorrow. (Use will.)|clean|will clean|am cleaning;have cleaned;was cleaning
Going to|I have made a plan: I ___ the table tomorrow. (Use going to.)|clean|am going to clean|was cleaning;have cleaned;will clean
Questions|___ he clean the table yesterday?|clean|Did|Does;Has;Is
Negation|He ___ the table yesterday because there was no time.|clean|did not clean|does not clean;is not cleaning;has not cleaned
Modal verbs|You should ___ the table before you leave.|clean|clean|cleans;to clean;cleaning
Gerunds and infinitives|I decided ___ the table tomorrow.|clean|to clean|cleans;cleaning;will clean
Conditionals|If I have enough time tomorrow, I ___ the table. (First conditional.)|clean|will clean|would have cleaned;had cleaned;was cleaning
Present Simple|My sister usually ___ the dishes before noon.|wash|washes|wash;is washing;will wash
Present Continuous|Look! My sister ___ the dishes right now.|wash|is washing|washes;has washed;will wash
Past Simple|Yesterday, My sister ___ the dishes.|wash|washed|washes;has washed;will wash
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the dishes.|wash|was washing|am washing;have washed;will wash
Present Perfect|My sister ___ the dishes already, so it is done now. (Use the present perfect.)|wash|has washed|washes;is washing;will wash
Future with will|I promise I ___ the dishes tomorrow. (Use will.)|wash|will wash|am washing;have washed;was washing
Going to|I have made a plan: I ___ the dishes tomorrow. (Use going to.)|wash|am going to wash|was washing;have washed;will wash
Questions|___ my sister wash the dishes yesterday?|wash|Did|Does;Has;Is
Negation|My sister ___ the dishes yesterday because there was no time.|wash|did not wash|does not wash;is not washing;has not washed
Modal verbs|You should ___ the dishes before you leave.|wash|wash|washes;to wash;washing
Gerunds and infinitives|I decided ___ the dishes tomorrow.|wash|to wash|washes;washing;will wash
Conditionals|If I have enough time tomorrow, I ___ the dishes. (First conditional.)|wash|will wash|would have washed;had washed;was washing
Present Simple|The technician usually ___ the shop before noon.|open|opens|open;is opening;will open
Present Continuous|Look! the technician ___ the shop right now.|open|is opening|opens;has opened;will open
Past Simple|Yesterday, the technician ___ the shop.|open|opened|opens;has opened;will open
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the shop.|open|was opening|am opening;have opened;will open
Present Perfect|The technician ___ the shop already, so it is done now. (Use the present perfect.)|open|has opened|opens;is opening;will open
Future with will|I promise I ___ the shop tomorrow. (Use will.)|open|will open|am opening;have opened;was opening
Going to|I have made a plan: I ___ the shop tomorrow. (Use going to.)|open|am going to open|was opening;have opened;will open
Questions|___ the technician open the shop yesterday?|open|Did|Does;Has;Is
Negation|The technician ___ the shop yesterday because there was no time.|open|did not open|does not open;is not opening;has not opened
Modal verbs|You should ___ the shop before you leave.|open|open|opens;to open;opening
Gerunds and infinitives|I decided ___ the shop tomorrow.|open|to open|opens;opening;will open
Conditionals|If I have enough time tomorrow, I ___ the shop. (First conditional.)|open|will open|would have opened;had opened;was opening
Present Simple|My neighbour usually ___ the window before noon.|close|closes|close;is closing;will close
Present Continuous|Look! My neighbour ___ the window right now.|close|is closing|closes;has closed;will close
Past Simple|Yesterday, My neighbour ___ the window.|close|closed|closes;has closed;will close
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the window.|close|was closing|am closing;have closed;will close
Present Perfect|My neighbour ___ the window already, so it is done now. (Use the present perfect.)|close|has closed|closes;is closing;will close
Future with will|I promise I ___ the window tomorrow. (Use will.)|close|will close|am closing;have closed;was closing
Going to|I have made a plan: I ___ the window tomorrow. (Use going to.)|close|am going to close|was closing;have closed;will close
Questions|___ my neighbour close the window yesterday?|close|Did|Does;Has;Is
Negation|My neighbour ___ the window yesterday because there was no time.|close|did not close|does not close;is not closing;has not closed
Modal verbs|You should ___ the window before you leave.|close|close|closes;to close;closing
Gerunds and infinitives|I decided ___ the window tomorrow.|close|to close|closes;closing;will close
Conditionals|If I have enough time tomorrow, I ___ the window. (First conditional.)|close|will close|would have closed;had closed;was closing
Present Simple|She usually ___ the instructions before noon.|read|reads|read;is reading;will read
Present Continuous|Look! She ___ the instructions right now.|read|is reading|reads;has read;will read
Past Simple|Yesterday, She ___ the instructions.|read|read|reads;has read;will read
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the instructions.|read|was reading|am reading;have read;will read
Present Perfect|She ___ the instructions already, so it is done now. (Use the present perfect.)|read|has read|reads;is reading;will read
Future with will|I promise I ___ the instructions tomorrow. (Use will.)|read|will read|am reading;have read;was reading
Going to|I have made a plan: I ___ the instructions tomorrow. (Use going to.)|read|am going to read|was reading;have read;will read
Questions|___ she read the instructions yesterday?|read|Did|Does;Has;Is
Negation|She ___ the instructions yesterday because there was no time.|read|did not read|does not read;is not reading;has not read
Modal verbs|You should ___ the instructions before you leave.|read|read|reads;to read;reading
Gerunds and infinitives|I decided ___ the instructions tomorrow.|read|to read|reads;reading;will read
Conditionals|If I have enough time tomorrow, I ___ the instructions. (First conditional.)|read|will read|would have read;had read;was reading
Present Simple|He usually ___ a report before noon.|write|writes|write;is writing;will write
Present Continuous|Look! He ___ a report right now.|write|is writing|writes;has written;will write
Past Simple|Yesterday, He ___ a report.|write|wrote|writes;has written;will write
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a report.|write|was writing|am writing;have written;will write
Present Perfect|He ___ a report already, so it is done now. (Use the present perfect.)|write|has written|writes;is writing;will write
Future with will|I promise I ___ a report tomorrow. (Use will.)|write|will write|am writing;have written;was writing
Going to|I have made a plan: I ___ a report tomorrow. (Use going to.)|write|am going to write|was writing;have written;will write
Questions|___ he write a report yesterday?|write|Did|Does;Has;Is
Negation|He ___ a report yesterday because there was no time.|write|did not write|does not write;is not writing;has not written
Modal verbs|You should ___ a report before you leave.|write|write|writes;to write;writing
Gerunds and infinitives|I decided ___ a report tomorrow.|write|to write|writes;writing;will write
Conditionals|If I have enough time tomorrow, I ___ a report. (First conditional.)|write|will write|would have written;had written;was writing
Present Simple|My sister usually ___ a list before noon.|make|makes|make;is making;will make
Present Continuous|Look! My sister ___ a list right now.|make|is making|makes;has made;will make
Past Simple|Yesterday, My sister ___ a list.|make|made|makes;has made;will make
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a list.|make|was making|am making;have made;will make
Present Perfect|My sister ___ a list already, so it is done now. (Use the present perfect.)|make|has made|makes;is making;will make
Future with will|I promise I ___ a list tomorrow. (Use will.)|make|will make|am making;have made;was making
Going to|I have made a plan: I ___ a list tomorrow. (Use going to.)|make|am going to make|was making;have made;will make
Questions|___ my sister make a list yesterday?|make|Did|Does;Has;Is
Negation|My sister ___ a list yesterday because there was no time.|make|did not make|does not make;is not making;has not made
Modal verbs|You should ___ a list before you leave.|make|make|makes;to make;making
Gerunds and infinitives|I decided ___ a list tomorrow.|make|to make|makes;making;will make
Conditionals|If I have enough time tomorrow, I ___ a list. (First conditional.)|make|will make|would have made;had made;was making
Present Simple|The technician usually ___ groceries before noon.|buy|buys|buy;is buying;will buy
Present Continuous|Look! the technician ___ groceries right now.|buy|is buying|buys;has bought;will buy
Past Simple|Yesterday, the technician ___ groceries.|buy|bought|buys;has bought;will buy
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ groceries.|buy|was buying|am buying;have bought;will buy
Present Perfect|The technician ___ groceries already, so it is done now. (Use the present perfect.)|buy|has bought|buys;is buying;will buy
Future with will|I promise I ___ groceries tomorrow. (Use will.)|buy|will buy|am buying;have bought;was buying
Going to|I have made a plan: I ___ groceries tomorrow. (Use going to.)|buy|am going to buy|was buying;have bought;will buy
Questions|___ the technician buy groceries yesterday?|buy|Did|Does;Has;Is
Negation|The technician ___ groceries yesterday because there was no time.|buy|did not buy|does not buy;is not buying;has not bought
Modal verbs|You should ___ groceries before you leave.|buy|buy|buys;to buy;buying
Gerunds and infinitives|I decided ___ groceries tomorrow.|buy|to buy|buys;buying;will buy
Conditionals|If I have enough time tomorrow, I ___ groceries. (First conditional.)|buy|will buy|would have bought;had bought;was buying
Present Simple|My neighbour usually ___ an email before noon.|send|sends|send;is sending;will send
Present Continuous|Look! My neighbour ___ an email right now.|send|is sending|sends;has sent;will send
Past Simple|Yesterday, My neighbour ___ an email.|send|sent|sends;has sent;will send
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ an email.|send|was sending|am sending;have sent;will send
Present Perfect|My neighbour ___ an email already, so it is done now. (Use the present perfect.)|send|has sent|sends;is sending;will send
Future with will|I promise I ___ an email tomorrow. (Use will.)|send|will send|am sending;have sent;was sending
Going to|I have made a plan: I ___ an email tomorrow. (Use going to.)|send|am going to send|was sending;have sent;will send
Questions|___ my neighbour send an email yesterday?|send|Did|Does;Has;Is
Negation|My neighbour ___ an email yesterday because there was no time.|send|did not send|does not send;is not sending;has not sent
Modal verbs|You should ___ an email before you leave.|send|send|sends;to send;sending
Gerunds and infinitives|I decided ___ an email tomorrow.|send|to send|sends;sending;will send
Conditionals|If I have enough time tomorrow, I ___ an email. (First conditional.)|send|will send|would have sent;had sent;was sending
Present Simple|She usually ___ a client before noon.|call|calls|call;is calling;will call
Present Continuous|Look! She ___ a client right now.|call|is calling|calls;has called;will call
Past Simple|Yesterday, She ___ a client.|call|called|calls;has called;will call
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a client.|call|was calling|am calling;have called;will call
Present Perfect|She ___ a client already, so it is done now. (Use the present perfect.)|call|has called|calls;is calling;will call
Future with will|I promise I ___ a client tomorrow. (Use will.)|call|will call|am calling;have called;was calling
Going to|I have made a plan: I ___ a client tomorrow. (Use going to.)|call|am going to call|was calling;have called;will call
Questions|___ she call a client yesterday?|call|Did|Does;Has;Is
Negation|She ___ a client yesterday because there was no time.|call|did not call|does not call;is not calling;has not called
Modal verbs|You should ___ a client before you leave.|call|call|calls;to call;calling
Gerunds and infinitives|I decided ___ a client tomorrow.|call|to call|calls;calling;will call
Conditionals|If I have enough time tomorrow, I ___ a client. (First conditional.)|call|will call|would have called;had called;was calling
Present Simple|He usually ___ lunch before noon.|prepare|prepares|prepare;is preparing;will prepare
Present Continuous|Look! He ___ lunch right now.|prepare|is preparing|prepares;has prepared;will prepare
Past Simple|Yesterday, He ___ lunch.|prepare|prepared|prepares;has prepared;will prepare
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ lunch.|prepare|was preparing|am preparing;have prepared;will prepare
Present Perfect|He ___ lunch already, so it is done now. (Use the present perfect.)|prepare|has prepared|prepares;is preparing;will prepare
Future with will|I promise I ___ lunch tomorrow. (Use will.)|prepare|will prepare|am preparing;have prepared;was preparing
Going to|I have made a plan: I ___ lunch tomorrow. (Use going to.)|prepare|am going to prepare|was preparing;have prepared;will prepare
Questions|___ he prepare lunch yesterday?|prepare|Did|Does;Has;Is
Negation|He ___ lunch yesterday because there was no time.|prepare|did not prepare|does not prepare;is not preparing;has not prepared
Modal verbs|You should ___ lunch before you leave.|prepare|prepare|prepares;to prepare;preparing
Gerunds and infinitives|I decided ___ lunch tomorrow.|prepare|to prepare|prepares;preparing;will prepare
Conditionals|If I have enough time tomorrow, I ___ lunch. (First conditional.)|prepare|will prepare|would have prepared;had prepared;was preparing
Present Simple|My sister usually ___ dinner before noon.|cook|cooks|cook;is cooking;will cook
Present Continuous|Look! My sister ___ dinner right now.|cook|is cooking|cooks;has cooked;will cook
Past Simple|Yesterday, My sister ___ dinner.|cook|cooked|cooks;has cooked;will cook
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ dinner.|cook|was cooking|am cooking;have cooked;will cook
Present Perfect|My sister ___ dinner already, so it is done now. (Use the present perfect.)|cook|has cooked|cooks;is cooking;will cook
Future with will|I promise I ___ dinner tomorrow. (Use will.)|cook|will cook|am cooking;have cooked;was cooking
Going to|I have made a plan: I ___ dinner tomorrow. (Use going to.)|cook|am going to cook|was cooking;have cooked;will cook
Questions|___ my sister cook dinner yesterday?|cook|Did|Does;Has;Is
Negation|My sister ___ dinner yesterday because there was no time.|cook|did not cook|does not cook;is not cooking;has not cooked
Modal verbs|You should ___ dinner before you leave.|cook|cook|cooks;to cook;cooking
Gerunds and infinitives|I decided ___ dinner tomorrow.|cook|to cook|cooks;cooking;will cook
Conditionals|If I have enough time tomorrow, I ___ dinner. (First conditional.)|cook|will cook|would have cooked;had cooked;was cooking
Present Simple|The technician usually ___ the assignment before noon.|finish|finishes|finish;is finishing;will finish
Present Continuous|Look! the technician ___ the assignment right now.|finish|is finishing|finishes;has finished;will finish
Past Simple|Yesterday, the technician ___ the assignment.|finish|finished|finishes;has finished;will finish
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the assignment.|finish|was finishing|am finishing;have finished;will finish
Present Perfect|The technician ___ the assignment already, so it is done now. (Use the present perfect.)|finish|has finished|finishes;is finishing;will finish
Future with will|I promise I ___ the assignment tomorrow. (Use will.)|finish|will finish|am finishing;have finished;was finishing
Going to|I have made a plan: I ___ the assignment tomorrow. (Use going to.)|finish|am going to finish|was finishing;have finished;will finish
Questions|___ the technician finish the assignment yesterday?|finish|Did|Does;Has;Is
Negation|The technician ___ the assignment yesterday because there was no time.|finish|did not finish|does not finish;is not finishing;has not finished
Modal verbs|You should ___ the assignment before you leave.|finish|finish|finishes;to finish;finishing
Gerunds and infinitives|I decided ___ the assignment tomorrow.|finish|to finish|finishes;finishing;will finish
Conditionals|If I have enough time tomorrow, I ___ the assignment. (First conditional.)|finish|will finish|would have finished;had finished;was finishing
Present Simple|My neighbour usually ___ a new project before noon.|start|starts|start;is starting;will start
Present Continuous|Look! My neighbour ___ a new project right now.|start|is starting|starts;has started;will start
Past Simple|Yesterday, My neighbour ___ a new project.|start|started|starts;has started;will start
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a new project.|start|was starting|am starting;have started;will start
Present Perfect|My neighbour ___ a new project already, so it is done now. (Use the present perfect.)|start|has started|starts;is starting;will start
Future with will|I promise I ___ a new project tomorrow. (Use will.)|start|will start|am starting;have started;was starting
Going to|I have made a plan: I ___ a new project tomorrow. (Use going to.)|start|am going to start|was starting;have started;will start
Questions|___ my neighbour start a new project yesterday?|start|Did|Does;Has;Is
Negation|My neighbour ___ a new project yesterday because there was no time.|start|did not start|does not start;is not starting;has not started
Modal verbs|You should ___ a new project before you leave.|start|start|starts;to start;starting
Gerunds and infinitives|I decided ___ a new project tomorrow.|start|to start|starts;starting;will start
Conditionals|If I have enough time tomorrow, I ___ a new project. (First conditional.)|start|will start|would have started;had started;was starting
Present Simple|She usually ___ the library before noon.|visit|visits|visit;is visiting;will visit
Present Continuous|Look! She ___ the library right now.|visit|is visiting|visits;has visited;will visit
Past Simple|Yesterday, She ___ the library.|visit|visited|visits;has visited;will visit
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the library.|visit|was visiting|am visiting;have visited;will visit
Present Perfect|She ___ the library already, so it is done now. (Use the present perfect.)|visit|has visited|visits;is visiting;will visit
Future with will|I promise I ___ the library tomorrow. (Use will.)|visit|will visit|am visiting;have visited;was visiting
Going to|I have made a plan: I ___ the library tomorrow. (Use going to.)|visit|am going to visit|was visiting;have visited;will visit
Questions|___ she visit the library yesterday?|visit|Did|Does;Has;Is
Negation|She ___ the library yesterday because there was no time.|visit|did not visit|does not visit;is not visiting;has not visited
Modal verbs|You should ___ the library before you leave.|visit|visit|visits;to visit;visiting
Gerunds and infinitives|I decided ___ the library tomorrow.|visit|to visit|visits;visiting;will visit
Conditionals|If I have enough time tomorrow, I ___ the library. (First conditional.)|visit|will visit|would have visited;had visited;was visiting
Present Simple|He usually ___ a photo before noon.|take|takes|take;is taking;will take
Present Continuous|Look! He ___ a photo right now.|take|is taking|takes;has taken;will take
Past Simple|Yesterday, He ___ a photo.|take|took|takes;has taken;will take
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a photo.|take|was taking|am taking;have taken;will take
Present Perfect|He ___ a photo already, so it is done now. (Use the present perfect.)|take|has taken|takes;is taking;will take
Future with will|I promise I ___ a photo tomorrow. (Use will.)|take|will take|am taking;have taken;was taking
Going to|I have made a plan: I ___ a photo tomorrow. (Use going to.)|take|am going to take|was taking;have taken;will take
Questions|___ he take a photo yesterday?|take|Did|Does;Has;Is
Negation|He ___ a photo yesterday because there was no time.|take|did not take|does not take;is not taking;has not taken
Modal verbs|You should ___ a photo before you leave.|take|take|takes;to take;taking
Gerunds and infinitives|I decided ___ a photo tomorrow.|take|to take|takes;taking;will take
Conditionals|If I have enough time tomorrow, I ___ a photo. (First conditional.)|take|will take|would have taken;had taken;was taking
Present Simple|My sister usually ___ a colour before noon.|choose|chooses|choose;is choosing;will choose
Present Continuous|Look! My sister ___ a colour right now.|choose|is choosing|chooses;has chosen;will choose
Past Simple|Yesterday, My sister ___ a colour.|choose|chose|chooses;has chosen;will choose
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a colour.|choose|was choosing|am choosing;have chosen;will choose
Present Perfect|My sister ___ a colour already, so it is done now. (Use the present perfect.)|choose|has chosen|chooses;is choosing;will choose
Future with will|I promise I ___ a colour tomorrow. (Use will.)|choose|will choose|am choosing;have chosen;was choosing
Going to|I have made a plan: I ___ a colour tomorrow. (Use going to.)|choose|am going to choose|was choosing;have chosen;will choose
Questions|___ my sister choose a colour yesterday?|choose|Did|Does;Has;Is
Negation|My sister ___ a colour yesterday because there was no time.|choose|did not choose|does not choose;is not choosing;has not chosen
Modal verbs|You should ___ a colour before you leave.|choose|choose|chooses;to choose;choosing
Gerunds and infinitives|I decided ___ a colour tomorrow.|choose|to choose|chooses;choosing;will choose
Conditionals|If I have enough time tomorrow, I ___ a colour. (First conditional.)|choose|will choose|would have chosen;had chosen;was choosing
Present Simple|The technician usually ___ the supplies before noon.|bring|brings|bring;is bringing;will bring
Present Continuous|Look! the technician ___ the supplies right now.|bring|is bringing|brings;has brought;will bring
Past Simple|Yesterday, the technician ___ the supplies.|bring|brought|brings;has brought;will bring
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the supplies.|bring|was bringing|am bringing;have brought;will bring
Present Perfect|The technician ___ the supplies already, so it is done now. (Use the present perfect.)|bring|has brought|brings;is bringing;will bring
Future with will|I promise I ___ the supplies tomorrow. (Use will.)|bring|will bring|am bringing;have brought;was bringing
Going to|I have made a plan: I ___ the supplies tomorrow. (Use going to.)|bring|am going to bring|was bringing;have brought;will bring
Questions|___ the technician bring the supplies yesterday?|bring|Did|Does;Has;Is
Negation|The technician ___ the supplies yesterday because there was no time.|bring|did not bring|does not bring;is not bringing;has not brought
Modal verbs|You should ___ the supplies before you leave.|bring|bring|brings;to bring;bringing
Gerunds and infinitives|I decided ___ the supplies tomorrow.|bring|to bring|brings;bringing;will bring
Conditionals|If I have enough time tomorrow, I ___ the supplies. (First conditional.)|bring|will bring|would have brought;had brought;was bringing
Present Simple|My neighbour usually ___ the bill before noon.|pay|pays|pay;is paying;will pay
Present Continuous|Look! My neighbour ___ the bill right now.|pay|is paying|pays;has paid;will pay
Past Simple|Yesterday, My neighbour ___ the bill.|pay|paid|pays;has paid;will pay
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the bill.|pay|was paying|am paying;have paid;will pay
Present Perfect|My neighbour ___ the bill already, so it is done now. (Use the present perfect.)|pay|has paid|pays;is paying;will pay
Future with will|I promise I ___ the bill tomorrow. (Use will.)|pay|will pay|am paying;have paid;was paying
Going to|I have made a plan: I ___ the bill tomorrow. (Use going to.)|pay|am going to pay|was paying;have paid;will pay
Questions|___ my neighbour pay the bill yesterday?|pay|Did|Does;Has;Is
Negation|My neighbour ___ the bill yesterday because there was no time.|pay|did not pay|does not pay;is not paying;has not paid
Modal verbs|You should ___ the bill before you leave.|pay|pay|pays;to pay;paying
Gerunds and infinitives|I decided ___ the bill tomorrow.|pay|to pay|pays;paying;will pay
Conditionals|If I have enough time tomorrow, I ___ the bill. (First conditional.)|pay|will pay|would have paid;had paid;was paying
Present Simple|She usually ___ an appointment before noon.|book|books|book;is booking;will book
Present Continuous|Look! She ___ an appointment right now.|book|is booking|books;has booked;will book
Past Simple|Yesterday, She ___ an appointment.|book|booked|books;has booked;will book
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ an appointment.|book|was booking|am booking;have booked;will book
Present Perfect|She ___ an appointment already, so it is done now. (Use the present perfect.)|book|has booked|books;is booking;will book
Future with will|I promise I ___ an appointment tomorrow. (Use will.)|book|will book|am booking;have booked;was booking
Going to|I have made a plan: I ___ an appointment tomorrow. (Use going to.)|book|am going to book|was booking;have booked;will book
Questions|___ she book an appointment yesterday?|book|Did|Does;Has;Is
Negation|She ___ an appointment yesterday because there was no time.|book|did not book|does not book;is not booking;has not booked
Modal verbs|You should ___ an appointment before you leave.|book|book|books;to book;booking
Gerunds and infinitives|I decided ___ an appointment tomorrow.|book|to book|books;booking;will book
Conditionals|If I have enough time tomorrow, I ___ an appointment. (First conditional.)|book|will book|would have booked;had booked;was booking
Present Simple|He usually ___ new materials before noon.|order|orders|order;is ordering;will order
Present Continuous|Look! He ___ new materials right now.|order|is ordering|orders;has ordered;will order
Past Simple|Yesterday, He ___ new materials.|order|ordered|orders;has ordered;will order
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ new materials.|order|was ordering|am ordering;have ordered;will order
Present Perfect|He ___ new materials already, so it is done now. (Use the present perfect.)|order|has ordered|orders;is ordering;will order
Future with will|I promise I ___ new materials tomorrow. (Use will.)|order|will order|am ordering;have ordered;was ordering
Going to|I have made a plan: I ___ new materials tomorrow. (Use going to.)|order|am going to order|was ordering;have ordered;will order
Questions|___ he order new materials yesterday?|order|Did|Does;Has;Is
Negation|He ___ new materials yesterday because there was no time.|order|did not order|does not order;is not ordering;has not ordered
Modal verbs|You should ___ new materials before you leave.|order|order|orders;to order;ordering
Gerunds and infinitives|I decided ___ new materials tomorrow.|order|to order|orders;ordering;will order
Conditionals|If I have enough time tomorrow, I ___ new materials. (First conditional.)|order|will order|would have ordered;had ordered;was ordering
Present Simple|My sister usually ___ the receipt before noon.|print|prints|print;is printing;will print
Present Continuous|Look! My sister ___ the receipt right now.|print|is printing|prints;has printed;will print
Past Simple|Yesterday, My sister ___ the receipt.|print|printed|prints;has printed;will print
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the receipt.|print|was printing|am printing;have printed;will print
Present Perfect|My sister ___ the receipt already, so it is done now. (Use the present perfect.)|print|has printed|prints;is printing;will print
Future with will|I promise I ___ the receipt tomorrow. (Use will.)|print|will print|am printing;have printed;was printing
Going to|I have made a plan: I ___ the receipt tomorrow. (Use going to.)|print|am going to print|was printing;have printed;will print
Questions|___ my sister print the receipt yesterday?|print|Did|Does;Has;Is
Negation|My sister ___ the receipt yesterday because there was no time.|print|did not print|does not print;is not printing;has not printed
Modal verbs|You should ___ the receipt before you leave.|print|print|prints;to print;printing
Gerunds and infinitives|I decided ___ the receipt tomorrow.|print|to print|prints;printing;will print
Conditionals|If I have enough time tomorrow, I ___ the receipt. (First conditional.)|print|will print|would have printed;had printed;was printing
Present Simple|The technician usually ___ a message before noon.|answer|answers|answer;is answering;will answer
Present Continuous|Look! the technician ___ a message right now.|answer|is answering|answers;has answered;will answer
Past Simple|Yesterday, the technician ___ a message.|answer|answered|answers;has answered;will answer
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a message.|answer|was answering|am answering;have answered;will answer
Present Perfect|The technician ___ a message already, so it is done now. (Use the present perfect.)|answer|has answered|answers;is answering;will answer
Future with will|I promise I ___ a message tomorrow. (Use will.)|answer|will answer|am answering;have answered;was answering
Going to|I have made a plan: I ___ a message tomorrow. (Use going to.)|answer|am going to answer|was answering;have answered;will answer
Questions|___ the technician answer a message yesterday?|answer|Did|Does;Has;Is
Negation|The technician ___ a message yesterday because there was no time.|answer|did not answer|does not answer;is not answering;has not answered
Modal verbs|You should ___ a message before you leave.|answer|answer|answers;to answer;answering
Gerunds and infinitives|I decided ___ a message tomorrow.|answer|to answer|answers;answering;will answer
Conditionals|If I have enough time tomorrow, I ___ a message. (First conditional.)|answer|will answer|would have answered;had answered;was answering
Present Simple|My neighbour usually ___ a form before noon.|fill out|fills out|fill out;is filling out;will fill out
Present Continuous|Look! My neighbour ___ a form right now.|fill out|is filling out|fills out;has filled out;will fill out
Past Simple|Yesterday, My neighbour ___ a form.|fill out|filled out|fills out;has filled out;will fill out
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a form.|fill out|was filling out|am filling out;have filled out;will fill out
Present Perfect|My neighbour ___ a form already, so it is done now. (Use the present perfect.)|fill out|has filled out|fills out;is filling out;will fill out
Future with will|I promise I ___ a form tomorrow. (Use will.)|fill out|will fill out|am filling out;have filled out;was filling out
Going to|I have made a plan: I ___ a form tomorrow. (Use going to.)|fill out|am going to fill out|was filling out;have filled out;will fill out
Questions|___ my neighbour fill out a form yesterday?|fill out|Did|Does;Has;Is
Negation|My neighbour ___ a form yesterday because there was no time.|fill out|did not fill out|does not fill out;is not filling out;has not filled out
Modal verbs|You should ___ a form before you leave.|fill out|fill out|fills out;to fill out;filling out
Gerunds and infinitives|I decided ___ a form tomorrow.|fill out|to fill out|fills out;filling out;will fill out
Conditionals|If I have enough time tomorrow, I ___ a form. (First conditional.)|fill out|will fill out|would have filled out;had filled out;was filling out
Present Simple|She usually ___ the nails before noon.|file|files|file;is filing;will file
Present Continuous|Look! She ___ the nails right now.|file|is filing|files;has filed;will file
Past Simple|Yesterday, She ___ the nails.|file|filed|files;has filed;will file
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the nails.|file|was filing|am filing;have filed;will file
Present Perfect|She ___ the nails already, so it is done now. (Use the present perfect.)|file|has filed|files;is filing;will file
Future with will|I promise I ___ the nails tomorrow. (Use will.)|file|will file|am filing;have filed;was filing
Going to|I have made a plan: I ___ the nails tomorrow. (Use going to.)|file|am going to file|was filing;have filed;will file
Questions|___ she file the nails yesterday?|file|Did|Does;Has;Is
Negation|She ___ the nails yesterday because there was no time.|file|did not file|does not file;is not filing;has not filed
Modal verbs|You should ___ the nails before you leave.|file|file|files;to file;filing
Gerunds and infinitives|I decided ___ the nails tomorrow.|file|to file|files;filing;will file
Conditionals|If I have enough time tomorrow, I ___ the nails. (First conditional.)|file|will file|would have filed;had filed;was filing
Present Simple|He usually ___ the base coat before noon.|apply|applies|apply;is applying;will apply
Present Continuous|Look! He ___ the base coat right now.|apply|is applying|applies;has applied;will apply
Past Simple|Yesterday, He ___ the base coat.|apply|applied|applies;has applied;will apply
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the base coat.|apply|was applying|am applying;have applied;will apply
Present Perfect|He ___ the base coat already, so it is done now. (Use the present perfect.)|apply|has applied|applies;is applying;will apply
Future with will|I promise I ___ the base coat tomorrow. (Use will.)|apply|will apply|am applying;have applied;was applying
Going to|I have made a plan: I ___ the base coat tomorrow. (Use going to.)|apply|am going to apply|was applying;have applied;will apply
Questions|___ he apply the base coat yesterday?|apply|Did|Does;Has;Is
Negation|He ___ the base coat yesterday because there was no time.|apply|did not apply|does not apply;is not applying;has not applied
Modal verbs|You should ___ the base coat before you leave.|apply|apply|applies;to apply;applying
Gerunds and infinitives|I decided ___ the base coat tomorrow.|apply|to apply|applies;applying;will apply
Conditionals|If I have enough time tomorrow, I ___ the base coat. (First conditional.)|apply|will apply|would have applied;had applied;was applying
Present Simple|My sister usually ___ the old polish before noon.|remove|removes|remove;is removing;will remove
Present Continuous|Look! My sister ___ the old polish right now.|remove|is removing|removes;has removed;will remove
Past Simple|Yesterday, My sister ___ the old polish.|remove|removed|removes;has removed;will remove
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ the old polish.|remove|was removing|am removing;have removed;will remove
Present Perfect|My sister ___ the old polish already, so it is done now. (Use the present perfect.)|remove|has removed|removes;is removing;will remove
Future with will|I promise I ___ the old polish tomorrow. (Use will.)|remove|will remove|am removing;have removed;was removing
Going to|I have made a plan: I ___ the old polish tomorrow. (Use going to.)|remove|am going to remove|was removing;have removed;will remove
Questions|___ my sister remove the old polish yesterday?|remove|Did|Does;Has;Is
Negation|My sister ___ the old polish yesterday because there was no time.|remove|did not remove|does not remove;is not removing;has not removed
Modal verbs|You should ___ the old polish before you leave.|remove|remove|removes;to remove;removing
Gerunds and infinitives|I decided ___ the old polish tomorrow.|remove|to remove|removes;removing;will remove
Conditionals|If I have enough time tomorrow, I ___ the old polish. (First conditional.)|remove|will remove|would have removed;had removed;was removing
Present Simple|The technician usually ___ a broken nail before noon.|repair|repairs|repair;is repairing;will repair
Present Continuous|Look! the technician ___ a broken nail right now.|repair|is repairing|repairs;has repaired;will repair
Past Simple|Yesterday, the technician ___ a broken nail.|repair|repaired|repairs;has repaired;will repair
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a broken nail.|repair|was repairing|am repairing;have repaired;will repair
Present Perfect|The technician ___ a broken nail already, so it is done now. (Use the present perfect.)|repair|has repaired|repairs;is repairing;will repair
Future with will|I promise I ___ a broken nail tomorrow. (Use will.)|repair|will repair|am repairing;have repaired;was repairing
Going to|I have made a plan: I ___ a broken nail tomorrow. (Use going to.)|repair|am going to repair|was repairing;have repaired;will repair
Questions|___ the technician repair a broken nail yesterday?|repair|Did|Does;Has;Is
Negation|The technician ___ a broken nail yesterday because there was no time.|repair|did not repair|does not repair;is not repairing;has not repaired
Modal verbs|You should ___ a broken nail before you leave.|repair|repair|repairs;to repair;repairing
Gerunds and infinitives|I decided ___ a broken nail tomorrow.|repair|to repair|repairs;repairing;will repair
Conditionals|If I have enough time tomorrow, I ___ a broken nail. (First conditional.)|repair|will repair|would have repaired;had repaired;was repairing
Present Simple|My neighbour usually ___ a suitcase before noon.|pack|packs|pack;is packing;will pack
Present Continuous|Look! My neighbour ___ a suitcase right now.|pack|is packing|packs;has packed;will pack
Past Simple|Yesterday, My neighbour ___ a suitcase.|pack|packed|packs;has packed;will pack
Past Continuous|At exactly 10 yesterday, I was in the middle of this task: I ___ a suitcase.|pack|was packing|am packing;have packed;will pack
Present Perfect|My neighbour ___ a suitcase already, so it is done now. (Use the present perfect.)|pack|has packed|packs;is packing;will pack
Future with will|I promise I ___ a suitcase tomorrow. (Use will.)|pack|will pack|am packing;have packed;was packing
Going to|I have made a plan: I ___ a suitcase tomorrow. (Use going to.)|pack|am going to pack|was packing;have packed;will pack
Questions|___ my neighbour pack a suitcase yesterday?|pack|Did|Does;Has;Is
Negation|My neighbour ___ a suitcase yesterday because there was no time.|pack|did not pack|does not pack;is not packing;has not packed
Modal verbs|You should ___ a suitcase before you leave.|pack|pack|packs;to pack;packing
Gerunds and infinitives|I decided ___ a suitcase tomorrow.|pack|to pack|packs;packing;will pack
Conditionals|If I have enough time tomorrow, I ___ a suitcase. (First conditional.)|pack|will pack|would have packed;had packed;was packing
Present Perfect Continuous|I ___ for the bus for two hours and I am still doing it. (Use the continuous form.)|wait|have been waiting|was waiting;will be waiting;am going to be waiting
Present Perfect Continuous|I ___ English for two hours and I am still doing it. (Use the continuous form.)|study|have been studying|was studying;will be studying;am going to be studying
Present Perfect Continuous|I ___ at the salon for two hours and I am still doing it. (Use the continuous form.)|work|have been working|was working;will be working;am going to be working
Present Perfect Continuous|I ___ around the park for two hours and I am still doing it. (Use the continuous form.)|walk|have been walking|was walking;will be walking;am going to be walking
Present Perfect Continuous|I ___ for an apartment for two hours and I am still doing it. (Use the continuous form.)|look|have been looking|was looking;will be looking;am going to be looking
Present Perfect Continuous|I ___ the piano for two hours and I am still doing it. (Use the continuous form.)|practise|have been practising|was practising;will be practising;am going to be practising
Present Perfect Continuous|I ___ for a race for two hours and I am still doing it. (Use the continuous form.)|train|have been training|was training;will be training;am going to be training
Present Perfect Continuous|I ___ the walls for two hours and I am still doing it. (Use the continuous form.)|paint|have been painting|was painting;will be painting;am going to be painting
Present Perfect Continuous|I ___ this book for two hours and I am still doing it. (Use the continuous form.)|read|have been reading|was reading;will be reading;am going to be reading
Present Perfect Continuous|I ___ on the phone for two hours and I am still doing it. (Use the continuous form.)|talk|have been talking|was talking;will be talking;am going to be talking
Present Perfect Continuous|I ___ around town for two hours and I am still doing it. (Use the continuous form.)|drive|have been driving|was driving;will be driving;am going to be driving
Present Perfect Continuous|I ___ for clothes for two hours and I am still doing it. (Use the continuous form.)|shop|have been shopping|was shopping;will be shopping;am going to be shopping
Present Perfect Continuous|I ___ for a job for two hours and I am still doing it. (Use the continuous form.)|search|have been searching|was searching;will be searching;am going to be searching
Present Perfect Continuous|I ___ to music for two hours and I am still doing it. (Use the continuous form.)|listen|have been listening|was listening;will be listening;am going to be listening
Present Perfect Continuous|I ___ the news for two hours and I am still doing it. (Use the continuous form.)|watch|have been watching|was watching;will be watching;am going to be watching
Present Perfect Continuous|I ___ a sweater for two hours and I am still doing it. (Use the continuous form.)|knit|have been knitting|was knitting;will be knitting;am going to be knitting
Present Perfect Continuous|I ___ in the yard for two hours and I am still doing it. (Use the continuous form.)|garden|have been gardening|was gardening;will be gardening;am going to be gardening
Present Perfect Continuous|I ___ at home for two hours and I am still doing it. (Use the continuous form.)|exercise|have been exercising|was exercising;will be exercising;am going to be exercising
Present Perfect Continuous|I ___ for the exam for two hours and I am still doing it. (Use the continuous form.)|prepare|have been preparing|was preparing;will be preparing;am going to be preparing
Articles|Choose the indefinite article: ___ umbrella.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ hour.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ university.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ apple.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ orange.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ book.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ chair.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ honest person.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ European city.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ idea.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ appointment.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ receipt.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ email.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ uniform.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ engineer.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ doctor.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ old coat.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ new phone.|a / an|a|an;the;no article
Articles|Choose the indefinite article: ___ empty box.|a / an|an|a;the;no article
Articles|Choose the indefinite article: ___ useful tool.|a / an|a|an;the;no article
Prepositions|The event takes place ___ Monday.|time preposition|on|in;at;since
Prepositions|The event takes place ___ 7 p.m..|time preposition|at|in;on;since
Prepositions|The event takes place ___ July.|time preposition|in|on;at;since
Prepositions|The event takes place ___ 2024.|time preposition|in|on;at;since
Prepositions|The event takes place ___ Friday morning.|time preposition|on|in;at;since
Prepositions|The event takes place ___ noon.|time preposition|at|in;on;since
Prepositions|The event takes place ___ midnight.|time preposition|at|in;on;since
Prepositions|The event takes place ___ the afternoon.|time preposition|in|on;at;since
Prepositions|The event takes place ___ December 25.|time preposition|on|in;at;since
Prepositions|The event takes place ___ the evening.|time preposition|in|on;at;since
Prepositions|The event takes place ___ Tuesday night.|time preposition|on|in;at;since
Prepositions|The event takes place ___ sunrise.|time preposition|at|in;on;since
Prepositions|The event takes place ___ the winter.|time preposition|in|on;at;since
Prepositions|The event takes place ___ my birthday.|time preposition|on|in;at;since
Prepositions|The event takes place ___ the age of 20.|time preposition|at|in;on;since
Prepositions|The event takes place ___ September.|time preposition|in|on;at;since
Prepositions|The event takes place ___ the beginning of May.|time preposition|at|in;on;since
Prepositions|The event takes place ___ the 1990s.|time preposition|in|on;at;since
Quantifiers|How ___ water do we need?|quantity|much|many;few;little
Quantifiers|How ___ milk do we need?|quantity|much|many;few;little
Quantifiers|How ___ rice do we need?|quantity|much|many;few;little
Quantifiers|How ___ money do we need?|quantity|much|many;few;little
Quantifiers|How ___ time do we need?|quantity|much|many;few;little
Quantifiers|How ___ information do we need?|quantity|much|many;few;little
Quantifiers|How ___ advice do we need?|quantity|much|many;few;little
Quantifiers|How ___ flour do we need?|quantity|much|many;few;little
Quantifiers|How ___ sugar do we need?|quantity|much|many;few;little
Quantifiers|How ___ coffee do we need?|quantity|much|many;few;little
Quantifiers|How ___ clients do we need?|quantity|many|much;few;little
Quantifiers|How ___ appointments do we need?|quantity|many|much;few;little
Quantifiers|How ___ books do we need?|quantity|many|much;few;little
Quantifiers|How ___ eggs do we need?|quantity|many|much;few;little
Quantifiers|How ___ apples do we need?|quantity|many|much;few;little
Quantifiers|How ___ messages do we need?|quantity|many|much;few;little
Quantifiers|How ___ questions do we need?|quantity|many|much;few;little
Quantifiers|How ___ bags do we need?|quantity|many|much;few;little
Quantifiers|How ___ tickets do we need?|quantity|many|much;few;little
Comparisons|This option is ___ than the other one.|cheap|cheaper|cheap;most cheap;as cheap
Comparisons|Complete the comparison with large: This one is ___ than that one.|large|larger|large;most large;as large
Comparisons|Complete the comparison with small: This one is ___ than that one.|small|smaller|small;most small;as small
Comparisons|Complete the comparison with easy: This one is ___ than that one.|easy|easier|easy;most easy;as easy
Comparisons|Complete the comparison with heavy: This one is ___ than that one.|heavy|heavier|heavy;most heavy;as heavy
Comparisons|Complete the comparison with fast: This one is ___ than that one.|fast|faster|fast;most fast;as fast
Comparisons|Complete the comparison with slow: This one is ___ than that one.|slow|slower|slow;most slow;as slow
Comparisons|Complete the comparison with good: This one is ___ than that one.|good|better|good;most good;as good
Comparisons|Complete the comparison with bad: This one is ___ than that one.|bad|worse|bad;most bad;as bad
Comparisons|Complete the comparison with expensive: This one is ___ than that one.|expensive|more expensive|expensive;most expensive;as expensive
Comparisons|Complete the comparison with comfortable: This one is ___ than that one.|comfortable|more comfortable|comfortable;most comfortable;as comfortable
Comparisons|Complete the comparison with useful: This one is ___ than that one.|useful|more useful|useful;most useful;as useful
Comparisons|Complete the comparison with quiet: This one is ___ than that one.|quiet|quieter|quiet;most quiet;as quiet
Comparisons|Complete the comparison with bright: This one is ___ than that one.|bright|brighter|bright;most bright;as bright
Comparisons|Complete the comparison with safe: This one is ___ than that one.|safe|safer|safe;most safe;as safe
Comparisons|Complete the comparison with long: This one is ___ than that one.|long|longer|long;most long;as long
Comparisons|Complete the comparison with short: This one is ___ than that one.|short|shorter|short;most short;as short
Comparisons|Complete the comparison with warm: This one is ___ than that one.|warm|warmer|warm;most warm;as warm
Comparisons|Complete the comparison with cold: This one is ___ than that one.|cold|colder|cold;most cold;as cold
Comparisons|Complete the comparison with difficult: This one is ___ than that one.|difficult|more difficult|difficult;most difficult;as difficult
Polite requests|Would you mind ___ the schedule?|check|checking|check;to check;will check
Obligation and plans|I have to ___ the schedule before I go home.|check|check|checks;checking;to check
Polite requests|Would you mind ___ the table?|clean|cleaning|clean;to clean;will clean
Obligation and plans|I have to ___ the table before I go home.|clean|clean|cleans;cleaning;to clean
Polite requests|Would you mind ___ the dishes?|wash|washing|wash;to wash;will wash
Obligation and plans|I have to ___ the dishes before I go home.|wash|wash|washes;washing;to wash
Polite requests|Would you mind ___ the shop?|open|opening|open;to open;will open
Obligation and plans|I have to ___ the shop before I go home.|open|open|opens;opening;to open
Polite requests|Would you mind ___ the window?|close|closing|close;to close;will close
Obligation and plans|I have to ___ the window before I go home.|close|close|closes;closing;to close
Polite requests|Would you mind ___ the instructions?|read|reading|read;to read;will read
Obligation and plans|I have to ___ the instructions before I go home.|read|read|reads;reading;to read
Polite requests|Would you mind ___ a report?|write|writing|write;to write;will write
Obligation and plans|I have to ___ a report before I go home.|write|write|writes;writing;to write
Polite requests|Would you mind ___ a list?|make|making|make;to make;will make
Obligation and plans|I have to ___ a list before I go home.|make|make|makes;making;to make
Polite requests|Would you mind ___ groceries?|buy|buying|buy;to buy;will buy
Obligation and plans|I have to ___ groceries before I go home.|buy|buy|buys;buying;to buy
Polite requests|Would you mind ___ an email?|send|sending|send;to send;will send
Obligation and plans|I have to ___ an email before I go home.|send|send|sends;sending;to send
Polite requests|Would you mind ___ a client?|call|calling|call;to call;will call
Obligation and plans|I have to ___ a client before I go home.|call|call|calls;calling;to call
Polite requests|Would you mind ___ lunch?|prepare|preparing|prepare;to prepare;will prepare
Obligation and plans|I have to ___ lunch before I go home.|prepare|prepare|prepares;preparing;to prepare
Polite requests|Would you mind ___ dinner?|cook|cooking|cook;to cook;will cook
Obligation and plans|I have to ___ dinner before I go home.|cook|cook|cooks;cooking;to cook
Polite requests|Would you mind ___ the assignment?|finish|finishing|finish;to finish;will finish
Obligation and plans|I have to ___ the assignment before I go home.|finish|finish|finishes;finishing;to finish
Polite requests|Would you mind ___ a new project?|start|starting|start;to start;will start
Obligation and plans|I have to ___ a new project before I go home.|start|start|starts;starting;to start
Polite requests|Would you mind ___ the library?|visit|visiting|visit;to visit;will visit
Obligation and plans|I have to ___ the library before I go home.|visit|visit|visits;visiting;to visit
Polite requests|Would you mind ___ a photo?|take|taking|take;to take;will take
Obligation and plans|I have to ___ a photo before I go home.|take|take|takes;taking;to take
Polite requests|Would you mind ___ a colour?|choose|choosing|choose;to choose;will choose
Obligation and plans|I have to ___ a colour before I go home.|choose|choose|chooses;choosing;to choose
Polite requests|Would you mind ___ the supplies?|bring|bringing|bring;to bring;will bring
Obligation and plans|I have to ___ the supplies before I go home.|bring|bring|brings;bringing;to bring
Polite requests|Would you mind ___ the bill?|pay|paying|pay;to pay;will pay
Obligation and plans|I have to ___ the bill before I go home.|pay|pay|pays;paying;to pay
Polite requests|Would you mind ___ an appointment?|book|booking|book;to book;will book
Obligation and plans|I have to ___ an appointment before I go home.|book|book|books;booking;to book
Polite requests|Would you mind ___ new materials?|order|ordering|order;to order;will order
Obligation and plans|I have to ___ new materials before I go home.|order|order|orders;ordering;to order
Polite requests|Would you mind ___ the receipt?|print|printing|print;to print;will print
Obligation and plans|I have to ___ the receipt before I go home.|print|print|prints;printing;to print
Polite requests|Would you mind ___ a message?|answer|answering|answer;to answer;will answer`;
const bank=raw.split('\n').map(l=>{let [topic,q,h,a,o]=l.split('|');return {topic,q,h,a,o:o.split(';')}});