---
title: "Den eigenen Login-Anbieter mit Keycloak betreiben"
author: "Janik von Rotz"
draft: false

date: 2021-05-20
layout: "blog/posts/posts"
type: "blogpost"
tags: ["Identity and Access Management", "Keycloak"]
featured_image: "/assets/images/blog/keyboard.png"
summary: "Vielleicht ist ihnen auch schon aufgefallen, dass wenn sie auf einer Webmail-Seite wie Outlook oder im eBanking-Portal wie bei Raiffeisen einloggen wollen, werden sie immer zuerst umgeleitet. Ruft man..."
---

Vielleicht ist Ihnen auch schon aufgefallen, dass Sie beim Einloggen auf einer **Webmail-Seite** wie Outlook oder einem **eBanking-Portal** wie Raiffeisen immer zuerst umgeleitet werden. 

Ruft man beispielsweise [https://outlook.live.com](https://outlook.live.com) auf und klickt auf **Sign in**, landet man bei [https://login.live.com](https://login.live.com). Das bedeutet, Sie befinden sich nun auf einer **separaten Login-Seite**.

## SP und IdP: Was ist der Unterschied?

Man unterscheidet hier zwischen dem **Service-Provider (SP)** und dem **Identity-Provider (IdP)**:

- **SP (Service-Provider)**: Er bietet den Dienst an, wie z. B. Webmail oder eBanking, kümmert sich jedoch nicht um die Authentifizierung.
- **IdP (Identity-Provider)**: Er regelt die **Authentifizierung** und stellt sicher, dass Ihre Identität geprüft wird.

### Der Vorteil dieses Ansatzes

Der große Vorteil dieser Aufteilung ist, dass man einen **IdP** für mehrere **SPs** nutzen kann. Wenn Sie sich einmal eingeloggt haben, sind die Anmeldeinformationen für weitere Dienste gültig – vorausgesetzt, es handelt sich um **vertrauenswürdige** Dienste.

## Die zugrundeliegende Technologie

Die Technologie hinter diesen Anmeldeverfahren nennt sich **OpenID Connect**. Dies ist eine Schicht im Webverkehr, die mit Hilfe des **OAuth 2.0-Protokolls** den Austausch von Identitäten regelt. Was früher eine komplexe Architektur war, lässt sich heute dank **Open Source** relativ einfach umsetzen.

## Keycloak: Ein leistungsstarker IdP

Ein solcher **Identity-Provider** ist **Keycloak**. Diese Open-Source-Software wird von Unternehmen weltweit eingesetzt. Mit **Keycloak** können Sie Benutzer, Gruppen, Richtlinien und Berechtigungen verwalten. Registrierte Service-Provider können durch Keycloak ein **Single-Sign-On (SSO)** bewerkstelligen, sodass sich Benutzer nur einmal einloggen müssen, um auf verschiedene Dienste zuzugreifen.

### Warum Keycloak?

- **Benutzerverwaltung**: Keycloak bietet eine umfassende Verwaltung von Benutzern, Gruppen und Berechtigungen.
- **SSO-Funktionalität**: Einmaliges Anmelden für mehrere Dienste spart Zeit und erhöht die Sicherheit.
- **Open Source**: Sie sind unabhängig von teuren Lizenzen und können die Software frei anpassen.

## Kein ActiveDirectory mehr?

Vielleicht haben Sie schon von **ActiveDirectory** gehört. In Windows-Netzwerken übernimmt ActiveDirectory die Rolle des **Identity-Providers** und verwaltet ebenfalls Benutzer, Gruppen und Berechtigungen. Doch die Zeiten von ActiveDirectory neigen sich dem Ende zu. Da immer mehr Anwendungen im **Browser** laufen, wird das **lokale Login** in Unternehmensnetzwerken zunehmend überflüssig. Die Authentifizierungsschicht für lokale Netzwerke verliert an Bedeutung, und **IdP-Lösungen** wie Keycloak werden die Zukunft sein.

## Keycloak bei Mint System

Die **Mint System** setzt Keycloak von Beginn an für ihre Dienste (Odoo, Nextcloud, Monitoring) ein und hat bereits positive Erfahrungen gemacht. Wir empfehlen jedem Unternehmen, das viele **Webanwendungen** verwendet, zu prüfen, ob sich der Einsatz von **Keycloak** lohnt.

---

Wenn Sie Fragen haben oder eine Demo von Keycloak sehen möchten, kontaktieren Sie uns. Wir helfen Ihnen gerne weiter!
