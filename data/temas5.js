(window.TEMAS = window.TEMAS || {})["s5"] = {
  id: "s5",
  materia: "Ingeniería Sanitaria",
  etiqueta: "Sanitaria · Unidad 5",
  corto: "Tratamiento de aguas residuales",
  titulo: "Unidad 5: calidad de las aguas residuales (5.1), tipos de tratamiento (5.2) y fases: preliminar (5.3.1) y primario (5.3.2)",
  chips: ["5.1 Calidad", "5.2 Tipos de tratamiento", "5.3.1 Preliminar", "5.3.2 Primario"],
  cifras: [
    ["5 d · 20 °C", "ensayo de DBO₅ (en oscuridad)"],
    ["mg O₂/L", "unidad de DBO, DQO y oxígeno disuelto"],
    ["DQO ≥ DBO₅", "habitualmente, la química abarca más sustancias"],
    ["L = Q × C / 1000", "carga orgánica en kg/d (Q en m³/d, C en mg/L)"],
    ["5 log · 99,999 %", "remoción de coliformes necesaria"],
    ["1000 NMP/100 mL", "coliformes fecales: límite diario (RMCH, Anexo A-2)"],
    ["80 · 60 mg/L", "DBO y sólidos suspendidos totales: límites diarios (Anexo A-2)"],
    ["SS 60–70 % · DBO 25–40 %", "sedimentación primaria (BID)"],
    ["≥ 6 mm / < 6 mm", "abertura de rejillas / de tamices"],
    ["0.3 – 1.0 m/s", "velocidad de llegada al canal de rejillas"],
    ["6 – 19 mm", "tamaño del material triturado"],
    ["0.21 mm · Ss 2.65", "partícula de diseño del desarenador"],
    ["0.3 m/s · 45–90 s", "desarenador horizontal: velocidad y tiempo de retención"],
    ["10 – 15 min", "TRH del desarenador-desengrasador aireado (caudal medio)"],
    ["1 mg/L · 15 min", "preaireación: OD en el tanque y tiempo para controlar olores"],
    ["1.5 – 2.5 h", "tiempo de retención del sedimentador primario"],
    ["95 – 99 %", "agua en el lodo sin deshidratar"],
    ["20 – 30 cm", "espesor del lodo en lechos de secado"],
    ["850 – 950 °C", "incineración de lodos (≈ −90 % de volumen)"]
  ],

  secciones: [
    {
      id: "calidad1", titulo: "5.1 · Parámetros y sólidos", figs: ["d1", "d2"],
      idea: "**Aguas residuales**: aguas cuya calidad fue **modificada por el uso humano** y que contienen contaminantes **físicos, químicos o biológicos**.",
      partes: [
        { h: "Origen", tabla: { h: ["Origen", "Fuentes"], r: [
          ["**Doméstico**", "Duchas, inodoros, cocinas, lavanderías y limpieza urbana."],
          ["**No doméstico**", "Procesos industriales, comercios, hospitales y actividades agropecuarias."]
        ] } },
        { items: ["Cadena: **uso → generación → recolección → caracterización**."] },
        { h: "Parámetros de calidad", tabla: { h: ["Tipo", "Parámetros", "Describen"], r: [
          ["**Físicas**", "Color, olor, temperatura, turbidez y contenido de sólidos.", "El aspecto y la fracción particulada."],
          ["**Químicas**", "pH, DBO, DQO, oxígeno disuelto, nutrientes, sales y compuestos tóxicos.", "La composición química."],
          ["**Biológicas**", "Bacterias, virus, protozoos, helmintos e indicadores microbiológicos.", "Los microorganismos presentes."]
        ] } },
        { nota: "La calidad se **interpreta en conjunto**: ningún parámetro aislado describe por completo el agua. Flujo: **muestra → ensayos → diagnóstico**.", notaT: "Idea clave" },
        { h: "¿Por qué evaluar la calidad?", items: [
          "**Ríos y lagos**: consumo de oxígeno, **eutrofización** y pérdida de vida acuática.",
          "**Suelos y acuíferos**: acumulación de contaminantes y posible infiltración.",
          "**Salud pública**: exposición a patógenos y sustancias peligrosas.",
          "Resumen: **medir · comparar · prevenir · controlar**."
        ] },
        { h: "Sólidos", tabla: { h: ["Fracción", "Qué es"], r: [
          ["**Sólidos totales (ST)**", "Residuo que queda tras **evaporar** una muestra y **secar** el residuo según el método."],
          ["**Suspendidos (SST)**", "Fracción **retenida por un filtro**; puede sedimentar o permanecer dispersa."],
          ["**Disueltos (SDT)**", "Fracción que **atraviesa el filtro**; incluye sales y compuestos disueltos."]
        ] } },
        { items: ["Otras clasificaciones: **sedimentables** y **volátiles / fijos**.", "**ST ≈ SST + SDT** (según el método de fraccionamiento)."] }
      ]
    },
    {
      id: "calidad2", titulo: "5.1 · DBO, DQO y oxígeno disuelto", figs: [],
      idea: "**DBO** mide lo **biodegradable** (microorganismos, 5 días); **DQO** mide lo **químicamente oxidable** (dicromato, horas). Ambas en **mg O₂/L**.",
      partes: [
        { h: "DBO: demanda bioquímica de oxígeno", items: [
          "**Oxígeno consumido por microorganismos** al degradar materia orgánica **biodegradable** en condiciones controladas.",
          "**DBO₅**: ensayo de **5 días a 20 °C, en oscuridad**; se mide la **disminución del oxígeno disuelto**.",
          "Unidad: **mg O₂/L**. **DBO alta → mayor potencial de agotamiento de oxígeno.**"
        ] },
        { lead: "**DBO₅ = (OD_i − OD_f) / P**, con **OD_i** oxígeno inicial, **OD_f** oxígeno final y **P** la fracción de muestra en la botella." },
        { h: "DQO: demanda química de oxígeno", items: [
          "**Oxígeno equivalente** requerido para **oxidar químicamente** las sustancias oxidables de la muestra.",
          "Fundamento: oxidación con **dicromato en medio ácido** y digestión controlada; lectura por **titulación** o método **colorimétrico**.",
          "Unidad **mg O₂/L**. Flujo: muestra → digestión → lectura.",
          "Control de reactivos, **blanco**, calibración y seguridad química.",
          "Suele obtenerse **en horas**; **no identifica** qué compuesto está presente."
        ] },
        { h: "DBO₅ y DQO: lectura complementaria", tabla: { h: ["Criterio", "DBO₅", "DQO"], r: [
          ["Qué representa", "Materia **biodegradable**", "Materia **químicamente oxidable**"],
          ["Método", "**Biológico** / incubación", "**Químico** / digestión"],
          ["Tiempo típico", "**5 días**", "**Horas**"],
          ["Uso principal", "Biodegradabilidad y control biológico", "Control rápido de carga oxidable"],
          ["Unidad", "mg O₂/L", "mg O₂/L"]
        ] } },
        { items: [
          "**DQO ≥ DBO₅**, habitualmente: la oxidación química abarca más sustancias que la biodegradación medida.",
          "**DBO₅ / DQO**: relación **orientativa** de biodegradabilidad; depende del tipo de efluente."
        ] },
        { h: "Oxígeno disuelto (OD)", items: [
          "**Oxígeno molecular disponible** en el agua para organismos y procesos aerobios.",
          "Medición: **sonda electroquímica u óptica**; también métodos volumétricos como **Winkler**.",
          "Lo reducen: **materia orgánica, respiración, temperatura elevada y escasa reaeración**.",
          "**OD bajo → estrés → mortandad.** Unidad habitual: mg O₂/L.",
          "Interpretar considerando **temperatura, altitud y salinidad**."
        ] }
      ]
    },
    {
      id: "calidad3", titulo: "5.1 · Carga, tóxicos y otros parámetros", figs: [],
      idea: "La **carga orgánica** se calcula con **L = Q × C**; además hay **tóxicos**, **nutrientes**, **microbiología** y parámetros físicos de campo.",
      partes: [
        { h: "Carga biológica u orgánica", items: [
          "Cantidad de materia orgánica **biodegradable** que ingresa al sistema **por unidad de tiempo**.",
          "Actúan **microorganismos** que usan el sustrato y el oxígeno en procesos aerobios. La **DBO₅** ayuda a estimar la carga biodegradable."
        ] },
        { lead: "**L = Q × C** → **L (kg/d) = Q (m³/d) × C (mg/L) / 1000**. L: carga (kg/d) · Q: caudal (m³/d) · C: concentración (mg/L)." },
        { nota: "Ejemplo **propio, no del apunte**, para practicar: Q = 500 m³/d y C = 250 mg/L → L = 500 × 250 / 1000 = **125 kg/d**.", notaT: "Práctica" },
        { h: "Productos tóxicos", tabla: { h: ["Tóxico", "Problema"], r: [
          ["**Metales pesados** (Hg, Cd, Pb, Cr)", "Toxicidad y **bioacumulación**."],
          ["**Plaguicidas**", "**Persistencia** y efectos sobre organismos no objetivo."],
          ["**Hidrocarburos**", "Toxicidad, **películas superficiales** y contaminación del sedimento."],
          ["**Detergentes**", "**Tensioactivos**: algunos afectan membranas y generan **espuma**."],
          ["**Químicos industriales**", "Solventes, cianuros, fenoles y otros compuestos específicos."]
        ] } },
        { items: ["Control: **identificar la fuente**, **caracterizar** compuestos específicos y **evitar diluir** como sustituto del tratamiento."] },
        { h: "Otros parámetros físicos y químicos", tabla: { h: ["Parámetro", "Qué indica"], r: [
          ["**pH**", "Acidez / alcalinidad; condiciona la actividad biológica."],
          ["**Temperatura**", "Afecta la solubilidad del O₂ y la velocidad de reacción."],
          ["**Turbidez**", "Dispersión de luz por partículas; indicador indirecto."],
          ["**Conductividad**", "Estimación de iones disueltos (µS/cm o mS/cm)."],
          ["**Color**", "Puede indicar materia orgánica, metales o procesos industriales."]
        ] } },
        { items: ["Se recomienda **registrar temperatura y pH en campo**; conservar y analizar las demás variables según el método."] },
        { h: "Nutrientes y microbiología", tabla: { h: ["Parámetro", "Importancia"], r: [
          ["**Nitrógeno** (amonio, nitrito, nitrato, total)", "Puede favorecer **eutrofización** y demanda de oxígeno."],
          ["**Fósforo** (ortofosfato, total)", "Nutriente clave en **proliferaciones algales**."],
          ["**Aceites y grasas**", "Forman películas, **obstruyen conducciones** y dificultan la transferencia de oxígeno."],
          ["**Coliformes fecales**", "Indicadores de **contaminación fecal**; **no todos son patógenos**."],
          ["**Patógenos**", "Bacterias, virus, protozoos y helmintos; riesgo por exposición."]
        ] } },
        { h: "Caso didáctico (datos hipotéticos)", tabla: { h: ["Parámetro", "Unidad", "Resultado", "Lectura orientativa"], r: [
          ["pH", "—", "7,4", "Cercano a neutro."],
          ["DBO₅", "mg O₂/L", "180", "Carga biodegradable apreciable."],
          ["DQO", "mg O₂/L", "320", "Carga oxidable mayor que la DBO₅."],
          ["SST", "mg/L", "120", "Presencia importante de partículas."],
          ["OD", "mg O₂/L", "1,2", "Oxígeno **bajo** en la muestra."]
        ] } },
        { items: ["**DQO / DBO₅ ≈ 1,78** → relación orientativa; requiere el contexto del efluente. Son valores **hipotéticos**, no límites normativos."] },
        { h: "Conclusiones de 5.1", pasos: ["**Caracterizar**: parámetros físicos, químicos y biológicos describen dimensiones distintas.", "**Interpretar**: DBO, DQO, sólidos y OD se **complementan**.", "**Prevenir**: identificar nutrientes, tóxicos y patógenos protege ecosistemas y salud."] }
      ]
    },
    {
      id: "tipos1", titulo: "5.2 · Generalidades y niveles", figs: ["d3"],
      idea: "Tratar el agua residual es un **proceso físico, químico y/o biológico** que modifica sus propiedades; se hace **por etapas**: preliminar, primario, secundario y terciario.",
      partes: [
        { h: "¿Cuánto hay que limpiar?", items: [
          "Límite diario de descarga: **1000 NMP/100 mL** de coliformes (RMCH, Anexo A-2).",
          "Se necesita una remoción de **99,999 %**, es decir **5 unidades logarítmicas**.",
          "Se combinan procesos **físicos, químicos y biológicos** en etapas sucesivas."
        ] },
        { h: "Definición y objetivos", lead: "**RMCH, Art. 3**: «Proceso físico, químico y/o biológico que modifica alguna propiedad física, química y/o biológica del agua residual cruda».", items: [
          "Reducir la **carga orgánica (DBO)**.",
          "Eliminar **sólidos en suspensión**.",
          "Reducir los **microorganismos patógenos**.",
          "Retirar **nitrógeno y fósforo** si el receptor es sensible.",
          "La meta la fija la **calidad requerida para descargar en el cuerpo receptor**."
        ] },
        { h: "Operaciones y procesos unitarios", tabla: { h: ["", "Base", "Ejemplos"], r: [
          ["**Operaciones unitarias**", "**Principios físicos**", "Desbaste, cribado, sedimentación, flotación y filtración → **tratamiento físico**."],
          ["**Procesos unitarios**", "**Reacciones químicas** o **biológicas** (con participación mayoritaria de bacterias)", "Precipitación, desinfección → tratamiento **químico y biológico**."]
        ] } },
        { h: "Niveles y eficiencias (BID)", tabla: { h: ["Nivel", "Naturaleza", "¿Cumple límites usuales?", "Eficiencia"], r: [
          ["**Preliminar**", "Físico", "No", "Sin remoción importante de SS ni DBO"],
          ["**Primario**", "Físico", "No", "SS **60–70 %**, DBO **25–40 %**"],
          ["**Secundario**", "**Biológico**", "Usualmente sí", "DBO **60–99 %**, SS **65–95 %**"],
          ["**Terciario**", "Físico, químico o biológico", "Usualmente sí", "Nutrientes y patógenos"]
        ] } },
        { nota: "Es una **referencia general del BID**, no la verificación de los límites bolivianos: eso exige conocer la **carga afluente** y la **eficiencia real** de la planta.", notaT: "Ojo" }
      ]
    },
    {
      id: "tipos2", titulo: "5.2 · Tratamiento físico y químico", figs: [],
      idea: "**Físico**: remueve sólidos (no la materia orgánica disuelta). **Químico**: actúa sobre coloides, pH, disueltos y patógenos.",
      partes: [
        { h: "Tratamiento físico: 6 operaciones", tabla: { h: ["Operación", "Qué hace"], r: [
          ["**Desbaste y cribado**", "Retiene cuerpos grandes (trapos, maderas, plásticos). Rejas > 25 mm; tamices 6 mm."],
          ["**Dilaceración**", "Tritura los cuerpos grandes con cuchillas rotatorias; puede sustituir al desbaste."],
          ["**Desarenado**", "Retira arenas y gravas, que sedimentan más rápido que los sólidos orgánicos."],
          ["**Sedimentación**", "Separa partículas por diferencia de peso específico. **Base del tratamiento primario.**"],
          ["**Flotación**", "Burbujas de aire forman una capa de espuma que se retira mecánicamente."],
          ["**Filtración**", "Retiene sólidos en un medio poroso (arena, antracita); filtros de gravedad o de presión."]
        ] } },
        { items: ["Remueve **sólidos gruesos, arenas, sedimentables, grasas y aceites**. **No reduce de forma importante la materia orgánica disuelta.**"] },
        { h: "Sedimentación primaria", items: [
          "**Decantadores circulares o rectangulares**; el **lodo primario** se acumula en el fondo y la **nata** (aceites, grasas) se retira de la superficie.",
          "Remueve **60–70 %** de los sólidos en suspensión y **25–40 %** de la DBO (fracción particulada). Reduce la carga orgánica que llega al biológico.",
          "Otras fuentes dan rangos más amplios (EHU: SS 50–70 %); depende del diseño y la operación."
        ] },
        { h: "Coagulación, floculación y pH", items: [
          "**Floculación**: unión de partículas en flóculos. **Coagulación**: floculación provocada por **coagulantes químicos**.",
          "Coagulantes: **alumbre, aluminato sódico, sulfato ferroso**; **polímeros** como coadyuvantes.",
          "El **pH condiciona la dosis**: Al, mínima solubilidad cerca de **pH 7**; Fe, entre **7 y 10**.",
          "Se usa con **coloides**: partículas tan pequeñas que por sedimentación simple necesitarían tiempos de retención muy altos."
        ] },
        { h: "Neutralización", items: [
          "**Aguas ácidas**: lechada de cal, carbonato sódico o sosa cáustica.",
          "**Aguas alcalinas**: ácido sulfúrico o clorhídrico.",
          "Va **antes** de los procesos químicos o biológicos, que dependen del pH."
        ] },
        { h: "Desinfección y precipitación química", items: [
          "Agentes **químicos**: **cloro (el más usado)** y ozono. **Físicos**: calor y radiación UV-C (costosos).",
          "Antes de desinfectar: eficacia sobre bacterias, virus, protozoarios y helmintos; **subproductos tóxicos**, p. ej. **trihalometanos**.",
          "**Precipitación química**: convierte sustancias disueltas en **sólidos separables** (p. ej. fósforo).",
          "La remoción de **N y P es terciaria** y está poco implementada en las PTAR de América Latina."
        ] }
      ]
    },
    {
      id: "tipos3", titulo: "5.2 · Biológico, comparativo y RMCH", figs: ["d4"],
      idea: "En el **biológico** las bacterias usan la materia orgánica como **sustrato**: **aeróbico** (con oxígeno) o **anaeróbico** (sin oxígeno).",
      partes: [
        { h: "Aeróbico vs anaeróbico", tabla: { h: ["", "Aeróbico", "Anaeróbico"], r: [
          ["La DQO va a…", "**Lodo y CO₂**", "**Biogás**"],
          ["Lodo", "**Más**", "**Menos**, estabilizado"],
          ["Energía", "**Requiere aireación**", "**Nula** en el proceso"],
          ["Limitación", "—", "Olores (H₂S), **poca remoción de N y P**"]
        ] } },
        { items: [
          "**Aeróbico**: lodo 50–60 %, CO₂ 40–50 %, líquido 5–10 %.",
          "**Anaeróbico**: biogás 70–90 %, lodo 5–15 %, efluente 10–30 %."
        ] },
        { h: "Lodos activados y otros sistemas", tabla: { h: ["Sistema", "Descripción"], r: [
          ["**Lodos activados**", "La **aireación** forma **flóculos bacterianos**; el flóculo sedimenta en un **decantador secundario**; parte del lodo **vuelve al tanque** y el exceso se **purga**. Aeróbico; va con tratamiento primario. **85–95 % de DBO** (convencional)."],
          ["**Filtros percoladores**", "**Película microbiana** sobre un relleno; el agua se **rocía** encima."],
          ["**Biodiscos**", "**Discos semisumergidos** que alternan agua y aire."],
          ["**Lagunas**", "**Estanques poco profundos**; **no requieren primario**."],
          ["**Reactor UASB**", "**Anaeróbico**, compacto, **produce biogás**."]
        ] } },
        { h: "Eficiencias típicas de remoción de DBO", items: [
          "**UASB solo**: 60–75 % (con postratamiento sube a 77–95 %).",
          "**Lodos activados convencional**: 85–95 %. **Aireación prolongada**: 93–98 %.",
          "**Laguna facultativa**: 75–85 %. En coliformes, solo UASB + laguna de pulimento llega a 3–5 log.",
          "Son rangos típicos: dependen del diseño y la operación."
        ] },
        { h: "Los tres tipos, lado a lado", tabla: { h: ["", "Físico", "Químico", "Biológico"], r: [
          ["Base", "Fuerzas físicas (operaciones unitarias)", "Reactivos y reacciones (procesos unitarios)", "Microorganismos (procesos unitarios)"],
          ["Procesos", "Desbaste, cribado, desarenado, sedimentación, flotación, filtración", "Coagulación-floculación, neutralización, precipitación, desinfección", "Lodos activados, filtros percoladores, lagunas, UASB, biodiscos"],
          ["Remueve", "Sólidos gruesos, arenas, sedimentables, grasas", "Coloides, pH extremo, disueltos, patógenos", "Materia orgánica disuelta y coloidal (DBO)"],
          ["Ubicación", "Preliminar y primario", "Primario complementario, terciario y desinfección", "Secundario"],
          ["Limitación", "No reduce la materia orgánica disuelta", "Reactivos y subproductos (trihalometanos)", "Control de oxígeno, nutrientes y lodos"]
        ] } },
        { h: "Marco normativo en Bolivia: RMCH (DS 24176)", tabla: { h: ["Límite de descarga (Anexo A-2, valor diario)", "Valor"], r: [
          ["**DBO**", "**80 mg/L**"], ["**Sólidos suspendidos totales**", "**60 mg/L**"],
          ["**Coliformes fecales**", "**1000 NMP/100 mL**"], ["DQO (industrial / hidrocarburos)", "**250 / 300 mg/L**"]
        ] } },
        { items: [
          "**Art. 3**: define el tratamiento. **Art. 4**: clases **A, B, C y D** del cuerpo receptor.",
          "**Art. 35**: la descarga, ya diluida, no puede exceder el **Cuadro A-1**. **Arts. 54-56**: el sistema de tratamiento es responsabilidad de su **representante legal**.",
          "No hay norma específica para **operar PTAR** ni para el **reúso**."
        ] }
      ]
    },
    {
      id: "prelim1", titulo: "5.3.1 · Preliminar: objetivos, rejillas y tamices", figs: ["d5", "d6"],
      idea: "**Primera etapa de una PTAR**: separa por medios **físicos y mecánicos** los materiales que pueden dañar equipos u obstruir el sistema. **No elimina la materia orgánica disuelta.**",
      partes: [
        { h: "Qué es y dónde va", items: [
          "Retira **sólidos gruesos, arena, grasas y aceites** con procesos físicos: **cribado, sedimentación y flotación**.",
          "Ubicación: a la **llegada del agua cruda**, antes del tratamiento primario.",
          "Etapas de una PTAR: **1 preliminar** → **2 primario** (sólidos sedimentables y flotantes) → **3 secundario** (materia orgánica, biológico) → **4 terciario y desinfección** (nutrientes y patógenos)."
        ] },
        { h: "Objetivos e importancia", tabla: { h: ["Objetivo", "Para qué"], r: [
          ["**Proteger equipos**", "Evita la **abrasión y los atascos** en bombas, válvulas y tuberías."],
          ["**Evitar depósitos y olores**", "Impide que arena y sólidos se acumulen en canales, tanques y digestores."],
          ["**Mejorar los procesos**", "Hace más eficaces y confiables las etapas siguientes."],
          ["**Controlar flotantes**", "Retira grasas y espumas y evita que el agua llegue **séptica**."]
        ] } },
        { items: ["Si el pretratamiento falla, **se afecta toda la planta**."] },
        { h: "Rejillas (cribado grueso)", items: [
          "**Concepto**: conjunto de **barras paralelas e inclinadas**, en el canal de llegada, que retienen por **cribado** los sólidos gruesos.",
          "Retienen: trapos, plásticos, papel y envases, maderas y ramas.",
          "Funcionamiento: el agua llega al canal con **velocidad controlada (0.3–1.0 m/s)**; los sólidos **mayores que la separación entre barras** quedan retenidos; un **rastrillo manual o mecánico** los sube a una **plataforma de escurrido**."
        ] },
        { tabla: { h: ["Clasificación", "Detalle"], r: [
          ["**Gruesas**", "Abertura **≥ 6 mm**; incluye rejas de **38–150 mm** para troncos y objetos grandes."],
          ["**Finas**", "Abertura **menor de 6 mm**: es el campo de los **tamices**."]
        ] } },
        { tabla: { h: ["Por limpieza", "Manual", "Mecánica"], r: [
          ["Separación libre", "**25–50 mm**", "**15–75 mm**"],
          ["Ángulo con la vertical", "**30–45°**", "**0–30°**"],
          ["Velocidad de aproximación", "**0.3–0.6 m/s**", "**0.6–1.0 m/s**"],
          ["Uso típico", "Plantas pequeñas y by-pass", "Instalaciones nuevas"]
        ] } },
        { h: "Tamices (cribado fino)", items: [
          "**Mallas o placas perforadas de abertura menor de 6 mm** que, **después de las rejillas**, retienen sólidos finos: plásticos pequeños, fibras y cabellos.",
          "Se descargan **por gravedad, por giro del tambor o por láminas móviles**.",
          "Cribado fino: < 6 mm; **muy fino: 0.2–1.5 mm** (EPA, 2003)."
        ] },
        { tabla: { h: ["Tipo", "Luz", "Ventaja", "Limitación"], r: [
          ["**Estático** (autolimpiante)", "0.5–2.0 mm", "Sin partes móviles ni consumo de energía", "**Alta pérdida de carga**"],
          ["**Rotativo** (de tambor)", "0.5–1.5 mm", "Retira los sólidos de forma **continua** al girar", "Requiere **motor** y consumo de energía"],
          ["**De escalera** (superficie móvil)", "1–4 mm", "Eleva y descarga el residuo de forma automática", "Más piezas móviles y mantenimiento"]
        ] } }
      ]
    },
    {
      id: "prelim2", titulo: "5.3.1 · Trituradores, desarenadores, desengrasadores y aireación", figs: ["d7"],
      idea: "**Primero lo grande** (cribado), **luego lo pesado** (sedimentación: arena) **y lo liviano** (flotación: grasas).",
      partes: [
        { h: "Trituradores", items: [
          "Equipos que **cortan y desmenuzan** los sólidos gruesos para que sigan con el agua. **No los eliminan: solo reducen su tamaño.**",
          "**Conminutor**: tambor ranurado giratorio con cuchillas. **Molino (dilacerador)**: dos ejes con cuchillas que giran en sentido contrario.",
          "El material triturado (**6–19 mm**) sigue hacia otras unidades.",
          "Aplicación: plantas pequeñas (**< 5 MGD ≈ 220 L/s**), siempre con **rejilla gruesa previa** y **canal de by-pass automático**.",
          "Ventajas: no generan residuos de cribado; evitan manipular y transportar basura cribada.",
          "Limitaciones: **no eliminan sólidos (aumentan SST y DBO aguas abajo)**; los trapos triturados pueden volver a unirse (plásticos en digestores, trapos en difusores); desgaste de cuchillas y rodamientos.",
          "**Hoy se prefiere retirar los sólidos por cribado antes que triturarlos.**"
        ] },
        { h: "Desarenadores", items: [
          "Unidades que **reducen la velocidad del agua** para que **sedimente la arena**, mientras la materia orgánica sigue en suspensión.",
          "Retienen arena y grava, cenizas, fragmentos de hueso, cáscaras y semillas.",
          "**Partícula de diseño**: arena de **0.21 mm** con gravedad específica **2.65**.",
          "Con velocidad horizontal **0.3 m/s** sedimenta la arena, **no la materia orgánica**.",
          "La arena se **extrae del fondo** (manual, bomba o airlift) y se **lava**."
        ] },
        { tabla: { h: ["Tipo", "Característica", "Tiempo de retención", "Ventaja / limitación"], r: [
          ["**Flujo horizontal** (canal)", "Velocidad **0.3 m/s**, controlada con **vertedero proporcional** o **canal Parshall**", "**45–90 s**", "Construcción sencilla / difícil mantener la velocidad si el caudal varía"],
          ["**Aireado**", "El **aire inyectado** en un costado genera un **flujo en espiral**", "**2–5 min** (caudal pico)", "Eficiencia estable, aporta preaireación / más energía, puede liberar olores y COV"],
          ["**De vórtice**", "**Entrada tangencial**: el vórtice lleva la arena a una **tolva central**", "**≈ 30 s** (caudal medio)", "Poca área y baja pérdida de carga / equipos patentados; las paletas acumulan trapos"]
        ] } },
        { h: "Desengrasadores", items: [
          "Separan por **flotación** las **grasas, aceites y espumas** (más ligeros que el agua) antes de los tratamientos posteriores.",
          "Funcionamiento: **zona tranquila** de baja velocidad → el **aire insuflado desemulsiona** las grasas y acelera su ascenso → **rasquetas superficiales** las arrastran a un vertedero y a un **concentrador**.",
          "Tipos: **estático** (sin aire; la grasa sube por diferencia de densidad) y **aireado** (suele combinarse con el desarenador).",
          "**Desarenador-desengrasador aireado**: un solo recinto, **la grasa sube y la arena baja**. **TRH 10–15 min** (caudal medio); carga hidráulica **< 35 m³/m²·h** a caudal máximo.",
          "Sin desengrasado: natas, obstrucciones y problemas en el tratamiento biológico."
        ] },
        { h: "Aireación preliminar", items: [
          "**Inyección de aire** al agua residual **cruda**, antes del primario, para **mantenerla fresca** (con oxígeno) y mejorar su tratabilidad.",
          "Actúa sobre la **septicidad**, los **malos olores**, la separación de grasas y la floculación.",
          "Difusores o aireadores introducen aire; el **OD ≈ 1 mg/L** evita condiciones anaerobias o sépticas.",
          "**15 min** bastan para controlar olores (USDA FS, 1979); **OD de 1.0 mg/L** en el tanque (MECP, 2016).",
          "Limitaciones: consumo de energía y posible liberación de olores y COV; **se justifica solo en casos especiales**. **No busca degradar la materia orgánica.**"
        ] },
        { h: "Comparación de las unidades", tabla: { h: ["Unidad", "Mecanismo", "Qué retiene o elimina", "Dato clave"], r: [
          ["1 · Rejillas", "Cribado grueso", "Trapos, plásticos, maderas", "15–75 mm (limpieza mecánica)"],
          ["2 · Tamices", "Cribado fino", "Fibras, cabellos, sólidos finos", "Luz de 0.5–4 mm"],
          ["3 · Trituradores", "Corte y desmenuzado", "**No elimina**: reduce el tamaño", "Salida 6–19 mm"],
          ["4 · Desarenadores", "Sedimentación", "Arena, grava, partículas pesadas", "0.21 mm; Ss = 2.65"],
          ["5 · Desengrasadores", "Flotación", "Grasas, aceites, espumas", "TRH 10–15 min (aireado)"],
          ["6 · Aireación prel.", "Transferencia de aire", "Previene septicidad y olores", "15 min; OD 1 mg/L"]
        ] } },
        { h: "Residuos y su manejo", tabla: { h: ["Residuo", "Manejo"], r: [
          ["**Cribado** (rejillas y tamices)", "Fuente importante de **olores e insectos**. **Lavado y compactación**; retiro **diario o más frecuente** a disposición final."],
          ["**Arenas**", "Extracción desde la tolva con **bomba o airlift**; **lavado** para retirar la materia orgánica (grado según el destino final)."],
          ["**Grasas**", "**Rasquetas** superficiales las llevan a un vertedero y a un **concentrador**; se manejan **separadas** de la arena y del cribado."]
        ] } },
        { items: ["Hay que **planificar dónde terminan los residuos antes de construir**: es una consideración crítica del diseño."] },
        { h: "Diferencias clave: no confundir", items: [
          "**Rejilla vs tamiz**: mismo principio (cribado); cambia la abertura (**≥ 6 mm** frente a **< 6 mm**).",
          "**Triturador ≠ remoción**: reduce el tamaño pero los sólidos siguen en el agua.",
          "**Desarenador ≠ tamiz**: la arena se separa por **sedimentación**, no por cribado.",
          "**Desarenador ≠ sedimentador primario**: con 0.3 m/s sedimenta la arena, **no** la materia orgánica.",
          "**Desarenador vs desengrasador**: uno separa lo que **baja** (arena); el otro, lo que **sube** (grasas).",
          "**Preaireación ≠ tratamiento biológico**: acondiciona el agua; no busca degradar materia orgánica."
        ] },
        { h: "Conclusiones de 5.3.1", pasos: [
          "El preliminar **protege toda la PTAR**.",
          "Rejillas y tamices actúan por **cribado**; su diferencia es la **abertura**.",
          "Los trituradores **solo reducen el tamaño** y hoy se usan poco en diseños nuevos.",
          "Desarenadores y desengrasadores separan **por gravedad**: la arena sedimenta y la grasa flota.",
          "La aireación preliminar mantiene el agua **fresca** y controla olores.",
          "Cada unidad genera **residuos** cuya disposición se planifica desde el diseño."
        ] }
      ]
    },
    {
      id: "primario", titulo: "5.3.2 · Tratamiento primario y lodos", figs: ["d8", "d9", "d10"],
      idea: "El tratamiento primario **elimina sólidos sedimentables y flotantes** antes del tratamiento biológico. **La gravedad hace el primer trabajo.**",
      partes: [
        { h: "Contenido", items: ["**Sedimentación** · **Precipitación química** · **Manejo de lodos** · **Lechos de secado** · **Incineración** · **Disposición final**."] },
        { h: "Sedimentación", items: [
          "Entrada → **sedimentación** → salida. Los sólidos más densos **descienden** en el tanque decantador; el **agua clarificada rebosa** y el **lodo** se concentra en el fondo para su extracción."
        ] },
        { tabla: { h: ["", "Rectangular", "Circular"], r: [
          ["Flujo", "**Longitudinal**", "**Alimentación central**"],
          ["Característica", "**Fácil ampliación**", "**Barrido radial**"]
        ] } },
        { items: [
          "**Tiempo de retención**: **1.5–2.5 h**.",
          "**Carga superficial** (m³/m²·d): **criterio hidráulico clave**.",
          "Remoción típica de sólidos suspendidos: **50–70 %** (en 5.2: 60–70 %). Reducción orientativa de DBO: **25–40 %**."
        ] },
        { h: "Precipitación química", items: [
          "Proceso: **mezcla rápida → floculación → sedimentación**: de partículas finas a flóculos separables.",
          "Coagulantes: **sulfato de aluminio, cloruro férrico y cal**. Los **floculantes** favorecen la aglomeración y aceleran la separación.",
          "**Ventaja**: mayor eficiencia que la sedimentación simple. Remueve **fósforo, metales y turbidez (NTU)**.",
          "**Condiciones**: la **dosis óptima** se define con **ensayos** y cambia con la calidad del agua; dosificación precisa, **costo de reactivos** y **mayor producción de lodos**."
        ] },
        { h: "Manejo de lodos", items: [
          "**Residuo concentrado** del proceso; contiene **95–99 % de agua** (sin deshidratar). Proviene del fondo de los sedimentadores primarios.",
          "Contiene agua, **materia orgánica**, sólidos minerales, grasas y microorganismos; su **inestabilidad** exige tratamiento rápido."
        ] },
        { h: "Del lodo líquido a una salida manejable", pasos: [
          "**Espesamiento**.",
          "**Estabilización**.",
          "**Digestión**.",
          "**Acondicionamiento**.",
          "**Deshidratación**.",
          "**Evacuación**: camión cisterna, contenedor o tubería → disposición o valorización."
        ] },
        { h: "Lechos de secado", items: [
          "**Drenar abajo, evaporar arriba**: el agua sale por **drenaje** y **evaporación** hasta obtener una **torta manipulable**. Capas: lodo, arena, grava y drenaje.",
          "**Espesor uniforme** de aplicación: **20–30 cm**. **Tiempo de secado** (días): depende del clima y la carga; **sol, viento y lluvia** gobiernan el rendimiento.",
          "Ventajas: **bajo costo + simplicidad**. Limitaciones: **más superficie + posibles olores**."
        ] },
        { h: "Incineración", items: [
          "Lodo seco → horno → ceniza. **850–950 °C** en hornos de **lecho fluidizado** o de **hogares múltiples**.",
          "**Reduce el volumen ≈ 90 %** (reducción muy alta), pero queda la **ceniza** (aún debe gestionarse) y hay **consumo de energía** y costo operativo.",
          "**Control de emisiones**: lavadores de gases, filtros de partículas y monitoreo continuo."
        ] },
        { h: "Disposición final", items: [
          "El suelo como **destino o recurso**: **aplicación agrícola**, **relleno sanitario** y **recuperación de suelos degradados**."
        ] },
        { tabla: { h: ["Criterio", "Qué se considera"], r: [
          ["**Sitio**", "Pendiente, distancia y uso futuro."],
          ["**Agua**", "Proteger acuíferos y escorrentías."],
          ["**Salud**", "Olores, patógenos y vectores."],
          ["**Metales**", "Límites y monitoreo acumulativo."],
          ["**Norma**", "Permisos, trazabilidad y control."],
          ["**Beneficio**", "Materia orgánica y nutrientes."]
        ] } },
        { items: ["Cierre del tema: **sedimentar · precipitar · manejar lodos · secar · incinerar · disponer** («tratar es separar, estabilizar y decidir bien»)."] }
      ]
    }
  ],

  notas: [
    "El material de esta unidad son **presentaciones de exposición de grupos** (5.1, 5.2, 5.3.1 del Grupo 03 y 5.3.2), basadas en bibliografía técnica (BID, EPA, Metcalf & Eddy, Conagua, RMCH). Si el docente tiene su propio material oficial, **manda ese**.",
    "**Sedimentación primaria**: en 5.2 la remoción de SS es **60–70 %** (BID); en 5.3.2 es **50–70 %** (y 5.2 cita a EHU con 50–70 %). Aprende ambos rangos y dilo con la fuente.",
    "En 5.2 aparece «**Rejas > 25 mm; tamices 6 mm**» (generalidad); en 5.3.1 la **separación libre** es 25–50 mm (manual) o 15–75 mm (mecánica) y gruesas = abertura **≥ 6 mm**. Son contextos distintos.",
    "El **Anexo A-2 del RMCH** lleva el encabezado «propuesta» en la presentación; no hay norma específica para operar PTAR ni para reúso.",
    "La cifra inicial de **coliformes en agua residual municipal típica** no se lee bien en el apunte (falta el exponente): no la memorices.",
    "Los **ejemplos numéricos** de carga orgánica (500 m³/d × 250 mg/L) y de DBO₅ en las preguntas son **míos, para practicar las fórmulas**; el caso de 5.1 es hipotético, según el propio apunte."
  ],

  diagramas: [
    {
      id: "d1", titulo: "Parámetros de calidad del agua residual", corto: "Parámetros", vb: [0, 0, 520, 320],
      desc: "Clasifica los parámetros de calidad: físicos, químicos y biológicos.",
      blanks: { f: "Color, olor, temperatura, turbidez y sólidos", q: "pH, DBO, DQO, OD, nutrientes, sales y tóxicos", b: "Bacterias, virus, protozoos y helmintos" },
      x: ["Caudal y pendiente", "Dureza y alcalinidad solamente", "Hongos y algas únicamente"],
      nota: "**Físicas** (aspecto y partículas) · **Químicas** (pH, DBO, DQO, OD, nutrientes, sales, tóxicos) · **Biológicas** (microorganismos). Se interpretan **en conjunto**.",
      svg: S => [
        S.t(20, 40, "PARÁMETROS FÍSICOS", "hd l"), S.t(20, 72, "@f:l"),
        S.t(20, 140, "PARÁMETROS QUÍMICOS", "hd l"), S.t(20, 172, "@q:l"),
        S.t(20, 240, "PARÁMETROS BIOLÓGICOS", "hd l"), S.t(20, 272, "@b:l"),
        S.l(20, 100, 500, 100, "da"), S.l(20, 200, 500, 200, "da")
      ].join("")
    },
    {
      id: "d2", titulo: "Fracciones de sólidos", corto: "Sólidos", vb: [0, 0, 520, 300],
      desc: "Completa el esquema de sólidos totales y sus fracciones.",
      blanks: { st: "Sólidos totales (ST)", sst: "Suspendidos (SST)", sdt: "Disueltos (SDT)", a: "Retenidos por el filtro", b: "Atraviesan el filtro" },
      x: ["Sedimentables (SS)", "Retenidos por la evaporación", "Volátiles"],
      nota: "**ST ≈ SST + SDT**. Los **SST** quedan retenidos en el filtro; los **SDT** lo atraviesan (sales y compuestos disueltos).",
      svg: S => [
        S.t(260, 40, "@st"),
        S.l(260, 54, 140, 108), S.l(260, 54, 380, 108),
        S.t(140, 125, "@sst"), S.t(380, 125, "@sdt"),
        S.l(140, 139, 140, 178), S.arrow(140, 180, "d"), S.l(380, 139, 380, 178), S.arrow(380, 180, "d"),
        S.t(140, 200, "@a"), S.t(380, 200, "@b"),
        S.t(260, 262, "ST ≈ SST + SDT  (según el método de fraccionamiento)", "sm mt")
      ].join("")
    },
    {
      id: "d3", titulo: "Tren de tratamiento y niveles", corto: "Tren de tratamiento", vb: [0, 0, 520, 320],
      desc: "Para cada etapa, indica su naturaleza y qué remueve (BID).",
      blanks: { n1: "Físico", n2: "Físico", n3: "Biológico", n4: "Variable", r1: "Sólidos gruesos, arenas y grasas", r2: "SS 60–70 %, DBO 25–40 %", r3: "DBO 60–99 %, SS 65–95 %", r4: "Nutrientes y patógenos" },
      x: ["Químico", "DBO 10–20 %", "Solo nitrógeno"],
      nota: "**Preliminar y primario: físicos** · **Secundario: biológico** · **Terciario: variable** (físico, químico o biológico). Solo secundario y terciario cumplen usualmente los límites de vertido.",
      svg: S => [
        S.t(20, 18, "ETAPA", "hd l"), S.t(118, 18, "NATURALEZA", "hd l"), S.t(250, 18, "QUÉ REMUEVE", "hd l"),
        S.t(20, 58, "Preliminar", "l"), S.t(118, 58, "@n1:l"), S.t(212, 58, "@r1:l"),
        S.t(20, 126, "Primario", "l"), S.t(118, 126, "@n2:l"), S.t(212, 126, "@r2:l"),
        S.t(20, 194, "Secundario", "l"), S.t(118, 194, "@n3:l"), S.t(212, 194, "@r3:l"),
        S.t(20, 262, "Terciario", "l"), S.t(118, 262, "@n4:l"), S.t(212, 262, "@r4:l"),
        [90, 158, 226].map(y => S.l(20, y, 500, y, "da")).join("")
      ].join("")
    },
    {
      id: "d4", titulo: "Aeróbico vs anaeróbico: a dónde va la DQO", corto: "Aeróbico / anaeróbico", vb: [0, 0, 540, 310],
      desc: "Reparto de la DQO que entra, según el proceso biológico.",
      blanks: { a1: "50–60 %", a2: "40–50 %", a3: "5–10 %", b1: "70–90 %", b2: "5–15 %", b3: "10–30 %" },
      x: ["20–30 %", "90–100 %", "60–80 %"],
      nota: "**Aeróbico**: lodo 50–60 %, CO₂ 40–50 %, líquido 5–10 %. **Anaeróbico**: **biogás** 70–90 %, lodo 5–15 % (menos), efluente 10–30 %.",
      svg: S => {
        const X = v => 150 + v * 3.2;
        return [
          S.t(20, 32, "AERÓBICO", "hd l"),
          S.t(20, 66, "Lodo", "l"), S.r(X(50), 54, X(60) - X(50), 24, "k-ac"), S.t(X(60) + 8, 66, "@a1:l"),
          S.t(20, 100, "CO₂", "l"), S.r(X(40), 88, X(50) - X(40), 24, "k-steel"), S.t(X(50) + 8, 100, "@a2:l"),
          S.t(20, 134, "Líquido", "l"), S.r(X(5), 122, X(10) - X(5), 24, "k-stone"), S.t(X(10) + 8, 134, "@a3:l"),
          S.t(20, 180, "ANAERÓBICO", "hd l"),
          S.t(20, 214, "Biogás", "l"), S.r(X(70), 202, X(90) - X(70), 24, "k-ac"), S.t(X(90) + 8, 214, "@b1:l"),
          S.t(20, 248, "Lodo", "l"), S.r(X(5), 236, X(15) - X(5), 24, "k-steel"), S.t(X(15) + 8, 248, "@b2:l"),
          S.t(20, 282, "Efluente", "l"), S.r(X(10), 270, X(30) - X(10), 24, "k-stone"), S.t(X(30) + 8, 282, "@b3:l"),
          S.l(150, 160, 470, 160, "da"), S.t(310, 160, "% de la DQO que entra", "sm mt")
        ].join("");
      }
    },
    {
      id: "d5", titulo: "Línea del tratamiento preliminar", corto: "Línea preliminar", vb: [0, 0, 520, 330],
      desc: "Ordena las unidades de la PTAR y el mecanismo de cada una.",
      blanks: { u1: "Rejillas", u2: "Tamices", u3: "Desarenador", u4: "Desengrasador", m1: "Cribado grueso", m2: "Cribado fino", m3: "Sedimentación", m4: "Flotación" },
      x: ["Trituradores", "Filtración", "Decantador"],
      nota: "**Rejillas** (cribado grueso) → **tamices** (cribado fino) → **desarenador** (sedimentación) → **desengrasador** (flotación). En la práctica, desarenado, desengrasado y preaireación suelen combinarse en **una unidad aireada**.",
      svg: S => [
        S.t(260, 16, "AFLUENTE CRUDO ↓", "hd"),
        [0, 1, 2, 3].map(i => S.c(40, 56 + i * 62, 16, "k-ac") + `<text x="40" y="${56 + i * 62}" style="fill:#fff;font-weight:700">${i + 1}</text>`).join(""),
        [0, 1, 2].map(i => S.l(40, 72 + i * 62, 40, 100 + i * 62, "ac") + S.arrow(40, 102 + i * 62, "d")).join(""),
        S.t(76, 56, "@u1:l"), S.t(250, 56, "@m1:l"),
        S.t(76, 118, "@u2:l"), S.t(250, 118, "@m2:l"),
        S.t(76, 180, "@u3:l"), S.t(250, 180, "@m3:l"),
        S.t(76, 242, "@u4:l"), S.t(250, 242, "@m4:l"),
        S.t(40, 300, "Aireación preliminar: mantiene el agua fresca (OD ≈ 1 mg/L)  →  al primario", "sm l mt")
      ].join("")
    },
    {
      id: "d6", titulo: "Rejilla en el canal de llegada", corto: "Rejilla", vb: [0, 0, 560, 320],
      desc: "Corte longitudinal de un canal con rejilla de limpieza mecánica.",
      blanks: { ba: "Barras inclinadas", ra: "Rastrillo", pl: "Plataforma de escurrido", af: "Afluente", ve: "0.3–1.0 m/s" },
      x: ["Tamiz rotativo", "5 m/s", "Desarenador"],
      nota: "**Barras paralelas e inclinadas** en el canal; el **rastrillo** (manual o mecánico) sube los sólidos a la **plataforma de escurrido**. Velocidad de llegada **0.3–1.0 m/s**.",
      svg: S => [
        S.r(20, 250, 520, 22, "k-conc"),
        S.poly("40,160 285,160 285,250 40,250", "k-water"), S.poly("325,205 520,205 520,250 325,250", "k-water"),
        S.l(285, 250, 322, 110, "th"),
        S.r(298, 150, 16, 26, "k-black"),
        S.r(320, 100, 100, 8, "k-steel"), S.r(360, 68, 44, 32, "k-conc"),
        S.t(80, 118, "@af"), S.l(80, 131, 80, 162), S.arrow(80, 164, "d"),
        S.t(140, 205, "Velocidad de llegada:", "sm"), S.t(140, 232, "@ve"),
        S.t(390, 160, "@ba:l"), S.l(387, 162, 316, 158),
        S.t(150, 60, "@ra"), S.l(183, 66, 300, 152),
        S.t(380, 30, "@pl:l"), S.l(420, 42, 400, 98)
      ].join("")
    },
    {
      id: "d7", titulo: "Desarenador de flujo horizontal", corto: "Desarenador", vb: [0, 0, 560, 320],
      desc: "Corte longitudinal: la arena sedimenta y la materia orgánica sigue en suspensión.",
      blanks: { ve: "0.3 m/s", tr: "45–90 s", ar: "Arena", mo: "Materia orgánica", pa: "Canal Parshall" },
      x: ["0.03 m/s", "2–5 min", "Grasas", "Vertedero lateral"],
      nota: "Velocidad **0.3 m/s** (controlada con **vertedero proporcional** o **canal Parshall**): sedimenta la **arena**, no la materia orgánica. TRH **45–90 s**. Partícula de diseño 0.21 mm, Ss 2.65.",
      svg: S => [
        S.poly("40,130 480,130 480,240 40,240", "k-water"),
        S.r(40, 222, 440, 18, "k-mort"),
        [[100, 150], [160, 175], [215, 195], [270, 205], [330, 210], [390, 214]].map(p => S.c(p[0], p[1], 5, "k-stone")).join(""),
        [[110, 150], [200, 158], [300, 150], [400, 160]].map(p => S.c(p[0], p[1], 5, "k-brick")).join(""),
        S.arrow(30, 180, "r"), S.arrow(500, 160, "r"),
        S.t(100, 90, "@ve"), S.t(400, 90, "@tr"),
        S.t(240, 90, "@mo"), S.l(240, 102, 240, 150, "da"),
        S.t(240, 280, "@ar"), S.l(240, 268, 240, 242, "da"),
        S.t(440, 280, "@pa"), S.l(440, 268, 440, 242, "da")
      ].join("")
    },
    {
      id: "d8", titulo: "Sedimentador primario", corto: "Sedimentador", vb: [0, 0, 540, 320],
      desc: "Corte de un decantador primario: entrada, salida, nata y lodo.",
      blanks: { en: "Entrada", ac: "Agua clarificada", na: "Nata", lo: "Lodo", tr: "1.5–2.5 h" },
      x: ["Agua cruda", "45–90 s", "Arena", "Aire"],
      nota: "Los sólidos densos **descienden**; el **agua clarificada rebosa**; el **lodo** se concentra en el fondo; la **nata** se retira de la superficie. **TRH 1.5–2.5 h**; remoción SS 50–70 %, DBO 25–40 %.",
      svg: S => [
        S.r(60, 80, 360, 150, "k-water"),
        S.r(60, 80, 360, 8, "k-mort"),
        S.poly("60,230 420,230 300,268 180,268", "k-soil"),
        S.r(20, 106, 40, 14, "k-steel"), S.arrow(46, 113, "r"),
        S.r(420, 96, 60, 14, "k-steel"), S.arrow(484, 103, "r"),
        [[130, 130], [190, 150], [250, 175], [310, 190], [360, 205]].map(p => S.c(p[0], p[1], 4, "k-brick")).join(""),
        S.t(40, 56, "@en"), S.l(40, 68, 40, 104),
        S.t(450, 56, "@ac"), S.l(450, 68, 450, 94),
        S.t(240, 40, "@na"), S.l(240, 52, 240, 84),
        S.t(240, 300, "@lo"), S.l(240, 288, 240, 258),
        S.t(240, 140, "Tiempo de retención:", "sm"), S.t(240, 164, "@tr")
      ].join("")
    },
    {
      id: "d9", titulo: "Manejo de lodos: del lodo líquido a la evacuación", corto: "Manejo de lodos", vb: [0, 0, 520, 330],
      desc: "Ordena las operaciones de manejo del lodo primario.",
      blanks: { a: "Espesamiento", b: "Estabilización", c: "Digestión", d: "Acondicionamiento", e: "Deshidratación", f: "Evacuación" },
      x: ["Sedimentación", "Floculación", "Cribado"],
      nota: "Lodo con **95–99 % de agua** → **espesamiento → estabilización → digestión → acondicionamiento → deshidratación → evacuación** (camión cisterna, contenedor o tubería → disposición o valorización).",
      svg: S => [
        [0, 1, 2, 3, 4, 5].map(i => S.c(40, 32 + i * 52, 15, "k-ac") + `<text x="40" y="${32 + i * 52}" style="fill:#fff;font-weight:700">${i + 1}</text>`).join(""),
        [0, 1, 2, 3, 4].map(i => S.l(40, 47 + i * 52, 40, 62 + i * 52, "ac") + S.arrow(40, 64 + i * 52, "d")).join(""),
        S.t(76, 32, "@a:l"), S.t(76, 84, "@b:l"), S.t(76, 136, "@c:l"), S.t(76, 188, "@d:l"), S.t(76, 240, "@e:l"), S.t(76, 292, "@f:l")
      ].join("")
    },
    {
      id: "d10", titulo: "Lecho de secado de lodos", corto: "Lecho de secado", vb: [-30, 0, 570, 320],
      desc: "Corte de un lecho: drenar abajo, evaporar arriba.",
      blanks: { lo: "Lodo", ar: "Arena", gr: "Grava", dr: "Drenaje", e: "20–30 cm" },
      x: ["Cal", "5–10 cm", "Geomembrana"],
      nota: "Lodo de **20–30 cm** de espesor uniforme sobre **arena**, **grava** y **drenaje**: el agua sale por drenaje y **evaporación**. Sensible al **clima** (sol, viento, lluvia). Bajo costo y simple, pero requiere **más superficie** y puede dar **olores**.",
      svg: S => [
        S.r(60, 60, 300, 50, "k-soil"),
        S.r(60, 110, 300, 30, "k-mort"),
        S.r(60, 140, 300, 40, "k-stone"),
        S.r(60, 180, 300, 36, "k-conc"), S.r(60, 192, 300, 12, "k-steel"),
        [100, 190, 280].map(x => S.arrow(x, 50, "u")).join(""), S.t(190, 22, "Evaporación", "sm"),
        S.t(50, 85, "@lo:r"), S.l(53, 85, 62, 85),
        S.t(50, 125, "@ar:r"), S.l(53, 125, 62, 125),
        S.t(50, 160, "@gr:r"), S.l(53, 160, 62, 160),
        S.t(50, 198, "@dr:r"), S.l(53, 198, 62, 198),
        S.l(360, 60, 385, 60, "da"), S.l(360, 110, 385, 110, "da"), S.dv(378, 60, 110, "@e", 54),
        S.arrow(40, 230, "l"), S.t(150, 250, "El agua drenada sale por el fondo", "sm mt")
      ].join("")
    }
  ],

  tarjetas: [
    ["¿Qué son las aguas residuales?", "Aguas cuya calidad fue **modificada por el uso humano** y que contienen contaminantes **físicos, químicos o biológicos**."],
    ["Origen doméstico vs no doméstico", "**Doméstico**: duchas, inodoros, cocinas, lavanderías, limpieza urbana. **No doméstico**: industria, comercios, hospitales, actividades agropecuarias."],
    ["Parámetros físicos", "**Color, olor, temperatura, turbidez y sólidos.**"],
    ["Parámetros químicos", "**pH, DBO, DQO, oxígeno disuelto, nutrientes, sales y compuestos tóxicos.**"],
    ["Parámetros biológicos", "**Bacterias, virus, protozoos, helmintos** e indicadores microbiológicos."],
    ["¿Por qué evaluar la calidad?", "Por **ríos y lagos** (oxígeno, eutrofización), **suelos y acuíferos** y **salud pública**: medir, comparar, prevenir y controlar."],
    ["ST, SST y SDT", "**ST** = residuo tras evaporar y secar. **SST** = retenidos por el filtro. **SDT** = atraviesan el filtro. **ST ≈ SST + SDT**."],
    ["¿Qué mide la DBO?", "El **oxígeno consumido por microorganismos** al degradar materia orgánica **biodegradable** en condiciones controladas."],
    ["Condiciones del ensayo DBO₅", "**5 días, 20 °C, oscuridad**; se mide la disminución del **OD**."],
    ["Fórmula de la DBO₅", "**DBO₅ = (OD_i − OD_f) / P**, con P = fracción de muestra en la botella. Unidad: **mg O₂/L**."],
    ["¿Qué mide la DQO?", "El oxígeno equivalente para **oxidar químicamente** las sustancias oxidables (**dicromato en medio ácido**)."],
    ["DBO₅ vs DQO", "DBO₅: biodegradable, **5 días**. DQO: oxidable químicamente, **horas**. **DQO ≥ DBO₅**."],
    ["¿Qué es el oxígeno disuelto?", "Oxígeno molecular disponible para organismos y procesos aerobios. Lo reducen materia orgánica, respiración, **temperatura alta** y escasa reaeración. **OD bajo → estrés → mortandad.**"],
    ["¿Cómo se mide el OD?", "Con **sonda electroquímica u óptica**, o con métodos volumétricos como **Winkler**."],
    ["Productos tóxicos", "**Metales pesados** (Hg, Cd, Pb, Cr), plaguicidas, hidrocarburos, detergentes y químicos industriales. **No se resuelven diluyendo.**"],
    ["Carga orgánica", "**L (kg/d) = Q (m³/d) × C (mg/L) / 1000.**"],
    ["Nutrientes: nitrógeno y fósforo", "Favorecen la **eutrofización** y las proliferaciones algales; el nitrógeno también aumenta la demanda de oxígeno."],
    ["Coliformes fecales", "Indicadores de **contaminación fecal**; **no todos son patógenos**."],
    ["Definición de tratamiento (RMCH Art. 3)", "Proceso **físico, químico y/o biológico** que modifica alguna propiedad del agua residual cruda."],
    ["Objetivos habituales del tratamiento", "Reducir **DBO**, eliminar **sólidos en suspensión**, reducir **patógenos** y retirar **N y P** si el receptor es sensible."],
    ["Remoción necesaria de coliformes", "**99,999 % = 5 unidades logarítmicas** (límite diario 1000 NMP/100 mL)."],
    ["Operaciones vs procesos unitarios", "**Operaciones**: principios físicos (desbaste, cribado, sedimentación, flotación, filtración). **Procesos**: reacciones químicas o biológicas."],
    ["El tren de tratamiento", "**Preliminar y primario**: físicos · **Secundario**: biológico · **Terciario**: físico, químico o biológico."],
    ["Eficiencias por nivel (BID)", "Preliminar: sin remoción importante. **Primario**: SS 60–70 %, DBO 25–40 %. **Secundario**: DBO 60–99 %, SS 65–95 %. Terciario: nutrientes y patógenos."],
    ["Coagulación vs floculación", "**Floculación**: unión de partículas en flóculos. **Coagulación**: floculación provocada por **coagulantes químicos** (alumbre, sulfato ferroso…)."],
    ["Neutralización", "**Ácidas**: cal, carbonato o sosa. **Alcalinas**: ácido sulfúrico o clorhídrico. Va **antes** de los procesos químicos o biológicos."],
    ["Desinfección", "**Cloro** (el más usado) y ozono; calor y UV-C (costosos). Subproductos tóxicos: **trihalometanos**."],
    ["Aeróbico vs anaeróbico", "**Aeróbico**: lodo y CO₂, más lodo, requiere aireación. **Anaeróbico**: **biogás**, menos lodo, sin energía, olores H₂S y poca remoción de N y P."],
    ["Lodos activados", "**Aireación** forma flóculos que sedimentan en el **decantador secundario**; parte del lodo **retorna**, el exceso se **purga**. **85–95 % de DBO**."],
    ["Otros sistemas biológicos", "**Filtros percoladores** (película microbiana), **biodiscos**, **lagunas** (no requieren primario) y **UASB** (anaeróbico, compacto, biogás)."],
    ["Límites del RMCH (Anexo A-2)", "**DBO 80 mg/L · SST 60 mg/L · coliformes fecales 1000 NMP/100 mL** · DQO 250/300 mg/L (industrial / hidrocarburos)."],
    ["¿Qué es el tratamiento preliminar?", "Primera etapa de la PTAR: separa por medios **físicos y mecánicos** lo que daña equipos u obstruye (sólidos gruesos, arena, grasas). **No elimina materia orgánica disuelta.**"],
    ["Objetivos del preliminar", "**Proteger equipos**, evitar depósitos y olores, mejorar los procesos siguientes y controlar flotantes."],
    ["Rejillas", "**Barras paralelas inclinadas** en el canal; cribado grueso; velocidad **0.3–1.0 m/s**; rastrillo manual o mecánico; abertura **≥ 6 mm**."],
    ["Rejilla manual vs mecánica", "Manual: separación **25–50 mm**, ángulo **30–45°**, **0.3–0.6 m/s**. Mecánica: **15–75 mm**, **0–30°**, **0.6–1.0 m/s**."],
    ["Tamices", "Mallas o placas con abertura **< 6 mm**, tras las rejillas. **Estático** (sin partes móviles, alta pérdida de carga), **rotativo** (continuo, con motor), **de escalera**."],
    ["Trituradores", "Cortan los sólidos (**6–19 mm**) pero **no los eliminan**: aumentan SST y DBO aguas abajo. **Hoy se prefiere cribar.**"],
    ["Desarenador: fundamento", "Partícula de diseño **0.21 mm, Ss 2.65**; con **0.3 m/s** sedimenta la arena y **no** la materia orgánica."],
    ["Tipos de desarenador", "**Horizontal** (0.3 m/s, TRH 45–90 s) · **Aireado** (flujo en espiral, TRH 2–5 min a caudal pico) · **De vórtice** (entrada tangencial, ≈ 30 s)."],
    ["Desengrasador", "Separa por **flotación** grasas, aceites y espumas. El aire **desemulsiona**; **rasquetas** las llevan a un vertedero y un concentrador."],
    ["Desarenador-desengrasador aireado", "Un solo recinto: **la grasa sube y la arena baja**. **TRH 10–15 min**; carga hidráulica **< 35 m³/m²·h** a caudal máximo."],
    ["Aireación preliminar", "Aire al agua **cruda** para mantenerla **fresca** (OD ≈ **1 mg/L**, 15 min): evita **septicidad y olores**. No degrada materia orgánica."],
    ["Residuos del preliminar", "**Cribado** (olores e insectos; lavado y compactación), **arenas** (bomba/airlift y lavado) y **grasas** (rasquetas, concentrador), manejados **por separado**."],
    ["Regla práctica del preliminar", "**Primero lo grande** (cribado), **luego lo pesado** (sedimentación) **y lo liviano** (flotación)."],
    ["Tratamiento primario", "Elimina **sólidos sedimentables y flotantes** antes del biológico. **La gravedad hace el primer trabajo.**"],
    ["Sedimentador rectangular vs circular", "**Rectangular**: flujo longitudinal, fácil ampliación. **Circular**: alimentación central, barrido radial."],
    ["Parámetros del sedimentador primario", "**TRH 1.5–2.5 h**; **carga superficial** (m³/m²·d) como criterio hidráulico clave; SS **50–70 %** (60–70 %), DBO **25–40 %**."],
    ["Precipitación química: pasos y coagulantes", "**Mezcla rápida → floculación → sedimentación**. Coagulantes: **sulfato de aluminio, cloruro férrico, cal**. Remueve fósforo, metales y turbidez."],
    ["Precipitación química: costo", "Dosificación precisa, **costo de reactivos** y **mayor producción de lodos**; la dosis óptima se define con ensayos."],
    ["Lodo primario", "**95–99 % de agua**; viene del fondo del sedimentador; contiene materia orgánica, minerales, grasas y microorganismos; **inestable**."],
    ["Secuencia de manejo de lodos", "**Espesamiento → estabilización → digestión → acondicionamiento → deshidratación → evacuación.**"],
    ["Lechos de secado", "**Drenar abajo, evaporar arriba**; capas de lodo (**20–30 cm**), arena, grava y drenaje; sensibles al **clima**; bajo costo pero más superficie y olores."],
    ["Incineración de lodos", "**850–950 °C** (lecho fluidizado u hogares múltiples); **≈ −90 % de volumen**; deja **ceniza**; consume energía; exige control de emisiones."],
    ["Disposición final de lodos", "**Aplicación agrícola, relleno sanitario, recuperación de suelos degradados**. Criterios: sitio, agua, salud, metales, norma y beneficio."]
  ],

  preguntas: [
    /* ---------- 5.1 CALIDAD ---------- */
    { t: "mc", q: "Las aguas residuales son aguas...", o: ["Cuya calidad fue modificada por el uso humano y que contienen contaminantes físicos, químicos o biológicos", "Provenientes solo de industrias", "Que nunca contienen microorganismos", "De lluvia sin contacto con el suelo"], a: 0 },
    { t: "mc", q: "¿Cuál es un origen NO doméstico de aguas residuales?", o: ["Procesos industriales, comercios, hospitales y actividades agropecuarias", "Duchas e inodoros", "Cocinas y lavanderías", "Limpieza urbana de viviendas"], a: 0 },
    { t: "mc", q: "¿Cuál de estos es un parámetro FÍSICO de calidad?", o: ["Turbidez", "DBO", "Coliformes fecales", "Nitrógeno"], a: 0 },
    { t: "mc", q: "¿Cuál de estos es un parámetro BIOLÓGICO?", o: ["Coliformes fecales y patógenos", "pH", "Conductividad", "Color"], a: 0 },
    { t: "mc", q: "¿Cuál de estos es un parámetro QUÍMICO?", o: ["pH", "Olor", "Temperatura", "Virus"], a: 0 },
    { t: "mc", q: "La relación entre sólidos totales, suspendidos y disueltos es...", o: ["ST ≈ SST + SDT", "ST ≈ SST − SDT", "ST ≈ SDT / SST", "ST = SDT × SST"], a: 0 },
    { t: "mc", q: "Los sólidos disueltos (SDT) son la fracción que...", o: ["Atraviesa el filtro e incluye sales y compuestos disueltos", "Queda retenida en el filtro", "Sedimenta en 30 minutos", "Se volatiliza al calentar"], a: 0 },
    { t: "mc", q: "La DBO mide...", o: ["El oxígeno consumido por microorganismos al degradar materia orgánica biodegradable", "El oxígeno requerido para oxidar químicamente todo con dicromato", "La cantidad de bacterias coliformes", "El pH del agua"], a: 0 },
    { t: "mc", q: "El ensayo de DBO₅ se realiza durante...", o: ["5 días a 20 °C, en oscuridad", "5 horas a 35 °C", "20 días a 5 °C", "5 días a 100 °C"], a: 0 },
    { t: "mc", q: "La DQO se basa en...", o: ["La oxidación química con dicromato en medio ácido", "La incubación de 5 días", "La filtración de sólidos", "La medición de la conductividad"], a: 0 },
    { t: "mc", q: "En general, ¿cuál es la relación entre DQO y DBO₅?", o: ["DQO ≥ DBO₅", "DQO < DBO₅ siempre", "Son siempre iguales", "No tienen relación"], a: 0, w: "La oxidación química abarca más sustancias que la biodegradación medida." },
    { t: "mc", q: "El tiempo típico para obtener la DQO es de...", o: ["Horas", "5 días", "Un mes", "Segundos"], a: 0 },
    { t: "mc", q: "Un oxígeno disuelto bajo en el agua conduce a...", o: ["Estrés y mortandad de organismos", "Mayor transparencia", "Menor temperatura", "Menor DBO"], a: 0 },
    { t: "mc", q: "¿Qué reduce el oxígeno disuelto?", o: ["Materia orgánica, respiración, temperatura elevada y escasa reaeración", "Baja temperatura y alta reaeración", "Menor contenido de materia orgánica", "La luz solar únicamente"], a: 0 },
    { t: "mc", q: "El método de Winkler es un método...", o: ["Volumétrico para medir oxígeno disuelto", "Para medir pH", "Para medir turbidez", "Para contar coliformes"], a: 0 },
    { t: "mc", q: "Los metales pesados Hg, Cd, Pb y Cr se caracterizan por su...", o: ["Toxicidad y bioacumulación", "Biodegradabilidad rápida", "Aporte de nutrientes", "Efecto espumante"], a: 0 },
    { t: "mc", q: "Ante productos tóxicos, el control recomendado es...", o: ["Identificar la fuente y caracterizar compuestos, sin diluir como sustituto del tratamiento", "Diluir con agua limpia", "Medir solo el pH", "Esperar a que se degraden solos"], a: 0 },
    { t: "mc", q: "La carga orgánica L (kg/d) se calcula como...", o: ["Q (m³/d) × C (mg/L) / 1000", "Q × C × 1000", "Q / C", "C / Q / 1000"], a: 0 },
    { t: "mc", q: "El nitrógeno y el fósforo en un cuerpo de agua favorecen...", o: ["La eutrofización y las proliferaciones algales", "La desinfección", "El aumento del OD", "La sedimentación de arena"], a: 0 },
    { t: "mc", q: "Los coliformes fecales son...", o: ["Indicadores de contaminación fecal; no todos son patógenos", "Siempre patógenos", "Compuestos químicos tóxicos", "Sólidos suspendidos"], a: 0 },
    { t: "mc", q: "En el caso didáctico (DBO₅ = 180 y DQO = 320 mg O₂/L), la relación DQO/DBO₅ es aproximadamente...", o: ["1,78", "0,56", "2,5", "140"], a: 0, w: "320 / 180 ≈ 1,78: relación orientativa, requiere contexto del efluente. Datos hipotéticos." },
    { t: "mc", q: "Un efluente con Q = 500 m³/d y C = 250 mg/L tiene una carga de...", o: ["125 kg/d", "125 000 kg/d", "12.5 kg/d", "2 kg/d"], a: 0, w: "L = 500 × 250 / 1000 = 125 kg/d. (Ejemplo propio para practicar la fórmula.)" },
    /* ---------- 5.2 TIPOS ---------- */
    { t: "mc", q: "Según el RMCH (Art. 3), el tratamiento de aguas residuales es un...", o: ["Proceso físico, químico y/o biológico que modifica alguna propiedad del agua residual cruda", "Proceso únicamente biológico", "Conjunto de sanciones ambientales", "Sistema de alcantarillado"], a: 0 },
    { t: "mc", q: "Una remoción de coliformes de 99,999 % equivale a...", o: ["5 unidades logarítmicas", "2 unidades logarítmicas", "10 unidades logarítmicas", "1 unidad logarítmica"], a: 0 },
    { t: "mc", q: "¿Cuáles de los siguientes tratamientos son de naturaleza física?", o: ["Preliminar y primario", "Secundario y terciario", "Solo el secundario", "Solo el terciario"], a: 0 },
    { t: "mc", q: "El tratamiento secundario es de naturaleza...", o: ["Biológica", "Física", "Química únicamente", "Mecánica"], a: 0 },
    { t: "mc", q: "Las operaciones unitarias se basan en principios...", o: ["Físicos (desbaste, cribado, sedimentación, flotación, filtración)", "Biológicos", "Nucleares", "Ninguno en particular"], a: 0 },
    { t: "mc", q: "El tratamiento físico NO reduce de forma importante...", o: ["La materia orgánica disuelta", "Los sólidos gruesos", "Las arenas", "Las grasas y aceites"], a: 0 },
    { t: "mc", q: "La sedimentación primaria remueve (BID) aproximadamente...", o: ["SS 60–70 % y DBO 25–40 %", "SS 10 % y DBO 90 %", "SS 99 % y DBO 99 %", "DBO 60–99 % y SS 65–95 %"], a: 0, w: "El 60–99 % de DBO y 65–95 % de SS corresponde al secundario." },
    { t: "mc", q: "La coagulación es...", o: ["La floculación provocada por coagulantes químicos", "La separación por flotación", "Una operación unitaria física", "La unión de bacterias"], a: 0 },
    { t: "mc", q: "Para aguas ácidas, la neutralización usa...", o: ["Lechada de cal, carbonato sódico o sosa cáustica", "Ácido sulfúrico", "Ácido clorhídrico", "Cloro"], a: 0 },
    { t: "mc", q: "El agente de desinfección más usado es...", o: ["El cloro", "El ozono", "La radiación UV-C", "El calor"], a: 0, w: "Su desventaja: subproductos tóxicos como los trihalometanos." },
    { t: "mc", q: "En el proceso anaeróbico, la DQO se convierte principalmente en...", o: ["Biogás", "Lodo y CO₂", "Líquido", "Ceniza"], a: 0 },
    { t: "mc", q: "En lodos activados, el flóculo bacteriano sedimenta en...", o: ["Un decantador secundario", "El desarenador", "Las rejillas", "El tanque de cloración"], a: 0 },
    { t: "mc", q: "El reactor UASB es un sistema...", o: ["Anaeróbico, compacto, que produce biogás", "Aeróbico con aireación", "Físico de cribado", "Químico de neutralización"], a: 0 },
    { t: "mc", q: "Entre los sistemas biológicos, las lagunas se caracterizan porque...", o: ["No requieren tratamiento primario", "Requieren siempre lodos activados", "Producen biogás en gran cantidad", "Funcionan a presión"], a: 0 },
    { t: "mc", q: "Según el Anexo A-2 del RMCH, el límite diario de DBO es de...", o: ["80 mg/L", "60 mg/L", "1000 mg/L", "250 mg/L"], a: 0 },
    { t: "mc", q: "El límite diario de coliformes fecales es...", o: ["1000 NMP/100 mL", "80 NMP/100 mL", "60 NMP/100 mL", "300 NMP/100 mL"], a: 0 },
    /* ---------- 5.3.1 PRELIMINAR ---------- */
    { t: "mc", q: "El tratamiento preliminar se ubica...", o: ["A la llegada del agua cruda, antes del tratamiento primario", "Después del tratamiento terciario", "Entre el secundario y la desinfección", "Solo en el cuerpo receptor"], a: 0 },
    { t: "mc", q: "¿Cuál es un objetivo del tratamiento preliminar?", o: ["Proteger equipos de la abrasión y los atascos", "Eliminar nutrientes disueltos", "Desinfectar el agua", "Reducir la DBO disuelta"], a: 0 },
    { t: "mc", q: "Las rejillas retienen los sólidos gruesos por...", o: ["Cribado", "Sedimentación", "Flotación", "Reacción química"], a: 0 },
    { t: "mc", q: "La velocidad de llegada del agua al canal de rejillas es de...", o: ["0.3–1.0 m/s", "5–10 m/s", "0.01–0.05 m/s", "3–5 m/s"], a: 0 },
    { t: "mc", q: "La diferencia entre rejilla y tamiz es principalmente...", o: ["La abertura: rejillas ≥ 6 mm, tamices < 6 mm", "El tipo de agua que tratan", "Que el tamiz sedimenta y la rejilla flota", "Que la rejilla es biológica"], a: 0 },
    { t: "mc", q: "Una rejilla de limpieza manual tiene una separación libre de...", o: ["25–50 mm", "15–75 mm", "0.5–2 mm", "100–150 mm"], a: 0, w: "La mecánica: 15–75 mm." },
    { t: "mc", q: "Una rejilla mecánica trabaja con una velocidad de aproximación de...", o: ["0.6–1.0 m/s", "0.3–0.6 m/s", "2–3 m/s", "0.1 m/s"], a: 0 },
    { t: "mc", q: "El tamiz estático (autolimpiante) se caracteriza por...", o: ["No tener partes móviles ni consumo de energía, pero tener alta pérdida de carga", "Requerir motor y consumo de energía", "Eliminar la grasa", "Sedimentar la arena"], a: 0 },
    { t: "mc", q: "Los trituradores...", o: ["Reducen el tamaño de los sólidos, pero no los eliminan del agua", "Eliminan los sólidos gruesos", "Eliminan las grasas", "Desinfectan el agua"], a: 0, w: "Aumentan SST y DBO aguas abajo; hoy se prefiere cribar." },
    { t: "mc", q: "El material triturado por un triturador tiene un tamaño de...", o: ["6–19 mm", "0.2 mm", "38–150 mm", "1 m"], a: 0 },
    { t: "mc", q: "La partícula de diseño de un desarenador es...", o: ["Arena de 0.21 mm con gravedad específica 2.65", "Arcilla de 0.002 mm", "Grava de 38 mm", "Materia orgánica de 1 mm"], a: 0 },
    { t: "mc", q: "En un desarenador con velocidad horizontal de 0.3 m/s...", o: ["Sedimenta la arena, no la materia orgánica", "Sedimenta toda la materia orgánica", "No sedimenta nada", "Flotan las arenas"], a: 0 },
    { t: "mc", q: "El desarenador aireado genera un flujo...", o: ["En espiral, por el aire inyectado en un costado", "Vertical descendente", "Tangencial", "Laminar sin aire"], a: 0 },
    { t: "mc", q: "En el desarenador de vórtice, la arena es llevada a...", o: ["Una tolva central por la entrada tangencial", "Un vertedero lateral", "Un tamiz rotativo", "El tanque de cloración"], a: 0 },
    { t: "mc", q: "Los desengrasadores separan grasas, aceites y espumas por...", o: ["Flotación", "Sedimentación", "Cribado", "Filtración"], a: 0 },
    { t: "mc", q: "La aireación preliminar busca mantener el agua cruda...", o: ["Fresca, con oxígeno disuelto (≈ 1 mg/L), evitando septicidad y malos olores", "Estéril", "Ácida", "A baja temperatura"], a: 0 },
    { t: "mc", q: "El residuo del cribado es una fuente importante de...", o: ["Olores e insectos", "Biogás", "Nutrientes para algas", "Coliformes en el efluente"], a: 0 },
    { t: "mc", q: "La secuencia correcta de las unidades del tratamiento preliminar es...", o: ["Rejillas → tamices → desarenador → desengrasador", "Desarenador → rejillas → desengrasador → tamices", "Tamices → desengrasador → rejillas → desarenador", "Desengrasador → desarenador → tamices → rejillas"], a: 0 },
    /* ---------- 5.3.2 PRIMARIO ---------- */
    { t: "mc", q: "El tratamiento primario elimina...", o: ["Sólidos sedimentables y flotantes, antes del tratamiento secundario", "Materia orgánica disuelta por bacterias", "Nutrientes y patógenos", "Solo trapos y plásticos"], a: 0 },
    { t: "mc", q: "El tiempo de retención típico de un sedimentador primario es de...", o: ["1.5–2.5 h", "45–90 s", "10–15 min", "5 días"], a: 0 },
    { t: "mc", q: "El sedimentador circular se caracteriza por...", o: ["Alimentación central y barrido radial", "Flujo longitudinal y fácil ampliación", "Funcionar con aire", "No generar lodo"], a: 0 },
    { t: "mc", q: "En la precipitación química, el orden del proceso es...", o: ["Mezcla rápida → floculación → sedimentación", "Sedimentación → mezcla rápida → floculación", "Floculación → desinfección → cribado", "Cribado → mezcla rápida → incineración"], a: 0 },
    { t: "mc", q: "Una condición/limitación de la precipitación química es...", o: ["Dosificación precisa, costo de reactivos y mayor producción de lodos", "Que no remueve fósforo", "Que reduce la eficiencia respecto a la sedimentación simple", "Que no necesita ensayos"], a: 0 },
    { t: "mc", q: "El lodo sin deshidratar contiene aproximadamente...", o: ["95–99 % de agua", "10–20 % de agua", "50 % de agua", "0 % de agua"], a: 0 },
    { t: "mc", q: "¿Cuál es la secuencia correcta de manejo de lodos?", o: ["Espesamiento, estabilización, digestión, acondicionamiento, deshidratación, evacuación", "Digestión, espesamiento, evacuación, deshidratación", "Deshidratación, espesamiento, digestión", "Acondicionamiento, evacuación, espesamiento"], a: 0 },
    { t: "mc", q: "En los lechos de secado el lodo se aplica con un espesor uniforme de...", o: ["20–30 cm", "2–3 cm", "1–2 m", "5–10 mm"], a: 0 },
    { t: "mc", q: "El rendimiento de los lechos de secado depende principalmente de...", o: ["El clima: sol, viento y lluvia", "La presión del vapor", "El pH del lodo", "La altura del tanque"], a: 0 },
    { t: "mc", q: "La incineración de lodos se realiza a...", o: ["850–950 °C", "100–150 °C", "20–30 °C", "2000–3000 °C"], a: 0 },
    { t: "mc", q: "Una limitación de la incineración de lodos es...", o: ["El consumo de energía, la ceniza residual y la necesidad de controlar emisiones", "No reduce el volumen", "Produce más lodo", "Necesita clima soleado"], a: 0 },
    { t: "mc", q: "¿Cuál es una opción de disposición final de lodos?", o: ["Aplicación agrícola, relleno sanitario o recuperación de suelos degradados", "Verterlos directamente al río", "Almacenarlos sin tratar", "Mezclarlos con el agua potable"], a: 0 },
    /* ---------- V / F ---------- */
    { t: "vf", q: "La DBO₅ se mide en un ensayo de 5 días a 20 °C, en oscuridad.", a: true },
    { t: "vf", q: "La DQO suele obtenerse en 5 días, igual que la DBO₅.", a: false, w: "La DQO se obtiene **en horas**; la DBO₅ requiere **5 días**." },
    { t: "vf", q: "Un solo parámetro, como el pH, describe por completo la calidad del agua residual.", a: false, w: "La calidad se interpreta **en conjunto**: ningún parámetro aislado la describe." },
    { t: "vf", q: "Se puede diluir un efluente tóxico como sustituto del tratamiento.", a: false, w: "Hay que evitar diluir como sustituto del tratamiento." },
    { t: "vf", q: "El tratamiento preliminar elimina la materia orgánica disuelta.", a: false, w: "**No** elimina la materia orgánica disuelta: prepara el agua para las etapas siguientes." },
    { t: "vf", q: "Los trituradores eliminan los sólidos gruesos del agua residual.", a: false, w: "Solo **reducen su tamaño**; los sólidos siguen en el agua." },
    { t: "vf", q: "En un desarenador, la arena se separa por sedimentación y no por cribado.", a: true },
    { t: "vf", q: "La aireación preliminar busca degradar la materia orgánica del agua cruda.", a: false, w: "**No**: acondiciona el agua (evita septicidad y olores), no busca degradar materia orgánica." },
    { t: "vf", q: "Los lodos de los sedimentadores primarios son estables y no requieren tratamiento rápido.", a: false, w: "Su **inestabilidad** exige tratamiento rápido." },
    { t: "vf", q: "Las lagunas no requieren tratamiento primario.", a: true },
    { t: "vf", q: "El tratamiento anaeróbico requiere aireación y produce más lodo que el aeróbico.", a: false, w: "El anaeróbico tiene energía **nula en el proceso** y produce **menos lodo**, estabilizado, además de biogás." },
    /* ---------- COMPLETAR ---------- */
    { t: "fill", q: "DBO₅ = (OD_i − OD_f) / [[P]], donde P es la fracción de [[muestra]] en la botella.", x: ["Q", "caudal", "C", "lodo"] },
    { t: "fill", q: "En el ensayo de DBO₅ la muestra se incuba [[5]] días a [[20]] °C.", x: ["3", "7", "35", "10"] },
    { t: "fill", q: "L (kg/d) = Q (m³/d) × C (mg/L) / [[1000]].", x: ["100", "10", "60"] },
    { t: "fill", q: "Un ensayo de DBO₅ tiene OD_i = 8,0 mg/L, OD_f = 3,0 mg/L y P = 0,05. Entonces DBO₅ = (8,0 − 3,0) / 0,05 = [[100]] mg O₂/L.", x: ["250", "5", "10", "0,25"] },
    { t: "fill", q: "El preliminar y el primario son tratamientos [[físicos]]; el secundario es [[biológico]].", x: ["químicos", "mecánicos", "terciarios"] },
    { t: "fill", q: "Las rejillas tienen abertura [[≥ 6 mm]] y los tamices [[< 6 mm]].", x: ["≥ 25 mm", "< 1 mm", "≥ 100 mm"] },
    { t: "fill", q: "El desarenador horizontal trabaja con velocidad de [[0.3]] m/s y tiempo de retención de [[45–90]] s.", x: ["3", "2–5", "10–15", "0.03"] },
    { t: "fill", q: "El sedimentador primario tiene un tiempo de retención de [[1.5–2.5]] h y remueve [[25–40]] % de la DBO.", x: ["45–90", "60–99", "10–15", "85–95"] },
    { t: "fill", q: "El lodo sin deshidratar contiene entre [[95]] y [[99]] % de agua y se seca en lechos de [[20–30]] cm de espesor.", x: ["50", "70", "5–10", "1–2"] },
    { t: "fill", q: "La incineración de lodos opera entre [[850]] y [[950]] °C y deja [[ceniza]] como residuo final.", x: ["300", "1500", "lodo seco", "biogás"] },
    /* ---------- ORDENAR ---------- */
    { t: "order", q: "Ordena las etapas del tratamiento de aguas residuales:", s: ["Tratamiento preliminar", "Tratamiento primario", "Tratamiento secundario", "Tratamiento terciario y desinfección"] },
    { t: "order", q: "Ordena las unidades del tratamiento preliminar (de la llegada hacia el primario):", s: ["Rejillas (cribado grueso)", "Tamices (cribado fino)", "Desarenador (sedimentación)", "Desengrasador (flotación)"] },
    { t: "order", q: "Ordena el manejo del lodo primario:", s: ["Espesamiento", "Estabilización", "Digestión", "Acondicionamiento", "Deshidratación", "Evacuación"] },
    { t: "order", q: "Ordena el funcionamiento de una rejilla:", s: ["El agua llega al canal con velocidad controlada (0.3–1.0 m/s)", "Los sólidos mayores que la separación entre barras quedan retenidos", "Un rastrillo manual o mecánico los sube a la plataforma de escurrido"] },
    { t: "order", q: "Ordena la precipitación química:", s: ["Mezcla rápida (coagulante)", "Floculación", "Sedimentación"] },
    /* ---------- EMPAREJAR ---------- */
    { t: "match", q: "Relaciona cada fracción de sólidos con su descripción:", p: [
      ["ST", "Residuo tras evaporar y secar la muestra"],
      ["SST", "Fracción retenida por un filtro"],
      ["SDT", "Fracción que atraviesa el filtro (sales y compuestos disueltos)"]
    ], x: ["Fracción que sedimenta en 30 minutos"] },
    { t: "match", q: "Relaciona cada parámetro con lo que indica:", p: [
      ["DBO₅", "Materia orgánica biodegradable (5 días)"],
      ["DQO", "Materia químicamente oxidable (horas)"],
      ["OD", "Oxígeno disponible para organismos aerobios"],
      ["Turbidez", "Dispersión de luz por partículas"],
      ["Conductividad", "Estimación de iones disueltos"]
    ], x: ["Contaminación fecal"] },
    { t: "match", q: "Relaciona cada unidad del preliminar con su mecanismo:", p: [
      ["Rejillas", "Cribado grueso"],
      ["Tamices", "Cribado fino"],
      ["Trituradores", "Corte y desmenuzado"],
      ["Desarenadores", "Sedimentación"],
      ["Desengrasadores", "Flotación"]
    ], x: ["Coagulación"] },
    { t: "match", q: "Relaciona cada tipo de desarenador con su característica:", p: [
      ["Flujo horizontal", "0.3 m/s controlada con vertedero proporcional o canal Parshall"],
      ["Aireado", "Flujo en espiral por el aire inyectado en un costado"],
      ["De vórtice", "Entrada tangencial que lleva la arena a una tolva central"]
    ], x: ["Sin velocidad controlada"] },
    { t: "match", q: "Relaciona cada nivel de tratamiento con su eficiencia o remoción:", p: [
      ["Primario", "SS 60–70 %, DBO 25–40 %"],
      ["Secundario", "DBO 60–99 %, SS 65–95 %"],
      ["Terciario", "Nutrientes y patógenos"],
      ["Preliminar", "Sin remoción importante de SS ni DBO"]
    ], x: ["DBO 100 %"] },
    { t: "match", q: "Relaciona cada sistema de lodos con su característica:", p: [
      ["Lechos de secado", "Drenar abajo, evaporar arriba; sensibles al clima"],
      ["Incineración", "850–950 °C; reduce el volumen; deja ceniza"],
      ["Disposición final", "Aplicación agrícola, relleno sanitario o recuperación de suelos"]
    ], x: ["Sedimentación con coagulantes"] },
    /* ---------- ABIERTAS ---------- */
    { t: "open", q: "Explica la diferencia entre DBO₅ y DQO. ¿Cuál suele ser mayor y por qué?", a: "La **DBO₅** mide el oxígeno que consumen los **microorganismos** al degradar la materia orgánica **biodegradable** (ensayo biológico de **5 días a 20 °C**, en oscuridad). La **DQO** mide el oxígeno equivalente para **oxidar químicamente** las sustancias oxidables (dicromato en medio ácido) y se obtiene en **horas**. Ambas se expresan en **mg O₂/L**. Habitualmente **DQO ≥ DBO₅**, porque la oxidación química abarca más sustancias que la biodegradación medida.",
      k: ["DBO₅: materia biodegradable, método biológico/incubación de 5 días a 20 °C", "DQO: materia químicamente oxidable (dicromato, medio ácido), resultado en horas", "Ambas en mg O₂/L", "DQO ≥ DBO₅ porque la oxidación química abarca más sustancias"] },
    { t: "open", q: "¿Qué es el tratamiento de aguas residuales según el RMCH y cuáles son sus objetivos habituales?", a: "Según el **RMCH (Art. 3)** es un **proceso físico, químico y/o biológico** que modifica alguna propiedad física, química y/o biológica del agua residual cruda. Objetivos habituales: **reducir la carga orgánica (DBO)**, **eliminar sólidos en suspensión**, **reducir microorganismos patógenos** y **retirar nitrógeno y fósforo** si el receptor es sensible. La meta la fija la **calidad requerida para descargar en el cuerpo receptor**.",
      k: ["Proceso físico, químico y/o biológico que modifica propiedades del agua cruda (Art. 3)", "Reducir la DBO y eliminar sólidos en suspensión", "Reducir patógenos y retirar N y P si el receptor es sensible", "La meta depende de la calidad exigida al cuerpo receptor"] },
    { t: "open", q: "Describe el tren de tratamiento (preliminar, primario, secundario, terciario) e indica la naturaleza y la eficiencia de cada nivel.", a: "**Preliminar**: físico; sin remoción importante de SS ni DBO. **Primario**: físico; SS **60–70 %**, DBO **25–40 %**. **Secundario**: **biológico**; DBO **60–99 %**, SS **65–95 %**. **Terciario**: físico, químico o biológico; nutrientes y patógenos. Los dos últimos suelen cumplir los límites de vertido usuales; los dos primeros, no.",
      k: ["Preliminar y primario son físicos; secundario biológico; terciario variable", "Primario: SS 60–70 % y DBO 25–40 %", "Secundario: DBO 60–99 % y SS 65–95 %", "Terciario: nutrientes y patógenos; secundario y terciario usualmente cumplen límites"] },
    { t: "open", q: "Compara el tratamiento biológico aeróbico y el anaeróbico.", a: "En el **aeróbico** la DQO va a **lodo y CO₂**, produce **más lodo** y **requiere aireación** (lodo 50–60 %, CO₂ 40–50 %, líquido 5–10 %). En el **anaeróbico** va a **biogás** (70–90 %), produce **menos lodo, estabilizado** (5–15 %), tiene **energía nula en el proceso** y su limitación es **olores (H₂S)** y **poca remoción de N y P**. Ejemplo anaeróbico: **UASB**; aeróbico: **lodos activados**.",
      k: ["Aeróbico: lodo y CO₂, más lodo, requiere aireación", "Anaeróbico: biogás, menos lodo estabilizado, sin energía en el proceso", "Limitaciones del anaeróbico: olores (H₂S) y poca remoción de N y P", "Ejemplos: lodos activados (aeróbico), UASB (anaeróbico)"] },
    { t: "open", q: "Explica el funcionamiento de una rejilla y en qué se diferencia de un tamiz.", a: "La **rejilla** es un conjunto de **barras paralelas e inclinadas** en el canal de llegada que retienen por **cribado** los **sólidos gruesos**. El agua llega con velocidad controlada (**0.3–1.0 m/s**); lo mayor que la separación entre barras queda retenido y un **rastrillo manual o mecánico** lo sube a una **plataforma de escurrido**. El **tamiz** actúa igual (cribado) pero con **abertura menor de 6 mm** y va **después** de las rejillas; las rejillas gruesas tienen abertura **≥ 6 mm**.",
      k: ["Barras paralelas e inclinadas que retienen sólidos gruesos por cribado", "Velocidad de llegada 0.3–1.0 m/s", "Rastrillo manual o mecánico sube los sólidos a la plataforma de escurrido", "Diferencia: abertura ≥ 6 mm (rejilla) vs < 6 mm (tamiz); el tamiz va después"] },
    { t: "open", q: "¿Por qué un triturador no puede considerarse una unidad de remoción de sólidos? ¿Qué desventajas tiene?", a: "Porque **solo corta y desmenuza** los sólidos (a **6–19 mm**) y estos **siguen en el agua**: **no se eliminan**. Desventajas: **aumentan SST y DBO aguas abajo**, los trapos triturados pueden **volver a unirse** (plásticos en digestores, trapos en difusores) y hay **desgaste de cuchillas y rodamientos**. Se usan en plantas pequeñas (< 5 MGD ≈ 220 L/s) con rejilla gruesa previa y by-pass; **hoy se prefiere retirar los sólidos por cribado**.",
      k: ["Solo reduce el tamaño (6–19 mm); los sólidos siguen en el agua", "Aumenta SST y DBO aguas abajo", "Trapos triturados pueden volver a unirse; desgaste de cuchillas", "Hoy se prefiere el cribado; uso en plantas pequeñas con rejilla previa y by-pass"] },
    { t: "open", q: "Describe cómo funciona un desarenador de flujo horizontal y qué parámetros lo controlan.", a: "Reduce la **velocidad** del agua a **≈ 0.3 m/s** (controlada con **vertedero proporcional** o **canal Parshall**) para que **sedimente la arena** (partícula de diseño **0.21 mm**, Ss **2.65**) mientras la **materia orgánica sigue en suspensión**. El **tiempo de retención** es de **45–90 s**. La arena se **extrae del fondo** (manual, bomba o airlift) y se **lava**. Ventaja: construcción sencilla; limitación: es difícil mantener la velocidad si el caudal varía.",
      k: ["Velocidad ≈ 0.3 m/s controlada con vertedero proporcional o canal Parshall", "Sedimenta la arena (0.21 mm, Ss 2.65), no la materia orgánica", "Tiempo de retención 45–90 s", "La arena se extrae del fondo y se lava; limitación: caudal variable"] },
    { t: "open", q: "¿Para qué sirve la aireación preliminar y cuáles son sus limitaciones?", a: "Inyecta **aire** al agua residual **cruda**, antes del primario, para mantenerla **fresca** (con **oxígeno disuelto ≈ 1 mg/L**, 15 min bastan para controlar olores). Evita la **septicidad** y los **malos olores**, favorece la **separación de grasas** y la **floculación** y deja **arena más limpia** en desarenadores aireados. **No busca degradar la materia orgánica.** Limitaciones: **consumo de energía** y posible liberación de **olores y COV**; se justifica solo en casos especiales.",
      k: ["Aire al agua cruda para mantenerla fresca (OD ≈ 1 mg/L)", "Evita septicidad y malos olores", "Favorece la separación de grasas y la floculación", "Limitaciones: energía, olores y COV; no degrada materia orgánica"] },
    { t: "open", q: "Explica cómo funciona la sedimentación primaria y qué rendimientos y parámetros de diseño tiene.", a: "Por **gravedad**, los sólidos más densos **descienden** en el tanque decantador (**rectangular** o **circular**); el **agua clarificada rebosa**, el **lodo** se concentra en el fondo para su extracción y la **nata** (aceites y grasas) se retira de la superficie. **Tiempo de retención 1.5–2.5 h**; **carga superficial** (m³/m²·d) es el criterio hidráulico clave. Remueve **SS 50–70 %** (60–70 % según BID) y **25–40 % de la DBO**.",
      k: ["Gravedad: sólidos densos descienden, lodo en el fondo, agua clarificada rebosa", "Rectangular (flujo longitudinal) o circular (alimentación central, barrido radial)", "TRH 1.5–2.5 h y carga superficial m³/m²·d como criterio clave", "SS 50–70 % (60–70 %) y DBO 25–40 %; la nata se retira de la superficie"] },
    { t: "open", q: "Explica la precipitación química en el tratamiento primario: etapas, coagulantes, ventajas y condiciones.", a: "Etapas: **mezcla rápida → floculación → sedimentación**, que convierte partículas finas en flóculos separables. **Coagulantes**: sulfato de aluminio, cloruro férrico y cal; los **floculantes** aceleran la aglomeración. **Ventaja**: mayor eficiencia que la sedimentación simple; remueve **fósforo, metales y turbidez**. **Condiciones**: la **dosis óptima** se define con **ensayos** y varía con la calidad del agua; exige dosificación precisa, tiene **costo de reactivos** y produce **más lodos**.",
      k: ["Mezcla rápida → floculación → sedimentación", "Coagulantes: sulfato de aluminio, cloruro férrico y cal", "Mayor eficiencia; remueve fósforo, metales y turbidez", "Dosis óptima por ensayos; costo de reactivos y más lodos"] },
    { t: "open", q: "Describe las características del lodo primario y la secuencia para manejarlo hasta su evacuación.", a: "Es el **residuo concentrado** del fondo de los sedimentadores primarios: contiene **95–99 % de agua**, materia orgánica, sólidos minerales, grasas y microorganismos, y es **inestable**, por lo que exige **tratamiento rápido**. Secuencia: **espesamiento → estabilización → digestión → acondicionamiento → deshidratación → evacuación** (camión cisterna, contenedor o tubería) hacia **disposición o valorización**.",
      k: ["Residuo del fondo del sedimentador con 95–99 % de agua", "Contiene materia orgánica, minerales, grasas y microorganismos; inestable", "Secuencia: espesamiento, estabilización, digestión, acondicionamiento, deshidratación", "Evacuación (camión, contenedor, tubería) a disposición o valorización"] },
    { t: "open", q: "Compara los lechos de secado y la incineración de lodos: funcionamiento, ventajas y limitaciones.", a: "**Lechos de secado**: el agua **drena abajo** (arena, grava, drenaje) y **evapora arriba**, con lodo de **20–30 cm** de espesor uniforme hasta lograr una torta manipulable; el tiempo depende del **clima** y la carga. Ventaja: **bajo costo y simplicidad**; limitaciones: **más superficie** y **posibles olores**. **Incineración**: lodo seco en horno a **850–950 °C** (lecho fluidizado u hogares múltiples); reduce el volumen **≈ 90 %** y reduce patógenos, pero deja **ceniza** que hay que gestionar, **consume energía** y exige **control de emisiones** (lavadores de gases, filtros, monitoreo).",
      k: ["Lechos: drenar abajo y evaporar arriba, 20–30 cm, dependen del clima", "Lechos: bajo costo y simples, pero más superficie y posibles olores", "Incineración: 850–950 °C, reducción ≈ 90 % del volumen", "Incineración: ceniza residual, consumo de energía y control de emisiones"] },
    { t: "open", q: "Interpreta el caso didáctico: pH 7,4; DBO₅ 180 mg/L; DQO 320 mg/L; SST 120 mg/L; OD 1,2 mg/L.", a: "El **pH 7,4** es cercano a neutro (se evalúa junto al proceso). La **DBO₅ de 180** indica **carga biodegradable apreciable**; la **DQO de 320** es mayor que la DBO₅ (**DQO ≥ DBO₅**), con **DQO/DBO₅ ≈ 1,78**, relación orientativa que requiere el contexto del efluente. **SST 120** indica presencia importante de **partículas** y el **OD de 1,2 mg/L** es **bajo**. Son valores **hipotéticos** con fines académicos, no resultados medidos ni límites normativos.",
      k: ["pH cercano a neutro", "DBO₅ alta: carga biodegradable apreciable; DQO mayor que la DBO₅", "DQO/DBO₅ ≈ 1,78: orientativa, depende del efluente", "SST con partículas importantes y OD bajo; datos hipotéticos"] },
    { t: "open", q: "Un efluente tiene Q = 800 m³/d y una concentración de DBO₅ de 150 mg/L. Calcula la carga orgánica y explica qué significa.", a: "**L = Q × C / 1000 = 800 × 150 / 1000 = 120 kg/d.** Significa que **cada día ingresan 120 kg de DBO₅** (materia orgánica biodegradable) al sistema, que es la carga que deben degradar los microorganismos aerobios usando el oxígeno. (Ejercicio propio para practicar la fórmula.)",
      k: ["Fórmula L = Q × C / 1000 (kg/d)", "Resultado: 800 × 150 / 1000 = 120 kg/d", "Es la carga biodegradable diaria que ingresa al sistema", "La DBO₅ ayuda a estimar la carga biodegradable"] }
  ]
};
