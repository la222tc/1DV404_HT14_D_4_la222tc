{"filter":false,"title":"Validator.js","tooltip":"/Iteration 2/js/Validator.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":40,"column":12},"end":{"row":40,"column":37},"action":"insert","lines":["Create.countToValid += 1;"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":32},"end":{"row":40,"column":33},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":32},"end":{"row":40,"column":33},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":48},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":37},"action":"insert","lines":["Create.countToValid += 1;"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":41},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":53,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":12},"end":{"row":53,"column":37},"action":"insert","lines":["Create.countToValid += 1;"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":48},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":12},"end":{"row":21,"column":37},"action":"insert","lines":["Create.countToValid -= 1;"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":41},"end":{"row":60,"column":66},"action":"insert","lines":["Create.countToValid -= 1;"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":41},"end":{"row":61,"column":0},"action":"insert","lines":["",""]},{"start":{"row":61,"column":0},"end":{"row":61,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"remove","lines":["1"]},{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":32},"end":{"row":42,"column":33},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":34},"end":{"row":42,"column":35},"action":"remove","lines":["1"]},{"start":{"row":42,"column":34},"end":{"row":42,"column":35},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":32},"end":{"row":61,"column":33},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":34},"end":{"row":61,"column":35},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":34},"end":{"row":61,"column":35},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":29},"end":{"row":48,"column":30},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":30},"end":{"row":48,"column":31},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":31},"end":{"row":48,"column":32},"action":"insert","lines":["9"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":76},"end":{"row":59,"column":77},"action":"remove","lines":["!"]},{"start":{"row":59,"column":76},"end":{"row":59,"column":90},"action":"insert","lines":["eller siffror!"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":76},"end":{"row":59,"column":77},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":6},"end":{"row":45,"column":0},"action":"insert","lines":["",""]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":4},"end":{"row":46,"column":0},"action":"insert","lines":["",""]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":4},"end":{"row":65,"column":6},"action":"insert","lines":["validateDescription: function (Name) {","        var labelDescription = document.getElementById(\"labelDescription\");","        ","        var regex = /^[a-zA-Z0-9 ]{10,500}$/;","        ","        if (regex.test(Name)) {","            labelDescription.style.color = \"green\";","            labelDescription.innerHTML = \"* Beskrivning \";","            console.log(\"* Beskrivning  Rätt\");","            Create.countToValid += 1;","        }","        ","        else {","             labelDescription.style.color = \"red\";","             labelDescription.innerHTML = \"* Beskrivning (Måste innehålla minst 10 bokstäver eller siffror!)\";","            console.log(\"* Beskrivning  Fel!\");","            ","            Create.countToValid = 0;","        }","    },"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":6},"end":{"row":66,"column":0},"action":"insert","lines":["",""]},{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":14},"end":{"row":46,"column":15},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":15},"end":{"row":46,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":28},"action":"remove","lines":["labelDescription"]},{"start":{"row":47,"column":12},"end":{"row":47,"column":21},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":49},"end":{"row":47,"column":65},"action":"remove","lines":["labelDescription"]},{"start":{"row":47,"column":49},"end":{"row":47,"column":58},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":12},"end":{"row":52,"column":28},"action":"remove","lines":["labelDescription"]},{"start":{"row":52,"column":12},"end":{"row":52,"column":21},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":12},"end":{"row":53,"column":28},"action":"remove","lines":["labelDescription"]},{"start":{"row":53,"column":12},"end":{"row":53,"column":21},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":13},"end":{"row":59,"column":29},"action":"remove","lines":["labelDescription"]},{"start":{"row":59,"column":13},"end":{"row":59,"column":22},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":13},"end":{"row":60,"column":29},"action":"remove","lines":["labelDescription"]},{"start":{"row":60,"column":13},"end":{"row":60,"column":22},"action":"insert","lines":["labelDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":35},"end":{"row":53,"column":49},"action":"remove","lines":["* Beskrivning "]},{"start":{"row":53,"column":35},"end":{"row":53,"column":43},"action":"insert","lines":["* Datum "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":25},"end":{"row":54,"column":38},"action":"remove","lines":["* Beskrivning"]},{"start":{"row":54,"column":25},"end":{"row":54,"column":33},"action":"insert","lines":["* Datum "]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":36},"end":{"row":60,"column":49},"action":"remove","lines":["* Beskrivning"]},{"start":{"row":60,"column":36},"end":{"row":60,"column":44},"action":"insert","lines":["* Datum "]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":46},"end":{"row":60,"column":94},"action":"remove","lines":["Måste innehålla minst 10 bokstäver eller siffror"]},{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":25},"end":{"row":61,"column":38},"action":"remove","lines":["* Beskrivning"]},{"start":{"row":61,"column":25},"end":{"row":61,"column":33},"action":"insert","lines":["* Datum "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":20},"end":{"row":49,"column":44},"action":"remove","lines":["/^[a-zA-Z0-9 ]{10,500}$/"]},{"start":{"row":49,"column":20},"end":{"row":49,"column":48},"action":"insert","lines":["/^\\d{2}([./-])\\d{2}\\1\\d{4}$/"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":21},"action":"remove","lines":["labelDate"]},{"start":{"row":47,"column":12},"end":{"row":47,"column":21},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":49},"end":{"row":47,"column":58},"action":"remove","lines":["labelDate"]},{"start":{"row":47,"column":49},"end":{"row":47,"column":58},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":12},"end":{"row":52,"column":21},"action":"remove","lines":["labelDate"]},{"start":{"row":52,"column":12},"end":{"row":52,"column":21},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":12},"end":{"row":53,"column":21},"action":"remove","lines":["labelDate"]},{"start":{"row":53,"column":12},"end":{"row":53,"column":21},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":13},"end":{"row":59,"column":22},"action":"remove","lines":["labelDate"]},{"start":{"row":59,"column":13},"end":{"row":59,"column":22},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":13},"end":{"row":60,"column":22},"action":"remove","lines":["labelDate"]},{"start":{"row":60,"column":13},"end":{"row":60,"column":22},"action":"insert","lines":["labeldate"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":28},"end":{"row":46,"column":32},"action":"remove","lines":["Name"]},{"start":{"row":46,"column":28},"end":{"row":46,"column":32},"action":"insert","lines":["date"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":23},"end":{"row":51,"column":27},"action":"remove","lines":["Name"]},{"start":{"row":51,"column":23},"end":{"row":51,"column":27},"action":"insert","lines":["date"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":28},"end":{"row":46,"column":32},"action":"remove","lines":["date"]},{"start":{"row":46,"column":28},"end":{"row":46,"column":34},"action":"insert","lines":["myDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":23},"end":{"row":51,"column":27},"action":"remove","lines":["date"]},{"start":{"row":51,"column":23},"end":{"row":51,"column":29},"action":"insert","lines":["myDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":28},"end":{"row":46,"column":34},"action":"remove","lines":["myDate"]},{"start":{"row":46,"column":28},"end":{"row":46,"column":32},"action":"insert","lines":["date"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":23},"end":{"row":51,"column":29},"action":"remove","lines":["myDate"]},{"start":{"row":51,"column":23},"end":{"row":51,"column":27},"action":"insert","lines":["date"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":49},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":8},"end":{"row":51,"column":0},"action":"insert","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":51,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":8},"end":{"row":51,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"insert","lines":["^"]},{"start":{"row":51,"column":10},"end":{"row":51,"column":11},"action":"insert","lines":["^"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":10},"end":{"row":51,"column":11},"action":"remove","lines":["^"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":10},"end":{"row":51,"column":17},"action":"insert","lines":["\\1\\d{4}"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":17},"end":{"row":51,"column":22},"action":"insert","lines":["\\d{2}"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":22},"end":{"row":51,"column":29},"action":"insert","lines":["([./-])"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":29},"end":{"row":51,"column":34},"action":"insert","lines":["\\d{2}"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":34},"end":{"row":51,"column":36},"action":"insert","lines":["$/"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":8},"end":{"row":51,"column":36},"action":"remove","lines":["/^\\1\\d{4}\\d{2}([./-])\\d{2}$/"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":20},"end":{"row":49,"column":48},"action":"remove","lines":["/^\\d{2}([./-])\\d{2}\\1\\d{4}$/"]},{"start":{"row":49,"column":20},"end":{"row":49,"column":48},"action":"insert","lines":["/^\\1\\d{4}\\d{2}([./-])\\d{2}$/"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":22},"end":{"row":49,"column":24},"action":"remove","lines":["\\1"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":27},"end":{"row":49,"column":29},"action":"insert","lines":["\\1"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":34},"end":{"row":49,"column":41},"action":"remove","lines":["([./-])"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":27},"end":{"row":49,"column":34},"action":"insert","lines":["([./-])"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":34},"end":{"row":49,"column":36},"action":"remove","lines":["\\1"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":39},"end":{"row":49,"column":41},"action":"insert","lines":["\\1"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":4},"end":{"row":50,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":49},"end":{"row":50,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["å"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["Å"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["Ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["Ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":32},"end":{"row":28,"column":38},"action":"insert","lines":["åÅäÄöÖ"]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":32},"end":{"row":71,"column":38},"action":"insert","lines":["åÅäÄöÖ"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":8},"end":{"row":9,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422114432076,"hash":"fcd0cc89868de07932257b9c4032197350b154e1"}