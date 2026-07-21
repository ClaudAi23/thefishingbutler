# Butler Fish — Changelog (Build-Log)

**Was gebaut/deployed wurde, chronologisch.** Diese Datei ist das **Build-Log**. Offene Bugs & Feedback → `BUGS-AND-FEEDBACK.md`. Features, Vision & Entscheidungen → `ROADMAP.md`.

Stand: 12. Juli 2026. Legende: ✅ live · 🟡 gebaut, noch nicht deployed · 🔧 Bau · 🐛 Fix.

---

## 📋 CHANGELOG (ab Commit 56 — JC testet erst am Ende)
Alles, was wir ab hier fixen, kommt hier rein (mit Commit-Nr. beim Deploy).

- **🟡 `v 2026-07-21.37` (21. Juli) — #15 Stufe 2: Hero im Edit justierbar (datensicher).**
  Im Catch-Edit wird der Hero jetzt angezeigt UND ist justierbar (ziehen = Fokus, pinch/Rad = Zoom),
  statt versteckt. `bindHeroRepos` ist edit-aware: der Zuschnitt wird über den **Original-Index** des
  angezeigten Titelbilds (editPhotos[0] → `photoPaths`) gespeichert — Umsortieren im Raster vertauscht
  nichts (crop wandert per URL via `persistDetailPhotos`). Frisch hinzugefügtes Foto ohne Pfad:
  commit überspringt (das Foto ist eh noch nicht gespeichert). Foto-Raster bleibt zum Verwalten.

- **🟡 `v 2026-07-21.36` (21. Juli) — #15: Log-Überschriften ohne Icon (wie Detail).**
  JC nach Mockup-Vergleich (`mockup-header-styles.html`): Icons raus. Die Sektions-Überschriften im
  Log-Formular (`.fgroup` + „Fotos"-Label) verlieren ihr führendes Icon → schlicht wie die Detailseite
  (Wort + Trennlinie). Behebt auch das falsche Wolken-Icon an „Am Wasser". Werte-Icons (Thermometer,
  Wind, Mond) bleiben. Gescoped `.bf-unified #s-form`.

- **🟡 `v 2026-07-21.35` (21. Juli) — #15: Log-Abschnitt „Bedingungen" → Detail-Parität.**
  JC: „Wasser steht unter Wetter, Wetter-Abschnitt leer." Ursache: `fg-cond` (enthält die
  Wassertemperatur) wurde „Wetter" genannt. Fix: Überschrift → **„Am Wasser"**; die gefetchte
  Wetter-Vorschau (`f-weather-wrap`, eigene „Wetter"-Überschrift) rückt darüber und erscheint nur, wenn
  Wetter da ist — Reihenfolge wie Detail (Wetter · Am Wasser). Nur uf-Layer, keine Feld-IDs.

- **🟡 `v 2026-07-21.34` (21. Juli) — #15 Unified, Stufe 1: „leise Felder" im Log-Formular.**
  Eingabe-Stil des Log-Formulars von lauten Boxen auf **„leise Felder"** (JC-Wahl): ruhige Fläche
  (`rgba(13,81,100,.22)`) statt Rahmen, zarter Teal-Unterstrich bei Fokus, Radius oben rund/unten flach.
  Gescoped auf `#s-form` und hinterm Flag: `<html>` bekommt `.bf-unified` (nur wenn `bf_unified≠off`).
  Labels unverändert (schon klein/oben). Feld-IDs/Speicherpfad unberührt. Referenz `mockup-input-styles.html`
  Sp. 3. Nächste Stufen: Hero justierbar (Edit → Log), dann Edit-Inline auf denselben Stil.

- **🟡 `v 2026-07-21.33` (21. Juli) — Catch-Detail: 3 Feinschliffe (JC, Gold-Standard-Runde).**
  (1) „Am Wasser" — Wassertemperatur-Label „Temperatur" → **„Wasser"** (de) / „Water" (en/nl).
  (2) Wetter-Trend-Chips: **„/24 h" und „/3 h" entfernt** (Luft zeigt jetzt „↑ +0,4 °C", Druck
  „↓ −1,2 hPa") — das Fenster steht im Info-Button. (3) **Hero-Bild verschieben/zoomen nur im
  Edit-Modus**: in der Ansicht ist der Hero statisch, Tippen öffnet nur die Großansicht
  (`bindHeroRepos` per `!_detailEdit` gegated). Nur `index.html`.

- **🟡 `v 2026-07-21.32` (21. Juli) — Karten-Toolbar: Mein Standort in die Mitte (JC).**
  Neue Reihenfolge auf allen vier Karten: Vollbild → **Mein Standort** (Mitte, Slot 50) → Zentrieren
  (unten, Slot 92). In der Detail-ANSICHT (kein Standort) rückt Zentrieren per `.ctr-up` in den mittleren
  Slot, damit oben keine Lücke bleibt.

- **🟡 `v 2026-07-21.31` (21. Juli) — App-Icon FINAL (JCs richtige Fassung, Navy-Grund).**
  `meinlogo.png` 1:1 übernommen: leuchtende Laterne mittig, weicher Schein, Navy `#021B28`. Ersetzt die
  versehentlich schwarze `vorne.png`-Fassung. Cache-Bust `?v=22`→`?v=23`.

- **🟡 `v 2026-07-21.30` (21. Juli) — App-Icon: hellere Glow-Fassung (`vorne.png`, JC-Wahl „Bild 2").**
  1:1 übernommen, nur skaliert. Cache-Bust `?v=21`→`?v=22`.

- **🟡 `v 2026-07-21.29` (21. Juli) — App-Icon final (JCs endgültige Fassung).**
  Neueste Version von JC (`lastlast.png`) 1:1 übernommen, nur skaliert. Cache-Bust `?v=20`→`?v=21`.

- **🟡 `v 2026-07-21.28` (21. Juli) — App-Icon final (JCs Fassung ohne Stiel).**
  JCs endgültiges Bild: leuchtende Laterne mit Spitze, ohne Illicium-Stiel, mittig auf Navy-Radial.
  1:1 übernommen, nur skaliert. Cache-Bust `?v=19`→`?v=20`. (Icon-Thema damit abgeschlossen.)

- **🟡 `v 2026-07-21.27` (21. Juli) — App-Icon = JCs finale Komposition (exakt übernommen).**
  JC hat die fertige Fassung selbst geliefert (`logo-icon-final.png`): Navy-Radial, weicher Schein,
  leuchtende Laterne mittig, Stiel oben. 1:1 übernommen, nur auf alle Icon-Formate skaliert (kein
  Umkomponieren). Ersetzt meine Halo-Variante `.26`. Cache-Bust `?v=18`→`?v=19`.

- **🟡 `v 2026-07-21.26` (21. Juli) — App-Icon Fix: enger Halo statt Schein-Flut.**
  `.25` sah im Dock matschig aus (großer Schein flutete die Kachel beige, Navy weg). Neu (Variante B):
  Laterne größer (Logo 150 %, Raute weiter mittig), Schein nur noch ein **enger Halo** (58 % / 42 %),
  **exakt aufs Faltkreuz zentriert** (Tile-Mitte). Navy bleibt satt dunkel, Laterne ist der Fokus —
  „Licht im Dunkeln". Cache-Bust `?v=17`→`?v=18`.

- **🟡 `v 2026-07-21.25` (21. Juli) — App-Icon: Laterne + Stiel, Raute exakt mittig (JCs Werte).**
  Aus getrennten Ebenen komponiert (Laterne+Stiel `logo-lantern-stalk.png` · Schein `logo-glow-layer.png`)
  nach JCs interaktiven Werten: Grund Navy `#021B28`, Logo 120 % bei X −42,84 / Y −13,32 (Faltkreuz der
  Raute exakt auf 50/50), Schein 70 % / 94 % bei (53 %, 53 %). Sauber gebacken: Laterne per Alpha über den
  Grund (kein Rausch-Lift), Schein geglättet, Ebene leicht entsättigt + Kante gefedert gegen den bunten
  Kompressions-Saum. Master `logo-icon-master.png` (1536²) → alle Formate. Cache-Bust `?v=16`→`?v=17`.

- **🟡 `v 2026-07-21.24` (21. Juli) — App-Icon: stark gedämpft + mittlerer Zoom.**
  JC: stark gedämpftes Glühen (gamma 1.75) und Zoom zwischen `.23` (175 %) und `.22` (100 %) → 137,5 %.
  Alle Icon-Assets neu, Cache-Bust `?v=15`→`?v=16`.

- **🟡 `v 2026-07-21.23` (21. Juli) — App-Icon auf „gedämpft" umgestellt (Idee 2, mittlerer Zuschnitt).**
  JC nach dem Mockup: mittlerer Zuschnitt + reduziertes Glühen (gamma 1.4). Alle Icon-Assets aus dem
  mittig zugeschnittenen Render neu erzeugt (Laterne groß, Schein zurück, Tiefsee dunkler), Cache-Bust
  `?v=14`→`?v=15`. Ersetzt das „ganze Bild" aus `.22`.

- **🟡 `v 2026-07-21.22` (21. Juli) — App-Icon = Origami-Laterne (Idee 2, ganzes Bild).**
  Alle Icon-Assets neu aus dem leuchtenden Origami-Render (`logo-esca-lit.png`) erzeugt: `apple-touch-icon`
  (180), `icon-192/512`, `icon-maskable-512`, `favicon-16/32/48`, `favicon.png/.ico/.svg`. Cache-Bust
  `?v=13`→`?v=14` in Head + `site.webmanifest`. Ganzes Bild = Stiel oben, Laterne mittig, volles Glühen.
  Alternative **mittel + gedämpftes Glühen** liegt als `mockup-logo-idee2-mittel.html` zum Vergleich —
  Umstieg auf JCs Ansage. (Flat-Comic-Icon damit abgelöst; Entscheidung Origami-als-Produkt-Icon noch offen.)

- **✅ `v 2026-07-21.21` (21. Juli, Commit `7b16d96`) — Spot-Sheet zoomt nicht mehr raus. LIVE.**
  JC: „auf unterster Stufe auf die 2 tippen → nach den Fotos zoomt es wieder raus auf 6." Ursache:
  `openSpotSheet` machte `fitBounds{maxZoom:17}`; auf Stufe 19 fiel das auf 17 zurück (rauszoomen), und
  das `zoomend` re-clusterte zurück auf „6". Fix: Zielzoom beim Öffnen **nie unter den aktuellen** —
  bei gleicher Stelle bleibt der Zoom, es wird nur zentriert (kein Re-Clustern mehr).

- **✅ `v 2026-07-21.20` (21. Juli, Commit `2481729`) — Karten-Toolbar vereinheitlicht + Cluster-Fix + Felder angeglichen. LIVE (BUILD am Auslieferungsstand bestätigt).**
  **Cluster-Zoom-durch (Fix zu .16):** stoppte bei „6", weil doppelt auf Zoom **18** gedeckelt und
  `flyToBounds` nur einpasste statt reinzuzoomen — die äußeren Spots trennen sich erst auf **19**
  (Karten-Max). Neu: Ziel = maximaler Zoom, bei dem die ganze Gruppe noch sichtbar ist (bis 19); jeder
  Tap zoomt garantiert weiter, Sheet erst am echten Anschlag.
  **Felder angeglichen (JC):** `.selfield` (Angler, Entnahme, alle Sheet-Öffner) = exakt die Input-Box —
  gleiche Höhe (48 px) und dasselbe dunklere Blau (`--surface` statt `--surface-2`). Vorher 44 px + heller.
  **Karten-Overlay vereinheitlicht (JC-Vorschlag angenommen):** drei feste Slots, ein Icon = eine
  Bedeutung, gleiche Reihenfolge auf ALLEN Karten — Vollbild (top 8) · **Zentrieren** (top 50) ·
  **Mein Standort** (top 92). Zentrieren = „Alle Fänge" (vier Punkte → fit) auf Übersichtskarten bzw.
  „Auf den Fang/Pin" (Pin → **Start-Zoom 13** statt 11) auf Punktkarten. Standort = Fadenkreuz → **immer
  Zoom 14**, fehlt nur in der Detail-Ansicht (letzter Slot → keine Lücke). Klassen `map-me-btn`/
  `map-all-btn` → bedeutungsneutral `map-loc-btn`/`map-ctr-btn`. Formular bekam „Auf den Pin" (erscheint,
  sobald ein Pin sitzt). Damit heißt kein Slot mehr je nach Karte etwas anderes; das Fadenkreuz steht
  nur noch für „Mein Standort".
  **NOCH ZU TESTEN (JC, Gerät):** Cluster-Zoom-durch bis 2+1+1+1+1 · Feld-Höhe/-Farbe gleich · alle vier
  Karten mit identischer Knopf-Reihenfolge · Formular-„Auf den Pin".

- **✅ `v 2026-07-19.18` (20. Juli, Commit `0b85172`) — EXIF-Nachfrage + Recenter-Icon + Datum-Icon.**
  **EXIF-Redesign (JC: „Nachfragen"):** neues Foto füllt leere Felder still; sind Ort/Datum SCHON
  gesetzt und das Foto trägt andere Daten → `confirmDialog` „Aus dem Foto übernehmen?" (Ort / Datum &
  Zeit). Manuelles wird nie mehr still überschrieben. Der Foto-Knopf pro Kachel (beides, force) bleibt.
  **#2 Recenter-Icon:** Orts-Pin mit Punkt (klar getrennt vom „Du bist hier"-Kreis und den
  Vollbild-Klammern). **Datum:** native behalten (Empfehlung), Kalender-Icon gedämpft (opacity .45);
  eigener Datums-Picker = späterer Polish.
  **NOCH ZU TESTEN (JC, Gerät):** #1 Hochformat-Marker (harter Reload!) · EXIF-Nachfrage beim Upload ·
  Cluster-Zoom-Durch · Recenter-Icon · dass „Mein Standort" unter der Edit-Karte wirklich weg ist.

- **✅ `v 2026-07-19.16`/`.17` (20. Juli, Commits `2c3019e`, `7f52f98`) — Karten-Feedback Teil 3. LIVE.**
  **A** Karten-Zentrum = Mitte ALLER Punkte (`getBoundsZoom`+`setView` statt `fitBounds`+`setZoom`-Race,
  der die Mitte auf einen Rand-Punkt schob). **F** Cluster-Tap **zoomt jetzt durch**, solange die Gruppe
  trennbar ist (Spread > 2 m & Zoom < 18); die Foto-Auswahl (Sheet) öffnet erst, wenn nicht mehr trennbar
  (gleiche Stelle / Zoom-Anschlag) — „6" wird beim Reinzoomen 2+1+1+1+1. **EXIF-Rückbau:** die zwei
  hässlichen Log-Knöpfe (Datum-Mini + „Ort aus Foto" unter der Karte) wieder entfernt (JC: „schlecht
  gemacht") — `applyExif`-Granularität bleibt im Code fürs Redesign; der Foto-Knopf pro Kachel bleibt.
  **Edit-Karte:** „Mein Standort"-Knopf UNTER der Karte entfernt (redundant zum Overlay). **#1 (`.17`):**
  Marker-`img` bekommt `object-fit:cover` + Größe **inline** erzwungen (falls eine Regel es auf
  contain/auto zurücksetzte). **Am Gerät mit hartem Reload prüfen.**
  **OFFEN / Diskussion:** #1 Bestätigung am Gerät · Datum-Native-Icon (hässlich, links ausrichten?) ·
  EXIF-Redesign (welches Foto? Rückfrage vor Übernahme? Edit-Modus) · #2 Recenter-Icon.

- **✅ `v 2026-07-19.15` (20. Juli, Commit `27ab8ff`) — Aus-Foto-Knöpfe + Marker-Crop-Fix +
  Attribution-Abstand. LIVE (Marker `object-position` ohne Skalierung, EXIF-Wrapper, msrc-Abstand
  im Auslieferungsstand).**
  **EXIF granular:** `applyExif(src,force,opts)` — Foto-Knopf pro Kachel = beides (bleibt), NEU
  Datum-Knopf neben dem Datum (nur Datum), „Ort aus Foto"-Knopf unter der Karte (nur Ort); nutzt das
  Titelbild. **Nur Log-Form** — Edit inline (Detailseite) ist ein eigener Nachzug.
  **Marker-Crop-Fix (Korrektur von 19.13):** 19.13 legte `coverImg` (crop_pos + `transform:scale`) an
  — die Skalierung ist auf den BREITEN Hero geeicht und erzeugte auf dem QUADRATISCHEN Marker den Rand,
  den JC sah. Jetzt nur `object-position` (Fokus), `object-fit:cover` füllt randlos. **Am Gerät prüfen**
  (Hochformat-Foto).
  **msrc-Abstand:** stats/list-Attribution bündig unter die Karte (Leerzeile weg).

- **✅ `v 2026-07-19.13`/`.14` (20. Juli, Commits `9cf8a8f`, `71c02b5`) — Karten-Feedback Teil 2. LIVE
  (Foto-Marker mit Crop verifiziert; Detail-Buttons + Spot-Fit im Auslieferungsstand).**
  **#2** Karten-Marker zeigt den **gewählten Titelbild-Ausschnitt** (`coverImg` mit crop_pos/crop_zoom
  des Cover-Fotos) statt roh zentriert — JCs Idee, Hochformat jetzt sauber gerahmt, identisch zum Hero.
  **Cluster-Tap** zoomt jetzt zusätzlich auf die Gruppe (`fitBounds`, `paddingBottomRight` fürs Sheet,
  maxZoom 17; gleiche Koordinate → maxZoom, Sheet wählt).
  **#5** Detail-Karte: Recenter-auf-Fang-Knopf (immer). **#6** Edit-Karte: Mein-Standort-Knopf (nur im
  Bearbeiten, setzt den Pin). Damit ist das Karten-Paket (JC, 20. Juli) komplett.

- **✅ `v 2026-07-19.12` (20. Juli, Commit `d6bd7a7`) — Karten-Feedback Teil 1. LIVE, verifiziert
  (Attribution unter der Karte rechts, Leaflet-Overlay weg; Erst-Zoom eine Stufe weiter raus).**
  **#1** Erst-Zoom bei mehreren Fängen: `fitBounds` dann `zoomOut(1)` (wie einmal „−"); Einzelfang bleibt
  `FOTO_ZOOM` (Bild statt Punkt); gilt auch für den „Alle Fänge"-Knopf (via `getBoundsZoom`−1).
  **#3** „© OpenStreetMap" unter der Karte rechts (`.msrc`) für stats/list/form, `attributionControl:false`
  — wie auf der Detailseite. **#4** Form-Standortknopf von blauem `.map-fab` auf weißen `.map-me-btn`
  (behebt zugleich Überlappung mit dem neuen Vollbild-Knopf).
  **Offen aus dem Paket:** #2 Hochkant-Fotos (Vorschlag), #5 Detail-Recenter, #6 Edit-Standortknopf.

- **✅ `v 2026-07-19.11` (20. Juli, Commit `87147d7`) — Vollbild für ALLE Karten. LIVE, end-zu-end
  verifiziert (Detail-Karte Vollbild-Knopf da → öffnet formatfüllend mit Pin/Zoom → schließt zurück an
  ihren Platz).**
  JC: „die Karte auf der Fangdetailseite sollte Vollbild haben (alle Karten)." Detail- (`dMap`) und
  Form-Karte (`fMap`) liefen über eigene Instanzen ohne den Knopf, den Übersicht/Fangliste schon hatten.
  Neu: `_mapRef` um `d`/`f` erweitert, `attachFsBtn()` spiegelt die Instanz (für `invalidateSize`) und
  hängt den bestehenden `mapFsButton` **einmal** an. `mapFsToggle` ist generisch (`kind='d'/'f'`).

- **✅ `v 2026-07-19.10` (20. Juli, Commit `b3df50b`) — Wassertemp-Label → „Wasser". LIVE, verifiziert.**
  JC: „am Wasser Temperatur sollte nur Wasser sagen, genau wie Luft." Label „Wassertemperatur (°C)" →
  **„Wasser"** (parallel zum Wetter-Tile „Luft"), °C in den Platzhalter (de/en/nl). Greift auch auf die
  Detail-Zeile (`t('watertemp')`).

- **✅ `v 2026-07-19.9` (20. Juli, Commit `022d0ab`) — Solo-Angler: als geloggt anzeigen, keine
  Fremd-Auswahl. LIVE, verifiziert (Solo: Feld sichtbar, statisch, Label „JC", kein `__other__`).**
  JC: In Solo ließ sich über „Andere…" ein fremder Name als Angler eintragen — unsinnig, im eigenen
  Logbuch bist du der Angler. Jetzt zeigt das Feld **dich** (nicht versteckt), ist aber `selfield.static`
  (nicht antippbar, kein Chevron), ohne Freitext. Gleiche Behandlung, wenn ein Kontext nur ein Mitglied
  hat; ab dem zweiten Mitglied wieder echte Auswahl. (Deckt Review-Punkt F3 ab.)

- **✅ `v 2026-07-19.8` (20. Juli, Commit `5dc6eb7`) — Angler-Schnittmenge + Boot/Schlepp-Zeile
  korrigiert. LIVE, verifiziert (nur Butter→JC+René · nur Ijburg→JC · beide→JC; ff-boattroll eigene Zeile).**
  **#2 Nachschärfung:** Angler-Liste = **Schnittmenge** statt Vereinigung — bei mehreren Zielen nur, wer
  in ALLEN Mitglied ist. René war fälschlich an einen Ijburg-Fang hängbar (er ist nur in „Butter").
  Bei einem Ziel unverändert (= dessen Mitglieder). **#5 Layout-Fix:** der `frow2`-Wrapper aus 19.6 lag
  versehentlich INNERHALB der Rute/Rolle-`.row` → alle vier in einer Zeile; `.row` nach Rolle geschlossen,
  Boot+Schlepp in eigener `frow2`.

- **✅ `v 2026-07-19.7` (20. Juli, Commit `0a3d0bc`) — „Zuletzt ausgewählt" verfeinert. LIVE, verifiziert
  (BUILD 19.7; Chip-Zeile aus, altes Menü an, f-location-Typeahead da, MRU bei 4 Kontexten ausgeblendet).**
  JC-Feedback zu 19.6/#6: (1) MRU wird **erst beim erfolgreichen Speichern** gemerkt, nicht beim
  Antippen (sprang sonst sofort nach oben). (2) „Zuletzt ausgewählt" nur bei **>6 Kontexten** (Schwelle
  der Suchleiste) — bei wenigen Gruppen war es Dopplung. (3) Deckel: 6 gespeichert, 4 gezeigt.
  *(Deploy-Notiz: erster Commit-Klick fiel auf GitHubs „Processing…" → „Commit failed"; requestSubmit
  erst nach fertiger Datei-Verarbeitung feuern.)*

- **✅ `v 2026-07-19.6` (20. Juli, Commit `b67477a`) — Log-Formular: 4 Fixes aus JCs Testrunde.
  DEPLOYED (Commit bestätigt), LIVE NOCH UNGEPRÜFT — Chrome-Extension sprang direkt nach dem Commit ab,
  der JS-Live-Check konnte nicht laufen. Beim nächsten Mal am Gerät/über die Extension nachziehen.**
  **1)** Versteckte Felder werden beim Speichern **geleert** (JCs Regel): Trolling weg → Schleppgeschw.
  wird `null`, ungültiger Wert blockiert nicht mehr. Nur versteckte INPUTs, Selects unberührt.
  **4)** Gewässer/Platz jetzt Merk-Typeahead — `kind:'water'` war längst in `ITEM_KIND_OF` verdrahtet
  und wurde schon gespeichert, nur nie ans Feld gehängt (`TA_CFG['f-location']` ergänzt).
  **5)** Boot + Schleppgeschw. in einer Zeile (`.frow2` flex); ist Trolling versteckt, nimmt Boot volle
  Breite (aus dem Flex gefallen).
  **6)** „Eintragen in" Chip-Zeile **zurückgebaut aufs alte Auswahl-Menü** — die Chips verschluckten
  Taps (500-ms-Timer-Rebuild = die eigentliche Ursache von „René nicht wählbar", #2) und skalieren nicht
  auf viele Gruppen. Neu: **„Zuletzt ausgewählt"** oben im Auswahl-Blatt (`bf_area_mru`). Live-Hero +
  Sprung-Leiste aus Stufe 1 bleiben.
  **Offen:** #3 volle Gewässer-Kategorie (Wassertiefe/Grund/Bewuchs — **DB-Migration**, eigener Bau).

- **✅ `v 2026-07-19.2`–`.5` (20. Juli, Commits `0b94f41`→`51809c4`) — #15 Stufe 2a: Abschnitts-Parität
  + zwei Wächter-Fixes. LIVE, END-ZU-END am lebenden Objekt verifiziert.**
  **Stufe 2a:** Formular-Reihenfolge = Detailseite (Basis · Fang · TECHNIK · WETTER · ORT · Notizen),
  Überschriften auf Detail-Vokabular — alles in der geflaggten uf-Schicht, `bf_unified='off'` stellt zurück.
  **Zwei Lehren aus den Wächter-Fixes:** (1) `state.auth==='supabase'` griff live nie; (2) tiefer:
  `state` ist `const` im Script-Scope — **`window.state` existiert nicht**, jeder `window.state &&`-Wächter
  ist immer falsch. Merken für jede weitere additive Schicht. (.4-Build kam bei Vercel nie an → .5 als
  Re-Trigger, inhaltsgleich.)
  **Live-Klick-Test:** Chip „Butter bei die Mutti!" → Ziel umgeschaltet ✓ → **Angler-Liste zeigt
  „JC (ich)" + „René"** — der René-Fix (.21) ist damit auch über den echten UI-Pfad bestätigt.
  **Offen aus #15 (Spec Punkt 6, eigener Durchgang im Speicherpfad):** Angler-Umhängen beim Edit ·
  tote `editId`-Zweige · Foto-Sortier-Bug (braucht weiter JCs Beschreibung).

- **✅ `v 2026-07-19.1` (19. Juli, Commit `f775abb`) — #15 UNIFIED FORM, STUFE 1 (Flag `bf_unified`).
  LIVE, verifiziert (BUILD 19.1, Hero/Chips/Jump im Auslieferungsstand).**
  Nach `mockup-unified-form.html` (JC: „bau das mal so"). Additive Anzeige-Schicht: **Live-Hero**
  (Foto→Hintergrund, Art→Überschrift, Länge/Gewicht→Chips beim Tippen) · **„Eintragen in" als
  Chip-Zeile** (Persönlich + Kontexte, mehrfach, nutzt bestehendes `toggleArea`; alter Selector
  versteckt) · **Sprung-Leiste** über den Abschnitten. Abschaltbar: `localStorage bf_unified='off'`.
  **Stufe 2 offen (Tracker-Spec Punkte 4+6):** Abschnitts-Parität (DOM-Reorder) · Angler-Umhängen
  beim Edit · tote `editId`-Zweige. Keine Feld-IDs/Speicherpfad/formTargets angefasst.

- **✅ `v 2026-07-18.23` (19. Juli, Commit `5e48dc9`) — EIN Hinzufügen-Knopf (Variante a). LIVE.**
  Zwei Geist-Zeilen → eine („Verein oder Gruppe hinzufügen", de/en/nl), Vorschritt im `ctxadd-modal`,
  FAB unverändert. Führt Roadmap-#18-B′ + Review H3 zusammen; Einstellungs-Selektor bleibt offen.

- **✅ `v 2026-07-18.22` (19. Juli früh, Commit `d46c8ad`) — Leaflet-Zoom zurück auf WEISS (JC: „sieht
  scheisse aus … wie vorher"). LIVE, verifiziert.** S4 aus dem Review revidiert: Die dunklen Zoom-Knöpfe
  waren der neue Fremdkörper neben den bewusst weißen Karten-Knöpfen (Vollbild/Standort/Alle Fänge) —
  weiß ist die Karten-Sprache der App. Attribution-Override ebenfalls zurück. Der dunkle
  Detail-Karten-Schleier (D1) **bleibt**. Merksatz für Review-Fixes: Erst die bestehende
  Design-Sprache prüfen, dann „vereinheitlichen" — S4 hatte in die falsche Richtung vereinheitlicht.

- **✅ `v 2026-07-18.21` (19. Juli früh, Commit `2098934`) — René-Fix 2. Anlauf + Rückfrage raus. LIVE,
  diesmal AM LEBENDEN OBJEKT verifiziert: `loadCtxMembers()` mit Butter-Ziel liefert `["René","JC"]`.**
  Ursache des Fehlschlags von .20: Der `ctxIsDb()`-Wächter brach ab, BEVOR die formTargets-Logik lief —
  genau beim Loggen von „Persönlich" aus (kein Verein offen). Wächter greift jetzt nur noch, wenn es
  weder DB-Ziele noch offenen Kontext gibt. **Lehre:** .20 hatte nur den Datenpfad verifiziert, nicht
  den Aufrufpfad. Plausibilitäts-Rückfrage (.20 Punkt 4) auf JCs Ansage wieder entfernt.

- **✅ `v 2026-07-18.20` (18. Juli, Commit `60ac1ca`) — Fix-Batch aus Tracker + Review. LIVE, verifiziert
  (BUILD .20, alle 4 Änderungen im Auslieferungsstand nachgewiesen, `toast` nur noch 1×).**
  **1) René-Bug:** `loadCtxMembers()` lädt über alle `state.formTargets`, die echte DB-Kontexte sind
  (`.in` statt `.eq`); ohne Formular-Ziele wie bisher `state.club` — andere Aufrufer unverändert.
  **2) toast()-Doppeldeklaration** entfernt (erste Fassung; verhaltensneutral, Grabstein im Code).
  **3) Querformat:** Spot-Sheet `min(560px,82vw)` → `min(420px,50vw)` — Karte bleibt sichtbar.
  *Offen daraus:* Pan-Offset, damit der Spot in der rechten Hälfte zentriert (Tracker bleibt).
  **4) Plausibilitäts-Rückfrage** beim Speichern (>250 cm / >150 kg → confirm, kein Block, de/en).
  **Deploy-Lernen:** Der „Commit changes"-Klick verpuffte 2× trotz hover+Koordinate — was zuverlässig
  war: `form.requestSubmit(btn)` per JS. In CLAUDE.md nachgetragen.
  **Am Gerät zu testen (JC):** René in der Angler-Liste (Gruppe als Ziel wählen!) · Querformat-Sheet ·
  Rückfrage bei 300 cm · nichts Neues beim Toast.

- **✅ `v 2026-07-18.19` (18. Juli, Commit `f5de660`) — Review-Fixes + App-Icon „Nur die Laterne".
  LIVE, verifiziert (BUILD .19, `?v=13`, d-map-Tint + fmtNum + Stern-Copy im Auslieferungsstand).**
  Aus `REVIEW-APP-2026-07-18.md` gebaut: **D1** Detail-Karte dunkel (`#d-map::after`, multiply,
  z-index 350 — Marker behalten Farbe) · **S4** Leaflet-Zoom + Attribution im Theme ·
  **S3/D2** Fisch-Platzhalter teal auf `--surface-2` · **L3** `rec-strip`-Scrollbalken versteckt ·
  **F1** Datumsfeld läuft nicht mehr über · **F2** photoHint de/en/nl ohne Stern ·
  **S1** `fmtNum()` Tausendertrennung in `fmtLen`/`fmtWeight` · **E1** Avatar-Badges 30 px.
  **ICON:** Award-Konzept ① „Nur die Laterne" (JCs `3434.png` im COMIC-Stil) ersetzt den Vollfisch —
  der volle Butler bleibt Maskottchen (Splash/App), das Icon ist sein Licht.
  **Bewusst offen (Design/Entscheidung):** Tagline · Butler-Empty-States · FAB-Desktop ·
  Angler-Redundanz (L1/F3) · Plausibilitätsfenster (L2) — stehen im Review-Doc.
  **Am Gerät zu prüfen:** Detail-Karte (Tint-Optik), Formular-Datumsfeld, neue Icons nach
  PWA-Neuinstallation.

- **✅ `v 2026-07-18.18` (18. Juli, Commit `bab5c08`) — App-Icon: Maskottchen im Flat-Monoline-Stil
  („COMIC"). LIVE, verifiziert (BUILD .18, icon-512 = 132 kB, `?v=12`).**
  Ergebnis von JCs KI-Runde mit den Stil-Referenzen aus `Downloads/butlerfish-referenzen/` (flat
  geometric, dicke Navy-Monoline, drei Farben). Quelle `COMIC.png` (3950 px), Artwork-BG `#001429`
  übernommen, kein Freistellen (Navy-Linien zu nah an BG-Farbe — Zuschnitt direkt aus dem Original).
  Bekannter Makel, JCs Ansage „so lassen": Diamant-Laterne berührt die Kopfsilhouette. Löst .17 ab.

- **✅ `v 2026-07-18.17` (18. Juli, Commit `28b25c0`) — App-Icon: Canva-Form, Strichdicke +16, dunkel +
  Bernstein. LIVE, verifiziert (BUILD .17, icon-512 = 44 kB, `?v=11`).**
  JCs Wahl nach `mockup-strichdicke-original.html`. Kern-Erkenntnis des Tages: Die Canva-Vektorisierung
  hatte die beste **Geometrie**, verlor aber klein wegen zu dünner Innenlinien; die Handzeichnung gewann
  klein nur durch **Strichdicke**. Lösung: Rillen morphologisch verbreitert (Kanäle = BG minus
  Opening(81), +16 px dilatiert, Außenkontur geschützt) — Canva-Form mit Handzeichnungs-Gewicht.
  Quelle: `canva_orig_thick_t2.png` (aus `letztertest.png`). Varianten +8/+26, Fliegen-Blau-Fassung
  (`canva_bowtie_fisch.png`, Wings blau + Knoten gefüllt + Trennlinien — gebaut, nicht gewählt) und alle
  Mockups liegen im Projektordner. Löst .16 ab.

- **✅ `v 2026-07-18.16` (18. Juli, Commit `589018b`) — App-Icon: Handzeichnung, dunkel + Bernstein.
  Abgelöst von .17.**
  JCs neuer Entwurf (gelb-Upload, freigestellt), Farbe nach Test in `mockup-farbtest.html`:
  Hintergrund `#021B28`, Fisch `#EB9E18` — dieselbe Farbe wie die Laterne im Rebrand, der Fisch wird
  zu seiner eigenen Laterne. Alle 11 Icons neu. **Bewusst nicht angefasst:** `site.webmanifest`
  background/theme (`#0D5164`, Splash) und `index.html` theme-color (`#03354B`, Topbar) — eigene
  Entscheidung, nicht Teil dieses Wechsels. Löst v1 (.15) ab.

- **✅ `v 2026-07-18.15` (18. Juli, Commit `5269dc3`) — App-Icon: v1 (finaltest). Abgelöst von .16.**
  JCs eigener Entwurf: gefüllte weiße Silhouette mit Angler-Bogen zur Diamant-Laterne **mit Strahlen**
  (das Leuchten ist zurück), voller Butler. Alle 11 Icons neu (Padding gerundet 8 % / Favicons 5 % /
  maskable 18 %). Ersetzt t2-Kamm. **Wichtig fürs nächste Mal:** In `finaltest.png` sind die Rillen
  **teal gemalte Pixel** (Alpha voll), nicht transparent — Alpha-only-Verarbeitung schluckt sie.
  Varianten v2/v3 + Montage v4 (v2-Körper + v3-Auge + v1-Laterne) liegen in `mockup-logo-final.html`,
  Quellen in `iconfinal/` — Entscheidung offen bei JC.

- **✅ `v 2026-07-18.14` (18. Juli, Commit `5bb9b22`) — die drei Kleinen aus der Feedback-Mail. LIVE,
  an der ausgelieferten Datei verifiziert (BUILD .14, `maxZoom:13` = 0 Treffer, `noCrown` drin).**
  1. **Scroll-Platz unter dem FAB wieder raus** (JC: „Nimm das scrolling unter Button wieder raus",
     Rückfrage: ganz). `body.has-fab .scroll{padding-bottom:96px…}` gelöscht — die Regel war erst einen
     Tag alt. Grabstein-Kommentar an der Stelle (Z. ~214), damit sie nicht wiederkommt. Die
     `has-fab`-Klasse selbst bleibt (steuert das FAB-Display mit, „eine Quelle, zwei Wirkungen").
  2. **„Alle Fänge": eine Zoomstufe weiter raus** (JC). `maxZoom 13 → 12` an allen drei Stellen
     (Knopf-`flyToBounds`, dessen `fitBounds`-Fallback, Erst-Aufbau) — Knopf und Reload zeigen denselben
     Ausschnitt. Einzelfang analog `12 → 11`. `maxZoom:13` kommt im Code nicht mehr vor (geprüft).
  3. **Krone runter von den „Deine Rekorde"-Kacheln** (JC: „Die Überschrift hast schon eine").
     `badgeWrap(thumb, c, noCrown)` — nur die persönliche Leiste (`kind==='stats'`) setzt das Flag.
     Fangliste und Vereins-Podium unverändert: dort trägt die Krone Information (Gruppenrekord =
     zugleich eigenes PB).
  Alle Script-Blöcke `node --check` sauber. Deploy auf JCs Ansage.

- **🟡 `v 2026-07-18.3` (18. Juli) — Cluster nach PIXELN statt Koordinaten. Korrektur von `.2`, eine Stunde alt.**
  **Der Bau von `.2` war deployed und griff bei JCs Daten NIE.** Ursache: mein Fehler, und er ist lehrreich.
  ```
  Forelle      51.127144…, 7.380641…
  Flusskrebs   51.127208…, 7.380688…   → 8 Meter auseinander
  ```
  Ich hatte die Koordinaten vorhin auf **drei** Nachkommastellen ausgegeben (`51.127 / 51.127`) — das
  sind **±55 m** Unschärfe — und daraus *„exakt dieselbe Koordinate"* geschlossen. Auf diese
  **Rundungs-Illusion** habe ich die ganze Spezifikation gestützt, samt der Behauptung „2 von 4 liegen
  exakt aufeinander". Der `toFixed(5)`-Schlüssel (≈1 m) trennte die zwei sauber — er tat genau, was ich
  ihm gesagt hatte. Gesagt hatte ich Unsinn.
  **Das Problem war trotzdem echt, nur die Ursache eine andere:** 8 m sind bei Zoom 13 **ein Pixel**.
  **Übereinanderliegen ist keine Eigenschaft der Koordinate, sondern des ZOOMS.**
  - **Jetzt:** Gruppieren nach **Pixel-Abstand** (`latLngToLayerPoint`, < 44 px = berühren sich, also
    ist keins mehr sicher zu treffen), **neu gerechnet bei jedem `zoomend`**. Ein Cluster löst sich beim
    Reinzoomen von selbst auf — er ist keine Eigenschaft der Fänge, sondern des Maßstabs.
  - **Damit ist es wieder JCs ursprünglicher Gedanke.** Mein Einwand *„Zoom misst Weite, nicht Gedränge"*
    war falsch: Auf dem **Bildschirm** ist der Zoom genau das Maß fürs Gedränge. JC hatte von Anfang an
    recht, ich habe es ihm ausgeredet und musste über einen kaputten Deploy zurückfinden.
  - **Umbau:** `ensureCatchMap` gibt das Zeichnen an **`drawCatchMarkers(kind)`** ab; `_mapRef[kind].pts`
    hält die Fänge. Ohne die Trennung müsste beim Zoomen alles neu laufen — und `fitBounds` würfe die
    Ansicht bei jedem Zoom zurück.
  - **An JCs echten Koordinaten durchgerechnet** (Web-Mercator nachgebaut):
    | Zoom | Forelle ↔ Flusskrebs | Gruppen |
    |---|---|---|
    | 6 | 0 px → Cluster | auch Hecht+President (9,4 km!) sind einer — richtig, sie liegen auf einem Pixel |
    | 10–13 | 0–1 px → Cluster | NL-Fänge getrennt |
    | 18 | 21 px → noch Cluster | trennt sich ab 19 |
  - **Lehre fürs Protokoll:** Eine gerundete Ausgabe ist kein Datum. Ich habe drei Stellen gelesen und
    fünf geglaubt — dieselbe Sorte Fehler wie „Zahlen melden grün, während die Seite kaputt ist", nur
    andersherum: Hier meldete die Zahl etwas, das es nie gab.

- **🟡 `v 2026-07-18.2` (18. Juli) — SPOT-SHEET: Mehrere Fänge auf derselben Koordinate.**
  JC hat entdeckt, dass man von der Karte Fänge auswählen kann — *„wie könnten wir das noch klarer
  machen?"* Daraus wurde ein Bau, und **der Weg dahin gehört ins Protokoll, weil jeder Schritt von JC
  kam und jeder eine offene Frage GELÖSCHT hat, statt sie zu beantworten:**
  1. **Punkt → Foto beim Reinzoomen** (JC). Räumte meinen Einwand ab, Foto-Pins kollidierten mit dem
     Streubild: Der **Zoom ist die Absichtserklärung** — wer rauszoomt will das Muster, wer reinzoomt
     *diesen* Fang. Mein Beitrag war nur die Schraube: nicht am Zoom festmachen, sondern an der **Anzahl
     im Sichtfeld** (Zoom misst Weite, nicht Gedränge). *„dein vorschlag ist besser."*
  2. **Münzstapel** (JC) → verworfen: Ein Stapel behauptet immer eine **Rangfolge** („wer liegt oben?").
  3. **Cluster + Ring** (JC) → löschte die Rangfolge-Frage (ein Ring hat keine erste Position) und schlug
     *spiderfy*, das immer aussieht, als hätte die Karte einen Fehler. Verworfen wegen meines Einwands:
     **ein Ring hat keine Leserichtung** — bei 5 egal, bei 20 sucht man im Kreis (und er misst dann
     388 px, füllt ein 390-px-Handy randlos). Er hätte eine **Schwelle** gebraucht.
  4. **Dunkler Grund + Hero + waagerechter Streifen** (JC) → **löschte die Schwelle.** Der Streifen sieht
     bei 2 aus wie bei 24, er wird nur länger. Meine Frage „ab wann kein Ring mehr?" stellt sich nicht.
     *„bau es genau so."*
  - **Der Fall ist NICHT selten — das hatte ich unterschätzt:** 2 von JCs 4 Fängen mit Geodaten liegen
    **exakt** aufeinander. Angler haben eine Hausstrecke, der Pin landet am selben See. Je länger die
    Nutzung, desto dicker der Stapel. Ich hatte es erst als Härtefall abgetan; es ist der Regelfall.
  - **Gebaut:** Gruppieren auf 5 Nachkommastellen (≈1 m — feiner ist GPS-Rauschen, gröber würfe
    Nachbar-Spots zusammen) · 1 Fang → Punkt wie bisher · ≥2 → Cluster mit **nur der Zahl** (JC) ·
    Antippen → **zentrieren** (JC), abdunkeln, Sheet hoch · Hero 210 px + Streifen (`scroll-snap`) ·
    ohne Foto der **Fisch** (JC: „fisch 100%") · Tap auf Hero öffnet den Fang.
  - **DREI FALLEN, beim Bauen erschlagen statt später:**
    1. **Zentrieren hätte das Sheet sofort wieder geschlossen** — es schließt bei Kartenbewegung, und
       Zentrieren *ist* eine. `_spotSelbstBewegt` trennt eigene von Nutzerbewegung. **Dieselbe Sorte
       Fehler wie die zwei Schreiber auf `share-btn` und der Log-Catch-FAB (`fc358c0`)** — zwei Absender
       auf einer Leitung, heute zum dritten Mal.
    2. **Der Wächter sitzt in `go()`**, nicht nur im `popstate`-Handler: Der fängt die Wischgeste, aber
       kein In-App-Zurück. **Genau daran ist gestern das Vollbild gescheitert** (`fc358c0`).
    3. **Sheet VOR Vollbild** bei Wischgeste und Escape — es liegt darüber (z-index 1210), also ist es
       die oberste Ebene. *Eine Geste macht genau eine Ebene auf.*
  - **Markup am `<body>`, außerhalb `#app`** — derselbe Grund wie bei der Vollbildkarte: Ein Vorfahr mit
    `-webkit-overflow-scrolling:touch` bildet auf iOS einen containing block für `position:fixed`.
  - **NICHT belegt:** Am Gerät nichts angefasst — die Chrome-Extension lädt keine `file://`-Seiten, und
    Chrome ist für Klicks gesperrt. Belegt sind JS-Syntax und Aufrufkette, mehr nicht. Vorlage:
    `mockup-karte-spot-hero.html` (verworfen, aber aufgehoben: `mockup-karte-cluster-ring.html`).
  - **Noch NICHT gebaut:** Punkt → Foto nach Anzahl im Sichtfeld (Schritt 1 oben) — steht als entschieden
    auf der Liste, JC muss die Schwelle noch am Regler festlegen.

- **🟡 `v 2026-07-18.1` (18. Juli) — Loader-Farbe (JCs Video vermessen) · Fotos ziehen ging nicht: das CSS fehlte.**
  - **🐛 Obere Leiste wird später dunkel — AN JCs VIDEO FRAME FÜR FRAME VERMESSEN.**
    JC nach dem `theme-color`-Fix: *„immer noch nicht ganz."* Er hatte recht; mein Fix war trotzdem
    richtig, er hat nur **einen anderen** Fehler behoben.
    ```
    ~5,30s  hide gesetzt → Blende startet
     5,40 → 5,88s  Inhalt wird dunkel   (480 ms = die .5s-Blende)
     5,88s         Loader ist opacity:0 — aber NOCH IM DOM
     5,90 → 6,00s  obere Zone kippt     (100 ms, ~500 ms SPÄTER)
    ```
    **`remove()` läuft 700 ms nach `hide`, also bei ~6,00s — exakt dann kippt die obere Zone.** Sie hing
    also nicht an der Blende, sondern am `remove()`: iOS färbt den Statusleisten-Bereich erst neu, wenn
    das Element aus dem DOM fliegt.
    **Warum das gestern nicht auffindbar war:** `#0D5164` ist **beides** — die alte `theme-color` *und*
    die Loader-Farbe. Am Pixel nicht unterscheidbar.
    **Fix (JC entschieden): Loader auf `#03354B`.** Am `remove()`-Timing zu drehen wäre Symptomkur — der
    Wechsel käme nur früher. Jetzt sind Loader und App **eine Farbe**, der Wechsel ist strukturell weg.
    - **`#03354B` fest, NICHT `var(--surface)`:** Im hellen Theme wäre `--surface` weiß — und das Lockup
      ist cremeweiße Schrift. Weiß auf Weiß. Der Splash war immer themenunabhängig dunkel, das bleibt.
    - **Nebenbei belegt:** Die Versionsnummer hat beim ersten Einsatz getan, wofür sie da ist —
      `v 2026-07-17.5` ist im Video lesbar, JC hatte also den richtigen Stand.
  - **🐛 „Fotos ziehen funktioniert nicht" (JC) — mein Fehler von gestern: die halbe Umstellung.**
    Ich habe `makeSortable` für Raster verallgemeinert und **das CSS vergessen**. Alle vier Regeln hingen
    an `.club`:
    ```css
    .club.sortable{touch-action:none; …}        ← griff bei .photo-cell NICHT
    .club.drag-active{…}                        ← keine Rückmeldung
    .sorting .club:not(.drag-active){…}         ← andere dimmten nicht
    ```
    **`touch-action:none` IST die Geste, nicht ihre Zierde:** Ohne das entscheidet iOS beim ersten
    Fingerzug auf „scrollen", und `preventDefault()` in `pointermove` kommt zu spät. Es passiert dann
    schlicht nichts — genau JCs Befund.
    **Am Live-Stand belegt** (nicht geraten): Zelle bekommt `.sortable` ✓, aber `touch-action: auto` ✗,
    `drag-active` bewirkt nichts ✗, `.sorting` dimmt nicht ✗. Drei Symptome, eine Ursache.
    Jetzt hängen die Regeln an `.sortable` — das setzt `makeSortable` auf **jede** Kachel, Vereine wie
    Fotos erben also dieselbe Geste. Der alte Vereins-Aufruf ist unverändert.
    - **Warum meine Prüfung das durchgelassen hat:** Die Node-Geometrie rechnet Rechtecke und **kennt kein
      CSS**. Wieder der Fall aus den Arbeitsregeln — „Zahlen haben grün gemeldet, während die Seite
      sichtbar kaputt war". Eine bestandene Rechnung ist kein bestandener Test.

- **🟡 `v 2026-07-17.5` (17. Juli) — Fünf Bauten: Topbar-Farbe · Pflichtwert beim Verein-Tap · Fotos ziehen · altes Formular raus · Versionsnummer.**
  - **🐛 Topbar färbt sich erst spät dunkelblau** (JC, mit Video). **Meine erste Diagnose war falsch, und
    ich hätte fast einen Fix für ein gelöstes Problem gebaut:** Ich hatte behauptet, `data-theme` werde
    zu spät gesetzt — im `<head>` steht dafür längst ein Inline-Script. Ich hatte nur `applyTheme()`
    gegrept und den `<head>` nie angesehen.
    **Die echte Ursache:** `theme-color` war `#0D5164` (= `--surface-2`), die Topbar ist aber `--surface`
    (`#03354B`) und reicht per `padding-top:env(safe-area-inset-top)` **unter** die Statusleiste. Der
    Streifen startete also mittelblau und wurde beim ersten Paint dunkelblau. **Kein Timing-Problem,
    schlicht die falsche Farbe.** Jetzt folgt `theme-color` der Topbar — im `<head>` gesetzt (erster
    Frame) und in `applyTheme()` nachgezogen (Umschalten im Menü; zwei `<meta media=…>` wären falsch,
    die folgen dem *System*, nicht der Wahl).
    - **Zweiter Fehler, beim Nachsehen gefunden, nicht gemeldet:** `[data-theme="dark"] html` **konnte
      nie greifen** — `data-theme` sitzt auf `html`, ein `html`-Nachfahre existiert nicht. Gemessen:
      `html` blieb im Dunkeln `rgb(244,239,226)`. Das ist nicht kosmetisch — hat `html` einen Hintergrund,
      wird **der** aufs Canvas übertragen, also kam beim Überdehnen Cremeweiß durch. Jetzt `html[data-theme="dark"]`.
    - **Offen für JC:** Der **Ladescreen** ist `#0D5164` — daher kam die alte `theme-color`. Der Sprung
      Loader → App bleibt also, nur nicht mehr in der Statusleiste. Siehe `BUGS-AND-FEEDBACK.md`.
  - **🔧 Detail-Edit: Der Tap auf einen Verein fragt nach dem Pflichtwert** (JC entschieden).
    Vorher schrieb `detailToggleArea()` im Moment des Antippens direkt in die DB — der Verein war drin,
    bevor ein Dialog aufgehen konnte. Jetzt: prüfen → fragen → **vormerken** → nach dem Ausfüllen ist der
    Verein drin (`_pendingArea`), ohne dass man nochmal aufs Sheet muss.
    - **Kein eigener Eingabe-Dialog:** Pflicht kann *jedes* Feld sein — Zahl, Text, Auswahl, Pin, Fotos.
      Ein Dialog müsste jeden Typ nachbauen, den das Inline-Edit längst hat. Also `_focusField` dorthin.
    - **`catchHasValue()`** als Gegenstück zu `fieldHasValue()` (das liest die *Formularfelder*; auf der
      Detailseite ist der Fang ein *Objekt*). **Die Falle dabei:** `released` ist ein Boolean —
      `!c.released` wäre falsch gewesen, „entnommen = false" **ist** eine Antwort. An echten Daten belegt:
      4 von 7 Fängen stehen auf `false` und hätten fälschlich als „fehlt" gegolten.
    - Geprüft (Live-Daten, ASV fordert `released`): fehlt → fordert · `false` → schweigt · `true` →
      schweigt · Gruppe ohne Regel → schweigt.
    - **`data-k` an jeder Feldzeile:** Vorher war eine Zeile nicht adressierbar (Inline-Felder trugen
      `data-key` am `<input>`, Auswahl-Zeilen gar nichts — ihr Schlüssel stand im `onclick`-Text).
  - **🔧 Fotos umsortieren per Ziehen** (JC: *„verhalten sollte ähnlich dem umsortieren der gruppen und
    vereinslisten sein"*). **Genau das:** `makeSortable` wurde verallgemeinert statt kopiert — der alte
    Aufruf `makeSortable(el,'club')` bleibt Wort für Wort gültig, neu ist `{sel, grid, onDrop, tail}`.
    Der Unterschied ist eine Zeile Geometrie: senkrecht = „über der Mitte?" (unverändert), Raster =
    nächster Nachbar nach Abstand (bei drei Spalten ist „über der Mitte" sinnlos).
    - **Die Falle:** Die Knöpfe tragen ihren Index **im `onclick`** (`removeFormPhoto(2)`). Wer nur das
      DOM sortiert, hat Knöpfe, die aufs falsche Bild zeigen — „Löschen" träfe ein anderes Foto. Deshalb
      neue Reihenfolge über `data-i` lesen, `state.editPhotos` umbauen, **neu rendern**.
    - **Speichert bewusst nicht selbst** — wie `setFormCover` auch nicht. Es schreiben die zwei Stellen,
      die es ohnehin tun: `persistDetailPhotos()` (zieht `crops`/`photoPaths` mit — ein eigener Schreibweg
      hätte jeden Zuschnitt aufs falsche Bild zeigen lassen) und `saveCatch`.
    - Geometrie in Node durchgerechnet, 3×2-Raster: Foto 5 nach vorn → `5,0,1,2,3,4`. Platz 1 ist das
      Titelbild — Ziehen an den Anfang setzt es also, ohne Erklärung.
  - **🔧 Altes Bearbeiten-Formular: `openEdit` (47 Zeilen) + `editCurrentCatch` gelöscht** (JC: *„can go"*).
    **Beide waren bereits tot:** `editCurrentCatch` rief niemand — kein Code, kein `onclick`. Der Einstieg
    ist längst `toggleDetailEdit()`.
    **Nicht mitgenommen, bewusst:** `state.editId` und seine Zweige in `saveCatch`. Ohne `openEdit` wird
    es nie mehr gesetzt, die Zweige sind also auch tot — aber sie liegen mitten im **Speicherpfad**.
    Das nebenbei mitzunehmen hieße, die Funktion zu operieren, die Fänge schreibt. Steht auf der Liste.
  - **🔧 Versionsnummer im Ladescreen** (JC, 15. Juli). `BUILD` steht als **erste Zeile** des Scripts —
    wer deployt, stolpert darüber. Kein Commit-SHA: den vergibt GitHub erst *beim* Commit, er lässt sich
    in die Datei, die committet wird, gar nicht schreiben. Format `JJJJ-MM-TT.n`.
    Beantwortet die Frage, die uns heute schon Zeit gekostet hat — ich habe zweimal gegen einen alten
    Stand gemessen, ohne es zu merken.

- **🟡 (17. Juli) — Fremde Fänge lassen sich nicht mehr teilen · der Pfeil im „Zurückgesetzt"-Badge ist weg.**
  - **🐛 Ich konnte die Fänge anderer teilen** (JC: *„i should not be able to share the catches of
    others"* → *„ganz sperren"*). Der Teilen-Knopf fragte **nur nach dem Gerät, nicht nach dem Besitzer** —
    während die richtige Bedingung **zwei Zeilen darüber** stand:
    ```js
    edit-btn   → (_editable && !_detailEdit)   // _editable enthält _isMine
    share-btn  → (!_detailEdit && _shareOk)    // _shareOk = Touch + navigator.share. Kein _isMine.
    ```
    `shareCatch()` nahm danach `state.current` ungeprüft und verschickte Text **und Foto** — also Renés
    Bild aus JCs Telefon. **Warum es niemandem auffiel:** `_shareOk` verlangt `navigator.share`, das es am
    Schreibtisch nicht gibt — beim Testen war der Knopf immer aus.
    - **`_isMine`, nicht `_editable`:** `_editable` verlangt zusätzlich `detailFrom==='list'|'stats'` —
      damit hätte JC seinen **eigenen** Fang nicht mehr teilen können, wenn er ihn über die Vereinsseite
      öffnet.
    - **Zwei Riegel, und der zweite ist der eigentliche.** Den Knopf zu *verstecken* ist keine Sperre,
      sondern eine Bitte: `shareCatch()` hängt an einem globalen `onclick`. Die Prüfung sitzt jetzt auch
      **in der Funktion** — ein späterer zweiter Einstieg (Kontextmenü, Wischgeste, Teilen aus der Liste)
      erbt sie automatisch, die Sichtbarkeitsregel dagegen nicht.
    - **Ein zweiter Schreiber musste weg:** Eine Zeile im Init schaltete den Knopf beim **Start** pauschal
      sichtbar — ohne einen Fang zu kennen, also ohne zu wissen, wem er gehört. Sie hätte `_isMine` wieder
      aufgehoben. Dieselbe Falle wie beim Log-Catch-FAB (`fc358c0`). Der Knopf gehört jetzt allein
      `openDetailObj`; sein Ausgangszustand ist `display:none` im HTML.
    - **An echten Daten durchgerechnet:** Renés vier Fänge (inkl. „Mr. President") → `false`, JCs drei → `true`.
  - **🐛 Kein Pfeil mehr im „Zurückgesetzt"-Badge** (JC: *„zurueckgezetzt badge sollte keinen feil drin
    haben"*). Es war ein Rückwärtspfeil mit U-Turn-Bogen, und **der Kommentar daneben verteidigte ihn**:
    *„releasing is the statement, keeping is the neutral default"* — die Asymmetrie war Absicht, nicht
    Schlamperei. *(Ich hatte sie im Tracker erst als Befund verkauft, ohne den Kommentar gelesen zu haben.)*
    **Der Gedanke stimmt — nur sagt die Plakette ihn schon dreifach:** `.d-rel.rel` ist teal mit teal
    Rahmen, `.d-rel.kept` grau; dazu der Text. Der Pfeil war die **vierte** Kodierung derselben Aussage
    und das einzige, was aus der Zeile herausstach. Sein Vorgänger war ein Plus-Zeichen, das „hinzufügen"
    hieß — zwei Anläufe für ein Bild, das die Farbe längst malt. Deshalb keins statt ein drittes.
    `.d-rel svg` bleibt im CSS: kostet nichts, falls doch mal eins kommt.

- **🟡 (17. Juli) — Angler auf der Rekord-Karte: ERSATZLOS RAUS. Trennlinie über „Wetter" + leere Zeile.**
  - **Der Angler ist von der Rekord-Karte verschwunden.** JC: *„nimm den einfach komplett raus. die
    details wer gefangen hat stehen ja noch auf der catchseite."* Damit ist auch seine Ausgangsmeldung
    vom Vormittag erledigt (*„beim Klub kann ich gar nicht sehen, wer den gefangen hat"*) — die Antwort
    ist die Detailseite, nicht die Karte.
    **Drei Anläufe, und warum keiner ging** (damit es niemand ein viertes Mal versucht):
    - **Name unter dem Wert** (cc92d087) — eine Waise. Weil der Artname mal ein-, mal zweizeilig ist,
      saß er auf jeder Karte woanders. JC: *„ist da, sieht aber scheisse aus."*
    - **Gesicht am Bild, Variante A** (17fd666, aus `mockup-angler-rekordkarte.html` gewählt) — ging live
      und war trotzdem falsch. JC: *„photo sieht immer noch scheisse aus."*
    - **Der eigentliche Grund, nachgesehen statt geraten:** Renés Profilbild ist **256×256, quadratisch,
      `object-fit:cover 50%/50%`** — *kein* Zuschnittfehler. Das gespeicherte Bild **ist** ein
      Ganzkörperfoto. Bei 56 px (Kopf von „Meine Fänge") funktioniert dasselbe Bild; bei **24 px ist es
      ein Fleck**. Meine Begründung für A war *„ein Gesicht auf einem Foto ist der natürliche Ort"* —
      nur ist da **kein Gesicht**. Und was jemand als Profilbild hochlädt, können wir ihm nicht vorschreiben.
    - **Zweiter, unabhängiger Fehler:** Das Gesicht lag **3 px auf dem Artnamen** — auf allen fünf Karten
      gemessen. `bottom:-5px` ragt unter das Bild, der Artname beginnt 2 px darunter.
    - **Zwei eigene Irrtümer, die hierher gehören:** (1) Ich behauptete erst, es gäbe *gar keine* Fotos —
      ich hatte im ASV zwei Platzhalter-Karten gesehen und daraus geschlossen; bei „Butter bei die Mutti!"
      haben **vier von fünf** ein Foto. (2) JCs eigener Vorschlag (*„initialen … im normalen modus
      initialien, im querformat den ganzen namen"*) war besser als meiner. Ich hatte ihn mit „niemand muss
      Initialen pflegen" abgeräumt — sein Punkt war aber die **Lesbarkeit bei kleiner Größe**.
    - `anglerAvatarHTML()` **bleibt**: Die Byline der Detailseite benutzt sie, und dort ist der Avatar
      groß genug. `.rec-card` ist zurück auf 108 px, die Landscape-Query dafür ist weg.
      Belege: `mockup-angler-rekordkarte-2.html`.
  - **🐛 Trennlinie über „Wetter" ohne Kategorie darüber** (JC, Punkt 6, Anhang 2). In cc92d087 stand sie
    noch als *offen* — meine damalige Vermutung `.spec{border-bottom}` war falsch, und mein eigener
    Einwand dagegen war der Hinweis: *„die Linie auf JCs Bild ist eingerückt und zentriert."* Das ist
    exakt `width:75%; margin:0 auto` — die `::before`-Regel der Abschnitte selbst.
    - **Die Ursache:** Die Linie verschwand nur mit ihrem **eigenen** Abschnitt, **nie mit dem darüber**.
      Im Kachel-Modus blendet `d-rows-label` das Wort „Fang" aus (jedes Modul trägt seine eigene
      Überschrift), und ohne ausgefüllte Felder ist der Abschnitt leer. Dann stand „Wetter" ganz oben —
      und pausierte vor nichts.
    - **Nicht am Wetter repariert, sondern an der Regel:** Eine Pause braucht einen Vorgänger. Der erste
      sichtbare Abschnitt trägt keine Linie (`_detailRules()`). Das gilt jetzt auch für „Am Wasser",
      „Ort" und „Notizen", wenn die mal die ersten sind.
    - **Warum JS und nicht CSS:** Die Abschnitte werden über `style.display='none'` versteckt — **inline**.
      Darauf kann kein Selektor zugreifen, und „erstes sichtbares Geschwister" gibt es in CSS ohnehin
      nicht. `offsetParent` wäre die naheliegende Falle gewesen: Beim ersten Aufbau ist `#s-detail` noch
      gar nicht sichtbar, dann meldeten **alle** Abschnitte „unsichtbar" und jeder wäre der erste.
      Gefragt wird deshalb, was **gesetzt** wurde, nicht was gerade gemalt wird.
    - **🐛 Nachtrag zum eigenen Fix** (JC: *„Trennlinie ist weg, aber jetzt ist noch eine extra leere
      zeile zuviel"*). Ich hatte die Linie entfernt und ihren **Abstand stehen lassen**: `margin-top:22px`
      plus 20 px Polster von `.pad` = ~42 px Nichts über „WETTER". Die Linie hatte den Abstand
      gerechtfertigt — ohne sie ist er sinnlos. Jetzt fällt beides zusammen weg (`.no-rule{margin-top:0}`):
      Wer sich von nichts trennt, braucht weder Strich noch Lücke.
  - **Weiter offen:** *„when typing, the display of what is entered disappears"* — braucht das Video.

- **✅ DEPLOY `0f2ac54` (17. Juli) — 🐛 Roter Blitz beim Scrollen durch die Fangliste. Von JC bestätigt: „Rot ist weg."**
  JC: *„beim hochscrollen sehe ich rot. sieht fast so aus wie die buttons der dangerzone."* Er hatte den
  Verdächtigen fast beim Namen — es ist dieselbe Farbe (`--danger`), aber nicht die Danger-Zone.
  - **Was es wirklich ist:** Der **Löschgrund der Wisch-Geste** (`.swipe-bg`, rot, mit Mülleimer). Er liegt
    unter **jeder** Fang-Kachel und wartet auf einen Wisch. Beim Scrollen blitzt er durch, weil die Kachel
    darüber für ein paar Frames **nicht gemalt wird**.
  - **An JCs Aufnahme belegt:** V(Rot) am unteren Rand springt von ~110 auf **166**, 13 Frames in drei
    Schüben; der Frame zeigt eine **komplett rote Zeile mit Mülleimer**, wo eine Kachel stehen müsste.
    *(Erst am falschen Ende gemessen — oben, weil ich „hochscrollen" als Überdehnen oben gelesen hatte.
    JC: „unten, nicht oben." Der Frame-Durchschnitt fand ohnehin nichts: Ein Streifen geht darin unter.)*
  - **Der Verdächtige:** `will-change:transform` stand **fest auf jeder Kachel**. Das befördert jede Zeile
    dauerhaft auf eine eigene Compositing-Ebene — bei zwölf Fängen zwölf Ebenen, und WebKit lässt sie beim
    Momentum-Scrollen fallen. `will-change` ist als **vorübergehender** Hinweis gedacht, nicht als
    Dauerzustand. Jetzt wird es beim Ziehen gesetzt und danach entfernt.
  - **Zwei Riegel, weil ich die Ursache nicht beweisen kann:** Ein iOS-Compositing-Effekt lässt sich am
    Schreibtisch nicht nachstellen (iOS = WebKit, Desktop = Blink) — das ist genau die Falle vom
    Vormittag. Deshalb zusätzlich: **Der rote Grund wird nur noch gemalt, wenn wirklich gewischt wird**
    (`opacity:0` + `pointer-events:none`, scharf erst wenn feststeht, dass **waagerecht** gezogen wird).
    Was nicht gemalt wird, kann nicht durchblitzen — dieser Teil hält auch, wenn meine Diagnose danebenliegt.
  - **Kaskade im echten Browser geprüft**, neun Zustände: Ruhe → Rot `opacity:0`, nicht klickbar,
    `will-change:auto` · Ziehen → `opacity:1`, klickbar, `will-change:transform` · offen → Rot bleibt,
    Ebene fällt weg · zu → Rot weg. `sw-armed` wird erst **230 ms nach** dem Loslassen abgeräumt, sonst
    verschwände der Grund unter einer Kachel, die noch zurückgleitet.
  - **Offen:** Ob der Blitz weg ist, sieht nur JC am Gerät.

- **✅ DEPLOY `d30f374` (17. Juli) — „Meine Fänge" bekommt zwei Tabs (Variante D). Von JC bestätigt: „sieht super aus."**
  JCs eigener Vorschlag vom 14. Juli, und er löst **drei** Meldungen auf einmal: Karte zu prominent ·
  Knöpfe sitzen weird über dem ersten Fang · Batch-B-Punkt 15 („My-Catches-Button-Layout").
  Mockup mit **vier** Varianten: `mockup-meine-faenge-tabs.html`. **JC hat D gewählt.**
  - **D = Umschalter als zweite Zeile der KOPFZEILE**, bleibt beim Scrollen stehen. Bei A („Tabs im
    Inhalt") scrollte er weg — genau dann, wenn man ihn braucht: unten in der Liste, zurück zur Karte.
  - **Warum keine Bottom-Leiste** (JC hatte sie ausdrücklich sehen wollen): Zwei harte Gründe, keine
    Geschmacksfrage. **(1)** `.fab{position:fixed; bottom:18px}` — der FAB sitzt genau dort und ist auf
    diesem Screen sichtbar. Er hätte weichen müssen, aber nur hier, während er auf Home und im Verein
    unten bleibt: ein Knopf, der je nach Screen woanders sitzt. Im Mockup ist die Kollision rot
    umrandet zu sehen. **(2)** Eine Bottom-Leiste bedeutet „oberste Ebene der App" — dieser Screen hat
    einen Zurück-Pfeil, ist also keine. Für zwei Sichten auf dieselben Daten ist der segmentierte
    Umschalter das richtige Bauteil.
  - **Kein neues Bauteil:** `.seg` sind die Tabs aus den Einstellungen.
  - **`setScreenTab(screen, which)` ist bewusst ALLGEMEIN** — JC: *„wahrscheinlich sollten wir das selbe
    benutzen fuer gruppen und vereine?"* Richtig, aber der Vereins-Screen hat **weder Karte noch
    Rekord-Leiste** (nachgesehen: `s-list` = KPI-Zeile, Werkzeugleiste, Liste — sonst nichts). Seine
    „Übersicht" wäre eine leere Schublade. Wenn er den Inhalt hat, ruft er nur `setScreenTab('list',…)`.
  - **Der Tab wird NICHT gemerkt, aber auch nicht überall zurückgesetzt.** Reset steht **nur** in
    `openStats()` — dem Eingang von Home. Die anderen drei Wege zurück auf den Screen (nach dem Löschen
    eines Fangs, nach dem Filtern, Zurückwischen aus einem Fang) lassen den Tab stehen. Ein Reset in
    `go('stats')` hätte einen aus der Liste geworfen, sobald man einen Fang ansieht und zurückwischt.
  - **Leaflet misst beim Bauen** — in einem `display:none`-Kasten misst es 0 und die Karte bliebe grau.
    Deshalb `invalidateSize()` beim Zurückwechseln auf Übersicht; dieselbe Zeile steht schon bei
    fMap/dMap/sMap.
  - **Die Karte hat jetzt eine Überschrift** („Wo du fängst") — sie stand vorher kommentarlos im Fluss.
    Sie folgt der Karte: Hat kein Fang Geodaten, verschwindet beides.
  - **Offen:** am Gerät ungeprüft — ob der Umschalter wirklich klebt und die Karte nach dem Zurück-
    wechseln sauber misst, muss ich nach dem Deploy sehen.

- **✅ DEPLOY `788dd2c` (17. Juli) — Zahlen prüfen beim TIPPEN, nicht erst beim Speichern.**
  **Von JC am Gerät bestätigt: „getestet, klappt alles."** Mit echten `input`-Ereignissen im echten
  Formular gegengeprüft: „5,555" → rote Zeile beim **dritten** Anschlag, „2500" → bei der **vierten**
  Ziffer, „5,55" durchweg still.
  *Zweite Testfalle des Tages fürs Protokoll:* Mein erster Lauf gegen die Live-Seite meldete für alles
  „still" — sah aus wie ein kaputter Bau. In Wahrheit lief die **Seite** noch auf dem alten JS, weil ich
  sie geladen hatte, bevor Vercel fertig war (die Datei-Prüfung brauchte zwei Anläufe). **Regel: Nach
  einem Deploy die Seite neu laden, bevor man sie befragt** — die ausgelieferte Datei und die laufende
  Instanz sind zweierlei.
  JC direkt nach dem Deploy davor: *„Der Test triggered erst beim speichern, kann man das nicht mit
  eingabe machen?"* Berechtigt — beim Speichern ist das Feld längst verlassen, und die Sammelmeldung
  sitzt unten am Knopf, beim Tippen also oft außerhalb des Bildes.
  - **Jetzt:** eigene Fehlerzeile **direkt am Feld** (`.fld-err`) + roter Rahmen, live beim Tippen.
    Im Inline-Edit nur der rote Rahmen (in die schmale Spec-Zeile passt kein Text); den Grund nennt
    weiter der Toast beim Übernehmen.
  - **Der Haken waren die Zwischenstände:** Wer „5,5" tippt, kommt über „5," — keine gültige Zahl, aber
    auch kein Fehler, sondern jemand mitten im Wort. Deshalb wird **nur der „ist keine Zahl"-Vorwurf**
    zurückgehalten, solange die Eingabe unfertig aussieht („-", „5,"). Beim **Verlassen** des Feldes
    prüft es streng — dann ist niemand mehr mitten im Wort.
  - **🐛 Mein erster Versuch war falsch, der Test hat ihn gefangen.** Ich hatte
    `if(/^-?\d*[.,]?$/.test(s)) return null;` **vor** die Prüfung gesetzt — das verschluckt jede reine
    Ziffernfolge und damit genau die Fälle, um die es geht: **„2500" meldete beim Tippen nichts.**
    Bereich und Nachkommastellen sind auch mitten im Tippen schon eindeutig falsch; nur „unfertig" ist
    kein Urteil wert.
  - **Nebenbei gefixt:** `numProblem` verwarf „5," als *keine Zahl*. „5," **ist** fünf
    (`parseFloat('5.')===5`) — wer das Feld so verlässt, hat sich nicht vertippt, er ist fertig.
  - **Zeichen für Zeichen durchgespielt** (so, wie ein Mensch tippt): „5,5" und „5,55" durchweg still ·
    „5,555" meckert **genau bei der dritten Nachkommastelle** · „2500" **genau bei der vierten Ziffer** ·
    „41" bei der 41 · „40" still · „1208" (IGFA-Rekord) durchweg still · „abc" sofort · „-" beim Tippen
    still, beim Verlassen benannt.
  - **Zurückgesetzt beim Öffnen des Formulars** — `openForm` setzt `.value=''` direkt, und das löst kein
    `input`-Ereignis aus; ohne das stünde der Fehler vom letzten Fang im leeren Formular. Greift auch für
    `openEdit`, das `openForm` ruft.

- **✅ DEPLOY `56581da` (17. Juli) — Zahlen-Grenzen: hart ablehnen, aber laut. Und das Navigations-Log ist raus.**
  **An der ausgelieferten Fassung nachgemessen**, 18 Fälle, alle wie erwartet. Die Meldungen im Klartext:
  *„Gewicht: höchstens 2 Nachkommastellen."* · *„Länge: nur 0 bis 1000 cm."* · *„Länge: nur ganze Zahlen."* ·
  *„Wassertemperatur: nur 0 bis 40 °C."* · *„Gewicht: bitte eine Zahl eingeben."*
  `nlog` und `_navlog` sind in der ausgelieferten Datei **nicht mehr auffindbar**.
  - **🔧 Harte Grenzen** (JC: *„nur harte grenzen aber mit fehlerwarnung im frontend. dont fail silently.
    same please make true for decimals"*): Länge **> 1000 cm** · Gewicht **> 2000 kg** · Schlepp
    **> 50 km/h** · Wassertemp **außerhalb 0–40 °C** → abgelehnt mit einer Meldung, die **Feld und Grenze
    benennt**, plus `markInvalid` + Sprung aufs Feld. Länge steht in **Zentimetern**, JCs „> 10 m" ist im
    Code also `1000`.
  - **🐛 `dec2()` rundete still.** Wer `5,555` eintippte, bekam `5,56` und erfuhr es nie — genau der
    „silent fail". Jetzt wird die dritte Nachkommastelle **abgelehnt**, nicht wegretuschiert. Geprüft
    **vor** `dec2()`, sonst sähe die Prüfung einen Wert, den niemand eingetippt hat.
  - **Die weiche Warnung ist verworfen (JC, 17. Juli).** Sie stand als abgestimmter Bau im Tracker; beim
    Bauen fiel auf, dass sie **dieselbe Plausibilitätsgrenze durch die Hintertür** wäre, die JC fürs
    harte Ablehnen zu Recht abgelehnt hatte — nur mit Klickweg. Artenabhängige Schwellen kommen mit dem
    kuratierten Artenkatalog.
  - **Beide Eingänge, eine Prüfung:** Formular **und** Inline-Edit im Fang-Detail. Sonst hätte das
    Formular eine Tür und das Detail eine offene Hintertür. Im Inline-Edit wird bei einem Problem nicht
    gespeichert, der alte Wert steht wieder da, und ein Toast sagt warum.
  - **Durchgerechnet, 21 Fälle** — u. a.: **1.208 kg geht durch** (der IGFA-Allzeitrekord *muss*),
    `2001` nicht · `1000` ok, `1001` nicht · `5,55` ok, `5,555` nicht · `5.5` als Länge nicht (ganze cm) ·
    `abc` nicht · leer immer ok (ob ein Feld ausgefüllt sein *muss*, entscheidet die Pflichtfeld-Prüfung).
  - **🧹 Navigations-Log ausgebaut** (JC: *„ja nehm den das nächste mal raus"*) — Block, 7 Aufrufe und
    `drop table public.nav_log`. Es war ausdrücklich temporär und hat seinen Zweck erfüllt: Ohne es hätte
    ich den Wisch-Fehler nie auf JCs Gerät gesehen (Desktop = Blink, iPhone = immer WebKit).
    *Testfalle fürs Protokoll:* Mein Ausbau-Skript lief in eine Regex-Falle (`.*?` mit DOTALL über 1,4 MB)
    und wirkte wie abgestürzt — der Lauf war durch, nur die Ausgabe hing. **Gefährlicher als der Timeout:**
    So eine Regex kann still zu viel fressen und trotzdem **fehlerfreies** JS hinterlassen. Deshalb danach
    nicht nur `node --check`, sondern die Funktionen ringsum einzeln nachgezählt.
  - **Offen:** Am Gerät ungeprüft — wie sich die Meldung anfühlt, sagt JC.

- **✅ DEPLOY `ddc6027` (17. Juli) — Vorschläge sind Bestand: `user_items`.**
  **Am laufenden Stand belegt — und der Beweis ist genau JCs Rätsel vom Vormittag:** Dieser Browser
  kannte in `bf_suggest` nur „McHybrid 20cm" und „Gummifisch 12cm" (zwei Köder, die in **keinem** Fang
  vorkommen); in den Fängen standen „Wurm" und „Corn", die dieser Browser nie gesehen hatte. Nach dem
  Deploy steht **alles vieres** da, dazu Methoden, Rolle, Boot, Rute und „Silbersee" als Gewässer.
  Die beiden Welten sind zusammengeführt, nicht die eine über die andere gebügelt.
  Hin- und Rückweg gegen die echte DB geprüft: `rememberItem` landet in der DB **und** steht sofort vorn
  im Speicher (vor der Server-Antwort); dieselbe Vokabel anders getippt bleibt **eine** Zeile;
  `forgetItem` entfernt sie wieder. Testköder rückstandslos entfernt.
  **Von JC bestätigt (17. Juli): „works".**
  JCs Meldung vom 16. Juli (*„i even reinstalled the app"*) war nie ein Code-Fehler, sondern die Bauart:
  Methode/Köder/Rute/Rolle/Boot lagen in `localStorage['bf_suggest']` — **pro Gerät**.
  - **Mein erster Rat war falsch, und das ist in der DB belegt.** Ich hatte eine **jsonb-Spalte an
    `profiles`** empfohlen. `profiles_select` erlaubt aber `(id = auth.uid()) OR shares_context(id)`, und
    **RLS wirkt zeilenweise, nicht spaltenweise** — die Tackle-Box hätte für jeden Vereinskameraden
    offengelegen. Nachgewiesen mit JC und einem echten Kameraden aus „Butter bei die Mutti!":
    `teilt_verein = true`, `sieht Profilzeile = 1`, `sieht user_items = 0`.
    Damit fiel auch das einzige Argument für JSON (es war *billig*, weil es eine vorhandene Tabelle
    mitbenutzt). Zweiter Grund gegen den Klumpen: Er wird als Ganzes geschrieben — zwei Geräte hätten
    sich die Liste gegenseitig überschrieben. **JCs ursprüngliches Argument („Objekte mit Eigenschaften,
    keine Strings") war von Anfang an das bessere.**
  - **DB:** `public.user_items` — eine Zeile je Gegenstand (`kind` ∈ method/bait/rod/reel/boat/water),
    `name_key` als generierte Spalte hält Doppelte fern (*„Gummifisch" = „gummifisch"*), ohne die
    Schreibweise anzutasten. `last_used_at` gibt „zuletzt verwendet" umsonst. RLS: **nur der Besitzer**.
    Die Tackle-Box hängt ihre Details später als **Spalten** an — keine Migration.
  - **RPCs** `remember_item` / `forget_item` (Upsert bzw. Delete; `user_id` serverseitig aus `auth.uid()`,
    der Client kann ihn nicht fälschen). `clock_timestamp()` statt `now()`, weil `now()` die
    **Transaktionszeit** ist — bei mehreren Aufrufen in einer Transaktion wäre „zuletzt" Zufall.
  - **Übernahme `seed_user_items()` — serverseitig aus den FÄNGEN**, nicht aus dem `bf_suggest` des
    Geräts: Der ist ja genau das Unvollständige. Die Fänge tragen alle Felder und liegen vollständig in
    der DB — auch aus Vereinen, die gerade nicht geladen sind (`_ortSuggest()` sieht nur geladene).
    **Gewächtert:** Läuft nur, wenn der Nutzer noch **keinen** Gegenstand hat — sonst käme eine gelöschte
    Rute bei jedem Login zurück. Dazu einmal je Gerät der `bf_suggest`-Rest (Merker `bf_items_seeded`).
  - **Client:** Nur die Quelle unter `_suggestGet()` getauscht — **Sheet, `TA_CFG` und alle Aufrufer
    bleiben unangetastet**. Reihenfolge: Bestand → `localStorage['bf_items']`-Spiegel (offline) → alter
    `bf_suggest` (Demo-Modus und die Sekunden vor dem ersten Laden). Geschrieben wird **erst lokal**
    (Anzeige stimmt sofort), der Server zieht nach; scheitert er, wandert es in `bf_items_pending` und
    wird beim nächsten Laden nachgereicht. Bewusst **nicht** an die Fang-Warteschlange gehängt.
  - **Gewässer sind jetzt Bestand statt Ableitung** — und damit erstmals **löschbar** (`rm:'water'` im
    Sheet; vorher gab es nichts zu vergessen). `_ortSuggest()` bleibt als Rückfall stehen.
  - **In der DB geprüft:** RLS (Kamerad sieht 0) · Upsert-Idempotenz (3 Aufrufe → 1 Zeile) · Trimmen ·
    leerer Wert wird ignoriert · `forget_item` greift über abweichende Schreibweise · Sortierung nach
    `last_used_at` (benutzter Köder rückt vor) · Übernahme: 11 Zeilen, alle 6 Sorten, zweiter Lauf 0,
    gelöschter Eintrag kommt nicht zurück.
  - **Offen, kann nur JC:** ob die Liste am **zweiten Gerät** auftaucht und eine **Neuinstallation**
    übersteht. Genau das war die Meldung.
  - *Testfalle fürs Protokoll:* Mein erster Prüf-Lauf meldete „11 übernommen, 0 Zeilen gesamt". Kein
    Fehler im Bau — alle Unterabfragen **einer** SELECT-Zeile sehen denselben Schnappschuss vom
    Statement-Anfang, also nicht, was die Funktion nebenan gerade einfügt. In getrennten Schritten
    gemessen war alles richtig.

- **✅ DEPLOY `878d17d` (17. Juli) — Vier Bugs, und einer davon war die Ursache der anderen.**
  - **🐛 Der Zurück-Stapel wuchs beim Zurückgehen.** Drei der vier Zurück-Knöpfe riefen `go(...)` **ohne**
    `isBack` — das zählt als **Vorwärtsschritt**. `go()` legte also den Screen, den man gerade **verließ**,
    auf `_navStack`. Live gemessen: Fang → Einstellungen → Zurück-Knopf ergab `nav=[club,list,detail,
    settings]` statt `[club,list]` — **der nächste Wisch führte zurück in die Einstellungen**. Ebenso auf
    der Fang-Seite: Nach dem Zurück-Knopf stand `detail` auf dem Stapel, und der Wisch zog einen in den
    Fang zurück, den man eben verlassen hatte. Nur `formBack` machte es seit jeher richtig
    (`go(_navStack.pop(), true)`) — bei `detailBack` und `closeSettings` war es nie nachgezogen.
    **Das ist der Rest von JCs Klage vom Vormittag** („aus den Einstellungen zurückgewischt lande ich in
    der Gruppe, mit dem Umweg über Home"): Wir hatten die Symptome einzeln gefixt, der kaputte Stapel
    darunter blieb. Jetzt räumen beide ab statt aufzulegen; der Stapel ist maßgeblich, nicht
    `state.detailFrom`/`settingsReturn` — er treibt auch den Wisch, und Knopf und Wisch müssen aus
    derselben Quelle trinken. *(`leaveArea` geht auf Home, das räumt den Stapel ohnehin ab.)*
  - **🐛 Sternchen-Legende nicht kontextsensitiv** (JC, 16. Juli). Sie erklärte immer **beide** Sorten.
    Die blaue („immer erforderlich") stimmt überall — Art, Datum, Angler tragen ihren Stern fest im HTML.
    Die rote („vom Verein als Pflicht gesetzt") stand solo und in Vereinen ohne Vorgaben über **gar
    nichts**. `applyFieldConfig()` wusste es längst, es fehlte nur die Verbindung. Nur **sichtbare**
    Pflichtfelder zählen: Ein ausgeblendetes trägt den Stern in der Klasse, zeigt ihn aber nirgends.
  - **🐛 Lange Fischnamen sprengten das Layout** (JC, 16. Juli). Gemessen im 386-px-Kasten: Namen **mit**
    Bindestrich brechen von selbst sauber um. Ein Wort **ohne** Trennstelle nicht —
    „Donaustaudammschifffahrtskapitaenswels" maß **532 px in einem 386-px-Kasten** und lief hinaus.
    Genau das tippt jemand von Hand ein. `overflow-wrap:anywhere` + `hyphens:auto` auf den drei Stellen,
    die die Art zeigen (Detail-Kasten, Listen-Kachel, Rekord-Karte). Nachgemessen: langer Name 2 Zeilen
    statt Überlauf, „Hecht" unverändert einzeilig.
  - **🐛 Erfolgs-Screen nach Einladung nannte das Ziel nicht** (JC, 17. Juli): *„Du bist dem Verein **bzw.**
    der Gruppe beigetreten."* **Die App wusste es die ganze Zeit:** `join_by_code` gibt laut Signatur die
    komplette `contexts`-Zeile zurück (Name **und** `type`) — der Client griff nur `error` heraus und warf
    `data` weg. Kein neuer DB-Weg nötig. Jetzt: „Du bist der Gruppe „Butter bei die Mutti" beigetreten."
    De/En/Nl. Der alte vage Text bleibt als Notnagel, falls die Zeile mal nicht mitkommt.
  - **Geprüft:** Der Stapel-Fehler ist **live in der App nachgemessen** (nicht nur gelesen), die langen
    Namen ebenfalls (Vorher/Nachher am echten Element). Legende und Einladung sind statisch geprüft —
    **beide unverifiziert am Gerät**, weil sie einen Verein mit Pflichtfeld bzw. eine echte Einladung
    brauchen.

- **✅ DEPLOY `fcef41e` (17. Juli) — Der Vorwärtswisch ging rückwärts.**
  - **🐛 `popstate` feuert bei JEDER Verlaufsbewegung** — vorwärts wie rückwärts. Wir haben die Richtung
    nie geprüft und stumpf `appBack()` gerufen. JC: *„swipe forward you would expect the detail again
    but instead it goes to homescreen."* Genau das: Der Vorwärtswisch schickte einen rückwärts.
  - **Möglich ist er, weil ein Rückschritt den Vorwärts-Eintrag liegen lässt** — der gibt der Geste ihr Ziel.
  - **Blocken wurde geprüft und verworfen.** JC bot *„either fix or block"* an; sein Vergleich („so wie
    zurück auf dem Homescreen") war richtig gedacht, ist hier aber nicht zu haben: Der einzige Hebel zum
    Wegräumen wäre `pushState`, und das legt zugleich einen Eintrag an. Unsere Einträge bilden die
    App-Tiefe ab (1 Home, 2 Gruppe, 3 Fang) — daran hängt der richtige Schnappschuss. Ein `pushState`
    auf der Gruppe machte daraus 1 Home, 2 Gruppe, **3 auch Gruppe**, und der nächste Zurückwisch zeigte
    wieder die falsche Ebene. Das ist der Fehler vom Vormittag. Also richtig vorwärtsgehen — was JC
    ohnehin erwartet.
  - **Jetzt:** Jeder Eintrag bekommt eine laufende Nummer (`_i`); `popstate` vergleicht sie mit unserer.
    Größer = vorwärts, kleiner = zurück. **Am Index, nicht am Zeitfenster** — Zeitfenster sind hier
    zweimal gescheitert. Der beim Zurückwischen verlassene Screen wandert auf einen Vorwärts-Stapel und
    wird beim Vorwärtswisch von dort geholt. Ist der Stapel leer, tut die Geste nichts, statt zu raten.
  - **Am Gerät nachgefahren — diesmal wirklich:** `history.back()/forward()` lösen denselben
    `popstate`-Pfad aus wie die Geste, nur ohne iOS-Animation. Durchgespielt im frischen Tab:
    Fang→zurück→**Gruppe**, vorwärts→**Fang**, zurück→Gruppe, zurück→Home, vorwärts→Gruppe→Fang;
    vorwärts am Ende tut nichts; neuer Ast leert den Stapel; zweimal Zurück auf Home bleibt in der App.
    Alles wie erwartet. **Offen:** wie es sich am Gerät anfühlt.
  - *Testfalle fürs Protokoll:* Der erste Durchlauf lief aus der Seite — Ursache war mein Tab mit
    49 Alt-Einträgen, nicht der Bau. Verräter war `len` 49 → 50 beim ersten `pushState`.

- **✅ DEPLOY `4cabee2` (17. Juli) — Das Flackern beim Zurückwischen.**
  - **🐛 Wir haben den Screen nachträglich abgedunkelt** (JC: *„ganzer bildschirm. es scheint fast als
    fuer eine ms etwas dunkles, vll schwarz angezeigt wird"* — und entscheidend: *„nur nach dem
    zurueckwischen wenn der neue screen schon geladen hat"*). `scrBack` startet bei `opacity:.35`.
    Beim Wischen hat iOS den Screen da längst fertig und voll deckend eingeschoben — dann lief unsere
    Einblendung obendrauf und dimmte ihn auf ein Drittel zurück. Zwei Übergänge auf demselben Bild.
  - **An JCs Aufnahme belegt, nicht vermutet:** Zwei Wische, beide identisch — ein Frame stürzt ab
    (YAVG 37.6 → 32.6), dann ~10 Frames Erholung ≈ die 240 ms der Animation. Die Frames zeigen es
    auch mit bloßem Auge: Text grau statt weiß, Logos matt, ein Frame davor und danach voll.
    Es ist kein Schwarz — es ist unser Screen auf 35 % über dunklem Grund. Huscht gleich vorbei.
  - **Der dritte Fehler in Folge, den erst der Fix davor sichtbar gemacht hat.** Solange iOS den
    falschen Schnappschuss zeigte, fiel das Nachdimmen nicht auf.
  - **Jetzt:** Kam das Zurück von der Geste, animieren wir gar nicht (`.no-anim`); kam es vom
    Zurück-**Knopf**, bleibt die Animation — dort gibt es sonst keine Bewegung. Unterschieden über ein
    durchgereichtes Flag (`popstate` → `appBack(true)` → `go(…, true, true)`), **kein Zeitfenster** —
    zwei Zeitfenster-Versuche sind am 17. Juli schon gescheitert.
  - **Von JC am Gerät bestätigt:** *„this fixed it. juhu."*
  - **Android-Vorbehalt bleibt:** Unklar, ob das System dort einen eigenen Übergang zeigt — wenn nicht,
    schaltet Zurück per Geste dort hart um. Unverifiziert, niemand hat es auf Android angesehen.

- **✅ DEPLOY `df4aa86` (17. Juli) — Zurück behält die Scrollposition.**
  - **🐛 Das Zucken beim Zurückgehen** (JC: *„a jumping i do see. I think it is due to the side scrolling
    back to top. but when the previous page already was on top, it seems like a glitch"*). JCs Vermutung
    war richtig, und der Fehler stand offen im Code: `go()` setzte bei **jedem** Screen-Wechsel
    `scrollTop = 0` — auch beim Zurück. Wer eine Fangliste halb heruntergescrollt hatte, einen Fang
    öffnete und zurückwischte, wurde nach oben gerissen; der Fang, von dem er gerade kam, war weg.
  - **Der zweite Anteil ist erst durch den Deploy davor sichtbar geworden:** Seit die Verlaufseinträge
    stimmen, zeigt iOS beim Wischen den Schnappschuss des vorherigen Screens — auf **dessen**
    Scrollposition. Sprang unser JS danach auf 0, sah man genau diesen Ruck. Stand die vorige Seite
    schon oben, gab es nichts zu springen — daher nur manchmal, daher „glitch". Ein Fix legt den
    nächsten frei; das ist hier schon das zweite Mal.
  - **Jetzt:** beim **Verlassen** wird `scrollTop` gemerkt (muss **vor** dem Wechsel passieren — danach
    ist der Screen `display:none` und liest sich als 0), beim Zurück wiederhergestellt, beim Vorwärts
    weiter 0.
  - **Nicht am Gerät verifiziert.** Am Schreibtisch passt die Liste ganz auf den Schirm, `scrollTop`
    bleibt 0 — der Unterschied ist dort nicht messbar. Mein Test lief ins Leere. Belegen kann nur JC.

- **✅ DEPLOY `21a66e4` (17. Juli) — Zurück macht genau EINE Ebene auf.**
  - **🐛 `edgeBack` doppelte immer noch — JCs Befund war der Beweis:** *„aus einer Gruppe geht es jetzt
    sauber zurück, aus einem Fang lande ich erst auf Home."* Aus der Gruppe fällt der zweite Schritt
    nicht auf, **weil Home ohnehin das Ziel ist**. Zwei Versuche, das über Zeitfenster zu entschärfen,
    sind gescheitert (erst die Reihenfolge falsch gedacht, dann waren die Abstände auf iOS größer als
    das Fenster). **Jetzt navigiert `edgeBack` gar nicht mehr** — es stammt aus der Zeit, als der
    History-Wächter auf iOS wirkungslos war; seit der greift, erledigt die native Geste den Rückschritt
    über `popstate`. Zuständig ist genau **einer**. Den synthetischen Klick markiert `edgeBack` weiter.
  - **🐛 Der Zurück-Knopf im Edit-Modus war kaputt** (JC: *„it also falsely pushes you back to the group,
    rather than the catch in non edit mode"*). `detailBack()` machte `_detailEdit=false` **und** `go(to)`
    — beendete den Edit-Modus **und** verließ den Fang, in einem Schritt. `toggleDetailEdit()` kann das
    längst richtig (speichern, aus der DB nachladen, Fang im Lesemodus zeigen) — **es wurde nur nie
    gerufen**.
  - **🐛 `appBack()` kannte `_detailEdit` gar nicht** — der Wisch sprang am Edit-Modus vorbei direkt in
    die Gruppe. Jetzt dieselbe Ebenen-Regel wie bei Modal, Lightbox und Onboarding.
  - **Live verifiziert:** Edit an → `detail/edit:true` · 1× zurück → `detail/edit:false` (**Fang bleibt**)
    · 2× zurück → `list`.
  - **⚠️ Zwei eigene Fehler beim Bauen:** Beim Entfernen des `appBack`-Aufrufs die schließenden Klammern
    des `touchend`-Handlers mitgerissen — `node --check` fing es vor dem Upload. Und der Commit ging
    **viermal** ins Leere, weil der Knopf um **7 Pixel** gewandert war und ich vorher nicht
    hingeschaut habe — genau das, was `CLAUDE.md` an dieser Stelle vorschreibt.

- **✅ DEPLOY `3251fd3` (17. Juli) — Splash fliegt nach seinem Auftritt aus dem Dokument.**
  JC: *„wenn immer ich zurück gehe sehe ich unsere Intro animation"* — präzisiert: **„anglerfish laterne
  puffer, aber am ende der animation (static)"**. Und von Home: *„animation lädt, dann komme ich aber
  richtigerweise wieder zum homescreen"* — **also derselbe Fehler, kein zweiter.**
  - **Befund:** `#app-loader` hatte `.hide` gesetzt, `getComputedStyle` meldete aber durchgehend
    `opacity:1 / visibility:visible`. Die Klasse griff nicht; der Overlay legte sich beim Zurückgehen
    wieder über die App. Sichtbar war das **fertige** Lockup — der Endzustand der Choreografie, exakt
    JCs „am Ende der Animation, statisch".
  - **Warum die Klasse nicht wirkte, weiß ich nicht.** Nur zwei Regeln matchen, kein Inline-Style, kein
    `!important`. **Deshalb den Fall unmöglich gemacht statt erklärt:** `hideLoader()` nimmt den Splash
    nach der 0,5-s-Blende **aus dem DOM**. Was nicht da ist, kann nicht wiederkommen — und die elf
    beendeten Lockup-Animationen verschwinden mit.
  - `showLoader()` ersatzlos entfernt (rief niemand; es gäbe jetzt auch nichts mehr zum Wiederzeigen).
  - **Live verifiziert:** Splash an **keinem** Punkt mehr im Dokument, **0** Lockup-Animationen übrig,
    Rückschritte landen sauber `detail → list → club`.
  - **⚠️ Peinlicher Umweg, offen protokolliert:** Ich habe erst behauptet, der Splash sei unschuldig —
    gestützt auf einen Screenshot, der die App zeigte, und auf `elementFromPoint`, das ihn nicht traf.
    **Beides war wertlos:** `.hide` setzt `pointer-events:none`, deshalb übersieht `elementFromPoint`
    das Element grundsätzlich. Meine `getComputedStyle`-Messung hatte von Anfang an recht — ich habe ihr
    nicht geglaubt. **JCs Beschreibung („am Ende der Animation, statisch") war der bessere Befund als
    alle meine Messungen.**

- **✅ DEPLOY `24c21c5` (17. Juli) — Eine Geste = ein Rückschritt (Sperre in `appBack`).**
  JC: *„from the catch detail page first I get back to the home screen to then getting back to the group
  overview after 3-4 seconds"* — **kein weißer Screen, Ende auf der Gruppe.**
  - **Was daraus folgt:** Es ist **kein Reload** (sonst wäre es weiß und würde auf Home enden). Die App
    bleibt am Leben, es sind zwei Navigationen.
  - **Was ich NICHT erklären kann, und das sage ich lieber:** Die Reihenfolge geht nicht auf. Ein
    Doppel-Rückschritt würde auf Home **enden**, nicht dort **anfangen** (`_navStack` = `['club','list']`
    → pop ergibt erst `list`, dann `club`). Und mein Test auf dem Live-Stand — synthetische
    Touch-Events + `history.back()` — liefert **exakt einen** Rückschritt mit Ziel Gruppe.
  - **Deshalb kein vierter Rateversuch an der Ursache**, sondern die Regel absichern, die unstrittig ist:
    **eine Geste = ein Rückschritt.** Sperre (350 ms) direkt in `appBack()`, damit sie für **alle** Wege
    gilt — `popstate` der nativen Geste, `edgeBack`-Notnetz, Zurück-Knöpfe. **Ich hatte zweimal versucht,
    das beim Aufrufer abzufangen, und lag beide Male daneben** (erst die Reihenfolge falsch gedacht,
    dann auf dem Desktop gemessen, was nur auf iOS auftritt).
  - **Am Live-Stand verifiziert**, mit JCs Aufbau (`detail`, Stack `['club','list']`): 3 × `appBack()`
    hintereinander → landet auf `list` (Gruppe) ✓ · bewusster zweiter Wisch nach 400 ms → `club` ✓.
    350 ms ist kürzer als jeder bewusste zweite Wisch und länger als jedes Doppel-Feuern einer Geste.
  - **Offen:** Ob das JCs „erst Home, dann Gruppe" wirklich beseitigt — die Sperre verhindert den
    Doppelschritt, aber die beobachtete *Reihenfolge* bleibt unerklärt. **JC: bitte gegenprüfen.**

- **✅ DEPLOY `0a8edf2` (17. Juli) — Wisch sprang zwei Ebenen; Schlüssel-Icon wieder neutral.**
  - **🐛 „Zurück landet auf Home statt bei der Gruppe" — mein Fehler vom selben Tag.** Ich hatte den
    Doppel-Rückschritt „abgesichert", aber **die Reihenfolge falsch herum gedacht**: `touchend` feuert
    **vor** dem `popstate` der nativen Geste. Meine Prüfung *„kam gerade ein popstate?"* war zu diesem
    Zeitpunkt naturgemäß **nein** — sie griff also nie, und beide machten einen Schritt: **zwei Ebenen
    statt einer**. Jetzt umgekehrt: Stand merken, 250 ms warten, nur handeln, wenn die native Geste es
    **nicht** getan hat. Das Notnetz für Plattformen ohne native Geste bleibt.
    *Getestet (Reihenfolge simuliert): alt = 2 Rückschritte, neu = 1; Notnetz-Fall weiterhin 1.*
  - **↩️ Über das Ziel hinausgeschossen, zurückgenommen.** JC: *„i meant the button only, you also
    coloured the icon red (key icon)."* Stimmt — ich hatte Knopf **und** Icon eingefärbt. Das Icon ist
    wieder gedämpft; rot bleiben nur der Knopf mit Text und der Bestätigungs-Dialog. Ein rotes Icon in
    einer Zeile neutraler Icons schreit, bevor überhaupt etwas passiert ist.
  - **Live gemessen statt gegrept:** Icon `rgb(147,163,165)`, Modal-Knopf `rgb(224,113,107)`.
    *(Ein Marker hatte zuvor fälschlich rot gemeldet — mein Regex hatte das Semikolon in
    `{color:var(--danger);}` vergessen. Deshalb Farben messen, nicht Textmuster raten.)*
  - **⚠️ Deploy-Falle, jetzt in `CLAUDE.md`:** Der Commit ging **zum dritten Mal** still verloren — auch
    per Koordinate. Die Weiterleitung auf die Repo-Seite ist **kein** Beweis; nur `list_commits` ist es.
    Beim zweiten Klick saß er.

- **✅ DEPLOY `6abb9d7` (17. Juli) — Rollen-Client + Wisch-zurück-Wächter. Live an der ausgelieferten
  Datei verifiziert, 13/13 Marker grün.** Und in der laufenden App gegengeprüft: `ctxRole()` = `owner`
  → `canEditCtxCfg()` = `true`; `memberPerm('admin','admin')` = alles `false`.
  - **🔴 Das war dringend, und es war meine Lücke:** Die DB-Migration wirkte sofort, der Client hinkte
    hinterher. `canEditCtxCfg()` prüfte `ctxRole()==='admin'` — JCs Rolle stand seit der Migration auf
    `'owner'`, **also hatte er in der Live-App seine Adminrechte verloren**, in allen vier Kontexten.
    Zwischen Migration und Deploy lag dieses Loch. **Lehre: Eine DB-Migration, die einen Wert einführt,
    den der ausgelieferte Client nicht kennt, ist ein Deploy — auch wenn kein Code hochgeladen wurde.**
  - **🐛 Der erste Commit-Versuch ging still verloren.** Der Klick auf „Commit changes" landete, GitHub
    blieb aber auf der Upload-Seite; erst die Prüfung der Commit-Liste zeigte, dass der HEAD noch auf
    `7be34b2` stand. Verdacht: Bei 1,3 MB war der Upload beim Klick noch nicht verarbeitet.
    **Deshalb neu im Ablauf: nach dem Klick IMMER die Commit-Liste prüfen** — die Weiterleitung allein
    ist kein Beweis, und die Live-Datei ist der einzige.
  - `memberPerm()` spiegelt die RLS an **einem** Ort; Inline-Liste und Modal nutzen denselben Spiegel —
    zwei Logiken wären zwei Gelegenheiten, sich zu widersprechen. Getestet: 11/11 Regeln
    (Admin↛Admin, Admin↛Owner, Admin kann nicht befördern, Owner darf nicht selbst gehen, …).
  - Die „letzter Admin"-Warnung ist **ersatzlos raus**: Sie lief im Browser und war mit zwei Zeilen
    Konsole umgehbar. Die DB garantiert es jetzt. An ihre Stelle tritt „Owner muss erst übergeben".

- **🛡️ ROLLEN owner/admin/member — DATENBANK-SEITE FERTIG (17. Juli, wirkt sofort, unabhängig vom Deploy):**
  JCs Regel: **Admins wirken nur auf Members, nie aufeinander.** Genau ein Owner je Kontext, immer.
  - **Etappe 1 — Spalte:** `memberships_role_check` erlaubte nur `member/admin/treasurer` — **`owner`
    wäre schlicht abgelehnt worden**. Neu: `('owner','admin','member')`. Migration: Gründer
    (`contexts.created_by`) → `owner`. Vorbedingungen vorher geprüft: 6 Kontexte, **kein** Gründer fehlt,
    **kein** Gründer ohne Mitgliedschaft, 0 `treasurer`-Zeilen → Migration eindeutig.
  - **Etappe 2 — Funktionen:** `is_context_admin` → `('owner','admin')`. **🐛 Die `treasurer`-Hintertür ist
    zu:** Die Funktion gewährte der laut Roadmap *entfernten* Rolle weiter volle Adminrechte — beim
    Comeback des Kassenwarts (Phase 5) wäre er still Admin gewesen. Neu: `is_context_owner`, `my_ctx_role`.
  - **Etappe 3 — RLS:** Der alte Fehler war, dass die Policies **nur den Handelnden** prüften
    (`is_context_admin(context_id)`) und **nie die Zielzeile** — deshalb durfte jeder Admin jede Zeile
    löschen/umschreiben. Neu prüfen `USING`/`WITH CHECK` die Zielzeile: Admin nur `role='member'`,
    Owner alles außer der eigenen Owner-Zeile, Selbstverlassen für alle **außer dem Owner**.
    `memberships_insert` mit gehärtet — sonst wäre die Beförderungssperre per „löschen und neu anlegen"
    umgehbar gewesen.
  - **Etappe 4 — 🐛 der Fund, der das Modell sofort gebrochen hätte:** `create_context()` **und**
    `approve_context_request()` legten die erste Mitgliedschaft als **`'admin'`** an. Jeder **neu**
    gegründete Verein hätte keinen Owner gehabt. Beide schreiben jetzt `'owner'`. *(`join_by_code` war
    korrekt: `'member'`.)* Dazu `transfer_ctx_ownership(ctx, to)` — beide Zeilen in **einer** Transaktion,
    kein Augenblick mit null oder zwei Ownern.
  - **Die Garantie:** Trigger `trg_single_owner` (constraint trigger, deferred). Bis heute stand hier
    **nichts** — der einzige Schutz war eine Warnung im Browser, umgehbar mit zwei Zeilen Konsole.
  - **🐛 Eigener Fehler im Trigger, gefangen und behoben:** Er feuerte auch bei `DELETE` — und das
    Löschen eines **Vereins** kaskadiert auf die Mitgliedschaften. Der Trigger fand null Owner und warf:
    **Vereine wären unlöschbar geworden.** Jetzt bricht er ab, wenn der Kontext selbst schon weg ist.
    Ausdrücklich gegengetestet.
  - **Getestet gegen die echte DB:** Owner löschen → blockiert ✓ · zweiter Owner → blockiert ✓ ·
    Owner degradieren → blockiert ✓ · Übergabe (2 Schritte, 1 Transaktion) → erlaubt, danach genau
    1 Owner ✓ · **Verein löschen trotz Trigger → geht** ✓. Danach: 6 Kontexte / 7 Mitgliedschaften wie
    zuvor, 0 Testreste, 0 Kontexte ohne genau einen Owner.
  - **⚠️ Lehrgeld (eigener Fehler, offen protokolliert):** Meine erste Testfassung hatte `rollback`, die
    zweite (auf Tabellen-Ausgabe umgebaut) **nicht** — der „Test" hat die Übergabe **echt ausgeführt und
    committet**: René war kurzzeitig Owner von „Butter bei die Mutti!", JC nur noch Admin. Sofort
    zurückgedreht und verifiziert. **Regel daraus: Schreibende Tests an Live-Daten nur mit erzwungenem
    Rollback — oder gegen einen Wegwerf-Datensatz, der sich selbst aufräumt.**
  - **Noch offen (Client):** Rollen-Labels de/en/nl · Mitgliederliste (welche Aktion bei welcher Rolle) ·
    „Ownerschaft übergeben"-Fluss · `ctxRole`/`canEditCtxCfg` um `owner` erweitern · die „letzter
    Admin"-Warnung kann weg, die DB kann es jetzt selbst.

- **🔧 REKORD-KACHELN ÖFFNEN DEN FANG (JC, 17. Juli — 🟡 gebaut, NICHT deployed):**
  „Längster"/„Schwerster" führen jetzt direkt zu ihrem Fisch — in **„Meine Fänge"** (`renderStats`) **und
  auf der Verein-/Gruppenseite** (`renderList`). Beide hatten das Fang-Objekt (`bigLen`/`bigWt`) längst
  zur Hand und zeigten nur eine Zahl. Die Rekord-Kacheln im „Deine Rekorde"-Shelf waren schon klickbar.
  - **🐛 `openStatsRecord` hätte auf der Vereinsseite ins Leere gegriffen:** Es suchte nur in
    `myCatches()` — den eigenen Fängen. Ein Vereinsrekord kann aber von **einem anderen Mitglied** sein
    und liegt dann nur in `state.catches`. Neu: `openRecordCatch(id, from)` sucht in beiden Töpfen.
  - **Falle vermieden (steht in `CLAUDE.md`):** Aus `<div>` wurde `<button>` — und Buttons ziehen sich
    `color:buttontext` aus dem UA-Stylesheet, was Vererbung schlägt. Die Wertzeile hat keine eigene Farbe
    und wäre **iOS-blau** geworden. Daher explizit `color:var(--text)` + `font:inherit`. Gleiche Falle wie
    seinerzeit bei `.map-open` und `.wx-info`.
  - **Zeigt die Kachel „—", bleibt sie ein `<div>`** — sie führt nirgendwo hin und darf sich nicht so anfühlen.
  - Getestet mit der echten Funktion (6 Fälle): Vereinsfang nur in `state.catches` ✓ · eigener Fang nur in
    `myCatches` ✓ · in beiden ✓ · unbekannte id öffnet nichts und wirft nicht ✓ · **Zahl-id (lokal) vs.
    String-id (uuid)** ✓ · `state.catches` undefined ✓.

- **🌦️ WETTER-INFO NEU — Variante A (JC, 17. Juli — 🟡 gebaut, NICHT deployed):** 916 → **599 Zeichen**
  (EN 633, NL 650), 7 Absätze, de/en/nl. Mockup: `mockup-wxinfo.html` (A „Der Reihe nach" vs. B „Nur was
  überrascht"); JC wählte **A**.
  - **🐛 Loch geschlossen, das nicht auf der Liste stand:** Die **Bedingungen**-Karte war **nie erklärt** —
    ausgerechnet die, die ganz oben steht und die volle Breite einnimmt. Der Text begann bei „Luft".
    Jetzt hat jede der fünf Karten ihre Zeile, in der Reihenfolge des Bildschirms.
  - **Wind-Absatz von 4 Sätzen auf 1** (er war durch meine eigene Änderung am selben Tag der längste
    geworden und erschlug alles andere). Sagt weiter beides: „NO" = woher, Pfeil = wohin.
  - **Raus auf JCs Ansage:** „Fallender Druck ist das, worauf Angler achten." · der Wassertemperatur-Satz ·
    „Quelle: Open-Meteo."
  - **Lizenz geprüft, bevor gestrichen wurde:** Open-Meteo ist CC-BY 4.0 und verlangt einen Link. Ich hatte
    JC gewarnt, damit falle die letzte Attribution weg — **das war ein Fehlalarm aus falscher Erinnerung**:
    Sie steht weiterhin unter den Karten (`.wsrc`, `<a href="https://open-meteo.com">`, und nur wenn auch
    wirklich eine Open-Meteo-Kachel gerendert wurde). Der Info-Text war die Zweitnennung.
  - **Anführungszeichen:** durchgehend typografisch („…“ / “…” / „…”). Gerade `"` beenden die
    `"`-begrenzten i18n-Strings — genau daran ist die Datei heute schon einmal zerbrochen.

- **✂️ FELD-EINSTELLUNGEN RADIKAL VEREINFACHT (17. Juli, JCs Entscheidung — 🟡 gebaut, NICHT deployed):**
  JC: *„mach mal nur alles in einstellungen und edit anzeigen, und dann kann nur der verein eingaben
  erzwingen. deutlich einfacher und die persönliche einstellung fällt weg."*
  - **Die persönliche Feld-Ebene ist ersatzlos entfallen.** Raus: `DEFAULT_FIELD_PREF`,
    `getUserFieldPref`, `setUserFieldPref`, `setFieldPref`, `toggleFieldChip`, `renderFieldPrefPanel`,
    `LOCK_IC`, die Akkordeon-Sektion „Fang-Eingabe" in den persönlichen Einstellungen.
    `profiles.field_pref` **bleibt in der DB stehen** (nicht destruktiv), wird nur nicht mehr gelesen.
  - **Alle Felder werden überall angezeigt** — auch beim neuen Fang (JCs Wahl). Einzige Ausnahme bleibt
    die **Schleppgeschwindigkeit** (nur bei Trolling-Methode; hat der Fang schon einen Wert, bleibt sie
    sichtbar — sonst versteckten wir eingetragene Daten).
  - **Der Verein kann nur noch ERZWINGEN.** Drei Stufen → zwei: `stRequired` „Pflicht" /
    **`stNotRequired` „Nicht Pflicht"** (war `stOff` „Nicht erzwingen"). `stOptional` „Immer anzeigen"
    ist entfallen — bedeutungslos, sobald ohnehin alles angezeigt wird.
  - **Kein Umschreiben der DB nötig:** Alles, was nicht `'required'` ist — `'optional'`, `'off'` und die
    alten `wxCond/wxTemp/…`-Schlüssel — heißt jetzt schlicht „nicht Pflicht". Damit fielen auch
    `foldWxCfg`/`foldWxPref`/`_WX_LEGACY` und `DEFAULT_FIELD_CFG` (jetzt `{}`) weg.
    **Eine Falle dabei entschärft:** Bei einer gespeicherten `'optional'` hätte im Admin-Panel **keiner**
    der zwei Knöpfe geleuchtet — der Zustand wird jetzt normalisiert (`!== 'required'` → „Nicht Pflicht").
  - **Wetter hat gar keinen Schalter mehr:** immer holen, immer zeigen. Ohne persönliche Ebene gab es
    niemanden mehr, der ihn setzen könnte, und ein Verein hat auf JCs Fang nichts auszublenden. Damit ist
    der „Zwei-Türen"-Fehler endgültig weg — es gibt nichts mehr, das je nach Blickwinkel anders antwortet.
  - **🐛 Zwei tote Aufrufe gefunden:** `renderFieldPrefPanel()` wurde nach dem Löschen noch in `setLang()`
    und beim Öffnen der Einstellungen aufgerufen — der zweite **ungeschützt**, hätte also einen
    `ReferenceError` geworfen und den Einstellungs-Aufbau abgebrochen.
  - **Texte nachgezogen** (sie beschrieben noch die alte Welt): `fieldsHint`, `fieldsHintAdmin`
    („Verbergen geht nicht – eigene Felder wählt jede/r selbst" → „Angezeigt werden immer alle"),
    `fieldsHintMember`. Verwaiste Keys raus: `fieldPrefHint`, `stOptional`, `fldLockedHint`, `wxRecord`.
  - **Geprüft:** 547 Schlüssel, alle drei Sprachen **schlüsselgleich**; alle **415** benutzten
    `t()`/`data-i18n`-Schlüssel auflösbar; keine toten Referenzen; beide Script-Blöcke parsen.

- **🌦️ WETTER: FÜNF SCHALTER WERDEN EINER + Anzeige-Regel (17. Juli, JCs Entscheidung — 🟡 gebaut, NICHT deployed):**
  *(Teilweise am selben Tag wieder überholt — siehe oben: der eine Schalter fiel mit der persönlichen
  Ebene ebenfalls weg. Der Befund darunter bleibt gültig und ist der Grund für alles Weitere.)*
  - **JCs Modell:** (1) *Die Detailseite zeigt immer alles, was angegeben ist.* (2) *Beim Eintragen/Ändern
    gilt: mandatory > optional > off.* Dazu JCs entscheidender Einwand: **„Wetter holen und anzeigen ist
    doch noch was anderes."**
  - **Er hatte recht, und das war der eigentliche Fehler:** Die fünf Schalter hießen „Feld an/aus",
    steuerten aber **nur die Anzeige** — `enrichWeather` holte immer alles. Ein Schalter, der „aus" sagte
    und trotzdem aufzeichnete. Jetzt steuert **ein** Schalter (`weather`, i18n `wxRecord`) das **Holen**;
    die Anzeige folgt allein daraus, ob der Fang Wetter hat (die Wache in `renderWeather` gab es schon).
  - **🐛 Damit stirbt der „Zwei-Türen"-Fehler an der Wurzel:** `wxOn()` fragte `ctxAdminCfg()` → den
    *gerade offenen* Verein. Derselbe Fang zeigte im Verein den Mond und in „Meine Fänge" nicht
    (`mode==='solo'` → `ctxIsDb()` false → keine Vereins-Config). Belegt mit der echten Funktion.
  - **🐛 `wxOn` war zudem falsch benannt:** An der Nachtragsliste im Detail-Edit prüfte es `length`,
    `bait`, `method` … — längst der allgemeine „ist dieses Feld an?"-Test. Jetzt **`fieldOnForCatch(c,key)`**:
    fragt die Vereine **des Fangs** (strengster gewinnt), nicht den offenen. Heißt nach dem, was es tut.
  - **Migration ohne DB-Schreiben:** `foldWxCfg` / `foldWxPref` falten `wxCond/wxTemp/wxWind/wxPress/wxMoon`
    beim **Lesen** zu `weather`. **Die Reihenfolge war die Falle:** gefaltet wird das *gespeicherte* Objekt,
    **bevor** es auf die Defaults trifft — andersherum wäre `weather` durch den Default immer gesetzt, die
    Faltung liefe nie, und **die Absicht des ASV wäre still verschwunden**.
    *Getestet mit der echten ASV-Config:* 5 × `optional` → `weather:"optional"` ✓ · gemischt mit einem
    `required` → `required` ✓ · alle `off` → `off` ✓ · neuer Schlüssel schlägt alte ✓ · `released:"required"`
    unberührt ✓ · Prefs (Boolean): Alt-Default (Mond aus, Rest an) → `true` ✓, alles aus → `false` ✓.
  - **Der Mond reitet mit dem Wetter** (JC: „Mond gehört zum Wetter"). Er ist der Sonderfall —
    `moonPhaseKey()` **rechnet** ihn aus dem Datum, es gibt nichts zu holen und keine Koordinaten braucht
    er auch nicht. Genau deshalb kann er nicht an einem Hol-Schalter hängen: Er wäre immer verfügbar und
    damit immer sichtbar. **Bewusst akzeptierter Preis (JC):** die Voreinstellung **„Mond aus"** gibt es
    nicht mehr — Wetter an heißt Mond an. Nicht in `vonApi` gezählt: unsere Rechnung, nicht Open-Meteos.
  - **Fehlermeldung nennt jetzt den Verein:** „Bitte Pflichtfelder ausfüllen: **Entnahme (ASV Steife Rute e.V.)**".
    Ein Feld kann allein dadurch zur Pflicht werden, dass man einen Verein hinzufügt — ohne den Namen
    rät man, woher die Forderung kommt.
  - Aus 5 Einstellungs-Zeilen wird 1; `grpConditions` = `['weather','watertemp']`.

- **⚙️ DATEN-AUFRÄUMEN (17. Juli, auf JCs Ansage — wirkt sofort, unabhängig vom Deploy):**
  JCs sechs Solo-Fänge ohne Entnahme-Angabe (`released = null`) rückwirkend auf **zurückgesetzt** gesetzt.
  JC: *„sind sowieso alle fake"* — bestätigt durch die Daten selbst: **Aal 1000 cm**, **Schleie 500 cm**.
  `true` gewählt, weil es die bescheidenere Behauptung ist und die Krone nicht verschiebt (zurückgesetzte
  Fänge zählen als Rekord). **Danach: 0 × `null` bei 16 Fängen.** Eng gefasst: nur `owner = JC`,
  nur `context_ids` leer, nur `released is null`.

- **⚖️ PFLICHTFELDER ÜBER MEHRERE VEREINE — „strengster gewinnt" (17. Juli, JCs Entscheidung — 🟡 gebaut, NICHT deployed):**
  - **Der Anlass war ein Fund in echten Daten, keine Theorie:** JCs **Forelle liegt in drei Kontexten** —
    `ASV Steife Rute e.V.` (`released: "required"`) + `Butter bei die Mutti!` (keine Config) +
    `Ijburg Fishing Crew` (keine Config). Ein Fang, drei Vereine, eine Regel. `catches.context_ids` ist
    ein **Array**, `state.formTargets` ebenso.
  - **🐛 Dabei ein echter Bug gefunden:** `ctxAdminCfg()` las nur `state.club` — den *gerade offenen*
    Verein. Alle drei Pflicht-Prüfer (`applyFieldConfig`, `formReady`, `saveCatch`) hingen daran.
    **Wer in ASV + „Butter bei die Mutti" gleichzeitig loggte und letzteren offen hatte, speicherte am
    Pflichtfeld des ASV vorbei.** Neu: `formAdminCfg()` = Merge über **alle** `formTargets`.
  - **Neu:** `ctxCfgFor(ids)` (Merge, Rang `required(3) > optional(2) > off(1)`), `ctxIdsOfCatch(c)`,
    `fieldRequiredForCatch(c,key)`, `formAdminCfg()`. Ein Verein ohne geladene Config wird
    **übersprungen, nicht geraten**.
  - **Detailseite:** `editReleasedField` bietet das „—" nicht mehr an, wenn **irgendein** Verein des Fangs
    die Entnahme verlangt.
  - **Geprüft, dass der Merge nichts wegnehmen kann:** `"off"` ist in `applyFieldConfig`/`wxOn` wirkungslos
    (`show = pref===true || forceShow`) — verhält sich wie „keine Meinung". Der strenge ASV kann also
    keinem anderen Verein Felder klauen; der Merge kann nur *hinzufügen*.
  - **Test gegen die echten Daten** (Funktionen aus der Datei gezogen, nicht nachgebaut): Forelle
    (ASV+Butter+Ijburg) → Pflicht ✓ · Hecht (Butter+Ijburg) → frei ✓ · Solo → frei ✓ · Fang in
    unbekanntem Verein → frei ✓ (nicht geraten) · Alt-Feld `_ctxId` → Pflicht ✓ · `null`-Fang → frei ✓ ·
    Reihenfolge der Vereine irrelevant ✓.

- **🐛 FEEDBACK-BATCH aus den Mails (17. Juli — 🟡 gebaut, NOCH NICHT deployed):**
  - **„Beitritts-Anfragen" → „Gründungs-Anfragen"** (JC, 14. Juli, mit Screenshot: „jetzt ist falsch").
    **Am Datenmodell bestätigt:** `context_requests` hat **keine `context_id`**, nur `type`/`name`/
    `location`/`note` — die Tabelle *ist* eine Gründungsanfrage. Auch die Gegenseite war schon richtig
    („Dein Verein **fehlt**? Sende eine Anfrage an den App-Admin"). Falsch war allein der Posteingang.
    `reqInboxTitle` de/en/nl (`Gründungs-Anfragen` · `Founding requests` · `Oprichtingsverzoeken`) +
    der HTML-Fallback, der sonst vor dem ersten `applyI18n()` aufblitzt.
  - **„Kept / released" → „Kept / Released"** (en) und **„Meenemen / Terugzetten"** (nl).
    **Bewusst nur dieses eine Paar.** Ein Audit über alle Labels fand 19 weitere „A / b"-Paare
    (`Water / spot`, `Bait / lure`, `Club / group` …) — die bleiben klein: Das sind **Synonyme für ein
    Feld**, und Sentence Case ist die auditierte Konvention. „Kept / Released" ist etwas anderes: die
    **beiden Optionswerte selbst**, die im Code `releasedKept:"Kept"`/`releasedReleased:"Released"`
    heißen. Das Label widersprach seinen eigenen Werten.
  - **🐛 Kein „—" mehr, wenn Entnahme auf Pflicht steht** (JC, 14. Juli) — **im Log-Formular**.
    **Die Falle, die dabei fast gebaut worden wäre, ist real und im Browser nachgewiesen (Chrome 150):**
    Entfernt man die selektierte „—"-Option, springt der `<select>` laut HTML-Reset-Algorithmus auf die
    **erste** Option → `value === "kept"`. Ein zurückgesetzter Fisch wäre stumm als *entnommen*
    protokolliert. Deshalb neu: `data-hide` in `renderSelSheet()` — die Option bleibt selektiert
    (`value` bleibt `""`, Pflichtprüfung greift weiter), verschwindet aber aus dem Picker. Generisch,
    ohne Nebenwirkung auf die sechs anderen Selects (`dataset.hide === undefined` → sichtbar, getestet).
    **Detailseite bewusst NICHT mitgemacht** — ein Fang hat `ctxIds` (Mehrzahl), „ist Pflicht?" hat dort
    keine eindeutige Antwort. Hängt an JCs Pflichtfeld-Regel.

- **🧹 TEST-LOG ENTFERNT + `englart@hotmail.com` freigeschaltet (17. Juli — 🟡 gebaut, NOCH NICHT deployed):**
  - **Test-Log ersatzlos raus.** Der Knopf „Test-Log an/aus" stand seit dem 16. Juli **live ganz oben in
    Einstellungen → Persönlich**, für jeden Nutzer sichtbar. Der Zuschnitt-Test ist bestanden, also weg:
    Knopf, `dbgToggle/dbgPanel/dbgLabel/dbgRender/dbgClear/dbgCopy/dlog`, `_dbgOn`/`_dbgLines`, das
    `.dbg-*`-CSS, der `bf_dbg`-Eintrag in localStorage, der `DOMContentLoaded`-Hook und der `dbgLabel()`-Aufruf
    in `setSettingsTab`. **Verifiziert:** `grep` über die ganze Datei findet **keinen** Rest, und beide
    Inline-Script-Blöcke parsen sauber (`node --check`, 1,18 MB).
  - **Was aus dem Log bleibt — das eigentliche Ergebnis:** `saveCoverPos` verschluckte DB-Fehler vorher mit
    `.then(()=>{}, ()=>{})`. Jetzt meldet jeder Fehlschlag `console.error` **und** einen Toast
    (`cropSaveFail`, de/en/nl). **Die Asymmetrie ist Absicht:** Erfolg bleibt stumm — das Bild bewegt sich
    sichtbar unter dem Daumen, `haptic()` hat schon gefeuert. Nur Schweigen darf „gespeichert" heißen.
  - **🐛 Nebenbefund, bewusst nicht stumm gelassen:** `saveSoloPhotos` macht `delete` → `insert`. Schlägt
    das `insert` fehl, **verliert der Fang alle Fotozeilen** — und gemeldet wurde das bisher *nur ins
    Test-Panel*. Ersatzloses Löschen hätte einen Datenverlust-Pfad komplett verstummen lassen; er meldet
    jetzt `console.error`. Der echte Fix (`upsert` statt delete+insert) steht als eigener Punkt im Tracker.
  - **Mit rausgefallen:** totes `.wtrend-note`/`.wspark-cap`-CSS (Reste der entfernten Sparklines).
  - **⚠️ Diese „Selbstkorrektur" war selbst falsch — richtiggestellt am selben Tag:** Ich hatte gemeldet,
    die verwaisten Keys (`trendNote`, `sparkCap`, `trend3`, `trend7`, `wSourceFields`) seien „längst weg",
    und den korrekten Tracker-Eintrag gelöscht. **Sie existierten sehr wohl.** Meine Prüfung hatte nur das
    `I18N`-**Objektliteral** ausgewertet (160 Schlüssel) und die **37 `Object.assign`-Blöcke** übersehen,
    die die restlichen ~390 nachtragen — also meldete sie für jeden nachgetragenen Schlüssel `undefined`.
    Jetzt wirklich entfernt (0 Verwendungen, verifiziert über den vollständigen Bereich). Die Prüf-Falle
    steht als Warnung im Tracker.
  - **⚙️ `englart@hotmail.com` auf die Allowlist** (JC bat am 14. Juli zweimal darum, es war übersehen worden —
    die Person konnte sich drei Tage lang nicht einloggen). Geprüft **mit der Funktion, die der Login
    aufruft**: `is_email_allowed()` → `true` für `Englart@`, `englart@` und `  ENGLART@HOTMAIL.COM `.
    14 Einträge. *(Reine DB-Änderung, unabhängig vom Deploy — wirkt sofort.)*

- **🎣 REBRANDING ⑤ — Hero-Lockup live (16. Juli — visuell verifiziert):**
  - **`butler·fish` als echtes Lockup** (Brief: „Rebuild as SVG + CSS, not a flat PNG"): Anglerfisch + Live-Barlow-Wortmarke (`butler` cream `#F4EFE2` · `fish` gold `#F2AA25`), **der Puffer ist der `·`**. Choreografie ≤900ms (Laterne → Glow → Wort → Puffer-Bloom), `prefers-reduced-motion` respektiert. Eingesetzt auf **Splash** (2.5rem) und **Login** (2.1rem, ersetzt Logo+Brandname).
  - **Neues Asset `puffer.png`** (360×315, 76 KB, echtes Alpha): aus `icon-1024.png` per **Hue-Distanz** freigestellt (Gold H≈38 vs. Teal-Kachel H≈197) — auf Magenta gegengeprüft, kein Farbsaum, keine Löcher.
  - **🐛 Puffer 200px statt 29px:** `#app-loader img{width:200px}` aus der Maskottchen-Ära war ein **ID-Selektor** und schlug `.lockup-word .lw-dot` (nur Klassen) → jedes Splash-Bild wurde auf 200px gezwungen. Tote Splash-CSS (`.glow`, `.splash-inner`, `loaderPulse`, `escaGlow`) mit entfernt; Größe/Glow/Motion gehören jetzt allein dem Lockup.
  - **Abstand:** Punkt-Margin `.04em → .11em` — die Puffer-Stacheln berührten sonst „r" und „f".
  - **Lehrgeld:** Die Zahlen waren grün, während die Seite kaputt aussah (computed width stimmte, `getBoundingClientRect` nicht — Transform). Zwei Messfehler auf dem Weg: `getAnimations()` ohne `{subtree:true}` → `.every()` auf leerem Array = immer `true`; und die Sandbox erreicht die Domain per `curl` gar nicht (0 Bytes) → Polling prüfte nichts. **Regel: Layout-Änderungen werden angeschaut, nicht nur gemessen.**

- **🛠️ PHASE 3 (Teil 1) + Feedback-Fixes (15./16. Juli — live verifiziert):**
  - **Manuelle PB-Kontrolle:** Migration `add_manual_pb_flags` (`pb_optout`, `pb_manual`). `recomputePb` überspringt Opt-outs; **Edge-Case A**: gemessener Rekord schlägt manuelle Krone (Flag bleibt → übernimmt wieder, wenn der gemessene wegfällt). Im **Edit-Modus Krone antippen → Kontextmenü**: Rekord → „Nicht mein Rekord"; kein Rekord für die Art → „Als Rekord markieren". **Option (a) umgesetzt:** hält ein anderer Fang den Rekord, erscheint **gar keine Krone** (keine Sackgassen-Info). Live-Smoke: alle 3 Fälle korrekt.
  - **Schleppgeschw. nur bei Trolling-Methode** (`isTrollingMethod`: trolling/schlepp/trollen) — im Formular (reagiert live auf Methodenwechsel, `_lastFieldForce` erhält erzwungene Felder) und bei den ＋-Zeilen im Edit-Modus. Bestehende Werte bleiben sichtbar.
  - **🐛 Wetter-Bug gefixt (JC):** bei Datums-/Pin-Änderung wurde das Wetter nie neu geholt (nur der Mond, weil live berechnet) — `enrichWeather` steigt aus, wenn schon Wetter da ist. Neu: `refreshWeatherFor(c)` nach Datums- **und** Pin-Änderung; persistiert (DB-Update bzw. lokal) und rendert die Wetter-Sektion neu.
  - **🐛 Mond zeigte immer dieselbe Sichel (Regression durch Emoji-Entfernung):** jetzt **8 phasengenaue Mono-Icons** (`MOON_IC`: Neumond = Umriss, Vollmond = gefüllt, Viertel = Halbkreis, Sichel/Gibbous korrekt gekrümmt). **Trend-Chip wieder raus** (JC: steckt schon im Phasennamen).
  - **🐛 Leere Edit-Zeilen doppelt so hoch (JC):** Klassen-Namenskonflikt — mein `empty`-Modifier erbte die globale Empty-State-Klasse (`padding:42px`) → 67px statt 25px. Jetzt `efm-empty`.
  - **Typeahead-Sheet:** „Feld leeren" ist **eigene Aktion oben im Sheet** (statt Vorschlags-Zeile, JC), sichtbar nur bei gesetztem Wert. **Gemerkte Vorschläge löschbar** (× pro Zeile → `taForget`, entfernt aus `bf_suggest`) — Tippfehler bleiben nicht hängen. i18n `clearField`/`forgetEntry` de/en/nl.

- **🌦️ PHASE 2 komplett (15. Juli — live verifiziert):**
  - **Wetter-Karten:** Wetter-Sektion von Spec-Zeilen → **2-spaltige Karten** (`.wx-grid`/`.wx-card`): Icon+Label oben, Wert darunter, **farbige Trend-Chips** (↑ teal / ↓ ochre / → muted) für Luft/Wind/Druck. Bedingungen = volle Breite. **Mondphase-Emoji entfernt** (mono-Icon, theme-aware) — Detail-UI jetzt emoji-frei (`moonEmoji` nur noch im Share-Text). Live-Smoke: 5 Karten, „19,2 °C ↑ +3,0 °C", „1013 hPa ↓ −6 hPa", kein Emoji.
  - **Rolle/Reel-Feld (neu, end-to-end):** Migration `add_reel_field` (`catches.reel`). Verdrahtet in: Formular (`ff-reel`/`f-reel` + Typeahead), `CFG_FIELDS`, Feld-Defaults (wie Rute: opt-in), Gear-Gruppe, Feld-Füll-Check, **Vorschläge** (`SUGGEST_FIELDS`, Datalist, `TA_CFG`), **Share-Tokens** (de `rolle`/en `reel`/nl `molen`), DB-Mapping hin+zurück, `openEdit`-Prefill, Detail-Zeilen, Edit-Modus (Typeahead + ＋-Zeile), eigenes Spec-Icon. i18n de „Rolle" / en „Reel" / nl „Molen" (3/3). **Rute | Rolle als Paar** nach deiner Regel — Live-Smoke: beide kurz → beide halb; einzelne Rolle → volle Zeile.
  - **Karten-Controls:** Leaflet +/−-Zoom auf App-Sprache restyled (Surface/Teal, gerundet, Schatten statt Browser-Chrome); „In Karten öffnen"-Icon nach **oben rechts** (Zoom bleibt oben links, keine Kollision).

- **🦸 Detail-Hero-Redesign STUFE 1 (14. Juli — live verifiziert):** Read-only-Detail komplett umgebaut. **Hero:** Cover-Foto mit Overlay (Artname + Größen-Chips Länge/Gewicht + **Krone oben rechts** bei PB) + Gradient; ohne Foto → schlankes Band (Art + Chips). **Angler-Byline** (Avatar-Initialen + Name, nur Avatar+Name kein Text) unter den Fotos. **Spec neu geordnet:** Datum → Entnahme | Methode → Köder → Rute → Boot | Tempo → Gewässer; **Länge/Gewicht raus** (im Hero), **Angler raus** (Byline). **Paar-Regel** umgesetzt (Paar beide halb oder beide voll; einzeln → voll). Sticky-Kopf nutzt jetzt den Hero als Schwelle. **Edit-Modus unverändert** (Hero aus, Band + Foto-Editor + alle Felder inkl. Länge/Gewicht/Angler editierbar). Krone von „neben Art" → in den Hero verschoben. Live-Smoke: mit Foto Hero+2 Chips+Krone, Band aus, Byline „JC", Reihenfolge korrekt; ohne Foto Band+Chips+Byline; Edit-Modus voll funktional. **Offen Stufe 2:** Wetter-Karten mit Trends · Rolle/Reel-Feld (dann Rute|Rolle-Paar) · Karten-Controls.

- **✏️ #15 Edit-Modus Feinschliff #2 (14. Juli — live verifiziert):** (1) **Zahl-Feld-Unterstrich exakt** — `ch`-Schätzung + 2ch-Mindestbreite machten kurze/leere Felder ~1 Zeichen zu lang; jetzt **Canvas-`measureText`** (exakte Glyphenbreite +2px Cursor) + Re-Measure nach `document.fonts.ready`; `min-width` auf 0.6em. Live: „97"=15,2px → Input 18px (nur Cursor-Puffer). (2) **Scroll-Sprung gefixt** — `go()` setzte bei jedem Re-Render `scrollTop=0`; jetzt wird bei `keepEdit`-Re-Renders (Sheet-Auswahl etc.) die **Scrollposition erhalten** (Capture vor Render, Restore nach `go()` + rAF). Live: 140px → 140px. (3) **Teilen-Button im Edit-Modus versteckt** (wie Stift→Fertig): `share-btn` `display:none` solange `_detailEdit`, zurück bei „Fertig". Alle drei per Smoke-Test bestätigt.

- **✏️ #15 Edit-Modus: Gruppe/Verein INLINE — Button ganz weg (14. Juli — live verifiziert):** der Bridge-Button „Gruppe/Verein ändern" entfällt; stattdessen im Edit-Modus eine **„Eintragen in"-Zeile** (nur DB-Fänge mit Vereinen/Gruppen). Tippen öffnet das bestehende Area-Sheet, **aber ohne** den aktiven App-Kontext umzuschalten: neuer Modus `_areaMode='detail'` → `toggleArea` verzweigt zu `detailToggleArea` (schreibt `context_id`/`context_ids` direkt auf den Fang, aktualisiert In-Memory-Caches, **kein** `chooseClub`/`startSolo`-Seiteneffekt); `closeAreaSheet` setzt Modus zurück, `reloadCurrentDb` + Detail-Neurender. `detailAreaSummary` zeigt die aktuelle(n) Gruppe(n) bzw. „Solo". Live-Smoke (DB-Fang, 2 Kontexte): read-only keine Zeile → Edit: Zeile „Solo"; Sheet öffnet (3 Zeilen); „Hecht Club" wählen → `context_id=club1`; schließen → Summary „Hecht Club", App-Kontext unverändert. **Damit ist #15 komplett inline: Felder · Notizen · Fotos · Karte · Gruppe — alles im Edit-Modus, kein Formular-Umweg mehr.** (Formular „Bearbeiten" bleibt als Voll-Editor bestehen; kann später ganz abgelöst werden.)

- **✏️ #15 Edit-Modus: Fotos + Karte INLINE (14. Juli — live verifiziert):** der Button „…bearbeiten" fällt für Fotos/Karte weg — beide jetzt direkt im Edit-Modus. **Fotos:** im Edit-Modus ersetzt ein editierbares Foto-Grid (`#d-photo-grid`) das Lese-Hero — Hinzufügen/Entfernen/Titelbild, per Wiederverwendung der Formular-Pipeline (`renderFormPhotos` rendert jetzt in **alle** `.pgrid`; geteilter `#f-photo`-Input + `onPhoto`); Persistenz beim „Fertig"/Zurück (`persistDetailPhotos`: DB → `saveSoloPhotos` diff-basiert, lokal → `c.photos`+`saveCatches`). **Karte:** im Edit-Modus wird die Detail-Karte interaktiv (`initDetailEditMap` — Tap setzt/verschiebt Pin via `setDetailPin`→`saveDetailLatLon`, `scrollWheelZoom` an, „Mein Standort"-Button `detailUseMyLocation`); „In Karten öffnen"-FAB im Edit ausgeblendet. `toggleDetailEdit` jetzt async (seed `editPhotos` beim Öffnen, persist beim Schließen + `reloadCurrentDb`). Live-Smoke: read-only Hero sichtbar/Editor aus → Edit: Hero aus, Grid mit Zelle+„＋", Karten-Editbar an, 6 Tiles rendern, Tap→Pin 52.10/4.30 gespeichert → zurück clean. **Gruppe/Verein** bleibt vorerst über den (umbenannten) Button „Gruppe / Verein ändern" → Formular (dort korrekt via `state.formTargets`+`saveCatch`); **Inline-Gruppe = nächster Schritt** (berührt Kontext-Umzug im Datenmodell → mit JC abstimmen).

- **✏️ #15 Edit-Modus Feinschliff nach JC-Gerätetest (14. Juli — live verifiziert):** (1) **Indikator „weird" gefixt** — der globale `input{border-radius:8px}` sickerte in die Inline-Felder → rundlicher „Tray" bei Zahl-/Text-Feldern vs. flacher Unterstrich bei Sheet-Feldern (der Mix wirkte inkonsistent). JC-gewählter **Stil A · Unterstrich**: flacher Ochre-Unterstrich, **radius 0**, kein Box-Halo, Feldbreite hugt den Wert (`sizeEfm`, `ch`). Regel: **Chevron › = öffnet Picker**, kein Chevron = direkt tippen. (2) **Datumsauswahl-Bug gefixt** — statt verstecktem Off-Screen-`showPicker()` (iOS blockiert das) jetzt ein **echtes Inline-`datetime-local`-Feld** in der Zeile → nativer Picker öffnet zuverlässig. (3) **Gewässer = Typeahead** (JC: „remember spots") — wie Köder/Rute/Boot, Vorschläge aus bisherigen Fangorten (`_ortSuggest`); damit ist Wasser **nicht** mehr das eine abweichende Freitext-Feld. Live-Smoke: Länge-Input radius 0 / Breite 3ch / Wert „97"; Datum = `datetime-local`; Wasser = Pick mit Chevron „Ijburg". **Noch offen (JC „fix all"): Fotos/Karte/Bereich-Gruppe inline** statt Button „…bearbeiten" (Button bleibt bis Inline-Version steht — kein Regress).

- **✏️ #15 Detail → echter EDIT-MODUS (14. Juli — live verifiziert; Geräte-Test offen):** nach JC-Feedback („ich gehe mit einem Hybrid: aktuellen Stil behalten, Indikatoren + Optionen nur im Edit-Modus"). Ersetzt das „immer-inline". **Ansehen = komplett clean** (keine gepunkteten Affordanzen, keine ＋-Zeilen) mit **einem** Stift oben rechts. Stift → **`_detailEdit`-Modus**: Stift wird zu **Fertig** (Häkchen); Text-/Zahl-Felder (Länge/Gewicht/Schlepp/Gewässer) werden zu **dauerhaften Inline-Inputs** im sauberen Spec-Look (nur eine dezente Akzent-Unterlinie signalisiert editierbar) → **native ↑/↓-Feldnavigation funktioniert jetzt** (waren vorher transiente Felder, deshalb „tot"); Enter springt zum nächsten Feld (`efmNext`); Blur committet pro Feld (`commitEfmInput`→`saveDetailField`). Auswahl/Datum/Angler → antippen öffnet Sheet/Picker und **bleibt im Edit-Modus** (alle Re-Renders mit `keepEdit=true`). **Notizen** = Inline-Textarea **mit Placeholder**. Aktivierte, leere Felder erscheinen **nur im Edit-Modus** als ＋-Zeilen (Ausrichtung gefixt). **Fotos/Karte/Bereich-Gruppe:** vorerst per klar beschriftetem Button **„Fotos, Karte & Bereich bearbeiten"** ins Formular (kein Regress — alles editierbar), Inline-Version = nächstes Increment. Live-Smoke: read-only 0 Inputs/Stift sichtbar → Edit-Modus 3 Inline-Inputs (Länge „70") + 2 Auswahl-Picks + ＋-Zeilen + Notiz-Textarea (DE-Placeholder) + Fertig-Button → zurück clean. **Geräte-Test (JC):** iOS ↑/↓-Navigation, Blur-Commit, Sheet-bleibt-im-Modus.

- **✏️ #15 Inline-Edit Abschluss-Increment (14. Juli — live verifiziert):** **„＋ hinzufügen" für aktivierte, leere Felder** — im editierbaren Detail erscheinen die per Feld-Config (`wxOn`) aktiven, aber leeren Spec-Felder als antippbare „＋ hinzufügen"-Zeilen (teal), sodass man ein fehlendes Gewicht/Methode etc. **inline ergänzen** kann (ohne Formular). **Angler-Umbelegung** (nur im Verein/Gruppe): Tippen auf Angler → Mitglieder-Sheet → Auswahl setzt `owner_id` (+ `logged_by`/`confirmed`: zu mir = bestätigt, zu anderem = unbestätigt), rechnet PB für alten **und** neuen Owner neu, lädt neu. `loadMembersForCtx` lädt die Mitglieder des Fang-Kontexts. Live-Smoke: leere Felder → ＋-Zeilen (weight/released/water); leeres Gewicht antippen → „6,2 kg", `state=6.2`; Angler-Umbelegung verdrahtet. **Bearbeiten-Formular bleibt vorerst** (JC: „get back to it") als Fallback + für Fischart. Damit ist das Inline-Ansehen=Bearbeiten funktional komplett.

- **✏️ #15 Inline-Edit ALLE Felder (14. Juli — live verifiziert):** jetzt sind **alle angezeigten Detail-Felder** eigener Fänge inline editierbar. Typeahead-Sheet für **Methode/Köder/Rute/Boot** (wiederverwendbar gemacht: `openTypeaheadCfg`, `_taCfg.curVal`/`allowNew`; neue Werte via `rememberSuggest` gemerkt) · 3-Optionen-Sheet für **Entnahme** · nativer Picker für **Datum** · Inline-Textarea für **Notizen** (leer → „＋ hinzufügen"). Generischer Saver `saveDetailField` (DB-`update({col})` + `state`-Sync + PB-Recompute bei Länge/Gewicht + Haptik); Dispatcher `startFieldEdit` (inline vs. Sheet vs. Picker). Sheet-basierte Änderungen rendern das Detail neu (Krone/Medaille aktualisieren). Live-Smoke: editierbare Zeilen date/length/weight/released/method/water; Methode-Sheet 8 Optionen, Entnahme-Sheet 3 (kein Add-New), Notizen editierbar. **Offen (letztes Increment):** Angler (Umbelegung) + Fischart · „＋ hinzufügen" für aktivierte, leere Spec-Felder · dann Bearbeiten-Formular ablösen.

- **✏️ #15 Inline-Edit Redesign (14. Juli — live verifiziert):** nach JC-Feedback (Stift-pro-Zeile = Unordnung; Edit-Zustand hässlich) + Recherche „latest & greatest" (Edit-in-place ist Standard; Diskoverierbarkeit ist DAS Problem, Icons überall clutter'n). Umgebaut zum abgestimmten Hybrid: **kein Stift pro Zeile**; editierbare Werte tragen eine **dezente gepunktete Unterstreichung** (Ochre) als leise Affordanz; Tippen öffnet ein **sauberes akzent-umrandetes Inline-Feld mit Einheit** (statt Box+Underline-Murks); Blur/Feldwechsel committet; **einmaliger Diskoverierungs-Puls** der editierbaren Werte beim ersten editierbaren Detail (localStorage `bf_edit_hint`, reduced-motion-sicher). Mockup: `mockup-edit-mode.html`. Live-Smoke: 2 Affordanz-Werte, Box mit Einheit „cm", 70→„84 cm", Puls-Flag gesetzt. iOS-Gefühl von JC bestätigt (Tastatur/Blur). Nächste Increments unverändert (Notizen/Wassertemp · Auswahl-Felder aus Detail · „＋ hinzufügen" · Formular ablösen).

- **✏️ #15 Inline „Ansehen = Bearbeiten" — Increment 1 (14. Juli — live verifiziert; Geräte-Test offen):** Entscheidung mit JC (Mockup `mockup-inline-edit.html`): **A = edit-first**, **immer editierbar** bei eigenen Fängen, **kein „Fertig"-Button** (Blur/Feldwechsel committet). Im **Detail** sind jetzt die Text-/Zahl-Zeilen **Länge/Gewicht/Schleppgeschw./Gewässer** direkt antippbar → die Zeile wird zum Eingabefeld (native Tastatur, kein schwebender Balken; iOS scrollt fokussiertes In-Flow-Feld selbst hoch). Blur speichert **pro Feld** in die DB (`catches.update({col})`), aktualisiert `state.current` + Listen-Cache, rechnet bei Länge/Gewicht `recomputePb` neu; dezentes Haptik-Feedback. Nur eigene Fänge (aus Liste/Statistik). Bearbeiten-Icon (Stift) als Affordanz. **Der bestehende Bearbeiten-Formular-Button bleibt** (für Auswahl-/Datum-Felder + fehlende Felder — Increment 2). Live-Smoke: Zeile→Feld, „80"→„84 cm", `state.current.length=84`, DB-Persist-Pfad. **Geräte-Test (JC):** iOS-Gefühl (Tastatur, Scroll, Blur-Commit) — der robuste Ansatz statt der verworfenen Leiste. **Nächste Increments:** Notizen/Wassertemp inline · Auswahl-/Typeahead-Felder aus dem Detail routen · „＋ hinzufügen" für leere aktive Felder · dann Bearbeiten-Formular ablösen · (B: Create-Flow angleichen — später).

- **🔎 Einheitliches Typeahead-Sheet — Selector-Sweep Teil 2 (14. Juli — live verifiziert):** Ein einziges Sheet mit **Dauer-Suche, Live-Filter (mit Treffer-Hervorhebung), „Zuletzt verwendet"-Sektion und „＋ neu hinzufügen"** ersetzt jetzt **beide** alten Vorschlags-Mechaniken (eigenes Combo bei Fischart/Methode + natives `datalist` bei Köder/Rute/Boot/Ort). Alle **sechs** Felder öffnen dasselbe Sheet (`openTypeahead(id)`); Felder sind read-only + Chevron (Tippen öffnet das Sheet), die Sucheingabe liegt nativ über der Tastatur (kein iOS-Problem). Datenquellen unverändert: Arten aus `SPECIES`+`trSpecies` (lokalisiert, mit `speciesKey`-Mapping), Methoden aus `METHODS`+gemerkt, Köder/Rute/Boot aus `bf_suggest`, Ort aus vorhandenen Fang-Orten. Alte Combo-/datalist-Reste entfernt bzw. tot & entschärft (0 Live-Referenzen, null-safe). Live-Smoke: Art-Sheet 9 Optionen, „he"→Hecht + Add-New, Pick setzt Wert + `speciesKey` + schließt; Methode 8 Optionen. i18n 510/510/510. **Muster in `INPUT-CONVENTIONS.md`.** → Damit ist die App-weite Eingabe-Vereinheitlichung (Sheets für Auswahl/Typeahead, nativ für Text/Zahl) **abgeschlossen**; offen bleibt nur das optionale Inline-Ansehen=Bearbeiten-Template.

- **🧹 Keybar-Experiment entfernt + Selector-Sweep Teil 1 (14. Juli — live verifiziert):** Nach der Analyse (`ANALYSIS-input-types.md`) und Entscheidung mit JC: die schwebende Tastatur-Leiste war der falsche Weg (iOS lässt keine Custom-Chrome über der Tastatur zu). **Komplett entfernt** (Markup, CSS, JS, Flag, Init) — 0 Referenzen. **Selector-Sweep:** **Sortierung** (Liste + Statistik) und **Sprache** nutzen jetzt statt des rohen iOS-`<select>` unser **Bottom-Sheet** (`.selfield` → `openSelSheet`), konsistent zu Angler/Entnahme/Filter. Neuer `.selfield-sm` (kompakt für Toolbars). Live-Smoke: Sort-Sheet öffnet (5 Optionen), Auswahl „Längste" setzt Label + `state.sort`; Sprache zeigt „Deutsch". **Muster dokumentiert** in `INPUT-CONVENTIONS.md`. **Offen (Sweep Teil 2):** ein vereinheitlichtes **Typeahead-Sheet** (Art/Methode/Köder/Rute/Boot/Ort) statt Combo + `datalist`; dann das Inline-Ansehen=Bearbeiten-Template.

- **⌨️ Keyboard-Bar-Prototyp #15 · Increment 1 (Commit 1320984, 14. Juli — flag-gated, live):** erste, **flag-geschützte** Version der Tastatur-Zusatzleiste. `?keybar=1` schaltet frei (persistiert in localStorage; `?keybar=0` aus), **standardmäßig AUS** → Live-Flow unverändert. Bei aktivem Flag zeigt ein Fokus auf ein Zahlenfeld (Länge/Gewicht/Wassertemp/Schlepp) eine schmale angedockte Leiste (Icon · Label · Live-Wert · „Weiter ›"), positioniert über der Tastatur via `window.visualViewport`. „Weiter" springt zum nächsten Zahlenfeld. **Braucht Geräte-Test (JC):** die iOS-Tastatur-Andockung (visualViewport) lässt sich headless nicht validieren — auf dem Handy `…/?keybar=1` öffnen, „Fang eintragen", ein Zahlenfeld tippen. Headless verifiziert: Flag-Capture + URL-Strip, Bar zeigt/versteckt korrekt, Label/Einheit stimmen. **Nächste Increments:** Text-/Auswahl-Felder über die Leiste bzw. Sheets, dann das **vereinheitlichte Ansehen=Bearbeiten-Template** darum herum.

- **🔗 Invite Auto-Join Deep-Link (Commit 4291288, 14. Juli — live verifiziert):** Einladungs-Link enthält jetzt den Code (`…/?join=CODE`). Beim Laden wird `?join` erfasst, in `localStorage` gemerkt und **aus der URL entfernt** (`history.replaceState`); **nach dem Login** automatisch via `join_by_code` eingelöst → Erfolgs-Modal „Beigetreten!" + Kontext-Refresh. Funktioniert für ausgeloggte (Code überlebt den OTP-Login) und eingeloggte Nutzer. „Bereits Mitglied" wird still ignoriert, ungültige Codes zeigen einen klaren Hinweis. Invite-Text nutzt den Code weiterhin zusätzlich als manuellen Fallback. Live-Smoke: `?join=…` wird gestrippt (URL → `?x=1`), Pending eingelöst, alle Marker ✓. DE/EN/NL.

- **👑 Records Stage 2 — Personal Best (Commit cdf6694, 14. Juli — live verifiziert):**
  - **DB-Migration `add_pb_flags`** (via Supabase-Connector, JC-freigegeben): Spalten `pb_length` + `pb_weight` (bool, default false) auf `catches` + Index `(owner_id, species)` + **Backfill** (pro Owner+Art, nur bestätigte; released zählt). Verifiziert: je Owner+Art ≤1 Flag.
  - **Denormalisiertes Modell (JCs Idee):** Flag lebt auf der Fang-Zeile → **jeder, der den Fang sieht, sieht die Krone** (auch Gruppenmitglieder), ohne kontextübergreifende Queries. `recomputePb(owner, species)` hält die Flags nach **Log/Edit/Delete/Confirm** korrekt (idempotent; Edit mit Art-Wechsel rechnet beide Arten neu).
  - **Krone-Badge** (Ochre-Badge, weißes Tabler-Kronen-Symbol) auf Rekord-Fängen in **Listen** (Ecke) + **Detail** (Banner „Persönlicher Rekord · Längster/Schwerster [Art]"). Metrik = persönliche Einstellung `recordMetric` (Standard **Länge**; Umschalter-UI folgt). Welcome-/unbestätigte Fänge ausgeschlossen.
  - **Rekord-Moment:** dezentes **Konfetti** (reduced-motion-sicher) auf dem bestehenden Meilenstein-Overlay.
  - Live-Smoke: Marker ✓, `isPb` (Länge/Gewicht/Welcome) korrekt, Krone rendert in Karte, Konfetti spawnt. i18n-Parität 496/496/496.
  - **Stage 2b/3a (Commit cdf6694-Folge, live):** Länge/Gewicht-Wahl nutzt jetzt die **bestehende „measure"-Einstellung** (kein Doppel-Setting; Hint aktualisiert) → sie steuert Liste, größter Fang UND die PB-Krone. **„Deine Rekorde"-Regal** in Statistik (horizontale Karten, je Art die Krone nach aktueller Metrik, Tap → Detail; Nicht-Rekorde ausgeschlossen). Live-Smoke: 2 Karten (Hecht 97/Zander 60), Nicht-Rekord ausgeschlossen.
  - **Stage 3b — Vereins-/Gruppen-Podium (live verifiziert):** DB-Migration `add_context_record_settings` (`contexts.record_metric` + `records_enabled`, Default `length`/`true`, CHECK-Constraint). Client-Podium je Kontext & Fischart: **Top 3 = Gold/Silber/Bronze** (Medaille + Rang-Nummer) über die Kontext-Fänge (bestätigt), nach Kontext-Metrik; unabhängig vom aktiven Filter berechnet. **Gold trägt zusätzlich das Wort** „Vereinsrekord"/„Gruppenrekord"; Detail-Banner nennt Rang + Metrik + Art + Kontext („Vereinsrekord · Längster Hecht · Seeblick" / „2.-längster Hecht · …"). Nur im Verein/Gruppe (nicht Solo/Statistik); respektiert den Enable-Flag. Live-Smoke: 90/80/70 cm → Rang 1/2/3, 4. ohne Medaille, Gold-Wort da, `records_enabled=false` → keine Medaillen.
  - **Stage 3c — Admin-UI (live verifiziert, Records-System KOMPLETT):** neues Akkordeon „Rekorde & Podium" in den Verein-/Gruppen-Einstellungen: Umschalter **„Rekorde anzeigen"** (records_enabled) + Segment **Länge/Gewicht** (record_metric). Nur Admins (sonst read-only + adminOnly-Hinweis); speichert nach `contexts`, aktualisiert `state.club` + rendert neu. Live-Smoke: Akkordeon sichtbar im Club-Kontext, Checkbox/Segment spiegeln DB-Werte (records_enabled=false, metric=weight).

- **🎣 Butler's Welcome Catch „Phantom-Fisch" + Krone-auf-Dunkel (Commit 0d8b45f, 14. Juli — live verifiziert):**
  - **Welcome-Catch:** clientseitiger Demo-Seed (nie in der DB), erscheint im **leeren Solo-Logbuch**. „Phantom-Fisch" (EN „Phantom Fish"/NL „Fantoomvis"), 235 cm · 99,99 kg, Ort „In deinen Träumen", Butler-Notiz, sichtbares **DEMO**-Pill (Ochre). **Von Statistik/PB/Export ausgeschlossen** (lebt außerhalb `state.catches`). Tippen → read-only Detail (Bearbeiten ausgeblendet) mit Demo-Banner + „Phantom-Fisch entfernen". **Löschbar** (×) und **verschwindet automatisch beim ersten echten Fang** (localStorage `bf_welcome_dismissed`, keine Wiederauferstehung nach späterem Löschen). DE/EN/NL. Live-Smoke: Karte rendert (Phantom-Fisch/DEMO/„235 cm · 99,99 kg"/×/Hinweis), Detail read-only + Banner, Dismiss setzt Flag.
  - **Wortmarke auf Dunkel:** „butler" jetzt **cremefarben** (#F4EFE2) im Dark-Theme (brief-konform, mehr Kontrast); „fish" bleibt Brass. Theme-aware CSS.
  - i18n-Parität geprüft: DE/EN/NL je 495 Keys, keine Lücke.

- **🎨 Rebrand-Fundament → „butlerfish" (14. Juli — live verifiziert, alle Marker + Assets 200):** die visuelle Identität auf das neue ButlerFish-Branding umgestellt (Overnight-Batch #14):
  - **Palette:** komplett neue, aus dem Maskottchen gesampelte Farbwelt (`:root` + `[data-theme=dark]`). Teal `#0D5164`/Aqua-Bright, Navy `#021B28` (dunkler App-BG statt `#0E1013`), warmes Creme `#F4EFE2` (Light-BG statt `#DED7C7`); **Ochre `#C9992B` neu als reine Akzentfarbe** (`--accent`/`--accent-strong`/`--highlight`).
  - **Wortmarke:** aus „Butler Fish" (Marcellus-Serif, Zweiwort) → **„butlerfish"** (Barlow SemiBold, klein, zusammen): „butler" in Teal, „fish" in Ochre. Marcellus-Font entfernt (spart Request). BETA-Pill mit Teal-Border.
  - **Splash/Launch-Motion:** Ochre-Splash (`#C9992B`) statt dunkel; Maskottchen mit `splashIn`-Spring (cubic-bezier(.2,.8,.2,1)) + warmes „esca"-Glühen (radial, pulsierend) → Cross-Fade in die App. `prefers-reduced-motion` respektiert.
  - **Icons/Manifest/Head:** neue Brand-Favicons (`.ico`, 16/32, apple-touch-180), PWA-Icons (192/512/maskable-512), `site.webmanifest` (name „ButlerFish", theme `#0D5164`, bg `#C9992B`), `theme-color`, `apple-mobile-web-app-title`. Alle mit `?v=2` cache-gebustet. Neues Brand-Maskottchen (`mascot.png`, runterskaliert 700px/393KB).
  - **Service Worker `fb-shell-v7`:** Cache-Version-Bump (purged alte Assets) + SHELL-Liste auf neue Asset-Namen aktualisiert.
  - **Copy:** „Butler Fish" → „ButlerFish" durchgängig (Titel, i18n appName, Share-/Invite-/Install-Texte).
  - Deploy: 11 Dateien in einem Commit (Multi-File-Upload). Verifiziert: Titel=ButlerFish, Wortmarke, Barlow, Ochre-Akzent, Splash-Keyframe, Manifest verlinkt, Navy-Var — alle true; favicon/icons/manifest/mascot/sw alle HTTP 200; Login-Screen visuell geprüft.

- **Log-a-catch Glow-up + eigene Auswahl-Sheets (Commit 987e8ac, 13. Juli — live smoke-getestet):**
  - **#3 Wiederverwendbares Single-Select-Sheet:** native `<select>`-Dropdowns (Angler, Entnahme im Formular; Fischart & Angler im Filter) durch unsere **eigene Bottom-Sheet-Auswahl** ersetzt (wie „Eintragen in"/Filter). Architektur: das `<select>` bleibt versteckt die Datenquelle (alle bestehenden Value-/onchange-Logiken unverändert), ein `.selfield`-Button zeigt den Wert + Chevron und öffnet das Sheet; Auswahl setzt `select.value` + feuert `change` + aktualisiert das Label. Auto-Suche wenn Liste lang (>8). Kein iOS-Systemmenü mehr. Smoke-getestet: Sheet öffnet mit 3 Optionen, Auswahl setzt Wert „released" + Label „Zurückgesetzt".
  - **#4 Formular-Feinschliff:** Sektions-Überschriften tragen jetzt dieselben **Tabler-Icons** wie das Detail (Fotos=Kamera, Basis=Clipboard, Der Fang=Fisch, Gewässer=Pin, Bedingungen=Wolke, Technik=Werkzeug, Notizen=Notiz) — Icon als Geschwister-Element neben `<span data-i18n>`, damit `applyLang` es nicht überschreibt. **Foto-Feld** als einladende, volle-Breite gestrichelte Kachel im Leerzustand (großes Kamera-Icon + „Foto hinzufügen" + Hinweis). Angler/Entnahme jetzt als `.selfield` statt Dropdown.

- **Icon-Feinschliff Methode/Rute (Commit 614e953, 13. Juli — live):** nach Icon-Review mit JC: **Angelmethode** target-arrow → **wave-saw-tool** (Zupf-/Einhol-Bewegung — „wie du den Köder führst"). **Rute** dünnes Custom → **Rute + Rolle** (klarer als Angel lesbar; Tabler hat kein Ruten-Icon). **Köder** bleibt fish-hook. Alle drei Geräte-Icons jetzt klar unterscheidbar.

- **Fangdetail-Rework + Fixes (Commit fff6eaf, 13. Juli — live verifiziert):**
  - **Detail-Reihenfolge (2a):** Datum + Angler führen (volle Breite oben) · Länge|Gewicht, Entnahme|Methode, Boot|Tempo gepaart · Rute+Köder direkt beieinander (volle Breite, dürfen lang sein) · Gewässer · „Erfasst von" (nur wenn jemand anderes eingetragen hat). **Leere Felder werden ausgeblendet** (kein „—" mehr). Breite je Feldtyp fest (kurz/numerisch = halb, lang/Text = voll) → keine zufällige Streuung.
  - **Wetter vereinheitlicht (2b):** Wetter nutzt jetzt dieselbe Icon-Spec-Sheet-Sprache wie der Fang. **Wassertemperatur** ist hierher gewandert (Tropfen-Icon). **Trends** (7-Tage-Tendenz) bleiben als kleine Teal-Zweitzeile unter dem Wert — für Angler relevant (fallender Druck ⇒ oft bessere Beißphasen). Wassertemp erscheint auch ohne API-Wetter.
  - **Karte:** ans **Seitenende** verschoben (unter das Wetter) — die beiden Spec-Sheets stehen zusammen, die Karte schließt ab. Notizen sitzen direkt unter den Fangdaten.
  - **Stats-KPI (5):** Längster + Schwerster jetzt in **derselben Zeile** (Zähl-Kacheln oben: Gesamt|Arten, Rekorde unten: Längster|Schwerster) — vorher diagonal.
  - **Filter-Zeitraum:** From/To-Datumsfelder bleiben jetzt **exakt gleich breit**, auch wenn nur „Von" gefüllt ist (feste 50%-Basis statt intrinsischer iOS-Datumsbreite).
  - **Dezimal-Bug (iOS):** Gewicht/Wassertemp/Schleppgeschw. waren `type=number` → iOS akzeptierte das deutsche „," nicht (Taste tat nichts) und Platzhalter/Feld passten nicht zusammen. Jetzt `type=text inputmode=decimal` + Komma→Punkt-Parsing (war schon da) → „," funktioniert.

- **Icon-Pass: echte Tabler-Icons (Commit e0ffe75, 13. Juli — live verifiziert):** die bespoke/uneinheitlichen Icons durch **authentische Tabler-Outline-Pfade** ersetzt (JC hat den MIT-Open-Source-Satz lokal bereitgestellt, exakte Pfade von Platte gelesen). Getauscht: **Detail-Spec-Sheet** komplett (Angler→user, Gewässer→map-pin, Länge→ruler, Gewicht→weight, Methode→target, Köder→fish-hook, Boot→sailboat, Wassertemp→thermometer, Entnahme→fish, Datum→calendar); **Fisch-Icon** (Empty-State-Thumb, 120er-viewBox → 24er Tabler-Fisch, Fill→Stroke); **Statistik-Balken** (chart-bar), **Solo/Person** (user), **Kategorie-Icons** im Filter (Alle→stack, Gruppen→users, Vereine→shield); **Einstellungen-Regler** (adjustments-horizontal); **Onboarding** Pokal/Blitz/Users; **In-Karten-öffnen** (navigation), **Mein-Standort** (current-location). Bereits Tabler-identische Icons (Chevrons, Plus, Check, X, Teilen, Papierkorb, Kamera, Download, Filter, Stern, Schloss, Kopieren) **unverändert gelassen** (kein Mehrwert, nur Risiko). Alle getauschten per Live-Render + Zoom-Screenshot geprüft.
- **„Meine Fänge"-Karte entschärft (Commit 6e0d82d-Folge, 13. Juli — live):** die laute Teal-Tint-Hervorhebung entfernt; die Karte nutzt jetzt den **normalen Vereins-/Gruppen-Kartenstil** und zeigt **Avatar/Initialen des Nutzers** (statt Balken-Icon) — konsistent mit den Club-/Gruppen-Kacheln, oben stehend als primärer Einstieg.

- **Design-Review-Umsetzung Batches 2–4 (Commits 6e0d82d + Icon-Fix, 13. Juli — live smoke-getestet):** die vom Review freigegebenen Struktur-/Settings-/Stats-Verbesserungen umgesetzt und deployed:
  - **2.1 Collapsibles vereinheitlicht:** Home-Kategorien nutzen jetzt dasselbe Muster wie die Settings-Akkordeons — Label links, **Chevron rechts**, volle Breite tippbar. Alter `.cathead`/`.catadd`-Header-Plus entfernt.
  - **3.3 Home-Umbau:** „Meine Fänge" ist jetzt eine **eigene hervorgehobene Karte** (Teal-Tint + Teal-Rand, Icon + Name + Sub + Chevron) oben — statt einer Ein-Element-Kategorie „Persönlich". Vereine/Gruppen bekommen unten in der Kategorie eine **Ghost-Add-Row** (gestrichelt, „＋ Verein/Gruppe hinzufügen") — das ist gleichzeitig der Empty-State-CTA (2.6).
  - **2.2/3.9 Picker-Sheets angeglichen:** beide Sheets (Log-to & Filter „Fänge aus") zeigen die Suche jetzt **konsistent** — automatisch, sobald die Liste lang ist (>6 Vereine/Gruppen), sonst ausgeblendet. Beide mit „Fertig".
  - **3.6 Fang-Formular (#24):** die **Ein-Feld-Sektionen** Fotos & Notizen verlieren ihren großen Sektions-Header und tragen das Label direkt am Feld (leichteres Layout).
  - **3.5 Detail als Spec-Sheet:** die Detail-Zeilen sind jetzt ein **2-spaltiges Icon+Label+Wert-Raster** (Angler, Gewässer, Länge, Gewicht, Methode, Köder, … mit eigenem Line-Icon je Zeile; lange Werte wie Gewässer/Datum spannen volle Breite). Kürzere, elegantere Seite.
  - **3.7 Filter gruppiert:** „Eigenschaften" → klare Sektionen **Fang** (Art/Angler/Fänge-aus/Ort + Unbestätigte ausblenden) und **Maße** (Länge/Gewicht).
  - **3.4 Stats-KPI aufgeräumt:** die „Total"-Kachel trägt die **Jahres-Zahl als kompaktes Sekundär-KPI rechts** — dadurch sauberes 2×2-Raster ohne unebene 5. Kachel, einheitliche Kachel-Höhe. (Karte zeigt schon ab ≥1 verortetem Fang.)
  - **3.8 Settings:** Feld-Präferenz-Chips zeigen zusätzlich die **fest eingebauten Pflichtfelder** (Fischart/Datum/Angler) als **gesperrte Chips mit Schloss-Icon** oben („immer dabei"). **Gefahrenzone** jetzt symmetrisch: eigenes „Gefahrenzone"-Akkordeon in **beiden** Tabs (Konto-Löschen aus dem Konto-Akkordeon herausgelöst).
  - **Icons:** Gewicht-Icon → Hantel (statt padlock-ähnlich), Entnahme-Icon → klarer Fisch. Verifiziert per Live-Render-Smoke-Test + Screenshot.

- **Onboarding v2 + Tagline + Cleanup (Commits 9296fb5 · 784317c · d6a567c, 13. Juli):** Onboarding-Reihenfolge Welcome→What-to-expect→Profil→App; neuer Value-Screen (Maskottchen · Butler Fish · Catch·Log·Organize · 3 Benefits mit Pokal-Icon). **Tagline app-weit** → „Catch · Log · Organize" (lokalisiert). **Code-Cleanup:** 8 tote CSS-Regeln (`.chkgrid`, `.ctx-picker`, `.ob-list/.ob-li*`) + 39 tote i18n-Keys (27 alte Onboarding-Keys, chooseArea, entry, installIosChrome*) entfernt. **Design-Review** erstellt (`DESIGN-REVIEW.md`). Roadmap: Push-Notifications-Status geklärt (⏳ Backend/PWA-only iOS 16.4+), „Personal Best info" als Pre-Launch-F ergänzt.

- **Dedizierte Mini-Thumbnails (Commit 43f48ca, 13. Juli):** zusätzlich zum 1600-px-Hauptbild wird beim Upload ein **~400-px-Thumbnail** (JPEG q0.7, ~15–30 KB) erzeugt und separat in `catch-photos` gespeichert. DB: neue Spalte `catch_photos.thumb_path` (Migration angewandt). **Liste** lädt jetzt das Thumbnail (statt Vollbild), **Detail/Lightbox** weiter das Vollbild. Read signiert beide Pfade, Fallback auf Vollbild wenn kein Thumb (bestehende Fotos). Delete räumt Thumbs mit auf. *(Nur neue Uploads bekommen Thumbs; alte Fotos zeigen weiter das Vollbild in der Liste.)*
- **Foto-Downscale beim Upload (Commit c8a20f6, 13. Juli — live smoke-getestet):** Fotos wurden bisher **in voller Kamera-Auflösung** gespeichert (mehrere MB) → langsam in Liste + Detail. Jetzt werden Uploads client-seitig auf **max. 1600 px** (JPEG q0.82) herunterskaliert, EXIF-Orientierung wird berücksichtigt, Metadaten werden beim Re-Encode entfernt (auch Datenschutz-Plus). Test: 3,9 MB / 3000×2000 → 1600×1067 JPEG. GPS/Datum-Auslesung bleibt (aus Originaldatei). *(Nur neue Uploads; bestehende Fotos bleiben groß. Nächster optionaler Schritt bei Bedarf: separate Mini-Thumbnails für die Liste.)*
- **Batch B abgeschlossen (Commit 7f529bc, 13. Juli — live geprüft):**
  - **#14 Filter-Kontext als Avatar-Picker:** der Verein/Gruppe-Filter (Statistik/„Meine Fänge") nutzt jetzt den „Log to"-Stil — Sektion **Kategorien** (Alle · Solo · Alle Gruppen · Alle Vereine, mit Icons) klar getrennt von **Vereine/Gruppen** (mit Logos + Häkchen). Fischart etc. bleiben Selects. Smoke-getestet.
  - **#18 Einstellungs-Navigation:** **bereits erledigt** durch den früheren Akkordeon-Umbau — beide Tabs nutzen durchgängig dasselbe Muster; kein weiterer Bau nötig (siehe Bugs-Doc #18).
  - **Housekeeping:** Debug-Overlay (4×-Tap) entfernt. **„Dieses Jahr"-Kachel** zeigt jetzt Jahr bzw. Filter-Zeitraum. Sentence-Case-Audit: sauber.
- **Standalone-Vollbild ENDGÜLTIG gefixt (Commit 648795f, 13. Juli):** Diagnose per On-Device-Debug-Overlay: `screen 852` vs `innerHeight/app 793` → genau **59px = safe-top** fehlten unten. Ursache: `apple-mobile-web-app-status-bar-style: black-translucent` verkleinert bei iOS die Viewport-Höhe um die Statusleiste, hält sie aber oben-bündig → 59px toter Raum **unten**. **Fix:** Statusleisten-Stil auf **`black`** → die reservierten 59px wandern nach oben (normale Statusleiste), Inhalt reicht bis unten. ⚠️ Statusleisten-Stil wird von iOS **beim Installieren gecacht** → App vom Homescreen **entfernen + neu hinzufügen** nötig.
- **Standalone-Vollbild v2 + Loader + Batch-B-Start (Commit ~156, 13. Juli):**
  - **Vollbild-Fix v2:** `#app` jetzt `position:fixed; inset:0` (an den Viewport-Rand geklemmt) statt Höhen-Prozente/dvh — robusteste Methode gegen den iOS-Standalone-Bug. Desktop-Media-Query auf `position:relative` zurückgesetzt.
  - **Loader:** Maskottchen größer (180 px), Mindestanzeige **1,5 s** (kein Flackern). Temporäres Diagnose-Overlay: Home-Header-Logo **4× tippen** zeigt Viewport-Messwerte (falls Vollbild noch klemmt).
  - **Batch B #16:** Teilen-Vorlage — Editor zuerst, Live-Vorschau darunter (keine zwei konkurrierenden Boxen mehr).
  - **Batch B #15:** „Meine Fänge"-Toolbar — Sortieren/Export als saubere Listen-Kopfzeile mit Fang-Anzahl links (statt schwebender Buttons überm ersten Fang).
  - *(Batch B offen: #14 Filter-Avatar-Sheet, #18 Einstellungen-Navigation vereinheitlichen — als fokussierter nächster Pass.)*
- **Standalone-Vollbild-Fix (Commit f108402, 13. Juli):** Home-Screen-PWA füllte den Bildschirm nicht (dunkles Band unten = durchscheinender Body `#0E1013`). **Ursache:** `#app`-Höhe hing an `100dvh` / `window.innerHeight`, was iOS im Standalone **zu kurz** auflöste → `#app` endete vor dem Bildschirmrand. Meta-Tags waren bereits korrekt (`viewport-fit=cover`, `black-translucent`, Manifest `standalone`). **Fix:** klassische `height:100%`-Kette (`html`→`body`→`#app`) als finale Höhen-Deklaration — füllt randlos, unabhängig vom dvh/innerHeight-Bug. *(Standalone kann alte Version cachen: zum sicheren Testen App vom Homescreen entfernen + neu hinzufügen, mindestens aber schließen & neu öffnen.)*
- **Perf + Loader + Fixes (Commit a601f92, 13. Juli — live geprüft):**
  - **Maskottchen-Ladescreen:** Vollbild-Overlay mit zentriertem Maskottchen (sanfter Puls) beim Initial-Load + Datenabruf nach Login; blendet aus, sobald ein Screen rendert (`go()`), Safety-Net nach 8 s. `showLoader()`/`hideLoader()`.
  - **Login-Queries parallelisiert:** in `goChooser` laufen `loadCtxActivity` + die Admin-Zähler jetzt via `Promise.all` parallel (statt 4× sequenziell) — schnellerer Chooser. Fonts hatten bereits `display=swap`.
  - **Angler-Filter aus Mitgliederliste:** im Verein/Gruppe listet der Filter jetzt die **Mitglieder** (Ich zuerst, „(du)"), nicht nur Angler mit Fängen; lädt die Mitglieder bei Bedarf nach.
  - #20 **Profil-Subheadline final entfernt**, stattdessen **E-Mail schreibgeschützt** im Profil-Akkordeon; #12 **Homescreen-Footer** unten fixiert (Fill-to-bottom, live gemessen).
  - Roadmap: „Log catches for others" ist **bereits gebaut** (Doku korrigiert); Push-Notifications liegen im Social-Add-on (v2).

- **Batch A „Diskussion 11–20" (Commit a4f791e, 13. Juli — live geprüft):**
  - #11 **Tagline neu:** „Dein Fang, gut aufgehoben." / „Your catch, well kept." / „Je vangst, goed bewaard." (Butler-Ton statt „Fangen. Protokollieren. Organisieren.").
  - #12 **App füllt bis unten:** echte sichtbare Viewport-Höhe per JS (`--app-vh` = `window.innerHeight`, aktualisiert bei resize/orientation) für `body` + `#app`; behebt den Dead-Band unten (iOS `100dvh` löste zu kurz auf).
  - #13 **Detail-Kopf:** Artname als Überschrift + **Subtitle-Zeile** (Länge · Gewicht · Ort · Datum) statt nur Maß daneben.
  - #17 **2-Spalten** für die Fang-Feld-Schalter (`.chkgrid`), spart vertikale Länge.
  - #19 **My-Catches-Avatar:** persönliches Avatar/Initialen im Kopf der „Meine Fänge"-Ansicht.
  - #20 **Profil-Kopf:** Avatar + Name + (E-Mail dezent) als Subheadline oben im persönlichen Tab; „Profil"-Akkordeon startet eingeklappt.
  - **Neu:** Einstellungen-Tab **kontextsensitiv** — zeigt „Verein" **oder** „Gruppe" (je nach Kontext) statt „Verein/Gruppe".
  - *(Batch B folgt: 14 Filter-Avatar-Sheet · 15 My-Catches-Layout · 16 Teilen-Vorschau · 18 Einstellungen-Nav vereinheitlichen.)*
  - **Fix (Commit fd2ef13):** Header-Tagline zeigte alte „Catch. Log. Organize." — Homescreen-Header nutzte den **falschen i18n-Key** (`chooseArea` statt `tagline`); jetzt korrekt verknüpft. Zusätzlich **Service-Worker auf v6** angehoben, damit Geräte den neuen Stand sauber nachladen (alte Caches werden gelöscht).
  - **Nachbesserungen (13. Juli):** #20 **Profil-Subheadline zurückgenommen** (sah komisch aus) → stattdessen **E-Mail (schreibgeschützt)** in den persönlichen Einstellungen im „Profil"-Akkordeon; #12 **Homescreen füllt bis unten** via Flex-Spalte + Footer `margin-top:auto` (Standalone-PWA hatte durch die höhere Viewport-Höhe unten Leerraum; Browser sah ok aus). Roadmap ergänzt: E-Mail-Änderungs-Flow, „Catch. Log. Organize." sinnvoll wieder einbauen, Perceived-Slowness/Perf-Pass + Maskottchen-Ladescreen, Angler-Filter aus Mitgliederliste.
- **Batch „Diskussion 1–10" (Commit 1fc87a0, 13. Juli — live geprüft):**
  - #1 **Invite/Share** → kompakter sekundärer Icon-Button (Teilen-Icon) inline neben dem Beitritts-Code (statt Vollbreite-Button).
  - #2 **App & Hilfe** verschlankt: seltenen „iPhone (Chrome)"-Install-Block entfernt.
  - #3 **Homescreen „+" kontextsensitiv:** Vereine-„+" zeigt nur Vereins-, Gruppen-„+" nur Gruppen-Aktionen (Titel passt sich an). Mehr Abstand zwischen Kategorien (26 px).
  - #4 **Open-in-Maps** als Icon-Overlay unten rechts auf der Detail-Karte.
  - #5 **Clubs/Gruppen umsortieren** per Long-Press-Drag; Reihenfolge lokal gespeichert (`bf_order`) und beim Rendern angewandt. *(Touch-Gefühl auf Gerät prüfen.)*
  - #6 **+N-Badge antippbar** → Info „Auch eingetragen in …" mit den weiteren Vereinen/Gruppen (stopPropagation, öffnet nicht den Fang).
  - #7 **Vorschläge merken:** Methode/Köder/Rute/Boot merken zuvor eingegebene Werte (`bf_suggest`, persönlich/lokal; Methode fließt in die Combo, Köder/Rute/Boot als Datalist).
  - #8 **„Mein Standort"** als Icon-Overlay unten rechts auf der Formular-Karte.
  - #9 **Notizen-Platzhalter** gekürzt.
  - #10 **Detail-Hero-Band** ohne farbiges Band — schlichte dunkle Überschrift (Art + Maß).
  - **Nachtrag (Login):** Zeilenumbruch im Intro vor „Kein Passwort nötig." (de/en/nl) — bessere Zeilenführung auf dem Handy.
  - **Gerätetest-Fixes (13. Juli):** (4) **Zoom-Controls (+/–) jetzt auch auf der Detail-Karte** (vorher nur im Formular) → konsistent. (5) **Drag-Reorder** fixt Text-„Kopieren"-Problem: `.club.sortable` bekommt `user-select:none` + `touch-callout:none` + `touch-action:none`, damit der Long-Press zieht statt Text zu markieren. *(Trade-off: Scrollen direkt auf einer Kachel deaktiviert — auf Gerät gegenprüfen; falls störend, Alternativ-Muster mit Ziehgriff.)*

- _(Commit 56 = Basis: Profil-Persistenz gehärtet, Unbestätigt-Checkbox-Fix, Kassenwart raus, Rechts-Disclaimer raus, Kontakt→info@thefishingbutler.app.)_
- **Bau-Block A (Commit 57):**
  - #1 **Feedback-Modal** statt Mailprogramm → speichert in DB `beta_feedback`; App-Admin sieht „Feedback"-Eingang im Startbildschirm (mit Zähler) und kann „Erledigt" markieren. _(E-Mail-Benachrichtigung an dich folgt via Edge Function + Resend-Secret.)_
  - #2 **Filter-Autocomplete:** Ort/Gewässer schlägt vorhandene Werte vor (Datalist).
  - #3 **Verein-/Gruppenname editierbar** (Admin, in Bereich-Einstellungen; live + gespeichert + Toast).
  - #4 **Beitritts-Code** aus der Übersicht entfernt → in Bereich → „Mitglieder": Code (antippbar = kopieren) + **„Einladen / Teilen"** (Text mit App-Link + Code, native Share/Zwischenablage).
  - #5 **Verlassen/Löschen-Buttons:** gleiches Styling; Text zeigt „Verein"/„Gruppe" korrekt.
  - #6 **Stern-Legende** im Fang-Formular (blau = immer erforderlich, rot = vom Verein/Gruppe verlangt).
  - #7 **Angelmethode** = klares Dropdown wie die Fischart (Vorschläge + freie Eingabe).
- **Commit 58:** Feedback-**E-Mail-Benachrichtigung** via Edge Function `feedback-notify` (Resend). Geht direkt an johannesclaudi@gmail.com. **Wartet auf:** RESEND_API_KEY als Supabase-Edge-Function-Secret.
- **💬#1 Einstellungs-Umbau (Commit 59):**
  - **Akkordeon**-Einstellungen: nur eine Gruppe offen, „Profil" beim Öffnen aufgeklappt, Öffnen einer Gruppe schließt die andere.
  - Reihenfolge: **Profil · Darstellung · Fang-Eingabe · Teilen-Vorlage · App & Hilfe · Konto**.
  - **Darstellung** zusammengefasst (Sprache → Design/Theme).
  - „Fang-Felder" (persönlich) heißt jetzt **„Fang-Eingabe"**.
  - **Konto**-Gruppe: Abmelden oben, „Konto löschen" (rot) darunter.
  - **Standard-Maß entfernt:** Fang-Karten zeigen **Länge · Gewicht beide**; Liste & Statistik zeigen **„Längster" UND „Schwerster"**; die zuletzt gewählte Sortierung bleibt als Voreinstellung.
  - Irritierender Untertitel „Solo · Name" in den Einstellungen entfernt (nur noch dein Name).
- **💬#4 Teilen-Vorlage (Commit 60):** Nur noch „eigene Vorlage" (Felder-Modus raus), vorbelegt mit App-Standardvorlage (🎣 {art} — {maße} / 📍 {ort} · {datum} / „Eingetragen mit The Fishing Butler" / {link}); **Vorschau oben**.
- **💬#6 Startbildschirm (Commit 60):** Einklappbare Kategorien **Persönlich · Vereine · Gruppen** (unabhängig auf/zu), mehr Abstand; **＋** in Vereine/Gruppen-Überschrift → Menü Beitreten/Anlegen/Anfragen; **Aufgaben-Center** oben (nur App-Admin, nur wenn offen) mit **Pill/Zähler auch wenn eingeklappt**.
- **💬#5 Login-Umbau + „Von allen Geräten abmelden" (Commit 61):**
  - **E-Mail-Code (OTP)** ist jetzt die einzige Login-Methode: E-Mail → „Code anfordern" → 6-stelligen Code aus der Mail eingeben (`autocomplete="one-time-code"`) → `verifyOtp` (Typen email+signup). Kein Browser-Sprung mehr.
  - **Auth-E-Mail-Vorlagen** in Supabase auf Code umgestellt (Magic link or OTP **und** Confirm sign up; de/en/nl; `{{ .Token }}` prominent, kein Link).
  - **Magic-Link deaktiviert** (Code bleibt im Projekt, auf Feature-Liste).
  - **„Von allen Geräten abmelden"** unter Abmelden (global `signOut`).
- **💬#7 Login-Marke (Commit 62):** prominentes Marken-Banner (Teal-Verlauf, größeres Icon + Titel).
- **💬#8 Export + Listen-Überschrift (Commit 63):** zwei Export-Buttons (CSV/PDF) → **ein „Export"-Button** mit Menü CSV/PDF (Liste & Statistik, oben neben Sortierung). **Listen-Überschrift folgt der Sortierung** (Neueste/Älteste/Längste/Schwerste/Nach Art; „Gefiltert" bei Filter).
- ✅ **Damit ist die ganze 💬-Diskussionsliste (#1–#8) durch.**
- **🔧 Auto-Reload/Realtime (Commit 66):** Neuer/geänderter/gelöschter Fang in einer Gruppe/einem Verein → online-Mitglieder laden **sofort** nach (Supabase Realtime, `postgres_changes` auf `catches`, gefiltert auf `context_id`; 600 ms Debounce; nur wenn man denselben Bereich offen hat). `catches` zur Publication `supabase_realtime` hinzugefügt. An-/Abmeldung an `chooseClub`/`startSolo`/`leaveArea` gebunden.
- **🔧 Onboarding-Flow (Commit 73–74):** Kompaktes **4-Schritte-Onboarding** (Willkommen → Profil mit Name+Avatar → Solo/Verein/Gruppe erklärt → „Als App speichern"). Vollflächiges Overlay im App-Stil (Teal/Barlow), Fortschritts-Punkte, Weiter/Zurück/Überspringen, Zurück-Geste integriert. **Auslöser:** automatisch beim **ersten Login** (neue Spalte `profiles.onboarding_done`, synct über Geräte) + jederzeit erneut über **Einstellungen → App & Hilfe → „Einführung ansehen"**. Profil-Schritt schreibt Name/Bild direkt in die bestehende Persistenz; „Als App speichern" öffnet die vorhandene Install-Hilfe. de/en/nl. Live alle 4 Screens visuell geprüft. _(74 = Footer-Button-Breite gefixt.)_
- ✅ **Onboarding** ist damit erledigt (war letzter größerer Bau).
- **🔧 Onboarding-Feinschliff + i18n-Fix (Commit 75–76):** Schritt-1-Button volle Breite; Schritt „Solo/Verein/Gruppe" als **Erklär-Liste** (keine App-fremden Emojis, Einleitungssatz) statt Buttons; iPhone-**Chrome**-Anleitung in „Als App speichern"; Formulierung „…startet **er**…" → „…startet der Butler…"; Fisch-Emoji vom Fertig-Button entfernt. **Splash umgebaut:** kein Outro mehr (behebt Flackern), stattdessen **Startup-Ladescreen** (Logo + Name beim App-Öffnen, ~1,2 s, blendet aus). **i18n-Bug behoben:** Sprachwechsel re-rendert jetzt die **dynamischen Panels** (Fang-Eingabe-Felder, Bereich-Felder, Teilen-Vorlage), die vorher in der alten Sprache „hängen blieben"; **Verein/Gruppe-Platzhalter** („z. B. ASV Musterstadt/Musterteich") jetzt übersetzt (de/en/nl).
- **🔧 Safe-Area (Commit 77–78):** **`viewport-fit=cover`** ergänzt + **Topbar** `safe-area-inset-top`-Polster → App liegt sauber unter Notch/Statusleiste. (Bleibt drin.)
- **🔧 Ladescreen/Splash entfernt (Commit 80):** Der Startup-Logo-Screen verursachte auf dem iPhone einen Mikro-Flash beim ersten Frame (trotz DOM-Reihenfolge). Auf JC-Wunsch **komplett entfernt** — App öffnet direkt, Onboarding-Ende schließt ohne Splash.
- **🐛 Wisch-/Zurück-Geste (Commit 71):** Android-Chrome-Webapp wurde durch die Zurück-Wischgeste **geschlossen**. Jetzt fängt die App die Zurück-Geste/den Android-Zurück-Button ab (`history.pushState`-Guard + `popstate`) und navigiert **innerhalb** der App: 1) offenes Modal/Dialog schließen → 2) offenes Dropdown schließen → 3) Login-Code-Schritt → zurück zur E-Mail → 4) einen Screen zurück (interner Nav-Stack, `go()` erweitert) → 5) am Startbildschirm: Geste wird geschluckt, App bleibt offen. `go(name)` trackt jetzt die Screen-Historie; Root-Screens (login/club) setzen den Stack zurück. **Bitte auf Android testen** (auch iPhone gegenprüfen — dort war „nichts").
- **🐛 Logout-Ansicht (Commit 70):** Nach dem Abmelden blieb der **Code-Schritt** sichtbar (Login aktualisierte sich erst beim erneuten Antippen). `signOut` und `signOutAll` rufen jetzt `changeLoginEmail()` auf → zurück auf den sauberen E-Mail-Schritt, Code-Feld geleert.
- **🐛 LOGIN-BLOCKER behoben (Commit 69):** Supabase verschickt **8-stellige** Codes, das Eingabefeld war aber auf **6** begrenzt (`maxlength=6`) **und** `verifyCode` verlangte per Regex genau 6 Ziffern (`/^\d{6}$/`) → Anmeldung unmöglich. Jetzt: Feld nimmt bis zu 8 Ziffern, Regex `/^\d{6,8}$/` (6–8 gültig), und alle Texte („6-stelligen Code" → „Code" in de/en/nl) sind **längenneutral**. _(Alternative, falls kürzer gewünscht: Supabase Auth „Email OTP Length" auf 6 stellen — dein Go.)_
- **🔧 Beta-Anfrage-E-Mail (Commit 68):** Wenn jemand über „Zugang anfragen" eine Anfrage stellt → **E-Mail an dich** (johannesclaudi@gmail.com) via neue Edge Function `beta-request-notify` (Resend, gleiches Muster wie Feedback). Da der Anfragende **nicht angemeldet** ist, läuft die Function öffentlich (`verify_jwt=false`); **Missbrauchsschutz:** sie prüft per Service-Role, dass wirklich eine passende **pending**-Anfrage in `beta_requests` existiert, bevor sie mailt. Reply-To = E-Mail des Anfragenden. Freigeben weiterhin: Aufgaben-Center → Beta-Anfragen.
- **🔧 EXIF neu auslösen (Commit 67):** Jedes Foto im Fang-Formular hat jetzt unten rechts einen **Pin-Button** „Ort & Zeit aus diesem Foto übernehmen". Zieht GPS + Aufnahmezeit erneut aus dem gewählten Foto und **überschreibt** die aktuellen Werte (nützlich, wenn zuerst das falsche Foto geladen wurde). Auto-Prefill (erstes Foto, neuer Fang) bleibt unverändert; beide teilen jetzt eine gemeinsame `applyExif(src, force)`-Funktion. Toast „Kein Ort/keine Zeit im Foto gefunden", wenn nichts drin ist. de/en/nl.

---

## 🟡 Butler-Fish-Rebrand + UX-Pass (gebaut, teils noch nicht deployed)
*Details im englischen `ROADMAP.md` → „Recently shipped". Kurz:*
- **Rebrand Butler Fish** (Marcellus-Wortmarke + Teal „Fish", Manifest, alle Strings), **Origami-Anglerfisch-Maskottchen** + Icon-Set + frei schwebend in-App.
- **Offline-Write-Queue + Auto-Sync** (Pending-Pills, Sync-Banner); **Zwei-Stufen-Erfolgs-Feier** (Maskottchen + Meilenstein-Flare); **Edge-Swipe-Back**; **Ziel-benannter FAB**.
- **Audit-Feinschliff:** Type → rem, Kontrast-Fixes, `--rust` raus + Cyan-Spark, einheitliche Sektions-Labels, doppeltes „Fotos" raus, Settings-Untertitel, Form-Zurück zum Ursprung.
- **Foto-Save diff-basiert** (behebt Foto-Verlust beim Bearbeiten) + Signed-URL-Cache (kein Reload-Flackern); **fixierte Save-Leiste** + Ungespeichert-Warnung + „grau bis gültig".
- **Mehrfach-Gruppen-Logging**, „+N Bereiche"-Badge in Meine Fänge, einzeilige Detail-Hero.
- **Profil-Feinschliff #16 (12. Juli, deployed):** Initialen-Editor sitzt in Verein/Gruppe jetzt **über** dem Standort; Sektions-Label **„Kürzel anpassen" → „Initialen"**; **Tippen aufs Avatar-/Logo-Bild wechselt die Farbe** (im Initialen-Modus), Kamera-Badge lädt weiterhin ein Foto hoch. *(Die zwischenzeitliche „Nur Initialen"-Beschriftung war ein Missverständnis und ist wieder raus.)* Live verifiziert.
- **Kleinkram (12. Juli, deployed):** „⌄"-Chevron vom Rollen-Badge entfernt (Tap reicht); Reset-Vorlage-Button erscheint jetzt auch beim Einfügen eines **Platzhalter-Chips** (nicht nur beim Tippen).
- **Onboarding-Review-Fixes (12. Juli, deployed):** Welcome-Text auf „Dein digitales Fang-Logbuch." gekürzt (kein „solo/gemeinsam" mehr, widersprüchliche Werte bereinigt); Profil-Schritt-Titel „Dein Profil" (statt „Wie sollen dich andere sehen?"); Profil-Schritt minimal & zentriert (redundantes „Name"-Label raus, Platzhalter); **App-Icon statt 📲-Emoji** im „Als App speichern"-Schritt; **Nav-Buttons einheitlich `sm`**. „Als App"-Schritt bleibt (JC).
- **Danger Zone in „Konto" verschoben (12. Juli, deployed):** Persönliche „Gefahrenzone" (Mitgliedschaften + Konto löschen) ist jetzt **innerhalb der Konto-Sektion** eingebettet (kein eigenes rotes Akkordeon mehr).
- **Personal Danger Zone (12. Juli, deployed):** Persönliche Einstellungen haben jetzt eine eigene **„Gefahrenzone"** (eingeklappt, wie Verein/Gruppe): **Meine Mitgliedschaften** (jeder Verein/jede Gruppe mit **Verlassen**-Button, Sole-Admin-Schutz) + **Konto löschen**. **„Verlassen" aus den Gruppen-Einstellungen entfernt** (jetzt nur noch hier). Live verifiziert (Liste rendert, Buttons, Leave-Logik gespiegelt von `leaveContext`).
- **Einstellungen-Feinschliff (12. Juli, deployed):** Verein/Gruppe-„Profil": **ein einziger** Admin-Hinweis für die ganze Sektion („Nur Admins können das Profil ändern (Name, Standort, Logo)…") statt zwei; **verschobener** „Ohne Bild…"-Hinweis entfernt. Einstellungen öffnen jetzt **immer auf dem Tab „Persönlich"** (nie mehr Verein/Gruppe vorausgewählt).
- **Bug-Fixes (12. Juli, deployed):** **Häkchen** in den Log-Feldern jetzt **zentriert** (statt fixem `left:7px`); **Konto-Buttons** vereinheitlicht (alle `secondary sm`, gleiche Größe), „Konto löschen" jetzt **rot umrandet wie die Danger Zone** (statt vollflächig rot); **Hinweis** ergänzt: „Tippe aufs Bild für eine andere Farbe" (nachdem die Swatches raus sind).
- **Farb-Swatches entfernt (12. Juli, deployed):** Da das **Tippen aufs Avatar-/Logo-Bild** die Farbe wechselt, sind die Farb-Kästchen im Initialen-Editor raus (Profil persönlich + Verein/Gruppe). Nur noch Initialen-Feld + Bild-Tap.
- **Quick-Fix-Cluster (12. Juli, deployed):** Fang-Karte zeigt **Jahr** nur wenn ≠ laufendes Jahr; **„–"** bei fehlender Länge/Gewicht **ausgeblendet** (statt Strich). **Erfolgs-Feier nur bei neuem Fang** (nicht mehr beim Bearbeiten) und **etwas länger**. **Notizen**: doppelte Überschrift entfernt (nur noch Sektions-Divider). **Mitglieder-Hinweis** gekürzt (Klammer-Rollen raus). **Reset-Vorlage** = kleines **Icon** oben rechts im Vorlagenfeld + **Sichtbarkeit** aktualisiert jetzt live bei Eingabe. **Mitglieder inline**: Tap auf letzte Admin-Rolle zeigt jetzt **Hinweis** statt nichts. **Teilen-Token**: Backward-Compat-Aliase entfernt (niemand onboarded). Live verifiziert.
- **Danger Zone eingeklappt (12. Juli, deployed):** In Verein/Gruppe-Einstellungen ist die „Gefahrenzone" (Verlassen/Löschen) jetzt ein **eingeklapptes Akkordeon** (standardmäßig zu, rotes Label + Chevron), statt immer voll sichtbar Platz zu fressen. Ein Tap öffnet sie.
- **Mitglieder inline (12. Juli, deployed):** Kein „Mitglieder verwalten"-Button/Modal mehr — die Mitgliederliste steht **direkt in den Einstellungen** (Verein/Gruppe → Mitglieder): Avatar/Initialen + Name + Rollen-Badge. **Admins tippen den Badge → Rolle wechselt** (Mitglied ⇄ Admin; letzter Admin geschützt), plus Inline-Entfernen (Papierkorb). Nicht-Admins sehen die Liste read-only. *(Schreibt in `memberships` — JC bitte als Admin auf dem Gerät testen.)*
- **Profil-Settings-Umbau (12. Juli, deployed):** Persönlich **und** Verein/Gruppe: Avatar/Logo **+ editierbares Namensfeld in einer Zeile** (kein extra Kasten, keine Doppelanzeige). Verein/Gruppe-Sektion **„Name & location" → „Profil"**. **Initialen-Editor** jetzt auch **persönlich** (Initialen-Feld + Farb-Swatches); **Hell/Dunkel-Text automatisch** aus Hintergrund-Luminanz (`autoFg`), Toggle entfernt. Persönliche Farbe **synct** via neuer Spalte `profiles.avatar_style` (jsonb, nullable). **Log-to-Sheet:** „Solo"-Zeile zeigt **deinen Avatar + Namen**. Live verifiziert (Rendering, Farbe→Auto-Text, Initialen-Override, keine JS-Fehler).
- **Polish-Batch (12. Juli, Device-Test, deployed):** FAB wieder **nur „+"** (Destination-Label raus) · **Open-in-Maps** ohne leeren Tab (direkte `maps://`/`geo:`-Übergabe statt `_blank`) · **Fang-Detail-Kopf zeigt die Fischart** (statt generisch „Catch details") · **ruhiger Fokus** (kein doppelter Ring/Glow auf Feldern) · **Bottom-Sheets per Runterwischen schließbar** · **Filter:** ▾-Chevron auf Selects, führender „•"-Bullet raus, „Solo" immer wählbar · **Teilen-Vorlage „Auf Standard zurücksetzen"** · **Safe-Area unten** (`.scroll` Padding, Danger Zone nicht mehr abgeschnitten) · Copy: Tagline **„Catch. Log. Organize."** am Home-Header, **„Log fields"** (statt Catch entry/fields), **„Sharing"** (statt Share template), **„Save as app"** ohne „…", **„Feedback"** statt „Send feedback". *(Live verifiziert; gerätespezifische Punkte — Maps/Swipe/Safe-Area — brauchen JC-Gerätecheck.)*
- **Combo-Chevron (▾):** Fischart- **und** Angelmethode-Feld haben jetzt ein sichtbares ▾-Symbol (dreht bei geöffneter Liste), damit klar ist, dass es ein Dropdown ist. Beide waren schon dieselbe Combo-Box; nur die Affordance fehlte. *(deployed 12. Juli, Commit 30939b0)*
- **Teilen-Vorlage-Token lokalisiert (de/en/nl):** Platzhalter erscheinen jetzt in der App-Sprache — DE `{art}/{maße}/{ort}`, EN `{species}/{size}/{location}`, NL `{soort}/{maat}/{locatie}` (Chips + Standardvorlage). **Alias-Mapping**: alle Sprach-Tokens + alte ASCII-Tokens lösen weiter auf, gespeicherte Vorlagen brechen nicht. Live verifiziert (Rückwärtskompatibilität + gemischte Templates). *(deployed 12. Juli, Commit 30939b0)*
- **Teilen-Standardvorlage überarbeitet:** feste **Grußzeile** oben (DE „Petri Heil!", EN „Tight lines!", NL „Petri heil!" — als echter Text, kein Platzhalter) + neue **Angler-Zeile** (👤 {angler}). Kein Wetter/Mond. `fillTemplate` lässt jetzt eine Label-Zeile weg, wenn ihr Token leer ist (kein einsames 👤). Live verifiziert (alle Sprachen + leerer Angler). *(deployed 12. Juli, Commit 30939b0)*
- **Wort „Bereich" ersetzt (kontextbezogen, de/en/nl):** Der abstrakte Sammelbegriff „Bereich"/„Area"/„Gebied" ist raus — überall konkret „Verein/Gruppe" bzw. passende Formulierung (Home-Auswahl „Wo möchtest du eintragen?", Settings-Tab „Verein/Gruppe", Beitreten/Anlegen/Anfragen, Filter, Stats-Untertitel, Teilen-Hinweis, Löschen-/Verlassen-Dialoge, CSV-Spalte). ~73 Strings über 3 Sprachen + HTML-Defaults. JS-Syntax geprüft. *(deployed 12. Juli, Commit 30939b0)*

## 🟡 Nav-Redesign + Bereich-Einstellungen (gebaut, ⚠️ ungetestet — vor Deploy prüfen)
- **Bereich-Einstellungen im Akkordeon** (Bereich[Name+Standort+Logo] · Mitglieder · Fang-Felder · Gefahrenzone) + **Standort nachträglich editierbar** + **Gruppen-Logo-Fix** + Untertitel folgt Tab.
- **Nav-Redesign Phase 1–3:**
  - **P1 Header:** Back-Chevron **oben links** auf Listen-/Statistik-Screen (→ Home via leaveArea), „Zum Start"-Haus entfernt, **User-Name aus Untertiteln entfernt**, Club-Logo bleibt neben Titel. **Einstellungs-Zahnrad kontextbezogen** (aus Verein/Gruppe → Bereich-Tab).
  - **P2 Globaler Log-＋-FAB** auf Home, Meine Fänge, Solo, Verein, Gruppe (nicht Settings/Unterseiten). Formular bekommt **„Eintragen in:"-Auswahl** (Solo/Vereine/Gruppen), vorausgewählt = aktueller Bereich (Solo auf Home/Meine Fänge); Auswahl **passt Felder + Pflichtfelder** an (schaltet Kontext via `chooseClub/startSolo` mit `keepForm`). Beim Bearbeiten ausgeblendet.
  - **P3** Sort/Export als schlanke Leiste über der Liste (Export nur Icon, Trennlinie).
  - **⚠️ Ungetestet** (Limit/kein Deploy) — v. a. **P2** (Kontext-Wechsel + Speicher-Routing) nach dem Hochladen sorgfältig testen: Log von Home (Solo), Log aus Verein, Bereich im Formular wechseln → Felder ändern sich → speichern landet im richtigen Bereich; Bearbeiten zeigt keine Bereichsauswahl.

---

## ✅ LIVE (Commit 55 und früher)
Beta #1–#6 (Löschen/Lifecycle · Allowlist-Gate + Anfrage · Felder Schlepp/Entnommen · Fremd-Fänge · Beta-Pill/Feedback/App-Hilfe · Rechtliches).
Dazu: Filter „Jahr/Monat"+Hinweis entfernt & „Unbestätigt ausblenden" · Fremd-Fänge rollenspezifisch (nur Angler bestätigt/löscht; Logger darf vor Bestätigung) · Bestätigungs-Dialoge für alle unwiderruflichen Aktionen · Logout in die Einstellungen · Code-selbst-kopierbar · Foto-Limit-Meldung · „Anlegen"-Button sekundär · Rechtstexte Adresse+EN/NL · **Einstellungs-/Feld-Umbau** (globale Felder + Vorlage, Bereich-Tab nur in Gruppe/Verein, Admin-Config „Nicht erzwingen/Immer anzeigen/Pflicht" + Warn-Popup) · „Solo" · Filter-Abstand · Webmail-Buttons entfernt · Profil-Persistenz **v1**.

## 🟡 GEBAUT, noch NICHT deployed (Batch 4)
- 🐛 **Profil-Persistenz gehärtet:** Upsert statt Update + „Gespeichert"-Toast + Insert-Policy. (v1 ging erst mit Commit 55 live — dein Test war wohl auf 54.)
- 🐛 **Unbestätigt-Filter-Checkbox reparierbar:** War durch globales `appearance:none` unsichtbar/unklickbar → jetzt echtes Checkbox-Styling.
- **Kassenwart-Rolle entfernt** (nur noch Mitglied/Admin).
- **Rechtstexte:** Entwurfs-Disclaimer komplett raus; Kontakt-E-Mail → **info@thefishingbutler.app**.

## ✅ Erledigt (früherer Zyklus)
- Ein Fang in mehrere Gruppen eintragen ✔ (Mehrfachauswahl + context_ids Array + RLS).
- „Solo" in „Meine Fänge" zusammengeführt (Bereichsfilter → nur Solo) ✔.
- Foto-Viewer: horizontal wischen + Pinch-Zoom ✔.
- HEIC-Upload am Desktop ✔.
- Wetter read-only mit Anzeige-Toggles je Komponente ✔.
