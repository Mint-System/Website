---
title: "Hack4SocialGood 2024"
author: "Janik von Rotz"
draft: false
date: 2024-04-24
layout: "blog/posts/posts"
type: "blogpost"
featured_image: "/assets/images/blog/caritas.png"
lead: "Die Mint System war am Hack4SocialGood vertreten."
summary: "Der Hack4SocialGood ist ein Hackathon, der Menschen aus dem Sozialwesen und der IT zusammenbringt um Lösungen für die Anliegen im Digitalisierungbereicht zu entwickeln. Um an einem Hackathon teil..."
---

Der **Hack4SocialGood** ist ein Hackathon, der Menschen aus dem Sozialwesen und der IT zusammenbringt, um Lösungen für die Anliegen im Digitalisierungsbereich zu entwickeln.

Um an einem Hackathon teilzunehmen, muss man kein Softwareentwickler sein. Ziel ist es, in einer interdisziplinären Gruppe Lösungen für eine konkrete Challenge zu entwickeln. Dazu hat man 24 Stunden Zeit und darf am Ende des Hackathons die Lösung pitchen.

Beim diesjährigen Hack4SocialGood wurden **11 Challenges** angemeldet, davon wurden 9 ausgewählt und durchgeführt. Wir haben uns für die Challenge der Caritas _"Von Daten zu Taten"_ entschieden.

## Challenge

Die Challenges werden in einem bestimmten Format präsentiert. Hier die wichtigsten Punkte der Caritas-Challenge:

### Hintergrund:

Die Caritas ist die größte Nichtregierungsorganisation der Schweiz, die verschiedene Unterstützungsangebote für armutsbetroffene Menschen bereitstellt. Daten werden in verschiedenen Bereichen erfasst, wie z.B. in Beratungsstellen und Caritas-Märkten, jedoch werden diese bisher kaum systematisch analysiert.

### Ziel der Challenge/Vorstellung Endprodukt:

- Indikatoren entwickeln
- Daten integrieren
- Prognosemodelle erstellen

Ziel ist es, ein integriertes Prototyp-Dashboard zu entwickeln, das die verschiedenen Datenbestände der Caritas nutzt, um Einblicke in Tätigkeiten und Bedürfnisse zu ermöglichen.

### Zur Verfügung gestellte Daten:

- Daten aus den Caritas Märkten (schweizweit)
- Caritas beider Basel Falldaten aus Sozialberatung

## Team

Für die Challenge haben sich **13 Leute** angemeldet. Mit dabei waren:
- Studierende im Bereich Data Science
- Forschende in den Sozialwissenschaften
- Sozialarbeitende
- Softwareentwickler

![Bildbeschreibung](/assets/images/blog/Hack4SocialGoodTeam.png)

Aufgrund der Vielzahl der Teilnehmenden wurde das Team in zwei Gruppen aufgeteilt:
1. Die eine Gruppe entwickelte ein Konzept für die Analyse und Visualisierung der Daten.
2. Die andere Gruppe programmierte und integrierte technische Systeme, um die Anforderungen aus dem Konzept umzusetzen.


## Lösung

Da die meisten Teammitglieder einen Hintergrund in Data Science hatten, war der Einsatz von Python und **Jupyter Books** naheliegend. Ein Problem bei den Jupyter Books ist die Präsentation der Ergebnisse, da keine Dokumente oder Websites generiert werden können.

Im Lösungsfindungsprozess kam dann **Quarto** ins Spiel. Damit lassen sich die Anforderungen an Präsentation und Auswertung der Daten verbinden, und alles kann an einem Ort programmiert werden.

Die gemeinsame Programmierung der Lösung fand auf **GitHub** statt. Dazu haben wir als erstes die Caritas Schweiz als Organisation erfasst: [GitHub Caritas Schweiz](https://github.com/Caritas-Schweiz), und anschließend wurden die Repositories erstellt, um den Code zu speichern.

- Der Quellcode der Lösung ist hier zu finden: [GitHub Quarto Repository](https://github.com/Caritas-Schweiz/Quarto)
- Das Resultat ist eine Website mit Visualisierungen der Daten: [Caritas Schweiz Reporting](https://caritas-schweiz-reporting.vercel.app/)

## Fazit

Mit der Teilnahme an diesem Hackathon wollten wir einen Beitrag zur Digitalisierung im Sozialwesen leisten. Als kleines Unternehmen ist es eine Herausforderung, im Arbeitsalltag neue Technologien und Probleme zu entdecken. Ein Hackathon bietet die perfekten Rahmenbedingungen für Innovation.

Man ist gefordert, kreativ zu sein, und muss in kurzer Zeit einen Prototyp erstellen. Das funktioniert nur, wenn das Team reibungslos zusammenarbeitet und jeder sich einbringen kann. Schlichtweg
