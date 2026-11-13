(window.TEMAS = window.TEMAS || {})[6] = {
  id: 6,
  corto: "Hormigón armado",
  titulo: "Obra gruesa · Unidad 4: Hormigón armado en edificaciones",
  chips: ["Zapatas · columnas · vigas · losas · escaleras · muros", "Curado 7 días (≥ 70 %)", "Desencofrado: 2 · 7 · 28 días"],
  cifras: [
    ["2.5 m", "altura máxima de vertido del hormigón"],
    ["20 – 30 cm", "espesor de cada tongada o capa de colocación"],
    ["1 m", "máximo que se hace avanzar el hormigón dentro del encofrado"],
    ["7 días · 70 %", "curado: mínimo 7 días y 70 % de la resistencia de cálculo"],
    ["≥ 4200 kg/cm²", "límite de fluencia del acero"],
    ["1 : 3", "mortero de galletas y del dado de la zapata"],
    ["5 × 5 cm", "tamaño de las galletas (listones cada 5 cm)"],
    ["2.0 – 5.0 cm", "recubrimiento adoptado en las galletas"],
    ["1 : 8", "hormigón pobre bajo la zapata aislada"],
    ["8 h · 5 cm", "dado de zapata: se vacía a las 8 horas, altura 5 cm"],
    ["50 cm", "separación de crucetas en columnas"],
    ["2.5 m", "columna más alta: vaciado por una ventana"],
    ["80 cm", "separación de puntales (vigas) y soleras (losas)"],
    ["15 cm", "espesor mínimo del fondo de una escalera"],
    ["2 d · 7 d · 28 d", "desencofrado: laterales de vigas · columnas · el resto"],
    ["m³ / m²", "pago: todo en m³ salvo la losa nervada (m²)"]
  ],

  secciones: [
    {
      id: "gen", titulo: "Generalidades", figs: ["d1"],
      idea: "**Hormigón armado = hormigón + armaduras de fierro.** El hormigón resiste la **compresión**; el acero resiste la **tracción**.",
      partes: [
        { h: "Descripción", items: [
          "Una estructura correctamente diseñada y construida es un sólido muy resistente. Ambos materiales se complementan: trabajando juntos absorben y disipan esfuerzos mejor que por separado.",
          "El **concreto** es una mezcla de **cemento, áridos y agua**: resiste las tensiones de **compresión**; el **acero**, las de **tracción**.",
          "Se adapta a cualquier forma según el **molde o encofrado** que lo contiene."
        ] },
        { h: "Etapas de una operación constructiva con hormigón", pasos: [
          "Características de las **materias primas** para fabricar el hormigón.",
          "**Dosificación y preparación**.",
          "**Transporte y colocación**.",
          "**Compactación**.",
          "**Curado y protección**.",
          "**Control**."
        ] },
        { nota: "Hay que cuidar **cada etapa**: si una falla, el resultado final puede cambiar." },
        { h: "Elementos de hormigón armado en edificios", items: ["**Zapatas, columnas, vigas, losas, escaleras, tanques de agua y muros.**"] },
        { h: "Orden cronológico de ejecución en obra", pasos: [
          "Ejecución de los **encofrados**.",
          "**Doblado y montaje** de las armaduras.",
          "**Fabricación y colocado** del hormigón.",
          "**Curado**.",
          "**Desencofrado**."
        ] }
      ]
    },
    {
      id: "hormigon", titulo: "Vertido, compactación y curado", figs: ["d8"],
      idea: "Especificaciones técnicas del hormigón fresco: cómo se **vierte**, se **compacta** y se **cura**.",
      partes: [
        { h: "Vertido y colocación", items: [
          "Sin que se produzca la **disgregación** de la mezcla.",
          "Vertido **vertical**, **no arrojado desde más de 2.5 m**. Se dirige con **canaletas** u otros dispositivos que impidan el **choque libre** contra encofrado o armaduras.",
          "Colocación por **capas o tongadas horizontales de 20 a 30 cm** de espesor.",
          "**No** arrojar con pala a gran distancia, **no** distribuir con rastrillo, **no** hacerlo avanzar **más de 1 m** dentro del encofrado.",
          "Superficies inclinadas: si espesor y pendiente son grandes, usar **encofrado superior**; si no, hormigonar **de abajo hacia arriba**, por roscas."
        ] },
        { h: "Compactación", tabla: { h: ["Método", "Cómo", "¿Recomendable?"], r: [
          ["**Picado**", "Barra metálica introducida repetidas veces, atravesando la capa e ingresando a la inferior", "**No**"],
          ["**Apisonado**", "Golpeteo con un pisón adecuado", "**No**"],
          ["**Vibrado mecánico**", "Para hormigones resistentes, apropiado para masas de consistencia seca", "**Sí (recomendado)**"]
        ] } },
        { items: ["El vibrado mecánico evita las **cangrejeras**."] },
        { h: "Curado", items: [
          "Proteger el hormigón de **inclemencias** y especialmente del **desecamiento prematuro** (soleamiento, viento).",
          "Durante el fraguado y primer endurecimiento se necesita **hidratación** de toda la masa y evitar **retracción** prematura.",
          "Debe prolongarse **alrededor de 7 días**, hasta alcanzar como mínimo el **70 %** de la resistencia de cálculo."
        ] }
      ]
    },
    {
      id: "enc", titulo: "Encofrados, armaduras y galletas", figs: ["d2"],
      idea: "El **encofrado** contiene y soporta el hormigón fresco hasta su endurecimiento; las **galletas** mantienen el recubrimiento.",
      partes: [
        { h: "Encofrados (especificaciones)", items: [
          "Contener y soportar el hormigón fresco **sin asientos ni deformaciones**, dándole la forma deseada.",
          "Los de **madera**: **rígidos, resistentes y limpios**.",
          "Pintar la superficie interior con **aceite sucio** antes de colocar el hormigón (impermeabiliza la madera y evita que se adhiera).",
          "Colocar **chanfles** en las esquinas para evitar **desmochaduras o agrietamientos** al desencofrar."
        ] },
        { h: "Armaduras (especificaciones)", items: [
          "Acero: **barras lisas** o **barras corrugadas**.",
          "Sin defectos superficiales: **oxidación, grietas ni sopladuras**.",
          "**Límite de fluencia ≥ 4200 kg/cm²**."
        ] },
        { h: "Desencofrado (especificaciones)", items: [
          "Según las **fases previstas en el proyecto**, sin sacudidas ni choques.",
          "No se hace hasta que el hormigón tenga la **resistencia necesaria** para soportar con seguridad los esfuerzos, sin deformaciones excesivas."
        ] },
        { h: "Galletas", lead: "Dados **prefabricados de mortero de cemento** que mantienen **constante el recubrimiento** y evitan que la armadura se deslice al vaciar. Se fabrican **antes** de la estructura.", pasos: [
          "Clavar **listones de madera** sobre un **tablón**, separados **cada 5 cm**, a lo largo de todo el tablón.",
          "Vaciar mortero **1 : 3** (cemento : arena) **al ras de los listones**, cuya altura es igual al **recubrimiento** adoptado (**2.0 a 5.0 cm**).",
          "A las **2 horas** aprox., **cortar la mezcla cada 5 cm** con espátula formando cuadrados de **5 × 5 cm**.",
          "Colocar **alambre de amarre** a cada galleta.",
          "Dejarlas **reposar en agua** para que alcancen su resistencia normal."
        ] }
      ]
    },
    {
      id: "zapata", titulo: "Zapata aislada", figs: ["d3"],
      idea: "Base de la columna: ensancha su extremo inferior para **distribuir las cargas al terreno**. Es el tipo más usado (economía y sencillez).",
      partes: [
        { h: "Encofrado", items: ["**No requiere**: se construye directamente sobre el suelo excavado."] },
        { h: "Paso a paso", pasos: [
          "Con el terreno excavado a las dimensiones y cota de la zapata, vaciar una capa de **hormigón pobre 1 : 8** (cemento : arena) para iniciar el armado.",
          "**Doblar y cortar** la armadura según los planos estructurales.",
          "Armadura **longitudinal sobre galletas**; la **transversal** se sujeta a la longitudinal con la separación de planos.",
          "**Amarrar con alambre todas las intersecciones**.",
          "La armadura de la **columna se arma afuera** y se **baja a plomada** respetando sus ejes (no se arma dentro de la zapata).",
          "Antes de vaciar, marcar la altura **h1** de la zapata en los 4 lados con **clavos** y la altura **h2** con **alambre** en la armadura de la columna (evita incrementos de volumen).",
          "Con un **frotacho** formar las **pendientes laterales** antes del fraguado.",
          "**8 horas** después, vaciar un **dado** sobre la zapata, respetando los ejes: dimensiones de la columna y **altura de 5 cm**; la base de coronamiento tiene **+ 2\"** sobre las dimensiones de la columna (para asentar el encofrado). Se hace con mortero **1 : 3**.",
          "**Curado**: por lo menos **7 días**, con vertido permanente de agua, hasta el **70 %** de la resistencia."
        ] }
      ]
    },
    {
      id: "columnas", titulo: "Columnas", figs: ["d4", "d5"],
      idea: "El encofrado se arma **horizontal**, con **tres caras clavadas**; la cuarta cierra cuando el encofrado está en su posición vertical.",
      partes: [
        { h: "Doblado y montaje de armaduras", items: [
          "Según medidas de los planos estructurales.",
          "Las columnas de zapata se arman **verticalmente sobre su base**; las de **pisos superiores** se arman en **superficie horizontal** y se **empalman con alambre** a los fierros que sobresalen de la columna inferior.",
          "**Galletas amarradas a los estribos cada dos posiciones** para mantener el recubrimiento."
        ] },
        { h: "Encofrado: 3 condiciones", items: [
          "**Seguridad**, **precisión en las medidas** y **economía**. **La más importante es la seguridad.**",
          "Los accidentes se deben a: no considerar la **magnitud real de las cargas**, **madera en mal estado**, **secciones insuficientes** y **procedimientos inadecuados**."
        ] },
        { h: "Encofrado: paso a paso", pasos: [
          "Madera de **1\"**, con las dimensiones de la columna, **en superficie horizontal**.",
          "Clavar **solo tres caras** con **crucetas o abrazaderas** (listones de 2\"×2\", 2\"×4\", 3\"×3\" o 3\"×4\") **cada 50 cm**; **más juntas en los tramos inferiores** (mayor presión del concreto fresco). La **cuarta cara** queda para cerrar en vertical.",
          "**Chanfles** en las **cuatro esquinas**, cortando madera de 1\" a **45°** (evitan desmochaduras al desencofrar).",
          "Aplicar **aceite sucio** en toda la superficie interior.",
          "Con la columna ya armada, colocar el encofrado de tres lados **verticalmente, ajustando contra el dado**, y cerrar clavando el cuarto lado.",
          "Amarrar tableros con **templadores de alambre negro N° 8**; **sin espacios** por donde escurra el concreto.",
          "Verificar la **verticalidad** en **al menos dos caras adyacentes** con **plomada** (en esquinas, perpendicularidad con **escuadra**).",
          "Asegurar contra el piso con **puntales** de 3\"×3\", 2\"×4\" o 3\"×4\", apoyados en soportes fijados al suelo o a losas: dan **aplomado y arriostramiento**."
        ] },
        { h: "Colocado del hormigón", items: [
          "Primero, **lechada de cemento** sobre el dado (mayor adherencia).",
          "Columna **> 2.5 m**: prever una **ventana** por donde se vacía y vibra.",
          "Columna **≤ 2.5 m**: se vacía y vibra **desde arriba**."
        ] },
        { h: "Desencofrado y curado", items: [
          "Desencofrado a los **7 días**: las cargas de la estructura no inciden directamente sobre las columnas sino sobre los **puntales de las vigas**.",
          "Curado: forrarlas (el apunte dice «polipropileno») para protegerlas del **sol** y **verter agua** en su interior; la **sudoración** del hormigón ayuda."
        ] }
      ]
    },
    {
      id: "vigas", titulo: "Vigas", figs: ["d6"],
      idea: "Se encofra con **fondos sobre puntales (bolillos)** cada **80 cm**, y se nivela con **vasos comunicantes**.",
      partes: [
        { h: "Encofrado", pasos: [
          "Colocar los **fondos de la viga** (tablas de **1\"** entre columna y columna), con el **ancho de la viga**, apoyados en **puntales (bolillos)**.",
          "Los puntales llevan **cabezales (listones 2\"×2\")** sujetos a los bolillos, **cada 80 cm** en toda la longitud, apoyados sobre **cuñas** que sirven para **nivelar**.",
          "Colocar los **encofrados laterales** y **nivelar** toda la estructura por **vasos comunicantes (manguera)**: se miden las alturas de todas las columnas y, tomando la **menor** como referencia, se marcan todas al mismo nivel.",
          "**Chanfles** en las esquinas a lo largo de toda la viga.",
          "Laterales **exteriores de vigas de borde**: altura de la viga, **arriostrados con listones**. Laterales **interiores**: altura de la viga **descontando el espesor de la losa**.",
          "**Aceite sucio** en toda la superficie interior."
        ] },
        { h: "Armadura y colocado", items: [
          "La armadura **no debe chocar** con los encofrados: se usan **dados de concreto** para el recubrimiento.",
          "Vigas en **dos direcciones** con armadura muy tupida: **retirar la armadura negativa de una dirección**, vaciar el hormigón de la columna **hasta la mitad de la viga**, volver a colocar la armadura y terminar de vaciar."
        ] },
        { h: "Desencofrado y curado", items: [
          "**Laterales a los 2 días**; el resto de la estructura al alcanzar la **resistencia cilíndrica (28 días)**.",
          "Curado: **por lo menos 7 días** humedeciendo, hasta el **70 %** de la resistencia."
        ] }
      ]
    },
    {
      id: "losas", titulo: "Losas", figs: ["d6"],
      idea: "Tres tipos con su encofrado: **maciza**, **nervada** (1 y 2 direcciones) y **alivianada** (casi sin encofrado).",
      partes: [
        { h: "Losa maciza: encofrado", items: [
          "Encofrar **toda la superficie**, dando la **contra-flecha** en la **parte central**.",
          "Tablas de **1\"** lado a lado, **transversales** al encofrado de vigas, sobre **soleras de 2\"×2\"** **cada 80 cm**, apoyadas en **vigas de soporte de 2\"×4\"**, apuntaladas con **bolillos** sobre **cuñas** de nivelación."
        ] },
        { h: "Losa nervada en 1 y 2 direcciones", items: [
          "Mismo encofrado que la maciza, pero sobre el tablero se **clavan complementos** (**cerámica o plastoformo**) dejando **libres los nervios** con el ancho de los planos."
        ] },
        { h: "Losa alivianada", items: [
          "**No requiere encofrado**: las **viguetas** soportan el peso del hormigón al vaciar.",
          "En **luces grandes**, se apoyan sobre **soleras de 2\"×4\"** **cada 2 m**, previamente apuntaladas."
        ] },
        { h: "Armadura y colocado", items: [
          "Armadura longitudinal **sobre galletas**; transversal sujeta según planos; **todas las intersecciones amarradas**.",
          "Al vaciar se colocan **caballetes de madera en forma de «T»** sobre el encofrado para mantener el **espesor deseado**; se sujetan con alambre y se **retiran una vez nivelada** la losa.",
          "Nivelado con **reglas metálicas** y **frotachado grueso**."
        ] },
        { h: "Desencofrado y curado", items: [
          "Desencofrado al alcanzar la **resistencia cilíndrica (28 días)**.",
          "Curado **7 días**: se coloca **arena** sobre la losa y se **moja completamente** para mantener la humedad."
        ] }
      ]
    },
    {
      id: "escaleras", titulo: "Escaleras", figs: ["d7"],
      idea: "La escalera de concreto es una **losa dentada e inclinada**. Se vacía **de abajo hacia arriba**.",
      partes: [
        { h: "Elementos", items: [
          "Conformada por **tramos, descansos y barandas**.",
          "Los tramos están formados por **escalones**; y estos, por **pasos y contrapasos**."
        ] },
        { h: "Trazo", items: [
          "En el muro de un extremo se marca el **inicio y fin** del tramo. La **distancia vertical** se divide entre el **número de contrapasos**; la **horizontal**, entre el **número de pasos**. Se traza con **wincha y nivel**.",
          "Luego se traza el **fondo de escalera**: espesor **mínimo 15 cm** o el de los planos."
        ] },
        { h: "Encofrado", pasos: [
          "Armar el **tablero de escalera y de descanso**: tablas de **1\"** sobre **soleras de 2\"×3\"**, apoyadas en **vigas de soporte de 2\"×4\"** apuntaladas.",
          "Clavar los **encofrados laterales** de escalera y descanso.",
          "Colocar **tableros de contrahuella** según los peldaños (permiten extender bien la huella).",
          "Asegurarlos con **tacos de madera** en los extremos y un **listón de refuerzo en el centro** para que no se curven por la presión del concreto."
        ] },
        { h: "Armadura y colocado", items: [
          "Armadura longitudinal sobre galletas, transversal sujeta; intersecciones amarradas.",
          "**Humedecer el encofrado** antes de vaciar (la madera seca absorbería el agua del concreto).",
          "Vaciar **empezando por la parte más baja** y **terminando por la superior**: al revés, el concreto resbala y **se separa la piedra de la mezcla**.",
          "Vaciado **continuo** hasta terminar toda la escalera, **compactando con vibradora**."
        ] },
        { h: "Desencofrado y curado", items: ["Desencofrado a los **28 días** (resistencia cilíndrica). Curado **7 días** con **regado constante** de agua."] }
      ]
    },
    {
      id: "muros", titulo: "Muros de corte y medición", figs: ["d8"],
      idea: "Muros de hormigón armado. Su construcción es **similar a las columnas**.",
      partes: [
        { h: "Muros de corte", items: [
          "**Encofrado**: tablero de tablas de **1\"** clavadas en **soleras de 2\"×3\"** (la separación no se lee en el apunte), a su vez sobre **vigas de unión de 2\"×4\"**; luego **flechas** para fijar el tablero **vertical a plomada**.",
          "**Armadura**: se corta según planos; longitudinal sobre galletas, transversal sujeta, intersecciones amarradas.",
          "**Hormigón**: según las especificaciones y **en forma similar a columnas**.",
          "**Desencofrado**: al alcanzar la resistencia cilíndrica (**28 días**). **Curado**: **7 días** con regado constante."
        ] },
        { h: "Resumen: desencofrado y curado", tabla: { h: ["Elemento", "Desencofrado", "Curado"], r: [
          ["Columnas", "**7 días**", "Forrar y verter agua"],
          ["Vigas", "Laterales **2 días**; resto **28 días**", "**7 días**, humedeciendo"],
          ["Losas", "**28 días**", "**7 días**, arena mojada"],
          ["Escaleras", "**28 días**", "**7 días**, regado constante"],
          ["Muros de corte", "**28 días**", "**7 días**, regado constante"],
          ["Zapatas", "—", "**7 días**, vertido permanente de agua"]
        ] } },
        { h: "Medición y pago", tabla: { h: ["Elemento", "Unidad"], r: [
          ["Zapatas", "**m³**"], ["Columnas", "**m³**"], ["Vigas", "**m³**"], ["Losa maciza", "**m³**"],
          ["Losa nervada (alivianada, encasetonada)", "**m²**"], ["Escaleras", "**m³**"], ["Muros", "**m³**"]
        ] } },
        { nota: "Se recomienda vaciar la estructura en forma **monolítica y correlativa**: **columnas, vigas, losas y escaleras, en ese orden**, evitando hormigones de **diferentes edades**.", notaT: "Recomendación" }
      ]
    }
  ],

  notas: [
    "Muros de corte: el apunte dice «soleras ubicadas cada ___ m» y **no aparece el número** (probablemente está en una imagen de la diapositiva). Revísalo en la presentación original.",
    "Curado de columnas: el apunte dice «forradas con **polipropileno**» (en el tema de impermeabilización aparece también «polipropileno/polietileno»). Se transcribe tal cual; consulta si lo piden literal.",
    "El **dado de la zapata** se vacía a las **8 horas**; el **curado** de zapatas es de **7 días** con vertido permanente de agua. No los confundas."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Elementos de una estructura de H°A", corto: "Elementos", vb: [0, 0, 480, 300],
      desc: "Nombra los elementos principales del pórtico.",
      blanks: { lo: "Losa", vi: "Viga", co: "Columna", za: "Zapata" },
      x: ["Muro", "Escalera", "Tanque"],
      nota: "Orden de vaciado recomendado: **columnas → vigas → losas → escaleras** (monolítico y correlativo).",
      svg: S => [
        S.r(0, 250, 480, 50, "k-soil"),
        S.r(90, 235, 60, 15, "k-conc"), S.r(330, 235, 60, 15, "k-conc"),
        S.r(108, 90, 24, 145, "k-conc"), S.r(348, 90, 24, 145, "k-conc"),
        S.r(108, 70, 264, 20, "k-conc"),
        S.r(60, 55, 360, 15, "k-conc"),
        S.t(240, 22, "@lo"), S.l(240, 34, 240, 54),
        S.t(240, 130, "@vi"), S.l(240, 118, 240, 92),
        S.t(75, 165, "@co:r"), S.l(78, 165, 106, 165),
        S.t(240, 205, "@za"), S.l(205, 205, 152, 238)
      ].join("")
    },
    {
      id: "d2", titulo: "Fabricación de galletas", corto: "Galletas", vb: [-74, 0, 554, 300],
      desc: "Corte lateral del tablón con listones y mortero.",
      blanks: { mo: "Mortero 1 : 3", sp: "5 cm", li: "Listón", re: "2 a 5 cm", co: "2 horas", al: "Alambre de amarre" },
      x: ["1 : 8", "10 cm", "1 hora", "Barra corrugada"],
      nota: "Listones cada **5 cm** sobre un tablón; mortero **1 : 3** al ras (altura = **recubrimiento 2.0 – 5.0 cm**); a las **2 h** se corta en cuadrados de **5 × 5 cm** y se coloca **alambre de amarre**.",
      svg: S => [
        S.r(30, 230, 420, 20, "k-wood"), S.t(240, 240, "Tablón", "sm"),
        S.r(40, 186, 391, 44, "k-mort"),
        [40, 95, 150, 205, 260, 315, 370, 425].map(x => S.r(x, 186, 6, 44, "k-wood")).join(""),
        S.dh(43, 98, 176, "@sp", -20),
        S.dv(14, 186, 230, "@re", -6, "r"),
        S.t(330, 120, "@mo"), S.l(330, 132, 330, 190),
        S.t(150, 120, "@li"), S.l(150, 132, 150, 186),
        S.t(440, 40, "Galleta ya cortada", "sm r"),
        S.r(420, 52, 36, 36, "k-mort"), S.path("M438 52 q-10 -22 0 -22 q10 0 0 22", "ln"),
        S.t(350, 70, "@al"), S.l(405, 70, 424, 70),
        S.t(40, 275, "Cortar con espátula a las", "sm l"), S.t(180, 275, "@co:l"),
        S.t(262, 275, "de vaciada", "sm l")
      ].join("")
    },
    {
      id: "d3", titulo: "Zapata aislada", corto: "Zapata aislada", vb: [-5, 0, 670, 320],
      desc: "Corte de la zapata con su hormigón pobre, armadura sobre galletas y el dado.",
      blanks: { hp: "Hormigón pobre 1 : 8", ga: "Galletas", da: "Dado", e: "5 cm", ac: "Armadura de columna", za: "Zapata" },
      x: ["1 : 3", "10 cm", "Estribos", "Cimiento corrido"],
      nota: "Hormigón pobre **1 : 8** → armadura **sobre galletas** → hormigón de zapata (pendientes con **frotacho**) → a las **8 h** el **dado de 5 cm**, mortero **1 : 3**.",
      svg: S => [
        S.r(0, 262, 600, 58, "k-soil"),
        S.r(70, 250, 400, 14, "k-mort"),
        S.poly("85,250 455,250 455,222 340,190 200,190 85,222", "k-conc"),
        [120, 240, 360].map(x => S.r(x, 232, 12, 18, "k-mort")).join(""),
        S.l(100, 230, 440, 230, "th"),
        S.r(232, 178, 56, 14, "k-mort"),
        S.l(236, 40, 236, 232, "th"), S.l(284, 40, 284, 232, "th"),
        S.t(150, 150, "@ac:r"), S.l(155, 150, 235, 150),
        S.t(500, 130, "@da:l"), S.l(497, 134, 290, 184), S.dv(300, 178, 192, "@e", 34),
        S.t(500, 200, "@za:l"), S.l(497, 204, 440, 214),
        S.t(500, 242, "@hp:l"), S.l(497, 244, 470, 254),
        S.t(500, 290, "@ga:l"), S.l(497, 288, 372, 246)
      ].join("")
    },
    {
      id: "d4", titulo: "Encofrado de columna (elevación)", corto: "Columna · elevación", vb: [0, 0, 520, 340],
      desc: "Vista lateral del encofrado armado: crucetas, ventana y puntales.",
      blanks: { cr: "Cruceta", sp: "50 cm", pu: "Puntal", da: "Dado", ve: "Ventana de vaciado", al: "2.5 m" },
      x: ["80 cm", "Cuña", "1 m", "Bolillo"],
      nota: "Crucetas cada **50 cm** (más juntas abajo), **puntales** para aplomado y arriostramiento, **dado** al pie. Columna **> 2.5 m**: **ventana** para vaciar y vibrar.",
      svg: S => [
        S.r(0, 262, 520, 78, "k-soil"),
        S.r(200, 40, 60, 222, "k-wood"),
        S.r(200, 255, 60, 7, "k-mort"),
        [66, 101, 136, 171, 196, 220, 240].map(y => S.r(188, y, 84, 6, "k-black")).join(""),
        S.r(214, 82, 32, 28, "k-bg"),
        S.l(260, 160, 340, 262, "th"), S.l(200, 160, 120, 262, "th"),
        S.t(330, 40, "@cr:l"), S.l(327, 44, 274, 66),
        S.t(330, 90, "@ve:l"), S.l(327, 92, 248, 96),
        S.t(375, 200, "@pu:l"), S.l(372, 204, 330, 235),
        S.t(330, 255, "@da:l"), S.l(327, 258, 264, 258),
        S.dv(170, 101, 136, "@sp", -6, "r"),
        S.t(40, 322, "Ventana si la columna mide más de", "sm l"), S.t(250, 322, "@al:l")
      ].join("")
    },
    {
      id: "d5", titulo: "Columna encofrada (planta)", corto: "Columna · planta", vb: [0, 0, 520, 300],
      desc: "Sección horizontal: caras del encofrado, chanfles y armadura.",
      blanks: { ch: "Chanfle", es: "Estribo", ga: "Galleta", ta: "Tabla de 1\"", cu: "4ª cara (cierra)", an: "45°" },
      x: ["Cruceta", "Tabla de 2\"", "30°", "Templador"],
      nota: "**3 caras clavadas** con crucetas + **4ª cara** que cierra en vertical. **Chanfles** a **45°** en las 4 esquinas; **galletas** amarradas a los estribos cada dos posiciones.",
      svg: S => [
        S.r(160, 70, 12, 160, "k-wood"), S.r(308, 70, 12, 160, "k-wood"), S.r(160, 70, 160, 12, "k-wood"),
        S.r(160, 218, 160, 12, "k-wood"), S.path("M148 218 h184", "ln ac da"),
        S.r(172, 82, 136, 136, "k-conc"),
        S.poly("172,82 196,82 172,106", "k-wood"), S.poly("308,82 284,82 308,106", "k-wood"),
        S.poly("172,218 196,218 172,194", "k-wood"), S.poly("308,218 284,218 308,194", "k-wood"),
        S.r(192, 102, 96, 96, "k-none", 'style="stroke-width:3"'),
        [[192, 102], [288, 102], [192, 198], [288, 198]].map(p => S.c(p[0], p[1], 5, "k-black")).join(""),
        S.r(236, 85, 8, 15, "k-mort"),
        S.t(40, 40, "@ch:l"), S.l(100, 50, 180, 90),
        S.t(40, 150, "@es:l"), S.l(100, 150, 190, 150),
        S.t(350, 40, "@ga:l"), S.l(380, 52, 246, 92),
        S.t(350, 110, "@ta:l"), S.l(380, 122, 322, 140),
        S.t(350, 240, "@cu:l"), S.l(380, 232, 322, 224),
        S.t(40, 270, "Ángulo del chanfle:", "sm l"), S.t(180, 270, "@an:l")
      ].join("")
    },
    {
      id: "d6", titulo: "Encofrado de viga y losa (corte)", corto: "Viga y losa", vb: [0, 0, 560, 320],
      desc: "Corte transversal del encofrado de una viga con la losa que la rodea.",
      blanks: { ts: "Tablero de losa", so: "Solera 2\" × 2\"", la: "Lateral", fo: "Fondo de viga", ca: "Cabezal 2\" × 2\"", bo: "Bolillo", cu: "Cuña", sp: "80 cm" },
      x: ["Chanfle", "Galleta", "1 m", "Caballete"],
      nota: "Fondo + laterales de viga sobre **cabezales 2\"×2\"** y **bolillos cada 80 cm** con **cuñas**; losa: tablas **1\"** → **soleras 2\"×2\" cada 80 cm** → vigas de soporte **2\"×4\"** → bolillos. **Contra-flecha** al centro.",
      svg: S => [
        S.r(0, 298, 560, 22, "k-soil"),
        S.r(60, 105, 440, 25, "k-conc"), S.t(120, 117, "Losa", "sm"),
        S.r(240, 130, 80, 75, "k-conc"), S.t(280, 168, "Viga", "sm"),
        S.r(60, 130, 172, 7, "k-wood"), S.r(328, 130, 172, 7, "k-wood"),
        [95, 175].map(x => S.r(x, 137, 12, 10, "k-wood")).join(""), [400, 470].map(x => S.r(x, 137, 12, 10, "k-wood")).join(""),
        S.r(60, 147, 172, 12, "k-wood"), S.r(328, 147, 172, 12, "k-wood"),
        [[120, 159], [200, 159], [430, 159]].map(p => S.r(p[0], p[1], 6, 139, "k-wood")).join(""),
        [[117, 298], [197, 298], [427, 298]].map(p => S.poly(`${p[0]},${p[1]} ${p[0] + 12},${p[1]} ${p[0] + 6},${p[1] - 10}`, "k-black")).join(""),
        S.r(232, 130, 8, 82, "k-wood"), S.r(320, 130, 8, 82, "k-wood"), S.r(240, 205, 80, 7, "k-wood"),
        S.r(232, 212, 96, 10, "k-wood"),
        [[262, 222], [298, 222]].map(p => S.r(p[0], p[1], 6, 76, "k-wood")).join(""),
        [[259, 298], [295, 298]].map(p => S.poly(`${p[0]},${p[1]} ${p[0] + 12},${p[1]} ${p[0] + 6},${p[1] - 10}`, "k-black")).join(""),
        S.t(150, 40, "@ts"), S.l(150, 52, 150, 132, "da"),
        S.t(400, 40, "@so"), S.l(400, 52, 400, 142, "da"),
        S.t(360, 166, "@la:l"), S.l(357, 166, 330, 166),
        S.t(360, 207, "@fo:l"), S.l(357, 209, 322, 208),
        S.t(360, 238, "@ca:l"), S.l(357, 238, 330, 220),
        S.t(360, 270, "@bo:l"), S.l(357, 270, 306, 270),
        S.t(360, 301, "@cu:l"), S.l(357, 298, 310, 292),
        S.dh(123, 203, 232, "@sp", -18)
      ].join("")
    },
    {
      id: "d7", titulo: "Escalera de hormigón armado", corto: "Escalera", vb: [0, 0, 520, 300],
      desc: "Elementos de la escalera y sentido del vaciado.",
      blanks: { pa: "Paso", cp: "Contrapaso", de: "Descanso", es: "15 cm", ini: "Inicio del vaciado", fi: "Fin del vaciado" },
      x: ["Baranda", "30 cm", "Tramo", "Vigueta"],
      nota: "Escalón = **paso** (huella) + **contrapaso** (contrahuella). Fondo **mínimo 15 cm**. Se vacía **de abajo hacia arriba**, continuo y vibrado; el apunte exige **humedecer** el encofrado antes.",
      svg: S => [
        S.r(20, 290, 440, 10, "k-soil"),
        S.poly("60,290 60,230 100,230 100,200 140,200 140,170 180,170 180,140 220,140 220,110 400,110 400,140 260,140", "k-conc"),
        S.t(80, 50, "@cp"), S.l(80, 62, 98, 214),
        S.t(190, 90, "@pa"), S.l(170, 78, 122, 197),
        S.t(330, 60, "@de"), S.l(330, 72, 330, 108),
        S.l(400, 110, 440, 110, "da"), S.l(400, 140, 440, 140, "da"), S.dv(430, 110, 140, "@es", 36),
        S.t(210, 262, "@ini"), S.l(138, 262, 75, 284), S.arrow(75, 284, "l"),
        S.t(440, 200, "@fi"), S.l(430, 188, 400, 125), S.arrow(400, 125, "u")
      ].join("")
    },
    {
      id: "d8", titulo: "Línea de tiempo: curado y desencofrado", corto: "Curado y desencofrado", vb: [0, 0, 520, 300],
      desc: "Cuántos días hasta curar y desencofrar cada elemento.",
      blanks: { cu: "7 días", pc: "70 %", la: "2 días", co: "7 días", re: "28 días" },
      x: ["14 días", "3 días", "50 %", "90 %"],
      nota: "Curado **≥ 7 días** y **70 %** de la resistencia. Desencofrado: laterales de vigas **2 d**, columnas **7 d**, vigas/losas/escaleras/muros **28 d**.",
      svg: S => {
        const X = d => 40 + d * 15.71;
        return [
          S.t(40, 38, "CURADO", "hd l"), S.r(40, 50, X(7) - 40, 16, "k-water"), S.t(X(7) + 8, 58, "@cu:l"), S.t(X(7) + 78, 58, "mín.", "sm l"), S.t(X(7) + 108, 58, "@pc:l"),
          S.t(40, 88, "LATERALES DE VIGAS", "hd l"), S.r(40, 100, X(2) - 40, 16, "k-wood"), S.t(X(2) + 8, 108, "@la:l"),
          S.t(40, 138, "COLUMNAS", "hd l"), S.r(40, 150, X(7) - 40, 16, "k-wood"), S.t(X(7) + 8, 158, "@co:l"),
          S.t(40, 188, "VIGAS · LOSAS · ESCALERAS · MUROS", "hd l"), S.r(40, 200, X(28) - 40, 16, "k-conc"), S.t(X(28) - 8, 208, "@re:r"),
          S.l(40, 240, 480, 240, "th"),
          [0, 2, 7, 28].map(d => S.l(X(d), 234, X(d), 246) + S.t(X(d), 262, d === 28 ? "28 d" : d + " d", "sm")).join("")
        ].join("");
      }
    }
  ],

  tarjetas: [
    ["¿Qué es el hormigón armado?", "El producto formado por **hormigón y armaduras de fierro** que trabajan juntos. **Hormigón: compresión. Acero: tracción.**"],
    ["¿De qué se compone el concreto?", "**Cemento, áridos y agua.**"],
    ["Etapas de una operación constructiva con hormigón", "Materias primas → dosificación y preparación → transporte y colocación → compactación → curado y protección → control."],
    ["Elementos de H°A en edificios", "**Zapatas, columnas, vigas, losas, escaleras, tanques de agua y muros.**"],
    ["Orden cronológico en obra", "**Encofrados → doblado y montaje de armaduras → fabricación y colocado del hormigón → curado → desencofrado.**"],
    ["Altura máxima de vertido del hormigón", "**2.5 m**. Se dirige con canaletas; no debe chocar libremente con encofrado o armaduras."],
    ["Espesor de las tongadas de colocación", "**20 a 30 cm**, capas horizontales."],
    ["¿Cuánto se puede hacer avanzar el hormigón dentro del encofrado?", "**No más de 1 m.** Tampoco se arroja con pala a distancia ni se distribuye con rastrillo."],
    ["Métodos de compactación: ¿cuál se recomienda?", "**Vibrado mecánico** (evita cangrejeras). **Picado** y **apisonado**: no recomendables."],
    ["Curado: tiempo y criterio", "Alrededor de **7 días**, hasta alcanzar **mínimo 70 %** de la resistencia de cálculo."],
    ["¿Cómo debe ser un encofrado de madera?", "**Rígido, resistente y limpio.** Interior pintado con **aceite sucio**; **chanfles** en las esquinas."],
    ["Acero de armaduras", "Barras **lisas o corrugadas**, sin oxidación, grietas ni sopladuras. **fy ≥ 4200 kg/cm²**."],
    ["¿Qué son las galletas?", "Dados **prefabricados de mortero 1 : 3** que mantienen el **recubrimiento** y evitan que la armadura se deslice."],
    ["Fabricación de galletas", "Listones **cada 5 cm** sobre tablón → mortero 1 : 3 al ras (**2.0–5.0 cm**) → corte en cuadrados **5×5** a las **2 h** → alambre → reposo en **agua**."],
    ["Zapata aislada: ¿qué es?", "Ensanche inferior de la columna que **distribuye las cargas al terreno**. **No requiere encofrado.**"],
    ["Zapata: hormigón pobre", "**1 : 8** (cemento : arena), sobre el terreno excavado, antes del armado."],
    ["Zapata: armadura de la columna", "Se **arma afuera** y se **baja a plomada** respetando ejes."],
    ["Zapata: ¿para qué las alturas h1 y h2?", "Marcadas con **clavos** (h1, 4 lados) y **alambre** en la armadura de columna (h2), para **evitar incrementos de volumen**."],
    ["Dado de la zapata", "A las **8 h**: dimensiones de la columna, **5 cm** de alto, mortero **1 : 3**; base de coronamiento **+ 2\"** para asentar el encofrado de la columna."],
    ["Columnas: 3 condiciones del encofrado", "**Seguridad** (la más importante), **precisión en las medidas** y **economía**."],
    ["Columnas: crucetas", "Listones de 2\"×2\", 2\"×4\", 3\"×3\" o 3\"×4\", **cada 50 cm**, más juntas abajo (mayor presión)."],
    ["Columnas: ¿cuántas caras se clavan primero?", "**Tres**; la cuarta se cierra cuando el encofrado está vertical."],
    ["Columnas: chanfles", "**4 esquinas**, madera de 1\" cortada a **45°**; evitan desmochaduras al desencofrar."],
    ["Columnas: ¿cómo se verifica la verticalidad?", "Con **plomada** en al menos **dos caras adyacentes**; en esquinas, **escuadra**."],
    ["Columna mayor a 2.5 m: ¿cómo se vacía?", "Se prevé una **ventana** por donde se **vacía y vibra**. Si mide ≤ 2.5 m, desde arriba."],
    ["Columnas: desencofrado", "A los **7 días** (las cargas inciden en los puntales de las vigas)."],
    ["Vigas: fondos y puntales", "Tablas de **1\"**; cabezales **2\"×2\"** sujetos a bolillos **cada 80 cm**, sobre **cuñas**."],
    ["Vigas: nivelación", "Por **vasos comunicantes (manguera)**: se toma la **menor altura** de columna como referencia."],
    ["Vigas: laterales exteriores e interiores", "Exteriores de borde: altura de la viga, **arriostrados**. Interiores: altura de la viga **menos el espesor de la losa**."],
    ["Vigas: armadura muy tupida en cruce", "Retirar la **armadura negativa** de una dirección, vaciar la columna hasta la **mitad de la viga**, reponer la armadura."],
    ["Vigas: desencofrado", "**Laterales: 2 días.** El resto: **28 días**."],
    ["Losa maciza: encofrado", "Con **contra-flecha** al centro; tablas 1\" sobre **soleras 2\"×2\" cada 80 cm**, sobre vigas **2\"×4\"** apuntaladas."],
    ["Losa nervada: ¿qué cambia?", "Se clavan **complementos** (cerámica o plastoformo) sobre el tablero, dejando libres los nervios."],
    ["Losa alivianada: encofrado", "**No requiere**: las viguetas soportan el peso. En luces grandes: soleras **2\"×4\" cada 2 m** apuntaladas."],
    ["Caballetes en «T»", "Tablas que mantienen el **espesor de la losa** al vaciar; se retiran tras **nivelar**."],
    ["Losas: curado", "**7 días**, con **arena mojada** sobre la losa."],
    ["Escalera: elementos", "**Tramos, descansos y barandas**; los tramos tienen escalones con **pasos y contrapasos**."],
    ["Escalera: espesor del fondo", "**Mínimo 15 cm** o el de los planos."],
    ["Escalera: sentido del vaciado", "De la parte **más baja a la más alta**: si no, el concreto resbala y se separa la piedra."],
    ["Escalera: antes de vaciar", "**Humedecer el encofrado**, para que la madera seca no absorba el agua del concreto."],
    ["Escalera, muros y losas: desencofrado y curado", "Desencofrado a los **28 días**; curado **7 días**."],
    ["Medición y pago", "**m³**: zapatas, columnas, vigas, losa maciza, escaleras y muros. **m²**: losa nervada (alivianada, encasetonada)."],
    ["Recomendación de vaciado", "**Monolítico y correlativo**: columnas, vigas, losas y escaleras, en ese orden (evitar hormigones de distintas edades)."]
  ],

  preguntas: [
    { t: "mc", q: "Respecto a los esfuerzos, en el hormigón armado...", o: ["El hormigón resiste la compresión y el acero la tracción", "El hormigón resiste la tracción y el acero la compresión", "Ambos resisten solo compresión", "El acero solo cumple función estética"], a: 0 },
    { t: "fill", q: "El concreto es una mezcla de [[cemento]], áridos y [[agua]].", x: ["cal", "yeso", "arena fina"] },
    { t: "order", q: "Ordena el orden cronológico en obra de una estructura de hormigón armado:", s: ["Ejecución de los encofrados", "Doblado y montaje de las armaduras", "Fabricación y colocado del hormigón", "Curado", "Desencofrado"] },
    { t: "order", q: "Ordena las etapas de una operación constructiva con hormigón:", s: ["Características de las materias primas", "Dosificación y preparación", "Transporte y colocación", "Compactación", "Curado y protección", "Control"] },
    { t: "mc", q: "El hormigón no debe ser arrojado desde alturas mayores a...", o: ["2.5 m", "1 m", "5 m", "10 m"], a: 0 },
    { t: "mc", q: "La colocación del hormigón se hace por capas o tongadas horizontales de...", o: ["20 a 30 cm", "5 a 10 cm", "50 a 60 cm", "1 m"], a: 0 },
    { t: "vf", q: "Se puede hacer avanzar el hormigón hasta 3 m dentro del encofrado con ayuda de un rastrillo.", a: false, w: "No se distribuye con rastrillo ni se hace avanzar **más de 1 m** dentro del encofrado, para no disgregarlo." },
    { t: "mc", q: "¿Cuál es el método de compactación recomendado para elementos de hormigón armado?", o: ["Vibrado mecánico", "Picado con barra", "Apisonado con pisón", "Ninguno: se deja asentar solo"], a: 0, w: "Evita las **cangrejeras**. Picado y apisonado: no recomendables." },
    { t: "match", q: "Relaciona cada método de compactación con su valoración:", p: [["Picado con barra metálica", "No recomendable"], ["Apisonado con pisón", "No recomendable "], ["Vibrado mecánico", "Recomendado"]], x: ["Solo para losas"] },
    { t: "fill", q: "El curado se prolonga alrededor de [[7]] días, hasta que el hormigón alcance como mínimo el [[70]] % de su resistencia de cálculo.", x: ["3", "14", "50", "100"] },
    { t: "mc", q: "El curado sirve principalmente para...", o: ["Evitar el desecamiento prematuro y permitir la hidratación de toda la masa", "Acelerar el desencofrado", "Aumentar el recubrimiento", "Reemplazar la compactación"], a: 0 },
    { t: "mc", q: "Los encofrados de madera deben ser...", o: ["Rígidos, resistentes y limpios", "Flexibles y livianos", "Húmedos y porosos", "Pintados de blanco"], a: 0 },
    { t: "mc", q: "¿Con qué se pinta la superficie interior del encofrado de madera?", o: ["Aceite sucio", "Alquitrán", "Cal", "Látex"], a: 0, w: "Impermeabiliza la madera y evita que se adhiera al hormigón." },
    { t: "mc", q: "¿Para qué se colocan chanfles en las esquinas del encofrado?", o: ["Para evitar desmochaduras o agrietamientos al desencofrar", "Para apuntalar", "Para curar el hormigón", "Para ahorrar madera"], a: 0 },
    { t: "fill", q: "El límite de fluencia del acero debe ser mayor o igual a [[4200]] kg/cm².", x: ["2400", "3000", "5000"] },
    { t: "vf", q: "Las barras de acero pueden presentar algo de oxidación superficial si son corrugadas.", a: false, w: "No deben presentar defectos superficiales por **oxidación, grietas ni sopladuras**." },
    { t: "mc", q: "Las galletas son...", o: ["Dados prefabricados de mortero que mantienen constante el recubrimiento", "Piezas de acero para amarrar", "Cuñas de madera para nivelar", "Bloques de ladrillo"], a: 0 },
    { t: "fill", q: "Las galletas se hacen con mortero [[1 : 3]], con listones separados cada [[5]] cm y se cortan a las [[2]] horas.", x: ["1 : 8", "10", "8", "1 : 5"] },
    { t: "order", q: "Ordena la fabricación de galletas:", s: ["Clavar listones de madera sobre un tablón, cada 5 cm", "Vaciar mortero 1 : 3 al ras de los listones", "A las 2 horas, cortar cada 5 cm formando cuadrados de 5 × 5 cm", "Colocar alambre de amarre a cada galleta", "Dejarlas reposar en agua"] },
    { t: "mc", q: "El recubrimiento adoptado para las galletas está entre...", o: ["2.0 y 5.0 cm", "0.5 y 1 cm", "10 y 15 cm", "6 y 8 cm"], a: 0 },
    { t: "vf", q: "La zapata aislada requiere un encofrado de madera.", a: false, w: "**No requiere encofrado**: se construye directamente sobre el suelo excavado." },
    { t: "fill", q: "Antes de armar la zapata se vacía una capa de hormigón pobre de dosificación [[1 : 8]] (cemento : arena).", x: ["1 : 3", "1 : 2 : 4", "1 : 5"] },
    { t: "mc", q: "En la zapata aislada, la armadura de la columna...", o: ["Se arma afuera y se baja a plomada respetando los ejes", "Se arma dentro de la zapata", "Se coloca después de vaciar la zapata", "Se reemplaza por galletas"], a: 0 },
    { t: "mc", q: "En la zapata, la armadura longitudinal se coloca sobre...", o: ["Galletas", "El terreno directamente", "Piedras", "Ladrillos"], a: 0 },
    { t: "mc", q: "¿Cuántas horas después de vaciada la zapata se vacía el dado?", o: ["8 horas", "2 horas", "24 horas", "7 días"], a: 0 },
    { t: "fill", q: "El dado de la zapata tiene las dimensiones de la columna, una altura de [[5]] cm y se vacía con mortero [[1 : 3]].", x: ["10", "1 : 8", "2"] },
    { t: "mc", q: "Las alturas h1 y h2 de la zapata se marcan para...", o: ["Evitar que se produzcan incrementos de volumen", "Nivelar el encofrado", "Ubicar las galletas", "Medir el curado"], a: 0 },
    { t: "order", q: "Ordena la ejecución de una zapata aislada:", s: ["Hormigón pobre 1 : 8 sobre el terreno excavado", "Doblado, corte y montaje de armaduras sobre galletas", "Bajar la armadura de la columna a plomada", "Vaciar el hormigón y formar pendientes con frotacho", "A las 8 horas, vaciar el dado", "Curado de 7 días con agua"] },
    { t: "mc", q: "Entre las tres condiciones del encofrado de columnas, la más importante es...", o: ["La seguridad", "La economía", "La estética", "La rapidez"], a: 0, w: "Las tres: seguridad, precisión en las medidas y economía." },
    { t: "mc", q: "Los accidentes por falla de encofrados se deben principalmente a...", o: ["No considerar la magnitud real de las cargas, madera en mal estado, secciones insuficientes y procedimientos inadecuados", "Exceso de curado", "Uso de aceite sucio", "Exceso de chanfles"], a: 0 },
    { t: "fill", q: "En el encofrado de columnas, las crucetas se ubican cada [[50]] cm y en los tramos inferiores están más [[juntas]].", x: ["80", "separadas", "100", "libres"] },
    { t: "mc", q: "¿Cuántas caras del encofrado de la columna se clavan primero?", o: ["Tres", "Cuatro", "Dos", "Una"], a: 0, w: "La cuarta cara se cierra cuando el encofrado ya está en posición vertical, ajustado contra el dado." },
    { t: "mc", q: "Los chanfles de las columnas se fabrican cortando madera de 1\" a...", o: ["45°", "30°", "60°", "90°"], a: 0 },
    { t: "mc", q: "Los tableros del encofrado de columna se amarran con...", o: ["Templadores de alambre negro N° 8", "Clavos de 6\"", "Cinta metálica", "Soga"], a: 0 },
    { t: "mc", q: "La verticalidad del encofrado de una columna se verifica con...", o: ["Plomada, al menos en dos caras adyacentes", "Nivel de burbuja horizontal", "Manguera", "Wincha"], a: 0 },
    { t: "mc", q: "Antes de vaciar una columna se coloca sobre el dado...", o: ["Lechada de cemento", "Arena seca", "Aceite sucio", "Yeso"], a: 0, w: "Para que exista mayor adherencia." },
    { t: "mc", q: "En una columna de más de 2.5 m de altura, el hormigón se vacía...", o: ["Por una ventana prevista en el encofrado", "Siempre desde arriba", "Con bomba sin ventana", "Después de desencofrar"], a: 0 },
    { t: "mc", q: "¿A los cuántos días se desencofran las columnas?", o: ["7 días", "2 días", "28 días", "1 día"], a: 0, w: "Porque las cargas de la estructura no inciden directamente sobre las columnas sino sobre los puntales de las vigas." },
    { t: "mc", q: "En vigas, los puntales (bolillos) con cabezales de 2\" × 2\" se colocan cada...", o: ["80 cm", "50 cm", "2 m", "20 cm"], a: 0 },
    { t: "mc", q: "El sistema de vasos comunicantes (manguera) en vigas sirve para...", o: ["Nivelar toda la estructura tomando como referencia la menor altura de columna", "Medir la humedad", "Compactar el hormigón", "Curar las vigas"], a: 0 },
    { t: "mc", q: "Los encofrados laterales interiores de las vigas tienen la altura de la viga...", o: ["Descontando el espesor de la losa", "Más el espesor de la losa", "Igual a la losa", "Más 20 cm"], a: 0 },
    { t: "mc", q: "En vigas en dos direcciones con armadura muy tupida en la intersección se debe...", o: ["Retirar la armadura negativa de una dirección, vaciar la columna hasta la mitad de la viga y reponer la armadura", "Eliminar los estribos", "Cortar la armadura positiva", "Vaciar solo mortero"], a: 0 },
    { t: "match", q: "Relaciona cada elemento con su tiempo de desencofrado:", p: [["Laterales de vigas", "2 días"], ["Columnas", "7 días"], ["Losas", "28 días"], ["Escaleras", "28 días "], ["Muros de corte", "28 días  "]], x: ["14 días"] },
    { t: "mc", q: "El encofrado de una losa maciza se arma con...", o: ["Tablas de 1\" sobre soleras 2\"×2\" cada 80 cm, apoyadas en vigas de soporte 2\"×4\"", "Tablas de 3\" sobre bolillos cada 5 m", "Planchas metálicas sin soporte", "Solo viguetas"], a: 0 },
    { t: "mc", q: "En la losa maciza se debe dar una contra-flecha...", o: ["En la parte central", "En los apoyos", "En los bordes", "No se da"], a: 0 },
    { t: "mc", q: "La losa nervada se diferencia de la maciza en que sobre el tablero se clavan...", o: ["Complementos como cerámica o plastoformo, dejando libres los nervios", "Viguetas pretensadas", "Mallas electrosoldadas", "Ladrillos de 6 huecos"], a: 0 },
    { t: "vf", q: "Las losas alivianadas no requieren encofrado porque las viguetas soportan el peso del hormigón al vaciar.", a: true, w: "En luces grandes se apoyan sobre soleras de 2\"×4\" cada 2 m previamente apuntaladas." },
    { t: "mc", q: "Los caballetes de madera en forma de «T» sobre la losa sirven para...", o: ["Mantener el espesor deseado de la losa", "Apuntalar las vigas", "Curar el hormigón", "Sujetar la armadura negativa"], a: 0, w: "Se sujetan con alambre y se retiran una vez nivelada la losa." },
    { t: "mc", q: "Para curar una losa se coloca sobre ella...", o: ["Arena que luego se moja completamente", "Plástico negro seco", "Aceite sucio", "Yeso"], a: 0 },
    { t: "mc", q: "El espesor mínimo del fondo de una escalera es...", o: ["15 cm", "5 cm", "30 cm", "2 cm"], a: 0 },
    { t: "mc", q: "El vaciado de una escalera se inicia por...", o: ["La parte más baja y termina por la superior", "La parte más alta", "El descanso, luego los pasos", "El centro del tramo"], a: 0, w: "Si se hace al revés, el concreto resbala por la rampa y se separa la piedra de la mezcla." },
    { t: "mc", q: "Antes de vaciar una escalera se debe humedecer el encofrado para...", o: ["Evitar que la madera seca absorba el agua del concreto", "Facilitar el desencofrado de columnas", "Quitar el aceite sucio", "Aumentar la resistencia a 28 días"], a: 0 },
    { t: "mc", q: "Los escalones de una escalera están formados por...", o: ["Pasos y contrapasos", "Tramos y descansos", "Barandas y pasamanos", "Viguetas y complementos"], a: 0 },
    { t: "vf", q: "El vaciado de una escalera puede interrumpirse a mitad y continuar al día siguiente.", a: false, w: "El vaciado debe ser **continuo** hasta terminar toda la escalera, compactando con vibradora." },
    { t: "mc", q: "La construcción de los muros de corte es similar a la de...", o: ["Las columnas", "Las zapatas", "Las losas alivianadas", "Los pisos"], a: 0 },
    { t: "mc", q: "Se mide y paga por m² el elemento de hormigón armado:", o: ["Losa nervada (alivianada, encasetonada)", "Zapatas", "Columnas", "Muros"], a: 0 },
    { t: "match", q: "Relaciona cada elemento con su unidad de pago:", p: [["Zapatas", "m³"], ["Columnas", "m³ "], ["Vigas", "m³  "], ["Losa maciza", "m³   "], ["Losa nervada", "m²"], ["Escaleras", "m³    "], ["Muros", "m³     "]], x: ["ml"] },
    { t: "order", q: "Ordena el vaciado monolítico y correlativo recomendado:", s: ["Columnas", "Vigas", "Losas", "Escaleras"] },
    { t: "match", q: "Relaciona cada elemento con su detalle de encofrado:", p: [
      ["Columnas", "Crucetas cada 50 cm, 3 caras clavadas y chanfles a 45°"],
      ["Vigas", "Cabezales 2\"×2\" y bolillos cada 80 cm sobre cuñas"],
      ["Losa alivianada", "Sin encofrado; soleras 2\"×4\" cada 2 m en luces grandes"],
      ["Escaleras", "Tablas de 1\" sobre soleras 2\"×3\" y tableros de contrahuella"]
    ], x: ["Sin encofrado: se vacía sobre el suelo"] }
  ]
};
