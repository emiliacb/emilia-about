import { render } from 'lit-html'

const createComponent = (name) => (template) => {
  class ClassComponent extends HTMLElement {
    constructor() {
      super()

      this.useAttributes = this.useAttributes.bind(this)
    }

    _isIsolated() {
      const isolatedAttr = this.getAttributeNode('isolated')
      if (!isolatedAttr) return false
      return typeof isolatedAttr.value === Boolean ? isolatedAttr.value : isolatedAttr.specified
    }

    useAttribute(name) {
      return this.getAttributeNode(name)
    }

    useProperty(name) {
      return this[name]
    }

    get _props() {
      return {
        useAttribute: this.useAttribute,
        useProperty: this.useProperty,
        element: this,
      }
    }

    _observerAtributes() {
      new MutationObserver((mutations) => {
        const mutationTypes = mutations.map(({ type }) => type)
        if (mutationTypes.some('attributes')) this._renderElement()
      }).observe(this, { attributes: true })
    }

    _renderElement() {
      render(template(this._props), this._isIsolated() ? this.shadowRoot : this)
    }

    connectedCallback() {
      this._renderElement()
    }
  }

  customElements.define(name, ClassComponent)
}

export { createComponent }
