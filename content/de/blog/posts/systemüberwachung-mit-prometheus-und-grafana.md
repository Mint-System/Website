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

Die Mint System bietet für Kunden das Cloud-Hosting Mintsys Cloud an. Zum Betrieb werden Server in existierenden Rechenzentren gemietet. Der Hosting-Partner stellt sicher, dass die physischen Server funktionieren und ist für die Ausfallsicherheit verantwortlich. Für alle Software, die auf dem Server installiert wird, ist jedoch die Mint System verantwortlich. Auch wir müssen sicherstellen, dass die Software einwandfrei funktioniert. Dazu betreiben wir ein Überwachungs- bzw. Monitoringsystem. Dieses meldet uns wenn beispielsweise die Festplatte auf einem Server vollläuft. In diesem Beitrag möchten wir dieses System genauer erklären.


## Architektur

Das Monitoringsystem besteht aus mehreren Bausteinen. Im Kern ist Prometheus. Prometheus ist ein Datenbanksystem das speziell gut darin ist, metrische Daten zu verarbeiten. Mit Grafana werden die Daten visualisiert. Beispielsweise kann man ein Diagramm zur Metrik Freier Festplattenspeicher erstellen. Im Weiteren kann man Regeln für Alarme hinzufügen. Erreicht beispielsweise der Freie Festplattenspeicher eine bestimmte Zahl, kann man ein Email an den verantwortlichen Techniker versenden.

Diese Grafik gibt eine Übersicht zum den Systembausteinen:


![](/assets/images/blog/prometheus-grafana.jpeg)

Auf der linken Seite ist der Server aufgeteilt in weitere Bausteine dargestellt.


### Docker Host

Der Docker Host ist sozusagen der Server. Das Betriebssystem auf dem Server wird hauptsächlich dazu verwendet Docker zu betreiben. Docker erlaubt es uns auf unterschiedlichen Betriebssystemen (Linux, MacOS, Windows) die gleichen Serveranwendung auszuführen.



## Exporter 
cAdvisor und Node Exporter sind beides Webserver, die vom physischen Server und von Docker Metriken auslesen. Sie publizieren diese Metriken auf einer Webseite. Prometheus greift alle paar Sekunden auf die Webseite zu und speichert die Metriken.



### Beispiel
Damit man sich das besser vorstellen kann, hier eine kurze Erläuterung:

Die Mint System betreibt einen Linux-Server namens Zeus. Wenn man mit dem Terminal darauf einloggt und den Befehl zum Anzeigen des Festplattenspeichers eingibt, sieht man, dass noch 12 Gigabyte verfügbar sind.

![](/assets/images/blog/server-festplatte.png)

Diese Zahl wird in Bytes vom Node-Exporter erfasst und auf einer gesicherten Webseite publiziert.

![](/assets/images/blog/node-exporter.png)

Prometheus greift auf die Webseite zu und speichert die Zahl. Mit Grafana kann ich nun die ganze Zahlenreihe abrufen und visualisieren.

![](/assets/images/blog/grafana-monitoring.png)

Damit der Wert nicht in Megabytes angezeigt wird, muss man diesen noch umrechnen.

## Weitere Metriken

Natürlich gibt es noch viele weitere Metriken und Aspekte eines Systems zum Erfassen. Zum Beispiel für [BigBlueButton](https://bigbluebutton.org/) oder Nextcloud . So wissen wir wie viele Benutzer auf einer Nextcloud-Instanz aktiv sind oder wie viele Teilnehmer am letzten online Meeting auf BigBlueButton teilgenommen haben.


All diese Metriken helfen uns die Vielzahl an Server und Anwendungen zu verstehen und sicherzustellen, dass alles wie erwartet funktioniert.

