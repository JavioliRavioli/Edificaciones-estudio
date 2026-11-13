(window.TEMAS = window.TEMAS || {})[12] = {
  id: 12,
  corto: "Especiales de edificios",
  titulo: "Especiales de edificios: shafts, ascensores y reserva contra incendios",
  chips: ["3 especiales", "Shafts: muros de corte de H°A de 20 cm", "Incendios: prevención · detección · extinción"],
  cifras: [
    ["20 cm", "espesor generalmente de los muros del shaft"],
    ["0.5 × 0.5 m", "sección mínima de un shaft"],
    ["3 shafts", "eléctrico · de basura · sanitario"],
    ["1 m/seg", "velocidad de régimen del ascensor"],
    ["6 partes", "caja · guías · cabina · torno · órganos de seguridad · aparatos de maniobra"],
    ["3 etapas", "protección contra incendios: prevención · detección · extinción"],
    ["2 salidas", "del tanque: abastecimiento normal y reserva contra incendios"]
  ],

  secciones: [
    {
      id: "shafts", titulo: "Shafts", figs: ["d1"],
      idea: "**Shaft**: compartimento de **sección constante**, junto a la caja del ascensor, que recorre **toda la altura** del edificio alojando instalaciones.",
      partes: [
        { h: "Qué son", items: [
          "Compartimentos de **sección constante** ubicados principalmente **a los lados de la caja del ascensor**, que recorren toda la **extensión vertical** del edificio.",
          "Alojan **instalaciones eléctricas**, **instalaciones sanitarias** o sirven de **colectores de basura**: la basura de cada piso va a un solo punto de recolección en el **sótano**."
        ] },
        { h: "Construcción", items: [
          "**Muros de corte de hormigón armado** que se levantan **desde el sótano hasta el último piso** sin variar su sección.",
          "Espesor de los muros: generalmente **20 cm**.",
          "**Sección mínima: 0.5 m × 0.5 m**, para facilitar el acceso del personal en reparación o mantenimiento."
        ] },
        { h: "Tipos de shaft", tabla: { h: ["Shaft", "Función"], r: [
          ["**Eléctrico** (1)", "Se realizan **todas las conexiones e instalaciones eléctricas** del edificio, para la posterior distribución a los departamentos de cada piso."],
          ["**De basura** (2)", "Por él se **evacúa la basura**, dirigida hasta los **contenedores del sótano**."],
          ["**Sanitario** (3)", "Se realizan **todas las conexiones e instalaciones sanitarias** (**afluentes y efluentes**) para distribuir a los departamentos de cada piso."]
        ] } },
        { nota: "Los shafts **no necesitan ser revocados** en su interior.", notaT: "Nota" },
        { nota: "**No colocar shafts al lado de columnas**: las columnas **cambian de sección** a lo largo de su extensión.", notaT: "Recomendación" },
        { nota: "**No combinar el shaft eléctrico con el sanitario**: podrían producirse **cortes eléctricos** en las instalaciones.", notaT: "Recomendación" }
      ]
    },
    {
      id: "ascensores", titulo: "Ascensores", figs: ["d2"],
      idea: "Transportan personas en una **cabina** que se desplaza entre **guías**. De todas sus partes, solo la **caja del ascensor** es de «Construcción de Edificios».",
      partes: [
        { h: "Funcionamiento", items: [
          "Sirven para **transportar personas** en una cabina que se desplaza entre **guías verticales o levemente inclinadas**.",
          "En los sistemas modernos la cabina va **suspendida de cables** que se enrollan en un **cabestrante (grúa)** accionado por un **motor eléctrico**."
        ] },
        { h: "Partes principales", tabla: { h: ["Parte", "Descripción"], r: [
          ["**Caja del ascensor**", "**Recinto** en que se desplazan la **cabina y su contrapeso**; generalmente **cerrado en todo su recorrido por muros de hormigón armado**."],
          ["**Guías**", "**Barras o perfiles de acero** que aseguran el **desplazamiento vertical** de la cabina y el contrapeso."],
          ["**Cabina**", "El **vehículo** que lleva a las personas: **bastidor metálico** con las **correderas de guía** y los **dispositivos de seguridad**."],
          ["**Torno**", "**Mecanismo de tracción** de los cables: **tambor con acanaladuras o estrías** acoplado a un **motor eléctrico** con **reductor de velocidad** y **frenos electromagnéticos** (parada precisa)."],
          ["**Órganos de seguridad**", "**Bloqueo automático de las puertas**, **paracaídas** e **interruptores de fin de carrera** que limitan el recorrido; además, un dispositivo de **parada normal de fin de carrera**."],
          ["**Aparatos de maniobra**", "Permiten el desplazamiento **ascendente o descendente**, la **puesta en marcha del motor**, regular la **velocidad de régimen (1 m/seg)** y la **parada** de la cabina."]
        ] } },
        { nota: "De todas las partes, **solo la caja del ascensor** corresponde a «**Construcción de Edificios**»: se construye con **muros de corte de H°A**, con la metodología del tema **Hormigón Armado**.", notaT: "Clave para el examen" }
      ]
    },
    {
      id: "incendios", titulo: "Reserva contra incendios", figs: ["d3", "d4"],
      idea: "La protección contra incendios en edificios tiene **3 etapas**: **prevención general y de diseño**, **detección** y **extinción**.",
      partes: [
        { h: "Causas de incendio", tabla: { h: ["Tipo", "Ejemplos"], r: [
          ["**Naturales**", "**Efecto de lupa** (vidrios rotos), **terremotos**, **incendios forestales**, **rayos**."],
          ["**Humanas**", "**Imprudencias**, **ignorancia** de los peligros, **trabajos con calor** (soldaduras), **intencionales**, **malos diseños** de instalaciones a gas o eléctricas, **mal funcionamiento** de artefactos a gas o eléctricos."]
        ] } },
        { h: "Las 3 etapas", pasos: [
          "**Prevención general y de diseño**.",
          "**Detección**.",
          "**Extinción**."
        ] },
        { h: "Prevención general", items: [
          "Objetivo: **evitar los incendios**, **limitar su propagación** y **prever los medios de escape**.",
          "Comprende las condiciones de **construcción, instalación y equipamiento** que se deben observar en ambientes y edificios."
        ] },
        { h: "Prevención de diseño: objetivos", items: [
          "**Dificultar la gestión** de los incendios.",
          "**Evitar la propagación del fuego** y dificultar la de los **gases**.",
          "Permitir la **permanencia de los ocupantes hasta su evacuación**.",
          "**Facilitar el acceso** y las tareas de extinción del **personal de bomberos**.",
          "**Proveer las instalaciones de extinción**."
        ] },
        { h: "Detección", items: [
          "Los sistemas de aviso **reconocen un incendio, en lo posible en la fase de origen**, y **avisan automáticamente al personal auxiliar**."
        ] },
        { h: "Extinción", items: [
          "Consiste en **eliminar lo antes posible el fuego**, con un **sistema de hidrantes**: **fuente de abastecimiento de agua** + **red de tuberías** de agua de alimentación + los **hidrantes** necesarios."
        ] },
        { h: "Reserva en el tanque", items: [
          "En el diseño del **tanque de agua potable** se considera un **volumen adicional de reserva** para incendio: aminora la propagación **mientras llega auxilio** y permite **salvar vidas**.",
          "Del tanque salen **dos salidas**: una para el **abastecimiento normal** y otra para la **reserva contra incendios**.",
          "La de reserva baja **hasta la planta baja**, con **salidas en cada piso** para los **hidrantes**, que se **habilitan solo en caso de incendio**: se introduce la **manguera** en el hidrante **forzando la apertura de la válvula**."
        ] }
      ]
    }
  ],

  notas: [
    "El apunte numera los shafts **(1) eléctrico, (2) basura, (3) sanitario** según una figura de distribución que no se ve en el texto. El esquema de este sitio es **referencial**; lo escrito en el apunte es que **no se combine eléctrico con sanitario**.",
    "No se indica la **altura** del tanque de reserva ni el **volumen** adicional para incendio: no hay cifra en el apunte."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Shafts y caja del ascensor (planta)", corto: "Shafts", vb: [0, 0, 560, 320],
      desc: "Planta esquemática (referencial): caja del ascensor y los tres shafts.",
      blanks: { ca: "Caja del ascensor", el: "Eléctrico", ba: "Basura", sa: "Sanitario", mi: "0.5 m × 0.5 m", es: "20 cm" },
      x: ["Hidráulico", "1.0 m × 1.0 m", "10 cm", "Gas"],
      nota: "Shafts: muros de corte de H°A de **20 cm**, sección mínima **0.5 × 0.5 m**, del sótano al último piso. **No combinar eléctrico con sanitario.** Sin revoque interior.",
      svg: S => [
        S.r(30, 50, 170, 170, "k-conc"), S.r(40, 60, 150, 150, "k-bg"), S.t(115, 135, "@ca"),
        S.r(230, 50, 90, 90, "k-conc"), S.r(240, 60, 70, 70, "k-bg"),
        S.r(330, 50, 90, 90, "k-conc"), S.r(340, 60, 70, 70, "k-bg"),
        S.r(430, 50, 90, 90, "k-conc"), S.r(440, 60, 70, 70, "k-bg"),
        S.t(275, 95, "@el"), S.t(375, 95, "@ba"), S.t(475, 95, "@sa"),
        S.t(275, 38, "1", "hd"), S.t(375, 38, "2", "hd"), S.t(475, 38, "3", "hd"),
        S.dh(230, 320, 175, "@mi", 22),
        S.t(330, 245, "Espesor del muro:", "sm l"), S.t(445, 245, "@es:l"), S.l(440, 225, 420, 140, "da"),
        S.t(30, 300, "Esquema referencial, sin escala", "sm l mt")
      ].join("")
    },
    {
      id: "d2", titulo: "Partes de un ascensor", corto: "Partes del ascensor", vb: [-60, 0, 640, 330],
      desc: "Corte esquemático de la caja del ascensor.",
      blanks: { ca: "Caja del ascensor", co: "Contrapeso", to: "Torno", gu: "Guía", cb: "Cabina", cl: "Cables" },
      x: ["Paracaídas", "Hidrante", "Shaft"],
      nota: "Caja (muros de H°A) · guías de acero · cabina (bastidor metálico) · torno (tambor + motor + reductor + frenos) · cables · contrapeso.",
      svg: S => [
        S.r(150, 40, 180, 250, "k-none", 'style="stroke-width:4"'),
        S.l(185, 40, 185, 290, "th"), S.l(265, 40, 265, 290, "th"),
        S.r(190, 170, 70, 70, "k-steel"), S.t(225, 205, "Pasajeros", "sm"),
        S.r(285, 70, 30, 70, "k-conc"),
        S.r(205, 48, 36, 24, "k-black"), S.c(225, 60, 12, "k-stone"),
        S.l(225, 72, 225, 170), S.l(237, 60, 300, 70), S.l(300, 70, 300, 70),
        S.r(0, 290, 480, 20, "k-soil"),
        S.t(350, 55, "@ca:l"), S.l(347, 58, 332, 80),
        S.t(350, 110, "@co:l"), S.l(347, 110, 317, 108),
        S.t(135, 60, "@to:r"), S.l(138, 60, 192, 60),
        S.t(135, 115, "@cl:r"), S.l(138, 115, 223, 115),
        S.t(135, 170, "@gu:r"), S.l(138, 170, 184, 170),
        S.t(135, 225, "@cb:r"), S.l(138, 225, 188, 225)
      ].join("")
    },
    {
      id: "d3", titulo: "Reserva contra incendios en el edificio", corto: "Reserva e hidrantes", vb: [-90, 0, 650, 330],
      desc: "Esquema del tanque con sus dos salidas y los hidrantes en cada piso.",
      blanks: { ta: "Tanque de agua", re: "Reserva contra incendio", no: "Abastecimiento normal", hi: "Hidrante", pb: "Planta baja" },
      x: ["Bomba centrífuga", "Detector de humo", "Sótano"],
      nota: "Tanque con **volumen adicional de reserva**; **dos salidas**: normal y reserva. La de reserva llega a **planta baja** con **salidas en cada piso** para hidrantes (solo se habilitan en caso de incendio).",
      svg: S => [
        S.r(150, 90, 180, 210, "k-none", 'style="stroke-width:3"'),
        S.l(150, 150, 330, 150), S.l(150, 210, 330, 210), S.l(150, 260, 330, 260),
        S.r(190, 30, 100, 60, "k-water"), S.r(190, 70, 100, 20, "k-ac", 'style="opacity:.6"'),
        S.l(190, 82, 170, 82, "th ac"), S.l(170, 82, 170, 300, "th ac"),
        S.l(290, 45, 312, 45, "th bl"), S.l(312, 45, 312, 300, "th bl"),
        [130, 190, 235, 285].map(y => S.r(163, y, 14, 14, "k-ac")).join(""),
        S.t(375, 45, "@ta:l"), S.l(372, 48, 292, 55),
        S.t(375, 160, "@no:l"), S.l(372, 160, 314, 160),
        S.t(120, 70, "@re:r"), S.l(123, 72, 168, 80),
        S.t(120, 190, "@hi:r"), S.l(123, 190, 161, 197),
        S.t(240, 318, "@pb")
      ].join("")
    },
    {
      id: "d4", titulo: "Las 3 etapas de protección contra incendios", corto: "3 etapas", vb: [0, 0, 520, 280],
      desc: "Completa el nombre de cada etapa y su objetivo.",
      blanks: { a: "Prevención general y de diseño", b: "Detección", c: "Extinción", oa: "Evitar incendios y limitar su propagación", ob: "Reconocer el incendio en su origen y avisar", oc: "Eliminar el fuego con hidrantes" },
      x: ["Almacenar combustible", "Cerrar los shafts", "Ventilar el sótano"],
      nota: "**Prevención** (evitar, limitar propagación, medios de escape) → **detección** (aviso automático) → **extinción** (sistema de hidrantes).",
      svg: S => [
        [0, 1, 2].map(i => S.c(46, 50 + i * 82, 16, "k-ac") + `<text x="46" y="${50 + i * 82}" style="fill:#fff;font-weight:700">${i + 1}</text>`).join(""),
        [0, 1].map(i => S.l(46, 68 + i * 82, 46, 98 + i * 82, "ac") + S.arrow(46, 100 + i * 82, "d")).join(""),
        S.t(76, 40, "@a:l"), S.t(76, 66, "@oa:l"),
        S.t(76, 122, "@b:l"), S.t(76, 148, "@ob:l"),
        S.t(76, 204, "@c:l"), S.t(76, 230, "@oc:l")
      ].join("")
    }
  ],

  tarjetas: [
    ["¿Qué son los shafts?", "Compartimentos de **sección constante**, a los lados de la caja del ascensor, que recorren **toda la altura** del edificio y alojan instalaciones eléctricas, sanitarias o colectores de basura."],
    ["¿Cómo se construyen los shafts?", "Como **muros de corte de hormigón armado** desde el **sótano hasta el último piso**, sin variar su sección."],
    ["Espesor de los muros del shaft", "Generalmente **20 cm**."],
    ["Sección mínima de un shaft", "**0.5 m × 0.5 m**, para facilitar el acceso del personal en reparación y mantenimiento."],
    ["¿Cuántos tipos de shaft hay?", "Tres: **eléctrico, de basura y sanitario**."],
    ["Shaft eléctrico", "Allí se hacen todas las **conexiones e instalaciones eléctricas** para distribuir a los departamentos de cada piso."],
    ["Shaft de basura", "Evacúa la basura de cada piso hasta los **contenedores del sótano**."],
    ["Shaft sanitario", "Allí se hacen las **conexiones e instalaciones sanitarias** (**afluentes y efluentes**) para distribuir a cada piso."],
    ["¿Hay que revocar el interior de los shafts?", "**No**: los shafts no necesitan ser revocados en su interior."],
    ["¿Por qué no poner shafts al lado de columnas?", "Porque las **columnas cambian de sección** a lo largo de su extensión."],
    ["¿Por qué no combinar shaft eléctrico con sanitario?", "Porque podrían producirse **cortes eléctricos** en las instalaciones."],
    ["¿Para qué sirve un ascensor?", "Para **transportar personas** en una cabina que se desplaza entre **guías verticales o levemente inclinadas**."],
    ["¿Cómo va suspendida la cabina?", "De **cables** que se enrollan en un **cabestrante (grúa)** accionado por un **motor eléctrico**."],
    ["Caja del ascensor", "**Recinto** en el que se desplazan **cabina y contrapeso**; cerrado por **muros de H°A** en todo su recorrido."],
    ["Guías", "**Barras o perfiles de acero** que aseguran el desplazamiento vertical de cabina y contrapeso."],
    ["Cabina", "El **vehículo** que lleva las personas: **bastidor metálico** con correderas de guía y dispositivos de seguridad."],
    ["Torno", "**Mecanismo de tracción** de los cables: **tambor con acanaladuras** + motor eléctrico con **reductor de velocidad** y **frenos electromagnéticos**."],
    ["Órganos de seguridad", "**Bloqueo automático de puertas, paracaídas e interruptores de fin de carrera**, más un dispositivo de parada normal de fin de carrera."],
    ["Aparatos de maniobra", "Mueven la cabina **arriba/abajo**, ponen en marcha el motor, regulan la **velocidad de régimen (1 m/seg)** y la **parada**."],
    ["¿Qué parte del ascensor es de «Construcción de Edificios»?", "**Solo la caja del ascensor** (muros de corte de H°A)."],
    ["Causas naturales de incendio", "**Efecto de lupa** (vidrios rotos), terremotos, incendios forestales, rayos."],
    ["Causas humanas de incendio", "Imprudencias, ignorancia, **trabajos con calor (soldaduras)**, intencionales, **malos diseños** de instalaciones a gas/eléctricas y mal funcionamiento de artefactos."],
    ["Etapas de la protección contra incendios", "**Prevención general y de diseño → detección → extinción.**"],
    ["Objetivo de la prevención general", "**Evitar incendios, limitar su propagación y prever los medios de escape.**"],
    ["Objetivos de la prevención de diseño", "Dificultar la gestión del incendio · evitar propagación del fuego y gases · permitir permanencia hasta la evacuación · facilitar a los bomberos · proveer instalaciones de extinción."],
    ["Detección", "Reconocer el incendio, en lo posible **en la fase de origen**, y **avisar automáticamente** al personal auxiliar."],
    ["Extinción: sistema de hidrantes", "**Fuente de abastecimiento de agua + red de tuberías + hidrantes.**"],
    ["Reserva en el tanque", "Un **volumen adicional** en el tanque de agua potable, para aminorar la propagación del fuego **mientras llega auxilio**."],
    ["Salidas del tanque", "**Dos**: una de **abastecimiento normal** y otra de **reserva contra incendios**."],
    ["¿Cómo funcionan los hidrantes?", "Hay salidas **en cada piso**, habilitadas **solo en caso de incendio**: se introduce la **manguera** y se **fuerza la apertura de la válvula**."]
  ],

  preguntas: [
    { t: "mc", q: "Los shafts son compartimentos de...", o: ["Sección constante, ubicados principalmente a los lados de la caja del ascensor", "Sección variable, junto a las columnas", "Altura parcial, solo en el sótano", "Planta circular en azoteas"], a: 0 },
    { t: "mc", q: "Los shafts se construyen como...", o: ["Muros de corte de hormigón armado desde el sótano hasta el último piso", "Muros de ladrillo de 10 cm", "Tabiques de madera", "Columnas de acero"], a: 0 },
    { t: "fill", q: "El espesor de los muros de un shaft es generalmente de [[20]] cm y su sección mínima es de [[0.5]] m × [[0.5]] m.", x: ["10", "1.0", "30", "2"] },
    { t: "mc", q: "La sección mínima del shaft permite...", o: ["Facilitar el acceso del personal en caso de reparación o mantenimiento", "Instalar ascensores", "Colocar hidrantes", "Ahorrar hormigón"], a: 0 },
    { t: "match", q: "Relaciona cada shaft con su función:", p: [
      ["Shaft eléctrico", "Conexiones e instalaciones eléctricas del edificio"],
      ["Shaft de basura", "Evacúa la basura hasta los contenedores del sótano"],
      ["Shaft sanitario", "Conexiones e instalaciones sanitarias (afluentes y efluentes)"]
    ], x: ["Aloja los cables del ascensor"] },
    { t: "vf", q: "Los shafts necesitan ser revocados en su interior.", a: false, w: "**No necesitan** ser revocados en su interior." },
    { t: "mc", q: "No se recomienda colocar shafts al lado de columnas porque...", o: ["Las columnas cambian de sección a lo largo de su extensión", "Las columnas son de acero", "Los shafts pesan demasiado", "Se prohíbe por norma de bomberos"], a: 0 },
    { t: "mc", q: "No se debe combinar el shaft eléctrico con el sanitario porque...", o: ["Podrían producirse cortes eléctricos en las instalaciones", "Se oxidan las tuberías", "El shaft es muy pequeño", "Se necesita revoque"], a: 0 },
    { t: "mc", q: "La basura de cada piso, mediante el shaft de basura, se deposita en...", o: ["Un solo punto de recolección ubicado en el sótano", "La azotea", "Cada departamento", "La planta baja, junto al ascensor"], a: 0 },
    { t: "mc", q: "En los sistemas modernos, la cabina del ascensor va suspendida de...", o: ["Cables que se enrollan en un cabestrante accionado por un motor eléctrico", "Cadenas hidráulicas", "Vigas de madera", "Un pistón neumático"], a: 0 },
    { t: "mc", q: "Las guías de un ascensor consisten en...", o: ["Barras o perfiles de acero", "Cables de nylon", "Muros de hormigón", "Tubos de PVC"], a: 0 },
    { t: "mc", q: "La cabina del ascensor está constituida por...", o: ["Un bastidor metálico con correderas de guía y dispositivos de seguridad", "Una caja de hormigón", "Un perfil de madera", "Una cabina de vidrio sin estructura"], a: 0 },
    { t: "mc", q: "El torno del ascensor es...", o: ["El mecanismo de tracción de los cables: tambor con acanaladuras acoplado a un motor con reductor y frenos electromagnéticos", "Un sistema de puertas", "La caja de hormigón", "Un freno de emergencia"], a: 0 },
    { t: "mc", q: "Son órganos de seguridad del ascensor...", o: ["El bloqueo automático de puertas, los paracaídas y los interruptores de fin de carrera", "El torno y el reductor", "Las guías de acero", "El contrapeso"], a: 0 },
    { t: "fill", q: "Los aparatos de maniobra regulan la velocidad de régimen, que es de [[1]] m/seg.", x: ["2", "0.5", "5"] },
    { t: "mc", q: "De todas las partes del ascensor, ¿cuál se refiere a «Construcción de Edificios»?", o: ["La caja del ascensor", "El torno", "La cabina", "Los aparatos de maniobra"], a: 0, w: "Se construye con muros de corte de hormigón armado (metodología del tema Hormigón Armado)." },
    { t: "mc", q: "La caja del ascensor es el recinto en el que se desplazan...", o: ["La cabina y su contrapeso", "Solo la cabina", "Las personas y el torno", "Los cables y el motor"], a: 0 },
    { t: "match", q: "Relaciona cada parte del ascensor con su descripción:", p: [
      ["Caja", "Recinto de muros de H°A donde se mueven cabina y contrapeso"],
      ["Guías", "Barras o perfiles de acero que aseguran el desplazamiento vertical"],
      ["Cabina", "Vehículo con bastidor metálico que lleva a las personas"],
      ["Torno", "Mecanismo de tracción de los cables"],
      ["Aparatos de maniobra", "Permiten ascender, descender, arrancar el motor y parar"]
    ], x: ["Dispositivo que apaga incendios"] },
    { t: "mc", q: "El efecto de lupa por vidrios rotos es una causa de incendio...", o: ["Natural", "Humana", "Eléctrica", "Intencional"], a: 0 },
    { t: "mc", q: "Los trabajos mediante calor (soldaduras) son una causa de incendio...", o: ["Humana", "Natural", "Forestal", "Sísmica"], a: 0 },
    { t: "match", q: "Clasifica cada causa de incendio:", p: [
      ["Rayos", "Natural"], ["Terremotos", "Natural "], ["Imprudencias", "Humana"], ["Malos diseños de instalaciones a gas", "Humana "]
    ], x: ["Eléctrica"] },
    { t: "order", q: "Ordena las etapas de la protección contra incendios:", s: ["Prevención general y de diseño", "Detección", "Extinción"] },
    { t: "mc", q: "El objetivo de la prevención general es...", o: ["Evitar los incendios, limitar su propagación y prever los medios de escape", "Eliminar el fuego con agua", "Avisar a los bomberos", "Reparar daños"], a: 0 },
    { t: "mc", q: "¿Cuál NO es un objetivo de la prevención de diseño?", o: ["Reducir el espesor de los muros del shaft", "Evitar la propagación del fuego y dificultar la de los gases", "Permitir la permanencia de los ocupantes hasta su evacuación", "Facilitar el acceso y las tareas del personal de bomberos"], a: 0 },
    { t: "mc", q: "La función de los sistemas de detección es...", o: ["Reconocer un incendio en lo posible en su fase de origen y avisar automáticamente al personal auxiliar", "Apagar el fuego", "Cerrar las puertas", "Evacuar los gases"], a: 0 },
    { t: "mc", q: "El sistema de extinción de hidrantes está compuesto por...", o: ["Una fuente de abastecimiento de agua, una red de tuberías y los hidrantes necesarios", "Solo extintores", "Un tanque y una bomba", "Mangueras y válvulas de gas"], a: 0 },
    { t: "mc", q: "En el diseño del tanque de agua potable de un edificio se toma en cuenta un volumen adicional para...", o: ["Reserva en caso de incendio, mientras llega auxilio", "Evaporación", "Riego de jardines", "Lavado de ascensores"], a: 0 },
    { t: "mc", q: "Del tanque de agua salen...", o: ["Dos salidas: abastecimiento normal y reserva contra incendios", "Una sola salida", "Tres: agua, gas y electricidad", "Cuatro, una por piso"], a: 0 },
    { t: "mc", q: "La tubería de la reserva contra incendios recorre...", o: ["Desde el tanque hasta la planta baja, con salidas en cada piso para los hidrantes", "Solo el sótano", "Únicamente la azotea", "Alrededor del shaft eléctrico"], a: 0 },
    { t: "vf", q: "Los hidrantes están habilitados permanentemente para el uso diario.", a: false, w: "Se habilitan **solo en caso de incendio**, introduciendo la manguera dentro del hidrante y **forzando la apertura de la válvula**." }
  ]
};
