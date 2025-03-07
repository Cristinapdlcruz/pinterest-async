import './Gallery.css'
import { searchPhotos } from '../api/unsplash'
import { cardTemplate } from '../Templates/cardTemplate'

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''

  if (items.length === 0) {
    gallery.innerHTML =
      '<p>No se han encontrado imágenes. Mostrando resultados de "gatos".</p>'
    searchPhotos('gatos').then((res) => {
      printItems(res.response.results)
    })
    return
  }

  for (const item of items) {
    gallery.innerHTML += cardTemplate(item)
  }
}

const galleryListeners = () => {
  const searchForm = document.querySelector('form')

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const input = searchForm.querySelector('.search-input')
    const images = await searchPhotos(input.value)
    printItems(images.response.results)
  })
}

export const printGallery = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()

  const images = await searchPhotos('moon')
  printItems(images.response.results)
}
