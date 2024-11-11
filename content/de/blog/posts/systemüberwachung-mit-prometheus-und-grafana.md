---
title: "Systemüberwachung mit Prometheus und Grafana"
author: "Janik von Rotz"
draft: false
date: 2021-02-08
layout: "blog/posts/posts"
tags: ["Open Source Software"]
featured_image: "/assets/images/blog/surveillance.jpeg"
type: "blogpost"
summary: "Die Mint System bietet für Kunden das Cloud-Hosting Mintsys Cloud an. Zum Betrieb werden Server in existierenden Rechenzentren gemietet. Der Hosting-Partner stellt sicher, dass die physischen Server f..."

# Custom SEO fields (optional)
seo_title: "Systemüberwachung mit Prometheus und Grafana - Mint System GmbH"
---

Die **Mint System** bietet für Kunden das Cloud-Hosting **Mintsys Cloud** an. Zum Betrieb werden **Server in existierenden Rechenzentren** gemietet. Der Hosting-Partner stellt sicher, dass die **physischen Server** funktionieren und ist für die **Ausfallsicherheit** verantwortlich. Für alle **Software**, die auf den Servern installiert wird, ist jedoch die **Mint System** verantwortlich. Um sicherzustellen, dass die Software einwandfrei funktioniert, betreiben wir ein **Überwachungs- bzw. Monitoringsystem**. In diesem Beitrag möchten wir dieses System genauer erklären.

## Architektur

Das **Monitoringsystem** besteht aus mehreren Bausteinen. Im Kern befindet sich **Prometheus**, ein Datenbanksystem, das besonders gut darin ist, **metrische Daten** zu verarbeiten. Mithilfe von **Grafana** werden diese Daten visualisiert. Beispielsweise kann man ein Diagramm zur Metrik **Freier Festplattenspeicher** erstellen. Zusätzlich lassen sich **Regeln für Alarme** hinzufügen. Erreicht der freie Festplattenspeicher eine kritische Grenze, kann automatisch eine **E-Mail-Benachrichtigung** an den zuständigen Techniker versendet werden.

### Übersicht der Systembausteine

Auf der linken Seite ist der Server in weitere Bausteine unterteilt:

- **Docker Host**: Der Docker Host stellt den Server dar. Das Betriebssystem wird hauptsächlich genutzt, um **Docker** zu betreiben. Docker ermöglicht es uns, auf verschiedenen Betriebssystemen (Linux, MacOS, Windows) dieselben Serveranwendungen auszuführen.
- **Exporter**: **cAdvisor** und **Node Exporter** sind Webserver, die vom physischen Server und von Docker **Metriken** auslesen und auf einer Webseite publizieren. **Prometheus** greift regelmäßig auf diese Webseite zu und speichert die Metriken.

### Beispiel: Freier Festplattenspeicher

Ein praktisches Beispiel: Die Mint System betreibt einen **Linux-Server** namens **Zeus**. Loggt man sich per Terminal ein und gibt den Befehl zur Anzeige des Festplattenspeichers ein, sieht man, dass noch **12 Gigabyte** verfügbar sind.

![Bildbeschreibung](/assets/images/blog/server-festplatte.png)

Diese Zahl wird in **Bytes** vom **Node-Exporter** erfasst und auf einer **gesicherten Webseite** publiziert. Prometheus greift darauf zu und speichert die Zahl. Mit Grafana kann die gesamte **Zahlenreihe** visualisiert werden.

![Bildbeschreibung](/assets/images/blog/node-exporter.png)

Um den Wert in **Megabytes** anzuzeigen, muss dieser entsprechend umgerechnet werden.

![Bildbeschreibung](/assets/images/blog/grafana-monitoring.png)

## Weitere Metriken

Es gibt natürlich viele weitere Metriken, die wir erfassen. Zum Beispiel für **BigBlueButton** oder **Nextcloud**. So können wir sehen, wie viele Benutzer auf einer **Nextcloud-Instanz** aktiv sind oder wie viele Teilnehmer an einem **Online-Meeting** auf BigBlueButton teilgenommen haben.

All diese Metriken helfen uns, die Vielzahl an **Servern** und **Anwendungen** zu verstehen und sicherzustellen, dass alles wie erwartet funktioniert.

---

Möchten Sie mehr über unser Monitoringsystem oder die Vorteile von **Mintsys Cloud** erfahren? Kontaktieren Sie uns für weitere Informationen.
