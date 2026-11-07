# Niky's Kitchen – původní web s blogem

První verze webu **Niky's Kitchen** v čistém HTML, CSS a JavaScriptu: recepty (slané, sladké, nápoje), články, galerie a stránka O mně.

> Web nahrazuje nový web v Next.js (repozitář `nikys-kitchen-web`). Tenhle zůstává, dokud nový nebude hotový a online.

## Jaký problém to řeší

Hodně lidí chce jíst zdravě, ale v praxi narazí na tohle:

- **Neví, kolik toho sníst.** Kalkulačka jim dá číslo v kcal, ale už neřekne, co si z toho dát k obědu.
- **Nemají čas.** Po práci nebo tréninku nechtějí složité recepty ani extra nákup.
- **Zapisování jídel je otravné.** Počítat a zapisovat každé sousto zabere čas a často vede k výčitkám, proto s tím hodně lidí brzy skončí.
- **Rady jsou roztroušené** po webech, appkách a sociálních sítích a často si odporují.

**Na co to je:** dát jednu jasnou odpověď na otázku *„co mám dnes jíst a kolik“*, a to bez zapisování a bez výčitek.

**Pro koho:** ženy i muži 18+, kteří berou zdravé jídlo jako investici do budoucna, ale nemají moc času. Chtějí zhubnout, udržet formu nebo nabrat svaly, často sportují nebo pracují na nohou.

**Čím je to jiné:**
- žádné zapisování jídel ani denní počítání, stačí jednou zadat profil,
- jeden základ receptu a tři varianty (zhubnout / udržet / nabrat), takže se pro celou rodinu vaří jednou,
- vaří se z toho, co je doma v ledničce, a nákupní seznam se sestaví sám,
- v plánu je i „sladká tečka“, protože zdravé jídlo nemá být trest,
- krátké texty s možností rozkliknout víc, čeština a angličtina, důraz na přístupnost (i pro lidi se zrakovým postižením),
- informace jen z ověřených zdrojů, bez zdravotních slibů.

## Proč se kouknout na web

- **Recepty pro lidi, kteří nemají čas.** Krátké postupy, jasné suroviny, přepočet porcí jedním klikem.
- **Jeden recept, tři varianty.** Stejný základ upravíš podle toho, jestli chceš zhubnout, udržet formu nebo nabrat, takže se nevaří zvlášť pro každého.
- **Články, které se dají přečíst za pár minut.** Nejdřív to hlavní „v kostce“, víc až po rozkliknutí, vždy s ověřenými zdroji.
- **Bez výčitek a bez zákazů.** Zdravé jídlo může být i sladké, a proto má každý plán svou „sladkou tečku“.
- **Pro co nejvíc lidí.** Čeština i angličtina, alergeny u každého receptu, přizpůsobené mobilu, s ohledem na čtečky obrazovky.
- **Navazuje na appku.** Z receptu se dostaneš rovnou do appky Jídlo od A–Z, kde si spočítáš, kolik toho sníst.
## Niky's Kitchen – jak to spolu souvisí

Niky's Kitchen má tři části. Cíl je pořád stejný: ulehčit lidem zdravé stravování bez složitého počítání a bez výčitek.

| Část | Co to je | Stav |
|------|----------|------|
| 🌐 **Web s blogem** | recepty a krátké články o výživě, česky i anglicky | tento původní web → nový web online: https://4613nikola-oss.github.io/nikys-kitchen-web/ |
| 📱 **Appka Jídlo od A–Z** | kalkulačka příjmu, plán jídel, recepty z ledničky, nákupní seznam | online: https://4613nikola-oss.github.io/jidlo-od-a-z/ |
| 🛒 **Obchod** | digitální produkty: e-booky, online kuchařka, jídelní plány, kurzy | připravujeme |

**Jak na sebe navazují:** web přivede čtenáře → appka mu pomůže v praxi → obchod nabídne placené plány a e-booky.

## Struktura

```
index.html, slane.html, sladke.html, napoje.html, clanky.html, galerie.html, o-mne.html
clanky/        jednotlivé články
recepty/       detailní recepty
css/style.css  vzhled
js/main.js     menu a drobné funkce
images/        obrázky (písma se načítají z Google Fonts)
```

## Spuštění

Stačí otevřít `index.html` v prohlížeči.

## Větve

- `dev` – rozpracované změny
- `main` – hotové
