import './cardTemplate.css'
import cameraImage from './CardTemplate_img/camera.png'
import heartImage from './CardTemplate_img/heart.png'

export const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
    <div class="info">
        <div class="save-btn">
            <button>
            <img src="${cameraImage}" alt="guardado" />
            </button>
            <button>
            <img src="${heartImage}" alt="meGustas" className="heart"/>
            </button>
        </div>

        <div class="links">
    <a href="${item.links.html}" class="full-link button-style">Visitar</a>

        </div>
    </div>
    </li>
    `
}
