(function(window, undefined) {
  var dictionary = {
    "fa08a382-ee90-419b-bc68-af2522cb05df": "MenuPostVenta",
    "9d6014d6-15ff-454f-88d4-9093b06ddce1": "informepostventa",
    "adf795ae-aef1-45f0-9864-f08dc8104cff": "consultaweb",
    "d4613608-b4c5-4f37-b3ca-308929fbdfa1": "DescripcionPostLlamada",
    "a58cd593-deec-4a87-81f8-19906c393905": "Ficha de Procedimientos",
    "833e6f4f-0d01-495f-8188-caa65162c0d3": "Informes",
    "1f0a4041-18a8-4471-bde6-b4691ece2bf8": "infreclamosatendidos",
    "f2655c18-98d0-461b-851f-19466389bcdc": "Inicio",
    "1c630d6c-b02e-4027-b34b-279139298991": "Ficha Reclamo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Formulario de Datos",
    "3473e71a-cc4e-42a9-8534-b26665fff8fb": "fallas mayores",
    "f2689a6f-b80d-4b08-99d0-d68d7bf76dfc": "consultaprocesos",
    "f0cac081-71d8-404e-b4e9-38cc7191b806": "MapaServTec",
    "27b83016-a189-4ad0-b326-87a66a355a52": "reclamospendiente",
    "4c7fcb02-c97f-438d-adf3-a8de486ad7ec": "Proced grales",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "621f7c8e-aeac-4eb9-be09-b075e0a1b388": "Header2",
    "50ab79f6-ff2a-41fa-a01f-3f98a9b2f205": "Header",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);