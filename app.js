// Datos de la obra extraídos del PDF
const datosObra = {
    informacion: {
        nombre: "Vivienda Unifamiliar",
        ubicacion: "Condominio Costa Del Lago - Hernandarias",
        propietario: "Abel Rios y Alba Velazquez",
        fecha: "29/12/2025",
        certificadoNumero: "05",
        presupuestoTotal: 1040000000,
        arquitecto: "Arq. Eduardo Melgarejo",
        registro: "Reg. Prof. N°. 2.912"
    },

    rubros: [
        {
            numero: "1",
            nombre: "Trabajos Preliminares",
            items: [
                { numero: "1.1", nombre: "Desbroce de capa vegetal, perfilado de terreno y retiro de desecho vegetal", unidad: "gl", cantidad: 1.00, precioUnitario: 3720000, precioTotal: 3720000, cantAnterior: 1.00, cantActual: 0.00, cantAcumulada: 1.00, montoAnterior: 3720000, montoActual: 0, montoAcumulado: 3720000 },
                { numero: "1.2", nombre: "Obrador/deposito de materiales, baño p/ personal, vallado perimetral, cartel de obra", unidad: "gl", cantidad: 1.00, precioUnitario: 4800000, precioTotal: 4800000, cantAnterior: 1.00, cantActual: 0.00, cantAcumulada: 1.00, montoAnterior: 4800000, montoActual: 0, montoAcumulado: 4800000 },
                { numero: "1.3", nombre: "Replanteo y marcacion de obra", unidad: "m²", cantidad: 292.00, precioUnitario: 7200, precioTotal: 2102400, cantAnterior: 292.00, cantActual: 0.00, cantAcumulada: 292.00, montoAnterior: 2102400, montoActual: 0, montoAcumulado: 2102400 },
                { numero: "1.4", nombre: "Excavaciones para fundaciones y encadenado", unidad: "m³", cantidad: 58.00, precioUnitario: 84000, precioTotal: 4872000, cantAnterior: 58.00, cantActual: 0.00, cantAcumulada: 58.00, montoAnterior: 4872000, montoActual: 0, montoAcumulado: 4872000 }
            ]
        },
        {
            numero: "2",
            nombre: "Estructura de HºAº",
            items: [
                { numero: "2.1", nombre: "Zapata de HºAº", unidad: "m³", cantidad: 8.20, precioUnitario: 2520000, precioTotal: 20664000, cantAnterior: 8.20, cantActual: 0.00, cantAcumulada: 8.20, montoAnterior: 20664000, montoActual: 0, montoAcumulado: 20664000 },
                { numero: "2.2", nombre: "Viga encadenado inferior", unidad: "ml", cantidad: 176.00, precioUnitario: 201600, precioTotal: 35481600, cantAnterior: 176.00, cantActual: 0.00, cantAcumulada: 176.00, montoAnterior: 35481600, montoActual: 0, montoAcumulado: 35481600 },
                { numero: "2.3", nombre: "Pilares de HºAº", unidad: "m³", cantidad: 6.40, precioUnitario: 3024000, precioTotal: 19353600, cantAnterior: 6.40, cantActual: 0.00, cantAcumulada: 6.40, montoAnterior: 19353600, montoActual: 0, montoAcumulado: 19353600 },
                { numero: "2.4", nombre: "Vigas de HºAº", unidad: "m³", cantidad: 1.00, precioUnitario: 3780000, precioTotal: 3780000, cantAnterior: 1.00, cantActual: 0.00, cantAcumulada: 1.00, montoAnterior: 3780000, montoActual: 0, montoAcumulado: 3780000 },
                { numero: "2.5", nombre: "Losa de HºAº", unidad: "m³", cantidad: 1.20, precioUnitario: 3024000, precioTotal: 3628800, cantAnterior: 1.20, cantActual: 0.00, cantAcumulada: 1.20, montoAnterior: 3628800, montoActual: 0, montoAcumulado: 3628800 },
                { numero: "2.6", nombre: "Viga encadenado superior", unidad: "ml", cantidad: 120.00, precioUnitario: 207900, precioTotal: 24948000, cantAnterior: 120.00, cantActual: 0.00, cantAcumulada: 120.00, montoAnterior: 24948000, montoActual: 0, montoAcumulado: 24948000 }
            ]
        },
        {
            numero: "3",
            nombre: "Mamposteria de Elevación",
            items: [
                { numero: "3.1", nombre: "Mamposteria de nivelacion de 0.30m con ladrillo comun", unidad: "m²", cantidad: 48.00, precioUnitario: 190260, precioTotal: 9132480, cantAnterior: 43.00, cantActual: 5.00, cantAcumulada: 48.00, montoAnterior: 8181180, montoActual: 951300, montoAcumulado: 9132480 },
                { numero: "3.2", nombre: "Mamposteria de elevacion de 0.15m con ladrillo comun", unidad: "m²", cantidad: 645.00, precioUnitario: 121590, precioTotal: 78425550, cantAnterior: 390.00, cantActual: 192.00, cantAcumulada: 582.00, montoAnterior: 47420100, montoActual: 23345280, montoAcumulado: 70765380 },
                { numero: "3.3", nombre: "Envarillado de mamposterias c/ Ø 6", unidad: "ml", cantidad: 290.00, precioUnitario: 25200, precioTotal: 7308000, cantAnterior: 174.00, cantActual: 86.00, cantAcumulada: 260.00, montoAnterior: 4384800, montoActual: 2167200, montoAcumulado: 6552000 },
                { numero: "3.4", nombre: "Dinteles sobre aberturas", unidad: "ml", cantidad: 65.00, precioUnitario: 95760, precioTotal: 6224400, cantAnterior: 42.00, cantActual: 18.00, cantAcumulada: 60.00, montoAnterior: 4021920, montoActual: 1723680, montoAcumulado: 5745600 }
            ]
        },
        {
            numero: "4",
            nombre: "Aislaciones",
            items: [
                { numero: "4.1", nombre: "Horizontal de mamposteria c/pintura asfáltica", unidad: "ml", cantidad: 156.00, precioUnitario: 40320, precioTotal: 6289920, cantAnterior: 140.00, cantActual: 16.00, cantAcumulada: 156.00, montoAnterior: 5644800, montoActual: 645120, montoAcumulado: 6289920 },
                { numero: "4.2", nombre: "Aislacion de losa tecnica", unidad: "m²", cantidad: 10.00, precioUnitario: 119700, precioTotal: 1197000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "5",
            nombre: "Contrapiso",
            items: [
                { numero: "5.1", nombre: "De Hº de cascotes de 0.12m sobre terreno natural", unidad: "m²", cantidad: 303.00, precioUnitario: 53750, precioTotal: 16286250, cantAnterior: 0.00, cantActual: 90.00, cantAcumulada: 90.00, montoAnterior: 0, montoActual: 4837500, montoAcumulado: 4837500 },
                { numero: "5.2", nombre: "De Hº de cascotes envarillado p/ estacionamiento", unidad: "m²", cantidad: 36.00, precioUnitario: 253750, precioTotal: 9135000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "5.3", nombre: "De Hº de cascotes de 0.08m sobre losa", unidad: "m²", cantidad: 10.00, precioUnitario: 46250, precioTotal: 462500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "6",
            nombre: "Revoque",
            items: [
                { numero: "6.1", nombre: "Pared exterior, Dosif.: 1:4:20 + Hidrof.", unidad: "m²", cantidad: 340.00, precioUnitario: 56700, precioTotal: 19278000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "6.2", nombre: "Pared interior a dos capas, filtrado, Dosif.: 1:4:20 (hasta altura de cielorraso)", unidad: "m²", cantidad: 696.00, precioUnitario: 45360, precioTotal: 31570560, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "7",
            nombre: "Techo",
            items: [
                { numero: "7.1", nombre: "Estructura metalica p/ techo metalico de 2C tapado, correas de perfil C y cobertura con chapa termo acústica tipo Tpz/panel con relleno de isopor de 40mm", unidad: "m²", cantidad: 388.00, precioUnitario: 478800, precioTotal: 185774400, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "7.2", nombre: "Canaletas embutidas de chapa galvanizada", unidad: "ml", cantidad: 76.00, precioUnitario: 156000, precioTotal: 11856000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "7.3", nombre: "Babetas de chapa galvanizada p/ techo", unidad: "ml", cantidad: 60.00, precioUnitario: 91000, precioTotal: 5460000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "8",
            nombre: "Carpeta p/ piso",
            items: [
                { numero: "8.1", nombre: "Carpeta p/ piso", unidad: "m²", cantidad: 349.00, precioUnitario: 53750, precioTotal: 18758750, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "9",
            nombre: "Piso",
            items: [
                { numero: "9.1", nombre: "Colocacion de Piso Porcelanato interior de vivienda y garaje (Precio de piso previsto 100.000/m2)", unidad: "m²", cantidad: 281.00, precioUnitario: 226200, precioTotal: 63562200, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "9.2", nombre: "Colocacion de Piso ceramico en Area de Servicio, lavadero, tendedero, deposito, guardacasa, losa tecnica. (Precio de piso previsto 70.000/m2)", unidad: "m²", cantidad: 68.00, precioUnitario: 174850, precioTotal: 11889800, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "9.3", nombre: "Colocacion de Zocalo", unidad: "ml", cantidad: 150.00, precioUnitario: 77350, precioTotal: 11602500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "10",
            nombre: "Revestimientos",
            items: [
                { numero: "10.1", nombre: "Azulejo Porcelanato en baños (Precio azulejo previsto 120.000/m2)", unidad: "m²", cantidad: 85.00, precioUnitario: 254800, precioTotal: 21658000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "10.2", nombre: "Azulejo Porcelanato sobre mesada p/cocina y quincho (Precio azulejo previsto 120.000/m2) estimativo", unidad: "m²", cantidad: 14.00, precioUnitario: 254800, precioTotal: 3567200, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "10.3", nombre: "Azulejos ceramico lavadero (Precio azulejo previsto 80.000)", unidad: "m²", cantidad: 8.00, precioUnitario: 185900, precioTotal: 1487200, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "11",
            nombre: "Cielorraso",
            items: [
                { numero: "11.1", nombre: "Cielorraso de yeso acartonado 100% en interior", unidad: "m²", cantidad: 255.00, precioUnitario: 125000, precioTotal: 31875000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "11.2", nombre: "Cielorraso de yeso acartonado en garaje y aleros (p/ exterior)", unidad: "m²", cantidad: 1.00, precioUnitario: 150000, precioTotal: 150000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "11.3", nombre: "Diseños de rebajes, canaletas p/ luz indirecta en sala/comedor, quincho, cocina, suite principal, cortineros.", unidad: "gl", cantidad: 1.00, precioUnitario: 9375000, precioTotal: 9375000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "12",
            nombre: "Carpinteria de Aluminio - Vidrios Templados",
            items: [
                { numero: "12.1", nombre: "Aberturas de vidrios templados gris y carpinteria de aluminio color negro linea inova. Ventanas y puertas corredizas sistema mano amiga.", unidad: "gl", cantidad: 1.00, precioUnitario: 67600000, precioTotal: 67600000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "12.2", nombre: "Puertas de aluminio de 0,80x2,10 p/ tendedero", unidad: "und", cantidad: 1.00, precioUnitario: 2520000, precioTotal: 2520000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "12.3", nombre: "Tela mosquitera p/ 1 hoja en puertas corredizas y ventanas", unidad: "gl", cantidad: 1.00, precioUnitario: 16884000, precioTotal: 16884000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "13",
            nombre: "Carpinteria de Madera",
            items: [
                { numero: "13.1", nombre: "Aberturas de madera - puertas internas tipo placa con buñas, cerraduras marca pado, con topes y burletes de goma, pintadas en color tabaco. 13 puertas internas batientes", unidad: "gl", cantidad: 1.00, precioUnitario: 27885000, precioTotal: 27885000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "13.2", nombre: "Puerta principal de 1 hoja de 1,40x2,10 c/ tiradores y detalles según diseño", unidad: "und", cantidad: 1.00, precioUnitario: 7500000, precioTotal: 7500000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "14",
            nombre: "Instalacion Electrica",
            items: [
                { numero: "14.1", nombre: "Acometida, Tablero ppal., tablero de señales debiles, llaves TM monofasicas y trifasicas, aterramiento. Llave limitadora. Electroductos marca tigre, conductores marca Impaco, llaves TM marca schneider/ABB, placas, tomas y puntos marca cambre/conatel blanco. Registros electricos; Artefactos de iluminacion estandar precio promedio 10usd - Spot y plafones de embutir tradicionales. (No incluye artefactos especiales, colgantes, lustres, arañas) Incluye gestiones en la Ande. (Estimativo, a definir segun proyecto de iluminacion)", unidad: "gl", cantidad: 1.00, precioUnitario: 67200000, precioTotal: 67200000, cantAnterior: 0.10, cantActual: 0.00, cantAcumulada: 0.10, montoAnterior: 6720000, montoActual: 0, montoAcumulado: 6720000 }
            ]
        },
        {
            numero: "15",
            nombre: "Instalacion Desague Cloacal",
            items: [
                { numero: "15.1", nombre: "Camara Septica ( 2.20x1.20x1.00)", unidad: "gl", cantidad: 1.00, precioUnitario: 3770000, precioTotal: 3770000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "15.2", nombre: "Cañerias de desagues y conexiones a registros y camara en gral., conexión a red de desague en calle", unidad: "gl", cantidad: 1.00, precioUnitario: 2990000, precioTotal: 2990000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "15.3", nombre: "Registros cloacales (40x40x40)", unidad: "und", cantidad: 10.00, precioUnitario: 390000, precioTotal: 3900000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "15.4", nombre: "Desague p/ pileta de lavar y lavarropas", unidad: "gl", cantidad: 1.00, precioUnitario: 910000, precioTotal: 910000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "15.5", nombre: "Desague p/ pileta de cocina c/ desengrasador, desague p/ lavavajillas", unidad: "gl", cantidad: 1.00, precioUnitario: 1300000, precioTotal: 1300000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "15.6", nombre: "Desague cloacal de baños", unidad: "und", cantidad: 4.00, precioUnitario: 1430000, precioTotal: 5720000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "16",
            nombre: "Instalacion de Agua Corriente",
            items: [
                { numero: "16.1", nombre: "Provision e instalacion de tanque de agua Cap.: 2.000 lts con bomba de 1hp+presurizador", unidad: "gl", cantidad: 1.00, precioUnitario: 6890000, precioTotal: 6890000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.2", nombre: "Instalacion de red de alimentacion de agua", unidad: "gl", cantidad: 1.00, precioUnitario: 1560000, precioTotal: 1560000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.3", nombre: "Instalacion de Agua fria/caliente en baños con ducha, c/ conexion p/ ducha higienica (con cañerias termofusion)", unidad: "und", cantidad: 3.00, precioUnitario: 1950000, precioTotal: 5850000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.4", nombre: "Instalacion de Agua fria p/ baño social", unidad: "und", cantidad: 1.00, precioUnitario: 1430000, precioTotal: 1430000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.5", nombre: "Instalacion de Agua fria/caliente p/ pileta de cocina y quincho", unidad: "und", cantidad: 1.00, precioUnitario: 910000, precioTotal: 910000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.6", nombre: "Instalacion de Agua fria p/ pileta de lavar y lavarropas", unidad: "und", cantidad: 1.00, precioUnitario: 780000, precioTotal: 780000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "16.7", nombre: "Instalacion de red de alimentacion p/ 4 canillas externas", unidad: "gl", cantidad: 1.00, precioUnitario: 1430000, precioTotal: 1430000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "17",
            nombre: "Artefactos Sanitarios, griferias, accesorios",
            items: [
                { numero: "17.1", nombre: "Baños suite ppal., hijos: artefactos incepa blanco porcelana, bacha de sobreponer, griferias monocomando docol standar y accesorios linea idea/single)", unidad: "und", cantidad: 2.00, precioUnitario: 4975000, precioTotal: 9950000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.2", nombre: "Baño quincho (incluye artefactos incepa, bacha de sobreponer, griferias docol standar y accesorios linea idea/single)", unidad: "und", cantidad: 1.00, precioUnitario: 4387500, precioTotal: 4387500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.3", nombre: "Baño social (incluye artefactos incepa, bacha de sobreponer, griferias docol standar y accesorios linea idea/single)", unidad: "und", cantidad: 1.00, precioUnitario: 3437500, precioTotal: 3437500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.4", nombre: "Mesadas de marmol travertino o negro san gabriel p/ 4 baños", unidad: "gl", cantidad: 1.00, precioUnitario: 6760000, precioTotal: 6760000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.5", nombre: "Cocina - Instalacion de pileta inox tramontina 2 bacha embutida, canilla mezcladora monocomando docol flexible (no incluye granito, a definir con muebles)", unidad: "und", cantidad: 1.00, precioUnitario: 3250000, precioTotal: 3250000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.6", nombre: "Area de servicio, pileta 1 bacha de fibra p/ lavadero, con canilla doble pico agua fria", unidad: "und", cantidad: 1.00, precioUnitario: 1250000, precioTotal: 1250000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.7", nombre: "Termocalefon de 80 lts Ariston con soporte e instalacion p/ baños", unidad: "und", cantidad: 3.00, precioUnitario: 2812500, precioTotal: 8437500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.8", nombre: "Termocalefon de 60 lts con soporte e instalacion p/ cocina, pileta quincho", unidad: "und", cantidad: 1.00, precioUnitario: 2562500, precioTotal: 2562500, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "17.9", nombre: "Cubre ducha, en vidrio templado de 8mm incoloro p/ 3 baños", unidad: "gl", cantidad: 1.00, precioUnitario: 4500000, precioTotal: 4500000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "18",
            nombre: "Instalacion de Desague Pluvial",
            items: [
                { numero: "18.1", nombre: "Bajadas de PVC Liviano Ø 100mm embutido p/ desague de techo", unidad: "ml", cantidad: 56.00, precioUnitario: 66250, precioTotal: 3710000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "18.2", nombre: "Tubería de PVC Liviano Ø 100mm p/ desague enterrado", unidad: "ml", cantidad: 86.00, precioUnitario: 47500, precioTotal: 4085000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "18.3", nombre: "Registros de desagues pluviales (a definir según proyecto)", unidad: "und", cantidad: 16.00, precioUnitario: 362500, precioTotal: 5800000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "19",
            nombre: "Pintura",
            items: [
                { numero: "19.1", nombre: "Enduido y pintura general de paredes interior y exterior, cielorraso de yeso, canalones. Enduido Blascor, pintura p/ base mega y terminacion 2 manos c/ suvinil.", unidad: "gl", cantidad: 1.00, precioUnitario: 62500000, precioTotal: 62500000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        },
        {
            numero: "20",
            nombre: "Varios",
            items: [
                { numero: "20.1", nombre: "Churrasquera c/ boca de 1,20 mt. y 0,70 de profundidad, base y paredes internas con ladrillo refractario, ducto metalico. Parrilla manual enlozada. Texturado y pintura", unidad: "gl", cantidad: 1.00, precioUnitario: 8840000, precioTotal: 8840000, cantAnterior: 0.00, cantActual: 0.20, cantAcumulada: 0.20, montoAnterior: 0, montoActual: 1768000, montoAcumulado: 1768000 },
                { numero: "20.2", nombre: "Revestimiento en fachada panel ripado en pared estacionamiento", unidad: "gl", cantidad: 1.00, precioUnitario: 4200000, precioTotal: 4200000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "20.3", nombre: "Revestimiento cemento quemado en pared de fachada y lateral de garaje. Revestimiento de ladrillo quemado en 4 franjas de 1,00x3,00. Revestimiento de piedra en volumen de baño social en fachada", unidad: "gl", cantidad: 1.00, precioUnitario: 4800000, precioTotal: 4800000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "20.4", nombre: "Limpieza gruesa de obra y retiro de escombros y desechos de obra", unidad: "gl", cantidad: 1.00, precioUnitario: 5520000, precioTotal: 5520000, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 },
                { numero: "20.5", nombre: "1) Acceso peatonal de bloques de H° de 2,20x1,70 y terminacion con resina de proteccion. 2) Acceso vehicular con adoquines de Hº tipo paver medidas 6,00x7,00 c/ terminacion con resina de proteccion. 3) Vereda de 22,00mts de largo y 1,50 de ancho con adoquines de Hº tipo paver y cordones perimetrales y terminacion con resina de proteccion. 4) Nicho p/ medidor y basurero. 5) Cañerias de cobre, cañerias de desague, e intercomunicacion de equipo interior y exterior de 8 equipos de A.A. - No incluye equipos de A.A. e instalacion 6) Baranda de hierro artistico", unidad: "gl", cantidad: 1.00, precioUnitario: 50100000, precioTotal: 50100000, cantAnterior: 0.00, cantActual: 0.05, cantAcumulada: 0.05, montoAnterior: 0, montoActual: 2505000, montoAcumulado: 2505000 },
                { numero: "20.6", nombre: "Descuento aplicado", unidad: "gl", cantidad: 1.00, precioUnitario: -66795110, precioTotal: -66795110, cantAnterior: 0.00, cantActual: 0.00, cantAcumulada: 0.00, montoAnterior: 0, montoActual: 0, montoAcumulado: 0 }
            ]
        }
    ],

    resumen: {
        totalEjecutado: 237666280,
        porcentajePresupuesto: 22.85,
        devolucionAnticipo: 47533256,
        totalNeto: 190133024,
        montoAnterior: 199723200,
        montoActual: 37943080,
        montoAcumulado: 237666280
    }
};

// Funciones de utilidad
function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-PY').format(valor);
}

function calcularProgreso(acumulado, total) {
    if (total === 0) return 0;
    return ((acumulado / total) * 100).toFixed(2);
}

function obtenerEstado(progreso) {
    if (progreso >= 100) return 'completado';
    if (progreso > 0) return 'en-proceso';
    return 'pendiente';
}

function obtenerColor(progreso) {
    if (progreso >= 100) return '#10b981';
    if (progreso >= 50) return '#f59e0b';
    if (progreso > 0) return '#3b82f6';
    return '#9ca3af';
}

// Inicializar la aplicación
function inicializarApp() {
    actualizarDashboard();
    cargarTablaRubros();
    generarGraficoRubros();
    actualizarResumenCertificados();
}

// Actualizar Dashboard Principal
function actualizarDashboard() {
    const { presupuestoTotal } = datosObra.informacion;
    const { totalEjecutado, porcentajePresupuesto } = datosObra.resumen;
    const pendiente = presupuestoTotal - totalEjecutado;

    document.getElementById('presupuesto-total').textContent = formatearMoneda(presupuestoTotal);
    document.getElementById('total-ejecutado').textContent = formatearMoneda(totalEjecutado);
    document.getElementById('pendiente').textContent = formatearMoneda(pendiente);
    document.getElementById('porcentaje-total').textContent = porcentajePresupuesto.toFixed(2);

    const progressFill = document.getElementById('progress-fill-main');
    setTimeout(() => {
        progressFill.style.width = porcentajePresupuesto + '%';
    }, 100);
}

// Cargar Tabla de Rubros
function cargarTablaRubros() {
    const tbody = document.getElementById('tabla-body');
    tbody.innerHTML = '';

    datosObra.rubros.forEach(rubro => {
        // Calcular totales del rubro
        let totalRubro = 0;
        let ejecutadoRubro = 0;

        rubro.items.forEach(item => {
            totalRubro += item.precioTotal;
            ejecutadoRubro += item.montoAcumulado;
        });

        const progresoRubro = calcularProgreso(ejecutadoRubro, totalRubro);
        const estadoRubro = obtenerEstado(progresoRubro);

        // Fila del rubro principal
        const trRubro = document.createElement('tr');
        trRubro.classList.add('rubro-principal');
        trRubro.innerHTML = `
            <td><strong>${rubro.numero}</strong></td>
            <td colspan="6"><strong>${rubro.nombre}</strong></td>
            <td><strong>₲ ${formatearMoneda(ejecutadoRubro)}</strong></td>
            <td>
                <div class="progress-cell">
                    <strong>${progresoRubro}%</strong>
                    <div class="progress-mini">
                        <div class="progress-mini-fill" style="width: ${progresoRubro}%; background: ${obtenerColor(progresoRubro)};"></div>
                    </div>
                </div>
            </td>
            <td>
                <span class="estado-badge estado-${estadoRubro}">
                    ${estadoRubro === 'completado' ? 'Completado' : estadoRubro === 'en-proceso' ? 'En Proceso' : 'Pendiente'}
                </span>
            </td>
        `;
        tbody.appendChild(trRubro);

        // Filas de sub-items
        rubro.items.forEach(item => {
            const progresoItem = calcularProgreso(item.cantAcumulada, item.cantidad);
            const estadoItem = obtenerEstado(progresoItem);

            const trItem = document.createElement('tr');
            trItem.classList.add('sub-item');
            trItem.innerHTML = `
                <td>${item.numero}</td>
                <td style="padding-left: 25px;">${item.nombre}</td>
                <td>${item.unidad}</td>
                <td>${item.cantidad.toFixed(2)}</td>
                <td>${item.cantAcumulada.toFixed(2)}</td>
                <td>₲ ${formatearMoneda(item.precioUnitario)}</td>
                <td>₲ ${formatearMoneda(item.precioTotal)}</td>
                <td>₲ ${formatearMoneda(item.montoAcumulado)}</td>
                <td>
                    <div class="progress-cell">
                        ${progresoItem}%
                        <div class="progress-mini">
                            <div class="progress-mini-fill" style="width: ${progresoItem}%; background: ${obtenerColor(progresoItem)};"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="estado-badge estado-${estadoItem}">
                        ${estadoItem === 'completado' ? 'Completado' : estadoItem === 'en-proceso' ? 'En Proceso' : 'Pendiente'}
                    </span>
                </td>
            `;
            tbody.appendChild(trItem);
        });
    });
}

// Generar Gráfico de Rubros
function generarGraficoRubros() {
    const chartContainer = document.getElementById('chart-rubros');
    chartContainer.innerHTML = '';

    datosObra.rubros.forEach(rubro => {
        let totalRubro = 0;
        let ejecutadoRubro = 0;

        rubro.items.forEach(item => {
            totalRubro += item.precioTotal;
            ejecutadoRubro += item.montoAcumulado;
        });

        const progresoRubro = calcularProgreso(ejecutadoRubro, totalRubro);

        const chartBar = document.createElement('div');
        chartBar.classList.add('chart-bar');
        chartBar.innerHTML = `
            <div class="chart-label">
                <span class="chart-label-text">${rubro.numero}. ${rubro.nombre}</span>
                <span class="chart-label-value">${progresoRubro}%</span>
            </div>
            <div class="chart-progress">
                <div class="chart-progress-fill" style="width: 0%; background: ${obtenerColor(progresoRubro)};" data-width="${progresoRubro}">
                    ${parseFloat(progresoRubro) > 10 ? progresoRubro + '%' : ''}
                </div>
            </div>
        `;
        chartContainer.appendChild(chartBar);
    });

    // Animar las barras
    setTimeout(() => {
        document.querySelectorAll('.chart-progress-fill').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 100);
}

// Actualizar Resumen de Certificados
function actualizarResumenCertificados() {
    const { montoAnterior, montoActual, montoAcumulado } = datosObra.resumen;
    const devolucionAnticipo = montoAcumulado * 0.20;
    const totalNeto = montoAcumulado - devolucionAnticipo;

    document.getElementById('monto-anterior').textContent = formatearMoneda(montoAnterior);
    document.getElementById('monto-actual').textContent = formatearMoneda(montoActual);
    document.getElementById('monto-acumulado').textContent = formatearMoneda(montoAcumulado);
    document.getElementById('devolucion-anticipo').textContent = formatearMoneda(devolucionAnticipo);
    document.getElementById('total-neto').textContent = formatearMoneda(totalNeto);
}

// Filtrar Rubros
function filtrarRubros(filtro) {
    // Actualizar botones activos
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filas = document.querySelectorAll('#tabla-body tr');

    filas.forEach(fila => {
        if (fila.classList.contains('rubro-principal')) {
            fila.style.display = '';
            return;
        }

        const estadoBadge = fila.querySelector('.estado-badge');
        if (!estadoBadge) return;

        const estado = estadoBadge.classList.contains('estado-completado') ? 'completados' :
                       estadoBadge.classList.contains('estado-en-proceso') ? 'en-proceso' :
                       'pendientes';

        if (filtro === 'todos') {
            fila.style.display = '';
        } else {
            fila.style.display = estado === filtro ? '' : 'none';
        }
    });
}

// Exportar Datos a CSV
function exportarDatos() {
    let csv = 'N°,Rubro,Unidad,Cantidad Total,Cantidad Acumulada,Precio Unitario,Precio Total,Monto Ejecutado,Progreso %,Estado\n';

    datosObra.rubros.forEach(rubro => {
        rubro.items.forEach(item => {
            const progreso = calcularProgreso(item.cantAcumulada, item.cantidad);
            const estado = obtenerEstado(progreso);
            csv += `"${item.numero}","${item.nombre}","${item.unidad}",${item.cantidad},${item.cantAcumulada},${item.precioUnitario},${item.precioTotal},${item.montoAcumulado},${progreso},${estado}\n`;
        });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'avance_obra_' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
}

// Imprimir Reporte
function imprimirReporte() {
    window.print();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarApp);
