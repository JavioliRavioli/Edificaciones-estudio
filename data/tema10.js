(window.TEMAS = window.TEMAS || {})[10] = {
  id: 10,
  corto: "Impermeabilización",
  titulo: "Impermeabilización de sobrecimientos, pisos, sótanos, tanques y azoteas",
  chips: ["5 elementos a impermeabilizar", "Aditivo: Sika1 1 : 10", "Polietileno ≥ 200 µ"],
  cifras: [
    ["5 cm", "traslape del cartón asfáltico (en un solo sentido)"],
    ["+ 2 cm", "ancho del polietileno sobre el ancho del sobrecimiento"],
    ["10 cm", "traslape longitudinal mínimo del polietileno (sobrecimiento)"],
    ["200 µ", "espesor mínimo del polietileno"],
    ["1 : 10", "Sika1: 1 litro por cada 10 litros de agua"],
    ["1.75 L / 200 L", "Hidrosit: litros por litros de agua"],
    ["1 : 2 : 4 · 3 cm", "1ª capa de contrapiso (pisos), con Sika1"],
    ["1 : 5", "2ª capa de contrapiso: mortero, al colocar el piso"],
    ["5 cm · 1 : 8", "carpeta de hormigón pobre (sótanos)"],
    ["5 cm", "traslape mínimo del polietileno en sótanos"],
    ["1 : 4", "mortero de revoque (sótano/tanque) y contrapiso de azotea"],
    ["1 %", "pendiente hacia fuera del contrapiso de azotea"],
    ["ml · m² · m³", "unidades de pago según el elemento"]
  ],

  secciones: [
    {
      id: "intro", titulo: "Qué se impermeabiliza y con qué",
      idea: "El **agua** es el agente principal de destrucción a largo plazo de morteros, hormigones y mampuestos. Se previene con **tratamientos impermeabilizantes**.",
      partes: [
        { h: "Elementos que contempla el ítem", tabla: { h: ["Elemento", "Para qué se impermeabiliza"], r: [
          ["**Sobrecimientos**", "Evitar que la humedad suba a los muros por **capilaridad**. El costo es poco; no hacerlo encarece las reparaciones futuras."],
          ["**Pisos**", "Proteger los **contrapisos de hormigón** y los pisos de acabado de la humedad **del suelo inferior**."],
          ["**Sótanos y semisótanos**", "Proteger el hormigón y hacerlo **más durable**; impedir el paso de humedad para no deteriorar **revoques o tratamientos** interiores."],
          ["**Tanques de agua**", "Garantizar el almacenaje: proteger la **estructura** y el **agua**, evitando **contaminación por filtraciones** exteriores."],
          ["**Azoteas**", "Son cubiertas planas expuestas a la intemperie: exigen **impermeabilidad absoluta** para proteger el **cielo raso**."]
        ] } },
        { h: "Materiales (especificaciones técnicas)", tabla: { h: ["Material", "Uso / condición"], r: [
          ["**Alquitrán**", "Se **diluye en baño maría** (diésel o aceite sucio) para aplicarlo sobre la superficie."],
          ["**Cartón asfáltico**", "**Solo sobrecimientos** (también puede usarse en azoteas)."],
          ["**Polietileno**", "Necesariamente de **200 µ o más**, según el mercado."],
          ["**Sika1 o Hidrosit**", "**Aditivo impermeabilizante** que se agrega al **agua** en proporciones adecuadas."]
        ] } }
      ]
    },
    {
      id: "sobrecimientos", titulo: "Sobrecimientos", figs: ["d1", "d2"],
      idea: "Dos formas: con **cartón asfáltico** o con **polietileno**.",
      partes: [
        { h: "Con cartón asfáltico", pasos: [
          "**Pintar con alquitrán** toda la superficie del sobrecimiento.",
          "Colocar **láminas de cartón asfáltico** con un **traslape de 5 cm** entre lámina y lámina, **en un solo sentido**, por toda la longitud y con ancho equivalente al sobrecimiento (para evitar pasos de humedad)."
        ] },
        { h: "Con polietileno", pasos: [
          "Con la superficie **seca y limpia**, aplicar una primera capa de **alquitrán diluido**, **pintura bituminosa** o **alquitrán mezclado con arena fina**.",
          "Colocar el **polietileno** cortado **2 cm más ancho** que el sobrecimiento, extendido a lo largo de toda la superficie.",
          "**Traslapes longitudinales no menores a 10 cm**.",
          "Colocar una **capa de mortero de cemento** para asentar la **primera hilada** de ladrillos, bloques u otros."
        ] },
        { nota: "Este método (polietileno) **no es aconsejable**: el polietileno sufre **perforaciones** por la irregularidad de la superficie y la humedad pasa por los orificios.", notaT: "Ojo" },
        { h: "Medición y pago", items: ["Sobrecimientos: por **ml** (metro lineal)."] }
      ]
    },
    {
      id: "pisos", titulo: "Pisos", figs: ["d3"],
      idea: "Se impermeabiliza **entre las dos capas del contrapiso**: la 1ª capa lleva aditivo, luego alquitrán + polietileno, y después la 2ª capa.",
      partes: [
        { lead: "La soladura de piedra va sobre el relleno compactado; luego se vacía el contrapiso (**6 cm** en total), en **dos capas**." },
        { h: "Paso a paso", pasos: [
          "Vaciar la **1ª capa**: hormigón **1 : 2 : 4** (cemento : arena : grava), de **por lo menos 3 cm**, usando **Sika1** en la preparación con relación **1 : 10** (**1 litro de Sika1 por cada 10 litros de agua**).",
          "**Antes de que endurezca** el hormigón, **pintar con alquitrán diluido** toda la superficie del contrapiso.",
          "Colocar encima el **polietileno**.",
          "Vaciar la **2ª capa**: mortero **1 : 5** (cemento : arena), **al momento de colocar el piso**."
        ] },
        { h: "Medición y pago", items: ["Pisos: por **m²**."] }
      ]
    },
    {
      id: "sotanos", titulo: "Sótanos y semisótanos", figs: ["d4"],
      idea: "Se coloca **polietileno bajo toda la estructura**, se vierte una **carpeta de hormigón pobre** y luego se vacía la estructura con hormigón con **Sika1 1 : 10**.",
      partes: [
        { h: "Paso a paso", pasos: [
          "Colocar **polietileno** a lo largo de **toda la excavación** con **holgura moderada**. Traslape **mínimo 5 cm** entre hileras, **sellado con alquitrán** y **sujetado con estacas** en los extremos para que no se deslice al vaciar el hormigón.",
          "Vaciar sobre el polietileno una **carpeta de hormigón pobre de 5 cm**, dosificación **1 : 8** (cemento : arena).",
          "Armar la estructura **in situ** cuidando **no perforar el polietileno**. Colocar **galletas** entre el hormigón pobre y la armadura para mantener un **recubrimiento uniforme**. Armaduras **negativas** sobre **caballetes de ½\"**.",
          "El **encofrado de los muros** va sobre **caballetes** (que definen la **altura de la losa**) y se **apuntala con bolillos**.",
          "Vaciar la estructura con hormigón preparado con **Sika1 en dosificación 1 : 10** (1 L por 10 L de agua).",
          "El vaciado es **simultáneo** para que losa y muros trabajen **monolíticamente**: **primero la losa y luego los muros**.",
          "Con el hormigón endurecido, **picar toda la superficie** del sótano para el revocado (mejor adherencia hormigón–mortero).",
          "**Revoque**: mortero **1 : 4** (cemento : arena) preparado con **Sika1 1 : 10**."
        ] },
        { h: "Medición y pago", items: ["Sótanos y semisótanos: por **m²**."] }
      ]
    },
    {
      id: "tanques", titulo: "Tanques de agua", figs: ["d5"],
      idea: "Mismo **encofrado y vaciado** que en sótanos; la diferencia es el **revoque interior con media caña**.",
      partes: [
        { h: "Paso a paso", pasos: [
          "Encofrado y vaciado del hormigón: **igual que en sótanos** (con Sika1 **1 : 10**).",
          "Con la estructura vaciada, **picar toda la superficie interior** del tanque.",
          "**Revocar** con acabado de **media caña en todas las esquinas**.",
          "Mortero del revoque: **1 : 4** (cemento : arena) con **Sika1 1 : 10**."
        ] },
        { h: "Medición y pago", items: ["Tanques de agua: por **m²** o **m³**."] }
      ]
    },
    {
      id: "azoteas", titulo: "Azoteas", figs: ["d6"],
      idea: "Consiste en impermeabilizar **la losa y el piso que está encima**.",
      partes: [
        { h: "Paso a paso", pasos: [
          "Hormigón de la **losa y vigas expuestas** a la intemperie: con **Sika1 1 : 10**, **o** con otro aditivo, **Hidrosit**, en relación **1.75 L por cada 200 L de agua**.",
          "Con el hormigón **endurecido**, **pintar toda la superficie de la losa con alquitrán diluido**.",
          "Colocar encima **polietileno de 200 µ**.",
          "Vaciar el **contrapiso**: mortero **1 : 4** (cemento : arena) **más Sika1 1 : 10**, formando una **pendiente hacia fuera de 1 %**."
        ] },
        { h: "Medición y pago", tabla: { h: ["Elemento", "Unidad"], r: [
          ["Sobrecimientos", "**ml**"], ["Pisos", "**m²**"], ["Sótanos y semisótanos", "**m²**"],
          ["Tanques de agua", "**m²** – **m³**"], ["Azoteas", "**m²** – **m³**"]
        ] } }
      ]
    }
  ],

  notas: [
    "En el procedimiento de **sótanos** el apunte dice primero «**polipropileno**» y luego «**polietileno**». Es el mismo material en el resto del tema (polietileno): probablemente es un error de redacción. Pregunta al docente si te lo toman literal.",
    "En **sobrecimientos con polietileno** se dice «ancho **mayor en 2 cm**» sin aclarar si son 2 cm en total o por lado. Quédate con: «polietileno 2 cm más ancho que el sobrecimiento»."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Sobrecimiento con cartón asfáltico", corto: "Cartón asfáltico", vb: [0, 0, 480, 300],
      desc: "Vista longitudinal: alquitrán, láminas de cartón asfáltico y su traslape.",
      blanks: { ca: "Cartón asfáltico", aq: "Alquitrán", tr: "5 cm" },
      x: ["Polietileno", "10 cm", "2 cm", "Mortero"],
      nota: "Pintar con **alquitrán**, luego láminas de **cartón asfáltico** con traslape de **5 cm** en **un solo sentido**.",
      svg: S => [
        S.t(240, 14, "VISTA LONGITUDINAL", "hd"),
        S.r(0, 250, 480, 50, "k-soil"),
        S.r(30, 170, 420, 80, "k-conc"), S.t(40, 232, "Sobrecimiento", "sm l"),
        S.r(30, 80, 420, 76, "k-brick"),
        [99, 118, 137].map(y => S.l(30, y, 450, y)).join(""),
        S.t(60, 118, "Muro", "sm l"),
        S.r(30, 164, 420, 6, "k-black"),
        S.r(30, 156, 240, 8, "k-wood"), S.r(240, 156, 210, 8, "k-wood"),
        S.t(130, 40, "@ca"), S.l(130, 52, 130, 160, "da"),
        S.t(370, 40, "@aq"), S.l(370, 52, 370, 167, "da"),
        S.l(240, 164, 240, 192, "da"), S.l(270, 164, 270, 192, "da"),
        S.dh(240, 270, 192, "@tr", 24)
      ].join("")
    },
    {
      id: "d2", titulo: "Sobrecimiento con polietileno", corto: "Polietileno", vb: [0, 0, 480, 300],
      desc: "Capas sobre el sobrecimiento, en corte transversal, y el traslape longitudinal.",
      blanks: { pr: "Primera hilada", mo: "Mortero de cemento", po: "Polietileno", aq: "Alquitrán diluido", ov: "2 cm", tr: "10 cm" },
      x: ["5 cm", "Cartón asfáltico", "20 cm", "Hormigón pobre"],
      nota: "Polietileno **2 cm** más ancho que el sobrecimiento, traslape longitudinal **≥ 10 cm**. **No es aconsejable**: se perfora y pasa la humedad.",
      svg: S => [
        S.t(240, 14, "CORTE TRANSVERSAL", "hd"),
        S.r(0, 262, 480, 38, "k-soil"),
        S.r(170, 170, 100, 92, "k-conc"), S.t(220, 232, "Sobrecimiento", "sm"),
        S.r(170, 164, 100, 6, "k-black"),
        S.r(162, 158, 116, 6, "k-water"),
        S.r(170, 146, 100, 12, "k-mort"),
        S.r(170, 110, 100, 36, "k-brick"), S.l(170, 128, 270, 128),
        S.t(300, 112, "@pr:l"), S.l(297, 112, 272, 124),
        S.t(300, 142, "@mo:l"), S.l(297, 142, 272, 152),
        S.t(300, 172, "@po:l"), S.l(297, 172, 280, 162),
        S.t(300, 202, "@aq:l"), S.l(297, 202, 272, 167),
        S.t(100, 128, "Polietileno sobresale", "sm"), S.t(100, 160, "@ov"), S.l(129, 160, 160, 161),
        S.r(300, 268, 100, 7, "k-water"), S.r(370, 278, 100, 7, "k-water"),
        S.dh(370, 400, 262, "@tr", -24)
      ].join("")
    },
    {
      id: "d3", titulo: "Impermeabilización de pisos", corto: "Pisos", vb: [-30, 0, 510, 300],
      desc: "Capas del contrapiso con la impermeabilización intercalada.",
      blanks: { m: "Mortero 1 : 5", po: "Polietileno", aq: "Alquitrán diluido", h: "Hormigón 1 : 2 : 4", ad: "Sika1", t: "3 cm" },
      x: ["Mortero 1 : 4", "Cartón asfáltico", "Hidrosit", "5 cm"],
      nota: "1ª capa: hormigón **1 : 2 : 4** (≥ 3 cm) con **Sika1 1 : 10** → **alquitrán diluido** → **polietileno** → 2ª capa: mortero **1 : 5** al colocar el piso.",
      svg: S => [
        S.r(60, 50, 240, 40, "k-mort"),
        S.r(60, 90, 240, 6, "k-water"),
        S.r(60, 96, 240, 6, "k-black"),
        S.r(60, 102, 240, 48, "k-conc"),
        S.r(60, 150, 240, 60, "k-stone"), S.t(180, 180, "Soladura de piedra", "sm"),
        S.r(60, 210, 240, 50, "k-soil"), S.t(180, 235, "Relleno compactado", "sm"),
        S.t(110, 126, "Aditivo:", "sm"), S.t(190, 126, "@ad"),
        S.t(320, 62, "@m:l"), S.l(317, 66, 300, 68),
        S.t(320, 94, "@po:l"), S.l(317, 94, 300, 93),
        S.t(320, 126, "@aq:l"), S.l(317, 122, 300, 99),
        S.t(320, 158, "@h:l"), S.l(317, 154, 300, 130),
        S.dv(40, 102, 150, "@t", -6, "r"),
        S.t(240, 22, "CONTRAPISO EN 2 CAPAS", "hd")
      ].join("")
    },
    {
      id: "d4", titulo: "Sótano o semisótano", corto: "Sótanos", vb: [0, 0, 560, 300],
      desc: "Corte de la excavación con su impermeabilización y la estructura de hormigón.",
      blanks: { po: "Polietileno", hp: "Hormigón pobre", d: "1 : 8", e: "5 cm", ga: "Galletas", lo: "Losa de hormigón", mu: "Muro" },
      x: ["1 : 4", "2 cm", "Cartón asfáltico", "Caballetes"],
      nota: "Polietileno (traslape **≥ 5 cm**, sellado con alquitrán) → **hormigón pobre 5 cm, 1 : 8** → **galletas** → armadura → losa y muros con **Sika1 1 : 10**. Vaciado: **losa primero, muros después**.",
      svg: S => [
        S.r(0, 30, 560, 270, "k-soil"),
        S.r(40, 30, 300, 202, "k-bg"),
        S.r(40, 230, 300, 4, "k-water"),
        S.r(40, 215, 8, 17, "k-wood"), S.r(332, 215, 8, 17, "k-wood"),
        S.r(50, 205, 280, 25, "k-mort"),
        S.r(50, 150, 280, 55, "k-conc"),
        S.r(50, 50, 40, 100, "k-conc"), S.r(290, 50, 40, 100, "k-conc"),
        S.l(60, 192, 320, 192, "th"),
        [120, 190, 260].map(x => S.r(x, 197, 10, 8, "k-mort")).join(""),
        S.t(360, 80, "@mu:l"), S.l(357, 80, 332, 80),
        S.t(360, 135, "@lo:l"), S.l(357, 135, 322, 165),
        S.t(360, 185, "@ga:l"), S.l(357, 187, 272, 201),
        S.t(360, 225, "@hp:l"), S.l(357, 223, 332, 218),
        S.t(120, 217, "@e"), S.t(205, 217, "@d"),
        S.t(190, 268, "@po"), S.l(190, 256, 190, 236)
      ].join("")
    },
    {
      id: "d5", titulo: "Tanque de agua", corto: "Tanque", vb: [0, 0, 540, 300],
      desc: "Corte del tanque: hormigón con aditivo y revoque interior.",
      blanks: { hs: "Hormigón con Sika1", rv: "Revoque 1 : 4", mc: "Media caña", ag: "Agua" },
      x: ["Cartón asfáltico", "Revoque 1 : 8", "Arista viva", "Alquitrán"],
      nota: "Hormigón con **Sika1 1 : 10**; la superficie interior se **pica** y se **revoca** con mortero **1 : 4** + Sika1 y acabado de **media caña** en las esquinas.",
      svg: S => [
        S.r(100, 50, 280, 210, "k-conc"),
        S.r(130, 50, 220, 180, "k-bg"),
        S.r(138, 120, 204, 102, "k-water"),
        S.r(130, 50, 8, 180, "k-mort"), S.r(342, 50, 8, 180, "k-mort"), S.r(130, 222, 220, 8, "k-mort"),
        S.path("M138 206 Q138 222 154 222 L138 222 Z", "k-mort"), S.path("M342 206 Q342 222 326 222 L342 222 Z", "k-mort"),
        S.t(240, 172, "@ag"),
        S.t(115, 28, "@hs"), S.l(115, 40, 115, 60, "da"),
        S.t(400, 90, "@rv:l"), S.l(397, 90, 350, 100),
        S.t(400, 195, "@mc:l"), S.l(397, 197, 335, 216)
      ].join("")
    },
    {
      id: "d6", titulo: "Azotea", corto: "Azotea", vb: [0, 0, 560, 300],
      desc: "Capas de impermeabilización de una azotea (cubierta plana).",
      blanks: { co: "Mortero 1 : 4 + Sika1", po: "Polietileno 200 µ", aq: "Alquitrán diluido", lo: "Losa con Sika1", p: "1 %" },
      x: ["Cartón asfáltico", "5 %", "Polietileno 100 µ", "Hormigón pobre"],
      nota: "Losa con **Sika1 1 : 10** (o **Hidrosit** 1.75 L / 200 L) → **alquitrán diluido** → **polietileno de 200 µ** → contrapiso mortero **1 : 4 + Sika1** con **pendiente 1 %** hacia fuera.",
      svg: S => [
        S.t(70, 28, "Pendiente hacia fuera:", "sm l"), S.t(215, 28, "@p"), S.arrow(270, 28, "r"),
        S.r(40, 50, 300, 45, "k-mort"),
        S.r(40, 95, 300, 6, "k-water"),
        S.r(40, 101, 300, 6, "k-black"),
        S.r(40, 107, 300, 90, "k-conc"), S.t(190, 150, "Cielo raso debajo ↓", "sm mt"),
        S.t(360, 70, "@co:l"), S.l(357, 72, 340, 72),
        S.t(360, 105, "@po:l"), S.l(357, 100, 340, 98),
        S.t(360, 140, "@aq:l"), S.l(357, 136, 340, 104),
        S.t(360, 175, "@lo:l"), S.l(357, 175, 340, 150)
      ].join("")
    }
  ],

  tarjetas: [
    ["¿Qué elementos contempla el ítem de impermeabilización?", "**Sobrecimientos, pisos, sótanos y semisótanos, tanques de agua y azoteas.**"],
    ["¿Por qué se impermeabilizan los sobrecimientos?", "Para evitar que la humedad suba a los muros por **capilaridad** y los deteriore."],
    ["¿Para qué se impermeabilizan los pisos?", "Para proteger **contrapisos y pisos de acabado** de la humedad que viene del **suelo inferior**."],
    ["¿Para qué se impermeabilizan los tanques de agua?", "Para proteger la **estructura** y el **agua**, evitando **contaminación por filtraciones** exteriores."],
    ["¿Qué exige una azotea?", "**Impermeabilidad absoluta**, para proteger el **cielo raso** de la humedad."],
    ["Alquitrán: ¿cómo se prepara?", "Se **diluye en baño maría** con **diésel o aceite sucio**."],
    ["Cartón asfáltico: ¿dónde se usa?", "**Solo en sobrecimientos** (también puede usarse en azoteas)."],
    ["Polietileno: espesor", "**200 µ o más**, según el mercado."],
    ["Sika1 / Hidrosit", "Aditivos impermeabilizantes que se agregan al **agua** de la mezcla."],
    ["Sobrecimiento con cartón asfáltico", "Pintar con **alquitrán** + láminas con **traslape de 5 cm** en **un solo sentido**."],
    ["Sobrecimiento con polietileno", "Alquitrán (o pintura bituminosa) → polietileno **2 cm más ancho**, traslape **≥ 10 cm** → mortero de cemento → primera hilada. **No aconsejable** (se perfora)."],
    ["Sika1: dosificación", "**1 : 10** → **1 litro** de Sika1 por cada **10 litros de agua**."],
    ["Hidrosit: dosificación", "**1.75 L por cada 200 L de agua**."],
    ["Pisos: 1ª capa del contrapiso", "Hormigón **1 : 2 : 4** de **≥ 3 cm** con **Sika1 1 : 10**."],
    ["Pisos: ¿qué va entre las dos capas?", "**Alquitrán diluido** (antes de que el hormigón endurezca) y encima **polietileno**."],
    ["Pisos: 2ª capa", "Mortero **1 : 5**, vaciada **al colocar el piso**."],
    ["Sótanos: primer paso", "**Polietileno** en toda la excavación, traslape **≥ 5 cm**, **sellado con alquitrán** y sujeto con **estacas**."],
    ["Sótanos: carpeta sobre el polietileno", "**Hormigón pobre 5 cm, 1 : 8** (cemento : arena)."],
    ["Sótanos: ¿para qué las galletas?", "Mantener un **recubrimiento uniforme** entre hormigón pobre y armadura. Las armaduras negativas van sobre **caballetes de ½\"**."],
    ["Sótanos: orden del vaciado", "**Simultáneo**, **primero la losa y luego los muros**, para que trabajen monolíticamente."],
    ["Sótanos y tanques: revoque", "Se **pica** la superficie y se revoca con mortero **1 : 4** + **Sika1 1 : 10**."],
    ["Tanques: detalle del revoque", "Acabado de **media caña** en todas las esquinas."],
    ["Azotea: aditivos de la losa", "**Sika1 1 : 10** o **Hidrosit** (1.75 L por 200 L de agua)."],
    ["Azotea: orden de las capas", "Losa con aditivo → **alquitrán diluido** → **polietileno 200 µ** → contrapiso **mortero 1 : 4 + Sika1** con **pendiente 1 %**."],
    ["Unidades de pago", "Sobrecimientos **ml** · Pisos **m²** · Sótanos **m²** · Tanques **m² – m³** · Azoteas **m² – m³**."]
  ],

  preguntas: [
    { t: "mc", q: "¿Cuál es el agente principal de destrucción a largo plazo de morteros, hormigones y mampuestos?", o: ["El agua", "El viento", "La luz solar", "El polvo"], a: 0 },
    { t: "mc", q: "Se impermeabilizan los sobrecimientos para evitar que la humedad suba a los muros por...", o: ["Capilaridad", "Gravedad", "Dilatación", "Corrosión"], a: 0 },
    { t: "mc", q: "El cartón asfáltico se limita exclusivamente a la impermeabilización de...", o: ["Sobrecimientos (también puede usarse en azoteas)", "Tanques de agua", "Sótanos", "Pisos"], a: 0 },
    { t: "fill", q: "El polietileno debe ser necesariamente de [[200]] µ o más.", x: ["100", "50", "400", "20"] },
    { t: "mc", q: "El alquitrán se prepara...", o: ["Diluido en baño maría con diésel o aceite sucio", "Mezclado con cemento", "Diluido en agua fría", "Mezclado con yeso"], a: 0 },
    { t: "mc", q: "¿Qué son Sika1 e Hidrosit?", o: ["Aditivos impermeabilizantes que se agregan al agua", "Tipos de cartón asfáltico", "Marcas de polietileno", "Pinturas bituminosas"], a: 0 },
    { t: "fill", q: "Sika1 se dosifica en relación [[1 : 10]]: por cada [[10]] litros de agua se agrega [[1]] litro de Sika1.", x: ["1 : 5", "5", "2", "1 : 20"] },
    { t: "mc", q: "Dosificación de Hidrosit para la losa de una azotea:", o: ["1.75 L por cada 200 L de agua", "1 L por cada 10 L de agua", "10 L por cada 200 L de agua", "1.75 L por cada 20 L de agua"], a: 0 },
    { t: "fill", q: "El cartón asfáltico en sobrecimientos se coloca con un traslape de [[5]] cm, en un solo sentido, sobre una superficie pintada con [[alquitrán]].", x: ["10", "2", "polietileno", "mortero"] },
    { t: "mc", q: "En sobrecimientos con polietileno, el polietileno se corta...", o: ["2 cm más ancho que el sobrecimiento", "5 cm más angosto", "Igual de ancho, sin tolerancia", "10 cm más ancho"], a: 0 },
    { t: "mc", q: "El traslape longitudinal del polietileno en sobrecimientos no debe ser menor a:", o: ["10 cm", "5 cm", "2 cm", "20 cm"], a: 0 },
    { t: "vf", q: "El método de impermeabilización de sobrecimientos con polietileno es el más aconsejable.", a: false, w: "**No es aconsejable**: el polietileno se perfora por la irregularidad de la superficie y la humedad pasa por los orificios." },
    { t: "order", q: "Ordena la impermeabilización de un sobrecimiento con polietileno:", s: ["Superficie seca y limpia con una primera capa de alquitrán diluido", "Colocar el polietileno 2 cm más ancho, con traslapes ≥ 10 cm", "Colocar una capa de mortero de cemento", "Asentar la primera hilada de ladrillos o bloques"] },
    { t: "order", q: "Ordena la impermeabilización con cartón asfáltico:", s: ["Pintar con alquitrán toda la superficie del sobrecimiento", "Colocar láminas de cartón asfáltico con traslape de 5 cm en un solo sentido"] },
    { t: "mc", q: "En pisos, la 1ª capa del contrapiso es hormigón de dosificación...", o: ["1 : 2 : 4 con Sika1, de al menos 3 cm", "1 : 5 sin aditivo", "1 : 8, de 5 cm", "1 : 4, de 1 cm"], a: 0 },
    { t: "mc", q: "En pisos, ¿con qué se pinta el contrapiso antes de colocar el polietileno?", o: ["Alquitrán diluido, antes de que el hormigón endurezca por completo", "Cemento puro", "Yeso", "Pintura látex"], a: 0 },
    { t: "fill", q: "En pisos, la 2ª capa es mortero de dosificación [[1 : 5]] y se vacía [[al momento de colocar el piso]].", x: ["1 : 4", "una semana antes", "1 : 8", "antes de la soladura"] },
    { t: "order", q: "Ordena la impermeabilización de pisos:", s: ["Vaciar la 1ª capa de contrapiso (hormigón 1 : 2 : 4 con Sika1)", "Pintar con alquitrán diluido la superficie del contrapiso", "Colocar el polietileno", "Vaciar la 2ª capa (mortero 1 : 5) al colocar el piso"] },
    { t: "mc", q: "En sótanos, el traslape mínimo entre hileras de polietileno es de...", o: ["5 cm", "10 cm", "2 cm", "20 cm"], a: 0, w: "Se sella con alquitrán y se sujeta con estacas en los extremos." },
    { t: "mc", q: "En sótanos, ¿con qué se sella el traslape del polietileno?", o: ["Con alquitrán", "Con yeso", "Con cinta adhesiva", "Con cemento"], a: 0 },
    { t: "fill", q: "En sótanos se vacía sobre el polietileno una carpeta de hormigón pobre de [[5]] cm con dosificación [[1 : 8]].", x: ["10", "1 : 4", "3", "1 : 2 : 4"] },
    { t: "mc", q: "¿Para qué se colocan galletas entre el hormigón pobre y la armadura en un sótano?", o: ["Para mantener un recubrimiento uniforme", "Para sellar el polietileno", "Para apuntalar el encofrado", "Para curar el hormigón"], a: 0 },
    { t: "mc", q: "En sótanos, las armaduras negativas se colocan sobre...", o: ["Caballetes de ½\"", "Estacas de madera", "Hormigón pobre directamente", "Cuñas de madera"], a: 0 },
    { t: "vf", q: "En un sótano se vacían primero los muros y luego la losa.", a: false, w: "Primero la **losa** y luego los **muros**, en forma simultánea, para que trabajen monolíticamente." },
    { t: "mc", q: "El vaciado de hormigón de un sótano debe ser simultáneo para...", o: ["Que losa y muros trabajen monolíticamente", "Ahorrar encofrado", "Evitar el uso de Sika1", "Que se pueda picar antes"], a: 0 },
    { t: "mc", q: "¿Por qué se pica la superficie del sótano antes de revocar?", o: ["Para crear mejor adherencia entre el hormigón y el mortero", "Para eliminar el polietileno", "Para sacar el alquitrán", "Para aumentar el recubrimiento"], a: 0 },
    { t: "fill", q: "El revoque de sótanos y tanques usa mortero [[1 : 4]] con Sika1 en dosificación [[1 : 10]].", x: ["1 : 5", "1 : 8", "1 : 2"] },
    { t: "mc", q: "En un tanque de agua, el revoque interior termina con un acabado de...", o: ["Media caña en todas las esquinas", "Arista viva", "Rayado grueso", "Pintura bituminosa"], a: 0 },
    { t: "vf", q: "El encofrado y vaciado del hormigón de un tanque de agua es el mismo que el de un sótano.", a: true },
    { t: "mc", q: "Para la losa de una azotea, además de Sika1 1 : 10, puede usarse el aditivo...", o: ["Hidrosit", "Cemento blanco", "Cal hidratada", "Yeso"], a: 0 },
    { t: "order", q: "Ordena la impermeabilización de una azotea:", s: ["Vaciar la losa con Sika1 1 : 10 (o Hidrosit)", "Pintar con alquitrán diluido la superficie de la losa endurecida", "Colocar polietileno de 200 µ", "Vaciar el contrapiso de mortero 1 : 4 + Sika1 con pendiente 1 %"] },
    { t: "mc", q: "El contrapiso de una azotea se vacía con pendiente hacia fuera de...", o: ["1 %", "5 %", "10 %", "0 % (horizontal)"], a: 0 },
    { t: "mc", q: "El contrapiso de la azotea se hace con mortero de dosificación...", o: ["1 : 4 + Sika1 (1 : 10)", "1 : 8", "1 : 2 : 4", "1 : 5 sin aditivo"], a: 0 },
    { t: "match", q: "Relaciona cada elemento con la unidad en que se mide y paga:", p: [
      ["Sobrecimientos", "ml"], ["Pisos", "m²"], ["Sótanos y semisótanos", "m²  "], ["Tanques de agua", "m² – m³"], ["Azoteas", "m² – m³ "]
    ], x: ["pza"] },
    { t: "match", q: "Relaciona cada elemento con su objetivo principal:", p: [
      ["Sobrecimientos", "Evitar que la humedad suba por capilaridad a los muros"],
      ["Pisos", "Proteger contrapisos y pisos de la humedad del suelo inferior"],
      ["Tanques de agua", "Evitar la contaminación del agua por filtraciones exteriores"],
      ["Azoteas", "Proteger el cielo raso de la intemperie"],
      ["Sótanos y semisótanos", "Proteger el hormigón y hacerlo más durable"]
    ], x: ["Dar color a la estructura"] },
    { t: "match", q: "Relaciona cada material con su uso:", p: [
      ["Alquitrán", "Se diluye en baño maría con diésel o aceite sucio"],
      ["Cartón asfáltico", "Solo sobrecimientos (también azoteas)"],
      ["Polietileno", "200 µ o más"],
      ["Sika1 / Hidrosit", "Aditivo impermeabilizante que se agrega al agua"]
    ], x: ["Mortero de pega para ladrillos"] }
  ]
};
