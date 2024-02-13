import { body } from '../templates/body.ts'

function renderSite() {
    document.body.outerHTML = body
}
renderSite()
export { renderSite }