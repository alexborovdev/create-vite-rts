import { useState } from 'react'
import viteLogo from '@/app/vite-default/vite.svg'
import reactLogo from '@/app/vite-default/react.svg'

const ViteDefault = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <a
        className="github"
        href="https://github.com/alexborovdev/create-vite-rts"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository <code>create-vite-rts</code>
      </a>
      <p>
        Edit <code>src/widgets/vite-default/ui/ViteDefault.tsx</code> and save to test HMR
      </p>
      <p className="docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <div className="next-steps">
        <h3>Next steps</h3>
        <ol>
          <li>
            Delete folder <code>src/app/vite-default</code>
          </li>
          <li>
            Delete folder <code>src/widgets/vite-default</code>
          </li>
          <li>
            Remove <i>import ViteDefault from '@/widgets/vite-default'</i> in <code>src/pages/home-page/ui/HomePage.tsx</code>
          </li>
          <li>
            In <code>src/main.tsx</code>:
            <ul>
              <li>Remove <i>import '@/app/vite-default/main.scss'</i></li>
              <li>Uncomment <i>import '@/app/styles/main.scss'</i></li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  )
}

export default ViteDefault