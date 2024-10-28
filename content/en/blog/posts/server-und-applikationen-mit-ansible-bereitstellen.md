---
title: "Server und Applikationen mit Ansible bereitstellen"
author: "Janik von Rotz"
draft: false
date: 2022-07-20
layout: "blogpost"
featured_image: "/assets/images/blog/Ansible%20Conference.png"
type: "post"

summary: "Was ist Ansible?    Ansible ist ein Open Source Automatisierungs-Werkzeug für die allgemeine Konfiguration und Administration von Computern. Mit Ansible beschreibt man die Arbeitsschritte, die es brau.."
---

**Ansible** ist ein Open-Source-Automatisierungs-Werkzeug für die allgemeine Konfiguration und Administration von Computern. Mit Ansible beschreibt man die Arbeitsschritte, die es braucht, um ein Betriebssystem oder eine Anwendung zu installieren und konfigurieren. Diese Arbeitsschritte enthalten Platzhalter und können so mit Variablen flexibel ausgeführt werden.

Die Arbeitsschritte fasst man in einem **Playbook** zusammen, und die Variablen in einem **Inventory**.

## Was ist ein Inventory?

Wie der Name andeutet, handelt es sich um ein Inventar. Im **Inventory** beschreibt man, welche Server es gibt und welche Konfiguration diese erhalten. Man kann die Server zu Gruppen zusammenfassen und so die Anzahl der Variablen zur Konfiguration reduzieren.

## Was ist ein Playbook?

Arbeitsschritte werden in **Rollen** zusammengefasst. Eine Rolle beinhaltet im Normalfall die Installation und Konfiguration einer Anwendung. Mehrere Rollen lassen sich in einem **Playbook** kombinieren.

## Wie sieht das konkret aus?

Ein Ansible-Projekt besteht nur aus Ordnern und Textdateien. Ein Beispiel für die Bereitstellung einer Nextcloud-Instanz findet man auf [ansible.build](https://ansible.build/). Dort publizieren wir alle Ansible-Rollen, einschließlich der Rolle **nextcloud**: [Nextcloud-Rolle](https://ansible.build/roles/nextcloud/).

### Beispielhafte Ordnerstruktur der Nextcloud-Rolle:

Die Variablen in den Konfigurationsdateien sind in `{ }`-Klammern und werden aus dem Inventory übertragen. Die Ordnerstruktur der **Inventories** sieht etwas anders aus:

![Bildbeschreibung](/assets/images/blog/Ansbile Nextcloud Task File.png)

Innerhalb der { }-Klammern befinden sich die Variablen. welche aus dem Inventory übertragen werden. Die Odner-Struktur der Inventories sieht etwas anders aus:


![Bildbeschreibung](/assets/images/blog/Ansible Nextcloud Inventory.png)


## Für was kann ich Ansible verwenden?

Die Einsatzmöglichkeiten von Ansible sind nahezu unbegrenzt. Wir nutzen Ansible für:

- Verwaltung von Domains und DNS-Einträgen
- Installation und Konfiguration von Linux-Servern
- Bereitstellung eines Monitoring-Systems
- Bereitstellung eines Login-Anbieters
- Automatische Backups
- Installation und Konfiguration von Odoo
- Firewall mit Nginx-Proxy
- VPN für Server-Umgebungen

Der große Vorteil: Wenn ein Server oder System gelöscht wird, kann es in kurzer Zeit vollständig wiederhergestellt werden. Die Konfiguration des Systems und die Arbeitsabläufe sind mit Ansible beschrieben und können somit auf Knopfdruck ausgeführt werden.

## Wie steht Ansible im Vergleich zu anderen Automatisierungs-Werkzeugen?

Es gibt viele weitere Automatisierungs-Werkzeuge wie **Chef**, **Puppet** oder **Salt**. Im Vergleich arbeitet Ansible nach dem **Push-Prinzip**: Nach einer Änderung im Inventory oder in den Rollen muss man Ansible ausführen, damit die Änderungen angewendet werden. Bei anderen Systemen arbeitet man nach dem **Pull-Prinzip**: Ein auf dem Server installierter Agent fragt regelmäßig die neuesten Änderungen ab und wendet diese an.

## Ich brauche noch mehr Informationen.

Wir bieten Workshops zu Ansible an und haben es bereits bei verschiedenen Kunden implementiert. Melden Sie sich bei uns, und wir erstellen gerne ein unverbindliches Angebot.
