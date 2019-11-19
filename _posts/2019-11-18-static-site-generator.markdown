---
layout: post
title:  "Static site generators"
author: Lucas
date:   2019-11-18 12:00:08 +0100
categories: assignment
excerpt: Vad tycker jag om "static site generators"? Och när är det lämpligt att använda sig av det?
comments: true
---

### SSG - Vad känner jag rent spontant?
Jag gillar främst att jag enkelt kan bygga upp en dynamisk (syftar på *partials* och *templates*) webbplats som inte kräver någon databaskoppling. Men också att den är lätt och snabb jämfört med tyngre CMS såsom WordPress. 

I mitt fall använde jag mig av Jekyll och temat Minima som grund. Jag uppskattar möjligheterna med Liquid, att man kan använda sig av objekt och taggar. Dels för att hålla sig *DRY* och dynamisk, dels för att enkelt kunna åstadkomma saker som exempelvis loopar.

Ibland kunde jag uppleva Jekyll som lite begränsande (kanske mest innan jag fick grepp om det) och till viss del oberäkneligt (som hur `post.excerpt` hanterades beroende på hur jag hade implementerat det). Generellt har jag lite svårt för paketlösningar och mallar, där det blir en massa lullull och kod jag inte använder utan som mest snurrar till det för mig. Men man får ta det onda med det goda! 

### Vilken typ av projekt lämpar SSG sig för? 
Kampanjer, (mindre?) bloggar, webbplatser för föreningar och företag som inte använder sig av webbshop. Förutsatt att den som bygger och förvaltar webbplatsen är bekväm med verktygen som krävs. Jag såg att det fanns [ett CMS-liknande GUI](https://github.com/jekyll/jekyll-admin) som kanske kan underlätta för andra. Men vissa förkunskaper skulle jag ändå hävda är nödvändiga. 