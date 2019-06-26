(function(window, undefined) {
  var dictionary = {
    "a58cd593-deec-4a87-81f8-19906c393905": "Ficha de Procedimientos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Formulario de Datos",
    "4c7fcb02-c97f-438d-adf3-a8de486ad7ec": "Proced grales",
    "fa08a382-ee90-419b-bc68-af2522cb05df": "MenuPostVenta",
    "f2655c18-98d0-461b-851f-19466389bcdc": "Inicio",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
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