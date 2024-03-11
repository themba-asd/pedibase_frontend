import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', withPrototype(ipcRenderer))

// `exposeInMainWorld` can't detect attributes and methods of `prototype`, manually patching it.
function withPrototype(obj: Record<string, any>) {
  const protos = Object.getPrototypeOf(obj)

  for (const [key, value] of Object.entries(protos)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) continue

    if (typeof value === 'function') {
      // Some native APIs, like `NodeJS.EventEmitter['on']`, don't work in the Renderer process. Wrapping them into a function.
      obj[key] = function (...args: any) {
        return value.call(obj, ...args)
      }
    } else {
      obj[key] = value
    }
  }
  return obj
}

// --------- Preload scripts loading ---------
function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      return parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      return parent.removeChild(child)
    }
  },
}

function useLoading() {
  const className = `main`
  const styleContent = `

  @keyframes hori {
    25% {  
      transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {  
      transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {  
      transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% { 
      transform: perspective(100px) rotateX(0) rotateY(0);
    }
  }

  .${className} h1 {
    color: #ffffff;
    padding: 10px;
    font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    animation: hori 4s 0s infinite;
  }
  
  .app-loading-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #282c34;
    z-index: 9;
  }
      `
  const styleTag = document.createElement('style')
  const divTag = document.createElement('div')

  styleTag.id = 'app-loading-style'
  styleTag.innerHTML = styleContent
  divTag.className = 'app-loading-wrap'
  divTag.innerHTML = `<div class="${className}"><div><h1>Pedibase</h1></div></div>`

  return {
    appendLoading() {
      safeDOM.append(document.head, styleTag)
      safeDOM.append(document.body, divTag)
    },
    removeLoading() {
      safeDOM.remove(document.head, styleTag)
      safeDOM.remove(document.body, divTag)
    },
  }
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = (ev) => {
  ev.data.payload === 'removeLoading' && removeLoading()
}

setTimeout(removeLoading, 4999)
