/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CitiesMap.js":
/*!**************************!*\
  !*** ./src/CitiesMap.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const City = __webpack_require__(/*! ./city */ \"./src/city.js\");\nconst { shuffle, distance } = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\nconst { canvas, context } = __webpack_require__(/*! ./ */ \"./src/index.js\");\n\nclass CitiesMap {\n\tconstructor(width, height, numCities = 0) {\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t\tthis.cities = this.makeRandomMap(numCities);\n\t\tthis.startingCity = this.cities[0];\n\t}\n\n\t// generates a set of random cities\n\tmakeRandomMap(cities = this.cityCount) {\n\t\tlet ret = [];\n\n\t\tfor (let i = 0; i < cities; i++) {\n\t\t\tret.push(new City(this.width, this.height, i === 0 ? true : false));\n\t\t}\n\n\t\treturn ret;\n\t}\n\n\tdraw() {\n\t\tthis.cities.forEach(city => {\n\t\t\tcity.draw();\n\t\t});\n\t}\n}\n\nmodule.exports = CitiesMap;\n\n// let ret = [];\n\n// ret.push(new City(0, 0));\n// ret.push(new City(0, 100));\n// ret.push(new City(0, 200));\n// ret.push(new City(100, 200));\n// ret.push(new City(200, 200));\n// ret.push(new City(200, 100));\n// ret.push(new City(200, 0));\n// ret.push(new City(100, 0));\n\n// return ret;\n\n\n//# sourceURL=webpack:///./src/CitiesMap.js?");

/***/ }),

/***/ "./src/chromosome.js":
/*!***************************!*\
  !*** ./src/chromosome.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { shuffle, swap, distance } = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\nconst { canvas, context } = __webpack_require__(/*! ./ */ \"./src/index.js\");\n\nclass Chromosome {\n\tconstructor(genePool, randomized = true) {\n\t\tthis.genes = randomized ? this.getRandomGenes(genePool) : genePool;\n\t\tthis.fitness = 0;\n\t}\n\n\t// populate this.genes with shuffled genes from 1 to size\n\tgetRandomGenes(genePool) {\n\t\tlet res = [];\n\t\tfor (let i = 0; i < genePool.length - 1; i++) {\n\t\t\tres[i] = genePool[i + 1];\n\t\t}\n\n\t\treturn shuffle(res);\n\t}\n\n\t// returns an offspring of this Chromosome and another Chromosome (parentB)\n\tmakeOffspring(parentB, mutationRate = 0.25) {\n\t\t// 2 - n-1 where n is length of array\n\t\tconst randLength =\n\t\t\t2 + Math.floor(Math.random() * (this.genes.length - 3));\n\t\t//\n\t\tconst randStart = Math.floor(\n\t\t\tMath.random() * (this.genes.length - randLength)\n\t\t);\n\n\t\tlet transfer = new Set();\n\t\tlet offspring = new Chromosome([], false);\n\t\tlet place = 0;\n\n\t\tfor (let i = 0; i < randLength; i++) {\n\t\t\ttransfer.add(this.genes[randStart + i]);\n\t\t}\n\n\t\twhile (offspring.genes.length < this.genes.length) {\n\t\t\tif (offspring.genes.length === randStart) {\n\t\t\t\ttransfer.forEach(gene => {\n\t\t\t\t\toffspring.genes.push(gene);\n\t\t\t\t});\n\t\t\t}\n\t\t\tif (!transfer.has(parentB.genes[place])) {\n\t\t\t\toffspring.genes.push(parentB.genes[place]);\n\t\t\t\tplace++;\n\t\t\t} else place++;\n\t\t}\n\n\t\t// random mutation chance\n\t\tif (Math.random() <= mutationRate) {\n\t\t\tswap(\n\t\t\t\toffspring.genes,\n\t\t\t\tMath.floor(Math.random() * offspring.genes.length),\n\t\t\t\tMath.floor(Math.random() * offspring.genes.length)\n\t\t\t);\n\t\t}\n\n\t\treturn offspring;\n\t}\n\n\tdraw() {\n\t\tcontext.beginPath();\n\t\tfor (let i = 0; i < this.genes.length - 1; i++) {\n\t\t\tcontext.moveTo(this.genes[i].x, this.genes[i].y);\n\t\t\tcontext.lineTo(this.genes[i + 1].x, this.genes[i + 1].y);\n\t\t}\n\t\tcontext.closePath();\n\t\tcontext.stroke();\n\t}\n}\n\nmodule.exports = Chromosome;\n\n\n//# sourceURL=webpack:///./src/chromosome.js?");

/***/ }),

/***/ "./src/city.js":
/*!*********************!*\
  !*** ./src/city.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { canvas, context } = __webpack_require__(/*! ./ */ \"./src/index.js\");\n\nclass City {\n\tconstructor(maxWidth, maxHeight, startingCity = false, test = false) {\n\t\tthis.x = !test ? Math.floor(Math.random() * maxWidth) : maxWidth;\n\t\tthis.y = !test ? Math.floor(Math.random() * maxHeight) : maxHeight;\n\t\tthis.isStartingCity = startingCity;\n\t}\n\n\tdraw() {\n\t\tif (this.isStartingCity) {\n\t\t\tcontext.fillRect(this.x, this.y, 15, 15);\n\t\t} else {\n\t\t\tcontext.beginPath();\n\t\t\tcontext.moveTo(this.x, this.y);\n\t\t\tcontext.arc(this.x - 5, this.y - 5, 10, 0, Math.PI * 2, false);\n\t\t\tcontext.stroke();\n\t\t}\n\t}\n}\n\nmodule.exports = City;\n\n\n//# sourceURL=webpack:///./src/city.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// this method was taken from https://bost.ocks.org/mike/shuffle/\n// find the version i wrote on my own and replace this one with it\n\n// shuffle elements in an array in place\nfunction shuffle(array) {\n\tlet m = array.length,\n\t\ttemp,\n\t\ti;\n\n\twhile (m) {\n\t\t// Pick a remaining element…\n\t\ti = Math.floor(Math.random() * m--);\n\n\t\ttemp = array[m];\n\t\tarray[m] = array[i];\n\t\tarray[i] = temp;\n\t}\n\n\treturn array;\n}\n\n// calculate the distance between two cities\nfunction distance(cityA, cityB) {\n\tlet xDist = (cityB.x - cityA.x) * (cityB.x - cityA.x);\n\tlet yDist = (cityB.y - cityA.y) * (cityB.y - cityA.y);\n\n\treturn Math.sqrt(xDist + yDist);\n}\n\nfunction swap(arr, a, b) {\n\tlet temp = arr[a];\n\tarr[a] = arr[b];\n\tarr[b] = temp;\n\treturn arr;\n}\nmodule.exports = { shuffle, distance, swap };\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// --CANVAS SETUP--\nconst canvas = document.querySelector(\"canvas\");\nconst context = canvas.getContext(\"2d\");\ncanvas.width = 700; // window.innerWidth;\ncanvas.height = 500; // window.innerHeight;\n\nmodule.exports = { canvas, context };\n\n// --IMPORTS--\nconst Population = __webpack_require__(/*! ./population */ \"./src/population.js\");\nconst CitiesMap = __webpack_require__(/*! ./CitiesMap */ \"./src/CitiesMap.js\");\n\n// --EVENT LISTENERS\n\n// --LOGICAL SETUP--\nconst numCities = 10;\n\nlet allCities = new CitiesMap(canvas.width, canvas.height, numCities);\nlet currPop = new Population(36, allCities);\n\n// console.log(allCities);\n// console.log(currPop);\n\nconsole.log(allCities.cities);\n// console.log(currPop.chromosomes);\ncurrPop.evaluatePopulationFitness();\nconsole.log(currPop.getAverageFitness());\ncurrPop.printPopulation();\n\nfor (let i = 0; i < 3500; i++) {\n\tcurrPop.evaluatePopulationFitness();\n\n\tcurrPop.makeNextGeneration();\n}\n\nconsole.log(currPop.getAverageFitness());\ncurrPop.printPopulation();\n\nfunction animate() {\n\twindow.requestAnimationFrame(animate);\n\tcontext.clearRect(0, 0, canvas.width, canvas.height);\n\tallCities.draw();\n\tcurrPop.draw();\n}\n\nanimate();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/population.js":
/*!***************************!*\
  !*** ./src/population.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Chromosome = __webpack_require__(/*! ./chromosome */ \"./src/chromosome.js\");\nconst { shuffle, distance } = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\nconst { canvas, context } = __webpack_require__(/*! ./ */ \"./src/index.js\");\n\nclass Population {\n\tconstructor(popSize, parentMap) {\n\t\tthis.parentMap = parentMap;\n\t\tthis.chromosomes = this.generateInitialPopulation(popSize);\n\t}\n\n\tgenerateInitialPopulation(size) {\n\t\tlet ret = [];\n\t\tfor (let i = 0; i < size; i++) {\n\t\t\tret.push(new Chromosome(this.parentMap.cities));\n\t\t}\n\t\treturn ret;\n\t}\n\n\tsortByFitness(chromA, chromB) {\n\t\tif (chromA.fitness > chromB.fitness) return -1;\n\t\tif (chromA.fitness < chromB.fitness) return 1;\n\t\telse return 0;\n\t}\n\n\tmakeNextGeneration() {\n\t\t// sort by fitness\n\t\tthis.chromosomes.sort(function(chromA, chromB) {\n\t\t\tif (chromA.fitness > chromB.fitness) return 1;\n\t\t\tif (chromA.fitness < chromB.fitness) return -1;\n\t\t\telse return 0;\n\t\t});\n\n\t\t// kill bot 50%\n\t\tthis.chromosomes.splice(\n\t\t\tMath.floor(this.chromosomes.length / 2),\n\t\t\tMath.ceil(this.chromosomes.length / 2)\n\t\t);\n\n\t\tlet end = this.chromosomes.length;\n\n\t\tfor (let i = 1; i <= end; i += 2) {\n\t\t\tthis.chromosomes.push(\n\t\t\t\tthis.updateFitness(\n\t\t\t\t\tthis.chromosomes[i].makeOffspring(this.chromosomes[i - 1])\n\t\t\t\t)\n\t\t\t);\n\t\t\tthis.chromosomes.push(\n\t\t\t\tthis.updateFitness(\n\t\t\t\t\tthis.chromosomes[i - 1].makeOffspring(this.chromosomes[i])\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}\n\n\tgetAverageFitness() {\n\t\tlet count = 0;\n\t\tfor (let i of this.chromosomes) count += i.fitness;\n\n\t\treturn count / this.chromosomes.length;\n\t}\n\n\tupdateFitness(currC) {\n\t\tlet totalDist = distance(this.parentMap.startingCity, currC.genes[0]);\n\n\t\tfor (let j = 0; j < currC.genes.length - 1; j++) {\n\t\t\ttotalDist += distance(currC.genes[j], currC.genes[j + 1]);\n\t\t}\n\n\t\ttotalDist += distance(\n\t\t\tthis.parentMap.startingCity,\n\t\t\tcurrC.genes[currC.genes.length - 1]\n\t\t);\n\t\tcurrC.fitness = totalDist;\n\n\t\treturn currC;\n\t}\n\n\t// evaluate fitness of given chromosome and updates chromosome.fitness to reflect - O(nm) where n is # chromosomes, m is # genes\n\tevaluatePopulationFitness() {\n\t\tfor (let i = 0; i < this.chromosomes.length; i++) {\n\t\t\tthis.updateFitness(this.chromosomes[i]);\n\t\t}\n\t}\n\n\tprintPopulation() {\n\t\tconsole.log([...this.chromosomes]);\n\t}\n\n\tdraw() {\n\t\tcontext.beginPath();\n\t\tcontext.moveTo(\n\t\t\tthis.parentMap.startingCity.x,\n\t\t\tthis.parentMap.startingCity.y\n\t\t);\n\t\tcontext.lineTo(\n\t\t\tthis.chromosomes[0].genes[0].x,\n\t\t\tthis.chromosomes[0].genes[0].y\n\t\t);\n\t\tcontext.closePath();\n\t\tcontext.stroke();\n\n\t\tthis.chromosomes[0].draw();\n\n\t\tcontext.beginPath();\n\n\t\tcontext.moveTo(\n\t\t\tthis.parentMap.startingCity.x,\n\t\t\tthis.parentMap.startingCity.y\n\t\t);\n\t\tcontext.lineTo(\n\t\t\tthis.chromosomes[0].genes[this.chromosomes[0].genes.length - 1].x,\n\t\t\tthis.chromosomes[0].genes[this.chromosomes[0].genes.length - 1].y\n\t\t);\n\t\tcontext.closePath();\n\t\tcontext.stroke();\n\t}\n}\n\nmodule.exports = Population;\n\n\n//# sourceURL=webpack:///./src/population.js?");

/***/ })

/******/ });