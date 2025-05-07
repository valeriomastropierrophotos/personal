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
  "1": "giovanni",
  "2": "claudio",
  "3": "jhon",
  // ...
  "30": "Francesca"
};



const imagePeopleTag = [
  {
    image: "img_12",
    names: ["turturro"]
  },
  {
    image: "img_13",
    names: ["erica", "mmw", "adriana"]
  },
  {
    image: "img_14",
    names: ["erica", "mmw", "adriana"]
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