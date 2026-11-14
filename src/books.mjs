// Book catalogue for the Tindur demo.
//
// SOURCE: "Tindur - textar við bækurnar.docx" from Helgi Jónsson, plus the
// supplied cover images. Description text is copied from the document.
// Every change to the client's wording is listed in `textNotes`.
//
// ORDER: the document gives no publication years, so the list keeps the order
// of the Word document as a PROVISIONAL order (covers-pending books last, see below). Replace with real years
// (`year`) and sort newest first once Helgi confirms them.
//
// Fields left null are unknown — never fill them with guesses.

export const books = [
  {
    title: 'Veiðivinir 2',
    author: 'Gunnar Bender',
    authorSource: 'inferred', // Inferred from the author paragraph under the book text.
    cover: null,
    audience: [],
    description: [
      'Vinirnir Páll og Bjarni eru enn og aftur að undirbúa veiðiferðir sumarsins, skólinn búinn og líkt og síðasta sumar hafa þeir platað afa Páls til að koma þeim á milli veiðistaða í sumarfríinu. Að þessu sinni er ferðinni heitið í Veiðivötn, sem er náttúruperla rétt vestan við Vatnajökul, og núna er stelpa með í för.',
      'Veiðivötn samanstanda af allt að 50 vötnum sem dreifast um stórt svæði og hægt að veiða fisk í þeim öllum, urriða og bleikjur. Páll og Bjarni geta vart beðið eftir að komast úr bænum til að upplifa ævintýrin sem bíða þeirra í sumarfríinu.',
      'Líklegast kynnast þeir einnig nýju fólki, þjálfurum og stórsöngvurum, veiðistúlkum og furðuverum, sem gerir fríið enn skemmtilegra.',
    ],
    about: [
      'Gunnar Bender hefur stundað laxveiðar frá unga aldri og er orðinn einn þekktasti laxveiðimaður landsins. Sögurnar um Pál og Bjarna eru mikið byggðar á reynslu höfundar og þeim fjölmörgu ævintýrum sem hann hefur upplifað í gegnum árin að eltast við þann stóra. Gunnar hefur gefið út bækur um laxveiðar, skrifað greinar, ritstýrt Sportveiðiblaðinu, framleitt veiðiþætti fyrir sjónvarp og net, auk þess að halda úti vefsíðu um sportveiðar.',
    ],
    aboutHeading: 'Um höfundinn',
    textNotes: ['„til koma“ breytt í „til að koma“.', 'Kápumynd vantar.', 'Höfundur ályktaður af texta um Gunnar Bender – staðfesta.'],
  },
  {
    title: 'Systur',
    author: 'Raina Telgemeier',
    translator: 'Helgi Jónsson',
    cover: null, // Only appears inside the Brostu/Systur banner.
    audience: ['ungir'],
    translated: true,
    description: [
      'Fyrst var það Brostu, sem kom út í fyrra. Nú er það Systur, óbeint framhald af fyrri bók. Raina Telgemeier segir hér frá kostulegu ferðalagi systra með mömmu sinni í sendiferðabíl. Er eitthvað betra en að rífast við systur sína? Flottur lestur fyrir unga lesendur. Litmyndir.',
    ],
    about: ['Helgi Jónsson íslenskaði. Hann hefur þýtt m.a. Kidda klaufa bækurnar síðustu tuttugu ár.'],
    aboutHeading: 'Um þýðinguna',
    textNotes: ['Kápumynd vantar (Systur sést aðeins á kynningarborða).', '„kom út í fyrra“ er afstætt tímaviðmið sem úreldist – íhuga að setja ártal.'],
  },
  {
    title: 'Úr húfu Guðs í þennan heim',
    subtitle: 'Sjálfsævisaga Hallveigar Thorlacius',
    author: 'Hallveig Thorlacius',
    cover: null,
    audience: [],
    description: [
      '„Fyrsta minning mín skýr eftir öll þessi ár. Ég er farin að standa upprétt og er við endann á ógnarlöngum gangi sem liggur eftir endilöngum Austurbæjarskólanum. En nú ætla ég að leika mér að því að horfa yfir farinn veg, komin yfir á hinn endann.“ Hallveig Thorlacius segir ferðasögu ævi sinnar.',
      'Þannig hefst þessi ferðasaga frá bernsku til elliára. Hallveig Thorlacius segir frá því helsta sem litað hefur líf hennar. Hvernig hún ólst upp í Austurbæjarskólanum þar til faðir hennar dó árið 1945. Hvernig himinninn hrundi og móðir hennar varð ekkja 33 ára með 5 ung börn. Hallveig segir frá bernskuárum sínum í Reykjavík eftirstríðsáranna og sumrunum í Skagafirði og Köldukinn. Hún stundaði háskólanám í Moskvu og aðeins tuttugu ára upplifði hún Rússland sem stóð á tímamótum. Hún segir frá daglegu lífi í Sovétríkjunum eins og það blasti við henni. Hún giftist Ragnari Arnalds sem þá var kominn á þing aðeins 24 ára. Hún segir frá lífi þeirra og dætranna Guðrúnar og Helgu. Hvernig hún lét drauminn um brúðuleikhús rætast. Úr öllu þessu varð spennandi ferðasaga um framandi lönd sem hér er sögð frá óvenjulegu sjónarhorni.',
    ],
    textNotes: [
      'Undirtitill: „Sjálfsæisaga“ leiðrétt í „Sjálfsævisaga“.',
      'Upphafsgreinin (tilvitnunin) var tvítekin í skjalinu – birt einu sinni.',
      '„þessi ferðasagna“ leiðrétt í „þessi ferðasaga“.',
      '„Fyrsta minning mín skýr“ – vantar e.t.v. orð („er skýr“)? Óbreytt.',
      'Kápumynd vantar.',
    ],
  },
  {
    title: 'Leigubílstjóri deyr',
    author: 'Ágúst Þór Ámundason',
    authorSource: 'inferred',
    cover: null,
    audience: [],
    description: [
      'Leigubíll finnst skaðbrunninn við Reynisvatn í Reykjavík. Í honum eru líkamsleifar manns sem lögregla finnur strax út að hafi verið ráðinn bani áður en kveikt var í. Hlöðver Hlöðversson rannsakandi er settur í málið, sem leiðir að gömlu mannshvarfsmáli og að hópi vafasamra einstaklinga sem tengdust nektardansstöðunum um síðustu aldamót.',
    ],
    about: [
      'Ágúst Þór Ámundason er fæddur árið 1980, og sleit barnsskónum að Laugum í Reykjadal þar sem hann býr nú eftir 27 ára búsetu á suðvesturhorninu.',
      'Hann hefur unnið við ýmis störf, verið við sláturtíð, unnið í fiski, stundað sjómennsku, sölumennsku, útkeyrslu og í seinni tíð verið leigubílstjóri.',
    ],
    aboutHeading: 'Um höfundinn',
    textNotes: ['Kápumynd vantar.', 'Höfundur ályktaður af texta um Ágúst Þór – staðfesta.'],
  },
  {
    title: 'Fuglar í íslenskri náttúru',
    author: 'María Björg Gunnarsdóttir',
    cover: 'fuglar',
    audience: [],
    description: [
      'Í íslenskri náttúru eru augnablik sem lifa lengur en orð fá lýst. Fuglar tilheyra þeim augnablikum. Þeir birtast og hverfa með vindinum, eins og hluti af birtunni sjálfri — svartir punktar yfir gráum vetrarhimni, hvítir vængir yfir briminu. María Björg Gunnarsdóttir hefur myndað fugla árum saman og hér er afraksturinn á fallegri bók.',
    ],
    textNotes: [],
  },
  {
    title: 'Enginn kom í dag',
    author: 'Helgi Jónsson',
    cover: 'enginn',
    audience: [],
    description: [
      'Það er ekki stórstaðarlegt á dvalarheimilum aldraðra. Valdimar er 84 ára, ekkill og á uppkomin börn sem hann sér sjaldan. Marga daga gerist fátt, Valdimar hittir fólkið, borðar, drekkur kaffi, spjallar, spurning hver dó í gær – skrifar í dagbókina og endar alla daga: Enginn kom í dag. En þegar Maggi refur dregur upp byssuna færist fjör í leikinn!',
      'Þessi bók veltir upp spurningunni hvað við sem þjóð erum að gera við eldra fólk með því að loka það inni, fjarri mannlífinu sjálfu.',
    ],
    textNotes: ['„stórstaðarlegt“ – óvenjulegt orð, á að standa „stórtíðindalegt“? Óbreytt.'],
  },
  {
    title: 'Barnabók',
    subtitle: 'Hundrað og ein saga af Akureyri æsku minnar',
    author: 'Sigmundur Ernir Rúnarsson',
    cover: 'barnabok',
    audience: [],
    description: [
      'Sigmundur Ernir Rúnarsson, þingmaður og fyrrum fréttamaður á Stöð 2 og ritstjóri Fréttablaðsins, er alinn upp á Syðri-Brekkunni á Akureyri á sjöunda áratug síðustu aldar. Á þeim tíma héldust fábreytni og nægjusemi í hendur og má segja að nýtni og sparsemi hafi verið höfuðdyggðir á heimilum alþýðufólks í bænum. Hér safnar skáldið góðkunna saman munnmælasögum sem eru í senn forkostulegar og gamansamar heimildir um horfinn tíma.',
      'Eftir seinna heimsstríð fjölgaði Akureyringum ört og fyrstu hverfi bæjarins tóku á sig mynd. Á meðan Innbærinn kúrði undir kambi og Oddeyrin þétti raðirnar, flengdist Brekkan upp í hlíð og Þorpið blés í norður. Þar að baki stóð alþýðufólk sem reisti hús sín á mörgum árum, hurð fyrir hurð, á tímum hafta og óðaverðbólgu, svo ekki voru efni á gólfteppi fyrr en seint og um síðir, ef rétti bankastjórinn var á vakt. Annars var þetta vinna hjá Verksmiðjunum og ÚA, en Sjallinn um helgar. Nýja Akureyri er svo miklu fjölbreyttari en sú gamla má ekki gleymast.',
    ],
    textNotes: ['Síðasta setningin („Nýja Akureyri er svo miklu fjölbreyttari en sú gamla má ekki gleymast.“) vantar e.t.v. kommu eða orð. Óbreytt.'],
  },
  {
    title: 'Freddi fretari',
    author: 'Helgi Jónsson',
    illustrator: 'Hrannar Atli Hauksson',
    cover: 'freddi-fretari',
    audience: ['ungir'],
    series: 'barnabokaflokkur',
    description: [
      'Það er eitt stórt vandamál í lífi Fredda. Hann rekur við í tíma og ótíma. Hann ræður ekki við þetta. Maginn er í uppreisn og gerir Fredda lífið leitt alla daga.',
      'Systur hans þola þetta ekki og mamma hans skilur það ekki heldur. Hvernig stendur eiginlega á þessu endalausa prumpi í stráknum?',
      'Í skólanum er Freddi langóvinsælasti strákurinn í bekknum. Hver vill sitja hjá strák sem sendi bláar loftbólur og kúlur út með ógeðslykt sem berst um allan bæ þegar þær springa? Meira að segja endurnar við tjörnina flýja þegar hann kemur á svæðið.',
      'Sennilega vill enginn lesandi lenda í því sama og Freddi, greyið.',
      'Svo gerist kraftaverk sem breytir öllu.',
      'Stórskemmtileg bók fyrir yngstu lesendurna eftir Helga Jónsson. Líflegar og bráðsmellnar teikningar eftir Hrannar Atla Hauksson.',
    ],
    textNotes: ['Fyrsta efnisgreinin var tvítekin í skjalinu – birt einu sinni.', '„ógeðskykt“ leiðrétt í „ógeðslykt“.', '„sem sendi“ – á e.t.v. að vera „sem sendir“? Óbreytt.'],
  },
  {
    title: 'Inga slynga',
    author: 'Helgi Jónsson',
    illustrator: 'Hrannar Atli Hauksson',
    cover: 'inga-slynga',
    audience: ['ungir'],
    series: 'barnabokaflokkur',
    description: [
      'Stórskemmtileg bók fyrir yngstu lesendurna eftir Helga Jónsson. Inga ætlar sér að verða alþingismaður þegar hún verður stór og er strax byrjuð að æfa sig.',
      'Inga er engin venjuleg stelpa. Hún býr með ömmu sinni, sem prjónar alla daga, en Sísi mamma hennar flúði til Svíþjóðar því hún var alltaf svo blönk.',
      'Inga horfir á sjónvarpsfréttir á hverju kvöldi og finnst spennandi að sjá hvað er að gerast í heiminum, ekki síst fréttir af Alþingi. Þegar kennarinn spyr bekkinn hennar hvað þau ætli sér að verða í framtíðinni segist Inga ætla að verða alþingismaður og helst ráðherra. Bekkjarsystkin hennar springa úr hlátri, því hver vill gera svoleiðis? Er ekki skemmtilegra að vera forseti Íslands, atvinnumaður í fótbolta eða áhrifavaldur?',
      'En Inga heldur sínu striki og með stuðningi ömmu gömlu gerir hún það. Heimsókn þeirra í Alþingishúsið verður eftirminnileg. Nei, Inga slynga er engin venjuleg stelpa!',
      'Líflegar og bráðsmellnar teikningar eftir Hrannar Atla Hauksson.',
    ],
    textNotes: ['„Stórskemmtileg bók fyrir yngstu lesendurna …“ kom tvisvar fyrir – birt einu sinni.', '„sinu striki“ leiðrétt í „sínu striki“.'],
  },
  {
    title: 'Fremst í fokki',
    author: 'Helgi Jónsson',
    cover: 'fremst-i-fokki',
    audience: [],
    description: [
      'Sól Hlíf unga og bláhærða gengur að eiga hinn áttræða prófessor, Dufþak Dolla, öllum til furðu, en hann ætlar henni stórt hlutverk í lífinu. Hún skal á Bessastaði, þrátt fyrir kókbotnagleraugu og hring í nefinu.',
      'Á meðan er Halli ekki dyravörður á yfirsnúningi að selja klæðalitlar kvenmannsbrækur út um allan bæ. Svo vel gengur að hann þarf aðstoð áhrifavaldsins Snjóku Skuldar til að fara í innkaupaferð til Víetnam. Á sama tíma bíður kærastan Pálína Prósenta kasólétt heima og fæðir síðan tvíbura fyrir ítölsku vinina Stefano, kaþólska prestinn, og Gattopardo, söngvarans mikla.',
      'Salvör Sónata situr á Hólmsheiði eftir að hafa verið dæmd fyrir peningaþvætti og líkar illa. Hún fylgist spennt með kosningabaráttunni til forseta Íslands, mest gegnum sjónvarpið, enda fer baráttan fram þar og gengur á ýmsu hjá Sól Hlíf frambjóðanda, sérstaklega þegar hún tekur óvart svefntöflu rétt fyrir útsendingu.',
      'Hér með lýkur þessum bókaflokki. Lokabók í seríu. Fyrri bækur eru: Bónorðin tíu, Innsti kroppur í búri og Fimm ára brandarinn.',
    ],
    textNotes: [
      'Skjalið innihélt HTML-leifar („</em>“) og tvítekna upptalningu fyrri bóka – sameinað í eina línu.',
      '„kosningabarátunni“ leiðrétt í „kosningabaráttunni“.',
      '„söngvaranna mikla“ leiðrétt í „söngvarans mikla“.',
      '„Halli ekki dyravörður“ – á að standa „Halli Ekki“ (gælunafn) eða vantar orð? Óbreytt.',
    ],
  },
  {
    title: 'Dóri stóri',
    author: 'Helgi Jónsson',
    illustrator: 'Hrannar Atli Hauksson',
    cover: 'dori-stori',
    audience: ['ungir'],
    series: 'barnabokaflokkur',
    description: [
      'Nýr myndskreyttur barnabókaflokkur um krakka sem fá eitthvað á heilann!',
      'Dóri er lítill og frekar ræfilslegur. Það finnst honum sjálfum. Þegar hann sér frænda sinn í fermingarveislu breytist heimurinn. Svavar frændi er vaxtarræktartröll, með stóra og óhugnanlega vöðva. Dóri er heillaður. Upp frá þessum degi ætlar hann sér að verða eins og Svavar frændi.',
      'Líflegar og bráðsmellnar teikningar eftir Hrannar Atla Hauksson. Stórskemmtileg bók fyrir yngstu lesendurna eftir Helga Jónsson. Tilvalin bók fyrir unga lesendur.',
    ],
    textNotes: [],
  },
  {
    title: 'Sibba subb',
    author: 'Helgi Jónsson',
    illustrator: 'Hrannar Atli Hauksson',
    cover: 'sibba-subb',
    audience: ['ungir'],
    series: 'barnabokaflokkur',
    description: [
      'Nýr myndskreyttur barnabókaflokkur um krakka sem fá eitthvað á heilann!',
      'Sibba er venjuleg stelpa, vill helst leika sér úti í sandkassa eða drullupolli. Hún er nefnilega mikil subba, en það finnst mömmu hennar ekki gott. „Ég er Sibba subb!“ segir stelpan stolt.',
      'Líflegar og bráðsmellnar teikningar eftir Hrannar Atla Hauksson. Stórskemmtileg bók fyrir yngstu lesendurna eftir Helga Jónsson. Tilvalin bók fyrir unga lesendur.',
    ],
    textNotes: [],
  },
  {
    title: 'Brostu',
    author: 'Raina Telgemeier',
    translator: 'Helgi Jónsson',
    cover: 'brostu',
    audience: ['ungir'],
    translated: true,
    description: [
      'Þegar Raina var stelpa braut hún í sér tennur og þurfti spangir. Síðar skrifaði hún líflega barnabók um reynslu sína.',
      'Ragna vill bara vera venjuleg stelpa í sjötta bekk. En eftir eina skátaferðina skaðar hún á sér tvær framtennur. Við tekur tími sem einkennist af kvölum og heimsóknum til tannlæknis. Hún fær spangir. Fyrir utan allt þetta dynur yfir jarðskjálfti, strákarugl, og vinir sem eru ekki svo vinalegir. En Ragna bítur á jaxlinn og reynir að standa þetta af sér, því hún á sér bara einn draum og hann er að geta ... brosað.',
    ],
    textNotes: [],
  },
  {
    title: 'Undirheimar',
    author: 'Helgi Jónsson',
    cover: 'undirheimar',
    audience: [],
    description: [
      'Ester er 10 ára stelpa sem kemur ekki heim eitt kvöldið. Leit að henni stendur í sex daga. Þá birtist hún skyndilega og enginn trúir hvar hún hefur verið.',
      'Hvar var Ester? Enginn veit, hvorki foreldrar né bestu vinkonur, Þórunn og Lára. En Ester veit það vel. Hún var hjá nýja vini sínum, drengnum sem býr í kirkjugarðinum við tjörnina, aleinn, neðanjarðar, undir grænni torfu. Hann hefur verið í undirheimum í 120 ár – síðan stóra húsið við Tjarnargötu brann til grunna – en getur ekki dáið alveg. Getur Ester hjálpað honum við að deyja alveg?',
    ],
    about: ['Helgi Jónsson hefur þýtt Kidda klaufa bækurnar undanfarin ár.'],
    aboutHeading: 'Um höfundinn',
    textNotes: ['Bandstrik lagfærð í þankastrik („– síðan … grunna – en“).', 'Myndskreytir kápu ekki tilgreindur.'],
  },
  {
    title: 'M-samtöl',
    subtitle: 'Úrval',
    author: 'Matthías Johannessen',
    cover: 'm-samtol',
    audience: [],
    description: [
      'Matthías Johannessen, ritstjóri Morgunblaðsins í áratugi og skáld, lést í mars 2024. Í þessari bók birtist úrval 30 samtala sem Matthías skrifaði, flest á árunum frá 1960-70. Tvö hafa aldrei birst áður á bók, Stefán frá Möðrudal og Guðrún frá Lundi. Einstakt úrval, einstök bók.',
      'Hann skrifaði mörg samtöl við valinkunna einstaklinga í Morgunblaðið á löngum ferli. Margt af því var venjulegt fólk. Aldraðir sjómenn. Hundrað ára konur í sveit. Hestamaður eða bóndi. Miðill eða kokkur. Málari eða flugstjóri. Aðrir voru þjóðþekktir. Steinn Steinarr. Halldór Laxness. Páll Ísólfsson. Kjarval. Sama hvort var – Matthías sýndi öllum virðingu og hver og einn fékk að njóta sín á sinn hátt.',
    ],
    textNotes: ['Kápuljósmynd: ljósmyndari ekki tilgreindur.'],
  },
  {
    title: 'Dauðinn',
    author: 'Björn Þorláksson',
    cover: 'daudinn',
    audience: [],
    description: [
      'Dauðinn fjallar um fólk sem tekst á við feigðina í ýmsum myndum. Höfundur nýtir áratuga reynslu af blaðamennsku til að fjalla efnislega um dauðann. Hann ræðir við dauðavona fólk og þá sem hafa misst ástvini og fléttar saman við rannsóknir og hugleiðingar.',
    ],
    textNotes: ['Kápumálverk: listamaður ekki tilgreindur.'],
  },
  {
    title: 'Utanveltumaður',
    subtitle: 'Saga Frímanns B. Arngrímssonar',
    author: 'Valdimar Gunnarsson',
    cover: 'utanveltumadur',
    audience: [],
    description: [
      'Hér er í fyrsta sinn gerð grein fyrir allri ævi og störfum þessa sérkennilega manns, sem vildi rafvæða Ísland, langt á undan öllum öðrum.',
      'Frímann lauk háskólanámi í Kanada og starfaði á vegum Kanadastjórnar. Síðar vann hann á tilraunastofum í Bandaríkjunum og í Bretlandi. Eftir skamma dvöl þar fór hann til Frakklands þar sem bjó við kröpp kjör í 17 ár. Heim kominn til Íslands barðist hann hatrammlega fyrir hugsjón sinni að rafvæða Ísland en allir ráðamenn snerust gegn honum og lítilsvirtu tillögur hans.',
    ],
    about: ['Valdimar Gunnarsson starfaði við kennslu við Menntaskólann á Akureyri í 40 ár.'],
    aboutHeading: 'Um höfundinn',
    textNotes: ['„þar sem bjó við kröpp kjör“ – vantar „hann“? Óbreytt.', 'Kápa er í lægstu upplausn (772 px breið).'],
  },
  {
    title: 'Ást á ströndinni',
    author: 'Gillian Harvey',
    translator: 'Helgi Jónsson',
    cover: 'ast-a-strondinni',
    audience: [],
    translated: true,
    description: ['Ensk fertug kona fer í sumarfrí til Frakklands til að elta uppi tuttugu ára gamla ást.'],
    textNotes: ['Lýsing er aðeins ein setning – Helgi gæti viljað bæta við.'],
  },
  {
    title: 'Blóðsnjór',
    author: 'Helgi Jónsson',
    cover: 'blodsnjor',
    audience: [],
    description: [
      'Gamall maður stingur af frá Hrafnistu. Hvert leið hans liggur veit enginn. Leiðarvísirinn er gömul bróðurminning sem engum er annt um nema honum. Það er verk sem þarf að klára áður en hann yfirgefur þetta jarðlíf, því sumar bernskuminningar hverfa aldrei. Blóðsnjór er saga um ást sem nær út fyrir gröf og dauða.',
    ],
    textNotes: [],
  },
  {
    title: 'Harmaborgin',
    author: 'Helgi Jónsson',
    cover: 'harmaborgin',
    audience: [],
    description: [],
    quote: {
      text: 'Efni þessara ljóða, sem er fremur dulúðlegt, á sér stað á friðsælum reit, kirkjugarði, sem getur tekið á sig hrollvekjandi myndir þegar svo ber undir. Flest eru ljóðin fram sett af nokkurri mildi, með undantekningum, og stemningarnar ná að snerta huga og hjarta lesandans.',
      cite: 'Gísli Rúnar Jónsson',
    },
    textNotes: ['Textinn er umsögn Gísla Rúnars Jónssonar – birt sem tilvitnun. Staðfesta leyfi til að birta.'],
  },
];

// Cover images (originals in /originals/kapur, read-only).
export const coverImages = {
  utanveltumadur: [772, 1148],
  undirheimar: [1200, 1772],
  'sibba-subb': [1200, 1835],
  'm-samtol': [1200, 1780],
  'inga-slynga': [1050, 1550],
  harmaborgin: [928, 1362],
  'fremst-i-fokki': [928, 1456],
  'freddi-fretari': [1200, 1755],
  'dori-stori': [1200, 1821],
  daudinn: [1058, 1390],
  brostu: [1200, 1726],
  blodsnjor: [820, 1250],
  'ast-a-strondinni': [1200, 1861],
};

const map = { á: 'a', ð: 'd', é: 'e', í: 'i', ó: 'o', ú: 'u', ý: 'y', þ: 'th', æ: 'ae', ö: 'o' };
export const slugify = (s) =>
  s.toLowerCase().replace(/[áðéíóúýþæö]/g, (c) => map[c]).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Provisional display order: Word-document order, except that books still
// waiting for a cover are shown last so the collection doesn't open on blanks.
// Replace with newest-first by `year` once publication years are confirmed.
books.sort((a, b) => Number(!a.cover) - Number(!b.cover)); // stable sort keeps doc order within each group
books.forEach((b, i) => {
  b.slug = slugify(b.title);
  b.order = i + 1;
  b.year = b.year ?? null;
});
