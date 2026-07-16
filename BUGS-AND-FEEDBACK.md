# Butler Fish — Bugs & Feedback (Live-Tracker)

**Was offen ist: Bugs, abgestimmte Bauten, Diskussionspunkte, Betrieb.** Erledigtes wandert ins `CHANGELOG.md`. Größere Features & Vision → `ROADMAP.md`.

Stand: 12. Juli 2026. Legende: 🐛 offener Bug · 🔧 offener Bau (abgestimmt) · 💬 Diskussion/Entscheidung · ⚙️ Betrieb.

> **Prozess-Regel (JC):** Bei **Diskussions-/Entscheidungspunkten** legt Claude Optionen vor und **wartet auf JC's Entscheidung** — keine Alleingänge, außer JC sagt ausdrücklich „bau es".

## 🧪 GETESTET & BESTÄTIGT (JC, Gerät — 13. Juli, alles ✅)
Gesamter Gerätetest-Backlog bestätigt & abgehakt: Standalone-Vollbild · #12 Footer · #19 Avatar · Chooser schneller · E-Mail read-only · Verein/Gruppe-Tab · **Fotos/Thumbnails** · Tagline · Login-Umbruch (app-weit) · Maskottchen-Loader (nur Kaltstart, größer, 1,5 s) · Statusleisten-Flash gefixt · #15 Toolbar + Pfeil-Fix · „Dieses Jahr"-Kachel (Jahr / bei Zeitfilter ausgeblendet) · #14 „Fänge aus" Multiselect-Sheet (+ Solo immer, Layers-Icon) · Angler-Filter aus Mitgliedern · Filter sticky Apply · #13 Sticky-Kopf (Art + Maß + Datum, Fade beim Scrollen) · #17 Chips · #16 Teilen-Vorschau.

## ✅ ONBOARDING-REWORK + TAGLINE (deployed 13. Juli, Commit 784317c — smoke-getestet)
- Reihenfolge: **Welcome → Was-erwartet-dich → Profil → Als App**.
- „Was erwartet dich"-Screen: Maskottchen (82 px) · **Butler Fish**-Titel · **Catch · Log · Organize** (= neue Tagline, lokalisiert) · 3 Benefit-Zeilen (Im Handumdrehen erfasst · Solo oder gemeinsam · **Deine Bestwerte mit Pokal-Icon**) · Footer ＋. Icons neu/zentriert.
- **Tagline app-weit** von „Dein Fang, gut aufgehoben." → **„Catch · Log · Organize"** (lokalisiert: de „Fangen · Protokollieren · Organisieren", nl „Vangen · Loggen · Organiseren"). Header, Login, Onboarding + HTML-Defaults bereinigt.
- **Cleanout:** 27 ungenutzte alte Onboarding-i18n-Keys entfernt (obTeamTitle/Solo/Verein/Gruppe…, obCLO). *(Auf Gerät prüfen: Icon-Ausrichtung, Höhe/Scrollen.)*

---

## ⏸️ VERTAGT AUF MORGEN — #9 „Zwei Bildsprachen auf der Detail-Seite" (JC: **wichtigstes Thema nach dem Rebranding**)
**Wo wir stehen — Frage:** Die Detail-Seite hat zwei Sprachen: **„Fang" = offene Zeilen** (Icon + Label + Wert, Haarlinien, kein Container) vs. **„Wetter" = gefüllte Karten**. Kohärent oder inkonsistent?

**Mockups gemacht:** `weather_block_language_options` (Jetzt / A / B) und `detail_module_style_variants` (A / C / D). Alle mit gekürzten Labels, damit nur der Container variiert, und mit Fang-Zeilen darüber (Kohärenz nur im Kontrast beurteilbar).

**Optionen:**
- **Jetzt:** 5 einzeln umrandete Kästchen → unruhig, wirkt wie anderer Baukasten statt Aussage.
- **A (Claude-Empfehlung):** Fang bleibt offene Zeilen · **Wetter wird EIN Modul** (eine Fläche, 2-spaltiges Innenraster mit Haarlinien, keine Einzelrahmen). Dashboard-Blick bleibt, Rauschen halbiert.
- **B:** Wetter als Zeilen (nach unten vereinheitlicht) → maximal kohärent, aber Wetter verliert den Auf-einen-Blick-Charakter, wird sogar höher als A.
- **C:** **beides Modul** (Fang-Panel + Wetter-Panel) → im Standbild am „designtesten", ABER: Edit-Modus bricht (Eingabefeld im Panel im Panel = der von JC verworfene „bulky form"-Look); auf dunklem Theme stapeln sich 3 Flächen → Hierarchie flacht ab, Hero verliert Punch.
- **D:** Zeilen + eigene Fläche/Tint je Modul → Dilemma: Tint entweder unsichtbar (nutzlos) oder wirkt wie Farbfehler; Wetter verliert trotzdem den Blick.

**Claudes Kernargument für A:** *Die Bildsprache soll Editierbarkeit kodieren.* Offene Zeilen = deine Daten (verwandeln sich unterm Stift in Eingaben). Geschlossene Fläche = gemessene Welt, nie editierbar. Konsistent **nach Bedeutung**, nicht nach Dekoration — in einem Satz vor einer Jury erklärbar.

**Offener nächster Schritt:** JC überlegt noch. Claude hat angeboten, **C im Edit-Modus zu mocken** (Eingabefelder im Panel) — das beantwortet die Frage vermutlich von selbst. **Erst Rebranding, dann das hier.**

## 🎨 DESIGN-REVIEW Detail-Seite (Claude, 16. Juli — zur Absegnung durch JC)
*Aus dem Award-Review der Detail-Seite. Nichts davon war vorher im Backlog. #9 (zwei Bildsprachen) wird separat diskutiert.*
- **🐛 (1) Trend-Pfeil und Zahl widersprechen sich:** Wind zeigt „→ **−0** km/h" (minus null!), Druck „→ **+1** hPa" — der Pfeil sagt flach, die Zahl sagt Veränderung. Ursache: Schwelle entscheidet über den Pfeil, die Zahl wird unabhängig gerundet. **Fix:** unter der Schwelle „±0" **oder** gar keine Zahl; Pfeil und Zahl müssen dieselbe Aussage treffen.
- **🐛 (2) Einheit doppelt:** Label „SCHLEPPGESCHW. **(KM/H)**" + Wert „2,56 **km/h**". Einheit gehört nur an den Wert → Label „Schleppgeschw.".
- **🐛 (3) Schleppgeschw. sichtbar bei Methode „Fly fishing".** Bewusst hatten wir vorhandene Werte nicht versteckt — die Kombination sieht aber falsch aus. **Vorschlag:** im Detail ausblenden, wenn Methode ≠ Trolling (Daten bleiben erhalten, erscheinen wieder bei passender Methode).
- **🔧 (4) Wetter-Labels kürzen:** „LUFTTEMPERATUR" o. Ä. ist zu lang für die schmalen Karten; die Sektion heißt schon „Wetter" → **Luft · Wasser · Wind · Druck · Mond**.
- **🔧 (5) Trend-Fußnote zu technisch + unpräzise:** „Pfeile: Veränderung über die letzten 7 Tage (lineare Tendenz, Tageswerte)" — bei einem Fang vom 28. Jan sind es nicht „die letzten 7 Tage", sondern die **7 Tage vor dem Fang**. Kurz + korrekt formulieren.
- **🔧 (6) Mond-Icon zu klein (13px):** ausgerechnet das einzige Icon, das echte Information trägt. → in der **Wertzeile ~20px** zeigen statt als Mini-Label-Icon.
- **🔧 (7) Karten-Pin ist ein schlichter Punkt** — echter Marker (Tropfenform, Teal) wäre ein billiger, sichtbarer Gewinn.
- **🔧 (8) Angler-Byline steht sehr einsam** in hoher Zeile mit Trennlinie — enger anlegen, Fang-Block rückt näher ans Foto.

## 🐛 OFFENE BUGS
- ✅ **Text-Felder leerbar (15. Juli — GEFIXT & live verifiziert):** „Feld leeren"-Zeile (`__clear`) im Typeahead-Sheet für Köder/Rute/Boot/Methode + Gewässer, nur wenn ein Wert gesetzt ist; speichert `null` → Feld zeigt „—". i18n de/en/nl. Live-Smoke: Köder → `null`. *Kleine Politur offen: beim Gewässer steht die Zeile nach dem „zuletzt"-Eintrag (Vorschläge + recent kommen beide aus `_ortSuggest`) — sollte ganz oben stehen.*
- ~~**Text-Felder lassen sich nicht leeren (JC, 15. Juli):**~~ Zahl-Felder (Länge/Gewicht/Tempo) sind echte Inline-Inputs → löschen ergibt `null` → „—". **Text-Felder (Köder, Rute, Boot, Methode, Gewässer)** laufen über das **Typeahead-Sheet**, das nur *auswählen* kann und **keine „Leeren"-Option** hat → einmal gesetzt, nie mehr entfernbar. **Fix:** „Entfernen/Leeren"-Zeile im Typeahead-Sheet (nur wenn Wert gesetzt), speichert `null`; Sentinel-Key `__clear` in `editTypeaheadField` + `editWaterField`; i18n-Label de/en/nl.
- **Log-Formular zeigt alle Sektions-Überschriften** (Basis · Der Fang · Fotos · Gewässer · Bedingungen · Technik · Notizen), auch wenn keine Felder aktiv/relevant → nur Überschriften mit sichtbaren Feldern zeigen.
- ✅ **Statistik „Dieses Jahr"-Kachel** (gefixt, deployed): zeigt jetzt das aktuelle Jahr als Label; bei aktivem Datumsfilter das Jahr/den Bereich (z. B. „2024", „2023–2024", „≥ 2024") + passende Anzahl.

*(Gefixt & deployed 12. Juli: Log-Felder-Häkchen zentriert · Konto-Buttons vereinheitlicht + „Konto löschen" wie Danger Zone. Auf Gerät gegenprüfen: Häkchen-Zentrierung (Pixel-Tweak).)*

*(Gefixt & deployed 12. Juli: Notizen-Doppel-Überschrift · Feier nur bei **neuem** Fang (+ etwas länger) · Fang-Karte Datum zeigt Jahr wenn ≠ laufendes Jahr + „–" bei fehlenden Maßen ausgeblendet · Reset-Button-Sichtbarkeit · Mitglieder-Tap-Warnung (letzter Admin). Device-Test-Bugs siehe CHANGELOG. **Auf Gerät prüfen:** Open-in-Maps, Safe-Area, Sheet-Wisch.)*

## 🔧 OFFENE BAUTEN (abgestimmt — kein Diskussionsbedarf)
- **🦸 CATCH-DETAIL HERO-REDESIGN (14. Juli — Design LOCKED via Mockups, bauen):** kompletter Detail-Seiten-Umbau.
  - **Hero (oben):** immersives Cover-Foto; **Krone oben rechts** (bei PB). Overlay unten: **Artname (groß) + Größen-Chips (Länge, Gewicht)**. **KEIN Datum, KEIN Angler** im Hero. Multi-Foto → Thumbnail-Streifen unter dem Hero (erste ~4 + „+N", Tap → Galerie). Kein Foto → Hero schrumpft zu schlankem Band (Art + Größe), funktioniert weiter.
  - **PB-Anzeige = Krone im Hero oben rechts** (ersetzt Krone-neben-Art). Manuelle Kontrolle (Edit-Modus: Krone tippen → Menü; Edge-Case **A** bestätigt) kann danach dran.
  - **Angler = Byline (Variante B), IMMER zeigen** (auch Solo): „Gefangen von [Avatar-Initialen] Name" als Credit-Zeile **unter den Fotos** (Hero → Thumbnail-Streifen → Byline → „Fang"). Bei nur/keinem Foto direkt unter dem Hero. **Nicht** als Spec-Feld-Zeile.
  - **„Fang"-Spec-Reihenfolge:** 1) Datum (voll) · 2) Entnahme | Methode · 3) Köder (voll) · 4) **Rute | Rolle** (Rolle/Reel = neues Feld) · 5) Boot | Tempo · 6) Gewässer (voll). **Länge/Gewicht raus** (im Hero), **Angler raus** (Byline).
  - **Paar-Regel:** jedes Paar entweder **beide halb** oder **beide voll** (nie halb+voll); einzelnes Paarmitglied → volle Zeile. Gilt für alle Paare.
  - **Wetter:** 2×2-Karten (Luft, Druck, Wasser, Mond) mit **Trend-Pfeilen** (JC mag die Darstellung). **Trends nicht vergessen.**
  - **Karte** darunter (mit den Karten-Control-Fixes aus dem Politur-Batch).
  - Mockups: `catch_detail_final_overview` (final), Hero-Varianten. JC: „Sieht toll aus".
- **🆕 JC-Feedback-Batch (15. Juli — Hero-Test):**
  - ✅ **Hero-Foto Zoom** — Overlay (Facts/Grad) click-through → Tap aufs Foto öffnet die Zoom-Lightbox. Live.
  - ✅ **Hero ohne Foto** — statt Band jetzt derselbe Hero-Look mit **Hintergrundfarbe + niedriger Höhe** (132px); Angler-Byline **darunter** (vorher rutschte er über den Hero-Inhalt). Live.
  - 🔧 **Einstellungen „+ add" → „−"** wenn geöffnet/aktiv (welche Stelle genau prüfen — Akkordeon/Add-Buttons). Klein.
  - 🔧 **Back-Nav-Bug:** von einem Catch in die Einstellungen → „Zurück" landet beim **Verein** statt beim **Catch**. Rückkehr-Ziel merken.
  - 💬 **PB-Anzeige für DB/Verein-Fänge:** evtl. **„PB"-Text statt Krone** — oder **PB + Krone**? (JC fragt.) → kurz entscheiden.
- **🆕 JC-Feedback-Batch (14. Juli, 2. Runde):**
  - **(1) Hero-Kategorie** — 💬 unklar, Rückfrage: was/wo genau (Detail-Hero? Stats? Kategorie-Label auf dem Foto?).
  - **(2) „Rolle/Reel" als Eingabe-Kategorie** — neues Feld wie Rute/Boot/Köder (Feld-Config + Detail + Edit + Share/CSV). ✅ klar, bauen.
  - **(3) Rekord-Kacheln umsortierbar** — „Deine Rekorde"-Shelf (Stats, `rec-strip`) per **horizontalem** Drag&Drop neu ordnen (Reihenfolge lokal). ✅ klar, bauen.
  - **(4) PB-Anzeige NEU diskutieren** — JC will „how **and** where" ändern (nach Krone-neben-Art). 💬 → **Manuelle-PB-Kontrolle pausiert**, bis Anzeige entschieden. Neue Mockups/Optionen nötig.
  - **(5) Zwei Nachkommastellen max** in Zahl-Feldern (wo Dezimal unterstützt: Gewicht kg, Schlepp km/h; ggf. Wassertemp). ✅ klar, bauen (Input-Clamp + parse).
  - **(6) Stats umordnen/ordnen** — 💬 Reihenfolge der Stats-Sektionen/Kacheln: fixe neue Reihenfolge (JC nennt) oder Drag? Rückfrage. (a) **Karten-Controls** — Leaflet +/−-Zoom restylen + „In Karten öffnen"-Icon (Position/Stil); jetzt auch Edit-Karte betroffen. (b) **Wetter-Footer aufräumen + Mondphase** (Emoji raus → mono/theme-aware Icon). (c) **Schleppgeschw. nur wenn Methode = Trolling** — Trigger = kanonische Methode „Trolling/Schleppangeln"/„Trolling"/„Trollen" (Substring trolling/schlepp/trollen); Feld + ＋-Zeile in Detail **und** Formular nur dann. (d) **Altes „Bearbeiten"-Formular abschaffen** (JC: „can go") — Inline-Edit deckt alles ab; Einstiegspunkte/openEdit/editCurrentCatch entfernen, Formular-Sektion prüfen.
- **🎛️ Manuelle PB-Kontrolle + Anzeige-Änderung (JC 14. Juli — WICHTIG):** „Nicht mein Rekord" (Krone weg ohne Löschen; braucht `pb_optout`) + „Als Rekord markieren"; **UND JC will die PB-Anzeige (Krone/Banner) ändern** → Richtung offen, Proposal/Rückfrage vor Bau.
- *Nicht Detail-Seite / später:* #16 Teilen-Vorschau (anderer Screen), Maßeinheiten-Settings (→ ROADMAP G), Record-Moment/Confetti-Edge-Cases (Test, später).
- **✅ #15 Detail → echter Edit-Modus (14. Juli — KOMPLETT inline, live verifiziert; Geräte-Test läuft):** Felder, Notizen, **Fotos, Karte, Gruppe/Verein** — alles im Stift→„Fertig"-Modus, kein Formular-Umweg. Indikator = Stil A (flacher Unterstrich, hugt Wert; Chevron = Picker). Datum = echtes Inline-`datetime-local`. Gewässer = Typeahead. Fotos = editierbares Grid (Add/Remove/Cover), Karte = Tap-Pin + „Mein Standort", Gruppe = „Eintragen in"-Zeile ohne App-Kontext-Switch. Bridge-Button entfernt. Geräte-Test durch JC läuft. **Ursprünglicher Plan (erledigt):**
  - ✅ Read-only **komplett clean** (keine Indikatoren, keine ＋-Zeilen), **ein** Stift oben rechts.
  - ✅ editierbare Text-/Zahl-Felder = **dauerhafte Inline-Inputs** (sauberer Spec-Look, dezente Akzent-Unterlinie) → **native ↑/↓ funktionieren jetzt**; Enter = nächstes Feld; Blur committet pro Feld.
  - ✅ Auswahl/Datum/Angler → Sheet/Picker, **bleibt im Edit-Modus** (`keepEdit=true`).
  - ✅ **Notizen-Textarea mit Placeholder**.
  - ✅ **„＋ hinzufügen"** nur im Edit-Modus, Ausrichtung gefixt.
  - **Offen — nächstes Increment (JC will inline, nicht Formular):**
    - **Karte anpassbar** (Pin verschieben + „Mein Standort") — heute per Button „Fotos, Karte & Bereich bearbeiten" → Formular (Interim, kein Regress).
    - **Fotos editierbar** (hinzufügen/entfernen/neu ordnen — `renderFormPhotos`/`state.editPhotos`/`saveSoloPhotos`) — heute per Button → Formular.
    - **„Eintragen in" / Gruppe-Verein ändern** (Area-Sheet) — heute per Button → Formular.
    - **Fischart** editierbar (Typeahead) — heute per Button → Formular.
  - **Geräte-Test (JC):** iOS ↑/↓-Feldnavigation, Blur-Commit, Sheet-bleibt-im-Modus. Dann Fotos/Karte/Bereich inline verdrahten & Formular-Button entfernen.
  - *Damit gefixt (JC 14. Juli): ＋-Buttons verschoben · native ↑/↓ tot · Notizen ohne Placeholder · Gewicht/Tempo nicht als editierbar erkennbar. Noch via Formular-Button: Gruppe · Karte · Fotos.*
- ✅ **Sentence case** (geprüft): Audit über EN-Labels durchgeführt — keine Title-Case-Verstöße gefunden (DE-Nomen korrekt groß). Erledigt.
- **Angler-Filter aus Mitgliederliste** *(JC: „to change it")* — Filter mit allen Mitgliedern vorbefüllen („Ich" zuerst), nicht nur mit Anglern, die schon gefangen haben.
- **Ladezeiten/gefühlte Langsamkeit + Maskottchen-Ladescreen** *(JC: „follow the rec")* — Maskottchen-Loader zentriert beim Initial-Load/Datenabruf **und** echter Perf-Pass: Login-Queries parallelisieren, Fonts `display=swap` (später self-host), Foto-Thumbnails (später). Loader kaschiert, Perf-Pass behebt.
- **Einstellungen Verein/Gruppe-Selektor kontextsensitiv:** wie der Homescreen-„+" soll der Verein/Gruppe-Umschalter in den Einstellungen **nur eines** zeigen (entweder Verein **oder** Gruppe, je nach Kontext), nicht beides. *(JC, 13. Juli.)*
- **🔧 Manuelle PB-Kontrolle (JC, 14. Juli — VOR dem großen Test heute):** die Krone wird heute **automatisch** vergeben (größter geloggter Fang je Art/Metrik). Nötig:
  - **(a) „Nicht mein Rekord" entfernen** — Krone von einem Fang nehmen, obwohl er der größte **geloggte** ist (der echte PB ist einfach nicht erfasst), **ohne** den Fang zu löschen. Braucht persistenten Per-Fang-Opt-out (sonst setzt `recomputePb` die Krone wieder), z. B. Spalte `pb_optout`.
  - **(b) Selbst als PB markieren** — manuelle Übersteuerung der Auto-Wahl.
  - **Regel:** manuell/Opt-out gewinnt immer gegen `recomputePb` (ausgeschlossene Zeilen bekommen die Flag nie). Detail-Aktion „Nicht mein Rekord" / „Als Rekord markieren".

**Diskussion 11–20 entschieden (13. Juli) — Bau in Etappen:**
- **Batch A (leichter):** 11 Tagline · 12 Höhe bis unten füllen · 13 Art-Kopf + Subtitle · 17 2-Spalten-Feld-Toggles · 19 My-Catches-Avatar · 20 Profil-Subheadline · Verein/Gruppe-Selektor kontextsensitiv.
- **Batch B (Layout/Struktur, danach):** 14 Filter/Kontext-Auswahl als Avatar-Sheet · 15 My-Catches-Button-Layout · 16 Teilen-Vorschau kombinieren · 18 Einstellungen-Navigation vereinheitlichen (Akkordeon überall, Persönlich/Verein-Gruppe aligned).

*(Gefixt & deployed 12. Juli: Mitglieder-Hinweis gekürzt · Reset als Icon-Overlay + Sichtbarkeit (auch Chip-Insert) · Backward-Compat-Token entfernt · Rollen-Badge ohne Chevron · **Profil #16 komplett** (Initialen-Editor über Standort, „Kürzel anpassen"→„Initialen", Tap-Avatar=Farbe wechseln).)*

## ⏳ VERTAGT — Login: gleiche Szene wie der Splash? (JC, 16. Juli)

**Der Login zeigt dasselbe Lockup und damit dieselbe 3,3-s-Choreografie** (Fisch schwimmt ein → Laterne → Licht sinkt → Puffer).
Kein Blocker: die Eingabefelder sind sofort benutzbar, es animiert nur das Logo darüber.

**Aber:** Wer auf dem Login steht, will rein — nicht zusehen. Und anders als der Splash ist der Login kein Auftritt,
sondern ein Formular. Die Szene erzählt dort niemandem etwas Neues.

**Optionen:** (a) so lassen · (b) Login bekommt eine kurze Einblendung (~0,9 s, Fisch steht sofort, nur Laterne + Puffer
blenden auf) · (c) Login zeigt das Lockup ganz ohne Animation.

**Offen für JC.** Technisch trivial: eigene Klasse statt `.anim` am `#login-logo`, die Choreografie selbst bleibt unangetastet.

## ⏳ VERTAGT — Splash-Dauer bei Wiederkehrern (JC, 16. Juli: „leg es als Punkt in den Backlog")

**Der Ladescreen steht bei jedem Start 4,6 s.** Das ist die volle Szene: Wort → Fisch schwimmt dunkel ein (1,4 s) →
Laterne an → Licht sinkt in fünf Stufen zum Puffer → Puffer erscheint (fertig bei 3,28 s) → ~1,3 s Standbild.
Bewusst so entschieden, und für einen Design-Award ist es ein Auftritt.

**Das Problem kommt später, nicht jetzt:** Wer zum dritten Mal am Wasser einen Fang eintippt, wartet 4,6 Sekunden.
Der Splash ist dann kein Auftritt mehr, sondern eine Hürde — und zwar genau in dem Moment, in dem die App
schnell sein müsste (Fisch liegt im Kescher).

**Üblicher Weg:** volle Szene beim **ersten Start am Tag** (oder nach Kaltstart/Update), danach eine Kurzfassung
(~1,2 s, nur Einblenden statt Szene). Merker via `localStorage` + Datum. Der Award-Auftritt bleibt erhalten,
der Alltag wird schnell.

**Offen für JC:** ob überhaupt, und welcher Auslöser — erster Start pro Tag / pro Session / nur nach Update.
Nicht bauen, bevor JC entschieden hat.

## 💬 ZUM DISKUTIEREN / VORSCHLÄGE (Redesigns — Proposals kommen vor dem Bau)
*(Erledigt & deployed: Swipe-to-dismiss · Tagline „Catch. Log. Organize." · Benennung „Log fields"/„Sharing" · **Profil-Settings-Umbau** · **Log-to „Solo" zeigt Avatar+Name** · **Mitglieder inline** (Avatar+Rolle, Tap-Rolle, Inline-Entfernen) · **Danger Zone eingeklappt** (Akkordeon).)*

*(✅ **Batch 1–10 deployed** 13. Juli, Commit 1fc87a0 — live geprüft. Details siehe CHANGELOG.)*
1. ✅ **Invite/Share** = kompakter sekundärer Icon-Button (Teilen-Icon) inline neben dem Code.
2. ✅ **App & Help:** eine Gruppe behalten, Install-Text gekürzt (seltener iPhone-Chrome-Block raus).
3. ✅ **Homescreen „+"** kontextsensitiv: Klick auf Vereine-„+" zeigt nur Vereins-Aktionen, Gruppen-„+" nur Gruppen-Aktionen. **+ mehr Abstand** zwischen Kategorien (26 px).
4. ✅ **Open-in-Maps** als Icon-Overlay unten rechts auf der Detail-Karte (Vollbreite-Button raus).
5. ✅ **Clubs/Gruppen umsortieren** per Drag (Long-Press-Ziehen, Reihenfolge lokal gespeichert). *(Touch-Gefühl auf Gerät gegenprüfen.)*
6. ✅ **+N-Badge antippbar:** öffnet Info „Auch eingetragen in …" mit den weiteren Vereinen/Gruppen.
7. ✅ **Vorschläge merken:** Methode, Köder, Ruten, Boot merken sich zuvor eingegebene Werte (persönlich, lokal). → Roadmap: geteilte Vorschläge für Verein/Gruppe später.
8. ✅ **„Mein Standort"** als Icon-Overlay unten rechts auf der Formular-Karte.
9. ✅ **Notizen-Platzhalter** gekürzt („z. B. Drill, Wetter, Stimmung …").
10. ✅ **Detail-Hero-Band** ohne farbiges Band — Artname + Maß als schlichte dunkle Überschrift.
11. **Tagline neu brainstormen:** „Catch. Log. Organize." → z. B. „Keeps your catch organized" o. ä. — Optionen sammeln.
12. **(Rundown #4) „App nutzt nicht die volle Höhe":** mein Safe-Area-Fix war vermutlich **nicht** das Gemeinte — klären, was genau gemeint war.
13. ~~Fischart als Detail-Kopf~~ → ✅ **Keep as-is** (JC, 14. Juli: „keep for now").
14. ✅ **Filter-Kontext als Avatar-Picker** (deployed): der Verein/Gruppe-Filter nutzt jetzt den „Log to"-Stil — Sektion **Kategorien** (Alle · Solo · Alle Gruppen · Alle Vereine, mit Icons) klar getrennt von **Vereine/Gruppen** (mit Logos, Häkchen bei Auswahl). Fischart etc. bleiben normale Selects (bewusst, kein Over-Sheeting).
15. **My-Catches-Button-Layout:** Download + Sortieren sitzen direkt **über dem ersten Fang**, Filter oben — wirkt weird. Anordnung überdenken.
16. **Teilen-Vorschau überdenken:** aktuell **zwei Boxen** (Vorschau + Editor) mit fast gleichem Inhalt → schöner/kombinieren (z. B. Live-Vorschau = Editor).
17. **Mehrspaltiges Layout je Gruppe?** In den Log-Feldern (und ähnlichen Listen) evtl. **2 Spalten** pro Gruppe, um Platz zu sparen. *(JC mag die Kategorien inhaltlich — nur Platz/Layout.)*
18. ✅ **Einheitliche Einstellungs-Navigation** — **bereits durch den Settings-Akkordeon-Umbau erledigt**: beide Tabs (Persönlich **und** Verein/Gruppe) nutzen durchgängig dasselbe Akkordeon-Muster (`accgroup`/`acchead`/`toggleAcc`), gleiche Sektions-Optik. Einzige bewusste Asymmetrie: Personal-Danger liegt im „Konto"-Akkordeon, Gruppe hat eigene „Gefahrenzone" (so mit JC in #21/#22 entschieden). *(Falls JC hier noch etwas Konkretes stört → melden.)*
19. **„Meine Fänge" — eigenes Logo/Initialen?** Soll dort das persönliche Avatar/Initialen-Bild erscheinen (statt/zusätzlich zum aktuellen Header)?
20. **Profil-Kopf: Logo + Name als Subheadline?** In der Profil-Sektion (Einstellungen) evtl. Logo/Avatar + Name als **Subheadline** unter der „Profil"-Überschrift einführen. Layout/Struktur diskutieren.
21. ✅ **Personal Danger Zone** (deployed) — eigene „Gefahrenzone" in persönlichen Einstellungen: Mitgliedschaften mit „Verlassen" + „Konto löschen"; „Verlassen" aus Gruppen-Einstellungen entfernt. *(JC: „Delete from group, dont keep both" — umgesetzt.)*
22. ~~„Verlassen"-Ort~~ → **in #21 gelöst.**
23. ~~Log-Formular-Überschriften~~ → ✅ **kein Bug** (leere Sektionen werden bereits ausgeblendet; JC: „nothing to fix"). Ein-Feld-Sektionen/leichteres Layout → Teil der späteren **Overall-Catch-Log-Layout**-Diskussion (siehe #24).
24. ~~**Overall Catch-Log-Layout**~~ → ✅ **erledigt (13. Juli, Batch 3/3.6, live):** Ein-Feld-Sektionen (Fotos/Notizen) verlieren ihren großen Header und tragen das Label direkt am Feld; kurze Felder bleiben 2-spaltig (Länge/Gewicht). Teil der Design-Review-Umsetzung. Detail-Ansicht zusätzlich als 2-spaltiges Spec-Sheet (3.5). Feineres Nachschärfen jederzeit möglich.
25. ✅ **Intro/Onboarding-Review (deployed):** (a) Welcome-Text gekürzt, (b) Profil minimal+zentriert, (c) Buttons `sm`, (d) App-Icon statt Emoji, (e) Titel „Dein Profil", (f) „Als App"-Schritt bleibt. *Ursprüngliche Findings:*
    - **(a) Welcome-Text „solo oder gemeinsam":** 4 Schritte (Welcome → Profil → Solo/Verein/Gruppe → Als App speichern). Findings, die nicht mehr zu unseren Entscheidungen passen:
    - **(a) Welcome-Text „solo oder gemeinsam":** neu bewerten; zudem **zwei widersprüchliche Werte** gespeichert (Basis-i18n „mit deinem Verein" vs. _P-Override „gemeinsam") → aufräumen. Option: Tagline „Catch. Log. Organize." nutzen?
    - **(b) Profil-Schritt out of sync:** zeigt nur Foto + Name — **nicht** das neue Profil (Initialen-Editor, Tap-Avatar = Farbe). Minimal lassen oder angleichen?
    - **(c) Button-Layout inkonsistent:** Onboarding-Nav-Buttons sind **groß** (`.btn`), Rest der App nutzt `.btn secondary sm`; zudem gemischte Größen im Onboarding (großer Nav vs. kleiner „Als App"-Button).
    - **(d) Emoji:** Schritt „Als App speichern" nutzt 📲-Emoji — passt nicht zur emoji-freien/Maskottchen-Marke. Durch Maskottchen/Outline-Icon ersetzen?
    - **(e) „Wie sollen dich andere sehen?":** verfrüht (noch kein Social) → umformulieren (Profil/Name).
    - **(f) „Als App speichern"-Schritt:** eigener Schritt nötig oder in App-&-Hilfe integrieren?

## ⚙️ BETRIEB — offen
*(Keine offen. Domain-Umzug/Rebrand → `ROADMAP.md` Parked #2.)*

## ⚙️ BETRIEB — erledigt (Referenz)
- ✅ **Allowlist FINAL (13):** johannesclaudi@gmail.com (Admin) · oktay.duzgun@gmail.com · schuerholz.rene@googlemail.com · Matthew.scott0991@gmail.com · m_baron1@gmx.de · michael-baron86@gmx.de · mberger2209@gmx.de · cmjcody@gmail.com · felixformhals@web.de · jurjen.terpstra@gmail.com · leandro.gianfrancesco@gmx.de · svenflosbach@yahoo.de · ralphkempen@gmail.com.
- ✅ **info@thefishingbutler.app** — Porkbun „Fix DNS" setzte MX + SPF; getestet, Mail kommt in Gmail an. Kein Trial/Kosten. *(`noreply@…` = nur Resend-Absender, kein Postfach; Versand unabhängig von info@.)*
- ✅ **Rechtstexte (Beta)** — Impressum + Datenschutz de/en/nl, Anschrift Amsterdam, auf EU-Recht (DSGVO + RL 2000/31/EG). Für *öffentlichen* Launch offen: Anwalt, DPAs, Drittland — siehe `LEGAL-DRAFT.md`.
- ✅ **DB- + Storage-Reset (10. Juli)** — alles geleert; johannesclaudi@gmail.com bleibt Admin; Allowlist unverändert.
- ✅ **E-Mail-Backend komplett** — `RESEND_API_KEY`-Secret gesetzt (10. Juli); Edge Functions `feedback-notify` + `beta-request-notify` ACTIVE. Feedback-Modal speichert in DB + mailt an johannesclaudi@gmail.com.
