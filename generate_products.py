#!/usr/bin/env python3
"""
Generate 10 product pages for Hydrolux Group (dark & light themes).
Run: python3 generate_products.py
"""
import os, json

BASE_DARK  = "/Users/bozhidarbelchev/.gemini/antigravity/scratch/hydrolux-group"
BASE_LIGHT = "/Users/bozhidarbelchev/.gemini/antigravity/scratch/hydrolux-group-light"

PRODUCTS = [
    {
        "id": 1,
        "slug": "product-1",
        "sku": "HLG-H1SN-10",
        "title": "Хидравличен маркуч 2SN DN10",
        "category": "hoses",
        "categoryName": "Хидравлични маркучи",
        "price": 25.50,
        "image": "assets/hoses.png",
        "tag": "Популярен",
        "short_desc": "Висококачествен гъвкав хидравличен маркуч с две телени оплетки с изключително висока устойчивост на абразия и атмосферни условия. Подходящ за минерални и биологични масла, вода и емулсии.",
        "long_desc": "Маркучът EN 853 2SN е един от най-разпространените промишлени хидравлични маркучи в европейската индустрия. Използва се навсякъде — от мобилна строителна техника до стационарни хидравлични преси и пакетиращи машини. Вътрешният слой е изработен от NBR/синтетичен каучук, армиран с две спирални стоманени оплетки с висока якост. Външният слой е устойчив на абразия, атмосферно стареене, масла и умерено химическо въздействие.",
        "benefits": [
            "Сертифициран по EN 853 2SN / SAE 100 R2AT",
            "Работно налягане до 330 bar",
            "Импулсна издръжливост > 1 000 000 цикъла",
            "Температурен диапазон: -40°C до +121°C",
            "Вътрешен диаметър: 9,5 mm (3/8\")",
        ],
        "dim_headers": ["DN", "Вътр. Ø (mm)", "Външен Ø (mm)", "Раб. налягане (bar)", "Разруш. налягане (bar)", "Ог. радиус (mm)", "Тегло (kg/m)"],
        "dim_rows": [
            ["DN 6",  "6,4",  "14,2", "275", "1 100", "100", "0,28"],
            ["DN 8",  "7,9",  "15,6", "250", "1 000", "115", "0,32"],
            ["DN 10", "9,5",  "17,4", "330", "1 320", "130", "0,38"],
            ["DN 12", "12,7", "20,5", "275", "1 100", "180", "0,49"],
            ["DN 16", "15,9", "24,4", "215", "860",   "240", "0,63"],
            ["DN 19", "19,0", "27,7", "165", "660",   "300", "0,80"],
            ["DN 25", "25,4", "34,9", "130", "520",   "420", "1,14"],
        ],
        "related": [2, 7, 8],
    },
    {
        "id": 2,
        "slug": "product-2",
        "sku": "HLG-HR15-25",
        "title": "Хидравличен маркуч R15 DN25 Super High",
        "category": "hoses",
        "categoryName": "Хидравлични маркучи",
        "price": 75.00,
        "image": "assets/hoses.png",
        "tag": "Премиум",
        "short_desc": "Изключително издръжлив маркуч за ултра високо налягане и тежки експлоатационни условия. Идеален за строителна, минна и сондажна техника с променливи натоварвания.",
        "long_desc": "Маркучът EN 856 R15 е проектиран за системи с екстремно налягане над 420 bar. Конструиран с шест спирални стоманени навивки с висока якост на опън, той е предпочитан за управляващи тръбопроводи на хидравлични преси, бетонпомпи и тежки кранове. Вътрешният слой е от безшевна NBR туба, устойчива на всички хидравлични масла, HWCF и HF-A/B/C течности.",
        "benefits": [
            "Стандарт EN 856 R15 / SAE 100 R15",
            "6 стоманени спирални навивки",
            "Работно налягане: 420 bar при DN 25",
            "Разрушаващо налягане: 1 680 bar",
            "Температурен диапазон: -40°C до +121°C",
        ],
        "dim_headers": ["DN", "Вътр. Ø (mm)", "Външен Ø (mm)", "Раб. налягане (bar)", "Разруш. налягане (bar)", "Ог. радиус (mm)", "Тегло (kg/m)"],
        "dim_rows": [
            ["DN 12", "12,7", "27,2", "560", "2 240", "200", "1,10"],
            ["DN 16", "15,9", "31,0", "480", "1 920", "250", "1,35"],
            ["DN 19", "19,0", "35,0", "480", "1 920", "305", "1,68"],
            ["DN 25", "25,4", "42,8", "420", "1 680", "380", "2,25"],
            ["DN 32", "31,8", "49,5", "350", "1 400", "480", "2,90"],
            ["DN 38", "38,1", "57,5", "315", "1 260", "560", "3,80"],
        ],
        "related": [1, 7, 8],
    },
    {
        "id": 3,
        "slug": "product-3",
        "sku": "HLG-CYL-6336",
        "title": "Хидравличен цилиндър HM2-63/36-250",
        "category": "cylinders",
        "categoryName": "Цилиндри & Компоненти",
        "price": 340.00,
        "image": "assets/cylinders.png",
        "tag": "Гаранция",
        "short_desc": "Професионален хидравличен цилиндър за общо индустриално приложение с хромиран бутален прът и прецизно шлифована тръба. Двойно уплътнен за работа при тежки натоварвания.",
        "long_desc": "Хидравличният цилиндър от серия HM2 е стандартен ISO 6020-2 двойнодействащ цилиндър за промишлена употреба. Тялото е изработено от безшевна хонингована стоманена тръба с грапавост Ra ≤ 0.4 μm. Бутален прът — от 45Cr хромирана и поврелена стомана с дебелина на хромирането 20–25 μm. Предният капак е оборудван с водач от PTFE/бронз и вградено набивочно уплътнение с прахозащитна чистачка.",
        "benefits": [
            "Стандарт: ISO 6020-2 (MP5)",
            "Буталото с уплътнение PTFE + O-пръстен",
            "Хромиран прът с твърдост HRC ≥ 58",
            "Максимално налягане: 250 bar",
            "Работна температура: -30°C до +80°C",
        ],
        "dim_headers": ["Ø Бутало (mm)", "Ø Прът (mm)", "Ход (mm)", "Раб. налягане (bar)", "Сила при разш. (kN)", "Сила при прибиране (kN)", "Мин. дължина (mm)"],
        "dim_rows": [
            ["50",  "28",  "100",  "250", "49,1",  "33,8",  "225"],
            ["50",  "28",  "200",  "250", "49,1",  "33,8",  "325"],
            ["63",  "36",  "250",  "250", "77,9",  "54,1",  "415"],
            ["63",  "36",  "400",  "250", "77,9",  "54,1",  "565"],
            ["80",  "45",  "250",  "250", "125,7", "86,2",  "440"],
            ["80",  "45",  "500",  "250", "125,7", "86,2",  "690"],
            ["100", "56",  "300",  "250", "196,3", "132,3", "500"],
            ["100", "56",  "600",  "250", "196,3", "132,3", "800"],
            ["125", "70",  "400",  "250", "306,8", "210,0", "640"],
            ["160", "90",  "500",  "250", "502,7", "342,6", "790"],
        ],
        "related": [4, 9, 5],
    },
    {
        "id": 4,
        "slug": "product-4",
        "sku": "HLG-TEL3-700",
        "title": "Телескопичен цилиндър 3-степенен 700мм",
        "category": "cylinders",
        "categoryName": "Цилиндри & Компоненти",
        "price": 680.00,
        "image": "assets/cylinders.png",
        "tag": "Ново",
        "short_desc": "Хидравличен телескопичен цилиндър, специално проектиран за селскостопански ремаркета и малки самосвали. Хромирани секции с висока степен на полиране против износване.",
        "long_desc": "Телескопичният цилиндър серия TLS е еднодействащ (gravity return) с три стоманени секции и интегрирани полиуретанови уплътнения. Проектиран за монтаж в стандартните рамки на ремаркета-самосвали и градински трактори с хидравлика. Всяка секция е изработена от ERW стоманена тръба с хонингован вътрешен диаметър и твърдо хромиран (20 μm) изходящ прът.",
        "benefits": [
            "3 телескопични степени",
            "Максимален ход: 700 mm",
            "Работно налягане: 180 bar",
            "Товароносимост: до 8 тона",
            "Лесен монтаж — стандартен пин Ø40",
        ],
        "dim_headers": ["Модел", "Степени", "Ход (mm)", "Затворена дължина (mm)", "Ø I степен (mm)", "Ø II степен (mm)", "Ø III степен (mm)", "Работно налягане (bar)"],
        "dim_rows": [
            ["TLS-2-500", "2", "500", "420",  "102", "76",  "—",  "180"],
            ["TLS-3-700", "3", "700", "510",  "114", "89",  "63", "180"],
            ["TLS-3-900", "3", "900", "610",  "127", "102", "76", "180"],
            ["TLS-4-1200","4", "1200","710",  "140", "114", "89", "160"],
            ["TLS-5-1600","5", "1600","890",  "168", "140", "114","140"],
        ],
        "related": [3, 9, 5],
    },
    {
        "id": 5,
        "slug": "product-5",
        "sku": "HLG-SEAL-K18",
        "title": "Комплект бутални уплътнители K18 63-48",
        "category": "seals",
        "categoryName": "Хидравлични уплътнители",
        "price": 18.20,
        "image": "assets/seals.png",
        "tag": "Налично",
        "short_desc": "Петкомпонентно уплътнение за бутало, осигуряващо абсолютна херметичност при тежки хидравлични режими. Висока издръжливост срещу екструзия и триене.",
        "long_desc": "Комплектът K18 включва: основно бутално уплътнение (PU), анти-екструзионни пръстени (POM), О-пръстен (NBR 70 Shore) и двустранна водеща лента (PTFE/Бронз). Подходящ за цилиндри с бутало Ø63 mm и Ø на канала за уплътнение 48 mm. Материалите са подбрани за съвместимост с минерални масла, биологични масла (HETG/HEPG) и воден глицол (HFC).",
        "benefits": [
            "Комплект от 5 елемента",
            "Работно налягане: до 350 bar",
            "Скорост: до 0,5 m/s",
            "Температура: -30°C до +110°C",
            "Съвместим с HLP, HETG, HFC течности",
        ],
        "dim_headers": ["Бутало Ø (mm)", "Канал Ø (mm)", "Широчина B (mm)", "Дълбочина H (mm)", "Материал", "Раб. налягане (bar)"],
        "dim_rows": [
            ["40",  "26", "15,5", "7,0",  "PU+NBR+POM", "350"],
            ["50",  "36", "17,5", "7,0",  "PU+NBR+POM", "350"],
            ["63",  "48", "20,5", "8,0",  "PU+NBR+POM", "350"],
            ["80",  "62", "22,5", "9,0",  "PU+NBR+POM", "350"],
            ["100", "80", "25,0", "10,0", "PU+NBR+POM", "320"],
            ["125", "103","28,0", "11,0", "PU+NBR+POM", "300"],
            ["160", "135","32,0", "12,5", "PU+NBR+POM", "280"],
            ["200", "172","36,0", "14,0", "PU+NBR+POM", "250"],
        ],
        "related": [6, 3, 4],
    },
    {
        "id": 6,
        "slug": "product-6",
        "sku": "HLG-ORING-K386",
        "title": "О-пръстени кутия комплект NBR 70 (386 бр.)",
        "category": "seals",
        "categoryName": "Хидравлични уплътнители",
        "price": 45.00,
        "image": "assets/seals.png",
        "tag": "Практично",
        "short_desc": "Удобна сортирана кутия с най-често използваните метрични размери хидравлични О-пръстени. Подходяща за сервизи, земеделски бази и ремонтни групи.",
        "long_desc": "Комплектът съдържа 386 броя NBR 70 Shore О-пръстени в 30 различни метрични размера (от Ø 3×1.5 до Ø 75×3.0 mm), наредени в прозрачни полипропиленови отделения с етикет за всеки размер. NBR 70 е стандартният еластомер за хидравлични масла, горива и вода. Идеален за бърза наличност при аварийни ремонти.",
        "benefits": [
            "386 бр. в 30 размера",
            "Материал: NBR 70 Shore A",
            "Метрични размери — DIN 3771",
            "Устойчиви на масла, горива и вода",
            "Температура: -30°C до +100°C",
        ],
        "dim_headers": ["Размер (d1 × d2 mm)", "Брой в кутията", "Работна среда", "Макс. налягане (bar)", "Твърдост (Shore A)"],
        "dim_rows": [
            ["3,0 × 1,5",  "20", "Масло, Вода", "400", "70"],
            ["4,0 × 1,5",  "20", "Масло, Вода", "400", "70"],
            ["5,0 × 1,5",  "20", "Масло, Вода", "400", "70"],
            ["6,0 × 1,5",  "15", "Масло, Вода", "400", "70"],
            ["7,0 × 1,5",  "15", "Масло, Вода", "400", "70"],
            ["8,0 × 1,5",  "15", "Масло, Вода", "400", "70"],
            ["10,0 × 2,0", "15", "Масло, Вода", "350", "70"],
            ["12,0 × 2,0", "15", "Масло, Вода", "350", "70"],
            ["14,0 × 2,0", "10", "Масло, Вода", "350", "70"],
            ["16,0 × 2,0", "10", "Масло, Вода", "350", "70"],
            ["18,0 × 2,0", "10", "Масло, Вода", "350", "70"],
            ["20,0 × 2,5", "10", "Масло, Вода", "300", "70"],
            ["25,0 × 2,5", "8",  "Масло, Вода", "300", "70"],
            ["30,0 × 3,0", "8",  "Масло, Вода", "280", "70"],
            ["40,0 × 3,0", "6",  "Масло, Вода", "280", "70"],
            ["50,0 × 3,0", "5",  "Масло, Вода", "260", "70"],
            ["63,0 × 3,0", "4",  "Масло, Вода", "260", "70"],
            ["75,0 × 3,0", "4",  "Масло, Вода", "250", "70"],
        ],
        "related": [5, 3, 4],
    },
    {
        "id": 7,
        "slug": "product-7",
        "sku": "HLG-FIT-NIP12",
        "title": "Двоен нипел адаптер BSP 1/2\" - 1/2\"",
        "category": "fittings",
        "categoryName": "Фитинги & Накрайници",
        "price": 6.40,
        "image": "assets/fittings.png",
        "tag": "Топ цена",
        "short_desc": 'Високоякостен метален адаптер за свързване на маркучи, клапани и помпи с женски резби 1/2". Цинковото покритие осигурява защита от корозия в продължение на години.',
        "long_desc": 'Двойният нипел е стандартизиран по DIN 2982 / ISO 228-1 с BSP (BSPP) резба. Изработен от C45 въглеродна стомана с електролитично поцинковане (8–12 μm). Уплътнението при монтаж се осигурява с плоска уплътнителна шайба (не е включена) или с PTFE лента. Подходящ за хидравлика, пневматика и водни системи. Налични варианти: прав, удължен и с накрайник.',
        "benefits": [
            'BSP (G) резба — ISO 228-1',
            "Въглеродна стомана C45",
            "Цинково покритие 8–12 μm",
            "Максимално налягане: 350 bar",
            "Работна температура: -20°C до +100°C",
        ],
        "dim_headers": ["Размер G (BSP)", "Дюза L (mm)", "Ключ SW (mm)", "Раб. налягане (bar)", "Тегло (g)"],
        "dim_rows": [
            ['G 1/8"', "30", "12", "400", "28"],
            ['G 1/4"', "34", "17", "380", "55"],
            ['G 3/8"', "38", "22", "370", "88"],
            ['G 1/2"', "42", "27", "350", "138"],
            ['G 3/4"', "50", "36", "330", "230"],
            ['G 1"',   "55", "41", "300", "380"],
            ['G 1 1/4"',"62","50", "280", "550"],
            ['G 1 1/2"',"68","55", "250", "730"],
            ['G 2"',   "78", "65", "220", "1050"],
        ],
        "related": [8, 10, 1],
    },
    {
        "id": 8,
        "slug": "product-8",
        "sku": "HLG-QC-ISOA12",
        "title": "Бърза хидравлична връзка ISO-A 1/2\" комплект",
        "category": "fittings",
        "categoryName": "Фитинги & Накрайници",
        "price": 29.00,
        "image": "assets/fittings.png",
        "tag": "Хит",
        "short_desc": "Комплект мъжка и женска бърза хидравлична връзка за бързо свързване/разединяване на прикачен инвентар към трактори, комбайни и индустриални машини.",
        "long_desc": "Бързата хидравлична връзка ISO 7241-1 Series A е предназначена за многократно свързване и разединяване на хидравлични линии без инструменти. Женската (socket) страна е оборудвана с механизъм за заключване от сферичен тип. При разединяване клапанът автоматично затваря и двете страни, предотвратявайки загуба на масло и навлизане на прах. Налични варианти — заключване с ръкав (sleeve lock) и с бутон (push-lock).",
        "benefits": [
            "ISO 7241-1 Series A",
            "Автоматично двойно запиране",
            "Включен прахозащитен капак",
            "Работно налягане: 250 bar",
            "Съвместима с ISO-A конектори на всички марки",
        ],
        "dim_headers": ["Размер (DN)", "BSP резба", "Раб. налягане (bar)", "Максимален дебит (L/min)", "Загуба на масло при разед. (ml)", "Тегло компл. (g)"],
        "dim_rows": [
            ["DN 6",  '1/4"',  "250", "15",  "< 1,5", "90"],
            ["DN 8",  '3/8"',  "250", "30",  "< 2,0", "145"],
            ["DN 10", '1/2"',  "250", "60",  "< 2,5", "220"],
            ["DN 12", '1/2"',  "250", "90",  "< 3,0", "310"],
            ["DN 16", '3/4"',  "210", "150", "< 4,0", "470"],
            ["DN 19", '3/4"',  "210", "220", "< 5,0", "680"],
            ["DN 25", '1"',    "175", "380", "< 7,0", "1050"],
        ],
        "related": [7, 10, 1],
    },
    {
        "id": 9,
        "slug": "product-9",
        "sku": "HLG-PUMP-G2-14",
        "title": "Зъбна хидравлична помпа Група 2 — 14 cc",
        "category": "cylinders",
        "categoryName": "Цилиндри & Компоненти",
        "price": 185.00,
        "image": "assets/cylinders.png",
        "tag": "Оферта",
        "short_desc": "Надеждна зъбна помпа за хидравлични агрегати, селскостопанска техника и малки преси. Осигурява стабилен дебит и високо работно налягане.",
        "long_desc": "Зъбната помпа от Група 2 (ф80 монтажен фланец, конусен вал 1:8) е стандартизирана за широко приложение в европейската промишленост и мобилна хидравлика. Корпусът е от алуминиева сплав (EN-AC-46000) с хонинговани зъбни колела от легирана стомана с точност ISO 6. Вграденото уплътнение е NBR с допълнителен PTFE хидравличен рингел. Входен порт: SAE или BSP; Изходен порт: SAE или BSP.",
        "benefits": [
            "Стандарт — Група 2, фланец ф80",
            "Работен обем: 14 cm³/об",
            "Максимални обороти: 3 000 rpm",
            "Номинално налягане: 250 bar",
            "Монтажен вал: конус 1:8 (ключ Ø25)",
        ],
        "dim_headers": ["Работен обем (cc/об)", "Мин. обороти (rpm)", "Макс. обороти (rpm)", "Ном. налягане (bar)", "Макс. налягане (bar)", "Дебит при 1500 rpm (L/min)", "Тегло (kg)"],
        "dim_rows": [
            ["2,5",  "500", "3500", "250", "280", "3,4",  "1,9"],
            ["4,0",  "500", "3500", "250", "280", "5,5",  "2,1"],
            ["6,1",  "500", "3500", "250", "280", "8,5",  "2,4"],
            ["8,0",  "500", "3500", "250", "280", "11,2", "2,7"],
            ["11,0", "500", "3000", "250", "280", "15,4", "3,1"],
            ["14,0", "500", "3000", "250", "280", "19,6", "3,5"],
            ["19,0", "500", "2800", "220", "250", "26,6", "4,1"],
            ["25,0", "400", "2500", "200", "230", "35,0", "5,0"],
        ],
        "related": [3, 4, 10],
    },
    {
        "id": 10,
        "slug": "product-10",
        "sku": "HLG-VALVE-3W12",
        "title": "Трипътен сферичен хидравличен кран 1/2\"",
        "category": "fittings",
        "categoryName": "Фитинги & Накрайници",
        "price": 88.00,
        "image": "assets/fittings.png",
        "tag": "Професионално",
        "short_desc": "Професионален кран за пренасочване на хидравличен поток под високо налягане. Осигурява гладко превключване и пълна липса на вътрешни течове.",
        "long_desc": "Трипътният сферичен кран (L-порт) се използва за пренасочване на хидравличен поток между две хидравлични линии или за затваряне на система. Сферата е изработена от хром-молибденова легирана стомана (42CrMo4) с плоско шлифоване и никелово покритие за защита от корозия. Уплътнението на сферата е PTFE+полиамид (PA6) с допустими температури до 100°C. Лостът е с блокиращ механизъм за предотвратяване на случайно завъртане.",
        "benefits": [
            "L-порт конфигурация (три хода по 90°)",
            'Свързване: G 1/2" (BSP) женска резба',
            "Сфера: 42CrMo4 + никелово покритие",
            "Максимално налягане: 400 bar",
            "Блокиращ механизъм на лоста",
        ],
        "dim_headers": ["Размер G (BSP)", "Работно налягане (bar)", "Ход на лоста (°)", "Cv коефициент", "Kv (m³/h)", "Тегло (kg)"],
        "dim_rows": [
            ['G 1/8"',   "400", "90", "0,8",  "0,7",  "0,25"],
            ['G 1/4"',   "400", "90", "1,5",  "1,3",  "0,38"],
            ['G 3/8"',   "400", "90", "2,8",  "2,4",  "0,55"],
            ['G 1/2"',   "400", "90", "5,2",  "4,5",  "0,80"],
            ['G 3/4"',   "380", "90", "9,0",  "7,8",  "1,20"],
            ['G 1"',     "350", "90", "15,0", "13,0", "1,90"],
            ['G 1 1/4"', "320", "90", "24,0", "20,8", "2,90"],
            ['G 1 1/2"', "300", "90", "35,0", "30,3", "4,10"],
            ['G 2"',     "280", "90", "55,0", "47,6", "6,50"],
        ],
        "related": [7, 8, 9],
    },
]

PRODUCT_INDEX = {p["id"]: p for p in PRODUCTS}

# Navigation links shared
NAV_LINKS = """
<a href="index.html">Начало</a>
<a href="index.html#configurator">Конфигуратор</a>
<a href="index.html#catalog" class="active">Каталог</a>
<a href="index.html#services">Услуги</a>
<a href="index.html#about">За нас</a>
<a href="index.html#contact">Контакти</a>
"""

def related_card(pid, theme):
    p = PRODUCT_INDEX.get(pid)
    if not p:
        return ""
    return f"""
<div class="product-card">
  <div class="product-image-container">
    <img src="{p['image']}" alt="{p['title']}">
    <span class="product-tag">{p['tag']}</span>
  </div>
  <div class="product-details">
    <span class="product-category">{p['categoryName']}</span>
    <h3 class="product-title">{p['title']}</h3>
    <div class="product-footer">
      <div class="product-price-block">
        <span class="product-price-label">Цена с ДДС</span>
        <span class="product-price">{p['price']:.2f} лв.</span>
      </div>
      <a href="{p['slug']}.html" class="btn btn-primary btn-sm">Виж детайли</a>
    </div>
  </div>
</div>"""


def render_page(p, theme):
    dim_heads = "".join(f"<th>{h}</th>" for h in p["dim_headers"])
    dim_body = ""
    for row in p["dim_rows"]:
        dim_body += "<tr>" + "".join(f"<td>{cell}</td>" for cell in row) + "</tr>"

    benefits_html = "".join(f'<li><i class="fa-solid fa-circle-check"></i> {b}</li>' for b in p["benefits"])

    related_html = "".join(related_card(rid, theme) for rid in p["related"])

    price_no_vat = p["price"] / 1.2
    vat_amount   = p["price"] - price_no_vat

    product_json = json.dumps({
        "id": p["id"],
        "title": p["title"],
        "category": p["category"],
        "categoryName": p["categoryName"],
        "price": p["price"],
        "image": p["image"],
        "specs": {h: p["dim_rows"][0][i] if i < len(p["dim_rows"][0]) else "—"
                  for i, h in enumerate(p["dim_headers"])},
        "description": p["short_desc"],
    }, ensure_ascii=False)

    return f"""<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{p['title']} | Хидролукс Груп Монтана</title>
  <meta name="description" content="{p['short_desc'][:155]}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Header -->
<header id="main-header">
  <div class="container nav-container">
    <a href="index.html" class="logo">
      <i class="fa-solid fa-gears"></i>
      <span>ХИДРОЛУКС ГРУП</span>
    </a>
    <nav id="nav-links">
      {NAV_LINKS}
    </nav>
    <div class="nav-right">
      <a href="index.html#cart" class="cart-trigger" id="cart-btn" aria-label="Количка">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-count" id="cart-count">0</span>
      </a>
      <div class="menu-toggle" id="menu-toggle"><i class="fa-solid fa-bars"></i></div>
    </div>
  </div>
</header>

<!-- Product Page -->
<main class="product-page-container">
  <div class="container">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="breadcrumb">
      <a href="index.html">Начало</a>
      <i class="fa-solid fa-chevron-right"></i>
      <a href="index.html#catalog">Каталог</a>
      <i class="fa-solid fa-chevron-right"></i>
      <a href="index.html#catalog">{p['categoryName']}</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>{p['title']}</span>
    </nav>

    <!-- Main product grid -->
    <div class="product-page-grid">

      <!-- LEFT: Gallery & Benefits -->
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img src="{p['image']}" alt="{p['title']}">
        </div>
        <div class="product-benefits">
          <h5><i class="fa-solid fa-star"></i> Ключови предимства</h5>
          <ul class="benefits-list">
            {benefits_html}
          </ul>
        </div>
      </div>

      <!-- RIGHT: Info & Buy -->
      <div class="product-info-panel">
        <span class="product-category">{p['categoryName']}</span>
        <h1 style="font-size:2rem; margin-top:8px; margin-bottom:8px;">{p['title']}</h1>
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
          <span class="product-tag" style="position:static;">{p['tag']}</span>
          <span style="font-size:0.8rem; color:var(--text-muted);">Код: {p['sku']}</span>
          <span style="font-size:0.8rem; color:var(--accent-success); display:flex; align-items:center; gap:4px;">
            <i class="fa-solid fa-circle" style="font-size:0.5rem;"></i> В наличност
          </span>
        </div>

        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.7; margin-bottom:24px;">{p['short_desc']}</p>

        <!-- Price block -->
        <div class="price-block">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Цена без ДДС</div>
            <div style="font-size:2.4rem; font-family:var(--font-heading); font-weight:800;">{price_no_vat:.2f} лв.</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">ДДС (20%): {vat_amount:.2f} лв. &nbsp;|&nbsp; <strong>С ДДС: {p['price']:.2f} лв.</strong></div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:4px;">Количество</div>
            <div class="qty-control" style="display:flex; border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden; width:fit-content; margin-left:auto;">
              <span class="qty-btn" id="qty-minus" style="width:36px; height:36px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.1rem;">−</span>
              <input type="number" id="page-qty-input" value="1" min="1" style="width:52px; text-align:center; border:none; outline:none; font-weight:700; font-size:1rem; background:transparent; color:var(--text-primary);">
              <span class="qty-btn" id="qty-plus" style="width:36px; height:36px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.1rem;">+</span>
            </div>
          </div>
        </div>

        <!-- Buy buttons -->
        <div class="buy-actions">
          <button class="btn btn-primary" style="flex:1;" id="add-to-cart-btn">
            <i class="fa-solid fa-cart-plus"></i> Добави в количката
          </button>
          <a href="index.html#contact" class="btn btn-secondary">
            <i class="fa-solid fa-phone"></i> Запитване
          </a>
        </div>

        <!-- Delivery info -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
          <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px; display:flex; gap:10px; align-items:center;">
            <i class="fa-solid fa-truck-fast" style="color:var(--accent-primary); font-size:1.2rem;"></i>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">Бърза доставка</div>
              <div style="font-size:0.78rem; color:var(--text-muted);">1–2 работни дни</div>
            </div>
          </div>
          <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px; display:flex; gap:10px; align-items:center;">
            <i class="fa-solid fa-shield-halved" style="color:var(--accent-primary); font-size:1.2rem;"></i>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">Гаранция</div>
              <div style="font-size:0.78rem; color:var(--text-muted);">Гарантирано качество</div>
            </div>
          </div>
        </div>

        <!-- Tab section: Description / Dimensions / Compatibility -->
        <div class="product-tab-section">
          <div class="tab-headers">
            <span class="tab-header active" data-tab="desc">Описание</span>
            <span class="tab-header" data-tab="dims">Таблица с размери</span>
            <span class="tab-header" data-tab="compat">Приложение</span>
          </div>

          <div class="tab-panel" id="tab-desc">
            <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.75;">{p['long_desc']}</p>
          </div>

          <div class="tab-panel" id="tab-dims" style="display:none;">
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:12px;">
              <i class="fa-solid fa-circle-info" style="color:var(--accent-primary);"></i>
              Кликнете върху ред от таблицата, за да го маркирате. Данните са съгласно стандартите на производителя.
            </p>
            <div class="tech-table-container">
              <table class="tech-table">
                <thead>
                  <tr>{dim_heads}</tr>
                </thead>
                <tbody>
                  {dim_body}
                </tbody>
              </table>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px;">
              * Всички размери са номинални. При поръчки над стандартни размери, моля свържете се с нас.
            </p>
          </div>

          <div class="tab-panel" id="tab-compat" style="display:none;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
              <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
                <h5 style="margin-bottom:12px; display:flex; align-items:center; gap:8px; color:var(--accent-secondary);">
                  <i class="fa-solid fa-industry"></i> Индустриално приложение
                </h5>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary);">
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Хидравлични преси и щанци</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Строителна и земеделска техника</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Мобилни хидравлични агрегати</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Минна и сондажна техника</li>
                </ul>
              </div>
              <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
                <h5 style="margin-bottom:12px; display:flex; align-items:center; gap:8px; color:var(--accent-secondary);">
                  <i class="fa-solid fa-flask"></i> Съвместими течности
                </h5>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary);">
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Минерални масла (HLP, HM)</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Биологично разградими масла (HETG)</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Воден глицол (HFC)</li>
                  <li><i class="fa-solid fa-check" style="color:var(--accent-success); margin-right:6px;"></i> Водни емулсии (HFA, HFB)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-products-section">
      <h3>Вижте също</h3>
      <div class="products-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr));">
        {related_html}
      </div>
    </div>

  </div><!-- /container -->
</main>

<!-- Footer -->
<footer>
  <div class="container footer-grid">
    <div class="footer-brand">
      <h3>ХИДРОЛУКС ГРУП</h3>
      <p>Надежден партньор в областта на индустриалната хидравлика и пневматика. Производство на сертифицирани хидравлични маркучи, цилиндри и фитинги.</p>
    </div>
    <div class="footer-links">
      <h4>Бързи връзки</h4>
      <ul>
        <li><a href="index.html">Начало</a></li>
        <li><a href="index.html#catalog">Продукти</a></li>
        <li><a href="index.html#services">Услуги</a></li>
        <li><a href="index.html#about">За нас</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h4>Контакти</h4>
      <ul>
        <li><i class="fa-solid fa-location-dot"></i> гр. Монтана, ул. „Индустриална" 32г</li>
        <li><i class="fa-solid fa-phone"></i> +359 89 248 4337</li>
        <li><i class="fa-solid fa-envelope"></i> hydroluxgroup@gmail.com</li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>&copy; 2026 Хидролукс Груп. Всички права запазени.</p>
  </div>
</footer>

<script>
  // Inline product data for this page
  var PAGE_PRODUCT = {product_json};
</script>
<script src="product-page.js"></script>
<script>
  document.getElementById('add-to-cart-btn').addEventListener('click', function() {{
    var qty = parseInt(document.getElementById('page-qty-input').value, 10) || 1;
    addPageProductToCart(PAGE_PRODUCT, qty);
  }});
</script>
</body>
</html>
"""


def generate_all(base_dir, theme):
    for p in PRODUCTS:
        html = render_page(p, theme)
        path = os.path.join(base_dir, p["slug"] + ".html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  ✓ {path}")


if __name__ == "__main__":
    print("Generating DARK theme product pages...")
    generate_all(BASE_DARK, "dark")
    print("Generating LIGHT theme product pages...")
    generate_all(BASE_LIGHT, "light")
    # Copy product-page.js to light folder too
    import shutil
    shutil.copy(
        os.path.join(BASE_DARK, "product-page.js"),
        os.path.join(BASE_LIGHT, "product-page.js")
    )
    print(f"  ✓ product-page.js copied to light theme")
    print("\nDone! 10 × 2 = 20 product pages generated.")
