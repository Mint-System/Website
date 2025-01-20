---
title: Alles über Odoo Upgrades
author: Janik von Rotz
draft: false
date: 2025-01-17
layout: blog/posts/posts
tags:
  - ERP-System
  - Software
  - Odoo
  - Upgrade
featured_image: /assets/images/blog/devops-cycle.png
type: blogpost
summary: Dieser Beitrag zeigt auf was wir unter Odoo Upgrades verstehen und wie wir Odoo Upgrade Projekte strukturieren durchführen.
lead: Und wie wir Odoo Upgrades durchführen.
seo_title: Odoo Upgrade - Mint System GmbH
---
Als Odoo Partner sind wir mit Odoo 13.0 gestartet. In Software-Jahren ist das schon eine Weile her. Jedes Jahr veröffentlicht Odoo S.A. einen neuen Major-Release. Aktuell ist das Odoo 18.0. Damit man auf die Odoo Version wechseln kann, muss man ein Odoo Upgrade machen.

Upgrades von ERP-Systemen sind berühmt berüchtigt schief zu laufen. Anekdoten und Erzählungen von schief gelaufenen Upgrades gibt es noch und noch. Das liegt sicher auch daran, dass man über erfolgreiche Upgrades nicht spricht.
### Was ist ein Odoo Upgrade?

Mit jedem Odoo-Release wird auch der [Odoo Upgrade Service](https://upgrade.odoo.com/) aktualisiert. Odoo Enterprise Kunden können dort ihre Datenbank hochladen und erhalten die Datenbank in einer neuen Version zurück. Leider ist das aber schon alles. Der Upgrade Service von Odoo kümmert sich nicht um:

* Datenmodelle von Dritten
* Migration der Module
* Anpassungen von Odoo Studio
* Umgang mit dem Filestore

Mit dem Upgrade Service von Odoo ist ein Odoo Upgrade noch nicht gemacht. Es braucht einen effizienten Prozess um alles vor und  nach dem Upgrade Service zu koordinieren.

Wir haben uns seit Version 13.0 auf 18.0 "durch-migriert". Dabei haben wir unsere Prozesse und Anleitungen stets aktualisiert und verbessert. Diese Erfahrung teilen wir in unserem Wiki: <https://wiki.mint-system.ch/odoo-upgrade.html>

Machen wir aber noch einen Schritt zurück. Warum soll man überhaupt ein Upgrade machen wenn es Aufwand bedeutet und schief laufen kann?
## Warum ein Upgrade machen?

Nebst den steigenden technischen Schulden, die man durch die Nicht-Durchführung von Upgrades aufbaut, gibt es gute Gründe warum man ein Upgrade machen sollte:

* Nutzung neuer Odoo Features
* Stetige Verbesserung der Performance
* Nähe zum Odoo-Standard
* Schliessung von Sicherheitslücken

Dennoch fehlen oft seitens Kunde und Partner klare Anreize um Upgrade durchzuführen. Es bedeutet Aufwand und ist ein Risiko. Upgrades von ERP-Systemen haben diesbezüglich ein schlechtes Image. Was kann Odoo in diesem Zusammenhang besser als andere ERP-Systeme?

Odoo bietet Werkzeuge und ein Ökosystem damit ein Upgrade gelingt:

* Analyse der Anpassungen und Module von Dritten.
* Community definiert Standards zur Entwicklung und Migration der Odoo Module.
* Odoo Upgrade Service lässt sich in technische Workflows integrieren.

## Wie sieht ein Upgrade-Projekt aus?

Das Ergebnis eines Upgrade-Projekts ist ein Drehbuch. Im Drehbuch wird festgehalten welche Schritte durchgeführt werden müssen um ein Odoo Upgrade für einen Kunden durchzuführen.

Damit man das Drehbuch ausführen kann, braucht es noch Vorbereitung. Diese Grafik zeigt die Prozesse zur Vorbereitung eines Odoo Upgrades:

```mermaid
flowchart LR
    A(Sale) --> B(Project)
    B --> C(Environment)
    C --> D(Migration)
    D --> E(Upgrade)
    E --> F(Testing)
    F --> G(Execute)
```

**Sale**

Wir analysieren die bestehende Odoo-Datenbank und machen eine Aufwandsschätzung anhand verschiedener Faktoren (Anzahl Snippets, Module, Versionssprünge, ...)

**Project**

Wenn das Upgrade-Angebote angenommen wurde, initialisieren wir ein Upgrade-Projekt. Der Projektverantwortliche übernimmt die Koordination des Upgrades. Es wird definiert welche Module auf die neue Version migriert werden.

**Environment**

Eine neue Odoo-Installation wir in der Umgebung des kunden bereitgestellt. Diese wird zu einem späteren Zeitpunkt für das Testing verwendet. 

**Migration**

Entwickler migrieren die Odoo-Module und stellen diese in der neuen Umgebung bereit.

**Upgrade**

Entwickler führen das Upgrade der Datenbank durch und stellen diese in der Upgrade-Umgebung des Kunden für das Testing bereit.

**Testing**

Der Projektverantwortliche testen mit Kunden die Workflows in der aktualisierten Datenbank. Das Feedback geht zurück an die Entwickler und bei Bedarf werden Support-Tickets bei Odoo S.A. oder bei Dritten eröffnet.

Das Drehbuch für das Odoo Upgrade wird laufend aktualisiert. Wenn das Upgrade fehlerfrei durchgeführt und getestet werden konnte, erfolgt eine Freigabe durch den Kunden.

**Execute**

Für unerwartete Fehler wird eine Rollback-Szenario mit dem Kunden definiert. Das produktive Upgrade wird gemäss Drehbuch am vereinbarten Termin durchgeführt.

## Was ist beim Upgrade-Prozess wichtig?

Mit der gemeinsamen Entwicklung des Drehbuchs gewinnen Kunden und Partner die Sicherheit, dass das Upgrade gelingt.

Die zeitliche Streckung des Upgrade-Projekts bleibt aber nach wie vor ein Risiko. Die Upgrade-Skripte von Odoo sind nicht fehlerfrei und ein Support-Fall kann mehrere Wochen in Anspruch nehmen.

In der Testing-Phase entsteht ein Feedback-Loop zwischen Entwickler, Projektverantwortlicher und Kunde. Dieser Loop sollte so effizient wie möglich funktionieren. Beim Austausch/Abgleich von Informationen müssen Medienbrüche möglichst vermieden werden.

## Wie oft ein Upgrade durchführen?

Der schnelle Release-Zyklus von Odoo setzt Partner sowie Kunden unter Druck immer auf dem neusten Stand von Odoo  zu sein. Jedes Jahr ein Odoo Upgrade durchzuführen ist in vielen Fällen gar nicht möglich. Insbesondere wenn viele Odoo Apps und Module von Dritten im Einsatz sind.

Wir empfehlen für jede zweite, maximal dritte Odoo Version ein Upgrade zu machen. Wenn man auf einmal zu viele Versionssprünge macht, steigt die Chance, dass die Upgrade-Skripte nicht wie erwartet funktionieren.

## Wie komme ich zu einem Upgrade?

Nehmen Sie mit uns Kontakt auf. Wir schätzen die Lage ein und machen einen unverbindlichen Vorschlag um das Upgrade-Projekt anzugehen.


