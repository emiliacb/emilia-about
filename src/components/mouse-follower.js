/* Dependencies */
import { html, render } from 'lit-html';
import { styleMap } from 'lit/directives/style-map.js';
import anime from 'animejs';
import _ from 'lodash';

class MouseFollower extends HTMLElement {
  constructor() {
    super();
    this.x = window && window.innerWidth / 2;
    this.y = window && window.innerHeight / 2;
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
      <svg
        style=${styleMap(this.stylesOutside)}
        width="186"
        height="200"
        viewBox="0 0 186 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mouse-follower__outside z-50	fixed transition-all ease-out duration-200 pointer-events-none animate-pulse"
      >
        <path
          d="M185.5 100C185.5 127.527 177.831 152.408 163.322 170.397C148.821 188.374 127.465 199.5 100 199.5C45.0477 199.5 0.5 154.952 0.5 100C0.5 45.0477 45.0477 0.5 100 0.5C127.465 0.5 148.821 11.6259 163.322 29.6032C177.831 47.5921 185.5 72.4734 185.5 100Z"
          stroke="currentColor"
        />
      </svg>

      <div
        style=${styleMap(this.stylesDot)}
        class="fixed z-50	rounded-full bg-stone-300 transition-all ease-out duration-100 mix-blend-difference pointer-events-none ${this.scrolling ? 'animate-ping' : ''}"
      ></div>
    `;
  }

  connectedCallback() {
    render(this.template, this);

    window.onmousemove = _.throttle((e) => {
      const { clientX: x, clientY: y } = e;
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

    window.onscroll = _.throttle(() => {
      this.scrolling = true;
      this.x = this.lastX;
      this.y = this.lastY;
      render(this.template, this);
    }, 50);

    anime({
      targets: '.mouse-follower__outside path',
      d: [
        {
          value: [
            `M186.5 100C186.5 154.952 141.952 199.5 87 199.5C59.5347 199.5 38.0527 188.374 23.4272 170.395C8.79286 152.406 1 127.525 
            1 100C1 72.4753 8.79286 47.5942 23.4272 29.6049C38.0527 11.6263 59.5347 0.5 87 0.5C141.952 0.5 186.5 45.0477 186.5 100Z`,
          ],
        },
      ],
      easing: 'linear',
      duration: anime.random(600, 2000),
      loop: true,
      direction: 'alternate',
      update: () => render(this.template, this),
    });

    anime({
      targets: '.mouse-follower__outside',
      easing: 'linear',
      duration: 300,
      direction: 'alternate',
      loop: true,
      keyframes: [
        {
          rotate: -1000,
        },
        {
          rotate: 1000,
        },
      ],
    });
  }
}

customElements.define('mouse-follower-wc', MouseFollower);
