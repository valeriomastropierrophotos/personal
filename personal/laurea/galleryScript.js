import PhotoSwipeLightbox from '/personal/laurea/vendor/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/personal/laurea/vendor/photoswipe/dist/photoswipe.esm.js';

const lightboxMain = new PhotoSwipeLightbox({
  gallery: '#mainGallery',
  children: 'a',
  pswpModule: PhotoSwipe,
  history: true,
  id: "main-gallery"
});

lightboxMain.on('uiRegister', function() {
    lightboxMain.pswp.ui.registerElement({
      name: 'download-button',
      order: 8,
      isButton: true,
      tagName: 'a',
  
      html: {
        isCustomSVG: true,
        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
        outlineID: 'pswp__icn-download'
      }, 
  
      onInit: (el, pswp) => {
        el.setAttribute('download', '');
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
  
        pswp.on('change', () => {
          console.log('change');
          el.href = '/personal/laurea/galleryPhotos/webBig/' + pswp.currSlide.data.src.split('/').pop();
        });
      }
    });
  });
  lightboxMain.init();

lightboxMain.on('open', () => {
  history.pushState({ pswp: true }, '');
});

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.pswp && lightboxMain.pswp) {
    lightboxMain.pswp.close();
  }
});

lightboxMain.on('close', () => {
  if (history.state && history.state.pswp) {
    history.back();
  }
});

  const lightboxPersonal = new PhotoSwipeLightbox({
    gallery: '#personalGallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    history: true,
    id: "personal-gallery"
  });
  
  lightboxPersonal.on('uiRegister', function() {
      lightboxPersonal.pswp.ui.registerElement({
        name: 'download-button',
        order: 8,
        isButton: true,
        tagName: 'a',
    
        html: {
          isCustomSVG: true,
          inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: 'pswp__icn-download'
        }, 
    
        onInit: (el, pswp) => {
          el.setAttribute('download', '');
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener');
    
          pswp.on('change', () => {
            console.log('change');
            el.href = '/personal/laurea/galleryPhotos/webBig/' + pswp.currSlide.data.src.split('/').pop();
          });
        }
      });
    });
    lightboxPersonal.init();

lightboxPersonal.on('open', () => {
  history.pushState({ pswp: true }, '');
});

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.pswp && lightboxPersonal.pswp) {
    lightboxPersonal.pswp.close();
  }
});

lightboxPersonal.on('close', () => {
  if (history.state && history.state.pswp) {
    history.back();
  }
});

const selector = new SlimSelect({
  select: "select",
  settings: {
   placeholderText: 'Inserisci il tuo nome',
   allowDeselect: true
 }
 })

const idToName = {

};

const imagePeopleTag = [
  {
    image: "img_12",
    names: ["turturro"]
  },
  {
    image: "img_13",
    names: ["erica", "mmw"]
  },
  {
    image: "img_14",
    names: ["erica", "mmw"]
  },
  {
    image: "img_40",
    names: ["cosmo"]
  },
  {
    image: "img_115",
    names: ["marco"]
  },
  {
    image: "img_116",
    names: ["nico"]
  },
  {
    image: "img_117",
    names: ["nico"]
  },
  {
    image: "img_118",
    names: ["cosmo", "marika", "sergio"]
  },
  {
    image: "img_119",
    names: ["cosmo", "marika", "sergio"]
  },
  {
    image: "img_121",
    names: ["mmw", "sergio", "adriana"]
  },
  {
    image: "img_122",
    names: ["mmw", "sergio"]
  },
  {
    image: "img_123",
    names: ["mmw", "sergio", "marika"]
  },
  {
    image: "img_128",
    names: ["marco", "silvana"]
  },
  {
    image: "img_129",
    names: ["marco", "silvana"]
  },
  {
    image: "img_164",
    names: ["alfelix"]
  },
  {
    image: "img_166",
    names: ["cosmo", "marika", "nico", "francesca", "camilla", "paola", "alfelix", "ilaria", "mmw", "adriana"]
  },
  {
    image: "img_167",
    names: ["sergio"]
  },
  {
    image: "img_168",
    names: ["sergio"]
  },
  {
    image: "img_169",
    names: ["sergio"]
  },
  {
    image: "img_170",
    names: ["sergio"]
  },
  {
    image: "img_171",
    names: ["sergio"]
  },
  {
    image: "img_172",
    names: ["sergio"]
  },
  {
    image: "img_173",
    names: ["sergio"]
  },
  {
    image: "img_174",
    names: ["sergio"]
  },
  {
    image: "img_175",
    names: ["sergio"]
  },
  {
    image: "img_176",
    names: ["sergio"]
  },
  {
    image: "img_183",
    names: ["sergio", "mmw", "adriana", "cosmo"]
  },
  {
    image: "img_184",
    names: ["sergio", "mmw", "adriana", "cosmo"]
  },
  {
    image: "img_185",
    names: ["sergio", "adriana", "cosmo"]
  },
  {
    image: "img_186",
    names: ["sergio", "adriana", "cosmo"]
  },
  {
    image: "img_187",
    names: ["sergio", "adriana", "cosmo"]
  },
  {
    image: "img_189",
    names: ["marco", "silvana"]
  },
  {
    image: "img_195",
    names: ["alfelix", "adriana", "mmw", "nico"]
  },
  {
    image: "img_196",
    names: ["alfelix", "adriana", "mmw", "nico"]
  },
  {
    image: "img_197",
    names: ["alfelix", "mmw"]
  },
  {
    image: "img_206",
    names: ["sergio", "cosmo"]
  },
  {
    image: "img_209",
    names: ["sergio"]
  },
  {
    image: "img_213",
    names: ["paola", "camilla", "nico", "mmw", "ilaria", "sergio", "adriana", "alfelix", "cosmo", "marika", "francesca", "desire"]
  },
  {
    image: "img_214",
    names: ["paola", "camilla", "nico", "mmw", "ilaria", "sergio", "adriana", "alfelix", "cosmo", "marika", "francesca", "desire"]
  },
  {
    image: "img_215",
    names: ["paola", "camilla", "nico", "mmw", "ilaria", "sergio", "adriana", "alfelix", "cosmo", "marika", "francesca", "desire"]
  },
  {
    image: "img_216",
    names: ["paola", "camilla", "nico", "mmw", "ilaria", "sergio", "adriana", "alfelix", "cosmo", "marika", "francesca", "desire"]
  },
  {
    image: "img_217",
    names: ["paola", "camilla", "nico", "mmw", "ilaria", "sergio", "adriana", "alfelix", "cosmo", "marika", "francesca", "desire"]
  },
  {
    image: "img_218",
    names: ["sergio"]
  },
  {
    image: "img_219",
    names: ["camilla", "nico", "cosmo", "marika", "francesca"]
  },
  {
    image: "img_220",
    names: ["camilla", "nico", "cosmo", "marika", "francesca"]
  },
  {
    image: "img_221",
    names: ["desire"]
  },
  {
    image: "img_218",
    names: ["sergio"]
  },
  {
    image: "img_239",
    names: ["angela"]
  },
  {
    image: "img_240",
    names: ["azzurra"]
  },
  {
    image: "img_241",
    names: ["azzurra", "angela"]
  },
  {
    image: "img_243",
    names: ["caputo"]
  },
  {
    image: "img_244",
    names: ["caputo"]
  },
  {
    image: "img_245",
    names: ["caputo"]
  },
  {
    image: "img_246",
    names: ["caputo"]
  },
  {
    image: "img_247",
    names: ["valentina"]
  },
  {
    image: "img_248",
    names: ["caputo"]
  },
  {
    image: "img_249",
    names: ["alfelix", "mattia"]
  },
  {
    image: "img_250",
    names: ["camilla", "nico", "paola"]
  },
  {
    image: "img_251",
    names: ["paolo"]
  },
  {
    image: "img_252",
    names: ["caputo"]
  },
  {
    image: "img_253",
    names: ["caputo"]
  },
  {
    image: "img_254",
    names: ["angela"]
  },
  {
    image: "img_255",
    names: ["valentina", "mattia"]
  },
  {
    image: "img_256",
    names: ["paola"]
  },
  {
    image: "img_257",
    names: ["alfelix", "vinz"]
  },
  {
    image: "img_258",
    names: ["edo", "alfelix"]
  },
  {
    image: "img_259",
    names: ["alfelix", "vinz"]
  },
  {
    image: "img_260",
    names: ["alfelix", "vinz"]
  },
  {
    image: "img_261",
    names: [""]
  },
  {
    image: "img_262",
    names: [""]
  },
  {
    image: "img_263",
    names: [""]
  },
  {
    image: "img_264",
    names: ["maurizio", "caputo", "paolo"]
  },
  {
    image: "img_265",
    names: ["vinz"]
  },
  {
    image: "img_266",
    names: ["maurizio", "caputo", "paolo"]
  },
  {
    image: "img_267",
    names: [""]
  },
  {
    image: "img_268",
    names: [""]
  },
  {
    image: "img_269",
    names: [""]
  },
  {
    image: "img_270",
    names: ["claudia"]
  },
  {
    image: "img_271",
    names: ["claudia"]
  },
  {
    image: "img_272",
    names: ["mmw", "valentina", "mattia"]
  },
  {
    image: "img_273",
    names: ["mmw", "valentina", "mattia", "sergio"]
  },
  {
    image: "img_274",
    names: ["mmw", "claudia"]
  },
  {
    image: "img_275",
    names: ["mmw", "claudia"]
  },
  {
    image: "img_276",
    names: ["christian", "claudia"]
  },
  {
    image: "img_277",
    names: ["flavio", "christian", "mmw", "maurizio", "mattia"]
  },
  {
    image: "img_278",
    names: ["maurizio", "mattia"]
  },
  {
    image: "img_279",
    names: ["caputo", "christian"]
  },
  {
    image: "img_280",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_281",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_282",
    names: ["flavio"]
  },
  {
    image: "img_283",
    names: ["mmw"]
  },
  {
    image: "img_284",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_285",
    names: ["nico", "mattia", "paola", "camilla"]
  },
  {
    image: "img_286",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_287",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_288",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_289",
    names: ["claudia", "valentina", "azzurra"]
  },
  {
    image: "img_290",
    names: ["maurizio", "valentina", "alfelix"]
  },
  {
    image: "img_291",
    names: ["maurizio", "valentina", "alfelix"]
  },
  {
    image: "img_292",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_293",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_294",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_295",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_296",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_297",
    names: ["flavio"]
  },
  {
    image: "img_298",
    names: ["flavio"]
  },
  {
    image: "img_299",
    names: ["flavio"]
  },
  {
    image: "img_300",
    names: ["flavio"]
  },
  {
    image: "img_301",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_302",
    names: ["maurizio", "valentina"]
  },
  {
    image: "img_303",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_304",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_305",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_306",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_307",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_308",
    names: ["alfelix", "mmw", "flavio"]
  },
  {
    image: "img_309",
    names: ["azzurra"]
  },
  {
    image: "img_310",
    names: ["azzurra"]
  },
  {
    image: "img_311",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_312",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_313",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_314",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_315",
    names: ["azzurra", "claudia", "valentina"]
  },
  {
    image: "img_316",
    names: ["azzurra", "claudia", "valentina"]
  },
  {
    image: "img_317",
    names: ["azzurra", "claudia", "valentina"]
  },
  {
    image: "img_318",
    names: ["claudia"]
  },
  {
    image: "img_319",
    names: ["valentina"]
  },
  {
    image: "img_320",
    names: ["valentina"]
  },
  {
    image: "img_321",
    names: ["valentina"]
  },
  {
    image: "img_322",
    names: ["valentina"]
  },
  {
    image: "img_323",
    names: ["valentina"]
  },
  {
    image: "img_324",
    names: ["claudia", "sergio"]
  },
  {
    image: "img_325",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_326",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_327",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_328",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_329",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_330",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_331",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_332",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_333",
    names: ["claudia", "azzurra"]
  },
  {
    image: "img_334",
    names: [""]
  },
  {
    image: "img_335",
    names: [""]
  },
  {
    image: "img_336",
    names: [""]
  },
  {
    image: "img_337",
    names: [""]
  },
  {
    image: "img_338",
    names: [""]
  },
  {
    image: "img_339",
    names: ["angela"]
  },
  {
    image: "img_340",
    names: ["angela"]
  },
  {
    image: "img_341",
    names: ["angela"]
  },
  {
    image: "img_342",
    names: ["angela"]
  },
  {
    image: "img_343",
    names: ["sergio", "corrado", "turturro"]
  },
  {
    image: "img_344",
    names: ["sergio", "corrado", "turturro"]
  },
  {
    image: "img_345",
    names: ["turturro"]
  },
  {
    image: "img_346",
    names: ["nicola"]
  },
  {
    image: "img_347",
    names: ["nicola"]
  },
  {
    image: "img_348",
    names: ["azzurra", "claudia", "valentina"]
  },
  {
    image: "img_349",
    names: ["azzurra", "claudia"]
  },
  {
    image: "img_350",
    names: ["caputo"]
  },
  {
    image: "img_351",
    names: ["paolo"]
  },
  {
    image: "img_352",
    names: [""]
  },
  {
    image: "img_353",
    names: ["christian", "flavio"]
  },
  {
    image: "img_354",
    names: ["flavio", "alfelix"]
  },
  {
    image: "img_355",
    names: ["nicola", "edo"]
  },
  {
    image: "img_356",
    names: ["nicola", "edo", "alfelix"]
  },
  {
    image: "img_357",
    names: ["nicola", "edo", "alfelix", "caputo"]
  },
  {
    image: "img_358",
    names: ["nicola", "edo", "alfelix", "caputo"]
  },
  {
    image: "img_359",
    names: ["maurizio", "mattia", "angela"]
  },
  {
    image: "img_360",
    names: ["sergio", "turturro", "corrado"]
  },
  {
    image: "img_361",
    names: ["caputo", "angela"]
  },
  {
    image: "img_362",
    names: ["paola", "camilla"]
  },
  {
    image: "img_363",
    names: ["claudia", "caputo"]
  },
  {
    image: "img_364",
    names: ["carlo", "ilaria", "adriana", "tommy"]
  },
  {
    image: "img_365",
    names: ["carlo", "tommy"]
  },
  {
    image: "img_366",
    names: ["ilaria", "adriana"]
  },
  {
    image: "img_367",
    names: ["carlo", "ilaria", "adriana", "tommy"]
  },
  {
    image: "img_368",
    names: ["carlo", "ilaria", "adriana", "tommy"]
  },
  {
    image: "img_369",
    names: ["nico"]
  },
  {
    image: "img_370",
    names: [""]
  },
  {
    image: "img_371",
    names: ["mattia", "maurizio"]
  },
  {
    image: "img_372",
    names: ["edo", "nicola"]
  },
  {
    image: "img_373",
    names: ["vinz", "mmw"]
  },
  {
    image: "img_374",
    names: ["christian"]
  },
  {
    image: "img_375",
    names: ["edo", "maurizio"]
  },
  {
    image: "img_376",
    names: ["carlo"]
  },
  {
    image: "img_377",
    names: ["claudia", "alfelix"]
  },
  {
    image: "img_378",
    names: ["claudia", "alfelix"]
  },
  {
    image: "img_379",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_380",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_381",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_382",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_383",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_384",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_385",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_386",
    names: ["claudia", "alfelix", "flavio"]
  },
  {
    image: "img_387",
    names: ["claudia", "alfelix"]
  },
  {
    image: "img_388",
    names: ["claudia", "camilla"]
  },
  {
    image: "img_389",
    names: ["claudia", "camilla", "paola"]
  },
  {
    image: "img_390",
    names: ["claudia", "camilla", "paola"]
  },
  {
    image: "img_391",
    names: ["claudia", "camilla", "paola"]
  },
  {
    image: "img_392",
    names: ["claudia", "camilla", "paola"]
  },
  {
    image: "img_393",
    names: ["claudia", "camilla", "paola"]
  },
  {
    image: "img_395",
    names: ["caputo", "alfelix", "flavio"]
  },
  {
    image: "img_396",
    names: ["caputo", "alfelix", "flavio"]
  },
  {
    image: "img_397",
    names: ["alfelix"]
  }, 
  {
    image: "img_398",
    names: ["caputo", "alfelix", "flavio"]
  },
  {
    image: "img_399",
    names: ["caputo", "alfelix", "flavio"]
  },
  {
    image: "img_400",
    names: ["caputo", "alfelix", "flavio"]
  },
  {
    image: "img_401",
    names: ["edo", "valentina", "azzurra", "camilla", "mmw", "caputo", "paola", "claudia", "flavio", "alfelix"]
  },
  {
    image: "img_402",
    names: ["edo", "valentina", "azzurra", "camilla", "caputo", "paola", "claudia", "flavio", "alfelix"]
  },
  {
    image: "img_403",
    names: ["edo", "valentina", "azzurra", "camilla", "mmw", "caputo", "paola", "claudia", "flavio", "alfelix"]
  },
  {
    image: "img_404",
    names: ["edo", "valentina", "azzurra", "camilla", "mmw", "caputo", "paola", "claudia", "flavio", "alfelix"]
  },
  {
    image: "img_405",
    names: ["edo", "valentina", "azzurra", "camilla", "mmw", "caputo", "paola", "claudia", "flavio", "alfelix", "ilaria"]
  },
  {
    image: "img_406",
    names: ["edo", "valentina", "azzurra", "camilla", "mmw", "caputo", "claudia", "flavio", "alfelix"]
  },
  {
    image: "img_407",
    names: [""]
  },
  {
    image: "img_408",
    names: [""]
  },
  {
    image: "img_409",
    names: ["adriana", "flavio"]
  },
  {
    image: "img_410",
    names: [""]
  },
  {
    image: "img_411",
    names: [""]
  },
  {
    image: "img_412",
    names: [""]
  },
  {
    image: "img_413",
    names: [""]
  },
  {
    image: "img_414",
    names: [""]
  },
  {
    image: "img_415",
    names: [""]
  },
  {
    image: "img_416",
    names: [""]
  },
  {
    image: "img_417",
    names: [""]
  },
  {
    image: "img_418",
    names: [""]
  },
  {
    image: "img_419",
    names: [""]
  },
  {
    image: "img_420",
    names: [""]
  },
  {
    image: "img_421",
    names: [""]
  },
  {
    image: "img_422",
    names: [""]
  },
  {
    image: "img_423",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico"]
  },
  {
    image: "img_424",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico"]
  },
  {
    image: "img_425",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico"]
  },
  {
    image: "img_426",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico"]
  },
  {
    image: "img_427",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico"]
  },
  {
    image: "img_428",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico", "tommy", "carlo"]
  },
  {
    image: "img_429",
    names: ["mmw", "edo", "sergio", "vinz", "nicola", "flavio", "alfelix", "caputo", "paolo", "mattia", "maurizio", "christian", "nico", "tommy", "carlo"]
  },
  {
    image: "img_430",
    names: ["flavio", "alfelix", "caputo", "paolo", "maurizio", "christian", "nico"]
  },
  {
    image: "img_431",
    names: ["alfelix", "caputo", "paolo", "maurizio", "christian", "nico", "mattia"]
  },
  {
    image: "img_432",
    names: ["alfelix", "caputo", "paolo", "maurizio", "christian", "nico", "mattia"]
  },
  {
    image: "img_433",
    names: ["alfelix", "caputo", "paolo", "maurizio", "nico"]
  },
  {
    image: "img_434",
    names: [""]
  },
  {
    image: "img_435",
    names: ["angela"]
  },
  {
    image: "img_436",
    names: [""]
  },
  {
    image: "img_437",
    names: [""]
  },
  {
    image: "img_438",
    names: [""]
  },
  {
    image: "img_439",
    names: ["sergio", "turturro", "corrado"]
  },
  {
    image: "img_440",
    names: ["sergio", "turturro", "corrado"]
  },
  {
    image: "img_441",
    names: [""]
  },
  {
    image: "img_442",
    names: [""]
  },
  {
    image: "img_443",
    names: ["angela"]
  },
  {
    image: "img_444",
    names: ["angela"]
  },
  {
    image: "img_445",
    names: ["azzurra", "valentina", "claudia", "camilla", "angela", "paola", "adriana", "ilaria"]
  },
  {
    image: "img_446",
    names: ["azzurra", "valentina", "claudia", "camilla", "angela", "paola", "adriana", "ilaria"]
  },
  {
    image: "img_447",
    names: ["azzurra", "valentina", "claudia", "camilla", "angela", "paola", "adriana", "ilaria"]
  },
  {
    image: "img_448",
    names: ["azzurra", "valentina", "claudia", "camilla", "angela", "paola", "adriana"]
  },
  {
    image: "img_449",
    names: ["azzurra", "valentina", "claudia", "camilla", "angela", "paola", "adriana"]
  },
  {
    image: "img_450",
    names: ["claudia"]
  },
  {
    image: "img_451",
    names: ["claudia"]
  },
  {
    image: "img_452",
    names: ["claudia"]
  },
  {
    image: "img_453",
    names: ["claudia"]
  },
  {
    image: "img_454",
    names: ["paolo"]
  },
  {
    image: "img_455",
    names: ["paolo"]
  },{
    image: "img_456",
    names: ["caputo"]
  },
  {
    image: "img_457",
    names: ["caputo"]
  },
  {
    image: "img_458",
    names: [""]
  },
  {
    image: "img_459",
    names: ["alfelix"]
  },
  {
    image: "img_460",
    names: ["alfelix"]
  },
  {
    image: "img_461",
    names: ["edo", "vinz"]
  },
  {
    image: "img_462",
    names: ["edo", "vinz"]
  },
  {
    image: "img_463",
    names: ["edo", "vinz"]
  },
  {
    image: "img_464",
    names: ["edo", "vinz"]
  },
  {
    image: "img_465",
    names: ["edo", "vinz"]
  },
  {
    image: "img_466",
    names: ["flavio", "nicola"]
  },
  {
    image: "img_467",
    names: ["flavio", "nicola"]
  },
  {
    image: "img_468",
    names: ["caputo", "christin", "valentina", "azzurra", "maurizio"]
  },
  {
    image: "img_469",
    names: [""]
  },
  {
    image: "img_470",
    names: [""]
  },
  {
    image: "img_471",
    names: ["mmw"]
  },
  {
    image: "img_472",
    names: ["mmw"]
  },
  {
    image: "img_473",
    names: ["nicola", "edo"]
  },
  {
    image: "img_474",
    names: [""]
  },
  {
    image: "img_475",
    names: [""]
  },
  {
    image: "img_476",
    names: ["adriana", "carlo"]
  },
  {
    image: "img_477",
    names: ["adriana", "carlo"]
  },
  {
    image: "img_478",
    names: ["adriana", "carlo"]
  },
  {
    image: "img_479",
    names: ["adriana", "carlo"]
  },
  {
    image: "img_480",
    names: ["adriana", "carlo"]
  },
  {
    image: "img_481",
    names: ["edo", "nicola", "mmw"]
  },
  {
    image: "img_482",
    names: ["edo", "nicola", "mmw"]
  },
  {
    image: "img_483",
    names: ["caputo", "claudia"]
  },
  {
    image: "img_484",
    names: ["caputo"]
  },
  {
    image: "img_485",
    names: ["sergio", "ilaria", "angela"]
  },
  {
    image: "img_486",
    names: ["paolo", "nicola"]
  },
  {
    image: "img_487",
    names: ["claudia"]
  },
  {
    image: "img_488",
    names: ["sergio", "ilaria"]
  },
  {
    image: "img_489",
    names: ["mmw"]
  },
  {
    image: "img_490",
    names: ["mmw", "alfelix"]
  },
  {
    image: "img_491",
    names: ["christian", "vinz", "valentina", "azzurra"]
  },
  {
    image: "img_492",
    names: ["edo"]
  },
  {
    image: "img_493",
    names: ["becky"]
  },
  {
    image: "img_494",
    names: [""]
  },
  {
    image: "img_495",
    names: [""]
  },
  {
    image: "img_496",
    names: [""]
  },
  {
    image: "img_497",
    names: ["caputo"]
  },
  {
    image: "img_498",
    names: ["caputo"]
  },
  {
    image: "img_499",
    names: ["caputo"]
  },
  {
    image: "img_500",
    names: ["caputo"]
  },
  {
    image: "img_501",
    names: ["caputo"]
  },
  {
    image: "img_502",
    names: ["claudia", "angela"]
  },
  {
    image: "img_503",
    names: ["matteo"]
  },
  {
    image: "img_504",
    names: ["tommy"]
  },
  {
    image: "img_505",
    names: ["matteo", "mattia"]
  },
  {
    image: "img_506",
    names: ["matteo", "mattia", "carlo"]
  },
  {
    image: "img_507",
    names: [""]
  },
  {
    image: "img_508",
    names: [""]
  },
  {
    image: "img_509",
    names: ["adriana"]
  },
  {
    image: "img_510",
    names: [""]
  },
  {
    image: "img_511",
    names: ["adriana"]
  },
  {
    image: "img_512",
    names: ["adriana"]
  },
  {
    image: "img_513",
    names: [""]
  },
  {
    image: "img_514",
    names: ["caputo"]
  },
  {
    image: "img_515",
    names: ["alfelix"]
  },
  {
    image: "img_516",
    names: ["afelix", "becky"]
  },
  {
    image: "img_517",
    names: ["alfelix", "becky", "adriana"]
  },
  {
    image: "img_518",
    names: ["sergio", "alfelix"]
  },
  {
    image: "img_519",
    names: [""]
  },
  {
    image: "img_520",
    names: ["becky"]
  },
  {
    image: "img_521",
    names: ["angela"]
  },
  {
    image: "img_522",
    names: [""]
  },
  {
    image: "img_523",
    names: ["becky", "carlo"]
  },
  {
    image: "img_524",
    names: ["mattia"]
  },
  {
    image: "img_525",
    names: [""]
  },
  {
    image: "img_526",
    names: [""]
  },
  {
    image: "img_527",
    names: ["ilaria"]
  },
  {
    image: "img_528",
    names: [""]
  },
  {
    image: "img_529",
    names: [""]
  },
  {
    image: "img_530",
    names: [""]
  },
  {
    image: "img_531",
    names: ["paolo", "vinz"]
  },
  {
    image: "img_532",
    names: [""]
  },
  {
    image: "img_533",
    names: ["carlo", "matteo"]
  },
  {
    image: "img_534",
    names: [""]
  },
  {
    image: "img_535",
    names: [""]
  },
  {
    image: "img_536",
    names: [""]
  },
  {
    image: "img_537",
    names: ["carlo"]
  },
  {
    image: "img_538",
    names: ["carlo", "alfelix"]
  },
  {
    image: "img_539",
    names: ["alfelix"]
  },
  {
    image: "img_540",
    names: ["carlo", "alfelix"]
  },
  {
    image: "img_541",
    names: [""]
  },
  {
    image: "img_542",
    names: [""]
  },
  {
    image: "img_543",
    names: ["alfelix"]
  },
  {
    image: "img_544",
    names: ["carlo", "becky", "adriana"]
  },
  {
    image: "img_545",
    names: [""]
  },
  {
    image: "img_546",
    names: ["vinz"]
  },
  {
    image: "img_547",
    names: ["vinz", "mattia"]
  },
  {
    image: "img_548",
    names: ["edo", "ilaria"]
  },
  {
    image: "img_549",
    names: ["sergio"]
  },
  {
    image: "img_550",
    names: ["alfelix", "becky"]
  },
  {
    image: "img_551",
    names: ["alfelix", "becky"]
  },
  {
    image: "img_552",
    names: ["alfelix", "becky", "carlo"]
  },
  {
    image: "img_553",
    names: ["alfelix", "becky", "carlo"]
  },
  {
    image: "img_554",
    names: [""]
  },
  {
    image: "img_555",
    names: [""]
  },
  {
    image: "img_556",
    names: [""]
  },
  {
    image: "img_557",
    names: [""]
  },
  {
    image: "img_558",
    names: ["alfelix"]
  },
  {
    image: "img_559",
    names: ["alfelix"]
  },
  {
    image: "img_560",
    names: ["alfelix"]
  },
  {
    image: "img_561",
    names: ["alfelix"]
  },
  {
    image: "img_562",
    names: ["alfelix"]
  },
  {
    image: "img_563",
    names: ["alfelix"]
  },
  {
    image: "img_564",
    names: ["alfelix"]
  },
  {
    image: "img_565",
    names: ["alfelix", "edo", "sergio", "paolo"]
  },
  {
    image: "img_566",
    names: ["alfelix"]
  },
  {
    image: "img_567",
    names: ["vinz", "paolo", "mattia"]
  },
  {
    image: "img_568",
    names: ["mattia", "alfelix"]
  },
  {
    image: "img_569",
    names: ["mattia", "alfelix"]
  },
  {
    image: "img_570",
    names: ["azzurra"]
  },
  {
    image: "img_571",
    names: [""]
  },
  {
    image: "img_572",
    names: [""]
  },
  {
    image: "img_573",
    names: ["ilaria"]
  },
  {
    image: "img_574",
    names: ["ilaria", "mattia"]
  },
  {
    image: "img_575",
    names: ["ilaria", "mattia"]
  },
  {
    image: "img_576",
    names: ["ilaria", "mattia"]
  },
  {
    image: "img_577",
    names: [""]
  },
  {
    image: "img_578",
    names: [""]
  },
  {
    image: "img_579",
    names: [""]
  },
  {
    image: "img_580",
    names: ["vinz"]
  },
  {
    image: "img_581",
    names: ["ilaria"]
  },
  {
    image: "img_582",
    names: ["azzurra"]
  },
  {
    image: "img_583",
    names: [""]
  },
  {
    image: "img_584",
    names: ["sergio", "ilaria", "angela"]
  },
  {
    image: "img_585",
    names: [""]
  },
  {
    image: "img_586",
    names: [""]
  },
  {
    image: "img_587",
    names: ["azzurra"]
  },
  {
    image: "img_588",
    names: ["azzurra"]
  },
  {
    image: "img_589",
    names: ["azzurra", "mattia"]
  },
  {
    image: "img_590",
    names: ["azzurra", "mattia"]
  },
  {
    image: "img_591",
    names: [""]
  },
  {
    image: "img_592",
    names: [""]
  },
  {
    image: "img_593",
    names: [""]
  },
  {
    image: "img_594",
    names: [""]
  },
  {
    image: "img_595",
    names: [""]
  },
  {
    image: "img_596",
    names: [""]
  },
  {
    image: "img_597",
    names: [""]
  },
  {
    image: "img_598",
    names: [""]
  },
  {
    image: "img_599",
    names: [""]
  },
  {
    image: "img_600",
    names: [""]
  }
]


if (window.location.hash === '') {
  console.log('delete ALL')
}
window.location.hash = '';

// Crea un oggetto URLSearchParams
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id); // "2"

let selectedName = idToName[id];
selector.setSelected(selectedName);
console.log(`il nome selezionato in partenza è stato ${selectedName} con l'id ${id}`)

  let slideshowInterval;

  function startSlideshow(selectedName) {
    const personalGallery = document.getElementById('personalGallery');
    const personalImages = imagePeopleTag
    .filter(entry => entry.names.includes(selectedName.toLowerCase()))
    .map(entry => entry.image);
  
    if (personalImages.length === 0) {
      //show alternative image 
    }

    const basePreviewPath = '/personal/laurea/galleryPhotos/webBig/';
    const baseBigPath = '/personal/laurea/galleryPhotos/webBig/';
  
    let index = 0;
  
    if (slideshowInterval) clearInterval(slideshowInterval);
    personalGallery.innerHTML = '';
  
    const imageCards = [];
  
    personalImages.forEach((imgId, i) => {
      const bigImagePath = `${baseBigPath}${imgId}.jpg`;
      const previewPath = `${basePreviewPath}${imgId}.jpg`;
  
      // Crea oggetto immagine temporaneo per leggere dimensioni
      const tempImg = new Image();
      tempImg.src = bigImagePath;
      tempImg.onload = () => {
        const width = tempImg.naturalWidth;
        const height = tempImg.naturalHeight;
  
        const anchor = document.createElement('a');
        anchor.href = bigImagePath;
        anchor.target = '_blank';
        anchor.classList.add('imageCard');
        anchor.setAttribute('data-pswp-width', width);
        anchor.setAttribute('data-pswp-height', height);
        anchor.id = `a_${imgId}`;
  
        if (i === 0) anchor.classList.add('active');
  
        const img = document.createElement('img');
        img.src = previewPath;
        img.alt = '';
        img.id = imgId;
        img.classList.add('foto');
  
        anchor.appendChild(img);
        personalGallery.appendChild(anchor);
        imageCards.push(anchor);
  
        // Avvia slideshow solo quando tutte le immagini sono caricate
        if (imageCards.length === personalImages.length) {
          index=0;
          slideshowInterval = setInterval(() => {
            imageCards[index].classList.remove('active');
            index = (index + 1) % imageCards.length;
            imageCards[index].classList.add('active');
          }, 1200);
        }
      };
    });
  }

// Ascolta il cambio nel menu a tendina
document.querySelector('select').addEventListener('change', (event) => {
  const newSelectedName = event.target.value;
  console.log(newSelectedName);
  const personalGallery = document.getElementById('personalGallery');

  if (!newSelectedName) {
    personalGallery.style.display = 'none';
    return;
  }

  selectedName = newSelectedName;
  personalGallery.style.display = 'block';
  startSlideshow(selectedName);
});

if (selectedName) {
  const personalGallery = document.getElementById('personalGallery');
  personalGallery.style.display = 'block';
  startSlideshow(selectedName)
}

  //Download Personal
  document.getElementById('downloadPersonal').addEventListener('click', () => {
    const gallery = document.getElementById('personalGallery');
    const links = gallery.querySelectorAll('a');

    links.forEach((link, index) => {
        const url = link.href;
        const filename = url.substring(url.lastIndexOf('/') + 1);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    if (links.length === 0) {
        alert('Seleziona prima il nome');
    }
});


window.addEventListener('load', () => {
  const banner = document.getElementById('topBanner');
  const loadingText = document.getElementById('loadingText');

  // Crea overlay blocca interazioni
  const blocker = document.createElement('div');
  blocker.style.position = 'fixed';
  blocker.style.top = '0';
  blocker.style.left = '0';
  blocker.style.width = '100%';
  blocker.style.height = '100%';
  blocker.style.zIndex = '9998'; // appena sotto al banner
  blocker.style.background = 'transparent';
  blocker.style.pointerEvents = 'all';
  blocker.style.overflow = 'hidden';
  document.body.appendChild(blocker);

  // Forza scroll in alto
  window.scrollTo(0, 0);

  setTimeout(() => {
    banner.classList.add('shrink');

    setTimeout(() => {
      banner.classList.remove('shrink');
      banner.classList.add('final');

      // Rimuove "Caricamento..." e blocco interazione
      if (loadingText) loadingText.remove();
      blocker.remove();
    }, 1000); // durata animazione
  }, 1000); // ritardo prima di iniziare
});
