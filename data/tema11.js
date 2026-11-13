(window.TEMAS = window.TEMAS || {})[11] = {
  id: 11,
  corto: "Pinturas",
  titulo: "Pinturas: esquema de pintado, preparación de superficies y aplicación",
  chips: ["Obra fina · acabados", "Se mide y paga en m²", "Orden: cielos → paredes → carpinterías"],
  cifras: [
    ["4 factores", "esquema · preparación · aplicación · inspección y registro"],
    ["7 tipos", "látex (3), esmaltes sintéticos (3) y barnices"],
    ["≥ 1 día", "secado de la albañilería de ladrillo tras limpiarla con agua"],
    ["3 × ancho", "lado del cuadrado de pintado con brocha: 3 veces el ancho de la brocha"],
    ["20 cm → 1 m²", "rodillo de 20 cm: el área de pintado no debe pasar de 1 m²"],
    ["1º · 2º · 3º", "cielos rasos y falsos → paredes → puertas, ventanas, marcos y muebles"],
    ["m²", "unidad de medición y pago"]
  ],

  secciones: [
    {
      id: "intro", titulo: "Qué es una pintura y esquema de pintado", figs: ["d1", "d2"],
      idea: "**Pintura**: producto de **pigmentos** (con o sin carga y aditivos) **dispersos en un vehículo**, que forma una **película sólida** al secar, usada para cubrir superficies.",
      partes: [
        { h: "Objetivos", items: [
          "**Conservación, protección y embellecimiento**, para lograr un acabado de **fácil limpieza y mantenimiento**."
        ] },
        { h: "Un buen resultado depende de 4 cosas", pasos: [
          "**Selección del esquema de pintado**.",
          "**Preparación de la superficie**.",
          "**Aplicación de la pintura**.",
          "**Inspección, control y registro** de cumplimiento de las especificaciones."
        ] },
        { items: ["Además, hay que contar con las condiciones para ejecutar: **andamios** adecuados en fachadas, **ventilación** natural o forzada en interiores cerrados."] },
        { h: "Esquema de pintado", items: [
          "Conjunto de pinturas de distintos tipos, **aplicadas en un orden establecido**, que aportan funciones específicas a la superficie."
        ] },
        { h: "Preparación de la superficie", items: [
          "Depende del **material** sobre el que se pinta, de la **pintura** a aplicar y de la **terminación** especificada."
        ] },
        { h: "Aplicación", items: [
          "Cumplir las **hojas técnicas** de los productos; considerar **condiciones ambientales** y **temperatura de la superficie**.",
          "Primero **seleccionar las herramientas**.",
          "La **primera capa** es la **imprimación**: **mejora la adherencia**, **disminuye la absorción** de la capa siguiente e **inhibe la corrosión** (en aceros).",
          "Respetar las indicaciones de **secado** antes de aplicar las capas siguientes."
        ] },
        { h: "Inspección, control y registro", items: [
          "Revisar **cada etapa**: las **condiciones** para ejecutarla, los **productos y herramientas** y el **resultado** de cada etapa."
        ] }
      ]
    },
    {
      id: "tipos", titulo: "Tipos de pintura", figs: ["d5"],
      idea: "Para la mayoría de usos generales hay **7 tipos**: 3 látex, 3 esmaltes sintéticos y los barnices.",
      partes: [
        { tabla: { h: ["Tipo", "Características", "Se aplica en"], r: [
          ["**Látex para interiores**", "La **más utilizada**. Terminación **mate**, disimula mejor las imperfecciones, requiere **menor preparación** de la base.", "Revoques y yeso"],
          ["**Látex para cielo rasos**", "Superficie **porosa** que evita la **condensación superficial**, desfavoreciendo el desarrollo de **hongos**.", "Revoques finos y yesos"],
          ["**Látex para exteriores**", "Base de **polímeros acrílicos**: elasticidad, resistencia, gran adherencia y condiciones **hidrófugas**; resiste la intemperie.", "Revoques y hormigones al exterior"],
          ["**Esmalte sintético brillante**", "**Brillante**, secado duro y resistente, **fácilmente lavable**.", "Carpinterías **exteriores**: madera, metal y, en menor proporción, revoques lisos"],
          ["**Esmalte sintético semimate**", "Mismas características atenuadas. Exige **buena preparación** de la base (si no, delata las imperfecciones).", "Carpinterías **interiores**: madera, metal y paredes interiores"],
          ["**Esmalte sintético mate**", "Similar al anterior, pero **menos resistente al roce y al lavado**.", "—"],
          ["**Barnices**", "**Transparentes**; existen brillante, semimate y mate (los **brillantes** son los más resistentes).", "Maderas y mampostería vista"]
        ] } }
      ]
    },
    {
      id: "espec", titulo: "Especificaciones técnicas", figs: [],
      idea: "Las sustancias de uso en pintura serán de **superior calidad** y cumplirán condiciones generales; los **barnices**, condiciones propias.",
      partes: [
        { h: "Toda sustancia de pintura", items: [
          "**Facilidad de extenderse** y cubrir las superficies a que se apliquen.",
          "**Fijeza** en la tinta o tono.",
          "**Insolubilidad en agua**.",
          "**Facilidad de incorporarse y mezclarse** en cualquier proporción con agua, aceites, colas, etc.",
          "**Inalterabilidad** a la acción de otros colores, esmaltes o barnices."
        ] },
        { h: "Los barnices", items: [
          "**Inalterables a los agentes atmosféricos**.",
          "**Conservan y protegen la fijeza** de los colores.",
          "**Transparencia y brillo perfectos**, de **secado rápido**."
        ] }
      ]
    },
    {
      id: "prep", titulo: "Preparación de la superficie", figs: [],
      idea: "Lo **primero** es preparar la superficie. Cada material tiene su preparación.",
      partes: [
        { tabla: { h: ["Superficie", "Preparación"], r: [
          ["**Madera**", "Con **papel de lija**: superficie **lisa, cepillada y exenta de polvo y grasa**; luego el **sellante** y después la pintura o el barniz."],
          ["**Hierro y acero**", "Eliminar **óxido, cascarillas de laminación, restos de aceite, grasa y yeso**. Se logra manualmente con **cepillo de acero**."],
          ["**Ladrillos**", "Aparecen **sales** en la superficie: remover **restregando con escobilla** plástica o de cerda **con agua**, o con **hidrolavadora**. Después **dejar secar al menos un día** o hasta que esté superficialmente seca."],
          ["**Enlucidos**", "Superficie **perfectamente seca, lisa y sin defectos**: **empastinar y fijar** toda la superficie, especialmente con pinturas **brillantes**."]
        ] } }
      ]
    },
    {
      id: "aplic", titulo: "Aplicación y medición", figs: ["d3", "d4"],
      idea: "Mezclar bien, diluir lo mínimo y **pintar en un orden**: primero arriba, al final las carpinterías.",
      partes: [
        { h: "Antes de pintar", items: [
          "**Mezclar bien** la pintura antes de usarla y **diluirla lo mínimo indispensable** para que la brocha o el rodillo se deslicen cómodamente.",
          "Usar el pincel **en el mismo solvente** con el que se diluye la pintura y **escurrirlo** antes de empezar."
        ] },
        { h: "Área de pintado", items: [
          "**Brocha**: un **cuadrado de lado ≈ 3 veces el ancho de la brocha**.",
          "**Rodillo**: área pequeña; con rodillo de **20 cm** de ancho, **no mayor a 1 m²**."
        ] },
        { h: "Orden de pintado", pasos: [
          "**Cielos rasos y cielos falsos**.",
          "**Paredes**: **esquinas y bordes con pincel**, el resto con **rodillo**.",
          "**Puertas, ventanas, marcos y muebles** (lo último)."
        ] },
        { h: "Medición y pago", items: ["Por **unidad de área**, pago por **m²** de las áreas **realmente ejecutadas**, verificadas en planos y en obra."] }
      ]
    }
  ],

  notas: [
    "En el apunte «Esquema de pintado» y «Selección delesquema» tienen errores tipográficos (palabras pegadas); el contenido es el mismo que se resume aquí.",
    "El esmalte sintético **mate** solo se describe como «**similar al anterior, menos resistente al roce y al lavado**»: no se indica una superficie propia. Para el examen, queda con eso."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Los 4 factores de un buen pintado", corto: "4 factores", vb: [0, 0, 520, 320],
      desc: "Ordena el proceso: completa cada recuadro.",
      blanks: { a: "Selección del esquema de pintado", b: "Preparación de la superficie", c: "Aplicación de la pintura", d: "Inspección, control y registro" },
      x: ["Compra del andamio", "Lavado con hidrolavadora", "Medición y pago"],
      nota: "**Esquema → preparación → aplicación → inspección, control y registro.**",
      svg: S => [
        [0, 1, 2, 3].map(i => S.c(70, 52 + i * 72, 16, "k-ac") + `<text x="70" y="${52 + i * 72}" style="fill:#fff;font-weight:700">${i + 1}</text>`).join(""),
        [0, 1, 2].map(i => S.l(70, 70 + i * 72, 70, 88 + i * 72, "ac") + S.arrow(70, 90 + i * 72, "d")).join(""),
        S.t(110, 52, "@a:l"), S.t(110, 124, "@b:l"), S.t(110, 196, "@c:l"), S.t(110, 268, "@d:l")
      ].join("")
    },
    {
      id: "d2", titulo: "Capas de pintura y la imprimación", corto: "Capas e imprimación", vb: [0, 0, 520, 320],
      desc: "Corte esquemático de una superficie pintada y funciones de la primera capa.",
      blanks: { so: "Soporte preparado", im: "Imprimación", ac: "Acabado", f1: "Mejora la adherencia", f2: "Disminuye la absorción", f3: "Inhibe la corrosión" },
      x: ["Aumenta el brillo", "Reemplaza al sellante", "Disimula el color"],
      nota: "La **imprimación** es la **primera capa**: **mejora la adherencia**, **disminuye la absorción** de la capa siguiente e **inhibe la corrosión** en aceros.",
      svg: S => [
        S.r(40, 90, 150, 100, "k-mort"),
        S.r(190, 90, 14, 100, "k-brick"), S.r(204, 90, 34, 100, "k-paint"),
        S.t(115, 140, "Soporte", "sm"),
        S.t(115, 40, "@so"), S.l(115, 52, 115, 88),
        S.t(320, 40, "@im:l"), S.l(317, 44, 200, 92),
        S.t(320, 100, "@ac:l"), S.l(317, 102, 240, 120),
        S.t(40, 222, "FUNCIONES DE LA IMPRIMACIÓN", "hd l"),
        S.t(40, 252, "@f1:l"), S.t(40, 282, "@f2:l"), S.t(300, 252, "@f3:l")
      ].join("")
    },
    {
      id: "d3", titulo: "Orden de pintado", corto: "Orden", vb: [0, 0, 520, 300],
      desc: "Completa el orden en que se pinta: ¿qué va primero, qué va último?",
      blanks: { o1: "1º", o2: "2º", o3: "3º" },
      x: ["4º"],
      nota: "**1º** cielos rasos y falsos → **2º** paredes (esquinas y bordes con pincel, resto con rodillo) → **3º** puertas, ventanas, marcos y muebles.",
      svg: S => [
        S.r(60, 40, 400, 24, "k-conc"), S.r(60, 64, 22, 196, "k-mort"), S.r(438, 64, 22, 196, "k-mort"),
        S.r(60, 260, 400, 14, "k-stone"),
        S.r(130, 150, 60, 110, "k-wood"), S.r(300, 110, 90, 70, "k-water"), S.r(298, 108, 94, 4, "k-wood"),
        S.t(40, 52, "@o1:r"), S.t(250, 52, "Cielos rasos y cielos falsos", "sm"),
        S.t(40, 150, "@o2:r"), S.t(100, 100, "Paredes", "sm l"), S.t(100, 118, "(esquinas y bordes con pincel, el resto con rodillo)", "sm l mt"),
        S.t(40, 289, "@o3:r"), S.t(250, 289, "Puertas, ventanas, marcos y muebles", "sm")
      ].join("")
    },
    {
      id: "d4", titulo: "Área de pintado: brocha y rodillo", corto: "Área de pintado", vb: [0, 0, 520, 300],
      desc: "Cuánto se pinta cada vez según la herramienta.",
      blanks: { tr: "3 veces", ro: "20 cm", ar: "1 m²" },
      x: ["2 veces", "30 cm", "5 m²"],
      nota: "**Brocha**: cuadrado de lado **3 veces** el ancho de la brocha. **Rodillo de 20 cm**: área **≤ 1 m²**.",
      svg: S => [
        S.t(120, 24, "CON BROCHA", "hd"), S.t(390, 24, "CON RODILLO", "hd"),
        S.r(60, 70, 120, 120, "k-none", 'style="stroke-dasharray:6 4"'),
        S.dh(60, 180, 58, "@tr", -2),
        S.t(120, 130, "Lado del cuadrado", "sm"),
        S.r(60, 205, 40, 14, "k-brick"), S.dh(60, 100, 235, "Ancho b", 18),
        S.r(320, 70, 140, 24, "k-steel"), S.t(390, 82, "Rodillo", "sm"),
        S.dh(320, 460, 58, "@ro", -2),
        S.r(320, 110, 140, 100, "k-none", 'style="stroke-dasharray:6 4"'),
        S.t(390, 160, "@ar"), S.t(390, 188, "máximo por tramo", "sm mt")
      ].join("")
    },
    {
      id: "d5", titulo: "Qué pintura va en cada lugar", corto: "Tipos y usos", vb: [-70, 0, 650, 320],
      desc: "Corte esquemático de una edificación: elige el producto adecuado para cada superficie.",
      blanks: { ci: "Látex cielo rasos", pi: "Látex interiores", pe: "Látex exteriores", ex: "Esmalte brillante", im: "Esmalte semimate", ba: "Barniz" },
      x: ["Esmalte mate", "Látex brillante", "Alquitrán"],
      nota: "**Látex**: interior (mate, la más usada), cielo rasos (porosa, antihongos), exterior (acrílica). **Esmalte**: brillante → carpintería **exterior**; semimate → **interior**. **Barniz**: madera y mampostería vista.",
      svg: S => [
        S.r(100, 60, 330, 30, "k-conc"), S.r(100, 90, 12, 160, "k-mort"), S.r(418, 90, 12, 160, "k-brick"),
        S.r(100, 250, 330, 12, "k-stone"),
        S.r(100, 150, 12, 100, "k-wood"), S.r(418, 160, 12, 90, "k-wood"),
        S.r(200, 90, 130, 14, "k-wood"),
        S.t(265, 36, "@ci"), S.l(265, 48, 265, 92),
        S.t(95, 112, "@pi:r"), S.l(98, 112, 108, 118),
        S.t(95, 205, "@im:r"), S.l(98, 205, 106, 200),
        S.t(440, 112, "@pe:l"), S.l(437, 112, 430, 118),
        S.t(440, 205, "@ex:l"), S.l(437, 205, 432, 205),
        S.t(265, 150, "@ba"), S.l(265, 138, 265, 107)
      ].join("")
    }
  ],

  tarjetas: [
    ["¿Qué es una pintura?", "Producto de **pigmentos** (con o sin carga y aditivos) **dispersos en un vehículo**, que forma una **película sólida** al secar; se usa para cubrir superficies."],
    ["Objetivos de pintar", "**Conservación, protección y embellecimiento**, con un acabado de fácil limpieza y mantenimiento."],
    ["¿De qué depende un buen resultado de pintado?", "**Esquema de pintado, preparación de la superficie, aplicación** e **inspección, control y registro**."],
    ["¿Qué es un esquema de pintado?", "Conjunto de pinturas **aplicadas en un orden establecido**, cada una con una función específica."],
    ["¿Qué es la imprimación y qué hace?", "Es la **primera capa**: mejora la **adherencia**, disminuye la **absorción** de la capa siguiente e **inhibe la corrosión** en aceros."],
    ["Condiciones previas a pintar", "**Andamios** adecuados en fachadas y **ventilación** natural o forzada en interiores cerrados."],
    ["Látex para interiores", "**La más utilizada.** Mate, disimula imperfecciones, **menor preparación** de la base. Revoques y yeso."],
    ["Látex para cielo rasos", "Superficie **porosa** que evita la **condensación** → desfavorece los **hongos**. Revoques finos y yesos."],
    ["Látex para exteriores", "Base de **polímeros acrílicos**: elasticidad, resistencia, adherencia, **hidrófuga**. Revoques y hormigones exteriores."],
    ["Esmalte sintético brillante", "Secado **duro y resistente**, **fácilmente lavable**. Carpinterías **exteriores** (madera, metal)."],
    ["Esmalte sintético semimate", "Características **atenuadas**; pide **buena preparación** de la base. Carpinterías **interiores**."],
    ["Esmalte sintético mate", "Similar al semimate pero **menos resistente al roce y al lavado**."],
    ["Barnices", "**Transparentes**; brillante, semimate o mate (los **brillantes** son los más resistentes). **Maderas y mampostería vista**."],
    ["Calidades de toda sustancia de pintura", "Se extiende y cubre bien, **fijeza** de tono, **insoluble en agua**, se mezcla con agua/aceites/colas, **inalterable** frente a otros colores, esmaltes o barnices."],
    ["Calidades de los barnices", "**Inalterables** a agentes atmosféricos, protegen la **fijeza** de colores, **transparencia y brillo perfectos**, **secado rápido**."],
    ["Preparar madera", "**Papel de lija** → superficie lisa, cepillada, sin polvo ni grasa → **sellante** → pintura o barniz."],
    ["Preparar hierro y acero", "Eliminar **óxido, cascarillas de laminación, aceite, grasa y yeso**, a mano con **cepillo de acero**."],
    ["Preparar ladrillos", "Quitar las **sales** con escobilla y agua o hidrolavadora y **dejar secar al menos un día**."],
    ["Preparar enlucidos", "Superficie **seca, lisa y sin defectos**; **empastinar y fijar**, sobre todo con pinturas brillantes."],
    ["Antes de aplicar", "**Mezclar bien** y **diluir lo mínimo** indispensable; pincel en el **mismo solvente** y escurrido."],
    ["Área de pintado con brocha", "Un cuadrado de lado **3 veces el ancho de la brocha**."],
    ["Área de pintado con rodillo", "Rodillo de **20 cm**: no más de **1 m²** por tramo."],
    ["Orden de pintado", "**1º** cielos rasos y falsos → **2º** paredes (bordes y esquinas con pincel, resto con rodillo) → **3º** puertas, ventanas, marcos y muebles."],
    ["Medición y pago de pinturas", "Por **m²** de áreas **realmente ejecutadas**, verificadas en planos y en obra."]
  ],

  preguntas: [
    { t: "mc", q: "Una pintura es un producto formado por pigmentos dispersos en...", o: ["Un vehículo, que se convierte en una película sólida tras el secado", "Cemento y agua", "Yeso y cal", "Arena y aceite"], a: 0 },
    { t: "fill", q: "Los principales objetivos de pintar son la [[conservación]], la [[protección]] y el embellecimiento.", x: ["dilatación", "absorción", "corrosión"] },
    { t: "order", q: "Ordena los 4 factores de un buen resultado de pintado:", s: ["Selección del esquema de pintado", "Preparación de la superficie", "Aplicación de la pintura", "Inspección, control y registro de cumplimiento"] },
    { t: "mc", q: "Se llama «esquema de pintado» al...", o: ["Conjunto de pinturas aplicadas en un orden establecido", "Plano de la fachada", "Color elegido por el cliente", "Registro de inspección"], a: 0 },
    { t: "mc", q: "La primera capa de pintura corresponde a...", o: ["La imprimación", "El acabado", "El barniz", "La masilla"], a: 0 },
    { t: "match", q: "Relaciona cada capa con su función:", p: [["Imprimación (1ª capa)", "Mejora la adherencia, disminuye la absorción e inhibe la corrosión en aceros"], ["Pintura de acabado", "Da la terminación especificada al esquema"]], x: ["Sella las juntas del ladrillo"] },
    { t: "vf", q: "Antes de aplicar las capas siguientes se debe cumplir con las indicaciones de secado.", a: true },
    { t: "mc", q: "¿Cuál es el látex más utilizado?", o: ["Látex para interiores", "Látex para exteriores", "Látex para cielo rasos", "Esmalte brillante"], a: 0, w: "Es de terminación mate, disimula mejor las imperfecciones y requiere menor preparación." },
    { t: "mc", q: "El látex para cielo rasos deja una superficie porosa para...", o: ["Evitar la condensación superficial y desfavorecer los hongos", "Aumentar el brillo", "Resistir el roce", "Proteger la madera"], a: 0 },
    { t: "mc", q: "El látex para exteriores tiene base de...", o: ["Polímeros acrílicos", "Aceites minerales", "Yeso", "Asfalto"], a: 0, w: "Le dan elasticidad, resistencia, gran adherencia y condiciones hidrófugas." },
    { t: "mc", q: "El esmalte sintético brillante se utiliza normalmente en...", o: ["Carpinterías exteriores", "Cielos rasos", "Paredes interiores de yeso", "Mampostería vista"], a: 0 },
    { t: "mc", q: "El esmalte sintético semimate se aplica en...", o: ["Carpinterías interiores", "Fachadas de hormigón", "Cielos rasos", "Sobrecimientos"], a: 0, w: "Requiere buena preparación de la base: si no, delata las imperfecciones." },
    { t: "vf", q: "El esmalte sintético mate es más resistente al roce y al lavado que el brillante.", a: false, w: "Al revés: es **menos resistente al roce y al lavado**." },
    { t: "mc", q: "Los barnices son...", o: ["Transparentes; los brillantes son los más resistentes", "Opacos y mates siempre", "Solo para metal", "Pinturas bituminosas"], a: 0 },
    { t: "mc", q: "Los barnices se aplican en...", o: ["Maderas y mampostería vista", "Cielos rasos de yeso", "Acero estructural", "Hormigón al exterior"], a: 0 },
    { t: "match", q: "Relaciona cada pintura con su aplicación típica:", p: [
      ["Látex para interiores", "Revoques y yeso"],
      ["Látex para exteriores", "Revoques y hormigones al exterior"],
      ["Esmalte sintético brillante", "Carpinterías exteriores"],
      ["Esmalte sintético semimate", "Carpinterías interiores"],
      ["Barnices", "Maderas y mampostería vista"]
    ], x: ["Solo cielos rasos"] },
    { t: "mc", q: "¿Cuál NO es una condición exigida a las sustancias de pintura?", o: ["Solubilidad en agua", "Facilidad de extenderse y cubrir", "Fijeza en la tinta o tono", "Inalterabilidad a la acción de otros colores"], a: 0, w: "Debe ser **insoluble en agua**." },
    { t: "fill", q: "Los barnices serán inalterables a los agentes [[atmosféricos]] y de secado [[rápido]].", x: ["químicos", "lento", "biológicos"] },
    { t: "mc", q: "Para preparar la madera antes de pintar se usa...", o: ["Papel de lija, hasta lograr una superficie lisa, cepillada y sin polvo ni grasa", "Cepillo de acero", "Hidrolavadora", "Empastinado"], a: 0 },
    { t: "mc", q: "En la madera, luego de lijar, se coloca...", o: ["El sellante y luego la pintura o el barniz", "Alquitrán", "Cemento", "Yeso"], a: 0 },
    { t: "mc", q: "La preparación del hierro y acero se logra manualmente con...", o: ["Un cepillo de acero", "Papel de lija fino", "Escobilla de cerda", "Una esponja"], a: 0, w: "Elimina óxido, cascarillas de laminación, aceite, grasa y yeso." },
    { t: "mc", q: "Sobre la albañilería de ladrillo aparecen sales que se remueven...", o: ["Restregando con escobilla y agua o con hidrolavadora", "Con cepillo de acero", "Con lija", "Cubriéndolas con látex"], a: 0 },
    { t: "fill", q: "Luego de limpiar el ladrillo con agua, se deja secar por lo menos [[un día]] o hasta que esté superficialmente seca.", x: ["una hora", "una semana", "un mes"] },
    { t: "mc", q: "En los enlucidos, antes de pintar se debe...", o: ["Empastinar y fijar toda la superficie", "Mojarla abundantemente", "Aplicar alquitrán", "Dejarla rugosa"], a: 0, w: "Sobre todo cuando se utilizan pinturas brillantes." },
    { t: "mc", q: "La pintura se debe diluir...", o: ["Lo mínimo indispensable para que brocha o rodillo se deslicen cómodamente", "Al máximo para que rinda", "Nunca", "Con aceite sucio"], a: 0 },
    { t: "mc", q: "Con brocha, el área de pintado sugerida es un cuadrado de lado...", o: ["Aproximadamente 3 veces el ancho de la brocha", "Igual al ancho de la brocha", "1 m", "10 veces el ancho de la brocha"], a: 0 },
    { t: "fill", q: "Con rodillo de [[20]] cm de ancho, el área de pintado no debe ser mayor de [[1]] m².", x: ["10", "5", "30"] },
    { t: "order", q: "Ordena el pintado de un ambiente:", s: ["Cielos rasos y cielos falsos", "Paredes (esquinas y bordes con pincel, el resto con rodillo)", "Puertas, ventanas, marcos y muebles"] },
    { t: "vf", q: "En las paredes, las esquinas y bordes se pintan con rodillo y el resto con pincel.", a: false, w: "Al revés: **esquinas y bordes con pincel**; el resto con **rodillo**." },
    { t: "vf", q: "El pincel debe usarse en el mismo solvente con el que se diluye la pintura y escurrirse antes de empezar.", a: true },
    { t: "mc", q: "La medición de pinturas se hace en unidad de área y se paga por...", o: ["m² de áreas realmente ejecutadas, verificadas en planos y en obra", "ml", "litro de pintura comprado", "pieza"], a: 0 },
    { t: "mc", q: "En interiores cerrados, para pintar se debe contar con...", o: ["Ventilación natural o forzada", "Humedad alta", "Andamios", "Rodillos de 1 m"], a: 0 },
    { t: "mc", q: "La inspección, control y registro del pintado consiste en revisar...", o: ["Las condiciones, los productos y herramientas y el resultado de cada etapa", "Solo el color final", "Solo el precio", "Solo la marca de la pintura"], a: 0 }
  ]
};
