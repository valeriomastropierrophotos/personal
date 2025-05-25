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
    image: "img_31",
    names: ["davide"]
  },
  {
    image: "img_32",
    names: ["davide"]
  },
  {
    image: "img_33",
    names: ["mamma"]
  },
  {
    image: "img_34",
    names: ["mamma"]
  },
  {
    image: "img_35",
    names: ["mamma"]
  },
  {
    image: "img_36",
    names: ["mamma"]
  },
  {
    image: "img_37",
    names: ["mamma"]
  },
  {
    image: "img_38",
    names: ["mamma"]
  },
  {
    image: "img_39",
    names: ["mamma"]
  },
  {
    image: "img_40",
    names: ["cosmo"]
  },
  {
    image: "img_41",
    names: ["papa"]
  },
  {
    image: "img_42",
    names: ["zia_lella"]
  },
  {
    image: "img_43",
    names: ["zia_lella"]
  },
  {
    image: "img_44",
    names: ["zia_rosa",]
  },
  {
    image: "img_45",
    names: ["zia_rosa"]
  },
  {
    image: "img_46",
    names: ["zia_rosa"]
  },
  {
    image: "img_47",
    names: ["zia_rosa"]
  },
  {
    image: "img_48",
    names: ["martina"]
  },
  {
    image: "img_49",
    names: ["francesco"]
  },
  {
    image: "img_50",
    names: ["mamma"]
  },
  {
    image: "img_51",
    names: ["mamma"]
  },
  {
    image: "img_52",
    names: ["mamma"]
  },
  {
    image: "img_53",
    names: ["mamma"]
  },
  {
    image: "img_54",
    names: ["mamma"]
  },
  {
    image: "img_55",
    names: ["mamma"]
  },
  {
    image: "img_56",
    names: ["mamma"]
  },
  {
    image: "img_57",
    names: ["mamma"]
  },
  {
    image: "img_58",
    names: ["mamma"]
  },
  {
    image: "img_59",
    names: ["mamma"]
  },
  {
    image: "img_60",
    names: ["mamma"]
  },
  {
    image: "img_61",
    names: ["mamma"]
  },
  {
    image: "img_62",
    names: ["mamma"]
  },
  {
    image: "img_63",
    names: ["mamma"]
  },
  {
    image: "img_64",
    names: ["mamma"]
  },
  {
    image: "img_65",
    names: ["mamma"]
  },
  {
    image: "img_66",
    names: ["mamma"]
  },
  {
    image: "img_67",
    names: ["mamma"]
  },
  {
    image: "img_68",
    names: ["mamma"]
  },
  {
    image: "img_69",
    names: ["mamma"]
  },
  {
    image: "img_70",
    names: ["mamma"]
  },
  {
    image: "img_71",
    names: ["mamma"]
  },
  {
    image: "img_72",
    names: ["mamma"]
  },
  {
    image: "img_73",
    names: ["mamma"]
  },
  {
    image: "img_74",
    names: ["zia_rosa"]
  },
  {
    image: "img_75",
    names: ["zia_rosa"]
  },
  {
    image: "img_76",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_77",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_78",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_79",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_80",
    names: ["zia_rosa"]
  },
  {
    image: "img_81",
    names: ["zia_rosa"]
  },
  {
    image: "img_82",
    names: ["zia_rosa"]
  },
  {
    image: "img_83",
    names: ["zia_rosa"]
  },
  {
    image: "img_84",
    names: ["zia_rosa"]
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
    image: "img_130",
    names: ["davide", "francesco", "zia_rosa"]
  },
  {
    image: "img_131",
    names: ["papa"]
  },
  {
    image: "img_132",
    names: ["papa"]
  },
  {
    image: "img_150",
    names: ["zio_onofrio"]
  },
  {
    image: "img_155",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_156",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_157",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_158",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_159",
    names: ["mamma"]
  },
  {
    image: "img_160",
    names: ["mamma"]
  },
  {
    image: "img_161",
    names: ["mamma"]
  },
  {
    image: "img_162",
    names: ["mamma", "papa"]
  },
  {
    image: "img_163",
    names: ["mamma", "papa"]
  },
  {
    image: "img_164",
    names: ["alfelix"]
  },
  {
    image: "img_165",
    names: ["zia_rosa"]
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
    names: ["sergio", "mamma", "papa"]
  },
  {
    image: "img_174",
    names: ["sergio", "mamma", "domenico"]
  },
  {
    image: "img_175",
    names: ["sergio", "mamma", "papa"]
  },
  {
    image: "img_176",
    names: ["sergio"]
  },
  {
    image: "img_177",
    names: ["mamma", "davide", "francesco"]
  },
  {
    image: "img_178",
    names: ["mamma", "davide", "francesco"]
  },
  {
    image: "img_179",
    names: ["mamma", "davide", "francesco"]
  },
  {
    image: "img_180",
    names: ["mamma", "davide", "francesco"]
  },
  {
    image: "img_181",
    names: ["mamma", "davide", "francesco"]
  },
  {
    image: "img_182",
    names: ["mamma"]
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
    names: ["sergio", "adriana", "cosmo", "mamma"]
  },
  {
    image: "img_187",
    names: ["sergio", "adriana", "cosmo", "mamma"]
  },
  {
    image: "img_188",
    names: ["mamma"]
  },
  {
    image: "img_189",
    names: ["marco", "silvana"]
  },
  {
    image: "img_192",
    names: ["domenico"]
  },
  {
    image: "img_193",
    names: ["davide"]
  },
  {
    image: "img_194",
    names: ["davide"]
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
    image: "img_222",
    names: ["sergio", "zia_rosa"]
  },
  {
    image: "img_223",
    names: ["papa"]
  },
  {
    image: "img_224",
    names: ["francesco"]
  },
  {
    image: "img_225",
    names: ["davide"]
  },
  {
    image: "img_226",
    names: ["davide", "francesco"]
  },
  {
    image: "img_227",
    names: ["davide", "francesco"]
  },
  {
    image: "img_228",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_229",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_230",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_231",
    names: ["mamma", "papa", "davide", "francesco"]
  },
  {
    image: "img_233",
    names: ["zio_onofrio"]
  },
  {
    image: "img_234",
    names: ["zia_lella"]
  },
  {
    image: "img_235",
    names: ["mamma", "zia_lella"]
  },
  {
    image: "img_305",
    names: ["marianna"]
  },
  {
    image: "img_306",
    names: ["marianna"]
  },
  {
    image: "img_308",
    names: ["valerio", "linda"]
  },
  {
    image: "img_309",
    names: ["valerio", "linda"]
  },
  {
    image: "img_3010",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_3011",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_3013",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_3014",
    names: ["linda", "antonella", "lillino", "cinzia"]
  },
  {
    image: "img_3016",
    names: ["linda", "antonella", "lillino", "cinzia", "zia_pasqua", "zia_marta"]
  },
  {
    image: "img_3019",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_3020",
    names: ["zio_franco", "domenico_piccolo", "cinzia"]
  },
  {
    image: "img_3021",
    names: ["zio_franco", "domenico_piccolo", "cinzia"]
  },
  {
    image: "img_3023",
    names: ["zio_franco", "domenico_piccolo", "cinzia", "marianna"]
  },
  {
    image: "img_3024",
    names: ["zio_vito", "martina"]
  },
  {
    image: "img_3025",
    names: ["zio_vito", "martina"]
  },
  {
    image: "img_3027",
    names: ["mamma", "valerio"]
  },
  {
    image: "img_3028",
    names: ["zia_rosa", "martina"]
  },
  {
    image: "img_3029",
    names: ["mamma", "valerio", "zia_lella"]
  },
  {
    image: "img_3032",
    names: ["zia_rosa", "mamma", "valerio", "martina"]
  },
  {
    image: "img_3060",
    names: ["zia_pasqua"]
  },
  {
    image: "img_3072",
    names: ["lillino", "domenico_piccolo"]
  },
  {
    image: "img_3072",
    names: ["francesco"]
  },
  {
    image: "img_3076",
    names: ["francesco"]
  },
  {
    image: "img_3077",
    names: ["martina"]
  },
  {
    image: "img_3078",
    names: ["martina"]
  },
  {
    image: "img_3079",
    names: ["martina"]
  },
  {
    image: "img_3080",
    names: ["martina"]
  },
  {
    image: "img_3081",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_3082",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_3083",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_3084",
    names: ["lillino", "antonella"]
  },
  {
    image: "img_3085",
    names: ["martina"]
  },
  {
    image: "img_3087",
    names: ["martina"]
  },
  {
    image: "img_3089",
    names: ["francesco"]
  },
  {
    image: "img_3092",
    names: ["francesco"]
  },
  {
    image: "img_3095",
    names: ["francesco"]
  },
  {
    image: "img_3097",
    names: ["francesco"]
  },
  {
    image: "img_3099",
    names: ["francesco"]
  },
  {
    image: "img_30101",
    names: ["francesco"]
  },
  {
    image: "img_30103",
    names: ["francesco"]
  },
  {
    image: "img_30104",
    names: ["francesco"]
  },
  {
    image: "img_30117",
    names: ["francesco"]
  },
  {
    image: "img_30123",
    names: ["martina"]
  },
  {
    image: "img_30125",
    names: ["davide"]
  },
  {
    image: "img_30126",
    names: ["davide"]
  },
  {
    image: "img_30128",
    names: ["martina"]
  },
  {
    image: "img_30129",
    names: ["davide"]
  },
  {
    image: "img_30130",
    names: ["francesco"]
  },
  {
    image: "img_30131",
    names: ["martina"]
  },
  {
    image: "img_30132",
    names: ["martina"]
  },
  {
    image: "img_30136",
    names: ["martina", "francesco"]
  },
  {
    image: "img_30138",
    names: ["valerio", "linda", "zia_lella"]
  },
  {
    image: "img_30139",
    names: ["valerio", "linda"]
  },
  {
    image: "img_30140",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_30141",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_30142",
    names: ["cinzia", "antonella", "marianna", "zia_marta"]
  },
  {
    image: "img_30143",
    names: ["valerio"]
  },
  {
    image: "img_30144",
    names: ["linda", "zia_rosa", "valerio", "zia_marta"]
  },
  {
    image: "img_30145",
    names: ["linda", "marianna", "zia_rosa", "zia_marta"]
  },
  {
    image: "img_30146",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_30147",
    names: ["lillino", "antonella"]
  },
  {
    image: "img_30148",
    names: ["cinzia", "marianna"]
  },
  {
    image: "img_30149",
    names: ["zia_lella", "valerio"]
  },
  {
    image: "img_30150",
    names: ["valerio"]
  },
  {
    image: "img_30152",
    names: ["cinzia", "antonella"]
  },
  {
    image: "img_30155",
    names: ["linda", "fabio", "linda"]
  },
  {
    image: "img_30175",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_30176",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_30177",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_30179",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_30182",
    names: ["marianna"]
  },
  {
    image: "img_30185",
    names: ["fabio"]
  },
  {
    image: "img_30188",
    names: ["zio_marta", "marianna"]
  },
  {
    image: "img_30189",
    names: ["lillino", "domenico_piccolo"]
  },
  {
    image: "img_30191",
    names: ["fabio"]
  },
  {
    image: "img_30192",
    names: ["fabio", "antonella"]
  },
  {
    image: "img_30193",
    names: ["domenico_piccolo", "antonella", "cinzia", "lillino", "zia_pasqua"]
  },
  {
    image: "img_30202",
    names: ["fabio", "giuseppe"]
  },
  {
    image: "img_30203",
    names: ["valerio", "francesco", "davide", "mamma"]
  },
  {
    image: "img_30204",
    names: ["valerio", "francesco", "davide", "mamma"]
  },
  {
    image: "img_30206",
    names: ["valerio", "papa", "francesco", "davide", "mamma"]
  },
  {
    image: "img_30207",
    names: ["valerio", "papa", "francesco", "davide", "mamma"]
  },
  {
    image: "img_30211",
    names: ["fabio"]
  },
  {
    image: "img_30216",
    names: ["fabio", "pino"]
  },
  {
    image: "img_30217",
    names: ["valerio"]
  },
  {
    image: "img_30220",
    names: ["valerio"]
  },
  {
    image: "img_30222",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_30223",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_30226",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_30230",
    names: ["valerio", "mamma"]
  },
  {
    image: "img_30233",
    names: ["valerio", "davide", "francesco"]
  },
  {
    image: "img_30239",
    names: ["valerio", "zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_30240",
    names: ["valerio", "zia_lella", "martina", "zio_vito"]
  },
  {
    image: "img_30244",
    names: ["pino", "rosa", "zia_anna", "valerio"]
  },
  {
    image: "img_30246",
    names: ["zia_marta", "valerio", "zio_gino"]
  },
  {
    image: "img_30250",
    names: ["valerio", "zia_pasqua", "zio_franco"]
  },
  {
    image: "img_30253",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_30258",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_30259",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_30262",
    names: ["valerio", "mamma", "davide", "francesco", "papa"] 
  },
  {
    image: "img_30263",
    names: ["valerio"]
  },
  {
    image: "img_30266",
    names: ["valerio", "mamma","papa"] 
  },
  {
    image: "img_30269",
    names: ["valerio", "mamma","papa"] 
  },
  {
    image: "img_30270",
    names: ["valerio", "mamma","papa"] 
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
      personalGallery.innerHTML = '<p>Nessuna immagine disponibile.</p>';
    }


    const basePath = '/personal/laurea/photos/webBig/';
    const basePathSeduta = '/personal/laurea/galleryPhotos/webBig/';
    personalGallery.innerHTML = '';

    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Caricamento...';
    loadingMessage.id = 'loadingMessage'
    personalGallery.appendChild(loadingMessage);

    if (slideshowInterval) clearInterval(slideshowInterval);
  
    const imageLoadPromises = personalImages.map(imgId => {
      return new Promise(resolve => {
        const tempImg = new Image();
        let imgIdNumber = parseInt(imgId.substring(4));
        if (imgIdNumber<237) { 
        tempImg.src = `${basePathSeduta}${imgId}.jpg`;
        } else {tempImg.src = `${basePath}${imgId}.jpg`;
}
        tempImg.onload = () => {
          resolve({
            imgId,
            width: tempImg.naturalWidth,
            height: tempImg.naturalHeight
          });
        };
      });
    });
  
    Promise.all(imageLoadPromises).then(loadedImages => {

      personalGallery.innerHTML = '';

      const imageCards = [];
  
      loadedImages.forEach(({ imgId, width, height }, i) => {
        const anchor = document.createElement('a');
        let imgIdNumber = parseInt(imgId.substring(4));
        console.log(imgIdNumber)
        if(imgIdNumber<237){
        anchor.href = `${basePathSeduta}${imgId}.jpg`;
        } else {anchor.href = `${basePath}${imgId}.jpg`;}
        anchor.target = '_blank';
        anchor.classList.add('imageCard');
        anchor.setAttribute('data-pswp-width', width);
        anchor.setAttribute('data-pswp-height', height);
        anchor.id = `a_${imgId}`;
  
        const img = document.createElement('img');
        if(imgIdNumber<237){
        img.src = `${basePathSeduta}${imgId}.jpg`;
        } else {img.src = `${basePath}${imgId}.jpg`;}
        img.alt = '';
        img.id = imgId;
        img.classList.add('foto');
        if (i === 0) anchor.classList.add('active');
  
        anchor.appendChild(img);
        personalGallery.appendChild(anchor);
        imageCards.push(anchor);
      });
  
      // Avvia slideshow ordinato
      let index = 0;
      slideshowInterval = setInterval(() => {
        imageCards[index].classList.remove('active');
        index = (index + 1) % imageCards.length;
        imageCards[index].classList.add('active');
      }, 1500);
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
