# Butler Fish — Bugs & Feedback (Live-Tracker)

**Was offen ist: Bugs, abgestimmte Bauten, Diskussionspunkte, Betrieb.** Erledigtes wandert ins `CHANGELOG.md`. Größere Features & Vision → `ROADMAP.md`.

Stand: 17. Juli 2026. Legende: 🐛 offener Bug · 🔧 offener Bau (abgestimmt) · 💬 Diskussion/Entscheidung · ⚙️ Betrieb.

> **Prozess-Regel (JC):** Bei **Diskussions-/Entscheidungspunkten** legt Claude Optionen vor und **wartet auf JC's Entscheidung** — keine Alleingänge, außer JC sagt ausdrücklich „bau es".

---

## ⚙️ BETRIEB — offen

*(Keine offen.)*

---

## 🐛 OFFENE BUGS

### Laden / Theme
- **💬 Obere Leiste wird später dunkel als der Rest — AN JCs VIDEO VERMESSEN (18. Juli, `v 2026-07-17.5`).**
  JC nach dem `theme-color`-Fix: *„immer noch nicht ganz."* **Er hat recht, und der Fix war trotzdem
  richtig — er hat nur einen anderen Fehler behoben.** Frame für Frame gemessen (60 fps):
  ```
  ~5,30s   hide gesetzt → Blende startet
   5,40 → 5,88s   Inhalt wird dunkel      (480 ms = die .5s-Blende)
   5,88s          Loader ist opacity:0, unsichtbar — ABER NOCH IM DOM
   5,90 → 6,00s   obere Zone kippt        (100 ms, ~500 ms SPÄTER)
  ```
  **`remove()` läuft 700 ms nach `hide`, also bei ~6,00s — exakt dann kippt die obere Zone.**
  Sie hängt also nicht an der Blende, sondern am `remove()`: iOS färbt den Statusleisten-Bereich neu,
  sobald das Element aus dem DOM fliegt. Die Blende darüber sieht man dort nicht.
  **Warum das vorher nicht auffindbar war:** `#0D5164` ist **beides** — die alte `theme-color` *und* die
  Loader-Farbe. Am Pixel nicht unterscheidbar.
  **Die Wurzel bleibt: Loader `#0D5164` vs. App `#03354B`.** Solange die zwei verschieden sind, gibt es
  den Wechsel — egal wann iOS nachrechnet. Farbentscheidung, deshalb nicht eigenmächtig gebaut:
  - **(a)** Loader bekommt `--surface` (`#03354B`) → eine Farbe von der ersten bis zur letzten
    Millisekunde, der Wechsel ist **strukturell** weg. Der Splash verliert seinen helleren Ton.
  - **(b)** So lassen → der Loader bleibt ein eigener Moment, der Wechsel bleibt sichtbar.
  *(Am `remove()`-Timing zu drehen wäre Symptomkur: Der Wechsel bliebe, er käme nur früher.)*
  **Nebenbei belegt:** Die Versionsnummer im Ladescreen hat beim ersten Einsatz getan, wofür sie da ist —
  `v 2026-07-17.5` ist im Video lesbar, JC hatte also den richtigen Stand.

### Karte
- **🐛 Hellblauer Kreis an 2 Fängen, nicht klickbar (JC, 18. Juli: „in butter bei die mutti, i do have
  2 catches that show a light blue circle, that i cant click"). BRAUCHT EINEN SCREENSHOT.**
  **Auf der KARTE ist es nicht** — live gegengeprüft (`v 2026-07-18.5`, Gruppe „Butter bei die Mutti!"):
  drei Marker, **alle** `interactive:true`, **alle** mit Click-Handler, `pointer-events:auto`, Farbe
  `rgb(13,81,100)` = `--map-ink`. Nichts Hellblaues, nichts Totes.
  **Verdächtige, in dieser Reihenfolge:**
  1. **Die Fangliste**, nicht die Karte — JC schreibt nicht, wo. Zwei der sieben Fänge dort haben kein
     Foto; deren Platzhalter (`--teal-tint`) könnte gemeint sein.
  2. Der **Standort-Punkt** (`_meMk`, `#4C8DF6`, `interactive:false`) — der ist hellblau UND absichtlich
     nicht klickbar. Aber es gibt nur **einen** pro Karte, JC sagt „2".
  3. Unbestätigte Fänge? (`hideUnconfirmed`/`unconfirmedByHint` — eigene Optik, zu prüfen.)
  **Nicht raten: JC nach einem Screenshot fragen.** Ich habe heute zweimal einen Befund auf eine falsche
  Annahme gestützt (Rundungs-Illusion, `touch-action`); ein drittes Mal lohnt nicht.

- **🐛? Schrift der oberen Elemente zu groß beim ERSTEN Laden nach einem Deploy (JC, 18. Juli:
  „nach einem neuen deployment, das erste mal dass die app wieder lädt … die font size der oberen
  elemente größer, auf jeden fall von übersicht/fangliste"). UNGEPRÜFT — Verdacht ist stark.**
  **Verdacht: FOUT (Flash of Unstyled Text).** Die Tabs „ÜBERSICHT/FANGLISTE" und die Zahlen laufen in
  **Barlow Condensed** mit `font-display:swap`. Beim allerersten Laden nach einem Deploy ist der Cache
  leer → der Fallback (system-ui) wird gezeigt, bis die Schrift da ist. **Barlow Condensed ist SCHMAL** —
  jeder Ersatz ist bei gleicher `font-size` breiter und wirkt größer. Genau JCs Beobachtung: nur beim
  ersten Mal, nur die oberen Elemente (die Barlow nutzen).
  - **Zu prüfen:** Ob es die Schrift ist (Netzwerk drosseln, Cache leeren, Ladefolge ansehen).
  - **Mögliche Wege, falls bestätigt:** `size-adjust`/`ascent-override` im `@font-face`-Fallback (macht
    den Ersatz metrisch passend, ohne zu blockieren) · `<link rel="preload">` für die Barlow-Dateien,
    die *oben* gebraucht werden · `font-display:optional` (kein Umbruch, aber die Schrift fehlt beim
    ersten Mal ganz).
  - *(Die Schriften liegen seit dem DSGVO-Umbau selbst-gehostet — der Weg ist also kurz und in unserer Hand.)*
- **🔧 Karte: Punkt → Foto, sobald wenige Fänge im Bild sind — ENTSCHIEDEN (JC, 18. Juli).**
  JCs Idee: *„dass es ein foto wird sobald man reingezoomt ist."* Dazu mein Einwand: Zoom misst die
  Kartenweite, nicht das Gedränge — bei 20 Fängen an einem See hilft er nicht.
  **JC nach dem Mockup: „dein vorschlag ist besser."** → Also **nicht** an der Zoomstufe festmachen,
  sondern an der **Anzahl im Sichtfeld** (`mockup-karte-fotos.html`, Umschalter „Anzahl im Bild").
  - Der Gedanke dahinter bleibt JCs: **Der Zoom ist die Absichtserklärung.** Wer rauszoomt, will das
    Muster (Streubild); wer reinzoomt, will *diesen* Fang. Die Karte muss nicht Übersicht ODER Werkzeug
    sein — der Nutzer sagt selbst, was er gerade braucht.
  - **Offen: die Schwelle.** Im Mockup geraten (≤ 6 im Bild, ab Zoom 9). JC probiert am Gerät, wo es
    sich richtig anfühlt — dann ist es eine Zahl.
  - **Offen: der Übergang.** Schaltet hart um. Wachsen wäre schöner, lohnt erst wenn die Schwelle sitzt.
  - **Offen: Nachladen.** Nur Fotos im Sichtfeld holen, sonst zieht die Karte bei 100 Fängen das Album.
  - **NICHT gelöst, und keine der beiden Regeln löst es:** Zwei Fänge auf **derselben** Koordinate
    (in JCs Daten real: Forelle + Flusskrebs, 51.127/7.381) liegen auch bei maximalem Zoom übereinander.
    Dagegen hilft nur **Auffächern oder Bündeln** — eigener Bau, eigene Entscheidung.
  - **Hängt zusammen mit** „Zoomen auf der Karte als Filter" (unten) — gleiche Karte, gleicher Zoom,
    zusammen denken statt zweimal anfassen.
  - **Trefferfläche:** Der Punkt ist heute `radius:7` = **14 px**; Apple/Material empfehlen 44 px. Wer
    danebentippt, schließt „geht nicht" und probiert es nie wieder. Das erklärt JCs *„ich habe entdeckt,
    dass man…"* — mit den Fotos (44 px) löst es sich reingezoomt von selbst, rausgezoomt bleibt es offen.

- **💬 (VERWORFEN, Beleg bleibt) Ring-Variante — `mockup-karte-cluster-ring.html`.**
  JC: *„a cluster with lets say number 5 and if you press it the background darkes a little and the 5
  others appear as a ring around the button."* Ersetzt durch das Spot-Sheet oben; Begründung dort.
  - **Das ist der NORMALFALL, nicht der Randfall.** Schon jetzt liegen **2 von JCs 4** Fängen exakt
    aufeinander — Angler haben eine Hausstrecke, der Pin landet am selben See. Je länger die Nutzung,
    desto dicker der Stapel. Ich hatte das erst als Härtefall abgetan; das war falsch.
  - **Warum der Ring den Münzstapel schlägt** (JCs erste Idee, „coins on their edges"): Ein Stapel
    behauptet immer eine **Rangfolge** — „wer liegt oben?" wird zur Designfrage. Ein Ring hat keine
    erste Position; die Frage verschwindet, statt beantwortet zu werden.
  - **Warum der Ring *spiderfy* schlägt** (der Leaflet-Standard): Das Abdunkeln macht daraus einen
    **Moment** („jetzt geht es um diesen Spot") statt eines Karten-Tricks mit Spinnenbeinen, der immer
    aussieht, als hätte die Karte einen Fehler. Und die Zahl skaliert: bei zwanzig steht „20".
  - **ENTSCHIEDEN (JC, 18. Juli):**
    - **Ring am Kartenrand → die Karte zentriert vorher** auf den Cluster (kein Halbkreis).
      **Haken, der beim Bau zu lösen ist:** Zentrieren **bewegt die Karte** — und der Ring schließt heute
      bei jeder Kartenbewegung (`map.on('movestart zoomstart', schliesse)`). Er würde sich also selbst
      zumachen, kaum dass er auf ist. Eigene Bewegung und Nutzerbewegung müssen getrennt werden
      (Flag während des eigenen `flyTo`/`panTo`, oder erst zentrieren, dann öffnen). Dieselbe Falle wie
      die zwei Schreiber auf `share-btn` — zwei Absender auf einer Leitung.
    - **Cluster zeigt NUR DIE ZAHL** (kein Foto + Plakette).
  - **Offen:** Wo kippt der Ring? Rechnung: 44-px-Pins + 10 px Luft → Umfang voll nach ~**10**; danach
    braucht es „+X weitere". JC probiert die Zahl am Regler aus.
  - **Gebaute Details, die zur Entscheidung gehören:** Eine **gestrichelte Mitte** markiert den echten
    Ort — ohne sie behauptet der Ring fünf Orte, wo einer ist. Schließen per Tap daneben / Escape /
    Kartenbewegung.
  - **Hausregel, die beim Bau gilt:** Der Ring ist eine **EBENE, kein Screen** — wie Vollbildkarte,
    Lightbox, Modal und Edit-Modus. *Eine Geste macht genau eine Ebene auf.* Wischen-zurück muss den
    **Ring** schließen, nicht den Screen. Genau das ging am 17. Juli beim Vollbild schief, weil der
    Wächter nur im `popstate`-Handler sass statt in `go()`.

- **✅ Platzhalter ohne Foto: FISCH — entschieden (JC, 18. Juli: „fisch 100%").** Gilt überall (Karte,
  Listen, Rekord-Karten). Damit ist auch der Altpunkt *„Leere Catch-Bilder: warum nicht der Puffer?"*
  beantwortet und gelöscht.
  Begründung aus dem Mockup, falls die Frage wiederkommt: Der Puffer ist detailreich (Augen, Stacheln,
  Schattierung, 360×315, nicht quadratisch) — bei 44 px bleibt ein oranger Fleck. **Dasselbe Problem wie
  Renés Ganzkörper-Avatar:** zu viel Bild für zu wenig Fläche. Der Fisch-Umriss ist für klein gebaut
  (2-px-Strich).
  JCs Frage: *„warum nicht unser platzhalterfischsymbol?"* → Richtig, ein Punkt wäre eine **dritte**
  Antwort auf „kein Foto" neben Foto und Platzhalter. Gleiche Bedeutung, andere Form.
  **Diese Entscheidung gilt überall** (Karte, Listen-Thumbnails, Rekord-Karten) — sonst hat die App drei
  Auffassungen davon, was „kein Foto" heißt. Löst zugleich den Altpunkt *„Leere Catch-Bilder: warum nicht
  der Puffer?"* (unten).
  **Befund aus dem Mockup:** Der Puffer ist detailreich (Augen, Stacheln, Schattierung, 360×315, nicht
  quadratisch). Bei 44 px bleibt ein oranger Fleck — **dasselbe Problem wie Renés Ganzkörper-Avatar**:
  zu viel Bild für zu wenig Fläche. Der Fisch-Umriss ist für klein gebaut (2-px-Strich). Vergleich in
  echter Größe und 4× in `mockup-karte-fotos.html`.

### Fotos umsortieren
- **🐛 Fotos ziehen geht immer noch nicht (JC, 18. Juli, nach `v 2026-07-18.1`). MORGEN WEITER.**
  **Was BELEGT ist** (am Live-Stand gemessen, nicht geraten):
  - Die Zelle bekommt `.sortable` ✓, `touch-action` ist jetzt `none` ✓ (war `auto`), andere Kacheln
    dimmen ✓ (`1` → `0.4`), Vereins-/Gruppengeste unversehrt ✓.
  - **Das `touch-action`-Problem war echt — aber es war nicht die (einzige) Ursache.** Es ist behoben,
    und es geht trotzdem nicht. Ich habe einen echten Fund für die Lösung gehalten. Derselbe Fehler wie
    beim Topbar-Bug: erster Treffer ≠ Ursache.
  - **Nicht verwertbar als Beleg:** Mein Test meldete „`drag-active` wirkt nicht" — Fehlalarm. Die Zelle
    war 0×0 (`#photo-grid` liegt im Formular-Screen, der nicht sichtbar ist); ein nicht gerendertes
    Element hat kein `transform`. Auch inline erzwungen kam `none`. Die Regel ist in Ordnung.
  **Was ich morgen zuerst prüfen würde** (Reihenfolge = Verdachtsstärke):
  1. **Trifft der Finger überhaupt die Zelle?** In jeder `.photo-cell` liegen drei Knöpfe (`.rm`,
     `.setcover`, `.exifbtn`) plus das `<img>`. `pointerdown` blubbert zwar, aber ein Knopf könnte die
     Geste abfangen oder `preventDefault`en.
  2. **Der 8-px-Abbruch:** `if(!active && Math.abs(e.clientY-startY)>8) → abbrechen`. Ein Finger wackelt
     auf einem 100-px-Foto leichter als auf einer breiten Vereinskachel — die Geste stirbt vielleicht,
     bevor die 320 ms um sind.
  3. **`setPointerCapture` kommt erst nach 320 ms.** Bis dahin gehen `pointermove`-Events an das Element
     unter dem Finger — im Raster ist das schnell eine *andere* Zelle als die gedrückte.
  4. **Läuft `makeSortable` für das Raster überhaupt?** In `renderFormPhotos` verdrahtet — am Gerät nie
     bestätigt, dass die Handler auf den echten Zellen hängen.
  **Was ich von JC brauche:** Was passiert beim Drücken-und-Ziehen — scrollt die Seite, hebt die Kachel
  ab und springt zurück, oder passiert gar nichts? Das trennt (1)/(2) von (3)/(4) sofort.
  *(Am Schreibtisch nicht nachstellbar: Es ist eine Touch-Geste. Chrome kann Pointer-Events simulieren —
  das ist morgen der erste Versuch, statt wieder am Code zu raten.)*

### Angler-Auswahl
- **🐛 Beim Loggen fehlt René in der Angler-Liste, obwohl gemeinsame Gruppe (JC, 18. Juli: „i cant, as
  his name doesnt show up in the list, even we share groups together"). BEFUND BESTÄTIGT.**
  ```js
  loadCtxMembers()     →  .eq('context_id', state.club.id)   // EIN Verein: der gerade offene
  buildAnglerOptions() →  nutzt state.ctxMembers
  ```
  Die Liste kommt aus **`state.club`** — dem einen offenen Verein. Eintragen kann man aber in
  **`state.formTargets`**, also mehrere. Ist das Ziel eine Gruppe, die nicht `state.club` ist, fehlen
  deren Mitglieder.
  **Das ist derselbe Fehler, den wir am 17. Juli eine Ebene daneben schon repariert haben** — der
  Kommentar dazu steht im Code: *„Die ZIELE des Formulars, nicht der gerade offene Verein:
  `ctxAdminCfg()` las `state.club`, also nur einen."* Daraus wurde `formAdminCfg()` = `ctxCfgFor(state.formTargets)`.
  Bei der Angler-Liste blieb es stehen.
  - **Vorschlag:** `loadCtxMembers()` über **alle** `state.formTargets` laden (ein `.in('context_id', ids)`
    statt `.eq`), Mitglieder zusammenführen, „Ich" zuerst. Dann taucht René auf, sobald seine Gruppe
    unter den Zielen ist — und nur dann.
  - **Hängt zusammen mit** „Angler-Filter aus Mitgliederliste" (unten): gleiche Quelle, gleicher Umbau.
  - **JCs zweite Frage — „the modal shown is the wrong choice, no?" — ist noch offen:** Welches Modal war
    zu sehen? Vor dem Bau klären, ob er die Angler-Auswahl meint oder „Eingetragen in".

### Code-Hygiene
- **🐛 `function toast(msg)` ist ZWEIMAL deklariert** (live gegengeprüft: Zeilen 5282 und 7227 im
  ausgelieferten Stand — **nicht** durch unsere Änderungen entstanden). Die zweite überschreibt die
  erste stillschweigend; welche gilt, entscheidet allein die Reihenfolge.
  **`node --check` meldet das NICHT** — doppelte Funktionsdeklarationen sind legales JS. Genau diese
  Blindheit hat am 17. Juli eine Splice-Panne durchgelassen, die `renderList`/`renderStats` verdoppelt hat.
  Zu tun: beide vergleichen, die überflüssige löschen. Klein, aber es ist eine Falle für den Nächsten.
- **🔧 `state.editId` und seine Zweige in `saveCatch` sind tot** (seit `openEdit` weg ist, 17. Juli).
  Es wird nirgends mehr gesetzt, also nehmen alle `if(state.editId)`-Zweige nie mehr den Ja-Weg —
  ebenso `form-del-wrap`/`form-del-btn`, die nur im Formular-Edit sichtbar waren.
  **Bewusst nicht nebenbei mitgenommen:** Die Zweige liegen mitten im **Speicherpfad**. Das braucht einen
  eigenen Durchgang mit Ruhe, nicht das Ende einer langen Sitzung.

### Eingabe
- **🐛? „when typing, the display of what is entered disappears" (JC, 17. Juli). UNGEKLÄRT — braucht das Video.**
  *(Stand ebenfalls in keinem Tracker, nur im Commit-Text von `cc92d087`.)*
  Bisher nur ausgeschlossen: `#ta-search` setzt `color:var(--text)` — die naheliegende Farbfalle
  (Text in Hintergrundfarbe) ist es also **nicht**. Unklar bleibt, **welches** Feld gemeint ist
  (Suchfeld im Auswahl-Element? Inline-Edit? Fang-Formular?) und ob „verschwindet" heißt: Text weg,
  Feld weg, oder die Vorschau/Anzeige darüber.

### Verhalten — Rollen
- **🔬 Ownerschaft übergeben am Gerät durchspielen (offen).** Der Rollen-Umbau (owner/admin/member) ist
  gebaut, live und in der DB verifiziert — Details im `CHANGELOG.md` (Commit `6abb9d7`). Geprüft wurde die
  **Logik**, nicht der **Fluss**: Die Übergabe hat noch niemand am Gerät durchgeklickt.

### 🔬 Am Gerät noch unverifiziert (live seit `878d17d`, 17. Juli — Details im `CHANGELOG.md`)
- **Sternchen-Legende kontextsensitiv** — braucht zum Prüfen einen Verein mit einem Pflichtfeld.
- **Erfolgs-Screen nach Einladung nennt Verein/Gruppe beim Namen** — braucht eine echte Einladung.
*(Stapel-Fix und lange Fischnamen sind an der ausgelieferten Fassung nachgemessen — die sind belegt.)*

### Filter
- **🐛? „Meine Fänge"-Filter: Gruppenfilter fehlt (JC, 17. Juli — „filter my catches is missing a group
  filter, ist it?").**
  **Nachgesehen, und der Befund ist nicht eindeutig:** Es *gibt* ihn. `#flt-ctx-field` mit dem Label
  **„Fänge aus"** (`showCatchesFrom`), und er wird genau dann eingeblendet, wenn
  `state.filterTarget==='stats'` — also auf „Meine Fänge". Der Filter-Knopf dort ruft `openFilter('stats')`,
  die Bedingung müsste greifen.
  **Damit sind es zwei mögliche Fehler, und ich weiß nicht welcher:**
  (a) Er erscheint tatsächlich nicht → echter Bug, dann am Gerät nachsehen, ob `filterTarget` stimmt.
  (b) Er erscheint, aber JC hat ihn unter „Fänge aus" nicht als Gruppenfilter erkannt → Benennung.
  *Für (b) spricht: Der i18n-Schlüssel `ctxFilter` heißt „Verein / Gruppe" — das Wort existiert also,
  wird an dieser Stelle aber nicht benutzt.*
  **Vor dem Fix: JC fragen, ob das Feld „Fänge aus" da ist.**

---

## 🔧 OFFENE BAUTEN (abgestimmt — kein Diskussionsbedarf)

- **🔧 Rekord-Kacheln umsortierbar** — „Deine Rekorde"-Shelf (Stats, `rec-strip`) per **horizontalem**
  Drag&Drop neu ordnen (Reihenfolge lokal). *(JC, 14. Juli.)*

- **🔧 Einstellungen „+ add" → „−"** wenn geöffnet/aktiv (welche Stelle genau prüfen — Akkordeon/Add-Buttons). Klein.

- **🔧 Vereins-/Gruppenlogo in die WhatsApp-Einladung (JC, 17. Juli)** — die Einladungs-Nachricht könnte
  das Logo des Vereins/der Gruppe tragen. *(Prüfen: WhatsApp zieht Vorschaubilder aus OG-Tags einer URL —
  ein Bild lässt sich nicht in den Text legen. Braucht also eine Einladungs-Seite mit `og:image`,
  nicht nur einen Text. Hängt damit an der Deep-Link-Arbeit, Roadmap #17.)*

- **🔧 Angler-Filter aus Mitgliederliste** *(JC: „to change it")* — Filter mit allen Mitgliedern
  vorbefüllen („Ich" zuerst), nicht nur mit Anglern, die schon gefangen haben.

- **🔧 Einstellungen Verein/Gruppe-Selektor kontextsensitiv** — wie der Homescreen-„+" soll der
  Umschalter **nur eines** zeigen (entweder Verein **oder** Gruppe, je nach Kontext), nicht beides. *(JC, 13. Juli.)*

- **🔧 Ladezeiten/gefühlte Langsamkeit** *(JC: „follow the rec")* — Maskottchen-Loader zentriert beim
  Initial-Load/Datenabruf **und** echter Perf-Pass: Login-Queries parallelisieren, Fonts `display=swap`
  (später self-host), Foto-Thumbnails (später). Loader kaschiert, Perf-Pass behebt.

- **🔧 Gewässername aus dem Pin *vorschlagen* (JC, 16. Juli — Ansatz steht, Details offen).**
  **Entschieden (JC): vorschlagen, nicht setzen.** Beim Setzen eines Pins auf ein **leeres** Namensfeld
  schlägt die App einen Namen vor, den JC antippen oder ignorieren kann. **Nie überschreiben, nie
  automatisch** — sonst kostet ein verschobener Pin den handgetippten Namen („Hausstrecke").
  Recherchiert (16. Juli):
  - **Nominatim-Richtlinie:** max. **1 Anfrage/Sekunde**, **eigener User-Agent** Pflicht (Standard-Header
    der HTTP-Bibliotheken reichen ausdrücklich nicht), **systematische Abfragen verboten**. Einzelne
    Pin-Setzungen sind unkritisch; **einmal über alle Altfänge laufen wäre genau der verbotene Fall.**
  - **Der harte Teil ist inhaltlich:** Reverse Geocoding liefert eine **Adresse**, keinen Gewässernamen.
    Ein Pin auf dem Kleinen Brombachsee ergibt „Absberg, Weißenburg-Gunzenhausen, Bayern". Für den See
    bräuchte es eine gezielte Suche nach `natural=water` in der Umgebung — und ein Pin am Ufer trifft
    womöglich eine Wiese. Dazu: OSM-Namen sind oft nicht das, was Angler sagen.
  - Offen: Welcher Dienst? Vorschlag nur bei leerem Feld oder auch als „passt das noch?" nach dem
    Verschieben? Was bei mehreren Wasserflächen in Reichweite?

- **Batch B (Layout/Struktur):** 15 My-Catches-Button-Layout · 16 Teilen-Vorschau kombinieren.

---

## 💬 ZU DISKUTIEREN / ENTSCHEIDEN (Proposals kommen vor dem Bau)

### Löschen
- **💬 Löschen aus EINER Gruppe löscht den Fang ÜBERALL — ohne Warnung (JC, 17. Juli).**
  JC: *„wenn ich einen fang aus einer gruppe loesche, sollte es eine warnung geben, falls der fang noch
  in anderen gruppen geloggt ist."*
  **Nachgesehen, und es ist schärfer als die Meldung:** Es fehlt nicht nur die Warnung — es gibt gar
  keinen Weg, ihn *aus einer* Gruppe zu nehmen. Ein Fang ist **eine Zeile** mit `context_id` +
  `context_ids`; `deleteCatch()` macht `from('catches').delete().eq('id', id)`. Die Zeile ist weg, und
  damit der Fang aus **allen** Vereinen und Gruppen gleichzeitig. Der Dialog sagt dazu nur „Diesen Fang
  wirklich löschen?".
  **Der Fall ist nicht theoretisch:** In der DB liegen **2 von 17** Fängen in mehreren Kontexten, einer
  in **dreien**.
  **Die eigentliche Frage ist nicht der Warntext, sondern was „Löschen" hier heißen soll** — und davon
  hängt der Bau ab:
  - **(a) Nur warnen:** „Dieser Fang ist auch in *Butter bei die Mutti* und *ASV Steife Rute* eingetragen.
    Löschen entfernt ihn überall." Ehrlich, klein, ändert nichts an den Daten. Löst aber JCs eigentliches
    Problem nicht, wenn er ihn nur aus *einer* Gruppe nehmen wollte.
  - **(b) Zwei Aktionen trennen:** „Aus dieser Gruppe entfernen" (streicht die Gruppe aus `context_ids`,
    Fang bleibt) vs. „Fang löschen" (Zeile weg). Das ist vermutlich, was JC meint — und es ist die
    einzige Variante, die den Fang eines anderen Vereins nicht mit wegreißt.
  - **Zu klären, bevor irgendwas gebaut wird:** Wer darf was? Der Vereins-**Admin** möchte einen Fang
    vielleicht aus *seinem* Verein nehmen — er darf ihn aber nicht dem Angler aus dem Logbuch löschen.
    Heute kann er beides nicht unterscheiden, weil es nur einen Knopf gibt. Dazu: Was passiert mit der
    letzten Gruppe — wird der Fang dann Solo, oder ist das das Löschen? Und: Rekorde/Podium hängen an
    `context_ids`, müssen also nachgerechnet werden.


### Personal Best
- **💬 PB-Anzeige NEU diskutieren (JC, 14. Juli)** — JC will „how **and** where" ändern (nach
  Krone-neben-Art). Neue Mockups/Optionen nötig. *(Blockiert nichts mehr: Die manuelle PB-Kontrolle stand
  hier als „pausiert, bis die Anzeige entschieden ist" — sie ist längst gebaut und live.)*
- **💬 PB-Anzeige für DB/Verein-Fänge:** evtl. **„PB"-Text statt Krone** — oder **PB + Krone**?
- **💬 „PB erkannt. Bestätigen." — was ist besser bei neuen Usern, um Noise zu verhindern? (JC, 14. Juli.)**
  Der wunde Punkt: Bei einem neuen Nutzer ist **jeder Fang ein Rekord** — der erste Hecht ist der größte
  Hecht. Die Feier feuert dann bei jedem Log und entwertet sich in einer Woche. Optionen zu bauen
  (nicht entschieden): Feier erst ab dem n-ten Fang einer Art · erste Woche stiller · nur feiern, wenn
  ein *bestehender* Rekord geschlagen wird (nicht beim Aufstellen des ersten).

### Detail-Seite & Fang-Eingabe
- **💬 Lateinische Namen zu den Fängen (JC, 16. Juli — vertagt auf „morgen").**
  In Klammern hinter dem Artnamen im Hero. **Der Haken:** 8 der 9 Arten bilden sauber ab, **„Forelle"
  aber ist drei Arten** — Bachforelle (*Salmo trutta*), Seeforelle (*S. t. lacustris*) und Regenbogenforelle
  (*Oncorhynchus mykiss*, **andere Gattung**). Ein Name für „Forelle" wäre schlicht falsch.
  Dazu: **selbst eingetragene Arten bekommen gar keinen.** Hängt am kuratierten Artenkatalog (Roadmap).
- **💬 Karte aus dem Ortsnamen ziehen (JC, 16. Juli — vertagt).** Hat ein Foto keine Geodaten, JC trägt
  aber Gewässer/Ort ein — soll die Karte automatisch nachziehen? **Claudes Vorschlag: Karte zentrieren,
  Pin nie setzen** (ein gesetzter Pin behauptet Genauigkeit, die ein Ortsname nicht hat).
- **💬 Soll die Einstellungen-Option auf der Catch-Seite überhaupt bleiben? (JC, 16. Juli.)**
- **💬 (1) „Hero-Kategorie"** — unklar, Rückfrage offen: was/wo genau (Detail-Hero? Stats? Kategorie-Label
  auf dem Foto?).

### Filter & Auswahl-Elemente
- **💬 Ab wie vielen Einträgen braucht unser Auswahl-Element eine Suchleiste? (JC, 14. Juli)** — bei 2
  ergibt sie keinen Sinn. Und **„neu hinzufügen" ergibt nicht überall Sinn** (z. B. Kept/Released-Filter)
  → das Element muss kontextsensitiv werden. *(Ein Bau, drei Symptome: Suchleiste, „+ neu", das „—".)*
- **💬 Artenfilter als Mehrfachauswahl? Andere Filter auch? (JC, 14. Juli.)**
- **💬 Zoomen auf der Karte als Filter für die angezeigten Fänge? (JC, 14. Juli.)**
- **💬 Gruppen-Seiten neu denken (JC, 14. Juli)** — sollen ebenfalls die Rekord-Liste bekommen
  (horizontal scrollend) und umsortierbare Rekord-Kacheln.

### Einstellungen & Struktur
- **💬 Icons in den Einstellungen?** *(Rest einer größeren Frage, die sich mit dem Feld-Umbau selbst
  erledigt hat — dieser Teil ist nie entschieden worden.)*
- **💬 Mehrspaltiges Layout je Gruppe?** In den Log-Feldern (Vereins-Liste) evtl. **2 Spalten** pro Gruppe,
  um Platz zu sparen. *(JC mag die Kategorien inhaltlich — nur Platz/Layout.)*
- **💬 Tagline neu brainstormen:** „Catch · Log · Organize" → Optionen sammeln.
- **💬 (Rundown #4) „App nutzt nicht die volle Höhe":** mein Safe-Area-Fix war vermutlich **nicht** das
  Gemeinte — klären, was genau gemeint war.

---

## ⏳ VERTAGT (JC hat sie bewusst geparkt)

### Erfolgs-Karte: glüht cyan (JC, 16. Juli: „diskutieren wir nochmal")
**Wo:** `#success-ov` / `.success-card` — erscheint nach dem Speichern eines Fangs. Als `.big` beim
**Rekord-Moment** mit Konfetti und einer pulsierenden Animation namens **`lureflare`** — *Köderlicht*.

**Der Befund:** Genau dieses Köderlicht ist `rgba(95,205,225)` — **cyan**, hartcodiert, kein Token.
Rest aus der Zeit vor dem Rebrand. Überall sonst (Lockup, Splash, Topbar) ist die Laterne inzwischen warm
`#EB9E18`. Im auffälligsten Moment der App glüht der Anglerfisch also kalt. `.su-check`, `.su-badge` und
`.success-card.big .su-title` hängen zusätzlich an `--spark` (Aqua).

**Die eigentliche Frage:** Ist Aqua die **Farbe des Feierns** — dann ist es eine Entscheidung und gehört
als Token benannt. Oder ein Versehen — dann zieht die ganze Karte auf warm nach, sonst bleibt sie halb
aqua und die Farbe sieht nach Zufall aus.
**Optionen:** (a) alles warm · (b) nur das Maskottchen warm, Rest aqua · (c) bewusst kalt, aber als
Token. Mockup: `mockup-glow.html`, Abschnitt ①.

### Login: gleiche Szene wie der Splash? (JC, 16. Juli)
**Der Login zeigt dasselbe Lockup und damit dieselbe 3,3-s-Choreografie.** Kein Blocker: die Eingabefelder
sind sofort benutzbar, es animiert nur das Logo darüber. **Aber:** Wer auf dem Login steht, will rein —
nicht zusehen.
**Optionen:** (a) so lassen · (b) kurze Einblendung (~0,9 s) · (c) ganz ohne Animation.
Technisch trivial: eigene Klasse statt `.anim` am `#login-logo`.

### Splash-Dauer bei Wiederkehrern (JC, 16. Juli: „leg es als Punkt in den Backlog")
**Der Ladescreen steht bei jedem Start 4,6 s.** Bewusst so entschieden, und für einen Design-Award ist es
ein Auftritt. **Das Problem kommt später:** Wer zum dritten Mal am Wasser einen Fang eintippt, wartet
4,6 Sekunden — genau dann, wenn die App schnell sein müsste (Fisch liegt im Kescher).
**Üblicher Weg:** volle Szene beim **ersten Start am Tag**, danach Kurzfassung (~1,2 s). Merker via
`localStorage` + Datum. **Offen:** ob überhaupt, und welcher Auslöser.

---

## 🧯 ALTLASTEN (gefunden, nicht angefasst — kein Auftrag, aber sie beißen später)

- **`saveSoloPhotos` löscht bei jeder Fotobearbeitung alle Zeilen und legt sie neu an** (`delete` →
  `insert`). Funktioniert heute nur, weil die Zuschnitte per `path` hinübergerettet werden. Zwei Risiken:
  **(a)** das nächste Feld an der Fotozeile fällt wieder hinten runter; **(b)** **schlägt das `insert`
  fehl, sind alle Fotozeilen des Fangs weg** — die Storage-Objekte überleben, die Zeilen nicht.
  Seit 17. Juli meldet der Fall wenigstens `console.error` statt zu schweigen (vorher ging er nur ins
  Test-Log). **Der echte Fix ist ein `upsert` statt delete+insert** — eigener Bau, nicht nebenbei.
- **Mitgliederliste in den Vereinseinstellungen zeigt keine Profilbilder**, obwohl sie geladen werden.
- **Toter Code:** `manifest.webmanifest` (nicht verlinkt) · `.mascot-band`-CSS.
  *(Die verwaisten i18n-Keys `trendNote`, `sparkCap`, `trend3`, `trend7`, `wSourceFields` sind am
  17. Juli entfernt — sie existierten wirklich und hatten null Verwendungen.)*

> **⚠️ Prüf-Falle, an der ich am 17. Juli hereingefallen bin — bitte nicht wiederholen:**
> `I18N` wird **nicht** von einem einzigen Objektliteral gebildet. Das Literal enthält nur **160**
> Schlüssel; die restlichen ~390 tragen **37 `Object.assign(I18N.de, {…})`-Blöcke** darunter nach.
> Wer nur das Literal auswertet (Klammern zählen ab `const I18N = {`), bekommt für jeden nachgetragenen
> Schlüssel `undefined` — und damit **ein „ist längst weg", das schlicht falsch ist**. Genau so habe ich
> JC gemeldet, die fünf Keys oben seien schon aufgeräumt, und den korrekten Tracker-Eintrag gelöscht.
> **Richtig:** den ganzen Bereich von `const I18N = {` bis `function t(k)` auswerten.

---

## ⚙️ BETRIEB — erledigt (Referenz, nicht löschen: das ist Live-Konfiguration)
- ✅ **Allowlist (14, Stand 17. Juli — in der DB geprüft):** johannesclaudi@gmail.com (Admin) ·
  oktay.duzgun@gmail.com · schuerholz.rene@googlemail.com · Matthew.scott0991@gmail.com · m_baron1@gmx.de ·
  michael-baron86@gmx.de · mberger2209@gmx.de · cmjcody@gmail.com · felixformhals@web.de ·
  jurjen.terpstra@gmail.com · leandro.gianfrancesco@gmx.de · svenflosbach@yahoo.de · ralphkempen@gmail.com ·
  **englart@hotmail.com** *(17. Juli auf JCs Ansage nachgetragen; von JC am 14. Juli zweimal gebeten und
  damals übersehen — die Person konnte sich drei Tage lang nicht einloggen)*.
- 📎 **Wie die Allowlist wirklich funktioniert** (gelernt am 17. Juli, damit es niemand nochmal suchen muss):
  Die App fragt `beta_allowlist` **nie** ab — die Prüfung sitzt komplett in der DB. Der Trigger
  `enforce_beta_allowlist()` wirft beim Anlegen `not_on_beta_allowlist`; gelesen wird über
  `is_email_allowed()`. Beide vergleichen über **`canon_email()`**, das kleinschreibt, trimmt und bei
  **Gmail/Googlemail zusätzlich Punkte und `+`-Suffixe entfernt** und auf `@gmail.com` normalisiert.
  **Folge:** Schreibweise ist egal, `j.c+beta@googlemail.com` = `jc@gmail.com`. Neue Einträge trotzdem
  kleingeschrieben ablegen — so macht es auch `approve_beta_request()`.
  **Nach einem Eintrag verifiziert man mit `select public.is_email_allowed('…')`, nicht mit einem
  `select *` auf die Tabelle** — nur die Funktion beantwortet die Frage, die der Login stellt.
- ✅ **info@thefishingbutler.app** — MX + SPF via Porkbun, getestet. *(`noreply@…` = nur Resend-Absender.)*
- ✅ **Rechtstexte (Beta)** — Impressum + Datenschutz de/en/nl, Amsterdam, DSGVO + RL 2000/31/EG.
  Für *öffentlichen* Launch offen: Anwalt, DPAs, Drittland — siehe `LEGAL-DRAFT.md`.
- ✅ **E-Mail-Backend** — `RESEND_API_KEY` gesetzt; Edge Functions `feedback-notify` + `beta-request-notify` ACTIVE.
