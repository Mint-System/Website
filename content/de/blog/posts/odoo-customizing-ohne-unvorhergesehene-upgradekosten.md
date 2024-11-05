---
title: "Odoo Customizing ohne unvorhergesehene Upgradekosten"
author: "Janik von Rotz"
draft: false

date: 2021-07-08
layout: "blog/posts/posts"
type: "blogpost"
tags: ["ERP-System", "Odoo"]
featured_image: "/assets/images/blog/arrow.jpg"
summary: "Der folgende Artikel beschreibt, wie wir als Integratoren das Odoo-System den Bedürfnissen des Kunden anpassen und gleichzeitig sicherstellen, dass in Zukunft keine funktionalen Einschränkungen oder R..."
---

Der folgende Artikel beschreibt, wie wir als **Odoo-Integratoren** das System an die Bedürfnisse des Kunden anpassen und gleichzeitig sicherstellen, dass **keine funktionalen Einschränkungen oder Regressionen** in der Zukunft entstehen.

## Was ist eine Regression?

Eine **Regression** in der Softwareentwicklung bezieht sich auf einen Fehler in einem Feature, der nach einer Änderung im System entsteht, ohne dass am ursprünglichen Code etwas verändert wurde. Ein Beispiel: Das **Login mit einem Google-Account** hat vor einer Systemaktualisierung einwandfrei funktioniert, doch nach der Aktualisierung nicht mehr. Dieser Fehler – eine sogenannte Regression – ist entstanden, obwohl der Code des Features unverändert blieb.

Diese Art von Fehlern möchten wir unbedingt vermeiden. Sollte sie dennoch auftreten, müssen wir in der Lage sein, den Fehler schnell zu beheben. Als Odoo-Integratoren ist es unsere Aufgabe sicherzustellen, dass jede Änderung, die wir an einer Odoo-Installation vornehmen, in Zukunft so wenig Fehler wie möglich verursacht.

Obwohl es schwer vorherzusagen ist, wie sich Software in Zukunft verändert, können einige wichtige **Prinzipien** helfen, solche Probleme zu vermeiden.

## Prinzipien für fehlerfreie Odoo-Anpassungen

### 1. Kurze Release-Zyklen fahren

Odoo veröffentlicht alle paar Tage eine neue Version der Software, inklusive neuer Funktionen und Verbesserungen. Um stets auf dem neuesten Stand zu bleiben und keine wichtigen Entwicklungen zu verpassen, versuchen wir, die **Odoo-Installationen so oft wie möglich zu aktualisieren**.

### 2. Wiederverwenden statt entwickeln

Bei neuen Anforderungen, die Odoo nicht out-of-the-box abdeckt, prüfen wir zuerst bei der **Odoo Community** und bei Partnern, ob eine ähnliche Anpassung bereits existiert. Wenn eine Anpassung bereits von mehreren Odoo-Installationen genutzt wird, hat sie einen höheren Wert und ist **robuster** gegen zukünftige Änderungen.

### 3. So wenig wie möglich verändern

Bei jeder Anpassung evaluieren wir das **Kosten-Nutzen-Verhältnis**. Oft werden individuelle Anpassungen vorgenommen, ohne den gesamten Kontext zu beachten. Eine Anpassung muss sich jedoch immer für **alle Anwender** lohnen und sollte möglichst **minimal** ausfallen.

### 4. Visuelle Änderungen bevorzugen

Anpassungen an der **Benutzeroberfläche** sind pflegeleichter, da sie weiter vom **Kern des Systems** entfernt sind. Sie beziehen sich im Normalfall auf die bestehende Datenstruktur und sind daher weniger tief in das System integriert. Dies macht sie robuster gegen Änderungen.

### 5. Vererbungssystem nutzen

Odoo verfügt über ein ausgeklügeltes **Vererbungssystem**. Anpassungen an Ansichten oder Geschäftsobjekten werden immer als Erweiterungen des bestehenden Codes formuliert, anstatt diesen zu überschreiben. Dadurch bleibt der **ursprüngliche Code** erhalten, und die Anpassung ergänzt ihn lediglich um neue Funktionen.

### 6. Änderungen am System dokumentieren

Alle Anpassungen an einer Odoo-Installation werden **dokumentiert**. Dies erleichtert es Dritten, Änderungen nachzuvollziehen und sicherzustellen, dass zukünftige Entwicklungen – insbesondere **Systemupgrades** – korrekt durchgeführt werden.

### 7. Erweiterungen modular halten

Erweiterungen sollten möglichst **modular** aufgebaut sein, um Abhängigkeiten zu minimieren. Die Odoo-Philosophie sieht vor, Erweiterungen so klein wie möglich zu halten. **Abhängigkeiten zwischen Odoo-Modulen** sollten vermieden werden, um die Wartbarkeit und Flexibilität des Systems zu erhöhen.

## Fazit

Durch die Einhaltung dieser Prinzipien können wir sicherstellen, dass unsere Odoo-Anpassungen zukunftssicher sind und das Risiko von **Regressionsfehlern** minimiert wird. Indem wir häufige Updates durchführen, bestehende Lösungen wiederverwenden und auf eine saubere Dokumentation achten, schaffen wir eine robuste und skalierbare Odoo-Umgebung, die den Bedürfnissen unserer Kunden gerecht wird.

Mehr Informationen zu unseren Anpassungsprozessen finden Sie auf [Mint System](#).
