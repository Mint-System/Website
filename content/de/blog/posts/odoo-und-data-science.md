---
title: Odoo und Data Science
date: 2026-06-12T08:33:22+02:00
draft: false
type: blogpost
layout: blog/posts/posts
tags:
  - Odoo
  - Jupyter
  - Notebook
  - Data-Science
  - Python
featured_image: /assets/images/blog/jupyter.png
summary: Die Welt der Data Science hat fantastische Tools um Daten zu verarbeiten, analysieren und visualisieren. Davon kann nun auch Odoo profitieren. Wir zeigen wie man die Tools der Data Science und Odoo zusammenbringt.
lead: Wie man die Werkzeuge aus Data Science für Odoo effizient einsetzen kann.
seo_title: Odoo und Data Science - Mint System GmbH
author: Janik von Rotz
---
Wer Data Science studiert, lernt [Python](https://www.python.org/) als Programmiersprache und [Jupyter](https://jupyter.org/) als Entwicklungsumgebung kennen. Die Zeiten von [SPSS](https://www.ibm.com/products/spss) sind gezählt. Es gibt noch [R](https://www.r-project.org/) und [RStudio](https://posit.co/products/open-source/rstudio), doch das hat vergleichsweise wenig(er) Relevanz. Python ist flexible und universelle Programmiersprache und kommt deshalb in verschiedensten Bereichen zum Einsatz. Machine Learning, Data Analysis, Visualization, Automatisierung und auch die Entwicklung von Large Language Models werden von Python getrieben.

Dieses Potenzial ist besonders spannend für Odoo. Odoo ist eine Unternehmensoftware und das Odoo Backend ist in Python geschrieben. Jeder Statistiker und jede Datenwissenschaftlerin kann Python-Code lesen und schreiben.

Bei Mint System haben wir Personen mit diesem Profil angestellt und Fragen uns wie wir die Welt der Data Science und Odoo verbinden können. Der Austausch und die Verarbeitung von Daten hat in Odoo eine zentrale Bedeutung.

### Data Science in Odoo Projekte

Wir kenenn verschiedene Anwendungsfälle wo Daten im Zusammenhang mit Odoo verarbeitet und transportiert werden müssen. Kontakt-Daten müssen bei der Implementation eines Odoo Projekts von einem Quell-System exportiert, angepasst und importiert werden. Externe Systeme liefern EDI-Dokumente, welche für einen Odoo-Import vorbereitet und verarbeitet werden müssen. Es gibt auch den umgekehrten Weg, Daten müssen aus Odoo  an ein PDM-System geliefert werden.

Eine kurze Übersicht der Berührungspunkte:

- Extract Load Transform (ETL)
- Data Export and Transformation
- Data Syncing
- Data Analysis and Visualization
- Machine Learning

### Flexibilität mit Jupyter

Die Kapazitäten Odoo um diese Berührungspunkte abzubilden sind begrenzt. Odoo lässt sich zwar beliebig mit Modulen sprich Python-Code erweitern. Doch in den genannten Bereichen wünscht man sich viel mehr Flexibilität. Beispielsweise möchte man im laufenden Betrieb ein fehlendes Daten-Feld ergänzen oder einen fehlerhaften Parameter anpassen.

Diese Flexibilität bieten Jupyter Notebooks. Jupyter Noteboks speichern Dokumentation, Instruktion und Resultat in einem Dokument. Bestehende Python-Bibliotheken wie [Pytorch](https://pytorch.org/), [pandas](https://pandas.pydata.org/), [Matplotlib](https://matplotlib.org/) oder [scikit-learn](https://scikit-learn.org/) können in Notebooks geladen und verwendet werden.

Mit diesen Tools lassen sich grosse Datenmengen blitzschnell verarbeiten. In der Kommunikation mit Odoo  ist dann oft die Schnittstelle (API) der Flaschenhals. Die Daten sind bereit, brauchen aber viel Zeit bis sie im System sind. 

### Integration von Jupyter Notebooks

Wir haben uns gefragt, wie wir Jupyter Notebooks mit Odoo direkter verbinden können. Dies ohne die Nutzung der Odoo-API und ohne direkten Zugriff auf die Odoo-Datenbank. Das Ergebnis sind zwei Odoo Module [Jupyter Lab](https://www.odoo-wiki.org/jupyter-lab.html) und [Jupyter Notebook Run](https://www.odoo-wiki.org/jupyter-notebook-run.html).

Mit dem ersten Modul kann in Odoo eine Jupyter Lab Umgebung erstellen, initialisieren und starten.

![](/assets/images/blog/Jupyter%20Lab%20Running.png)

Mit einem Link gelangt man auf die Jupyter Lab Umgebung. Notebooks in diesem Kontext erhalten Zugriff auf das Odoo Datenmodell. 

![](/assets/images/blog/Jupyter%20Lab%20Odoo%20Notebook.png)

Das zweite Module ermöglicht die Ausführung von Jupyter Notebooks ohne dass man die Jupyter Lab Umgebung starten muss.

Der Benutzer kann ein Notebook aufrufen und einen Dialog zur Ausführung starten. Parameter oder Dateien können an das Notebook übergeben werden.

![](/assets/images/blog/Jupyter%20Notebook%20Run%20Wizard.png)

Das Resultat der Ausführung wird in Odoo angezeigt.

![](/assets/images/blog/Jupyter%20Notebook%20Run%20Result.png)
