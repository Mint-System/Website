---
title: "Von Bexio nach Odoo"
author: "Kurt Gisler"
draft: false
date: 2024-04-04
layout: "blog/post"
tags: ["Bericht", "Bexio", "Odoo", Migration]
featured_image: "/assets/images/blog/odoo-migration.png"
type: "post"
lead: "Ein Erfahrungsbericht zur Migration von Bexio nach Odoo."
summary: "Das Ziel der folgenden Erläuterungen ist es, ein Beispiel-Projekt für den Wechsel von Bexio nach Odoo mit den wesentlichen Projektarbeiten zu beschreiben.  Wir kennen Bexio praktisch nur vom *Hörensag..."
---

# Wechsel von Bexio nach Odoo: Ein Beispiel-Projekt

Das Ziel der folgenden Erläuterungen ist es, ein Beispiel-Projekt für den **Wechsel von Bexio nach Odoo** mit den wesentlichen Projektarbeiten zu beschreiben. Obwohl wir Bexio nur vom *Hörensagen* kennen und keine Aussagen zur Qualität dieses Produkts machen wollen, gab es einen entscheidenden Grund für den Wechsel: **Die Lagerverwaltung über mehrere Standorte** hinweg war in Bexio nicht möglich.

## Customizing in Odoo

### 1. **Listen und Masken**
Der Kunde hatte sehr spezifische Anforderungen, wie die **Darstellung von Listen und Masken** gestaltet werden sollte. Mit **Snippets** können in Odoo alle Ansichten kundenspezifisch angepasst werden. Hierfür nutzen wir die **Mint System Snippets-Bibliothek**, welche kontinuierlich erweitert und auf GitHub veröffentlicht wird.

### 2. **Business-Logik**
Ein wichtiger Punkt war, dass der Verkäufer sofort erkennen sollte, ob die Rechnungen zu einem Auftrag schon bezahlt wurden. Mit **zusätzlichen Feldern** und **Python-Code** lassen sich komplexe Algorithmen realisieren. In diesem Fall genügte es, die mit dem Verkaufsauftrag verknüpften Rechnungen zu durchsuchen und ein entsprechendes Attribut zu setzen.

### 3. **Layout der Berichte**
Erfahrungsgemäß benötigt das spezifische **Gestalten der Berichte** wie Bestellung, Angebot, Verkaufsauftrag und Rechnung erheblichen Aufwand. Dazu gehören unter anderem automatische Texte im Bemerkungsfeld des Lieferscheins, spezielle Logiken für das Adressfeld sowie die Verwendung **spezifischer Schriftarten**.

## Datenmigration

### 1. **Excel-Transfer**
Ein Export/Import über **Excel-Tabellen** ist oft der einfachste Weg für die Datenmigration. Für die systematische Aufbereitung der Daten (wie das Umbenennen von Spalten oder das Ändern von Feldinhalten) verwenden wir **Jupyter Notebooks**. Sobald der Prozess stabil läuft, benötigt man nur ein kleines Zeitfenster für die vollständige **Datenmigration**.

### 2. **Migration der Buchhaltung**
Es ist einfacher, auf den Übertrag aller Buchungszeilen zu verzichten. Stattdessen sollten die Konten im Quellsystem geschlossen und im Zielsystem mit einer Eröffnungsbuchung eingerichtet werden. Dieser Ansatz wurde auch hier gewählt.

## EDI-Anbindung

Eine wesentliche Anforderung war die Integration von Odoo in das bestehende **EDI-System** (Electronic Data Interchange). Ein EDI-System ermöglicht den Austausch von Dokumenten (Bestellungen, Rechnungen usw.) zwischen verschiedenen Systemen. Diese Entwicklung wurde mit dem bestehenden EDI-Partner koordiniert, sodass die Erstellung von **Verkaufsaufträgen und Rechnungen** vollständig automatisiert wurde.

## Lagerverwaltung und Routen

### 1. **Lager und Lagerorte**
Die Lagerung von Komponenten und Fertigprodukten ist auf **mehrere Standorte** mit diversen Lagerorten aufgeteilt. Das automatische **Reservieren** und **Kommissionieren** über **Barcode-Scannen** ist eine Odoo-Standardfunktion.

### 2. **Routen**
Über die Konfiguration von **Lager-Routen** konnte der kundenspezifische Prozess des Rüstens an den Produktionsstandort und das Weiterreichen an die Verpackungsstelle eingerichtet werden. Das unkomplizierte **Transferieren der Produkte** mithilfe von Barcodes und passender Hardware ist essenziell für die Sicherstellung des korrekten Bestands.

## Mehrere Mandanten

### 1. **Sichtbarkeit der Stammdaten**
Eine Installation von Odoo kann für mehrere Unternehmungen genutzt werden. Das ist eine Spezialität von Odoo. Die **Sichtbarkeit der Stammdaten** kann konfiguriert werden, sodass die Produkte beispielsweise von beiden Unternehmen gemeinsam gepflegt werden.

### 2. **Unterschiedliche Kontenrahmen**
Da die beiden Mandanten (Unternehmen) in der Schweiz und in Deutschland lokalisiert sind, wurden unterschiedliche **Kontenrahmen** angelegt:
- **Unternehmen in der Schweiz**: Kontenrahmen 2015 (Schweiz)
- **Unternehmen in Deutschland**: Deutscher Kontenplan SRK04

## Fazit

Aus unserer Sicht liegt der wesentliche Vorteil von **Odoo** gegenüber anderen Systemen darin, dass man **Zugriff auf die Daten und den Quellcode** hat. Dadurch ist die Wahrscheinlichkeit, in Bezug auf den Funktionsumfang in eine Sackgasse zu geraten, deutlich geringer.

Natürlich muss stets zwischen dem Möglichen und dem Machbaren unterschieden werden, denn der Aufwand, um etwas zu bauen, das dem Konzept von Odoo widerspricht, kann sehr hoch werden. Der **Import aus Odoo** war deutlich einfacher als der **Export aus Bexio**, und durch den **Zugriff auf das Odoo-System** konnten wir Automatismen einrichten, die vorher nicht möglich waren.