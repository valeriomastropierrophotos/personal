import PhotoSwipeLightbox from '/personal/laurea/vendor/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/personal/laurea/vendor/photoswipe/dist/photoswipe.esm.js';

const lightboxMain = new PhotoSwipeLightbox({
  gallery: '#mainGallery',
  children: 'a',
  pswpModule: PhotoSwipe,
  history: true
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
          el.href = '/personal/laurea/photos/webBig/' + pswp.currSlide.data.src.split('/').pop();
        });
      }
    });
  });
  lightboxMain.init();

  const lightboxPersonal = new PhotoSwipeLightbox({
    gallery: '#personalGallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    history: true
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
            el.href = '/personal/laurea/photos/webBig/' + pswp.currSlide.data.src.split('/').pop();
          });
        }
      });
    });
    lightboxPersonal.init();

const selector = new SlimSelect({
  select: "select",
  settings: {
   placeholderText: 'Inserisci il tuo nome',
   allowDeselect: true
 }
 })

const idToName = {
  "1": "giovanni",
  "2": "claudio",
  "3": "jhon",
  // ...
  "30": "Francesca"
};

const imagePeopleTag = [
  {
    image: "img_5",
    names: ["marianna"]
  },
  {
    image: "img_6",
    names: ["marianna"]
  },
  {
    image: "img_8",
    names: ["valerio", "linda"]
  },
  {
    image: "img_9",
    names: ["valerio", "linda"]
  },
  {
    image: "img_10",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_11",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_13",
    names: ["zia_pasqua", "zia_marta", "valerio"]
  },
  {
    image: "img_14",
    names: ["linda", "antonella", "lillino", "cinzia"]
  },
  {
    image: "img_16",
    names: ["linda", "antonella", "lillino", "cinzia", "zia_pasqua", "zia_marta"]
  },
  {
    image: "img_19",
    names: ["zia_rosa", "zio_onofrio"]
  },
  {
    image: "img_20",
    names: ["zio_franco", "domenico_piccolo", "cinzia"]
  },
  {
    image: "img_21",
    names: ["zio_franco", "domenico_piccolo", "cinzia"]
  },
  {
    image: "img_23",
    names: ["zio_franco", "domenico_piccolo", "cinzia", "marianna"]
  },
  {
    image: "img_24",
    names: ["zio_vito", "martina"]
  },
  {
    image: "img_25",
    names: ["zio_vito", "martina"]
  },
  {
    image: "img_27",
    names: ["mamma", "valerio"]
  },
  {
    image: "img_28",
    names: ["zia_rosa", "martina"]
  },
  {
    image: "img_29",
    names: ["mamma", "valerio", "zia_lella"]
  },
  {
    image: "img_32",
    names: ["zia_rosa", "mamma", "valerio", "martina"]
  },
  {
    image: "img_60",
    names: ["zia_pasqua"]
  },
  {
    image: "img_72",
    names: ["lillino", "domenico_piccolo"]
  },
  {
    image: "img_72",
    names: ["francesco"]
  },
  {
    image: "img_76",
    names: ["francesco"]
  },
  {
    image: "img_77",
    names: ["martina"]
  },
  {
    image: "img_78",
    names: ["martina"]
  },
  {
    image: "img_79",
    names: ["martina"]
  },
  {
    image: "img_80",
    names: ["martina"]
  },
  {
    image: "img_81",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_82",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_83",
    names: ["lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_84",
    names: ["lillino", "antonella"]
  },
  {
    image: "img_85",
    names: ["martina"]
  },
  {
    image: "img_87",
    names: ["martina"]
  },
  {
    image: "img_89",
    names: ["francesco"]
  },
  {
    image: "img_92",
    names: ["francesco"]
  },
  {
    image: "img_95",
    names: ["francesco"]
  },
  {
    image: "img_97",
    names: ["francesco"]
  },
  {
    image: "img_99",
    names: ["francesco"]
  },
  {
    image: "img_101",
    names: ["francesco"]
  },
  {
    image: "img_103",
    names: ["francesco"]
  },
  {
    image: "img_104",
    names: ["francesco"]
  },
  {
    image: "img_117",
    names: ["francesco"]
  },
  {
    image: "img_123",
    names: ["martina"]
  },
  {
    image: "img_125",
    names: ["davide"]
  },
  {
    image: "img_126",
    names: ["davide"]
  },
  {
    image: "img_128",
    names: ["martina"]
  },
  {
    image: "img_129",
    names: ["davide"]
  },
  {
    image: "img_130",
    names: ["francesco"]
  },
  {
    image: "img_131",
    names: ["martina"]
  },
  {
    image: "img_132",
    names: ["martina"]
  },
  {
    image: "img_136",
    names: ["martina", "francesco"]
  },
  {
    image: "img_138",
    names: ["valerio", "linda", "zia_lella"]
  },
  {
    image: "img_139",
    names: ["valerio", "linda"]
  },
  {
    image: "img_140",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_141",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_142",
    names: ["cinzia", "antonella", "marianna", "zia_marta"]
  },
  {
    image: "img_143",
    names: ["valerio"]
  },
  {
    image: "img_144",
    names: ["linda", "zia_rosa", "valerio", "zia_marta"]
  },
  {
    image: "img_145",
    names: ["linda", "marianna", "zia_rosa", "zia_marta"]
  },
  {
    image: "img_146",
    names: ["linda", "marianna", "zia_marta"]
  },
  {
    image: "img_147",
    names: ["lillino", "antonella"]
  },
  {
    image: "img_148",
    names: ["cinzia", "marianna"]
  },
  {
    image: "img_149",
    names: ["zia_lella", "valerio"]
  },
  {
    image: "img_150",
    names: ["valerio"]
  },
  {
    image: "img_152",
    names: ["cinzia", "antonella"]
  },
  {
    image: "img_155",
    names: ["linda", "fabio", "linda"]
  },
  {
    image: "img_175",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_176",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_177",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_179",
    names: ["zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_182",
    names: ["marianna"]
  },
  {
    image: "img_185",
    names: ["fabio"]
  },
  {
    image: "img_188",
    names: ["zio_marta", "marianna"]
  },
  {
    image: "img_189",
    names: ["lillino", "domenico_piccolo"]
  },
  {
    image: "img_191",
    names: ["fabio"]
  },
  {
    image: "img_192",
    names: ["fabio", "antonella"]
  },
  {
    image: "img_193",
    names: ["domenico_piccolo", "antonella", "cinzia", "lillino", "zia_pasqua"]
  },
  {
    image: "img_193",
    names: ["valerio", "zia_anna"]
  },
  {
    image: "img_202",
    names: ["fabio", "giuseppe"]
  },
  {
    image: "img_203",
    names: ["valerio", "francesco", "davide", "mamma"]
  },
  {
    image: "img_204",
    names: ["valerio", "francesco", "davide", "mamma"]
  },
  {
    image: "img_206",
    names: ["valerio", "papa", "francesco", "davide", "mamma"]
  },
  {
    image: "img_207",
    names: ["valerio", "papa", "francesco", "davide", "mamma"]
  },
  {
    image: "img_211",
    names: ["fabio"]
  },
  {
    image: "img_216",
    names: ["fabio", "pino"]
  },
  {
    image: "img_217",
    names: ["valerio"]
  },
  {
    image: "img_220",
    names: ["valerio"]
  },
  {
    image: "img_222",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_223",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_226",
    names: ["valerio", "mamma", "papa"]
  },
  {
    image: "img_230",
    names: ["valerio", "mamma"]
  },
  {
    image: "img_233",
    names: ["valerio", "davide", "francesco"]
  },
  {
    image: "img_239",
    names: ["valerio", "zio_onofrio", "zia_rosa"]
  },
  {
    image: "img_240",
    names: ["valerio", "zia_lella", "martina", "zio_vito"]
  },
  {
    image: "img_244",
    names: ["pino", "rosa", "zia_anna", "valerio"]
  },
  {
    image: "img_246",
    names: ["zia_marta", "valerio", "zio_gino"]
  },
  {
    image: "img_250",
    names: ["valerio", "zia_pasqua", "zio_franco"]
  },
  {
    image: "img_253",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_258",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_259",
    names: ["valerio", "marianna", "giuseppe", "linda", "fabio", "cinzia", "lillino", "domenico_piccolo", "antonella"]
  },
  {
    image: "img_262",
    names: ["valerio", "mamma", "davide", "francesco", "papa"] 
  },
  {
    image: "img_263",
    names: ["valerio"]
  },
  {
    image: "img_266",
    names: ["valerio", "mamma","papa"] 
  },
  {
    image: "img_269",
    names: ["valerio", "mamma","papa"] 
  },
  {
    image: "img_270",
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
      //show alternative image 
    }

    const basePreviewPath = '/personal/laurea/photos/webBig/';
    const baseBigPath = '/personal/laurea/photos/webBig/';
  
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
          slideshowInterval = setInterval(() => {
            imageCards[index].classList.remove('active');
            index = (index + 1) % imageCards.length;
            imageCards[index].classList.add('active');
          }, 3000);
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
  document.getElementById('downloadPersonal').addEventListener('click', (e) => {
    e.preventDefault();

    const fotoElements = document.querySelectorAll('#personalGallery .foto');

    const selectedImages = Array.from(fotoElements).map(e => e.id)

    if (selectedImages.length === 0) {
      alert('Seleziona almeno una immagine');
      return;
    }

    fetch('/image/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imagesId: selectedImages })
    })
    .then(response => response.blob())
    .then(blob => {
      // Crea un link temporaneo per il download del file ZIP
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'images.zip';
      link.click();
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Errore durante il download:', error);
    });
  });


  window.addEventListener('load', () => {
    const banner = document.getElementById('topBanner');
  
    setTimeout(() => {
      banner.classList.add('shrink');
  
      // Dopo l'animazione (es: 1000ms), cambia in sticky
      setTimeout(() => {
        banner.classList.remove('shrink');
        banner.classList.add('final');
      }, 1000); // deve combaciare con `transition: 1s`
    }, 2000); // aspetta 2 secondi prima di iniziare l'animazione
  });