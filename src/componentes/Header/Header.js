import { arrayHeader, arrayUser } from '../../data/HeaderArray'
import '../Header/Header.css'

export const header = () => {
  const headerHTML = document.querySelector('header')
  const logo = document.createElement('img')
  logo.src = new URL('../Header/Header_img/logo.png', import.meta.url)
  logo.alt = 'Logo'
  logo.className = 'pinterest'
  headerHTML.append(logo)

  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  headerHTML.append(nav)
  nav.append(ul)
  ul.className = 'list'

  for (const enlace of arrayHeader) {
    const option = document.createElement('li')
    const enlaces = document.createElement('a')
    enlaces.href = enlace.href
    enlaces.textContent = enlace.text
    enlaces.className = 'enlace'
    ul.append(option)
    option.append(enlaces)
  }

  const searchForm = document.createElement('form')
  const searchInput = document.createElement('input')
  const imgInput = document.createElement('img')
  const searchButton = document.createElement('button')

  searchInput.type = 'text'
  searchInput.placeholder = 'Buscar'
  searchInput.className = 'search-input'
  imgInput.src = new URL('../Header/Header_img/lupa.png', import.meta.url)
  imgInput.alt = 'lupa'
  imgInput.className = 'lupa'

  searchForm.append(searchInput)
  searchForm.append(imgInput)
  headerHTML.append(searchForm)

  const headerUser = document.querySelector('header')
  const navUser = document.createElement('nav')
  const ulUser = document.createElement('ul')
  headerUser.append(navUser)
  navUser.append(ulUser)
  ulUser.className = 'list'

  for (const user of arrayUser) {
    const optionUser = document.createElement('li')
    const enlaceUser = document.createElement('a')
    const imgUser = document.createElement('img')

    imgUser.src = new URL(user.img, import.meta.url)
    imgUser.alt = 'icon'
    imgUser.className = 'enlace-user'
    enlaceUser.href = user.href

    enlaceUser.appendChild(imgUser)
    optionUser.append(enlaceUser)
    ulUser.append(optionUser)
  }
}
