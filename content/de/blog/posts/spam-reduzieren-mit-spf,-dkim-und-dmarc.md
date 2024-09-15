---
title: "Spam reduzieren mit SPF, DKIM und DMARC"
author: "Janik von Rotz"
draft: false
date: 2021-09-20
layout: "blog/posts/posts"
tags: ["Infrastruktur", "Software Engineering"]
featured_image: "/assets/images/blog/spam-mail.jpg"
type: "post"
summary: "Spam verursacht tagtäglich Kosten in Miliardenhöhe. E-Mail-Server werden geflutet, Mails landen fälschlicherweise im Spamordner und unerfahrene Anwender werden mit Mails 'gefischt'. Ebenso viele Massn..."
---

**Spam verursacht tagtäglich Kosten in Milliardenhöhe**. E-Mail-Server werden geflutet, legitime Nachrichten landen im Spamordner, und unerfahrene Anwender werden Opfer von Phishing-Attacken. Es gibt jedoch viele Maßnahmen, um dem entgegenzuwirken. Aktuell besonders wichtig sind die Begriffe **SPF**, **DKIM** und **DMARC** – Begriffe, die jeder Administrator kennen sollte.

## Versand und Empfang von E-Mails

Beim Klick auf "Versenden" im E-Mail-Programm passiert im Normalfall Folgendes:

![Bildbeschreibung](/assets/images/blog/smtp.png)


1. Das **Mail-Programm** übermittelt die Nachricht an den Mail-Server (SMTP-Protokoll).
2. Der **Mail-Server** prüft den Empfänger und sucht den Mail-Server des Empfängers (DNS-Protokoll).
3. Wurde der Empfänger-Mail-Server gefunden, wird die Nachricht versendet (SMTP-Protokoll).
4. Der **Empfänger-Mail-Server** legt die Mail im Postfach des Empfängers ab.
5. Das **Mail-Programm** des Empfängers aktualisiert die Übersicht der Mails.

Die Filterung von **Spam-Nachrichten** erfolgt im Schritt 3. Hierbei wird anhand bestimmter Kriterien überprüft, ob eine Nachricht als **Spam** einzustufen ist. Doch manchmal werden valide E-Mails fälschlicherweise als Spam markiert und umgekehrt. Es gibt jedoch einen weiteren wichtigen Check, der hilft, die Authentizität des Absenders zu verifizieren.

### Wie weiß der empfangende Mail-Server, dass der Absender berechtigt ist, von diesem Mail-Server zu senden?

Angenommen, wir haben die E-Mail-Adresse **info@example.com**. Das bedeutet, dass die Organisation im Besitz der Domain **example.com** ist und unter dieser Domain E-Mails versenden darf. Um dies sicherzustellen, gibt es eine Reihe von Checks: **SPF**, **DKIM** und **DMARC**.

## SPF: Sender Policy Framework

![Bildbeschreibung](/assets/images/blog/spf.png)


Das **Sender Policy Framework (SPF)** verhindert, dass E-Mails von einem nicht autorisierten Mail Transfer Agent (MTA) gesendet werden. Der empfangende Mail-Server überprüft, ob der MTA für die Domain berechtigt ist, E-Mails zu versenden.

### Implementation

Für jeden MTA wird ein spezifischer **DNS-Eintrag** bereitgestellt. Dieser SPF-Eintrag enthält die Adresse des MTA und definiert die Richtlinien zur Verarbeitung von E-Mails.

## DKIM: DomainKeys Identified Mail

![Bildbeschreibung](/assets/images/blog/dkim.png)

**DomainKeys Identified Mail (DKIM)** funktioniert ähnlich wie SPF, konzentriert sich jedoch auf die Überprüfung des Absenders der E-Mail. Jede ausgehende E-Mail wird digital signiert. Der empfangende Mail-Server kann diese Signatur überprüfen, um sicherzustellen, dass die Nachricht authentisch ist.

### Implementation

Für jede Anwendung, die eine E-Mail signiert, wird ein **öffentlicher Schlüssel** auf einer spezifischen DNS-Adresse bereitgestellt. Der Administrator kopiert diesen öffentlichen Schlüssel und erstellt den entsprechenden **DNS-Eintrag**.

## DMARC: Domain-based Message Authentication, Reporting & Conformance

**DMARC** bestimmt, wie ein E-Mail-Versand authentifiziert, protokolliert und verarbeitet wird. Es kombiniert die Funktionen von SPF und DKIM, um ein umfassendes Authentifizierungsprotokoll zu gewährleisten.

![Bildbeschreibung](/assets/images/blog/dmarc.png)


### Implementation

Als Administrator legen Sie **Richtlinien** und eine **Berichts-E-Mail-Adresse** fest und veröffentlichen diese als DNS-Eintrag. Diese Richtlinien weisen den empfangenden Mail-Server an, wie die E-Mail überprüft werden soll und wie im Falle eines **Spamverdachts** zu verfahren ist.

## Fazit

Eine detaillierte Zusammenfassung zum Zusammenspiel von SPF, DKIM und DMARC finden Sie [hier](#).  
Diese Maßnahmen erhöhen die **Reputation** Ihres Mail-Servers. Andere Mail-Server können anhand dieser Checks sicherstellen, dass alle ausgehenden E-Mails legitim sind.

Als technischer Administrator eines Mail-Systems empfehlen wir dringend, diese Maßnahmen zu implementieren, um die Sicherheit Ihres E-Mail-Verkehrs zu gewährleisten.
