(window.TEMAS = window.TEMAS || {})[3] = {
  id: 3,
  corto: "Relleno, soladura y contrapiso",
  titulo: "Relleno compactado, soladura de piedra y contrapiso",
  chips: ["Obra gruesa · bajo el piso", "Piso terminado: 5 cm bajo el sobrecimiento", "3 ítems · se miden en m² / m³"],
  cifras: [
    ["20 cm", "espesor máximo de cada capa de relleno"],
    ["30×30×10 cm", "bloque del pisón (con fierro en T)"],
    ["40 cm", "altura del sobrecimiento"],
    ["5 cm", "piso terminado por debajo del sobrecimiento"],
    ["35 cm", "altura útil: relleno + soladura + contrapiso + piso"],
    ["15 cm", "diámetro promedio de la piedra de soladura"],
    ["2 cm", "junta máxima entre piedra y piedra"],
    ["6 cm", "espesor total del contrapiso"],
    ["1 : 2 : 4", "hormigón de la 1ª capa (cemento : arena : grava)"],
    ["1 : 5", "mortero de la 2ª capa (cemento : arena)"],
    ["1 : 4 · 5 cm", "mortero de contrapiso de una sola capa (pegamento)"],
    ["2 m", "distancia máxima entre botones intermedios"],
    ["0.40 m", "límite de altura que decide m³ o m² en el relleno"]
  ],

  secciones: [
    {
      id: "relleno", titulo: "Relleno compactado", figs: ["d1", "d2"],
      idea: "Conjunto de operaciones para **colocar rellenos** con el suelo existente o material de préstamo **hasta llegar a los niveles y cotas** requeridos.",
      partes: [
        { h: "Descripción", items: [
          "Se usa material del suelo existente o **material de préstamo**.",
          "La altura del relleno depende de: el **tipo de piso**, la **altura del contrapiso** (mínimo **3 cm**) y el **diámetro de las piedras** de la soladura (**15 cm**)."
        ] },
        { h: "Especificaciones técnicas", items: [
          "Incluye todas las actividades para colocar **material suelto** en los sitios indicados.",
          "El material de relleno es **el mismo suelo de las excavaciones**, a menos que sea **suelo orgánico**.",
          "Si no alcanza el material para llegar al nivel y cota: se usa **ripio de un banco de préstamo**.",
          "Las capas de material suelto **no serán mayores a 20 cm**.",
          "Se compacta con **compactadora mecánica** o, en su defecto, con un **pisón fabricado en obra**."
        ] },
        { h: "Metodología (paso a paso)", pasos: [
          "**Trazar los niveles y cotas** que determine el proyecto.",
          "**Desbrozar** el terreno: el relleno se aplica previo desbroce. Los trabajos previos (cimentaciones, instalaciones) que quedarán cubiertos deben estar **concluidos**.",
          "**Tender y conformar capas** de **no más de 20 cm** de espesor, para compactar uniformemente todo el suelo.",
          "**Humedecer** cada capa hasta alcanzar la **humedad óptima**.",
          "**Compactar** cada capa con máquina compactadora o con **pisón**."
        ] },
        { h: "El pisón", items: [
          "**Bloque de hormigón de 30 × 30 × 10 cm** al que está empotrado un **fierro en forma de T** para facilitar su manejo."
        ] },
        { nota: "El **sobrecimiento mide 40 cm**. El **piso terminado** debe quedar **5 cm por debajo** del sobrecimiento para evitar que, por **capilaridad**, la humedad suba a la planta baja. Quedan **35 cm** para colocar: relleno, soladura de piedra, vaciado del contrapiso y piso definitivo.", notaT: "Nota clave del docente" },
        { h: "Medición y pago", tabla: { h: ["Condición", "Unidad"], r: [
          ["Altura **mayor a 0.40 m** y material de **banco de préstamo**", "**m³**"],
          ["Altura **menor a 0.40 m** y material de las **excavaciones de la obra**", "**m²**"]
        ] } },
        { items: ["Se mide en **unidad de superficie ejecutada**, según medición en el sitio. Pago por **m²** o **m³** según la lista de ítems del proyecto."] }
      ]
    },
    {
      id: "soladura", titulo: "Soladura de piedra", figs: ["d3"],
      idea: "Base de **piedra + material granular (gravilla)** sobre el terreno ya compactado. Sirve de base del contrapiso en interiores.",
      partes: [
        { h: "Descripción", items: [
          "Se coloca sobre el terreno **previamente compactado**.",
          "Objetivo: **distribuir uniformemente las cargas puntuales** de la carga viva y **evitar que el piso se fisure**."
        ] },
        { h: "Especificaciones técnicas", items: [
          "Antes de colocar la soladura, **drenajes e instalaciones bajo suelo deben estar terminados**.",
          "Piedra de **diámetro promedio 15 cm**.",
          "Material granular: producto del **cernido de arena**; rellena los **espacios vacíos** entre las piedras.",
          "La piedra se coloca con el **alineamiento y pendientes** correspondientes del piso."
        ] },
        { h: "Metodología (paso a paso)", pasos: [
          "El albañil coloca la piedra **asegurándola al suelo con un combo**, bien juntas, sin **juntas o aberturas mayores a 2 cm** entre piedra y piedra.",
          "Se **verifica la nivelación**.",
          "Se distribuye el **material granular** rellenando los espacios entre piedras hasta dejar una **superficie horizontal**.",
          "Así se impide que el **hormigón del contrapiso entre por los intersticios** de las piedras."
        ] },
        { nota: "**No debe haber yeso** entre, sobre o por debajo de las piedras: produce la **hinchazón del contrapiso y del piso**." },
        { h: "Medición y pago", items: ["Por **superficie realmente ejecutada**, verificada en sitio y con planos del proyecto. Pago por **m²**."] }
      ]
    },
    {
      id: "contrapiso", titulo: "Contrapisos", figs: ["d4", "d5"],
      idea: "El contrapiso es la **estructura de hormigón que sirve de soporte al piso**. Espesor total de **6 cm**, en **una o dos etapas** según el tipo de piso.",
      partes: [
        { h: "Descripción", items: [
          "Espesor total de la mezcla: **6 cm**, hecho de una sola vez o en dos etapas según el piso a colocar."
        ] },
        { h: "Según cómo se fija el piso", tabla: { h: ["Piso fijado con…", "Capas", "Dosificación y espesor"], r: [
          ["**Mortero**", "**Dos** capas", "1ª: hormigón **1 : 2 : 4** (cemento : arena : grava), **3 cm**. 2ª: mortero **1 : 5** (cemento : arena), **3 cm**, vaciada **al colocar el piso**."],
          ["**Pegamento**", "**Una** sola capa", "Mortero **1 : 4** (cemento : arena), **5 cm**."]
        ] } },
        { h: "Metodología (paso a paso)", lead: "Se vacía **una vez colocada la soladura** sobre el relleno compactado y con **toda la superficie nivelada**.", pasos: [
          "Colocar **botones de cemento en todas las esquinas** del ambiente, con el **espesor de contrapiso** adoptado. A partir de ellos se nivela toda la superficie.",
          "Colocar **hilos guía** uniendo los botones de las esquinas.",
          "Siguiendo los hilos, colocar **botones intermedios** en las dos direcciones, a **no más de 2 m**.",
          "Cada pareja de botones en un sentido sirve de guía para formar la **maestra**: se rellena entre la soladura y la **regla metálica** apoyada sobre los botones.",
          "**Rellenar entre las maestras** manteniendo la regla apoyada sobre ellas y **raspar el excedente**.",
          "Con el primer contrapiso **terminado y endurecido**, **rayar toda la superficie** para mejorar la adherencia con la siguiente capa.",
          "Vaciar el **segundo contrapiso** o colocar el **piso definitivo**, según el tipo de piso."
        ] },
        { h: "Medición y pago", items: ["Por **superficie realmente ejecutada**, verificada en sitio y con planos. Pago por **m²**."] }
      ]
    }
  ],

  notas: [
    "En la **descripción** del contrapiso con pegamento se habla de «mezcla de hormigón de 5 cm», pero en las **especificaciones técnicas** es **mortero 1 : 4, 5 cm**. En el examen usa lo de las especificaciones (mortero 1 : 4) y, ante la duda, confírmalo con el docente.",
    "Se dice que el espesor total del contrapiso es **6 cm**, pero con pegamento la capa única es de **5 cm**. Son dos casos distintos: 6 cm = 3 + 3 (mortero); 5 cm = una capa (pegamento)."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Corte del piso sobre el terreno", corto: "Corte del piso", vb: [-12, 0, 532, 310],
      desc: "Capas que van entre el terreno y el piso terminado, con sus alturas. Esquema **sin escala**.",
      blanks: { a: "40 cm", b: "5 cm", c: "35 cm", piso: "Piso terminado", cp: "Contrapiso", sol: "Soladura de piedra", rel: "Relleno compactado", e1: "6 cm", e2: "15 cm", e3: "20 cm" },
      x: ["30 cm", "10 cm", "45 cm", "Capa de arena"],
      nota: "Sobrecimiento **40 cm** − **5 cm** (piso terminado más bajo) = **35 cm** para relleno + soladura + contrapiso + piso. El relleno va en capas de **20 cm máx.**, la piedra mide **15 cm** y el contrapiso **6 cm**.",
      svg: S => [
        S.t(250, 14, "CORTE · ESQUEMA SIN ESCALA", "hd"),
        S.r(-12, 253, 532, 57, "k-soil"),
        S.r(66, 253, 98, 47, "k-stone"), S.t(115, 277, "Cimiento", "sm"),
        S.r(80, 40, 70, 213, "k-conc"),
        `<text transform="rotate(-90 115 146)" x="115" y="146" class="sm">Sobrecimiento</text>`,
        S.r(150, 65, 200, 28, "k-mort"), S.r(150, 93, 200, 40, "k-conc"), S.r(150, 133, 200, 70, "k-mort"),
        [168, 200, 232, 264, 296, 328].map(x => S.c(x, 168, 13, "k-stone")).join(""),
        S.r(150, 203, 200, 50, "k-soil"),
        S.t(250, 79, "@piso"), S.t(250, 113, "@cp"), S.t(250, 168, "@sol"), S.t(250, 228, "@rel"),
        S.l(80, 40, 350, 40, "da"), S.t(160, 29, "Cara superior del sobrecimiento", "sm l mt"),
        S.dv(300, 40, 65, "@b", 40),
        S.dv(62, 40, 253, "@a", -6, "r"),
        S.dv(362, 93, 133, "@e1", 34), S.dv(362, 133, 203, "@e2", 34), S.dv(362, 203, 253, "@e3", 34),
        S.l(350, 65, 456, 65, "da"), S.l(350, 253, 456, 253, "da"),
        S.dv(452, 65, 253, "@c", 38)
      ].join("")
    },
    {
      id: "d2", titulo: "El pisón", corto: "Pisón", vb: [0, 0, 480, 280],
      desc: "Herramienta de compactación fabricada en obra: completa su nombre y sus medidas.",
      blanks: { blq: "Bloque de hormigón", t: "Fierro en T", w: "30 cm", h: "10 cm" },
      x: ["20 cm", "15 cm", "Bloque de ladrillo", "Fierro recto"],
      nota: "Pisón = bloque de hormigón de **30 × 30 × 10 cm** con un **fierro en T** empotrado para manejarlo.",
      svg: S => [
        S.t(240, 18, "PISÓN · VISTA FRONTAL", "hd"),
        S.r(0, 205, 480, 75, "k-soil"),
        S.r(150, 150, 180, 55, "k-conc"),
        S.r(235, 45, 10, 105, "k-steel"), S.r(195, 35, 90, 12, "k-steel"),
        S.t(240, 178, "@blq"),
        S.l(297, 60, 247, 60), S.t(300, 60, "@t:l"),
        S.dh(150, 330, 224, "@w", 20),
        S.dv(352, 150, 205, "@h", 44),
        S.t(240, 268, "El bloque también mide 30 cm de fondo", "sm mt")
      ].join("")
    },
    {
      id: "d3", titulo: "Soladura de piedra", corto: "Soladura", vb: [0, 0, 520, 330],
      desc: "Nombra cada capa y completa la junta máxima entre piedras.",
      blanks: { cp: "Contrapiso", pi: "Piedra Ø 15 cm", ar: "Arena cernida", re: "Relleno compactado", j: "2 cm" },
      x: ["Yeso", "Ripio", "10 cm", "Piedra Ø 30 cm"],
      nota: "Piedra Ø **15 cm**, juntas de **2 cm máx.**, vacíos rellenos con **arena cernida**, **nunca yeso** (hincha el contrapiso y el piso).",
      svg: S => [
        S.r(20, 40, 330, 40, "k-conc"),
        S.r(20, 80, 330, 70, "k-mort"),
        [55, 121, 187, 253, 319].map(x => S.c(x, 115, 30, "k-stone")).join(""),
        S.r(20, 150, 330, 55, "k-soil"),
        S.t(365, 60, "@cp:l"), S.l(362, 60, 340, 60),
        S.t(365, 100, "@pi:l"), S.l(362, 100, 330, 100),
        S.t(365, 138, "@ar:l"), S.l(362, 138, 342, 143),
        S.t(365, 178, "@re:l"), S.l(362, 178, 330, 178),
        S.l(20, 218, 500, 218, "da"),
        S.t(20, 236, "DETALLE DE LA JUNTA", "hd l"),
        S.c(80, 274, 20, "k-stone"), S.c(144, 274, 20, "k-stone"),
        S.dh(100, 124, 274, "@j", 32),
        S.t(190, 274, "Aberturas mayores a este valor: no permitidas", "sm l mt")
      ].join("")
    },
    {
      id: "d4", titulo: "Contrapiso según el tipo de piso", corto: "Una o dos capas", vb: [0, 0, 520, 300],
      desc: "Compara los dos casos: piso con mortero (2 capas) y piso con pegamento (1 capa). Completa dosificaciones y espesores.",
      blanks: { m2: "1 : 5", h1: "1 : 2 : 4", m1: "1 : 4", t1: "3 cm", t2: "3 cm", t3: "5 cm" },
      x: ["1 : 3", "1 : 8", "6 cm", "2 cm"],
      nota: "Mortero → **2 capas**: hormigón **1 : 2 : 4** (3 cm) + mortero **1 : 5** (3 cm). Pegamento → **1 capa** de mortero **1 : 4** de **5 cm**.",
      svg: S => [
        S.t(110, 22, "PISO CON MORTERO", "hd"), S.t(375, 22, "PISO CON PEGAMENTO", "hd"),
        S.r(20, 44, 180, 14, "k-paint"), S.t(110, 51, "Piso", "sm"),
        S.r(20, 58, 180, 40, "k-mort"), S.t(30, 78, "2ª capa · mortero", "sm l"), S.t(160, 78, "@m2"),
        S.r(20, 98, 180, 40, "k-conc"), S.t(30, 118, "1ª capa · hormigón", "sm l"), S.t(160, 118, "@h1"),
        S.r(20, 138, 180, 44, "k-stone"), S.t(110, 160, "Soladura de piedra", "sm"),
        S.dv(210, 58, 98, "@t1", 32), S.dv(210, 98, 138, "@t2", 32),
        S.r(290, 44, 150, 14, "k-paint"), S.t(365, 51, "Piso", "sm"),
        S.r(290, 58, 150, 70, "k-mort"), S.t(300, 93, "Mortero", "sm l"), S.t(398, 93, "@m1"),
        S.r(290, 128, 150, 54, "k-stone"), S.t(365, 155, "Soladura de piedra", "sm"),
        S.dv(452, 58, 128, "@t3", 34),
        S.t(260, 220, "Espesor total del contrapiso: 6 cm (mortero)  ·  capa única: 5 cm (pegamento)", "sm mt")
      ].join("")
    },
    {
      id: "d5", titulo: "Botones, hilos guía y maestras", corto: "Botones y maestras", vb: [0, 0, 480, 300],
      desc: "Vista en planta del ambiente: así se nivela la superficie antes de vaciar el contrapiso.",
      blanks: { bo: "Botón", hi: "Hilo guía", ma: "Maestra", reg: "Regla metálica", d: "2 m" },
      x: ["Plomada", "Nivel", "3 m", "Combo"],
      nota: "**Botones** en las esquinas → **hilos guía** → botones intermedios a **≤ 2 m** → **maestras** con la **regla metálica** → se rellena entre maestras y se raspa el excedente.",
      svg: S => [
        S.r(60, 50, 360, 200, "k-none"),
        S.r(174, 50, 12, 200, "k-conc"), S.r(294, 50, 12, 200, "k-conc"),
        S.l(60, 50, 420, 50, "ac da"), S.l(60, 250, 420, 250, "ac da"),
        S.l(60, 50, 60, 250, "ac da"), S.l(420, 50, 420, 250, "ac da"),
        [[60, 50], [420, 50], [60, 250], [420, 250], [180, 50], [300, 50], [180, 250], [300, 250]].map(p => S.c(p[0], p[1], 7, "k-black")).join(""),
        S.t(60, 22, "@bo"), S.l(60, 34, 60, 42),
        S.t(300, 22, "@hi"), S.l(300, 34, 330, 50),
        S.t(240, 130, "@ma"), S.l(272, 130, 294, 130),
        S.l(180, 190, 300, 190, "th ac"), S.t(240, 215, "@reg"), S.l(240, 203, 240, 192),
        S.dh(180, 300, 268, "@d", 20)
      ].join("")
    }
  ],

  tarjetas: [
    ["¿Qué es el relleno compactado?", "El conjunto de operaciones para colocar rellenos con el **suelo existente o material de préstamo** hasta llegar a los niveles y cotas requeridos."],
    ["¿De qué depende la altura del relleno compactado?", "Del **tipo de piso**, de la **altura del contrapiso (mín. 3 cm)** y del **diámetro de las piedras de la soladura (15 cm)**."],
    ["¿Qué material se usa para el relleno?", "El **mismo suelo de las excavaciones**, salvo que sea **suelo orgánico**. Si no alcanza: **ripio de un banco de préstamo**."],
    ["Espesor máximo de cada capa de relleno", "**20 cm**."],
    ["¿Cómo se compacta el relleno?", "Con **compactadora mecánica** o, en su defecto, con un **pisón** fabricado en obra. Cada capa se humedece hasta la **humedad óptima**."],
    ["¿Qué es el pisón y cómo es?", "**Bloque de hormigón de 30 × 30 × 10 cm** con un **fierro en T** empotrado para manejarlo."],
    ["Altura del sobrecimiento y nivel del piso terminado", "Sobrecimiento **40 cm**. El piso terminado va **5 cm por debajo**, para evitar que la humedad suba por **capilaridad**. Quedan **35 cm**."],
    ["¿Qué entra en los 35 cm?", "Relleno compactado, soladura de piedra, vaciado del contrapiso y piso definitivo."],
    ["Relleno: ¿cuándo se mide en m³ y cuándo en m²?", "**m³**: altura **mayor a 0.40 m** y material de **banco de préstamo**. **m²**: altura **menor a 0.40 m** y material de las **excavaciones de la obra**."],
    ["¿Qué es la soladura de piedra?", "Base de **piedra y material granular (gravilla)** sobre el terreno compactado, base del contrapiso de interiores."],
    ["Objetivo de la soladura", "**Distribuir uniformemente las cargas puntuales** de la carga viva y **evitar fisuras** en el piso."],
    ["Piedra de la soladura: diámetro y juntas", "Diámetro promedio **15 cm**; juntas o aberturas de **máx. 2 cm**."],
    ["¿Qué es el material granular de la soladura?", "Producto del **cernido de arena**; rellena los vacíos entre piedras y evita que el hormigón del contrapiso se cuele."],
    ["¿Con qué se asegura la piedra al suelo?", "Con un **combo**, el albañil la va asentando bien junta."],
    ["¿Por qué no debe haber yeso en la soladura?", "Porque produce la **hinchazón del contrapiso y del piso**."],
    ["¿Qué debe estar terminado antes de la soladura?", "Los **sistemas de drenaje e instalaciones bajo suelo**."],
    ["¿Qué es el contrapiso?", "La **estructura de hormigón que sirve de soporte al piso**. Espesor total **6 cm**."],
    ["Contrapiso para piso fijado con mortero", "**Dos capas**: 1ª hormigón **1 : 2 : 4** de **3 cm**; 2ª mortero **1 : 5** de **3 cm** (al colocar el piso)."],
    ["Contrapiso para piso fijado con pegamento", "**Una capa** de mortero **1 : 4** de **5 cm**."],
    ["¿Qué son los botones de cemento?", "Puntos de cemento en **todas las esquinas**, con el **espesor del contrapiso**, que sirven de referencia de nivel."],
    ["¿Para qué sirven los hilos guía y los botones intermedios?", "Los hilos unen los botones de las esquinas; siguiendo su nivel se colocan **botones intermedios** en dos direcciones a **≤ 2 m**."],
    ["¿Qué es la maestra?", "La franja que se forma entre una **pareja de botones**, rellenando entre la soladura y la **regla metálica** apoyada sobre ellos."],
    ["¿Por qué se raya el primer contrapiso?", "Para lograr **mejor adherencia** con la siguiente capa."],
    ["Medición y pago de soladura y contrapiso", "Por **superficie realmente ejecutada** (verificada en sitio y planos): **m²**."]
  ],

  preguntas: [
    { t: "vf", q: "El material de relleno es, por defecto, el mismo suelo producto de las excavaciones, salvo que sea suelo orgánico.", a: true, w: "Si es orgánico no se usa; si no alcanza, se completa con ripio de un banco de préstamo." },
    { t: "vf", q: "Las capas de material suelto del relleno pueden tener hasta 30 cm de espesor.", a: false, w: "El máximo es **20 cm** por capa." },
    { t: "mc", q: "Si el material de las excavaciones no alcanza para llegar al nivel y cota deseados, se utiliza:", o: ["Ripio de un banco de préstamo", "Suelo orgánico", "Arena fina de río", "Escombro de la obra"], a: 0 },
    { t: "fill", q: "Las capas de material suelto no serán mayores a [[20]] cm y cada una se humedece hasta alcanzar la humedad [[óptima]].", x: ["30", "15", "máxima", "natural"] },
    { t: "mc", q: "¿Qué dimensiones tiene el bloque de hormigón del pisón?", o: ["30 × 30 × 10 cm", "20 × 20 × 10 cm", "40 × 40 × 15 cm", "30 × 30 × 20 cm"], a: 0, w: "Lleva empotrado un **fierro en T** para manejarlo." },
    { t: "vf", q: "Antes de aplicar el relleno se debe desbrozar el terreno y concluir las cimentaciones e instalaciones que quedarán cubiertas.", a: true },
    { t: "mc", q: "El piso terminado debe quedar ___ por debajo del sobrecimiento.", o: ["5 cm", "10 cm", "2 cm", "15 cm"], a: 0, w: "Así la humedad no sube por capilaridad a la planta baja." },
    { t: "fill", q: "Sobrecimiento de [[40]] cm menos [[5]] cm = [[35]] cm para relleno, soladura, contrapiso y piso.", x: ["30", "45", "10", "25"] },
    { t: "mc", q: "¿Por qué el piso terminado queda 5 cm por debajo del sobrecimiento?", o: ["Para evitar que por capilaridad la humedad suba a la planta baja", "Para ahorrar hormigón en el contrapiso", "Para que el piso quede más resistente al fuego", "Para facilitar el desencofrado"], a: 0 },
    { t: "order", q: "Ordena la metodología del relleno compactado:", s: ["Trazar los niveles y cotas del proyecto", "Desbrozar el terreno y concluir los trabajos previos que quedarán cubiertos", "Tender y conformar capas de no más de 20 cm", "Humedecer cada capa hasta la humedad óptima", "Compactar cada capa con compactadora o pisón"] },
    { t: "mc", q: "Relleno con altura mayor a 0.40 m y material de banco de préstamo: se mide en...", o: ["m³", "m²", "ml", "pieza"], a: 0 },
    { t: "mc", q: "Relleno con altura menor a 0.40 m y material de las excavaciones de la obra: se mide en...", o: ["m²", "m³", "ml", "kg"], a: 0 },
    { t: "mc", q: "¿Cuál NO es un factor del que dependa la altura del relleno compactado?", o: ["El color de la pintura", "El tipo de piso", "La altura del contrapiso", "El diámetro de las piedras de la soladura"], a: 0 },
    { t: "fill", q: "La altura del relleno depende del tipo de piso, de la altura del contrapiso (mínimo [[3]] cm) y del diámetro de las piedras de soladura ([[15]] cm).", x: ["6", "20", "5", "2"] },
    { t: "mc", q: "El objetivo de la soladura de piedra es...", o: ["Distribuir uniformemente las cargas puntuales de la carga viva y evitar fisuras en el piso", "Impermeabilizar el contrapiso", "Nivelar el sobrecimiento", "Servir de encofrado al contrapiso"], a: 0 },
    { t: "vf", q: "Antes de colocar la soladura, los sistemas de drenaje e instalaciones bajo suelo deben estar terminados.", a: true },
    { t: "mc", q: "El diámetro promedio de la piedra para la soladura es de...", o: ["15 cm", "5 cm", "30 cm", "20 cm"], a: 0 },
    { t: "mc", q: "El material granular de la soladura es:", o: ["Producto del cernido de arena", "Cemento puro", "Grava triturada de 3\"", "Yeso"], a: 0, w: "Su función: rellenar los vacíos entre las piedras." },
    { t: "fill", q: "Entre piedra y piedra no puede haber juntas o aberturas mayores a [[2]] cm.", x: ["5", "10", "15", "1"] },
    { t: "vf", q: "La piedra de la soladura se asegura al suelo con la ayuda de un combo.", a: true },
    { t: "vf", q: "Se puede usar yeso entre las piedras de la soladura si queda bien compactado.", a: false, w: "El yeso produce la **hinchazón del contrapiso y del piso**: no debe haber yeso entre, sobre ni debajo de las piedras." },
    { t: "mc", q: "El material granular se distribuye sobre las piedras para...", o: ["Impedir que el hormigón del contrapiso entre por los intersticios", "Dar color al piso", "Aumentar el espesor del relleno", "Reemplazar el pisón"], a: 0 },
    { t: "order", q: "Ordena la colocación de la soladura de piedra:", s: ["Colocar la piedra asegurándola al suelo con un combo, con juntas de máx. 2 cm", "Verificar la nivelación de las piedras", "Distribuir el material granular rellenando los espacios entre piedras", "Dejar una superficie horizontal lista para vaciar el contrapiso"] },
    { t: "mc", q: "La soladura de piedra se mide y paga por...", o: ["m²", "m³", "ml", "pieza"], a: 0, w: "Por la superficie realmente ejecutada, verificada en sitio y con planos." },
    { t: "mc", q: "El contrapiso es...", o: ["La estructura de hormigón que sirve de soporte al piso", "La capa de piedra bajo el relleno", "El revoque de los muros", "La impermeabilización del sobrecimiento"], a: 0 },
    { t: "mc", q: "El espesor total de la mezcla de contrapiso es de...", o: ["6 cm", "3 cm", "10 cm", "15 cm"], a: 0 },
    { t: "mc", q: "Un piso que se fija con pegamento lleva...", o: ["Una sola capa de mortero 1 : 4 de 5 cm", "Dos capas de 3 cm", "Una capa de hormigón 1 : 2 : 4 de 10 cm", "Solo soladura, sin contrapiso"], a: 0 },
    { t: "fill", q: "Piso con mortero: 1ª capa de hormigón [[1 : 2 : 4]] de [[3]] cm y 2ª capa de mortero [[1 : 5]] de [[3]] cm.", x: ["1 : 3", "1 : 8", "5", "6"] },
    { t: "mc", q: "La segunda capa de contrapiso (mortero 1 : 5) se vacía...", o: ["Al momento de colocar el piso", "Antes de la soladura", "Un mes después del primer contrapiso", "Antes de colocar los botones"], a: 0 },
    { t: "order", q: "Ordena el colocado del contrapiso:", s: ["Colocar botones de cemento en todas las esquinas con el espesor de contrapiso", "Colocar hilos guía uniendo los botones de las esquinas", "Colocar botones intermedios en las dos direcciones (máx. 2 m)", "Formar las maestras con la regla metálica apoyada sobre los botones", "Rellenar entre maestras y raspar el excedente con la regla", "Rayar la superficie del primer contrapiso ya endurecido"] },
    { t: "mc", q: "¿Para qué se raya la superficie del primer contrapiso?", o: ["Para lograr mejor adherencia con la siguiente capa", "Para que escurra el agua", "Para secarlo más rápido", "Para marcar los ejes"], a: 0 },
    { t: "mc", q: "La distancia máxima entre botones intermedios del contrapiso es de...", o: ["2 m", "5 m", "50 cm", "10 m"], a: 0 },
    { t: "vf", q: "El contrapiso se vacía antes de colocar la soladura, para que esta se apoye sobre él.", a: false, w: "Primero va el relleno, luego la **soladura** y recién entonces el contrapiso, con toda la superficie nivelada." },
    { t: "match", q: "Relaciona cada término con su definición:", p: [
      ["Botón", "Punto de cemento en las esquinas, con el espesor del contrapiso"],
      ["Hilo guía", "Referencia que une los botones de las esquinas"],
      ["Maestra", "Franja formada entre una pareja de botones con la regla metálica"],
      ["Pisón", "Bloque de hormigón 30 × 30 × 10 cm con fierro en T"],
      ["Soladura", "Base de piedra y material granular sobre el terreno compactado"]
    ], x: ["Capa de arena para nivelar el piso"] },
    { t: "match", q: "Relaciona cada ítem con su unidad de pago:", p: [
      ["Relleno con h > 0.40 m (banco de préstamo)", "m³"],
      ["Relleno con h < 0.40 m (material de la obra)", "m²"],
      ["Soladura de piedra", "m² "],
      ["Contrapiso", "m²  "]
    ], x: ["ml"] }
  ]
};
