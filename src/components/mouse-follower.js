/* Dependencies */
import { html, render } from 'lit-html';
import { styleMap } from 'lit/directives/style-map.js';
import _ from 'lodash';

class MouseFollower extends HTMLElement {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.h = 70;
    this.w = 70;
    this.lastX = 0;
    this.lastY = 0;
    this.clicking = false;
    this.scrolling = false;
    this.className = 'mouse-follower hidden md:block motion-reduce:hidden';
  }

  get stylesOutside() {
    return {
      left: this.x - this.w / 2 + 'px',
      top: this.y - this.h / 2 + 'px',
      width: this.w + 'px',
      height: this.h + 'px',
    };
  }

  get stylesDot() {
    return {
      left: (this.clicking ? this.x - this.w / 6 : this.x - 4) + 'px',
      top: (this.clicking ? this.y - this.h / 6 : this.y - 4) + 'px',
      width: (this.clicking ? this.w / 3 : 8) + 'px',
      height: (this.clicking ? this.h / 3 : 8) + 'px',
    };
  }

  get template() {
    return html`
      <div
        style=${styleMap(this.stylesOutside)}
        class="fixed rounded-full border border-stone-300 transition-all ease-in duration-200 mix-blend-difference pointer-events-none"
      ></div>
      <div
        style=${styleMap(this.stylesDot)}
        class="fixed rounded-full bg-stone-300 transition-all ease-out duration-100 mix-blend-difference pointer-events-none"
      ></div>
    `;
  }

  connectedCallback() {
    render(this.template, this);

    window.onmousemove = _.throttle((e) => {
      const { clientX: x, clientY: y } = e;
      console.log(e);
      this.scrolling = false;
      this.x = x;
      this.y = y;
      this.lastX = x;
      this.lastY = y;
      render(this.template, this);
    }, 50);

    window.onmousedown = () => {
      this.clicking = true;
      render(this.template, this);
    };

    window.onmouseup = () => {
      this.clicking = false;
      render(this.template, this);
    };

    window.onscroll = () => {
      this.scrolling = true;
      this.x = this.lastX;
      this.y = this.lastY;
      render(this.template, this);
    };
  }
}

customElements.define('mouse-follower-wc', MouseFollower);
